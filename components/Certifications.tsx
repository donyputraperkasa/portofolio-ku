import { Award, BadgeCheck, ExternalLink } from "lucide-react"

import SectionHeader from "./ui/SectionHeader"

const certifications = [
    {
        issuer: "Kemendikbudristek RI",
        subtitle: "Sertifikat Pendidik Profesional (Gr.)",
        title: "Program Pendidikan Profesi Guru (PPG)",
        year: "2024",
    },
    {
        certificateUrl:
            "https://drive.google.com/file/d/" +
            "1iZQperKuI1gqOSOFeHGNZKmU7NXpDE_m/view?usp=sharing",
        issuer: "RevoU",
        subtitle: "Full-Stack Software Engineering",
        title: "Software Engineering",
        year: "2026",
    },
]

export default function Certifications() {
    return (
        <section className="scroll-mt-24 px-6 py-20 md:py-24">
            <div className="mx-auto max-w-6xl">
                <SectionHeader
                    description="Sertifikasi resmi yang mendukung kompetensi saya di bidang Software Engineering dan pendidikan."
                    eyebrow="Sertifikasi & Kredensial"
                    title="Tersertifikasi untuk terus belajar dan berkarya."
                />

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {certifications.map((certificate) => (
                        <article
                            className="group relative overflow-hidden rounded-3xl
                                border border-slate-200 bg-white p-7 shadow-xs
                                transition hover:-translate-y-1
                                hover:border-sky-300 hover:shadow-md md:p-8"
                            key={certificate.title}
                        >
                            <Award
                                className="absolute -bottom-8 -right-6
                                    text-slate-100"
                                size={150}
                            />
                            <div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                                <div className="flex items-start gap-4">
                                    <span
                                        className="grid h-14 w-14 shrink-0
                                            place-items-center rounded-2xl
                                            bg-[#0284C7] text-white"
                                    >
                                        <BadgeCheck size={26} />
                                    </span>
                                    <div>
                                        <p
                                            className="font-mono text-xs font-bold
                                                uppercase tracking-wider
                                                text-slate-400"
                                        >
                                            Diterbitkan {certificate.year}
                                        </p>
                                        <h3 className="mt-1.5 text-xl font-extrabold leading-7 text-slate-900">
                                            {certificate.title}
                                        </h3>
                                        <p className="mt-1 text-xs font-medium text-slate-500">
                                            {certificate.subtitle}
                                        </p>
                                        <p className="mt-2 text-sm font-bold text-[#0284C7]">
                                            {certificate.issuer}
                                        </p>
                                    </div>
                                </div>

                                {certificate.certificateUrl && (
                                    <a
                                        className="inline-flex shrink-0 items-center
                                            justify-center gap-2 rounded-xl border
                                            border-slate-200 bg-slate-50 px-4
                                            py-[11px] text-[13.5px] font-semibold
                                            text-slate-700 transition
                                            hover:border-[#0284C7] hover:bg-sky-50
                                            hover:text-[#0284C7]"
                                        href={certificate.certificateUrl}
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <ExternalLink size={15} />
                                        Lihat Sertifikat
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
