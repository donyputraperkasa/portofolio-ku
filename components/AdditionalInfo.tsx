const skills = {
    frontend: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    backend: ["NestJS", "Prisma", "PostgreSQL"],
    tools: ["Git", "GitHub", "Vercel", "Docker"],
}

export default function AdditionalInfo() {
    return (
        <section
            className="flex scroll-mt-24 items-center justify-center px-6 py-16 text-slate-900 md:py-24"
            id="additional-info"
        >
            <div className="w-full max-w-5xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-3 text-3xl font-extrabold md:text-4xl">
                        Informasi Tambahan
                    </h2>
                    <p className="text-slate-600">
                        Keahlian dan perangkat yang sering saya gunakan
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                        <h3 className="mb-4 text-lg font-bold">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.frontend.map((item) => (
                                <span
                                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                                    key={item}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                        <h3 className="mb-4 text-lg font-bold">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.backend.map((item) => (
                                <span
                                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                                    key={item}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                        <h3 className="mb-4 text-lg font-bold">Perangkat</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.tools.map((item) => (
                                <span
                                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                                    key={item}
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
