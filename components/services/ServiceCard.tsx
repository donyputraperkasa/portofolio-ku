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

export default function ServiceCard({ service }: ServiceCardProps) {
    const isMath = service.kind === "mathematics"
    const Icon = isMath ? Calculator : Code2
    const CredentialIcon = isMath ? GraduationCap : Award

    return (
        <article
            className="group flex flex-col justify-between rounded-3xl border
                border-slate-200 bg-white p-6 shadow-xs transition duration-300
                hover:-translate-y-1 hover:border-sky-300 hover:shadow-md md:p-7"
        >
            <div>
                <div className="flex items-center gap-3.5">
                    <span
                        className="grid h-12 w-12 shrink-0 place-items-center
                            rounded-2xl bg-[#0284C7] text-white shadow-xs"
                    >
                        <Icon size={22} />
                    </span>
                    <div>
                        <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#0284C7]">
                            {service.audience}
                        </p>
                        <h3 className="mt-0.5 text-xl font-extrabold text-slate-900">
                            {service.title}
                        </h3>
                    </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                    {service.description}
                </p>

                <ul className="mt-5 grid gap-2.5 border-t border-slate-100 pt-4 sm:grid-cols-2">
                    {service.features.map((feature) => (
                        <li
                            className="flex items-start gap-2 text-xs leading-5
                                text-slate-700"
                            key={feature}
                        >
                            <span
                                className="mt-0.5 grid h-4 w-4 shrink-0
                                    place-items-center rounded-full bg-sky-100
                                    text-[#0284C7]"
                            >
                                <Check size={10} strokeWidth={3} />
                            </span>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-5 flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <CredentialIcon className="shrink-0 text-[#0284C7]" size={17} />
                <p className="text-xs font-semibold text-slate-700">
                    {service.credential}
                </p>
            </div>
        </article>
    )
}
