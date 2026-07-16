import { Brain, GraduationCap, HeartHandshake, Lightbulb } from "lucide-react"

import SectionHeader from "./ui/SectionHeader"

const values = [
    {
        description: "Breaking complex problems into clear, practical steps.",
        icon: Brain,
        title: "Structured thinking",
    },
    {
        description: "Designing with real people and their context in mind.",
        icon: HeartHandshake,
        title: "Human-centered",
    },
    {
        description: "Always exploring a better approach, tool, or pattern.",
        icon: Lightbulb,
        title: "Curious by nature",
    },
]

export default function About() {
    return (
        <section className="scroll-mt-24 px-6 py-24 md:py-28" id="about">
            <div className="mx-auto max-w-6xl">
                <SectionHeader
                    align="left"
                    description="The perspective and principles behind the products I build."
                    eyebrow="About me"
                    title="Logic in the code. Empathy in the experience."
                />

                <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                    <article
                        className="relative overflow-hidden rounded-3xl border
                            border-white/10 bg-white/[0.045] p-8 md:p-10"
                    >
                        <GraduationCap
                            className="absolute -right-8 -top-8 text-white/[0.035]"
                            size={190}
                        />
                        <p
                            className="relative text-xl font-medium leading-9
                                text-white/85 md:text-2xl md:leading-10"
                        >
                            I am a developer and educator who combines the
                            analytical discipline of mathematics with the
                            creativity of modern product development.
                        </p>
                        <p className="relative mt-6 max-w-2xl leading-8 text-white/55">
                            Teaching trained me to explain difficult ideas simply.
                            Software engineering lets me turn that clarity into
                            interfaces, APIs, and systems people can rely on.
                        </p>
                        <div className="relative mt-10 grid grid-cols-3 gap-3">
                            {["Educator", "Developer", "Problem solver"].map(
                                (item, index) => (
                                    <div
                                        className="rounded-2xl border border-white/10
                                            bg-slate-950/30 p-4"
                                        key={item}
                                    >
                                        <span className="text-xs text-orange-300">
                                            0{index + 1}
                                        </span>
                                        <p className="mt-2 text-xs font-semibold text-white">
                                            {item}
                                        </p>
                                    </div>
                                ),
                            )}
                        </div>
                    </article>

                    <div className="grid gap-4">
                        {values.map(({ description, icon: Icon, title }) => (
                            <article
                                className="group flex items-start gap-4 rounded-3xl
                                    border border-white/10 bg-white/[0.04] p-6
                                    transition hover:-translate-y-1
                                    hover:border-orange-300/25 hover:bg-white/[0.07]"
                                key={title}
                            >
                                <span
                                    className="grid h-11 w-11 shrink-0 place-items-center
                                        rounded-2xl bg-orange-300/10 text-orange-300
                                        transition group-hover:bg-orange-300
                                        group-hover:text-slate-950"
                                >
                                    <Icon size={20} />
                                </span>
                                <div>
                                    <h3 className="font-bold text-white">{title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-white/50">
                                        {description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
