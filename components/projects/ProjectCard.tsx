import { ArrowUpRight, Check } from "lucide-react"
import type { ReactNode } from "react"
import {
    SiFirebase,
    SiNestjs,
    SiNextdotjs,
    SiRailway,
    SiReact,
    SiSupabase,
    SiTailwindcss,
    SiTypescript,
    SiVite,
} from "react-icons/si"

import type { Project, ProjectAccent } from "./project-data"

const accentStyles: Record<ProjectAccent, string> = {
    blue: "from-blue-500/30 via-blue-500/10 to-transparent text-blue-300",
    cyan: "from-cyan-500/30 via-cyan-500/10 to-transparent text-cyan-300",
    emerald:
        "from-emerald-500/30 via-emerald-500/10 to-transparent text-emerald-300",
    orange:
        "from-orange-500/30 via-orange-500/10 to-transparent text-orange-300",
    pink: "from-pink-500/30 via-pink-500/10 to-transparent text-pink-300",
    purple:
        "from-purple-500/30 via-purple-500/10 to-transparent text-purple-300",
}

const techIcons: Record<string, ReactNode> = {
    firebase: <SiFirebase className="text-orange-400" />,
    nestjs: <SiNestjs className="text-red-400" />,
    nextjs: <SiNextdotjs />,
    railway: <SiRailway />,
    react: <SiReact className="text-cyan-400" />,
    supabase: <SiSupabase className="text-emerald-400" />,
    tailwind: <SiTailwindcss className="text-cyan-400" />,
    typescript: <SiTypescript className="text-blue-400" />,
    vite: <SiVite className="text-yellow-400" />,
}

type ProjectCardProps = {
    index: number
    project: Project
}

export default function ProjectCard({ index, project }: ProjectCardProps) {
    const accent = accentStyles[project.accent]
    const number = String(index + 1).padStart(2, "0")
    const initials = project.title
        .split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2)

    return (
        <article
            className="group flex h-full flex-col overflow-hidden rounded-3xl
                border border-white/10 bg-white/[0.045] shadow-2xl
                shadow-black/10 transition duration-500 hover:-translate-y-2
                hover:border-white/25 hover:bg-white/[0.07]"
        >
            <div
                className={`relative h-48 overflow-hidden bg-gradient-to-br ${accent}`}
            >
                <div
                    className="absolute -right-12 -top-12 h-40 w-40 rounded-full
                        border border-current opacity-20"
                />
                <div
                    className="absolute -bottom-20 -left-12 h-48 w-48 rounded-full
                        border border-current opacity-10"
                />

                <div className="absolute inset-x-5 top-5 flex items-center justify-between">
                    <span
                        className="rounded-full border border-white/15 bg-black/15
                            px-3 py-1 text-[10px] font-medium tracking-wider
                            text-white/80 backdrop-blur-md"
                    >
                        {project.category}
                    </span>
                    <span className="font-mono text-xs text-white/50">{number}</span>
                </div>

                <div
                    className="absolute inset-x-5 bottom-0 flex h-28 items-center
                        rounded-t-2xl border border-b-0 border-white/15
                        bg-slate-950/60 px-6 backdrop-blur-xl"
                >
                    <div
                        className="grid h-14 w-14 place-items-center rounded-2xl
                            border border-current bg-white/10 text-xl font-bold
                            shadow-lg transition duration-500 group-hover:scale-110"
                    >
                        {initials}
                    </div>
                    <div className="ml-4 flex-1 space-y-2">
                        <div className="h-2 w-2/3 rounded-full bg-white/35" />
                        <div className="h-2 w-1/2 rounded-full bg-white/15" />
                    </div>
                </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-start justify-between gap-3">
                    <h3
                        className="text-xl font-bold text-white transition-colors
                            group-hover:text-orange-300"
                    >
                        {project.title}
                    </h3>
                    {project.featured && (
                        <span
                            className="shrink-0 rounded-full bg-orange-400/10 px-2.5
                                py-1 text-[9px] font-semibold uppercase tracking-wider
                                text-orange-300 ring-1 ring-orange-300/20"
                        >
                            New
                        </span>
                    )}
                </div>

                <p className="mb-5 text-sm leading-6 text-white/60">
                    {project.description}
                </p>

                <ul className="mb-6 space-y-2.5">
                    {project.highlights.map((item) => (
                        <li
                            className="flex items-start gap-2.5 text-xs leading-5
                                text-white/70"
                            key={item}
                        >
                            <span
                                className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center
                                    rounded-full bg-emerald-400/10 text-emerald-300"
                            >
                                <Check size={10} strokeWidth={3} />
                            </span>
                            {item}
                        </li>
                    ))}
                </ul>

                <div className="mt-auto">
                    <div className="mb-5 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                            <span
                                className="flex items-center gap-1.5 rounded-lg
                                    border border-white/10 bg-white/5 px-2.5 py-1.5
                                    text-[11px] capitalize text-white/65"
                                key={tech}
                            >
                                <span className="text-sm">{techIcons[tech]}</span>
                                {tech}
                            </span>
                        ))}
                    </div>

                    <a
                        className="flex w-full items-center justify-between rounded-xl
                            bg-white px-4 py-3 text-sm font-semibold text-slate-950
                            transition hover:bg-orange-300"
                        href={project.demo}
                        rel="noreferrer"
                        target="_blank"
                    >
                        View live project
                        <ArrowUpRight size={18} />
                    </a>
                </div>
            </div>
        </article>
    )
}
