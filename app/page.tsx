import { Analytics } from "@vercel/analytics/next"

import About from "@/components/About"
import Certifications from "@/components/Certifications"
import Contact from "@/components/Contact"
import Education from "@/components/Education"
import Experience from "@/components/Experience"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Project"
import Services from "@/components/services/Services"
import SoftSkill from "@/components/SoftSkill"
import TechnicalSkill from "@/components/TechnicalSkill"
import ScrollToTop from "@/components/ui/ScrollToTop"

const gridBackground = {
    backgroundImage: [
        "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
        "linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
    ].join(","),
    backgroundSize: "40px 40px",
}

export default function Home() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#020617]">
            <div
                className="pointer-events-none absolute inset-0 opacity-50"
                style={gridBackground}
            />
            <div
                className="pointer-events-none absolute -left-64 top-64 h-[34rem]
                    w-[34rem] rounded-full bg-blue-600/10 blur-[120px]"
            />
            <div
                className="pointer-events-none absolute -right-64 top-[70rem]
                    h-[34rem] w-[34rem] rounded-full bg-orange-500/10
                    blur-[120px]"
            />

            <div className="relative">
                <Navbar />
                <Hero />
                <Services />
                <About />
                <Education />
                <Certifications />
                <Projects />
                <Experience />
                <TechnicalSkill />
                <SoftSkill />
                <Contact />
                <Footer />
                <ScrollToTop />
            </div>
            <Analytics />
        </main>
    )
}
