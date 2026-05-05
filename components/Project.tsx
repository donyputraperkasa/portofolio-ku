import { Github, ExternalLink } from "lucide-react"
const projects = [
    {
        title: "Flip Card Game",
        description:
            "Interactive memory card game built to improve user engagement through simple gamification mechanics.",
        problem:
            "Traditional learning exercises can feel repetitive and reduce student engagement.",
        role:
            "Designed UI, implemented card flip logic, and built responsive frontend using Next.js.",
        solution:
            "Developed an interactive card matching game with smooth animations and responsive layout.",
        result:
            "Created an engaging mini-game that can be used as a fun learning activity.",
        tech: [
        "https://cdn.simpleicons.org/nextdotjs",
        "https://cdn.simpleicons.org/typescript",
        "https://cdn.simpleicons.org/tailwindcss",
        "https://cdn.simpleicons.org/supabase",
        "https://cdn.simpleicons.org/railway",
        "https://cdn.simpleicons.org/nestjs"
        ],
        github: "https://github.com/donyputraperkasa/flip-card-fe",
        demo: "https://flip-card-fe.vercel.app/",
    },
    {
        title: "Belajar Matematika",
        description:
            "Gamified mathematics learning platform inspired by Wordwall to help students practice arithmetic.",
        problem:
            "Students often lose motivation when practicing repetitive math problems.",
        role:
            "Built the frontend application, implemented game mechanics, and designed user-friendly UI.",
        solution:
            "Implemented card-flip mechanics where students match questions with correct answers.",
        result:
            "Provided a more interactive way for students to practice basic math concepts.",
        tech: [
        "https://cdn.simpleicons.org/nextdotjs",
        "https://cdn.simpleicons.org/typescript",
        "https://cdn.simpleicons.org/tailwindcss",
        "https://cdn.simpleicons.org/supabase",
        "https://cdn.simpleicons.org/railway",
        "https://cdn.simpleicons.org/nestjs"
        ],
        github: "https://github.com/donyputraperkasa/belajarmatematika",
        demo: "https://belajarmatematika-two.vercel.app/",
    },
    {
        title: "School Website",
        description:
            "Modern school website with content management features for articles and school information.",
        problem:
            "Schools often need a simple platform to manage announcements and articles.",
        role:
            "Developed the frontend interface and integrated backend services for content management.",
        solution:
            "Built a website with admin dashboard allowing administrators to manage articles and content.",
        result:
            "Provides a centralized platform for publishing school news and information.",
        tech: [
        "https://cdn.simpleicons.org/nextdotjs",
        "https://cdn.simpleicons.org/typescript",
        "https://cdn.simpleicons.org/tailwindcss",
        "https://cdn.simpleicons.org/supabase",
        "https://cdn.simpleicons.org/railway",
        "https://cdn.simpleicons.org/nestjs"
        ],
        github: "https://github.com/donyputraperkasa/website-wates-fe",
        demo: "https://website-wates-fe.vercel.app/",
    },
    {
        title: "Hemath Website learning mathematics leasons",
        description:
            "An interactive math tutoring platform that helps students learn in a more relaxed, flexible, and easy-to-understand way.",
        problem:
            "Many students struggle to understand mathematics due to monotonous and less interactive learning methods.",
        role:
            "Developed the frontend, designed a student-friendly UI/UX, and integrated learning and registration features.",
        solution:
            "Built a math tutoring website with a flexible learning system, structured materials, and easy access for students.",
        result:
            "Improved student engagement by providing a more interactive and accessible learning experience anytime.",
        tech: [
        "https://cdn.simpleicons.org/nextdotjs",
        "https://cdn.simpleicons.org/typescript",
        "https://cdn.simpleicons.org/tailwindcss",
        "https://cdn.simpleicons.org/supabase",
        "https://cdn.simpleicons.org/railway",
        "https://cdn.simpleicons.org/nestjs"
        ],
        github: "https://github.com/donyputraperkasa/hemath",
        demo: "https://hemath-jet.vercel.app",
    },
    {
        title: "Client Project – The House of Mamink",
        description:
            "A professional business website developed for a client to showcase their services, improve online presence, and support customer engagement.",
        problem:
            "The client needed a modern and responsive website to represent their business and reach a wider audience.",
        role:
            "Worked as a frontend developer, translating client requirements into a clean, user-friendly interface.",
        solution:
            "Built a responsive and scalable web application with modern UI/UX, ensuring accessibility and performance across devices.",
        result:
            "Successfully delivered a production-ready website that enhanced the client's brand visibility and user engagement.",
        tech: [
        "https://cdn.simpleicons.org/nextdotjs",
        "https://cdn.simpleicons.org/typescript",
        "https://cdn.simpleicons.org/tailwindcss",
        "https://cdn.simpleicons.org/supabase",
        "https://cdn.simpleicons.org/railway",
        "https://cdn.simpleicons.org/nestjs"
        ],
        github: "",
        demo: "https://the-house-of-mamink-fe-azure.vercel.app/",
    }
]

export default function Projects() {
    return (
        <section
        id="projects"
        className="min-h-screen px-6 py-24 text-white flex items-center justify-center"
        >
        <div className="max-w-6xl w-full">

            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Projects
            </h2>
            <p className="text-white/60">
                Some of the projects I have worked on
            </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {projects.map((project, index) => (
                <div
                    key={index}
                    className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:-translate-y-2 hover:border-white/30 hover:bg-white/10 transition-all duration-300 shadow-lg"
                >
                    <h3 className={`text-xl font-semibold transition ${
                        project.title.toLowerCase().includes("client")
                            ? "text-blue-400"
                            : "group-hover:text-orange-400"
                    }`}>
                        {project.title}
                    </h3>

                    <p className="text-white/70 text-sm mb-3">
                        {project.description}
                    </p>

                    <ul className="text-white/60 text-xs space-y-1 mb-6 list-disc list-inside">
                        <li><span className="font-semibold text-white">Problem:</span> {project.problem}</li>
                        <li><span className="font-semibold text-white">Role:</span> {project.role}</li>
                        <li><span className="font-semibold text-white">Solution:</span> {project.solution}</li>
                        <li><span className="font-semibold text-white">Result:</span> {project.result}</li>
                    </ul>

                    <div className="flex items-center gap-3 mb-6">
                        {project.tech.map((tech, i) => (
                            <img
                                key={i}
                                src={tech}
                                className="w-6 h-6 bg-white rounded-full transition-transform duration-300 hover:scale-110"
                                alt="tech"
                            />
                        ))}
                    </div>

                    <div className="flex items-center gap-3 text-sm">
                        {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition"
                        >
                            <Github size={16} />
                            Github
                        </a>
                        )}

                        <a
                            href={project.demo}
                            target="_blank"
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-orange-500/90 hover:bg-orange-500 transition text-white"
                        >
                            <ExternalLink size={16} />
                            Live Demo
                        </a>
                    </div>
                </div>
            ))}

            </div>

        </div>
        </section>
    )
}