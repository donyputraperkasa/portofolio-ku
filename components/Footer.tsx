import { Mail } from "lucide-react"
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa6"

const socials = [
    {
        href: "https://www.instagram.com/donyputraperkasa/",
        icon: FaInstagram,
        label: "Instagram",
    },
    {
        href: "https://www.tiktok.com/@donyputraperkasa",
        icon: FaTiktok,
        label: "TikTok",
    },
    {
        href: "https://www.linkedin.com/in/dony-putra-perkasa-49ba87233/",
        icon: FaLinkedin,
        label: "LinkedIn",
    },
    {
        href: "mailto:donyputraperkasa@gmail.com",
        icon: Mail,
        label: "Email",
    },
]

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white">
            <div
                className="mx-auto flex max-w-6xl flex-col items-center
                    justify-between gap-4 px-6 py-8 text-center md:flex-row
                    md:text-left"
            >
                <div>
                    <p className="text-sm font-bold text-slate-900">
                        Dony Putra Perkasa{" "}
                        <span className="font-normal text-slate-400">•</span>{" "}
                        <a
                            className="font-semibold text-[#0284C7] hover:underline"
                            href="https://satelyd.id"
                            rel="noreferrer"
                            target="_blank"
                        >
                            satelyd.id
                        </a>
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                        © {new Date().getFullYear()} Dony Putra Perkasa. Hak cipta dilindungi.
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-slate-600">
                    <span className="rounded-lg border border-sky-200 bg-sky-50 px-2.5 py-1 text-[#0284C7]">
                        Owner satelyd.id
                    </span>
                    <span className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-slate-700">
                        Software Engineering
                    </span>
                    <span className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-slate-700">
                        Matematika (Gr.)
                    </span>
                </div>

                <div className="flex items-center gap-2.5">
                    {socials.map(({ href, icon: Icon, label }) => (
                        <a
                            aria-label={label}
                            className="grid h-9 w-9 place-items-center
                                rounded-xl border border-slate-200
                                bg-slate-50 text-slate-600 transition
                                hover:-translate-y-0.5
                                hover:border-[#0284C7] hover:bg-sky-50
                                hover:text-[#0284C7]"
                            href={href}
                            key={label}
                            rel="noreferrer"
                            target="_blank"
                            title={label}
                        >
                            <Icon size={15} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}
