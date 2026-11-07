import { Code2, Sigma } from "lucide-react"

import SectionHeader from "./ui/SectionHeader"

const developmentSkills = [
    {
        items: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
        title: "Bahasa Pemrograman",
    },
    {
        items: ["React", "Next.js", "Vue.js", "Nuxt", "Tailwind CSS", "Vite"],
        title: "Frontend",
    },
    {
        items: ["NestJS", "REST API", "Prisma", "Postman"],
        title: "Backend",
    },
    {
        items: ["PostgreSQL", "MariaDB", "Supabase", "Firebase"],
        title: "Basis Data",
    },
    {
        items: ["Git", "GitHub", "Vercel", "Railway", "Docker"],
        title: "Perangkat & Cloud",
    },
]

const mathematicsSkills = [
    {
        items: ["Aljabar", "Aljabar Linear", "Teori Peluang & Statistika"],
        title: "Aljabar & Statistika",
    },
    {
        items: ["Diferensial", "Integral", "Kalkulus Vektor"],
        title: "Kalkulus",
    },
    {
        items: ["Geometri Bidang", "Geometri Ruang", "Trigonometri"],
        title: "Geometri",
    },
]

export default function TechnicalSkill() {
    return (
        <section
            className="scroll-mt-24 px-6 py-16 md:py-20"
            id="technical-skill"
        >
            <div className="mx-auto max-w-6xl">
                <SectionHeader
                    description="Perangkat teknologi dan keahlian akademik yang saya gunakan untuk membangun aplikasi serta membimbing siswa."
                    eyebrow="Keahlian Teknis"
                    title="Dua disiplin ilmu, satu pola pikir pemecah masalah."
                />

                <div className="mt-10 grid gap-6 lg:grid-cols-2">
                    <article
                        className="rounded-3xl border border-slate-200
                            bg-white p-6 shadow-xs"
                    >
                        <div className="flex items-center gap-3.5 border-b border-slate-100 pb-4">
                            <span
                                className="grid h-10 w-10 shrink-0
                                    place-items-center rounded-xl
                                    bg-[#0284C7] text-white"
                            >
                                <Code2 size={20} />
                            </span>
                            <div>
                                <h3 className="text-base font-extrabold text-slate-900">
                                    Software Engineering
                                </h3>
                                <p className="text-xs text-slate-500">
                                    Teknologi pengembangan web & sistem aplikasi
                                </p>
                            </div>
                        </div>

                        <div className="mt-4 divide-y divide-slate-100">
                            {developmentSkills.map(({ items, title }) => (
                                <div
                                    className="flex flex-col gap-2 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                                    key={title}
                                >
                                    <span className="text-xs font-bold text-slate-700 sm:w-40 sm:shrink-0">
                                        {title}
                                    </span>
                                    <div className="flex flex-wrap gap-1.5 sm:justify-end">
                                        {items.map((item) => (
                                            <span
                                                className="rounded-lg border border-sky-200 bg-sky-50 px-2.5 py-1 text-xs font-medium text-[#0284C7]"
                                                key={item}
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </article>

                    <article
                        className="flex flex-col rounded-3xl border border-slate-200
                            bg-white p-6 shadow-xs"
                    >
                        <div className="flex items-center gap-3.5 border-b border-slate-100 pb-4">
                            <span
                                className="grid h-10 w-10 shrink-0
                                    place-items-center rounded-xl bg-[#0284C7]
                                    text-white"
                            >
                                <Sigma size={20} />
                            </span>
                            <div>
                                <h3 className="text-base font-extrabold text-slate-900">
                                    Pendidikan Matematika
                                </h3>
                                <p className="text-xs text-slate-500">
                                    Materi akademik dan pendampingan belajar siswa
                                </p>
                            </div>
                        </div>

                        <div className="mt-4 divide-y divide-slate-100">
                            {mathematicsSkills.map(({ items, title }) => (
                                <div
                                    className="flex flex-col gap-2 py-3.5 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                                    key={title}
                                >
                                    <span className="text-xs font-bold text-slate-700 sm:w-40 sm:shrink-0">
                                        {title}
                                    </span>
                                    <div className="flex flex-wrap gap-1.5 sm:justify-end">
                                        {items.map((item) => (
                                            <span
                                                className="rounded-lg border border-sky-200 bg-sky-50 px-2.5 py-1 text-xs font-medium text-[#0284C7]"
                                                key={item}
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}
