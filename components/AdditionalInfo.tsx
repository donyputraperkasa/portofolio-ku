const skills = {
    frontend: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    backend: ["NestJS", "Prisma", "PostgreSQL"],
    tools: ["Git", "GitHub", "Vercel", "Docker"],
}

export default function AdditionalInfo() {
    return (
        <section
        id="additional-info"
        className="min-h-screen px-6 py-24 text-white flex items-center justify-center"
        >
        <div className="max-w-5xl w-full">

            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Additional Information
            </h2>
            <p className="text-white/60">
                Skills and tools that I frequently use
            </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                {skills.frontend.map((item, index) => (
                    <span
                    key={index}
                    className="text-xs bg-white/10 border border-white/20 px-3 py-1 rounded-full"
                    >
                    {item}
                    </span>
                ))}
                </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                {skills.backend.map((item, index) => (
                    <span
                    key={index}
                    className="text-xs bg-white/10 border border-white/20 px-3 py-1 rounded-full"
                    >
                    {item}
                    </span>
                ))}
                </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">Tools</h3>
                <div className="flex flex-wrap gap-2">
                {skills.tools.map((item, index) => (
                    <span
                    key={index}
                    className="text-xs bg-white/10 border border-white/20 px-3 py-1 rounded-full"
                    >
                    {item}
                    </span>
                ))}
                </div>
            </div>

            </div>

        </div>
        </section>
    )
}
