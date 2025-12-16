"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import { Building2, Calendar } from "lucide-react";

/**
 * Experience section component.
 * Displays a vertical timeline of professional roles and responsibilities.
 * Iterates over `DATA.experience` to render each job entry.
 */
export function Experience() {
    return (
        <section id="experience" className="py-20 bg-secondary/30">
            <div className="container px-4 md:px-6 max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Professional Experience</h2>
                    <p className="text-lg text-muted-foreground">
                        A track record of delivering high-impact solutions in the financial sector
                    </p>
                </div>

                <div className="relative space-y-12">
                    {/* Vertical Line for Desktop */}
                    <div className="hidden md:block absolute left-9 top-2 bottom-2 w-0.5 bg-border z-0"></div>

                    {DATA.experience.map((job, index) => (
                        <motion.div
                            key={job.company + job.role}
                            initial={{ opacity: 1, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-0 md:pl-24"
                        >
                            {/* Timeline Icon for Desktop */}
                            <div className="hidden md:flex absolute left-0 top-0 w-[4.5rem] h-[4.5rem] bg-background border border-border rounded-full items-center justify-center z-10 shadow-sm">
                                <Building2 className="w-8 h-8 text-blue-600" />
                            </div>

                            <div className="bg-background border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                                        <div className="text-lg font-medium text-blue-600">{job.company}</div>
                                    </div>
                                    <div className="flex items-center text-muted-foreground text-sm font-medium bg-secondary/50 px-3 py-1 rounded-full w-fit">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        {job.period}
                                    </div>
                                </div>

                                <ul className="space-y-2 mt-4">
                                    {job.description.map((item, i) => (
                                        <li key={i} className="flex items-start text-muted-foreground leading-relaxed">
                                            <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
