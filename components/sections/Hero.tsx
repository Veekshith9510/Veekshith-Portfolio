"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal } from "lucide-react";
import Link from "next/link";
import { DATA } from "@/lib/data";

/**
 * Hero section component.
 * Displays the main introduction, role, and call-to-action buttons.
 * Uses framed-motion for entrance animations.
 */
export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
            <div className="absolute inset-0 z-0 bg-background">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6"
                >
                    <Terminal className="w-4 h-4" />
                    <span>Permanent Resident of Canada • Open for New Opportunities</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
                >
                    Building Scalable <br className="hidden md:block" />
                    <span className="text-blue-600">Fintech Solutions</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
                >
                    Full-Stack Java Developer specializing in banking, microservices, and high-performance enterprise systems.
                </motion.p>

                <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Link
                        href="#projects"
                        className="inline-flex items-center justify-center h-12 px-6 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors gap-2"
                    >
                        View Projects
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                        href="/resume"
                        target="_blank"
                        className="inline-flex items-center justify-center h-12 px-6 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground font-medium transition-colors gap-2"
                    >
                        View / Download Resume
                        <Download className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
