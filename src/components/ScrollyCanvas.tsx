'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';

const FRAME_COUNT = 192;

export default function ScrollyCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(FRAME_COUNT).fill(null));
    const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);
    const currentFrameIndex = useRef(0);

    // Scroll Progress (0 to 1) from the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Load images on mount
    useEffect(() => {
        const loadImages = async () => {
            // 1. Load the very first frame immediately and await it
            const firstImg = new Image();
            firstImg.src = `/sequence/frame_000_delay-0.041s.png`;

            await new Promise((resolve) => {
                firstImg.onload = () => resolve(firstImg);
                firstImg.onerror = () => resolve(null);
            });

            imagesRef.current[0] = firstImg;
            setFirstFrameLoaded(true);

            // 2. Load the rest in the background concurrently (no await!)
            for (let i = 1; i < FRAME_COUNT; i++) {
                const img = new Image();
                const frameNum = i.toString().padStart(3, '0');
                img.src = `/sequence/frame_${frameNum}_delay-0.041s.png`;

                img.onload = () => {
                    imagesRef.current[i] = img;
                    // If the user is currently looking at this frame but it was previously missing, draw it now.
                    if (i === currentFrameIndex.current) {
                        requestAnimationFrame(() => drawFrame(i));
                    }
                };
            }
        };

        loadImages();
    }, []);

    // initial draw
    useEffect(() => {
        if (firstFrameLoaded && canvasRef.current) {
            drawFrame(0);
        }
    }, [firstFrameLoaded]);


    // Scrub through frames on scroll
    useEffect(() => {
        if (!firstFrameLoaded) return;

        const unsubscribe = scrollYProgress.on('change', (latest) => {
            // Calculate which frame to show
            const frameIndex = Math.min(
                FRAME_COUNT - 1,
                Math.floor(latest * FRAME_COUNT)
            );

            currentFrameIndex.current = frameIndex;
            requestAnimationFrame(() => drawFrame(frameIndex));
        });

        return () => unsubscribe();
    }, [scrollYProgress, firstFrameLoaded]);

    const drawFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let img = imagesRef.current[index];

        // Progressive Loading Fallback: If exact frame isn't loaded yet, find the closest loaded frame.
        if (!img) {
            let closestDist = Infinity;
            let closestImg = null;
            for (let i = 0; i < FRAME_COUNT; i++) {
                if (imagesRef.current[i]) {
                    const dist = Math.abs(i - index);
                    if (dist < closestDist) {
                        closestDist = dist;
                        closestImg = imagesRef.current[i];
                    }
                }
            }
            img = closestImg;
        }

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
    }, [firstFrameLoaded, scrollYProgress])

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
                {!firstFrameLoaded && (
                    <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#121212] flex-col gap-4">
                        <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                        <p className="text-white/60 text-sm tracking-widest uppercase">Loading Portfolio</p>
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
