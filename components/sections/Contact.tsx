"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import Link from "next/link";

/**
 * Contact section component.
 * Provides multiple ways to get in touch (Email, LinkedIn, GitHub).
 */
export function Contact() {
    return (
        <section id="contact" className="py-20 bg-background">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Get In Touch</h2>
                    <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                        I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Link
                            href={`mailto:${DATA.personal.email}`}
                            className="flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity w-full md:w-auto justify-center"
                        >
                            <Mail className="w-5 h-5" />
                            <span>Send me an email</span>
                        </Link>

                        <Link
                            href={DATA.personal.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-slate-800 text-foreground border border-border rounded-full font-medium hover:bg-secondary transition-colors w-full md:w-auto justify-center"
                        >
                            <Linkedin className="w-5 h-5 text-[#0077b5]" />
                            <span>LinkedIn</span>
                        </Link>

                        <Link
                            href={DATA.personal.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-slate-800 text-foreground border border-border rounded-full font-medium hover:bg-secondary transition-colors w-full md:w-auto justify-center"
                        >
                            <Github className="w-5 h-5" />
                            <span>GitHub</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
