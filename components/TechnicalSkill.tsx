import {
    Braces,
    Calculator,
    ChartNoAxesColumnIncreasing,
    Cloud,
    Code2,
    Database,
    Layers3,
    Ruler,
    Sigma,
    Wrench,
} from "lucide-react"

import SectionHeader from "./ui/SectionHeader"

const developmentSkills = [
    {
        accent: "bg-blue-300/10 text-blue-300",
        icon: Braces,
        items: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
        title: "Core Languages",
    },
    {
        accent: "bg-cyan-300/10 text-cyan-300",
        icon: Layers3,
        items: ["React", "Next.js", "Vue.js", "Nuxt", "Tailwind CSS"],
        title: "Frontend",
    },
    {
        accent: "bg-red-300/10 text-red-300",
        icon: Wrench,
        items: ["NestJS", "REST API", "Prisma", "Postman"],
        title: "Backend",
    },
    {
        accent: "bg-emerald-300/10 text-emerald-300",
        icon: Database,
        items: ["PostgreSQL", "MariaDB", "Supabase", "Firebase"],
        title: "Data",
    },
    {
        accent: "bg-orange-300/10 text-orange-300",
        icon: Cloud,
        items: ["Git", "GitHub", "Vercel", "Railway", "Docker"],
        title: "Tools & Cloud",
    },
]

const mathematicsSkills = [
    {
        accent: "bg-blue-300/10 text-blue-300",
        icon: Calculator,
        items: ["Algebra", "Linear Algebra", "Probability Theory"],
        title: "Algebra",
    },
    {
        accent: "bg-indigo-300/10 text-indigo-300",
        icon: ChartNoAxesColumnIncreasing,
        items: ["Integral", "Derivative", "Vector Calculus"],
        title: "Calculus",
    },
    {
        accent: "bg-cyan-300/10 text-cyan-300",
        icon: Ruler,
        items: ["Geometry", "Plane Geometry", "Solid Geometry"],
        title: "Geometry",
    },
]

type SkillItemsProps = {
    dotClass?: string
    items: string[]
}

function SkillItems({
    dotClass = "bg-orange-300/70",
    items,
}: SkillItemsProps) {
    return (
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            {items.map((item) => (
                <span
                    className="flex items-center gap-2 text-[11px]
                        text-white/50"
                    key={item}
                >
                    <span className={`h-1 w-1 rounded-full ${dotClass}`} />
                    {item}
                </span>
            ))}
        </div>
    )
}

export default function TechnicalSkill() {
    return (
        <section
            className="scroll-mt-24 px-6 py-20 text-white md:py-24"
            id="technical-skill"
        >
            <div className="mx-auto max-w-6xl">
                <div
                    className="flex flex-col justify-between gap-7 border-b
                        border-white/10 pb-8 lg:flex-row lg:items-end"
                >
                    <SectionHeader
                        align="left"
                        description={
                            "A focused toolkit shaped by software engineering " +
                            "and mathematics education."
                        }
                        eyebrow="Skills & expertise"
                        title="Two disciplines, one problem-solving mindset."
                    />
                    <div className="flex gap-6 lg:pb-1">
                        <div>
                            <p className="text-2xl font-black text-orange-300">
                                05
                            </p>
                            <p className="text-[10px] uppercase text-white/35">
                                Dev areas
                            </p>
                        </div>
                        <div>
                            <p className="text-2xl font-black text-blue-300">
                                03
                            </p>
                            <p className="text-[10px] uppercase text-white/35">
                                Math areas
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid gap-5">
                    <article
                        className="rounded-3xl border border-white/10
                            bg-white/[0.04] p-5 md:p-6"
                    >
                        <div className="flex items-start gap-4">
                            <span
                                className="grid h-11 w-11 shrink-0
                                    place-items-center rounded-2xl
                                    bg-orange-300 text-slate-950"
                            >
                                <Code2 size={21} />
                            </span>
                            <div>
                                <h3 className="font-bold">Software Engineering</h3>
                                <p className="mt-1 text-xs text-white/40">
                                    From interface to infrastructure.
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            {developmentSkills.map(
                                ({ accent, icon: Icon, items, title }, index) => (
                                    <div
                                        className={`rounded-2xl bg-slate-950/30
                                            p-4 ${
                                            index === developmentSkills.length - 1
                                                ? "sm:col-span-2"
                                                : ""
                                        }`}
                                        key={title}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span
                                                className={`grid h-8 w-8
                                                    place-items-center rounded-lg
                                                    ${accent}`}
                                            >
                                                <Icon size={15} />
                                            </span>
                                            <h4 className="text-xs font-bold">
                                                {title}
                                            </h4>
                                        </div>
                                        <SkillItems items={items} />
                                    </div>
                                ),
                            )}
                        </div>
                    </article>

                    <article
                        className="rounded-3xl border border-white/10
                            bg-white/[0.04] p-5 md:p-6"
                    >
                        <div className="flex items-start gap-4">
                            <span
                                className="grid h-11 w-11 shrink-0
                                    place-items-center rounded-2xl bg-blue-300
                                    text-slate-950"
                            >
                                <Sigma size={21} />
                            </span>
                            <div>
                                <h3 className="font-bold">
                                    Mathematics
                                </h3>
                                <p className="mt-1 text-xs text-white/40">
                                    Built through formal education and teaching.
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 grid gap-3 sm:grid-cols-3">
                            {mathematicsSkills.map(
                                ({ accent, icon: Icon, items, title }) => (
                                    <div
                                        className="rounded-2xl bg-slate-950/30
                                            p-4"
                                        key={title}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span
                                                className={`grid h-8 w-8
                                                    place-items-center rounded-lg
                                                    ${accent}`}
                                            >
                                                <Icon size={15} />
                                            </span>
                                            <h4 className="text-xs font-bold">
                                                {title}
                                            </h4>
                                        </div>
                                        <SkillItems
                                            dotClass="bg-blue-300/70"
                                            items={items}
                                        />
                                    </div>
                                ),
                            )}
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}
