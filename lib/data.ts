import { Code2, Database, Globe, Server, Cloud, Cpu, LucideIcon, Briefcase, Wrench, Terminal, BookOpen } from "lucide-react";

/**
 * Represents a project in the portfolio.
 */
export interface Project {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    image?: string;
}

/**
 * Represents a professional experience entry.
 */
export interface Experience {
    company: string;
    role: string;
    period: string;
    description: string[];
}

/**
 * Represents a category of skills (e.g., Frontend, Backend).
 */
export interface SkillCategory {
    title: string;
    icon: LucideIcon;
    skills: string[];
}

/**
 * Represents a certification or award.
 */
export interface Certification {
    name: string;
    issuer: string;
    date?: string;
    link?: string;
}

/**
 * Global data object containing all portfolio content.
 * This centralized data source feeds into components to render specific sections.
 */
export const DATA = {
    personal: {
        name: "Veekshith Gullapudi",
        role: "Full-Stack Java Developer",
        location: "Canada",
        summary: "Full-Stack Java Developer with over 5 years of experience building and supporting scalable, secure, and high-performance enterprise applications within banking and financial services environments. Strong proficiency in Java, Spring Boot, RESTful microservices, and modern front-end technologies including React and Angular, complemented by hands-on experience in AWS cloud architecture and DevOps practices. AWS Certified Solutions Architect with recent experience integrating Generative AI, developing AI-enabled applications using LLMs, FastAPI, and cloud-native design patterns.",
        email: "gullapudiveekshith@gmail.com",
        phone: "+1 514-773-7344",
        linkedin: "https://www.linkedin.com/in/gullapudiveekshith/",
        github: "https://github.com/veekshith", // Placeholder, updated if known
        avatar: "/images/profile-pic.jpg",
    },
    skills: [
        {
            title: "Frontend Development",
            icon: Globe,
            skills: ["React", "Angular", "JavaScript (ES6+)", "TypeScript", "Redux", "HTML5", "CSS3", "Bootstrap", "Next.js"],
        },
        {
            title: "Backend Development",
            icon: Server,
            skills: ["Java", "Spring Boot", "Spring Core", "Node.js", "Express.js", "RESTful APIs", "FastAPI", "Python", "Hibernate"],
        },
        {
            title: "Cloud & DevOps",
            icon: Cloud,
            skills: ["AWS (EC2, S3, IAM, VPC, Lambda)", "Jenkins", "CI/CD", "Git", "GitHub", "Maven", "Gradle", "Docker", "Linux", "Terraform"],
        },
        {
            title: "Databases",
            icon: Database,
            skills: ["MySQL", "Oracle", "PostgreSQL", "SQLite", "DynamoDB"],
        },
        {
            title: "Tools & Methodologies",
            icon: Wrench,
            skills: ["SDLC", "Agile/Scrum", "Test Automation", "JUnit", "Mockito", "Jira", "Confluence", "Performance Optimization"],
        },
        {
            title: "AI & Emerging Tech",
            icon: Cpu,
            skills: ["Generative AI", "LLM Integration (Gemini)", "Prompt Engineering", "Cloud-Native Design Patterns"],
        },
    ] as SkillCategory[],
    experience: [
        {
            company: "Independent Projects & Professional Development",
            role: "Software Architect & Developer",
            period: "Nov 2024 – Present",
            description: [
                "Earned AWS Certified Solutions Architect – Associate (May 2025), strengthening expertise in cloud architecture, scalability, security, and cost optimization.",
                "Designed and developed a Generative AI–powered Resume Generator, automating resume tailoring based on job descriptions using Google Gemini LLM.",
                "Built a full-stack architecture using Python (FastAPI), React, Angular, and SQLite, integrating scalable async AI APIs with modern UI workflows.",
                "Applied prompt engineering techniques and context-aware AI workflows to produce role-specific, ATS-compatible resume enhancements.",
                "Strengthened DevOps discipline through Git-based version control and CI/CD concepts."
            ],
        },
        {
            company: "BNP Paribas",
            role: "IT Developer",
            period: "Oct 2022 – Oct 2024",
            description: [
                "Developed RESTful microservices using Spring Boot and Spring Core, ensuring scalability and easy integration with other systems.",
                "Modernized legacy components by upgrading outdated libraries/frameworks and resolving major security vulnerabilities (Log4j, Struts, CVE patches).",
                "Supported daily FINRA Rule 2360A regulatory reporting and LOPR logic, automating critical tasks using shell scripts and Python.",
                "Led the Oracle 12c → 19c migration, optimizing schema performance and ensuring data integrity.",
                "Engineered high-performance Java components integrated with Autosys job flows for timely regulatory reporting.",
                "Led Disaster Recovery (DR) tests twice yearly, ensuring system resilience and compliance."
            ],
        },
        {
            company: "Morgan Stanley",
            role: "Full Stack Developer",
            period: "Jan 2022 – Aug 2022",
            description: [
                "Implemented Angular Universal to enable server-side rendering (SSR), enhancing SEO and application performance.",
                "Developed asynchronous FastAPI endpoints to enhance throughput for I/O-heavy workflows and performed large-scale data manipulation using Python.",
                "Designed and implemented scalable REST APIs using Express and Node.js, and built responsive UI components.",
                "Collaborated with DevOps teams to manage deployments on AWS and handle DNS configurations with Cloudflare.",
                "Integrated APIs with databases and message queues ensuring secure access and logging."
            ],
        },
        {
            company: "Wipro",
            role: "Project Engineer",
            period: "Feb 2018 – Jan 2019",
            description: [
                "Designed and developed RESTful APIs for data exchange and backend processes using Java and Node.js.",
                "Conducted performance optimization using lazy loading and code splitting in React applications.",
                "Worked with MySQL and Oracle databases, writing optimized SQL queries.",
                "Built reusable components and adhered to best practices in object-oriented programming."
            ],
        },
        {
            company: "India E-Learn",
            role: "Junior Software Engineer",
            period: "Jun 2017 – Jan 2018",
            description: [
                "Participated in performance analysis, design, development, and testing in an Agile environment.",
                "Reviewed code and debugged errors to improve performance.",
                "Worked with QA to set up test cases and automation protocols."
            ],
        },
    ] as Experience[],
    projects: [
        {
            title: "Generative AI Resume Generator",
            description: "A full-stack application leveraging Google Gemini LLM to automate resume tailoring. Features a FastAPI backend, React/Angular frontend, and intelligent prompt engineering for ATS optimization.",
            tags: ["FastAPI", "Python", "React", "Google Gemini", "SQLite", "Prompt Engineering"],
        },
        {
            title: "Regulatory Reporting System (FESTER)",
            description: "Compliance reporting system for FINRA Rule 2360A and LOPR. Handles position aggregation, multi-leg strategies, and complex regulatory validation logic.",
            tags: ["Java", "Spring Boot", "Oracle 19c", "Autosys", "Shell Scripting"],
        },
        {
            title: "Real-time Banking Dashboard",
            description: "Modernized banking interface utilizing Angular Universal for SSR and optimized performance. Integrated with secure REST APIs and message queues.",
            tags: ["Angular", "TypeScript", "Node.js", "Express", "Security"],
        },
    ] as Project[],
    certifications: [
        {
            name: "Certified AWS Solutions Architect – Associate",
            issuer: "Amazon Web Services",
            date: "May 2025",
            link: "#",
        },
        {
            name: "The Complete Web Developer: Zero to Mastery",
            issuer: "Udemy / ZTM",
            link: "#",
        },
        {
            name: "AWS Essential Training for Developers",
            issuer: "LinkedIn Learning",
            link: "#",
        },
        {
            name: "Python for Data Science",
            issuer: "IBM SkillsBuild",
            link: "#",
        },
        {
            name: "Data Fundamentals",
            issuer: "IBM SkillsBuild",
            link: "#",
        },
    ] as Certification[],
    education: [
        {
            degree: "Post Graduation Diploma, Business Analyst",
            school: "Montreal College of Information Technology",
            year: "2021",
        },
        {
            degree: "Post Graduation Diploma, Web Application Development",
            school: "Montreal College of Information Technology",
            year: "2020",
        },
        {
            degree: "B.Tech, Computer Science Engineering",
            school: "AVN Institute of Engineering and Technology",
            year: "2017",
        },
    ]
};
