"use client"

import {
    ArrowUpRight,
    Check,
    Eye,
    EyeOff,
    Lock,
    X,
} from "lucide-react"
import { useEffect, useState } from "react"

import SectionHeader from "./ui/SectionHeader"
import ProjectCard, {
    accentStyles,
    techIcons,
} from "./projects/ProjectCard"
import {
    type Project,
    type ProjectGroup,
    projects,
} from "./projects/project-data"

const filterTabs: { id: ProjectGroup; label: string }[] = [
    { id: "all", label: "Semua Proyek" },
    { id: "featured", label: "Unggulan" },
    { id: "edtech", label: "Edukasi & Game Kelas" },
    { id: "system", label: "Sistem & Portal Sekolah" },
    { id: "client", label: "Bisnis & Klien" },
]

export default function Projects() {
    const [activeTab, setActiveTab] = useState<ProjectGroup>("all")
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [showLivePreview, setShowLivePreview] = useState(false)

    const filteredProjects = projects.filter((project) => {
        if (activeTab === "all") return true
        if (activeTab === "featured") return Boolean(project.featured)
        return project.group === activeTab
    })

    const handleOpenModal = (project: Project) => {
        setSelectedProject(project)
        setShowLivePreview(false)
    }

    const handleCloseModal = () => {
        setSelectedProject(null)
        setShowLivePreview(false)
    }

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                handleCloseModal()
            }
        }

        if (selectedProject) {
            document.body.style.overflow = "hidden"
            window.addEventListener("keydown", handleKeyDown)
        }

        return () => {
            document.body.style.overflow = "unset"
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [selectedProject])

    return (
        <section
            className="scroll-mt-24 px-6 py-20 md:py-24"
            id="projects"
        >
            <div className="mx-auto w-full max-w-6xl">
                <SectionHeader
                    description="Klik pada salah satu kartu proyek di bawah ini untuk melihat rincian fitur, teknologi, dan pratinjau langsung."
                    eyebrow="Portofolio Karya"
                    title="Proyek nyata untuk menyelesaikan kebutuhan nyata."
                />

                <div
                    className="mt-8 flex flex-wrap items-center justify-center
                        gap-2 sm:mt-10 sm:gap-2.5"
                    role="tablist"
                >
                    {filterTabs.map((tab) => {
                        const isActive = activeTab === tab.id
                        const count =
                            tab.id === "all"
                                ? projects.length
                                : tab.id === "featured"
                                  ? projects.filter((p) => p.featured).length
                                  : projects.filter((p) => p.group === tab.id)
                                        .length

                        return (
                            <button
                                aria-selected={isActive}
                                className={`inline-flex items-center gap-1.5
                                    rounded-xl border px-3.5 py-2 text-xs
                                    font-semibold transition sm:gap-2 sm:px-4
                                    sm:py-[11px] sm:text-[13.5px] ${
                                        isActive
                                            ? "border-[#38BDF8]/40 bg-[#0284C7] text-white shadow-xs"
                                            : "border-slate-200 bg-white text-slate-700 hover:border-sky-300 hover:bg-sky-50 hover:text-[#0284C7]"
                                    }`}
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                role="tab"
                                type="button"
                            >
                                <span>{tab.label}</span>
                                <span
                                    className={`rounded-md px-1.5 py-0.5 text-[11px] font-bold ${
                                        isActive
                                            ? "bg-[#0369A1] text-white"
                                            : "bg-slate-100 text-slate-600"
                                    }`}
                                >
                                    {count}
                                </span>
                            </button>
                        )
                    })}
                </div>

                {/* Grid Kartu Ringkas */}
                <div className="mt-8 grid grid-cols-2 gap-3.5 sm:mt-10 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
                    {filteredProjects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            onSelect={handleOpenModal}
                            project={project}
                        />
                    ))}
                </div>
            </div>

            {/* Modal Detail Proyek (Model satelyd-official) */}
            {selectedProject && (
                <div
                    aria-modal="true"
                    className="fixed inset-0 z-50 flex items-center
                        justify-center bg-slate-900/60 p-4 backdrop-blur-xs"
                    onClick={handleCloseModal}
                    role="dialog"
                >
                    <div
                        className={`flex max-h-[calc(100vh-2rem)] w-full
                            flex-col overflow-hidden rounded-3xl border
                            border-slate-200 bg-white shadow-2xl ${
                                showLivePreview ? "max-w-4xl" : "max-w-xl"
                            }`}
                        onClick={(event) => event.stopPropagation()}
                    >
                        {/* Header Modal */}
                        <div className="flex items-start justify-between gap-3 border-b border-slate-100 px-5 py-4 sm:gap-4 sm:px-7 sm:py-5">
                            <div className="flex min-w-0 items-center gap-3 sm:gap-3.5">
                                <div
                                    className={`grid h-11 w-11 shrink-0
                                        place-items-center rounded-2xl text-sm
                                        font-extrabold sm:h-12 sm:w-12 sm:text-base ${
                                            accentStyles[selectedProject.accent]
                                                .iconBox
                                        }`}
                                >
                                    {selectedProject.title
                                        .split(" ")
                                        .map((word) => word[0])
                                        .join("")
                                        .slice(0, 2)
                                        .toUpperCase()}
                                </div>
                                <div className="min-w-0">
                                    <div className="flex flex-wrap items-center gap-1.5">
                                        <span
                                            className={`rounded-md border px-2
                                                py-0.5 text-[11px] font-semibold ${
                                                    accentStyles[
                                                        selectedProject.accent
                                                    ].badge
                                                }`}
                                        >
                                            {selectedProject.category}
                                        </span>
                                        {selectedProject.featured && (
                                            <span className="rounded-md border border-slate-200 bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-700">
                                                Unggulan
                                            </span>
                                        )}
                                        {selectedProject.isPrivate && (
                                            <span className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-600">
                                                <Lock size={10} />
                                                Privat
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="mt-1 text-base font-extrabold text-slate-900 sm:text-xl">
                                        {selectedProject.title}
                                    </h3>
                                </div>
                            </div>

                            <button
                                aria-label="Tutup modal"
                                className="grid h-9 w-9 shrink-0 place-items-center
                                    rounded-xl border border-slate-200
                                    bg-slate-50 text-slate-500 transition
                                    hover:bg-slate-100 hover:text-slate-900"
                                onClick={handleCloseModal}
                                type="button"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Isi Modal */}
                        <div className="space-y-5 overflow-y-auto px-6 py-5 sm:px-7">
                            <p className="text-sm leading-7 text-slate-600">
                                {selectedProject.description}
                            </p>

                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                                    Fitur & Keunggulan Utama
                                </p>
                                <ul className="space-y-2.5">
                                    {selectedProject.highlights.map((item) => (
                                        <li
                                            className="flex items-start gap-2.5
                                                text-sm leading-6 text-slate-700"
                                            key={item}
                                        >
                                            <span
                                                className="mt-1 grid h-4 w-4
                                                    shrink-0 place-items-center
                                                    rounded-full bg-sky-100
                                                    text-[#0284C7]"
                                            >
                                                <Check
                                                    size={10}
                                                    strokeWidth={3}
                                                />
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <p className="mb-2.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                                    Teknologi yang Digunakan
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.tech.map((tech) => (
                                        <span
                                            className="inline-flex items-center
                                                gap-1.5 rounded-lg border
                                                border-slate-200 bg-white px-3
                                                py-1.5 text-xs font-semibold
                                                capitalize text-slate-700"
                                            key={tech}
                                        >
                                            <span className="text-sm">
                                                {techIcons[tech]}
                                            </span>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Frame Pratinjau Langsung (jika tombol Pratinjau diklik) */}
                            {showLivePreview && selectedProject.demo && (
                                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-900">
                                    <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2.5 text-xs text-slate-300">
                                        <div className="flex items-center gap-1.5">
                                            <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                                            <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                                            <span className="h-2.5 w-2.5 rounded-full bg-[#0284C7]" />
                                            <span className="ml-2 truncate font-mono text-[11px] text-slate-400">
                                                {selectedProject.demo}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="h-[380px] w-full bg-white">
                                        <iframe
                                            className="h-full w-full border-0"
                                            loading="lazy"
                                            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                                            src={selectedProject.demo}
                                            title={`Pratinjau - ${selectedProject.title}`}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Footer Modal (Ukuran Button satelyd-official) */}
                        <div className="flex flex-wrap items-center justify-end gap-2.5 border-t border-slate-100 bg-slate-50 px-6 py-4 sm:px-7">
                            <button
                                className="inline-flex items-center justify-center
                                    rounded-xl border border-slate-200 bg-white
                                    px-5 py-[11px] text-[13.5px] font-semibold
                                    text-slate-700 transition hover:bg-slate-100"
                                onClick={handleCloseModal}
                                type="button"
                            >
                                Tutup
                            </button>

                            {selectedProject.embeddable &&
                                selectedProject.demo && (
                                    <button
                                        className="inline-flex items-center
                                            justify-center gap-2 rounded-xl
                                            border border-sky-200 bg-sky-50 px-5
                                            py-[11px] text-[13.5px]
                                            font-semibold text-[#0284C7]
                                            transition hover:bg-sky-100"
                                        onClick={() =>
                                            setShowLivePreview((prev) => !prev)
                                        }
                                        type="button"
                                    >
                                        {showLivePreview ? (
                                            <>
                                                <EyeOff size={16} />
                                                Sembunyikan Pratinjau
                                            </>
                                        ) : (
                                            <>
                                                <Eye size={16} />
                                                Pratinjau Langsung
                                            </>
                                        )}
                                    </button>
                                )}

                            {selectedProject.isPrivate ? (
                                <span
                                    className="inline-flex items-center gap-2
                                        rounded-xl border border-slate-200
                                        bg-slate-100 px-5 py-[11px] text-[13.5px]
                                        font-semibold text-slate-600"
                                >
                                    <Lock size={15} />
                                    Tautan Dirahasiakan
                                </span>
                            ) : (
                                selectedProject.demo && (
                                    <a
                                        className="inline-flex items-center
                                            justify-center gap-2 rounded-xl
                                            border border-[#38BDF8]/35
                                            bg-[#0284C7] px-6 py-[11px]
                                            text-[14px] font-semibold text-white
                                            transition hover:bg-[#0369A1]"
                                        href={selectedProject.demo}
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        Buka Proyek
                                        <ArrowUpRight size={16} />
                                    </a>
                                )
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
