'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
    {
        id: 1,
        title: 'Grow With Me',
        category: 'Web Application',
        description: 'AI Powered Co-Founder Finding Platform for Founders to build a start-up companies',
        image: process.env.NEXT_PUBLIC_PROJECT_1_IMAGE || '',
        link: process.env.NEXT_PUBLIC_PROJECT_1_LINK || '#',
    },
    {
        id: 2,
        title: 'Flick Control',
        category: 'IOT Home Automation',
        description: 'A Gesture Controlled Home Automation using Opencv in Python',
        image: process.env.NEXT_PUBLIC_PROJECT_2_IMAGE || '',
        link: process.env.NEXT_PUBLIC_PROJECT_2_LINK || '#',
    },
    {
        id: 3,
        title: 'Student Result Management System',
        category: 'Web Application',
        description: 'A Student Result Management System using PHP and MySQL',
        image: process.env.NEXT_PUBLIC_PROJECT_3_IMAGE || '',
        link: process.env.NEXT_PUBLIC_PROJECT_3_LINK || '#',
    }
];

export default function Projects() {
    return (
        <section className="relative z-20 w-full min-h-screen bg-[#121212] pt-24 pb-32 px-4 md:px-12 lg:px-24 border-t border-white/5">

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-16 md:mb-24"
            >
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4">
                    Projects I’ve Built
                </h2>
                <div className="h-[2px] w-12 bg-white/20" />
            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                        className="group relative flex flex-col justify-end h-[400px] md:h-[500px] rounded-2xl overflow-hidden cursor-pointer"
                    >
                        {/* Background Image using Standard img for instant bypass of Next config cache */}
                        <div className="absolute inset-0 transition-transform duration-700 ease-in-out lg:group-hover:scale-105">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="object-cover w-full h-full brightness-[0.4] lg:brightness-[0.7] lg:group-hover:brightness-[0.4] transition-all duration-500"
                            />
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

                            <p className="text-sm text-white/70 mt-4 leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* View More Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                className="mt-16 md:mt-24 flex justify-center"
            >
                <a
                    href={process.env.NEXT_PUBLIC_VIEW_ALL_PROJECTS_LINK || 'https://github.com/Namith-kp'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-medium text-lg rounded-full hover:bg-white/90 hover:scale-105 transition-all duration-300"
                >
                    View All Projects
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
            </motion.div>

        </section>
    );
}
