'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
    {
        id: 1,
        title: 'AI Fundamentals Certification',
        issuer: 'IBM',
        date: '2025',
        link: process.env.NEXT_PUBLIC_CERT_1_LINK || '#',
    },
    {
        id: 2,
        title: 'UNIX & LINUX Certification',
        issuer: 'Infosys Springboard',
        date: '2024',
        link: process.env.NEXT_PUBLIC_CERT_2_LINK || '#',
    },
    {
        id: 3,
        title: 'Basic to Advance Java with DSA',
        issuer: 'Infosys Springboard',
        date: '2024',
        link: process.env.NEXT_PUBLIC_CERT_3_LINK || '#',
    },
    {
        id: 4,
        title: 'Big Data Analytics',
        issuer: 'Infosys Springboard',
        date: '2025',
        link: process.env.NEXT_PUBLIC_CERT_4_LINK || '#',
    }
];

export default function Certifications() {
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
                    Certifications
                </h2>
                <div className="h-[2px] w-12 bg-white/20" />
            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                        className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <div className="mb-4 text-white/40 group-hover:text-white transition-colors duration-300">
                                    <Award size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold mb-2 pr-4">{cert.title}</h3>
                                <p className="text-white/60 mb-6">{cert.issuer}</p>
                            </div>
                            <span className="text-sm font-mono text-white/30 group-hover:text-white/70 transition-colors block">
                                {cert.date}
                            </span>
                        </div>

                        <a
                            href={cert.link}
                            className="inline-flex items-center text-sm font-medium text-white/70 hover:text-white border-b border-transparent hover:border-white transition-all duration-300"
                        >
                            Verify Credential
                        </a>
                    </motion.div>
                ))}
            </div>

        </section>
    );
}
