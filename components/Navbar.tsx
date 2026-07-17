"use client"

import { ArrowUpRight, Menu, X } from "lucide-react"
import { useState } from "react"

const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Journey" },
    { href: "#technical-skill", label: "Skills" },
]

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const closeMenu = () => setOpen(false)

    return (
        <nav
            className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)]
                max-w-5xl -translate-x-1/2 rounded-2xl border
                border-white/10 bg-slate-950/70 px-4 py-3 shadow-2xl
                shadow-black/20 backdrop-blur-2xl md:rounded-full md:px-6"
        >
            <div className="flex items-center justify-between">
                <a
                    className="flex items-center gap-3 text-white"
                    href="#top"
                    onClick={closeMenu}
                >
                    <span
                        className="grid h-9 w-9 place-items-center rounded-full
                            bg-orange-300 text-xs font-black text-slate-950"
                    >
                        DP
                    </span>
                    <span className="text-sm font-bold tracking-wide">
                        Dony Putra Perkasa
                    </span>
                </a>

                <div className="hidden items-center gap-7 md:flex">
                    {links.map((link) => (
                        <a
                            className="text-xs font-medium text-white/60
                                transition hover:text-orange-300"
                            href={link.href}
                            key={link.href}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        className="flex items-center gap-2 rounded-full bg-white
                            px-4 py-2.5 text-xs font-bold text-slate-950
                            transition hover:bg-orange-300"
                        href="#contact"
                    >
                        Let&apos;s talk
                        <ArrowUpRight size={15} />
                    </a>
                </div>

                <button
                    aria-expanded={open}
                    aria-label="Toggle navigation"
                    className="grid h-10 w-10 place-items-center rounded-full
                        border border-white/10 text-white md:hidden"
                    onClick={() => setOpen((current) => !current)}
                    type="button"
                >
                    {open ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            <div
                className={`overflow-hidden transition-all duration-300 md:hidden ${
                    open ? "mt-4 max-h-80 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="space-y-1 border-t border-white/10 pt-3">
                    {links.map((link) => (
                        <a
                            className="block rounded-xl px-3 py-3 text-sm
                                text-white/70 hover:bg-white/5 hover:text-white"
                            href={link.href}
                            key={link.href}
                            onClick={closeMenu}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        className="mt-2 flex items-center justify-between rounded-xl
                            bg-orange-300 px-4 py-3 text-sm font-bold
                            text-slate-950"
                        href="#contact"
                        onClick={closeMenu}
                    >
                        Let&apos;s talk
                        <ArrowUpRight size={17} />
                    </a>
                </div>
            </div>
        </nav>
    )
}
