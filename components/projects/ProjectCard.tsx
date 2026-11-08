import { ArrowUpRight } from "lucide-react"
import type { ReactNode } from "react"
import {
    SiFirebase,
    SiJavascript,
    SiNestjs,
    SiNextdotjs,
    SiRailway,
    SiReact,
    SiSupabase,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
    SiVite,
} from "react-icons/si"

import type { Project, ProjectAccent } from "./project-data"

const singleAccentStyle = {
    badge: "border-sky-200 bg-sky-50 text-[#0284C7]",
    iconBox: "bg-[#0284C7] text-white",
}

export const accentStyles: Record<
    ProjectAccent,
    {
        badge: string
        iconBox: string
    }
> = {
    blue: singleAccentStyle,
    cyan: singleAccentStyle,
    emerald: singleAccentStyle,
    orange: singleAccentStyle,
    pink: singleAccentStyle,
    purple: singleAccentStyle,
}

export const techIcons: Record<string, ReactNode> = {
    firebase: <SiFirebase className="text-amber-500" />,
    javascript: <SiJavascript className="text-amber-500" />,
    nestjs: <SiNestjs className="text-rose-600" />,
    nextjs: <SiNextdotjs className="text-slate-900" />,
    railway: <SiRailway className="text-slate-800" />,
    react: <SiReact className="text-[#0284C7]" />,
    supabase: <SiSupabase className="text-emerald-600" />,
    tailwind: <SiTailwindcss className="text-cyan-600" />,
    typescript: <SiTypescript className="text-blue-600" />,
    vercel: <SiVercel className="text-slate-900" />,
    vite: <SiVite className="text-amber-500" />,
}

type ProjectCardProps = {
    onSelect: (project: Project) => void
    project: Project
}

export default function ProjectCard({ onSelect, project }: ProjectCardProps) {
    const style = accentStyles[project.accent]
    const initials = project.title
        .split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()

    return (
        <button
            className="group flex min-w-0 cursor-pointer flex-col
                justify-between gap-3.5 overflow-hidden rounded-2xl border
                border-slate-200 bg-white p-4 text-left shadow-2xs transition
                duration-200 hover:-translate-y-1 hover:border-[#0284C7]
                hover:shadow-md focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-[#0284C7]"
            onClick={() => onSelect(project)}
            type="button"
        >
            <div className="flex w-full items-center justify-between gap-2">
                <div
                    className={`grid h-10 w-10 shrink-0 place-items-center
                        rounded-xl text-xs font-extrabold transition
                        group-hover:scale-105 ${style.iconBox}`}
                >
                    {initials}
                </div>

                <span
                    className="grid h-7 w-7 shrink-0 place-items-center
                        rounded-lg bg-slate-50 text-slate-400 transition
                        group-hover:bg-sky-50 group-hover:text-[#0284C7]"
                >
                    <ArrowUpRight size={15} />
                </span>
            </div>

            <div className="min-w-0">
                <p className="truncate text-[11px] font-semibold text-[#0284C7]">
                    {project.category}
                </p>

                <h3
                    className="mt-1 line-clamp-2 text-sm font-extrabold
                        leading-snug text-slate-900 transition-colors
                        group-hover:text-[#0284C7]"
                >
                    {project.title}
                </h3>
            </div>
        </button>
    )
}
