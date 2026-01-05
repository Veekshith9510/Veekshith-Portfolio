"use client";

import { DATA } from "@/lib/data";
import { Copy, Mail, MapPin, Phone, Printer } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
    return (
        <div className="min-h-screen bg-gray-50/50 py-12 md:py-20 print:p-0 print:bg-white">
            {/* Print Controls - Hidden when printing */}
            <div className="fixed bottom-8 right-8 z-50 print:hidden">
                <button
                    onClick={() => window.print()}
                    className="flex items-center gap-2 bg-slate-900 text-white shadow-xl rounded-full h-14 px-6 hover:bg-slate-800 transition-colors font-medium"
                >
                    <Printer className="w-5 h-5" />
                    Print / Save PDF
                </button>
            </div>

            <main className="container max-w-[210mm] mx-auto bg-white shadow-2xl print:shadow-none print:max-w-none p-8 md:p-12 print:p-0 min-h-[297mm]">
                {/* Header */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-slate-800 pb-6 mb-6">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900">{DATA.personal.name}</h1>
                        <p className="text-lg font-medium text-slate-600">{DATA.personal.role}</p>
                    </div>
                    <div className="mt-4 md:mt-0 space-y-2 text-sm text-slate-600 text-right">
                        <div className="flex items-center justify-end gap-2">
                            <span className="print:text-black">{DATA.personal.location}</span>
                            <MapPin className="w-4 h-4" />
                        </div>
                        <div className="flex items-center justify-end gap-2">
                            <a href={`mailto:${DATA.personal.email}`} className="hover:underline">{DATA.personal.email}</a>
                            <Mail className="w-4 h-4" />
                        </div>
                        <div className="flex items-center justify-end gap-2">
                            <a href={`tel:${DATA.personal.phone}`} className="hover:underline">{DATA.personal.phone}</a>
                            <Phone className="w-4 h-4" />
                        </div>
                    </div>
                </header>

                {/* Summary */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold uppercase tracking-wider text-slate-800 mb-3 border-b border-slate-200 pb-1">Professional Summary</h2>
                    <p className="text-slate-700 leading-relaxed text-sm text-justify">
                        {DATA.personal.summary}
                    </p>
                </section>

                {/* Skills */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold uppercase tracking-wider text-slate-800 mb-3 border-b border-slate-200 pb-1">Technical Skills</h2>
                    <div className="grid grid-cols-1 gap-y-2 text-sm">
                        {DATA.skills.map((category) => (
                            <div key={category.title} className="flex flex-col sm:flex-row sm:gap-4">
                                <span className="font-bold text-slate-800 min-w-[150px]">{category.title}:</span>
                                <span className="text-slate-700">{category.skills.join(", ")}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Experience */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold uppercase tracking-wider text-slate-800 mb-4 border-b border-slate-200 pb-1">Work Experience</h2>
                    <div className="space-y-6">
                        {DATA.experience.map((job) => (
                            <div key={job.company + job.role} className="break-inside-avoid">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="text-lg font-bold text-slate-900">{job.role}</h3>
                                    <span className="text-sm font-medium text-slate-600">{job.period}</span>
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-base font-semibold text-slate-700">{job.company}</span>
                                    <span className="text-sm text-slate-500 italic">{job.location}</span>
                                </div>
                                <ul className="list-disc list-outside ml-4 space-y-1">
                                    {job.description.map((desc, i) => (
                                        <li key={i} className="text-sm text-slate-700 leading-snug pl-1">
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Projects */}
                <section className="mb-8 break-inside-avoid">
                    <h2 className="text-xl font-bold uppercase tracking-wider text-slate-800 mb-4 border-b border-slate-200 pb-1">Featured Projects</h2>
                    <div className="space-y-4">
                        {DATA.projects.map((project) => (
                            <div key={project.title}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="text-base font-bold text-slate-900">{project.title}</h3>
                                </div>
                                <p className="text-sm text-slate-700 mb-1">{project.description}</p>
                                <p className="text-xs text-slate-500 font-medium">Tech Stack: {project.tags.join(", ")}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education & Certs */}
                <div className="grid md:grid-cols-2 gap-8 break-inside-avoid">
                    <section>
                        <h2 className="text-xl font-bold uppercase tracking-wider text-slate-800 mb-3 border-b border-slate-200 pb-1">Education</h2>
                        <div className="space-y-3">
                            {DATA.education.map((edu) => (
                                <div key={edu.degree}>
                                    <h3 className="text-sm font-bold text-slate-900">{edu.degree}</h3>
                                    <p className="text-sm text-slate-700">{edu.school}</p>
                                    <p className="text-xs text-slate-500">{edu.year}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold uppercase tracking-wider text-slate-800 mb-3 border-b border-slate-200 pb-1">Certifications</h2>
                        <ul className="space-y-1">
                            {DATA.certifications.map((cert) => (
                                <li key={cert.name} className="flex justify-between items-baseline text-sm">
                                    <span className="font-medium text-slate-900">{cert.name}</span>
                                    {cert.date && <span className="text-slate-500 text-xs">{cert.date}</span>}
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </main>
        </div>
    );
}
