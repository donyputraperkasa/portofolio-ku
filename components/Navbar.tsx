"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
    const [open, setOpen] = useState(false)

    const handleClose = () => setOpen(false)

    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl
        backdrop-blur-xl bg-white/10 border border-white/20
        rounded-2xl md:rounded-full px-6 md:px-8 py-3 md:py-4 shadow-lg">

            <div className="flex items-center justify-between text-white">

                <h1 className="font-semibold text-base md:text-lg text-orange-300">
                    Dony Putra Perkasa
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-sm text-white/80">
                    <li className="hover:text-white transition cursor-pointer">
                        <a href="#about">About</a>
                    </li>

                    <li className="hover:text-white transition cursor-pointer">
                        <a href="#projects">Projects</a>
                    </li>

                    <li className="hover:text-white transition cursor-pointer">
                        <a href="#experience">Experience</a>
                    </li>

                    <li className="hover:text-white transition cursor-pointer">
                        <a href="#education">Education</a>
                    </li>

                    <li className="hover:text-white transition cursor-pointer">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>

                {/* Mobile Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${
                    open ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"
                }`}
            >
                <ul className="flex flex-col gap-4 text-sm text-white/90">
                    <li>
                        <a href="#about" onClick={handleClose}>About</a>
                    </li>
                    <li>
                        <a href="#projects" onClick={handleClose}>Projects</a>
                    </li>
                    <li>
                        <a href="#experience" onClick={handleClose}>Experience</a>
                    </li>
                    <li>
                        <a href="#education" onClick={handleClose}>Education</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={handleClose}>Contact</a>
                    </li>
                </ul>
            </div>

        </nav>
    )
}
