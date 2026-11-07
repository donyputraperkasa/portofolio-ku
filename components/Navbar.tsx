"use client"

import { ArrowUpRight, Globe, Menu, X } from "lucide-react"
import { useState } from "react"

const links = [
    { href: "#about", label: "Tentang" },
    { href: "#services", label: "Layanan" },
    { href: "#projects", label: "Portofolio" },
    { href: "#experience", label: "Pengalaman" },
    { href: "#technical-skill", label: "Keahlian" },
]

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const closeMenu = () => setOpen(false)

    return (
        <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
            <nav
                aria-label="Navigasi utama"
                className="mx-auto max-w-6xl rounded-2xl border border-slate-200
                    bg-white px-4 py-3 shadow-sm md:px-6"
            >
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <a
                            className="flex items-center gap-3 text-slate-900"
                            href="#top"
                            onClick={closeMenu}
                        >
                            <span
                                className="grid h-10 w-10 shrink-0 place-items-center
                                    rounded-xl bg-[#0284C7] text-xs font-extrabold
                                    text-white"
                            >
                                DP
                            </span>
                            <div>
                                <span className="block text-sm font-bold tracking-tight text-slate-900">
                                    Dony Putra Perkasa
                                </span>
                                <span className="block text-[11px] font-medium text-slate-500">
                                    Owner satelyd.id
                                </span>
                            </div>
                        </a>
                    </div>

                    <div className="hidden items-center gap-6 md:flex">
                        {links.map((link) => (
                            <a
                                className="text-[13.5px] font-medium text-slate-600
                                    transition hover:text-[#0284C7]"
                                href={link.href}
                                key={link.href}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="hidden items-center gap-2.5 md:flex">
                        <a
                            className="inline-flex items-center gap-2 rounded-xl border
                                border-slate-200 bg-slate-50 px-4 py-[11px]
                                text-[13.5px] font-semibold text-slate-700 transition
                                hover:border-[#0284C7] hover:bg-sky-50
                                hover:text-[#0284C7]"
                            href="https://satelyd.id"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <Globe size={15} />
                            satelyd.id
                        </a>
                        <a
                            className="inline-flex items-center gap-2 rounded-xl border
                                border-[#38BDF8]/35 bg-[#0284C7] px-5 py-[11px]
                                text-[13.5px] font-semibold text-white transition
                                hover:-translate-y-0.5 hover:bg-[#0369A1]"
                            href="#contact"
                        >
                            Hubungi Saya
                            <ArrowUpRight size={16} />
                        </a>
                    </div>

                    <button
                        aria-expanded={open}
                        aria-label="Buka navigasi"
                        className="inline-flex h-10 w-10 items-center justify-center
                            rounded-xl border border-slate-200 bg-slate-50
                            text-slate-700 transition hover:bg-slate-100 md:hidden"
                        onClick={() => setOpen((current) => !current)}
                        type="button"
                    >
                        {open ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {open && (
                    <div className="mt-3 border-t border-slate-100 pt-3 md:hidden">
                        <div className="flex flex-col gap-1">
                            {links.map((link) => (
                                <a
                                    className="rounded-xl px-3.5 py-2.5 text-sm
                                        font-medium text-slate-700 transition
                                        hover:bg-slate-100 hover:text-[#0284C7]"
                                    href={link.href}
                                    key={link.href}
                                    onClick={closeMenu}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                        <div className="mt-3 grid grid-cols-2 gap-2.5 border-t border-slate-100 pt-3">
                            <a
                                className="inline-flex items-center justify-center gap-2
                                    rounded-xl border border-slate-200 bg-slate-50
                                    px-4 py-[11px] text-[13.5px] font-semibold
                                    text-slate-700 transition hover:bg-slate-100"
                                href="https://satelyd.id"
                                onClick={closeMenu}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <Globe size={15} />
                                satelyd.id
                            </a>
                            <a
                                className="inline-flex items-center justify-center gap-2
                                    rounded-xl border border-[#38BDF8]/35 bg-[#0284C7]
                                    px-4 py-[11px] text-[13.5px] font-semibold
                                    text-white transition hover:bg-[#0369A1]"
                                href="#contact"
                                onClick={closeMenu}
                            >
                                Hubungi Saya
                                <ArrowUpRight size={15} />
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
