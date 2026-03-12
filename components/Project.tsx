const projects = [
    {
        title: "Flip Card Game",
        description:
        "A fullstack LMS platform for managing online classes, materials, and student progress.",
        tech: ["Next.js", "NestJS", "PostgreSQL"],
        github: "https://github.com/donyputraperkasa/flip-card-fe",
        demo: "https://flip-card-fe.vercel.app/",
    },
    {
        title: "Belajar Matematika",
        description:
        "Interactive Wordwall-style math learning game with card flip mechanics.",
        tech: ["Next.js", "TypeScript", "Tailwind"],
        github: "https://github.com/donyputraperkasa/belajarmatematika",
        demo: "https://belajarmatematika-two.vercel.app/",
    },
    {
        title: "School Website",
        description:
        "Modern school website with admin dashboard and article management system.",
        tech: ["Next.js", "Prisma", "PostgreSQL"],
        github: "https://github.com/donyputraperkasa/website-wates-fe",
        demo: "on going",
    },
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
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition"
                >
                <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                </h3>

                <p className="text-white/70 text-sm mb-6">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                    <span
                        key={i}
                        className="text-xs bg-white/10 border border-white/20 px-3 py-1 rounded-full"
                    >
                        {tech}
                    </span>
                    ))}
                </div>

                <div className="flex gap-4 text-sm">
                    <a
                    href={project.github}
                    className="text-blue-400 hover:text-blue-300 transition"
                    >
                    Github
                    </a>

                    <a
                    href={project.demo}
                    className="text-blue-400 hover:text-blue-300 transition"
                    >
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