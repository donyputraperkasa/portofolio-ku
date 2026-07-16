import { ArrowDown, FileText, MapPin, Sparkles } from "lucide-react"
import Image from "next/image"
import {
    SiNestjs,
    SiNextdotjs,
    SiNuxt,
    SiPostgresql,
    SiTypescript,
    SiVite,
} from "react-icons/si"

const cvUrl =
    "https://docs.google.com/document/d/" +
    "1quYpMCwGWWUtjxLIXxJSrMJrJDa0DJvBVqAsg_N3i4g/edit"

export default function Hero() {
    return (
        <section
            className="relative mx-auto grid min-h-screen max-w-6xl
                items-center gap-14 px-6 pb-20 pt-36 text-white lg:grid-cols-2"
            id="top"
        >
            <div className="relative z-10">
                <div
                    className="mb-7 inline-flex items-center gap-2 rounded-full
                        border border-emerald-400/20 bg-emerald-400/10
                        px-4 py-2 text-xs font-medium text-emerald-300"
                >
                    <span className="relative flex h-2 w-2">
                        <span
                            className="absolute h-full w-full animate-ping
                                rounded-full bg-emerald-300 opacity-70"
                        />
                        <span
                            className="relative h-2 w-2 rounded-full
                                bg-emerald-300"
                        />
                    </span>
                    Available for meaningful projects
                </div>

                <p
                    className="mb-4 flex items-center gap-2 text-sm
                        font-semibold text-orange-300"
                >
                    <Sparkles size={17} />
                    Hello, I&apos;m Dony Putra Perkasa
                </p>
                <h1
                    className="max-w-3xl text-5xl font-black leading-[0.98]
                        tracking-[-0.05em] md:text-7xl"
                >
                    I turn complex ideas into
                    <span
                        className="block bg-gradient-to-r from-orange-300
                            via-amber-200 to-blue-300 bg-clip-text
                            text-transparent"
                    >
                        useful products.
                    </span>
                </h1>
                <p
                    className="mt-7 max-w-xl text-base leading-8
                        text-white/60 md:text-lg"
                >
                    Full-stack developer with a mathematics education
                    background, building thoughtful digital experiences
                    from interface to database.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                    <a
                        className="flex items-center gap-2 rounded-full
                            bg-orange-300 px-6 py-3.5 text-sm font-bold
                            text-slate-950 transition hover:-translate-y-1"
                        href="#projects"
                    >
                        Explore my work
                        <ArrowDown size={17} />
                    </a>
                    <a
                        className="flex items-center gap-2 rounded-full border
                            border-white/15 bg-white/5 px-6 py-3.5 text-sm
                            font-semibold transition hover:bg-white/10"
                        href={cvUrl}
                        rel="noreferrer"
                        target="_blank"
                    >
                        <FileText size={17} />
                        View résumé
                    </a>
                </div>

                <div
                    className="mt-10 flex flex-wrap items-center gap-5
                        border-t border-white/10 pt-6"
                >
                    <span
                        className="flex items-center gap-2 text-xs
                            text-white/45"
                    >
                        <MapPin size={15} className="text-orange-300" />
                        Yogyakarta, Indonesia
                    </span>
                    <div className="flex items-center gap-4 text-2xl text-white/55">
                        <SiNextdotjs title="Next.js" />
                        <SiVite className="text-violet-400" title="Vite" />
                        <SiTypescript className="text-blue-400" title="TypeScript" />
                        <SiNestjs className="text-red-400" title="NestJS" />
                        <SiNuxt className="text-green-400" title="Nuxt.js" />
                        <SiPostgresql className="text-blue-300" title="PostgreSQL" />
                    </div>
                </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:ml-auto">
                <div
                    className="absolute -inset-8 rounded-full bg-blue-500/20
                        blur-3xl"
                />
                <div
                    className="relative overflow-hidden rounded-[2.5rem]
                        border border-white/15 bg-white/5 p-3 shadow-2xl
                        shadow-blue-950/40 rotate-2 transition duration-500
                        hover:rotate-0"
                >
                    <Image
                        alt="Dony Putra Perkasa"
                        className="h-[520px] w-full rounded-[2rem] object-cover"
                        height={620}
                        priority
                        src="/gambar1.jpeg"
                        width={500}
                    />
                    <div
                        className="absolute inset-x-7 bottom-7 rounded-2xl
                            border border-white/15 bg-slate-950/70 p-4
                            backdrop-blur-xl"
                    >
                        <p className="text-xs text-white/50">Currently building</p>
                        <p className="mt-1 font-bold text-white">
                            Better tools for education
                        </p>
                    </div>
                </div>
                <div
                    className="absolute -left-8 top-20 rounded-2xl border
                        border-white/15 bg-slate-950/80 px-4 py-3
                        shadow-xl backdrop-blur-xl"
                >
                    <p className="text-2xl font-black text-orange-300">9+</p>
                    <p className="text-[10px] uppercase tracking-wider text-white/45">
                        Projects shipped
                    </p>
                </div>
            </div>
        </section>
    )
}
