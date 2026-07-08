'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Code2, Server, Database, Wrench, Cpu, Globe } from 'lucide-react';

const skillCategories = [
    {
        title: "Frontend",
        icon: <Code2 className="w-6 h-6" />,
        skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5/CSS3"]
    },
    {
        title: "Backend",
        icon: <Server className="w-6 h-6" />,
        skills: ["Node.js", "Express.js", "Python", "PHP", "RESTful APIs"]
    },
    {
        title: "Database",
        icon: <Database className="w-6 h-6" />,
        skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"]
    },
    {
        title: "Tools & DevOps",
        icon: <Wrench className="w-6 h-6" />,
        skills: ["Git & GitHub", "Docker", "AWS", "Vercel", "Linux", "Postman"]
    },
    {
        title: "Core Concepts",
        icon: <Globe className="w-6 h-6" />,
        skills: ["Data Structures", "Algorithms", "Object-Oriented Programming", "System Design"]
    },
    {
        title: "Other Tech",
        icon: <Cpu className="w-6 h-6" />,
        skills: ["OpenCV", "C/C++", "Java", "Machine Learning Basics"]
    }
];

export default function Skills() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="relative z-20 w-full bg-[#121212] py-24 md:py-32 px-4 md:px-12 lg:px-24 border-t border-white/5 overflow-hidden">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 blur-[120px] rounded-full pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
            
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-16 md:mb-24 relative z-10"
            >
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4 text-white">
                    Skills & Tech
                </h2>
                <div className="h-[2px] w-12 bg-white/20" />
            </motion.div>

            {/* Skills Grid */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10"
            >
                {skillCategories.map((category, index) => (
                    <motion.div 
                        key={index}
                        variants={itemVariants}
                        className="group relative p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden"
                    >
                        {/* Inner subtle glow on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold text-white">
                                    {category.title}
                                </h3>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIdx) => (
                                    <span 
                                        key={skillIdx}
                                        className="px-3 py-1.5 text-sm md:text-base bg-[#1a1a1a] border border-white/10 rounded-full text-white/70 group-hover:text-white group-hover:border-white/30 transition-all duration-300 shadow-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

        </section>
    );
}
