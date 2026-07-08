'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'Grow With Me',
        category: 'Web Application',
        description: 'AI Powered Co-Founder Finding Platform for Founders to build a start-up companies',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=75&w=800&auto=format&fit=crop',
        link: 'https://github.com/Namith-kp/Grow-With-Me-AI',
    },
    {
        id: 2,
        title: 'Flick Control',
        category: 'IOT Home Automation',
        description: 'A Gesture Controlled Home Automation using Opencv in Python',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=75&w=800&auto=format&fit=crop',
        link: 'https://github.com/Namith-kp/Flick-Control',
    },
    {
        id: 3,
        title: 'Student Result Management System',
        category: 'Web Application',
        description: 'A Student Result Management System using PHP and MySQL',
        image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=75&w=800&auto=format&fit=crop',
        link: 'https://github.com/Namith-kp/Student-Result-Portal',
    },
    {
        id: 4,
        title: 'Rosetta',
        category: 'Web Application',
        description: 'Rosetta is an intelligent database interaction platform. It bridges the gap between raw MySQL data and non-technical users by allowing them to query, visualize, and manipulate data using conversational natural language.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=75&w=800&auto=format&fit=crop',
        link: 'https://github.com/Namith-kp/Rosetta',
    },
    {
        id: 5,
        title: 'Offline AI Legal Assistant',
        category: 'Web Application',
        description: 'An offline AI legal assistant for the Bharatiya Nyaya Sanhita (BNS) 2023. Built using a local RAG pipeline, FastAPI, and ChromaDB, featuring a modern web UI with live pipeline inspection.',
        image: 'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?q=75&w=800&auto=format&fit=crop',
        link: 'https://github.com/Namith-kp/bns-rag-assistant',
    }
];

export default function Projects() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showIndicator, setShowIndicator] = useState(true);

    const handleScroll = () => {
        if (!scrollContainerRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        // Hide indicator if scrolled near the end
        if (scrollLeft + clientWidth >= scrollWidth - 50) {
            setShowIndicator(false);
        } else {
            setShowIndicator(true);
        }
    };

    useEffect(() => {
        // Initial check in case it fits on screen (unlikely for 5 items, but good practice)
        handleScroll();
        window.addEventListener('resize', handleScroll);
        return () => window.removeEventListener('resize', handleScroll);
    }, []);

    return (
        <section className="relative z-20 w-full min-h-screen bg-[#121212] pt-24 pb-32 border-t border-white/5 overflow-hidden">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-12 md:mb-20 px-4 md:px-12 lg:px-24"
            >
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4">
                    Projects I’ve Built
                </h2>
                <div className="h-[2px] w-12 bg-white/20" />
            </motion.div>

            {/* Horizontal Scroll Container Wrapper */}
            <div className="relative w-full">
                
                {/* Scroll Indicator Overlay */}
                <AnimatePresence>
                    {showIndicator && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="pointer-events-none absolute top-0 right-0 h-[calc(100%-3rem)] w-24 md:w-48 lg:w-64 bg-gradient-to-l from-[#121212] via-[#121212]/60 to-transparent z-30 flex items-center justify-end pr-4 md:pr-8 lg:pr-12"
                        >
                            <motion.div 
                                animate={{ x: [0, 10, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white shadow-lg"
                            >
                                <ArrowRight size={24} />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div 
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 pb-12 px-4 md:px-12 lg:px-24 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative z-20"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                            className="group relative flex flex-col justify-end w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[450px] shrink-0 snap-center h-[450px] md:h-[550px] rounded-2xl overflow-hidden cursor-pointer"
                        >
                            {/* Background Image using Standard img for instant bypass of Next config cache */}
                            <div className="absolute inset-0 transition-transform duration-700 ease-in-out lg:group-hover:scale-105">
                                {project.image ? (
                                    /* eslint-disable-next-line @next/next/no-img-element */
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="object-cover w-full h-full brightness-[0.4] lg:brightness-[0.7] lg:group-hover:brightness-[0.4] transition-all duration-500 bg-white/5"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-white/5 border border-white/10" />
                                )}
                            </div>

                            {/* Glassmorphism Overlay mapping hover state strictly on lg+ devices */}
                            <div className="absolute inset-x-4 bottom-4 md:inset-x-6 md:bottom-6 p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 translate-y-0 opacity-100 lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500 ease-out z-10">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-semibold mb-1 pr-4">{project.title}</h3>
                                        <span className="text-xs uppercase tracking-widest text-white/50 font-medium">{project.category}</span>
                                    </div>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 shrink-0 min-w-[40px] rounded-full bg-white text-black flex items-center justify-center rotate-0 lg:-rotate-45 lg:group-hover:rotate-0 transition-transform duration-500 hover:bg-gray-200"
                                    >
                                        <ArrowUpRight size={20} />
                                    </a>
                                </div>

                                <p className="text-sm text-white/70 mt-4 leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                    {/* View More Button Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className="group relative w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[450px] shrink-0 snap-center h-[450px] md:h-[550px] rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-500 cursor-pointer overflow-hidden"
                    >
                        <a
                            href={'https://github.com/Namith-kp?tab=repositories'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8 text-center z-10"
                        >
                            <div className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-500">
                                <ArrowRight size={40} className="group-hover:translate-x-2 transition-transform duration-500" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold tracking-tight mb-2">View All Projects</h3>
                                <p className="text-white/60">Explore my complete portfolio on GitHub</p>
                            </div>
                        </a>
                    </motion.div>
                    
                    {/* Safe padding spacer for the end of the scroll container */}
                    <div className="shrink-0 w-1 md:w-4 lg:w-12" />
                </div>
            </div>
        </section>
    );
}
