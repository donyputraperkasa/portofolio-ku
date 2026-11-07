import {
    ArrowUpRight,
    Globe,
    Mail,
    MapPin,
    MessageCircle,
} from "lucide-react"

export default function Contact() {
    return (
        <section className="scroll-mt-24 px-6 py-20 md:py-24" id="contact">
            <div
                className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl
                    border border-sky-200 bg-sky-50 px-6 py-14 text-slate-900
                    shadow-xs md:px-14 md:py-16"
            >
                <div className="relative mx-auto max-w-2xl text-center">
                    <span
                        className="inline-flex items-center gap-2 rounded-lg
                            border border-sky-200 bg-white px-3.5 py-1.5
                            text-xs font-bold uppercase tracking-wider
                            text-[#0284C7]"
                    >
                        <span className="h-2 w-2 rounded-full bg-[#0284C7]" />
                        Mari Berdiskusi
                    </span>

                    <h2
                        className="mt-4 text-3xl font-extrabold leading-tight
                            tracking-tight text-slate-900 sm:text-4xl"
                    >
                        Ingin membuat website atau butuh pendampingan belajar matematika?
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                        Saya selalu senang berdiskusi tentang ide aplikasi, kebutuhan website sekolah/bisnis melalui{" "}
                        <strong className="font-semibold text-slate-900">satelyd.id</strong>,
                        maupun jadwal les privat matematika di Yogyakarta.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <a
                            className="inline-flex items-center justify-center gap-2
                                rounded-xl border border-[#38BDF8]/35 bg-[#0284C7]
                                px-6 py-[11px] text-[14px] font-semibold text-white
                                shadow-xs transition hover:-translate-y-0.5
                                hover:bg-[#0369A1]"
                            href="https://wa.me/6282236343404?text=Halo%20Mas%20Dony%2C%20saya%20ingin%20berkonsultasi."
                            rel="noreferrer"
                            target="_blank"
                        >
                            <MessageCircle size={17} />
                            Chat via WhatsApp
                            <ArrowUpRight size={16} />
                        </a>

                        <a
                            className="inline-flex items-center justify-center gap-2
                                rounded-xl border border-slate-200 bg-white
                                px-5 py-[11px] text-[13.5px] font-semibold
                                text-slate-700 transition hover:-translate-y-0.5
                                hover:border-slate-300 hover:bg-slate-50
                                hover:text-slate-900"
                            href="mailto:donyputraperkasa@gmail.com"
                        >
                            <Mail size={17} className="text-[#0284C7]" />
                            Kirim Email
                        </a>

                        <a
                            className="inline-flex items-center justify-center gap-2
                                rounded-xl border border-sky-200 bg-white
                                px-5 py-[11px] text-[13.5px] font-semibold
                                text-[#0284C7] transition hover:-translate-y-0.5
                                hover:bg-sky-100"
                            href="https://satelyd.id"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <Globe size={17} className="text-[#0284C7]" />
                            Kunjungi satelyd.id
                        </a>
                    </div>

                    <div
                        className="mt-8 flex flex-wrap items-center justify-center
                            gap-4 border-t border-sky-200/80 pt-6 text-xs
                            font-semibold text-slate-600"
                    >
                        <span>donyputraperkasa@gmail.com</span>
                        <span className="text-slate-300">•</span>
                        <span className="inline-flex items-center gap-1.5 text-slate-500">
                            <MapPin size={14} className="text-[#0284C7]" />
                            Yogyakarta, Indonesia
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
