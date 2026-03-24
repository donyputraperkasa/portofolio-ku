"use client"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Project"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import TechnicalSkill from "@/components/TechnicalSkill"
import SoftSkill from "@/components/SoftSkill"
import Certifications from "@/components/Certifications"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import { Analytics } from "@vercel/analytics/next"

export default function Home (){
    return(
        <main
            className="min-h-screen 
            bg-[#020617] 
            bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
            bg-[size:40px_40px]"
        >
            <div className="max-w-6xl mx-auto px-6">
                <Navbar />
                <Hero />
                <About />
                <Projects />
                <Experience />
                <Education />
                <TechnicalSkill />
                <SoftSkill />
                <Certifications />
                <Contact />
                <Footer />
            </div>
        
            <Analytics />
        </main>
    )
}