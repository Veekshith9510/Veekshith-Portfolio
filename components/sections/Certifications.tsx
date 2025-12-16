"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";

/**
 * Certifications section component.
 * Lists professional certifications and awards.
 */
export function Certifications() {
    return (
        <section id="certifications" className="py-20 bg-secondary/30">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Certifications</h2>
                    <p className="text-lg text-muted-foreground">
                        Continuous learning and professional development
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {DATA.certifications.map((cert, index) => (
                        <motion.div
                            key={cert.name}
                            initial={{ opacity: 1, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-center gap-4 p-6 bg-background border border-border rounded-xl shadow-sm"
                        >
                            <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-full text-yellow-600 dark:text-yellow-400">
                                <Award className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-foreground">{cert.name}</h3>
                                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
