import { BookOpen, Code2, Sigma } from "lucide-react"

import SectionHeader from "./ui/SectionHeader"

const education = [
    {
        degree: "Software Engineering",
        description:
            "Pendidikan intensif berbasis proyek dalam pengembangan antarmuka, sistem backend, basis data, pengujian, dan kolaborasi produk digital.",
        icon: Code2,
        school: "RevoU",
        topics: ["Next.js", "NestJS", "TypeScript", "PostgreSQL"],
        year: "2025 — 2026",
    },
    {
        degree: "Pendidikan Profesi Guru (PPG)",
        description:
            "Pendidikan profesi guru dalam perancangan pembelajaran, instruksi berdiferensiasi, asesmen, dan manajemen kelas yang berpusat pada siswa.",
        icon: BookOpen,
        school: "Universitas Sanata Dharma",
        topics: ["Pedagogi", "Asesmen", "Desain Pembelajaran"],
        year: "2023 — 2024",
    },
    {
        degree: "Sarjana Pendidikan Matematika (S.Pd.)",
        description:
            "Fondasi kuat dalam penalaran analitis, pemecahan masalah terstruktur, statistika, dan komunikasi konsep matematika secara jelas.",
        icon: Sigma,
        school: "Universitas Sanata Dharma",
        topics: ["Aljabar", "Kalkulus", "Statistika"],
        year: "2014 — 2019",
    },
]

export default function Education() {
    return (
        <section
            className="scroll-mt-24 px-6 py-20 md:py-24"
            id="education"
        >
            <div className="mx-auto max-w-6xl">
                <SectionHeader
                    description={
                        "Perjalanan pendidikan formal yang membentuk cara saya menganalisis masalah, " +
                        "berkomunikasi, dan membangun solusi."
                    }
                    eyebrow="Pendidikan"
                    title="Fondasi kuat di bidang manusia dan teknologi."
                />

                <div className="mt-12 grid gap-6 lg:grid-cols-3">
                    {education.map((item, index) => {
                        const Icon = item.icon

                        return (
                            <article
                                className="group relative flex flex-col
                                    overflow-hidden rounded-3xl border
                                    border-slate-200 bg-white p-7 shadow-xs
                                    transition duration-300 hover:-translate-y-1
                                    hover:border-sky-300 hover:shadow-md"
                                key={item.degree}
                            >
                                <span
                                    className="absolute right-6 top-6 font-mono
                                        text-xs font-bold text-slate-300"
                                >
                                    0{index + 1}
                                </span>
                                <span
                                    className="grid h-12 w-12 place-items-center
                                        rounded-2xl border border-sky-200
                                        bg-sky-50 text-[#0284C7]"
                                >
                                    <Icon size={22} />
                                </span>
                                <p
                                    className="mt-6 font-mono text-xs font-bold
                                        uppercase tracking-wider text-[#0284C7]"
                                >
                                    {item.year}
                                </p>
                                <h3 className="mt-2 text-xl font-extrabold text-slate-900">
                                    {item.degree}
                                </h3>
                                <p className="mt-1 text-sm font-semibold text-slate-500">
                                    {item.school}
                                </p>
                                <p className="mt-4 text-sm leading-7 text-slate-600">
                                    {item.description}
                                </p>
                                <div className="mt-auto pt-6">
                                    <div className="flex flex-wrap gap-2">
                                        {item.topics.map((topic) => (
                                            <span
                                                className="rounded-lg border
                                                    border-slate-200 bg-slate-50
                                                    px-2.5 py-1 text-xs font-medium
                                                    text-slate-600"
                                                key={topic}
                                            >
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
