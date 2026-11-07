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
        description:
            "Memecah masalah yang rumit menjadi langkah-langkah yang terstruktur, jelas, dan mudah dipahami.",
        icon: Brain,
        title: "Berpikir Terstruktur",
    },
    {
        description:
            "Merancang tampilan dan alur aplikasi yang ramah pengguna, nyaman dipakai oleh siswa, guru, maupun klien.",
        icon: HeartHandshake,
        title: "Ramah & Berpusat pada Pengguna",
    },
    {
        description:
            "Selalu mengeksplorasi teknologi dan pendekatan pembelajaran interaktif yang relevan dengan kebutuhan nyata.",
        icon: Lightbulb,
        title: "Adaptif & Senang Bereksplorasi",
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
        value: "satelyd.id (Media Pembelajaran, Les Matematika & Pembuatan Website)",
    },
    {
        icon: Briefcase,
        label: "Pekerjaan Saat Ini",
        value: "Staf IT — Yayasan BOPKRI Yogyakarta",
    },
    {
        icon: GraduationCap,
        label: "Latar Belakang",
        value: "Pendidikan Matematika (USD) & Software Engineering (RevoU)",
    },
    {
        icon: MapPin,
        label: "Domisili",
        value: "Yogyakarta, Indonesia",
    },
]

export default function About() {
    return (
        <section className="scroll-mt-24 px-6 py-20 md:py-24" id="about">
            <div className="mx-auto max-w-6xl">
                <SectionHeader
                    description="Perpaduan logika matematika, empati seorang pendidik, dan ketelitian Software Engineering."
                    eyebrow="Tentang Saya"
                    title="Logika di dalam kode. Keramahan di setiap pengalaman."
                />

                <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                    <article
                        className="flex flex-col justify-between rounded-3xl border
                            border-slate-200 bg-white p-7 shadow-xs md:p-9"
                    >
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-lg border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-[#0284C7]">
                                <Building2 size={14} />
                                Owner satelyd.id • Software Engineering • Pendidik
                            </div>

                            <p
                                className="mt-5 text-lg font-semibold leading-8
                                    text-slate-900 md:text-xl md:leading-9"
                            >
                                Saya bergerak di bidang Software Engineering, Pendidik Matematika,
                                sekaligus <span className="text-[#0284C7]">Owner dari satelyd.id</span> yang
                                menggabungkan disiplin analitis matematika dengan kreativitas pengembangan produk digital.
                            </p>

                            <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                                Pengalaman mengajar melatih saya menjelaskan konsep yang sulit menjadi sederhana dan menyenangkan.
                                Melalui <strong className="font-semibold text-slate-900">satelyd.id</strong>, saya menghadirkan
                                platform game kelas interaktif, layanan bimbingan belajar matematika, serta jasa pembuatan website
                                untuk sekolah, lembaga, dan bisnis.
                            </p>

                            <div className="mt-7 divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3">
                                {bioInfo.map(({ icon: Icon, label, value }) => (
                                    <div
                                        className="grid gap-1 py-3 sm:grid-cols-[170px_1fr] sm:items-baseline sm:gap-4"
                                        key={label}
                                    >
                                        <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-500">
                                            <Icon size={14} className="shrink-0 text-[#0284C7]" />
                                            {label}
                                        </span>
                                        <span className="text-sm font-semibold text-slate-900">
                                            {value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-6">
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Owner satelyd.id",
                                    "Software Engineering",
                                    "Pendidik Matematika (Gr.)",
                                    "Pemecah Masalah",
                                ].map((badge) => (
                                    <span
                                        className="rounded-lg border border-slate-200
                                            bg-slate-50 px-3 py-1.5 text-xs font-semibold
                                            text-slate-700"
                                        key={badge}
                                    >
                                        {badge}
                                    </span>
                                ))}
                            </div>

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

                    <div className="flex flex-col gap-4">
                        {values.map(({ description, icon: Icon, title }) => (
                            <article
                                className="flex items-start gap-4 rounded-3xl border
                                    border-slate-200 bg-white p-6 shadow-xs transition
                                    hover:-translate-y-0.5 hover:border-sky-300"
                                key={title}
                            >
                                <span
                                    className="grid h-12 w-12 shrink-0 place-items-center
                                        rounded-2xl border border-sky-200 bg-sky-50
                                        text-[#0284C7]"
                                >
                                    <Icon size={21} />
                                </span>
                                <div>
                                    <h3 className="text-base font-bold text-slate-900">
                                        {title}
                                    </h3>
                                    <p className="mt-1.5 text-sm leading-6 text-slate-600">
                                        {description}
                                    </p>
                                </div>
                            </article>
                        ))}

                        <article
                            className="mt-auto rounded-3xl border border-sky-200
                                bg-sky-50 p-6"
                        >
                            <div className="flex items-center justify-between gap-3">
                                <span className="rounded-lg bg-[#0284C7] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                                    Platform Resmi
                                </span>
                                <span className="font-mono text-xs font-semibold text-[#0284C7]">
                                    satelyd.id
                                </span>
                            </div>
                            <h3 className="mt-3 text-lg font-bold text-slate-900">
                                Ekosistem Digital & Edukasi Terpadu
                            </h3>
                            <p className="mt-1.5 text-xs leading-6 text-slate-600">
                                Melalui satelyd.id, saya menggabungkan game edukasi interaktif di kelas, bimbingan privat matematika, dan pembuatan sistem web dalam satu pintu.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}
