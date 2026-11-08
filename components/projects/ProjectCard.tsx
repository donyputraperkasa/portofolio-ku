import { ArrowUpRight, Globe, Lock } from "lucide-react"
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
    const cleanHost = project.demo
        ? project.demo.replace(/^https?:\/\//, "").replace(/\/$/, "")
        : "akses-privat.internal"

    return (
        <button
            className="group flex w-full min-w-0 cursor-pointer flex-col
                overflow-hidden rounded-2xl border border-slate-200 bg-white
                text-left shadow-2xs transition duration-200
                hover:-translate-y-1 hover:border-[#0284C7] hover:shadow-md
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-[#0284C7]"
            onClick={() => onSelect(project)}
            type="button"
        >
            {/* Header URL Mini ala Browser */}
            <div
                className="flex w-full items-center justify-between gap-2
                    border-b border-slate-100 bg-slate-50/90 px-4 py-2.5
                    transition-colors group-hover:border-sky-100
                    group-hover:bg-sky-50/60"
            >
                <div className="flex min-w-0 items-center gap-2">
                    <div className="flex shrink-0 items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-slate-300 transition-colors group-hover:bg-sky-300" />
                        <span className="h-2 w-2 rounded-full bg-slate-300 transition-colors group-hover:bg-sky-300" />
                        <span className="h-2 w-2 rounded-full bg-[#0284C7]/60 transition-colors group-hover:bg-[#0284C7]" />
                    </div>

                    <span
                        className="ml-1 inline-flex min-w-0 items-center gap-1
                            truncate font-mono text-[11px] font-medium
                            text-slate-500 group-hover:text-slate-700"
                    >
                        {project.isPrivate ? (
                            <Lock className="shrink-0 text-slate-400" size={10} />
                        ) : (
                            <Globe className="shrink-0 text-[#0284C7]" size={10} />
                        )}
                        <span className="truncate">{cleanHost}</span>
                    </span>
                </div>

                <ArrowUpRight
                    className="shrink-0 text-slate-400 transition
                        group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                        group-hover:text-[#0284C7]"
                    size={15}
                />
            </div>

            {/* Isi Kartu */}
            <div className="flex flex-1 flex-col justify-between p-5">
                <div className="min-w-0">
                    <p className="truncate text-[11px] font-bold uppercase tracking-wider text-[#0284C7]">
                        {project.category}
                    </p>

                    <h3
                        className="mt-1 truncate text-base font-extrabold
                            text-slate-900 transition-colors
                            group-hover:text-[#0284C7]"
                    >
                        {project.title}
                    </h3>

                    <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-slate-600">
                        {project.description}
                    </p>
                </div>
            </div>
        </button>
    )
}
