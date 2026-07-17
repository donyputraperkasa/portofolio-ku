import SectionHeader from "../ui/SectionHeader"
import ServiceCard from "./ServiceCard"
import { services } from "./service-data"

const identities = [
    "Mathematics Tutor",
    "Full-Stack Web Developer",
    "Educator",
    "Problem Solver",
]

export default function Services() {
    return (
        <section
            className="scroll-mt-24 px-6 pb-24 pt-16 text-white md:pb-28"
            id="services"
        >
            <div className="mx-auto max-w-6xl">
                <SectionHeader
                    description={
                        "Two different fields with one shared purpose: " +
                        "making complex things easier to understand and use."
                    }
                    eyebrow="How I can help"
                    title="Choose the support that fits your goals."
                />

                <div className="mt-14 grid gap-7 lg:grid-cols-2">
                    {services.map((service) => (
                        <ServiceCard key={service.title} service={service} />
                    ))}
                </div>

                <div
                    className="mt-8 overflow-hidden rounded-2xl border
                        border-white/10 bg-white/[0.035] px-5 py-4"
                >
                    <div
                        className="flex flex-wrap items-center justify-center
                            gap-x-6 gap-y-3"
                    >
                        {identities.map((identity, index) => (
                            <div
                                className="flex items-center gap-6"
                                key={identity}
                            >
                                <span
                                    className="font-mono text-[10px] uppercase
                                        tracking-[0.18em] text-white/45"
                                >
                                    {identity}
                                </span>
                                {index < identities.length - 1 && (
                                    <span className="text-orange-300">✦</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <p className="mt-4 text-center text-[11px] text-white/30">
                    Every engagement is tailored to your goals, context,
                    and specific requirements.
                </p>
            </div>
        </section>
    )
}
