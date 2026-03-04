'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Youtube } from 'lucide-react';

export default function Contact() {
    return (
        <section className="relative z-20 w-full min-h-[70vh] flex flex-col justify-center bg-[#121212] py-24 px-4 md:px-12 lg:px-24 border-t border-white/5">

            {/* Container */}
            <div className="max-w-4xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-6">
                        Let's Build<br />Something.
                    </h2>
                    <p className="text-xl md:text-2xl text-white/50 max-w-xl font-light">
                        Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                {/* Action Button and Socials */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    className="mb-24 flex flex-col sm:flex-row items-start sm:items-center gap-8"
                >
                    <a
                        href="mailto:work.kpnamith@gmail.com"
                        className="inline-block px-8 py-4 bg-white text-black font-medium text-lg rounded-full hover:bg-white/90 hover:scale-105 transition-all duration-300"
                    >
                        Say Hello
                    </a>

                    <div className="flex gap-6">
                        <a href="https://github.com/Namith-kp" className="text-white/40 hover:text-white transition-colors">
                            <span className="sr-only">GitHub</span>
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com/in/namith-kp" className="text-white/40 hover:text-white transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin size={24} />
                        </a>
                        <a href="https://www.youtube.com/@_robastic?sub_confirmation=1" className="text-white/40 hover:text-white transition-colors">
                            <span className="sr-only">YouTube</span>
                            <Youtube size={24} />
                        </a>
                        <a href="mailto:work.kpnamith@gmail.com" className="text-white/40 hover:text-white transition-colors">
                            <span className="sr-only">Email</span>
                            <Mail size={24} />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Footer */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="mt-auto w-full pt-12 border-t border-white/10 flex justify-center items-center"
            >
                <p className="text-white/40 text-sm">
                    &copy; {new Date().getFullYear()} Namith K P. All rights reserved.
                </p>
            </motion.div>

        </section>
    );
}
