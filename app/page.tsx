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

export default function Home() {
    return (
        <main className="relative min-h-screen overflow-x-hidden bg-[#F8FAFC] text-slate-900">
            <div className="relative">
                <Navbar />
                <Hero />
                <About />
                <Services />
                <Projects />
                <Experience />
                <Education />
                <Certifications />
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
