import { ArrowUpRight, Mail, MapPin, MessageCircle, Sparkles } from "lucide-react"

export default function Contact() {
    return (
        <section className="scroll-mt-24 px-6 py-24 md:py-28" id="contact">
            <div
                className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem]
                    bg-orange-300 px-6 py-16 text-slate-950
                    md:px-14 md:py-20"
            >
                <div
                    className="absolute -right-24 -top-24 h-80 w-80 rounded-full
                        border border-slate-950/15"
                />
                <div
                    className="absolute -right-8 -top-8 h-48 w-48 rounded-full
                        border border-slate-950/15"
                />
                <Sparkles
                    className="absolute bottom-10 right-12 hidden opacity-15 md:block"
                    size={90}
                />

                <div className="relative max-w-3xl">
                    <p
                        className="flex items-center gap-2 text-xs font-bold
                            uppercase tracking-[0.2em]"
                    >
                        <span className="h-2 w-2 rounded-full bg-slate-950" />
                        Get in touch
                    </p>
                    <h2
                        className="mt-6 text-4xl font-black leading-tight
                            tracking-[-0.04em] md:text-6xl"
                    >
                        Have a problem worth solving together?
                    </h2>
                    <p className="mt-6 max-w-2xl text-base leading-8 opacity-70">
                        I&apos;m always happy to discuss a thoughtful product,
                        a collaboration, or the next useful thing to build.
                    </p>

                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                        <a
                            className="flex items-center justify-center gap-2
                                rounded-full bg-slate-950 px-6 py-3.5
                                text-sm font-bold text-white transition
                                hover:-translate-y-1"
                            href="mailto:donyputraperkasa@gmail.com"
                        >
                            <Mail size={18} />
                            Send an email
                            <ArrowUpRight size={17} />
                        </a>
                        <a
                            className="flex items-center justify-center gap-2
                                rounded-full border border-slate-950/25
                                px-6 py-3.5 text-sm font-bold transition
                                hover:bg-slate-950/10"
                            href="https://wa.me/6282236343404"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <MessageCircle size={18} />
                            WhatsApp
                        </a>
                    </div>

                    <div
                        className="mt-12 flex flex-col gap-3 border-t
                            border-slate-950/15 pt-6 text-xs font-medium
                            sm:flex-row sm:items-center sm:justify-between"
                    >
                        <span>donyputraperkasa@gmail.com</span>
                        <span className="flex items-center gap-2 opacity-60">
                            <MapPin size={14} />
                            Yogyakarta, Indonesia
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
