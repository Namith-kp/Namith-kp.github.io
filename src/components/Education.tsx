'use client';

import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
    {
        id: 1,
        degree: 'Bachelor of Information Science and Engineering',
        institution: 'Sai Vidya Institute of Technology, Bangalore',
        duration: '2022 - 2026',
        description: 'Focused on UI/UX Designing, Web Development and Computer Networking.',
    },
    {
        id: 2,
        degree: 'Pre University Course in Computer Science (PCMCs)',
        institution: 'Shree Vani Pre-University College, Bangalore',
        duration: '2020 - 2022',
        description: 'Focused on Physics, Chemistry, Mathematics and Computer Science.',
    }
];

export default function Education() {
    return (
        <section className="relative z-20 w-full bg-[#121212] py-24 px-4 md:px-12 lg:px-24 border-t border-white/5">

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-16 md:mb-24"
            >
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4">
                    Education
                </h2>
                <div className="h-[2px] w-12 bg-white/20" />
            </motion.div>

            {/* Timeline */}
            <div className="relative border-l border-white/10 ml-4 md:ml-8">
                {educationData.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                        className="mb-16 last:mb-0 pl-8 md:pl-12 relative"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute w-4 h-4 bg-[#121212] border-2 border-white rounded-full -left-2.5 top-2" />

                        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                            <h3 className="text-2xl md:text-3xl font-semibold">{item.degree}</h3>
                            <span className="text-sm md:text-base font-mono text-white/50 bg-white/5 px-3 py-1 rounded-full whitespace-nowrap w-fit">
                                {item.duration}
                            </span>
                        </div>

                        <h4 className="text-xl text-white/80 mb-4 font-light tracking-wide">{item.institution}</h4>
                        <p className="text-base text-white/60 leading-relaxed max-w-3xl">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>

        </section>
    );
}
