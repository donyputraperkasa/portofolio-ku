import { BookOpen, Code2, Sigma } from "lucide-react"

import SectionHeader from "./ui/SectionHeader"

const education = [
    {
        accent: "text-orange-300 bg-orange-300/10",
        degree: "Full-Stack Software Engineering",
        description:
            "Project-based training in frontend, backend, databases, testing, " +
            "and collaborative product delivery.",
        icon: Code2,
        school: "RevoU",
        topics: ["Next.js", "NestJS", "TypeScript"],
        year: "2025 — 2026",
    },
    {
        accent: "text-blue-300 bg-blue-300/10",
        degree: "Teacher Certificate Program",
        description:
            "Professional education in lesson design, differentiated " +
            "instruction, assessment, and classroom management.",
        icon: BookOpen,
        school: "Sanata Dharma University",
        topics: ["Teaching", "Assessment", "Learning Design"],
        year: "2023 — 2024",
    },
    {
        accent: "text-emerald-300 bg-emerald-300/10",
        degree: "Mathematics Education",
        description:
            "A foundation in analytical reasoning, problem solving, " +
            "statistics, and clear mathematical communication.",
        icon: Sigma,
        school: "Sanata Dharma University",
        topics: ["Algebra", "Calculus", "Statistics"],
        year: "2014 — 2019",
    },
]

export default function Education() {
    return (
        <section
            className="scroll-mt-24 px-6 py-24 text-white md:py-28"
            id="education"
        >
            <div className="mx-auto max-w-6xl">
                <SectionHeader
                    description={
                        "Learning experiences that shaped how I analyze, " +
                        "communicate, and build."
                    }
                    eyebrow="Education"
                    title="A foundation in both people and technology."
                />

                <div className="mt-14 grid gap-6 lg:grid-cols-3">
                    {education.map((item, index) => {
                        const Icon = item.icon

                        return (
                            <article
                                className="group relative overflow-hidden rounded-3xl
                                    border border-white/10 bg-white/[0.045] p-7
                                    transition duration-500 hover:-translate-y-2
                                    hover:border-white/20 hover:bg-white/[0.07]"
                                key={item.degree}
                            >
                                <span
                                    className="absolute right-6 top-6 font-mono
                                        text-xs text-white/20"
                                >
                                    0{index + 1}
                                </span>
                                <span
                                    className={`grid h-12 w-12 place-items-center
                                        rounded-2xl ${item.accent}`}
                                >
                                    <Icon size={22} />
                                </span>
                                <p
                                    className="mt-8 font-mono text-[11px]
                                        uppercase tracking-wider text-orange-300"
                                >
                                    {item.year}
                                </p>
                                <h3 className="mt-3 text-xl font-bold">
                                    {item.degree}
                                </h3>
                                <p className="mt-2 text-sm font-medium text-white/45">
                                    {item.school}
                                </p>
                                <p className="mt-5 text-sm leading-7 text-white/55">
                                    {item.description}
                                </p>
                                <div className="mt-7 flex flex-wrap gap-2">
                                    {item.topics.map((topic) => (
                                        <span
                                            className="rounded-lg border border-white/10
                                                bg-white/5 px-2.5 py-1.5 text-[10px]
                                                text-white/55"
                                            key={topic}
                                        >
                                            {topic}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
