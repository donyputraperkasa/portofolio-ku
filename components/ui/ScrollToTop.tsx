"use client"

import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > 500)

        handleScroll()
        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToTop = () => {
        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches

        window.scrollTo({
            behavior: reduceMotion ? "auto" : "smooth",
            top: 0,
        })
    }

    if (!visible) return null

    return (
        <button
            aria-label="Back to top"
            className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2
                rounded-xl border border-[#38BDF8]/40 bg-[#0284C7] px-4 py-[11px]
                text-[13.5px] font-semibold text-white shadow-lg transition
                hover:-translate-y-0.5 hover:bg-[#0369A1] focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-[#0284C7] md:bottom-7 md:right-7"
            onClick={scrollToTop}
            title="Kembali ke atas"
            type="button"
        >
            <ArrowUp size={16} strokeWidth={2.5} />
            <span className="hidden sm:inline">Atas</span>
        </button>
    )
}
