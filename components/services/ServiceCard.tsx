import {
    Award,
    Calculator,
    Check,
    Code2,
    GraduationCap,
} from "lucide-react"

import type { Service } from "./service-data"

type ServiceCardProps = {
    service: Service
}

function ServiceVisual({ kind }: Pick<Service, "kind">) {
    const isMath = kind === "mathematics"
    const Icon = isMath ? Calculator : Code2

    return (
        <div className="relative border-b border-sky-100 bg-sky-50 p-6">
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                    <span
                        className="grid h-12 w-12 shrink-0 place-items-center
                            rounded-2xl bg-[#0284C7] text-white shadow-xs"
                    >
                        <Icon size={22} />
                    </span>
                    <div>
                        <span className="inline-block rounded-md border border-sky-200 bg-white px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#0284C7]">
                            {isMath
                                ? "PENDIDIKAN MATEMATIKA"
                                : "STUDIO WEB SATELYD.ID"}
                        </span>
                        <p className="mt-1 text-xs font-medium text-slate-600">
                            {isMath
                                ? "Belajar santai, paham konsep dari dasar"
                                : "Solusi digital fungsional & mudah digunakan"}
                        </p>
                    </div>
                </div>
                {isMath ? (
                    <span className="hidden rounded-xl border border-sky-200 bg-white px-3 py-1.5 font-mono text-xs font-bold text-[#0284C7] sm:inline-block">
                        f(x) = x² + 2x + 1
                    </span>
                ) : (
                    <span className="hidden rounded-xl border border-sky-200 bg-white px-3 py-1.5 font-mono text-xs font-bold text-[#0284C7] sm:inline-block">
                        &lt;Satelyd /&gt;
                    </span>
                )}
            </div>
        </div>
    )
}

export default function ServiceCard({ service }: ServiceCardProps) {
    const isMath = service.kind === "mathematics"

    return (
        <article
            className="group flex flex-col overflow-hidden rounded-3xl border
                border-slate-200 bg-white shadow-xs transition duration-300
                hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
        >
            <ServiceVisual kind={service.kind} />

            <div className="flex flex-1 flex-col p-7 md:p-8">
                <p
                    className="font-mono text-[11px] font-bold uppercase
                        tracking-wider text-[#0284C7]"
                >
                    {service.audience}
                </p>
                <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
                    {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                    {service.description}
                </p>

                {service.highlights && (
                    <div className="mt-5 grid grid-cols-2 gap-2.5 rounded-2xl border border-slate-200 bg-slate-50 p-3.5">
                        {service.highlights.map((item) => (
                            <div key={item.label}>
                                <p className="text-[11px] font-medium text-slate-500">
                                    {item.label}
                                </p>
                                <p className="mt-0.5 text-xs font-bold text-slate-900">
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>
                )}

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                        <li
                            className="flex items-start gap-2.5 text-xs
                                leading-5 text-slate-700"
                            key={feature}
                        >
                            <span
                                className="mt-0.5 grid h-4 w-4 shrink-0
                                    place-items-center rounded-full
                                    bg-sky-100 text-[#0284C7]"
                            >
                                <Check size={10} strokeWidth={3} />
                            </span>
                            {feature}
                        </li>
                    ))}
                </ul>

                <div className="mt-auto pt-7">
                    <div className="border-t border-slate-100 pt-6">
                        <div
                            className="flex items-start gap-3.5 rounded-2xl
                                border border-slate-200 bg-slate-50 p-4"
                        >
                            <span
                                className="grid h-10 w-10 shrink-0 place-items-center
                                    rounded-xl border border-sky-200 bg-sky-50
                                    text-[#0284C7]"
                            >
                                {isMath ? (
                                    <GraduationCap size={19} />
                                ) : (
                                    <Award size={19} />
                                )}
                            </span>
                            <div>
                                <p className="text-sm font-bold text-slate-900">
                                    {service.credential}
                                </p>
                                <p className="mt-0.5 text-xs leading-5 text-slate-500">
                                    {service.credentialDetail}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
