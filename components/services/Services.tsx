import SectionHeader from "../ui/SectionHeader"
import ServiceCard from "./ServiceCard"
import { services } from "./service-data"

export default function Services() {
    return (
        <section
            className="scroll-mt-24 px-6 py-16 md:py-20"
            id="services"
        >
            <div className="mx-auto max-w-6xl">
                <SectionHeader
                    description="Dua bidang keahlian untuk membantu kebutuhan belajar matematika maupun pengembangan sistem web."
                    eyebrow="Layanan Saya"
                    title="Layanan yang saya sediakan."
                />

                <div className="mt-10 grid gap-6 lg:grid-cols-2">
                    {services.map((service) => (
                        <ServiceCard key={service.title} service={service} />
                    ))}
                </div>
            </div>
        </section>
    )
}
