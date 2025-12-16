"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

/**
 * Skills section component.
 * Renders a grid of technical skills categorized by domain (Frontend, Backend, etc.).
 * Data is sourced from `DATA.skills`.
 */
export function Skills() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <section id="skills" className="py-20 bg-background">
            <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Technical Expertise</h2>
                    <p className="text-lg text-muted-foreground list-none">
                        A comprehensive toolset for building enterprise-grade solutions
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {DATA.skills.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 1, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                                    <category.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-semibold text-card-foreground">
                                    {category.title}
                                </h3>
                            </div>

                            <ul className="space-y-3">
                                {category.skills.map((skill) => (
                                    <li key={skill} className="flex items-center gap-2 text-muted-foreground">
                                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                        <span>{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
