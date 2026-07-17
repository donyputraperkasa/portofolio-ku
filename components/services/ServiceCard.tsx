import {
    ArrowUpRight,
    Award,
    Calculator,
    Check,
    Code2,
    ExternalLink,
    GraduationCap,
    MessageCircle,
} from "lucide-react"

import type { Service } from "./service-data"

const whatsappNumber = "6282236343404"

type ServiceCardProps = {
    service: Service
}

function ServiceVisual({ kind }: Pick<Service, "kind">) {
    if (kind === "mathematics") {
        return (
            <div className="relative h-52 overflow-hidden bg-blue-400/15 p-6">
                <div
                    className="absolute -right-12 -top-12 h-40 w-40
                        rounded-full border border-blue-300/20"
                />
                <div
                    className="absolute bottom-5 left-6 right-6 rounded-2xl
                        border border-white/10 bg-slate-950/55 p-5
                        backdrop-blur-xl"
                >
                    <div className="flex items-center justify-between">
                        <span
                            className="grid h-11 w-11 place-items-center
                                rounded-xl bg-blue-300 text-slate-950"
                        >
                            <Calculator size={21} />
                        </span>
                        <span
                            className="font-mono text-xs text-blue-200/70"
                        >
                            x² + 2x + 1
                        </span>
                    </div>
                    <div className="mt-5 flex gap-2">
                        <span className="h-2 w-full rounded-full bg-white/15" />
                        <span className="h-2 w-1/2 rounded-full bg-blue-300/60" />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="relative h-52 overflow-hidden bg-orange-300/15 p-6">
            <div
                className="absolute -left-12 -top-12 h-40 w-40
                    rounded-full border border-orange-300/20"
            />
            <div
                className="absolute bottom-5 left-6 right-6 overflow-hidden
                    rounded-2xl border border-white/10 bg-slate-950/55
                    backdrop-blur-xl"
            >
                <div
                    className="flex h-8 items-center gap-1.5 border-b
                        border-white/10 px-4"
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-red-300" />
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                </div>
                <div className="flex items-center gap-4 p-5">
                    <span
                        className="grid h-11 w-11 shrink-0 place-items-center
                            rounded-xl bg-orange-300 text-slate-950"
                    >
                        <Code2 size={21} />
                    </span>
                    <div className="w-full space-y-2">
                        <span className="block h-2 w-3/4 rounded bg-white/20" />
                        <span
                            className="block h-2 w-1/2 rounded
                                bg-orange-300/55"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function ServiceCard({ service }: ServiceCardProps) {
    const isMath = service.kind === "mathematics"
    const accent = isMath ? "text-blue-300" : "text-orange-300"
    const button = isMath ? "hover:bg-blue-300" : "hover:bg-orange-300"
    const whatsappUrl =
        `https://wa.me/${whatsappNumber}?text=` +
        encodeURIComponent(service.whatsappMessage)

    return (
        <article
            className="group overflow-hidden rounded-3xl border
                border-white/10 bg-white/[0.045] transition duration-500
                hover:-translate-y-2 hover:border-white/25
                hover:bg-white/[0.065]"
        >
            <ServiceVisual kind={service.kind} />

            <div className="p-7 md:p-8">
                <p
                    className={`font-mono text-[10px] font-medium uppercase
                        tracking-[0.16em] ${accent}`}
                >
                    {service.audience}
                </p>
                <h3 className="mt-3 text-2xl font-bold text-white">
                    {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/55">
                    {service.description}
                </p>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                        <li
                            className="flex items-start gap-2.5 text-xs
                                leading-5 text-white/65"
                            key={feature}
                        >
                            <span
                                className="mt-0.5 grid h-4 w-4 shrink-0
                                    place-items-center rounded-full
                                    bg-emerald-400/10 text-emerald-300"
                            >
                                <Check size={10} strokeWidth={3} />
                            </span>
                            {feature}
                        </li>
                    ))}
                </ul>

                <div className="mt-7 border-t border-white/10 pt-6">
                    <div
                        className="flex items-start gap-3 rounded-2xl
                            border border-white/10 bg-slate-950/30 p-4"
                    >
                        <span
                            className={`grid h-10 w-10 shrink-0 place-items-center
                                rounded-xl ${
                                isMath
                                    ? "bg-blue-300/10 text-blue-300"
                                    : "bg-orange-300/10 text-orange-300"
                            }`}
                        >
                            {isMath ? (
                                <GraduationCap size={19} />
                            ) : (
                                <Award size={19} />
                            )}
                        </span>
                        <div>
                            <p className="text-sm font-bold text-white">
                                {service.credential}
                            </p>
                            <p className="mt-1 text-xs leading-5 text-white/45">
                                {service.credentialDetail}
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                        <a
                            className={`flex flex-1 items-center justify-center
                                gap-2 rounded-full bg-white px-5 py-3 text-xs
                                font-bold text-slate-950 transition ${button}`}
                            href={whatsappUrl}
                            rel="noreferrer"
                            target="_blank"
                        >
                            <MessageCircle size={16} />
                            Start a conversation
                            <ArrowUpRight size={15} />
                        </a>
                        {service.certificateUrl && (
                            <a
                                className="flex items-center justify-center gap-2
                                    rounded-full border border-white/15 px-5
                                    py-3 text-xs font-bold text-white/70
                                    transition hover:bg-white/10 hover:text-white"
                                href={service.certificateUrl}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <ExternalLink size={15} />
                                View certificate
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </article>
    )
}
