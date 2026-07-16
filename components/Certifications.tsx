import { Award, BadgeCheck } from "lucide-react"

import SectionHeader from "./ui/SectionHeader"

const certifications = [
    {
        issuer: "RevoU",
        title: "Full-Stack Software Engineering",
        year: "2026",
    },
    {
        issuer: "Kemendikbud",
        title: "Teacher Certificate Program",
        year: "2024",
    },
]

export default function Certifications() {
    return (
        <section className="scroll-mt-24 px-6 py-24 text-white md:py-28">
            <div className="mx-auto max-w-6xl">
                <SectionHeader
                    description="Formal milestones that support my work in software and education."
                    eyebrow="Credentials"
                    title="Certified to keep learning and delivering."
                />

                <div className="mt-14 grid gap-6 md:grid-cols-2">
                    {certifications.map((certificate, index) => (
                        <article
                            className="group relative overflow-hidden rounded-3xl
                                border border-white/10 bg-white/[0.045] p-7
                                transition hover:-translate-y-1
                                hover:border-orange-300/25 md:p-8"
                            key={certificate.title}
                        >
                            <Award
                                className="absolute -bottom-10 -right-8
                                    text-white/[0.035]"
                                size={170}
                            />
                            <div className="relative flex items-start gap-5">
                                <span
                                    className={`grid h-14 w-14 shrink-0 place-items-center
                                        rounded-2xl ${
                                        index === 0
                                            ? "bg-orange-300 text-slate-950"
                                            : "bg-blue-400 text-slate-950"
                                    }`}
                                >
                                    <BadgeCheck size={25} />
                                </span>
                                <div>
                                    <p
                                        className="font-mono text-[11px] uppercase
                                            tracking-wider text-white/40"
                                    >
                                        Issued {certificate.year}
                                    </p>
                                    <h3 className="mt-3 text-xl font-bold leading-7">
                                        {certificate.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-orange-300">
                                        {certificate.issuer}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
