import {
    BriefcaseBusiness,
    Building2,
    Check,
    GraduationCap,
} from "lucide-react"

import SectionHeader from "./ui/SectionHeader"

const experiences = [
    {
        company: "satelyd.id",
        highlights: [
            "Platform media pembelajaran interaktif (Game Kelas)",
            "Pembuatan sistem informasi & website kustom",
            "Bimbingan belajar privat matematika SMP & SMA/K",
        ],
        icon: Building2,
        role: "Owner",
        summary:
            "Membangun ekosistem edukasi digital, layanan pembuatan website, dan bimbingan belajar matematika.",
        year: "Sekarang",
    },
    {
        company: "Yayasan BOPKRI Yogyakarta",
        highlights: [
            "Pengembangan & pemeliharaan aplikasi web internal",
            "Pengelolaan basis data, server, dan alur penerapan",
            "Digitalisasi proses kerja dan dukungan teknis IT",
        ],
        icon: BriefcaseBusiness,
        role: "Staf IT",
        summary:
            "Mengelola infrastruktur teknologi informasi dan membangun sistem digital yayasan serta unit sekolah.",
        year: "2026 — Sekarang",
    },
    {
        company: "Yayasan BOPKRI Yogyakarta",
        highlights: [
            "Penyusunan materi & asesmen pembelajaran matematika",
            "Pembuatan konten edukasi digital bagi siswa & guru",
            "Administrasi akademik serta evaluasi kurikulum",
        ],
        icon: GraduationCap,
        role: "Staf Pendidikan",
        summary:
            "Mendukung peningkatan mutu pembelajaran digital, kurikulum, dan dokumentasi akademik sekolah.",
        year: "2023 — 2025",
    },
]

export default function Experience() {
    return (
        <section
            className="scroll-mt-24 px-6 py-20 md:py-24"
            id="experience"
        >
            <div className="mx-auto max-w-6xl">
                <SectionHeader
                    description={
                        "Perjalanan karier yang tumbuh di persimpangan teknologi informasi, " +
                        "Software Engineering, dan dunia pendidikan."
                    }
                    eyebrow="Pengalaman Kerja"
                    title="Membangun sistem, mengajar, dan mempermudah cara kerja."
                />

                <div className="mt-12 grid gap-6 lg:grid-cols-3">
                    {experiences.map((experience) => {
                        const Icon = experience.icon

                        return (
                            <article
                                className="flex flex-col rounded-3xl border
                                    border-slate-200 bg-white p-6 shadow-xs
                                    transition duration-300 hover:-translate-y-1
                                    hover:border-sky-300 hover:shadow-md md:p-7"
                                key={`${experience.role}-${experience.company}`}
                            >
                                <div className="flex items-center justify-between gap-3">
                                    <span
                                        className="grid h-11 w-11 shrink-0
                                            place-items-center rounded-2xl border
                                            border-sky-200 bg-sky-50 text-[#0284C7]"
                                    >
                                        <Icon size={20} />
                                    </span>
                                    <span
                                        className="rounded-lg border border-sky-200
                                            bg-sky-50 px-2.5 py-1 font-mono
                                            text-[11px] font-semibold uppercase
                                            tracking-wider text-[#0284C7]"
                                    >
                                        {experience.year}
                                    </span>
                                </div>

                                <h3 className="mt-5 text-xl font-extrabold text-slate-900">
                                    {experience.role}
                                </h3>
                                <p className="mt-1 text-xs font-semibold text-slate-500">
                                    {experience.company}
                                </p>

                                <p className="mt-3.5 text-sm leading-6 text-slate-600">
                                    {experience.summary}
                                </p>

                                <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                                    {experience.highlights.map((item) => (
                                        <li
                                            className="flex items-start gap-2.5
                                                text-xs leading-5 text-slate-700"
                                            key={item}
                                        >
                                            <span
                                                className="mt-0.5 grid h-4 w-4
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
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
