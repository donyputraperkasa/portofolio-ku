import { ArrowUp } from "lucide-react"

export default function Footer() {
    return (
        <footer className="px-6 pb-10 pt-4 text-white">
            <div
                className="mx-auto grid max-w-6xl gap-8 border-t
                    border-white/10 pt-8 md:grid-cols-3 md:items-center"
            >
                <div>
                    <p className="font-bold">Dony Putra Perkasa</p>
                    <p className="mt-1 text-xs text-white/35">
                        Full-stack developer & educator
                    </p>
                </div>
                <p className="text-xs text-white/35 md:text-center">
                    Designed and built with care in Yogyakarta.
                </p>
                <div className="flex items-center gap-5 md:justify-end">
                    <a
                        className="text-xs text-white/50 transition
                            hover:text-orange-300"
                        href="mailto:donyputraperkasa@gmail.com"
                    >
                        Email
                    </a>
                    <a
                        className="flex items-center gap-2 text-xs
                            text-white/50 transition hover:text-orange-300"
                        href="#top"
                    >
                        Back to top
                        <ArrowUp size={14} />
                    </a>
                </div>
                <p
                    className="border-t border-white/5 pt-5 text-[10px]
                        text-white/20 md:col-span-3"
                >
                    © {new Date().getFullYear()} Dony Putra Perkasa.
                    All rights reserved.
                </p>
            </div>
        </footer>
    )
}
