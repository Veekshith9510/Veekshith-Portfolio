"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { DATA } from "@/lib/data";

/**
 * About section component.
 * Displays personal biography and key statistics (years of experience, project count, etc.).
 */
export function About() {
    return (
        <section id="about" className="py-20 bg-secondary/30">
            <div className="container px-4 md:px-6 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    <div className="order-2 md:order-1">
                        <div className="relative w-full aspect-square max-w-md mx-auto md:mx-0 bg-blue-100 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl border border-border">
                            <Image
                                src={DATA.personal.avatar}
                                alt={DATA.personal.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    <div className="order-1 md:order-2 space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                            About Me
                        </h2>
                        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                I am a <strong>{DATA.personal.role}</strong> based in {DATA.personal.location} with over 5 years of experience in the banking and financial services domain.
                            </p>
                            <p>
                                My expertise lies in building robust, secure, and scalable high-performance enterprise applications. I have a proven track record of modernizing legacy systems, implementing microservices architectures with <strong>Spring Boot</strong>, and creating responsive frontends with <strong>React</strong> and <strong>Nest.js</strong>.
                            </p>
                            <p>
                                Currently, I focus on integrating <strong>Generative AI</strong> and <strong>Cloud-native</strong> solutions to solve complex business problems, reducing operational risks and automating critical workflows.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-4 pt-4">
                            <div className="text-center p-4 bg-background rounded-lg border shadow-sm">
                                <div className="text-3xl font-bold text-blue-600">5+</div>
                                <div className="text-sm text-muted-foreground">Years Exp.</div>
                            </div>
                            <div className="text-center p-4 bg-background rounded-lg border shadow-sm">
                                <div className="text-3xl font-bold text-blue-600">10+</div>
                                <div className="text-sm text-muted-foreground">Projects</div>
                            </div>
                            <div className="text-center p-4 bg-background rounded-lg border shadow-sm">
                                <div className="text-3xl font-bold text-blue-600">3+</div>
                                <div className="text-sm text-muted-foreground">Certifications</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
