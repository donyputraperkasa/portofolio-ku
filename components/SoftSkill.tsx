import {
    Clock3,
    Heart,
    Laugh,
    Lightbulb,
    RefreshCw,
    ShieldCheck,
    Users,
} from "lucide-react"

const skills = [
    { icon: Lightbulb, label: "Senang Belajar Hal Baru" },
    { icon: Users, label: "Kolaboratif & Komunikatif" },
    { icon: ShieldCheck, label: "Disiplin & Bertanggung Jawab" },
    { icon: Heart, label: "Sabar & Empatik" },
    { icon: RefreshCw, label: "Mudah Beradaptasi" },
    { icon: Clock3, label: "Manajemen Waktu Baik" },
    { icon: Laugh, label: "Ramah & Humoris" },
]

export default function SoftSkill() {
    return (
        <section className="scroll-mt-24 px-6 py-12" id="soft-skill">
            <div
                className="mx-auto max-w-6xl overflow-hidden rounded-3xl border
                    border-slate-200 bg-white p-7 shadow-xs md:p-10"
            >
                <div className="flex flex-col items-center text-center">
                    <span
                        className="inline-flex items-center gap-2 rounded-lg
                            border border-sky-200 bg-sky-50 px-3.5 py-1.5
                            text-xs font-semibold uppercase tracking-wider
                            text-[#0284C7]"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#0284C7]" />
                        Karakter & Kolaborasi
                    </span>
                    <h2 className="mt-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
                        Cara saya bekerja bersama tim & klien.
                    </h2>

                    <div className="mt-6 flex max-w-3xl flex-wrap justify-center gap-2.5">
                        {skills.map(({ icon: Icon, label }) => (
                            <span
                                className="inline-flex items-center gap-2
                                    rounded-xl border border-slate-200
                                    bg-slate-50 px-4 py-2.5 text-xs
                                    font-semibold text-slate-700 transition
                                    hover:-translate-y-0.5 hover:border-sky-300
                                    hover:bg-sky-50 hover:text-[#0284C7]"
                                key={label}
                            >
                                <Icon className="text-[#0284C7]" size={15} />
                                {label}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
