import { Braces, Cloud, Database, Layers3, Wrench } from "lucide-react"

import SectionHeader from "./ui/SectionHeader"

const skillGroups = [
    {
        accent: "group-hover:text-blue-300 group-hover:bg-blue-300/10",
        icon: Braces,
        items: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
        title: "Languages",
    },
    {
        accent: "group-hover:text-cyan-300 group-hover:bg-cyan-300/10",
        icon: Layers3,
        items: ["React", "Next.js", "Vue.js", "Nuxt", "Tailwind CSS"],
        title: "Frontend",
    },
    {
        accent: "group-hover:text-red-300 group-hover:bg-red-300/10",
        icon: Wrench,
        items: ["NestJS", "REST API", "Prisma", "Postman"],
        title: "Backend",
    },
    {
        accent: "group-hover:text-emerald-300 group-hover:bg-emerald-300/10",
        icon: Database,
        items: ["PostgreSQL", "MariaDB", "Supabase", "Firebase"],
        title: "Data",
    },
    {
        accent: "group-hover:text-orange-300 group-hover:bg-orange-300/10",
        icon: Cloud,
        items: ["Git", "GitHub", "Vercel", "Railway", "Docker"],
        title: "Tools & Cloud",
    },
]

export default function TechnicalSkill() {
    return (
        <section
            className="scroll-mt-24 px-6 py-24 text-white md:py-28"
            id="technical-skill"
        >
            <div className="mx-auto max-w-6xl">
                <div
                    className="grid items-end gap-8 border-b border-white/10
                        pb-10 lg:grid-cols-[1fr_0.6fr]"
                >
                    <SectionHeader
                        align="left"
                        description="A practical toolkit chosen around the problem, not the trend."
                        eyebrow="Technical toolkit"
                        title="Technologies I use to bring ideas to life."
                    />
                    <p className="text-sm leading-7 text-white/45 lg:text-right">
                        From polished interfaces to dependable APIs and
                        relational data models.
                    </p>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                    {skillGroups.map(({ accent, icon: Icon, items, title }) => (
                        <article
                            className="group rounded-3xl border border-white/10
                                bg-white/[0.04] p-5 transition hover:-translate-y-1
                                hover:border-white/20 hover:bg-white/[0.07]"
                            key={title}
                        >
                            <span
                                className={`grid h-10 w-10 place-items-center
                                    rounded-xl bg-white/5 text-white/60
                                    transition ${accent}`}
                            >
                                <Icon size={19} />
                            </span>
                            <h3 className="mt-5 font-bold">{title}</h3>
                            <div className="mt-4 space-y-2">
                                {items.map((item) => (
                                    <p
                                        className="text-xs text-white/45
                                            transition group-hover:text-white/65"
                                        key={item}
                                    >
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
