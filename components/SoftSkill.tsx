import {
    Clock3,
    Heart,
    Laugh,
    Lightbulb,
    RefreshCw,
    ShieldCheck,
    Users,
} from "lucide-react"

const skills = [
    { icon: Lightbulb, label: "Enjoy learning" },
    { icon: Users, label: "Teamwork" },
    { icon: ShieldCheck, label: "Discipline" },
    { icon: Heart, label: "Problem solving" },
    { icon: RefreshCw, label: "Adaptability" },
    { icon: Clock3, label: "Time management" },
    { icon: Laugh, label: "Good humor" },
]

export default function SoftSkill() {
    return (
        <section className="scroll-mt-24 px-6 py-16" id="soft-skill">
            <div
                className="mx-auto max-w-6xl overflow-hidden rounded-3xl border
                    border-white/10 bg-gradient-to-r from-blue-500/10
                    via-white/[0.04] to-orange-400/10 p-7 md:p-10"
            >
                <div
                    className="flex flex-col justify-between gap-7
                        lg:flex-row lg:items-center"
                >
                    <div className="max-w-sm text-white">
                        <p
                            className="text-xs font-semibold uppercase
                                tracking-[0.2em] text-orange-300"
                        >
                            Beyond the code
                        </p>
                        <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                            How I show up in a team.
                        </h2>
                    </div>
                    <div className="flex max-w-3xl flex-wrap gap-3">
                        {skills.map(({ icon: Icon, label }) => (
                            <span
                                className="flex items-center gap-2 rounded-full
                                    border border-white/10 bg-slate-950/40
                                    px-4 py-2.5 text-xs text-white/65
                                    transition hover:-translate-y-1
                                    hover:border-orange-300/30 hover:text-white"
                                key={label}
                            >
                                <Icon className="text-orange-300" size={15} />
                                {label}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
