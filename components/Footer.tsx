import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-background border-t border-border py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-primary">Veekshith Gullapudi</h3>
                        <p className="text-sm text-muted-foreground mt-2">
                            Full-Stack Java Developer | Fintech & Enterprise Systems
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                            &copy; {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <Link
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-blue-600 transition-colors"
                        >
                            <Github className="w-6 h-6" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/gullapudiveekshith/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-blue-600 transition-colors"
                        >
                            <Linkedin className="w-6 h-6" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link
                            href="mailto:contact@veekshith.dev"
                            className="text-muted-foreground hover:text-blue-600 transition-colors"
                        >
                            <Mail className="w-6 h-6" />
                            <span className="sr-only">Email</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
