import {
    ArrowUpRight,
    Brain,
    Briefcase,
    Building2,
    GraduationCap,
    HeartHandshake,
    Lightbulb,
    MapPin,
    User,
} from "lucide-react"

import SectionHeader from "./ui/SectionHeader"

const values = [
    {
        description: "Memecah masalah rumit menjadi solusi yang jelas dan terukur.",
        icon: Brain,
        title: "Berpikir Terstruktur",
    },
    {
        description: "Membangun aplikasi yang nyaman dipakai siswa, guru, dan klien.",
        icon: HeartHandshake,
        title: "Ramah Pengguna",
    },
    {
        description: "Menggabungkan teknologi web modern dengan media belajar interaktif.",
        icon: Lightbulb,
        title: "Adaptif & Inovatif",
    },
]

const bioInfo = [
    {
        icon: User,
        label: "Nama Lengkap",
        value: "Albertus Magnus Dony Putra Perkasa",
    },
    {
        icon: Building2,
        label: "Owner",
        value: "satelyd.id",
    },
    {
        icon: Briefcase,
        label: "Pekerjaan",
        value: "Staf IT — Yayasan BOPKRI Yogyakarta",
    },
    {
        icon: GraduationCap,
        label: "Pendidikan",
        value: "Pendidikan Matematika (USD) & Software Engineering (RevoU)",
    },
    {
        icon: MapPin,
        label: "Domisili",
        value: "Bantul, Yogyakarta",
    },
]

export default function About() {
    return (
        <section className="scroll-mt-24 px-6 py-16 md:py-20" id="about">
            <div className="mx-auto max-w-6xl">
                <SectionHeader
                    description="Perpaduan logika matematika, empati pendidik, dan ketelitian Software Engineering."
                    eyebrow="Tentang Saya"
                    title="Mengenal saya lebih dekat."
                />

                <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                    <article
                        className="flex min-w-0 flex-col justify-between rounded-3xl border
                            border-slate-200 bg-white p-6 shadow-xs md:p-8"
                    >
                        <div>
                            <p className="text-base font-semibold leading-7 text-slate-900 md:text-lg">
                                Berfokus pada{" "}
                                <span className="text-[#0284C7]">Software Engineering</span>,{" "}
                                <span className="text-[#0284C7]">Pendidikan Matematika</span>, serta membangun ekosistem digital melalui{" "}
                                <span className="text-[#0284C7]">satelyd.id</span>.
                            </p>

                            <div className="mt-5 divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-2">
                                {bioInfo.map(({ icon: Icon, label, value }) => (
                                    <div
                                        className="grid gap-1 py-2.5 sm:grid-cols-[140px_1fr] sm:items-baseline sm:gap-4"
                                        key={label}
                                    >
                                        <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-500">
                                            <Icon
                                                className="shrink-0 text-[#0284C7]"
                                                size={14}
                                            />
                                            {label}
                                        </span>
                                        <span className="text-sm font-semibold text-slate-900">
                                            {value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-2">
                            <span className="text-xs font-medium text-slate-500">
                                Game Kelas • Les Matematika • Pembuatan Website
                            </span>

                            <a
                                className="inline-flex items-center gap-2 rounded-xl
                                    border border-[#38BDF8]/35 bg-[#0284C7] px-5
                                    py-[11px] text-[13.5px] font-semibold text-white
                                    transition hover:-translate-y-0.5 hover:bg-[#0369A1]"
                                href="https://satelyd.id"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Kunjungi satelyd.id
                                <ArrowUpRight size={16} />
                            </a>
                        </div>
                    </article>

                    <div className="flex min-w-0 flex-col justify-between gap-3.5">
                        {values.map(({ description, icon: Icon, title }) => (
                            <article
                                className="flex items-center gap-4 rounded-2xl border
                                    border-slate-200 bg-white p-4 shadow-xs transition
                                    hover:-translate-y-0.5 hover:border-sky-300 md:p-5"
                                key={title}
                            >
                                <span
                                    className="grid h-11 w-11 shrink-0 place-items-center
                                        rounded-xl border border-sky-200 bg-sky-50
                                        text-[#0284C7]"
                                >
                                    <Icon size={20} />
                                </span>
                                <div>
                                    <h3 className="text-sm font-bold text-slate-900 md:text-base">
                                        {title}
                                    </h3>
                                    <p className="mt-0.5 text-xs leading-5 text-slate-600">
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
