"use client"

import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > 600)

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
            className="fixed bottom-5 right-5 z-40 grid h-12 w-12
                place-items-center rounded-full border border-orange-200/30
                bg-orange-300 text-slate-950 shadow-2xl
                shadow-black/30 transition hover:-translate-y-1 hover:bg-white
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-orange-200 md:bottom-7 md:right-7"
            onClick={scrollToTop}
            title="Back to top"
            type="button"
        >
            <ArrowUp size={20} strokeWidth={2.5} />
        </button>
    )
}
