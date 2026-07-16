export type ProjectAccent =
    | "blue"
    | "cyan"
    | "emerald"
    | "orange"
    | "pink"
    | "purple"

export type Project = {
    accent: ProjectAccent
    category: string
    demo: string
    description: string
    featured?: boolean
    highlights: string[]
    tech: string[]
    title: string
}

export const projects: Project[] = [
    {
        accent: "blue",
        category: "EdTech Product",
        demo: "https://my-exam-fe.vercel.app/",
        description:
            "A mathematics exam platform for students, teachers, and administrators.",
        featured: true,
        highlights: [
            "Role-based dashboards and exam management",
            "Student monitoring and score recaps",
            "Focused, mobile-friendly exam flow",
        ],
        tech: ["nextjs", "typescript", "tailwind", "nestjs", "railway"],
        title: "My Exam",
    },
    {
        accent: "emerald",
        category: "Internal Product",
        demo: "https://database-yayasan-fe.vercel.app/",
        description:
            "A centralized operational database for schools under Yayasan BOPKRI.",
        featured: true,
        highlights: [
            "Multi-role access for foundation and schools",
            "Searchable school, employee, and student data",
            "Documents, facilities, and finance management",
        ],
        tech: ["nextjs", "typescript", "tailwind", "nestjs", "railway"],
        title: "MyBOPKRI",
    },
    {
        accent: "pink",
        category: "Team Project",
        demo: "https://mamabear-frontend.vercel.app",
        description:
            "A full-stack e-commerce experience for baby and maternity essentials.",
        highlights: [
            "Product catalog and responsive shopping cart",
            "Authentication and order management",
            "Integrated payment workflow",
        ],
        tech: ["react", "typescript", "tailwind", "vite", "nestjs"],
        title: "MamaBear",
    },
    {
        accent: "purple",
        category: "Team Project",
        demo: "https://we-rent-frontend-seven.vercel.app/",
        description:
            "A responsive marketplace for discovering and renting properties.",
        highlights: [
            "Property discovery and detailed listings",
            "Responsive, user-friendly navigation",
            "Frontend feature and API integration",
        ],
        tech: ["react", "typescript", "tailwind", "vite", "firebase"],
        title: "WeRent",
    },
    {
        accent: "orange",
        category: "Learning Platform",
        demo: "https://hemath-jet.vercel.app",
        description:
            "A relaxed and accessible mathematics tutoring platform for students.",
        highlights: [
            "Student-friendly learning experience",
            "Structured materials and registration flow",
            "Responsive frontend and service integration",
        ],
        tech: ["nextjs", "typescript", "tailwind", "nestjs", "railway"],
        title: "Hemath",
    },
    {
        accent: "cyan",
        category: "Learning Game",
        demo: "https://flip-card-fe.vercel.app/",
        description:
            "An interactive memory game that makes learning feel more playful.",
        highlights: [
            "Smooth card-flip interactions",
            "Responsive matching game mechanics",
            "Simple gamification for classroom use",
        ],
        tech: ["nextjs", "typescript", "tailwind", "supabase", "nestjs"],
        title: "Flip Card Game",
    },
    {
        accent: "blue",
        category: "Learning Game",
        demo: "https://belajarmatematika-two.vercel.app/",
        description:
            "A gamified platform for practicing arithmetic and core math concepts.",
        highlights: [
            "Interactive question and answer matching",
            "Engaging practice for young learners",
            "Responsive game interface",
        ],
        tech: ["nextjs", "typescript", "tailwind", "supabase", "nestjs"],
        title: "Belajar Matematika",
    },
    {
        accent: "emerald",
        category: "School Platform",
        demo: "https://website-wates-fe.vercel.app/",
        description:
            "A modern school website for articles, announcements, and information.",
        highlights: [
            "Centralized publishing workflow",
            "Admin content management dashboard",
            "Responsive public information pages",
        ],
        tech: ["nextjs", "typescript", "tailwind", "nestjs", "railway"],
        title: "School Website",
    },
    {
        accent: "orange",
        category: "Client Project",
        demo: "https://the-house-of-mamink-fe-azure.vercel.app/",
        description:
            "A polished business website built to strengthen the client's presence.",
        highlights: [
            "Translated client needs into a clear interface",
            "Responsive and accessible presentation",
            "Production-ready business website",
        ],
        tech: ["nextjs", "typescript", "tailwind", "nestjs"],
        title: "The House of Mamink",
    },
]
