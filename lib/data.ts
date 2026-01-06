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
    location: string;
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
        github: "https://github.com/Veekshith9510", // Placeholder, updated if known
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
            company: "Innopay Technologies Pvt Ltd",
            role: "Full Stack Developer",
            period: "Nov 2024 – Dec 2025",
            location: "India (Fully remote)",
            description: [
                "Developed and maintained Java Spring Boot microservices for payment processing, invoicing, and reconciliation, supporting 1,500–2,000 transactions/minute during peak business hours.",
                "Implemented event-driven workflows using Apache Kafka (payment → invoice → ledger), reducing synchronous processing latency by ~35% and improving system resilience.",
                "Designed and built React and Angular-based role-driven dashboards integrated with backend APIs, improving merchant onboarding efficiency and reducing manual operational steps by ~30%.",
                "Automated cloud infrastructure provisioning and application delivery using Terraform, Docker, Jenkins, and AWS EKS, reducing deployment time by ~60% and supporting 2–3 zero-downtime production releases per week.",
                "Integrated NPCI UPI payment flows and GST e-invoicing APIs, achieving >99.5% transaction-to-invoice reconciliation accuracy across multi-tenant clients.",
                "Implemented secure authentication and authorization using AWS Cognito, OAuth2, and JWT, enforcing RBAC and supporting 10K+ concurrent authenticated sessions.",
                "Built Infrastructure as Code (Terraform) to provision AWS VPCs, EC2/EKS, RDS, Cognito, and S3, reducing environment setup time from days to under 1 hour.",
                "Designed and maintained CI/CD pipelines with Jenkins (build → test → Docker → Helm deploy to EKS), enabling 2–3 production releases per week with zero-downtime deployments.",
                "Supported live production systems with 99.9% uptime, reducing MTTR by ~40% through automated alerts, runbooks, and structured incident response using CloudWatch and ELK."
            ],
        },
        {
            company: "BNP Paribas",
            role: "IT Developer",
            period: "Oct 2022 – Oct 2024",
            location: "Montreal, Canada (Hybrid)",
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
            location: "Montreal, Canada (Hybrid)",
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
            location: "Hyderabad, India (On-Site)",
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
            location: "Hyderabad, India (On-site)",
            description: [
                "Participated in performance analysis, design, development, and testing in an Agile environment.",
                "Reviewed code and debugged errors to improve performance.",
                "Worked with QA to set up test cases and automation protocols."
            ],
        },
    ] as Experience[],
    projects: [
        {
            title: "FinTech SaaS Platform (Innopay)",
            description: "A cloud-native, microservices-based PaaS processing real-time payments and GST workflows for 1M+ users. Built with an event-driven architecture using Kafka, secured with AWS Cognito/OAuth2, and deployed via CI/CD pipelines. Features role-based dashboards and zero-downtime releases.",
            tags: ["Java", "Spring Boot", "Kafka", "AWS", "React", "Terraform", "Docker", "Jenkins"],
        },
        {
            title: "Client Management & Compliance Monitoring (CM²) Portal",
            description: "A centralized portal streamlining client onboarding, document verification, and risk scoring. Replaced manual spreadsheet workflows, reducing issue triage time by 30% using ELK-powered logs. Features customized React UI with Flask REST APIs and Elasticsearch integration.",
            tags: ["React", "Flask", "Python", "Elasticsearch", "Kibana", "Jenkins", "PostgreSQL"],
        },
        {
            title: "Regulatory Reporting System (FESTER)",
            description: "A critical regulatory reporting platform for FINRA Rule 2360A. Orchestrates daily batch jobs using Autosys, validating raw trading data from Bloomberg and submitting active positions to the OCC. Features a Java backend with Oracle 19c, Python scripting for logic, and a custom UI dashboard for stakeholders.",
            tags: ["Java", "Oracle 19c", "Autosys", "Python", "Shell Scripting", "Kibana"],
        },
        {
            title: "PB WorkQ System Modernization",
            description: "A legacy system migration from Sybase/C# to Postgres/Java/Angular. Engineered a robust read/write bridge for real-time data replication between old and new systems. Developed a modern Angular UI and scalable REST APIs to manage task operations during the transition phase.",
            tags: ["Java", "Angular", "PostgreSQL", "REST APIs", "System Migration"],
        },
        {
            title: "Generative AI Resume Generator",
            description: "A full-stack application leveraging Google Gemini LLM to automate resume tailoring. Features a FastAPI backend, React/Angular frontend, and intelligent prompt engineering for ATS optimization.",
            tags: ["FastAPI", "Python", "React", "Google Gemini", "SQLite", "Prompt Engineering"],
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
