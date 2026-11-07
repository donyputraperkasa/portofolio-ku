import SectionHeader from "../ui/SectionHeader"
import ServiceCard from "./ServiceCard"
import { services } from "./service-data"

const identities = [
    "Owner satelyd.id",
    "Software Engineering",
    "Pendidik Matematika (Gr.)",
    "Staf IT BOPKRI",
]

export default function Services() {
    return (
        <section
            className="scroll-mt-24 px-6 py-20 md:py-24"
            id="services"
        >
            <div className="mx-auto max-w-6xl">
                <SectionHeader
                    description={
                        "Dua bidang keahlian dengan satu tujuan yang sama: " +
                        "membuat hal yang kompleks menjadi lebih mudah dipahami dan digunakan."
                    }
                    eyebrow="Layanan Saya"
                    title="Pilih dukungan yang sesuai dengan kebutuhan Anda."
                />

                <div className="mt-12 grid gap-7 lg:grid-cols-2">
                    {services.map((service) => (
                        <ServiceCard key={service.title} service={service} />
                    ))}
                </div>

                <div
                    className="mt-8 rounded-2xl border border-slate-200
                        bg-white px-5 py-4 shadow-2xs"
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
                                    className="font-mono text-xs font-semibold
                                        uppercase tracking-wider text-slate-600"
                                >
                                    {identity}
                                </span>
                                {index < identities.length - 1 && (
                                    <span className="text-[#0284C7]">•</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
