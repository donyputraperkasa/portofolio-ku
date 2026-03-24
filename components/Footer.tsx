export default function Footer() {
    return (
        <footer className="px-6 py-12 text-white border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">

            <h3 className="text-xl font-semibold mb-4">
                Dony Putra Perkasa
            </h3>

            <p className="text-white/60 mb-6">
                Frontend Developer | Backend Developer | Fullstack Developer
            </p>

            <div className="flex justify-center gap-6 text-sm text-white/70 mb-6">
            <a
                href="https://github.com"
                target="_blank"
                className="hover:text-white transition"
            >
                GitHub
            </a>

            <a
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-white transition"
            >
                LinkedIn
            </a>

            <a
                href="mailto:your@email.com"
                className="hover:text-white transition"
            >
                Email
            </a>
            </div>

            <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Dony Putra Perkasa. All rights reserved.
            </p>

        </div>
        </footer>
    )
}
