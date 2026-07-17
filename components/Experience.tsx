import { BriefcaseBusiness, Check, GraduationCap } from "lucide-react"

import SectionHeader from "./ui/SectionHeader"

const experiences = [
    {
        achievements: [
            "Built systems that improved administrative efficiency.",
            "Reduced manual work through digital automation.",
            "Maintained reliable institutional websites and services.",
        ],
        company: "Yayasan BOPKRI Yogyakarta",
        jobdesk: [
            "Develop and maintain internal web applications.",
            "Manage databases, servers, and deployment pipelines.",
            "Provide IT support for hardware, software, and networks.",
            "Collaborate with departments to digitize business processes.",
        ],
        role: "IT Staff",
        year: "2026 — Present",
    },
    {
        achievements: [
            "Improved digital learning experiences.",
            "Enhanced academic documentation workflows.",
            "Contributed to technology adoption in education.",
        ],
        company: "Yayasan BOPKRI Yogyakarta",
        jobdesk: [
            "Prepare mathematics learning materials and assessments.",
            "Create digital educational content for students and teachers.",
            "Support academic administration and reporting.",
            "Assist in curriculum implementation and evaluation.",
        ],
        role: "Education Staff",
        year: "2023 — 2025",
    },
]

type DetailListProps = {
    color: "blue" | "orange-300"
    items: string[]
    title: string
}

function DetailList({ color, items, title }: DetailListProps) {
    const headingColor = color === "blue"
        ? "text-blue-300"
        : "text-orange-300"
    const bulletColor = color === "blue"
        ? "bg-blue-400/10 text-blue-300"
        : "bg-orange-400/10 text-orange-300"

    return (
        <div>
            <h4
                className={`mb-3 text-sm font-semibold uppercase
                    tracking-wider ${headingColor}`}
            >
                {title}
            </h4>
            <ul className="space-y-3">
                {items.map((item) => (
                    <li
                        className="flex items-start gap-3 text-sm leading-6
                            text-white/65"
                        key={item}
                    >
                        <span
                            className={`mt-1 grid h-4 w-4 shrink-0
                                place-items-center rounded-full ${bulletColor}`}
                        >
                            <Check size={10} strokeWidth={3} />
                        </span>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default function Experience() {
    return (
        <section
            className="scroll-mt-24 px-6 py-24 text-white md:py-28"
            id="experience"
        >
            <div className="mx-auto max-w-6xl">
                <SectionHeader
                    align="left"
                    description={
                        "A career shaped at the intersection of technology " +
                        "and education."
                    }
                    eyebrow="Experience"
                    title="Building, teaching, and improving how work gets done."
                />

                <div className="relative mt-14 space-y-6">
                    <div
                        className="absolute bottom-8 left-6 top-8 hidden w-px
                            bg-gradient-to-b from-orange-300 via-blue-400
                            to-transparent md:block"
                    />
                    {experiences.map((experience, index) => {
                        const isEducation = index === 1
                        const Icon = isEducation
                            ? GraduationCap
                            : BriefcaseBusiness
                        const cardStyle = isEducation
                            ? "border-blue-300/15 bg-blue-400/[0.045]"
                            : "border-white/10 bg-white/[0.045]"
                        const yearStyle = isEducation
                            ? "text-blue-300"
                            : "text-orange-300"

                        return (
                            <article
                                className={`group relative grid gap-6 rounded-3xl
                                    border p-7 transition hover:border-white/20
                                    hover:bg-white/[0.065] md:ml-20
                                    md:grid-cols-[0.8fr_1.2fr] md:p-9
                                    ${cardStyle}`}
                                key={experience.role}
                            >
                                <span
                                    className={`absolute -left-[5.05rem] top-8
                                        hidden h-12 w-12 place-items-center
                                        rounded-full border border-white/15
                                        text-slate-950 md:grid ${
                                        isEducation
                                            ? "bg-blue-400"
                                            : "bg-orange-300"
                                    }`}
                                >
                                    <Icon size={20} />
                                </span>
                                <div>
                                    <span
                                        className={`font-mono text-xs uppercase
                                            tracking-wider ${yearStyle}`}
                                    >
                                        {experience.year}
                                    </span>
                                    <h3 className="mt-4 text-2xl font-bold">
                                        {experience.role}
                                    </h3>
                                    <p className="mt-2 text-sm text-white/50">
                                        {experience.company}
                                    </p>
                                </div>
                                <div
                                    className="space-y-6 border-white/10
                                        md:border-l md:pl-8"
                                >
                                    <DetailList
                                        color={isEducation ? "blue" : "orange-300"}
                                        items={experience.jobdesk}
                                        title="Job Description"
                                    />
                                    <DetailList
                                        color={isEducation ? "blue" : "orange-300"}
                                        items={experience.achievements}
                                        title="Key Achievements"
                                    />
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
