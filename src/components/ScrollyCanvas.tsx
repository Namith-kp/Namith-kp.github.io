'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';

const FRAME_COUNT = 192;

export default function ScrollyCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    // Scroll Progress (0 to 1) from the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Load images on mount
    useEffect(() => {
        const loadImages = async () => {
            const promises: Promise<HTMLImageElement | null>[] = [];

            for (let i = 0; i < FRAME_COUNT; i++) {
                const promise = new Promise<HTMLImageElement | null>((resolve) => {
                    const img = new Image();
                    const frameNum = i.toString().padStart(3, '0');
                    img.src = `/sequence/frame_${frameNum}_delay-0.041s.webp`;

                    img.onload = () => resolve(img);
                    img.onerror = () => {
                        console.error(`Failed to load image index ${i}`);
                        resolve(null); // Continue even if one fails
                    };
                });
                promises.push(promise);
            }

            const results = await Promise.all(promises);
            const loadedImages = results.filter((img): img is HTMLImageElement => img !== null);

            setImages(loadedImages);
            setImagesLoaded(true);
        };

        loadImages();
    }, []);

    // initial draw
    useEffect(() => {
        if (imagesLoaded && images.length > 0 && canvasRef.current) {
            drawFrame(0);
        }
    }, [imagesLoaded]);


    // Scrub through frames on scroll
    useEffect(() => {
        if (!imagesLoaded || images.length === 0) return;

        const unsubscribe = scrollYProgress.on('change', (latest) => {
            // Calculate which frame to show
            const frameIndex = Math.min(
                FRAME_COUNT - 1,
                Math.floor(latest * FRAME_COUNT)
            );

            requestAnimationFrame(() => drawFrame(frameIndex));
        });

        return () => unsubscribe();
    }, [scrollYProgress, imagesLoaded, images]);

    const drawFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = images[index];
        if (!img) return;

        // Object-fit: cover mathematics
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;

        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let offsetX = 0;
        let offsetY = 0;

        if (canvasRatio > imgRatio) {
            drawHeight = canvas.width / imgRatio;
            offsetY = (canvas.height - drawHeight) / 2;
        } else {
            drawWidth = canvas.height * imgRatio;
            offsetX = (canvas.width - drawWidth) / 2;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Add dark background so it blends smoothly if images have weird edges
        ctx.fillStyle = "#121212";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Re-draw on window resize
    useEffect(() => {
        const handleResize = () => {
            const canvas = canvasRef.current;
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }

            const latest = scrollYProgress.get();
            const frameIndex = Math.min(
                FRAME_COUNT - 1,
                Math.floor(latest * FRAME_COUNT)
            );
            drawFrame(frameIndex);
        }

        // Call once to set initial size
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [imagesLoaded, scrollYProgress])

    // Parallax Text Animations mapped to scroll progress

    // Section 1: Intro (scroll 0 to 0.2)
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

    // Section 2: Statement (scroll 0.2 to 0.5)
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.2, 0.5], [100, -100]);

    // Section 3: Value (scroll 0.5 to 0.9)
    const opacity3 = useTransform(scrollYProgress, [0.5, 0.7, 0.8, 0.9], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.5, 0.9], [100, -100]);

    return (
        <div ref={containerRef} className="relative w-full h-[500vh]">
            <div className="sticky top-0 w-full h-screen overflow-hidden">

                {/* The Frame Sequence Canvas */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Loading State Overlay */}
                {!imagesLoaded && (
                    <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#121212] flex-col gap-4">
                        <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                        <p className="text-white/60 text-sm tracking-widest uppercase">Loading Experience</p>
                    </div>
                )}

                {/* Overlay Content (Parallax Sections) */}
                <div className="absolute inset-0 z-10 pointer-events-none">

                    {/* Section 1 */}
                    <motion.div
                        style={{ opacity: opacity1, y: y1 }}
                        className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center px-4"
                    >
                        <h1 className="text-5xl md:text-6xl font-manrope font-bold tracking-tight mb-4 drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                            Namith K P
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] mt-2">
                            Engineering Student & Web Developer
                        </p>
                    </motion.div>

                    {/* Section 2 */}
                    <motion.div
                        style={{ opacity: opacity2, y: y2 }}
                        className="absolute left-8 md:left-24 top-1/2 -translate-y-1/2 max-w-xl"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                            Hi, I’m a Computer Science Engineering Student.
                        </h2>
                        <div className="h-1 w-24 bg-white/50 rounded" />
                    </motion.div>

                    {/* Section 3 */}
                    <motion.div
                        style={{ opacity: opacity3, y: y3 }}
                        className="absolute right-8 md:right-24 top-1/2 -translate-y-1/2 max-w-xl text-right"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                            I’ve Built 15+ Projects so far.
                        </h2>
                        <div className="h-1 w-24 bg-white/50 rounded ml-auto" />
                    </motion.div>

                </div>

            </div>
        </div>
    );
}
