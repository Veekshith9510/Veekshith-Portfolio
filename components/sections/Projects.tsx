"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

/**
 * Projects section component.
 * Showcases featured projects with descriptions and tech stack tags.
 */
export function Projects() {
    return (
        <section id="projects" className="py-20 bg-background">
            <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Featured Projects</h2>
                    <p className="text-lg text-muted-foreground">
                        Highlighting expertise in AI, Cloud, and Full-Stack Development
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {DATA.projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 1, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all"
                        >
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-2xl font-bold text-card-foreground group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    {/* Links could go here if they exist in data, handled conditionally */}
                                </div>

                                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full border border-blue-100 dark:border-blue-800">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
