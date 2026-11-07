import { ChevronRight, Lock } from "lucide-react"
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
            className="group flex w-full cursor-pointer items-center gap-4
                rounded-2xl border border-slate-200 bg-white p-4 text-left
                shadow-2xs transition duration-200 hover:-translate-y-0.5
                hover:border-[#0284C7] hover:shadow-md focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-[#0284C7]"
            onClick={() => onSelect(project)}
            type="button"
        >
            <div
                className={`grid h-12 w-12 shrink-0 place-items-center
                    rounded-xl text-sm font-extrabold transition
                    group-hover:scale-105 ${style.iconBox}`}
            >
                {initials}
            </div>

            <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-1.5">
                    <span
                        className={`rounded-md border px-2 py-0.5 text-[10px]
                            font-semibold ${style.badge}`}
                    >
                        {project.category}
                    </span>
                    {project.featured && (
                        <span
                            className="rounded-md border border-slate-200
                                bg-slate-100 px-2 py-0.5 text-[10px] font-bold
                                text-slate-700"
                        >
                            Unggulan
                        </span>
                    )}
                    {project.isPrivate && (
                        <span
                            className="inline-flex items-center gap-1 rounded-md
                                border border-slate-200 bg-slate-100 px-2 py-0.5
                                text-[10px] font-bold text-slate-600"
                        >
                            <Lock size={9} />
                            Privat
                        </span>
                    )}
                </div>

                <h3
                    className="mt-1.5 truncate text-base font-extrabold
                        text-slate-900 transition-colors
                        group-hover:text-[#0284C7]"
                >
                    {project.title}
                </h3>

                <p className="mt-0.5 line-clamp-1 text-xs text-slate-500">
                    {project.description}
                </p>

                <div className="mt-2.5 flex items-center gap-2">
                    <div className="flex items-center gap-1.5 text-xs text-slate-600">
                        {project.tech.slice(0, 5).map((tech) => (
                            <span
                                className="inline-flex items-center justify-center
                                    rounded-md border border-slate-200
                                    bg-slate-50 p-1"
                                key={tech}
                                title={tech}
                            >
                                {techIcons[tech]}
                            </span>
                        ))}
                    </div>
                    <span className="ml-auto text-[11px] font-semibold text-slate-400 transition group-hover:text-[#0284C7]">
                        Lihat detail
                    </span>
                </div>
            </div>

            <ChevronRight
                className="shrink-0 text-slate-300 transition
                    group-hover:translate-x-1 group-hover:text-[#0284C7]"
                size={20}
            />
        </button>
    )
}
