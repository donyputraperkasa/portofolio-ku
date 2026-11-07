import {
    ArrowDown,
    BriefcaseBusiness,
    FileText,
    Globe,
    MapPin,
} from "lucide-react"
import Image from "next/image"
import {
    SiNestjs,
    SiNextdotjs,
    SiNuxt,
    SiPostgresql,
    SiReact,
    SiTypescript,
    SiVite,
} from "react-icons/si"

const cvUrl =
    "https://docs.google.com/document/d/" +
    "1quYpMCwGWWUtjxLIXxJSrMJrJDa0DJvBVqAsg_N3i4g/edit"

export default function Hero() {
    return (
        <section
            className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 md:pb-24 md:pt-40"
            id="top"
        >
            <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
                <div>
                    <h1
                        className="text-4xl font-extrabold leading-[1.12]
                            tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
                    >
                        Mengubah ide kompleks menjadi{" "}
                        <span className="text-[#0284C7]">
                            produk digital yang ramah & bermanfaat.
                        </span>
                    </h1>

                    <p
                        className="mt-6 max-w-xl text-base leading-8
                            text-slate-600 md:text-lg"
                    >
                        Saya adalah <strong className="font-semibold text-slate-900">Owner satelyd.id</strong>,{" "}
                        <strong className="font-semibold text-slate-900">Software Engineering</strong>, dan{" "}
                        <strong className="font-semibold text-slate-900">Pendidik Matematika</strong> di Yogyakarta.
                        Membantu sekolah, organisasi, dan bisnis membangun sistem web modern serta mendampingi siswa memahami matematika dengan nyaman.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <a
                            className="inline-flex items-center justify-center gap-2
                                rounded-xl border border-[#38BDF8]/35 bg-[#0284C7]
                                px-6 py-[11px] text-[14px] font-semibold text-white
                                shadow-sm transition hover:-translate-y-0.5
                                hover:bg-[#0369A1]"
                            href="#projects"
                        >
                            Lihat Portofolio Proyek
                            <ArrowDown size={16} />
                        </a>
                        <a
                            className="inline-flex items-center justify-center gap-2
                                rounded-xl border border-slate-200 bg-white
                                px-5 py-[11px] text-[13.5px] font-semibold
                                text-slate-700 shadow-xs transition
                                hover:-translate-y-0.5 hover:border-slate-300
                                hover:bg-slate-50 hover:text-slate-900"
                            href="#services"
                        >
                            <BriefcaseBusiness size={16} className="text-[#0284C7]" />
                            Layanan Saya
                        </a>
                        <a
                            className="inline-flex items-center justify-center gap-2
                                rounded-xl border border-sky-200 bg-sky-50
                                px-5 py-[11px] text-[13.5px] font-semibold
                                text-[#0284C7] transition hover:-translate-y-0.5
                                hover:bg-sky-100"
                            href={cvUrl}
                            rel="noreferrer"
                            target="_blank"
                        >
                            <FileText size={16} className="text-[#0284C7]" />
                            Lihat CV
                        </a>
                    </div>

                    <div
                        className="mt-10 flex flex-wrap items-center justify-between
                            gap-4 rounded-2xl border border-slate-200 bg-white
                            px-5 py-4 shadow-xs"
                    >
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                            <MapPin size={15} className="text-[#0284C7]" />
                            Yogyakarta, Indonesia
                        </div>

                        <div className="flex items-center gap-3.5 text-xl text-slate-600">
                            <SiNextdotjs className="text-slate-900" title="Next.js" />
                            <SiReact className="text-[#0284C7]" title="React" />
                            <SiVite className="text-amber-500" title="Vite" />
                            <SiTypescript className="text-blue-600" title="TypeScript" />
                            <SiNestjs className="text-rose-600" title="NestJS" />
                            <SiNuxt className="text-emerald-600" title="Nuxt.js" />
                            <SiPostgresql className="text-sky-700" title="PostgreSQL" />
                        </div>
                    </div>
                </div>

                <div className="relative mx-auto w-full max-w-md lg:ml-auto">
                    <div
                        className="relative overflow-hidden rounded-3xl border
                            border-slate-200 bg-white p-3.5 shadow-md"
                    >
                        <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                            <Image
                                alt="Dony Putra Perkasa"
                                className="h-[460px] w-full object-cover object-top"
                                height={560}
                                priority
                                src="/gambar1.jpeg"
                                width={480}
                            />
                        </div>

                        <div
                            className="mt-3.5 rounded-2xl border border-slate-200
                                bg-slate-50 p-4"
                        >
                            <div className="flex items-center justify-between gap-2">
                                <div>
                                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#0284C7]">
                                        Owner
                                    </p>
                                    <p className="mt-0.5 text-base font-bold text-slate-900">
                                        satelyd.id
                                    </p>
                                </div>
                                <a
                                    className="inline-flex items-center gap-1.5 rounded-lg
                                        border border-sky-200 bg-sky-50 px-2.5 py-[5px]
                                        text-[11.5px] font-semibold text-[#0284C7]
                                        transition hover:bg-[#0284C7] hover:text-white"
                                    href="https://satelyd.id"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <Globe size={13} />
                                    Buka
                                </a>
                            </div>
                            <p className="mt-2 text-xs leading-5 text-slate-600">
                                Media pembelajaran interaktif (Game Kelas), bimbingan les matematika, dan pembuatan website modern.
                            </p>
                        </div>
                    </div>

                    <div
                        className="mt-4 grid grid-cols-3 gap-3"
                    >
                        <div className="rounded-2xl border border-slate-200 bg-white p-3.5 text-center shadow-xs">
                            <p className="text-xl font-extrabold text-[#0284C7]">15+</p>
                            <p className="mt-0.5 text-[11px] font-medium text-slate-500">
                                Proyek Aktif
                            </p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white p-3.5 text-center shadow-xs">
                            <p className="text-xl font-extrabold text-[#0284C7]">Gr.</p>
                            <p className="mt-0.5 text-[11px] font-medium text-slate-500">
                                Guru Tersertifikasi
                            </p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white p-3.5 text-center shadow-xs">
                            <p className="text-xl font-extrabold text-[#0284C7]">FSSE</p>
                            <p className="mt-0.5 text-[11px] font-medium text-slate-500">
                                Alumni RevoU
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
