import { MapPin, Sparkles } from "lucide-react"

export default function Footer() {
    return (
        <footer className="px-6 pb-8 pt-3 text-white">
            <div
                className="mx-auto max-w-6xl overflow-hidden rounded-3xl
                    border border-white/10 bg-white/[0.035]"
            >
                <div
                    className="grid gap-8 p-6 md:grid-cols-2 md:items-center
                        md:p-8"
                >
                    <div className="flex items-center gap-4">
                        <span
                            className="grid h-12 w-12 shrink-0 place-items-center
                                rounded-2xl bg-orange-300 text-sm font-black
                                text-slate-950"
                        >
                            DP
                        </span>
                        <div>
                            <p className="font-bold">Dony Putra Perkasa</p>
                            <p className="mt-1 text-xs text-white/35">
                                Making complex things easier to understand.
                            </p>
                        </div>
                    </div>

                    <div
                        className="flex flex-col gap-3 md:items-end
                            md:text-right"
                    >
                        <div className="flex flex-wrap gap-2 md:justify-end">
                            <span
                                className="rounded-full bg-blue-300/10 px-3
                                    py-1.5 text-[10px] font-medium
                                    text-blue-300"
                            >
                                Mathematics Tutor
                            </span>
                            <span
                                className="rounded-full bg-orange-300/10 px-3
                                    py-1.5 text-[10px] font-medium
                                    text-orange-300"
                            >
                                Full-Stack Developer
                            </span>
                        </div>
                        <p
                            className="flex items-center gap-2 text-[11px]
                                text-white/35"
                        >
                            <MapPin size={13} />
                            Yogyakarta, Indonesia
                        </p>
                    </div>
                </div>

                <div
                    className="flex flex-col gap-3 border-t border-white/10
                        px-6 py-4 text-[10px] text-white/25 sm:flex-row
                        sm:items-center sm:justify-between md:px-8"
                >
                    <p>
                        © {new Date().getFullYear()} Dony Putra Perkasa.
                        All rights reserved.
                    </p>
                    <p className="flex items-center gap-1.5">
                        <Sparkles size={12} className="text-orange-300/60" />
                        Designed and built with care.
                    </p>
                </div>
            </div>
        </footer>
    )
}
