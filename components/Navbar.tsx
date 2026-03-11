export default function Navbar() {
    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[85%] max-w-5xl
        backdrop-blur-xl bg-white/10 border border-white/20
        rounded-full px-8 py-4 shadow-lg">

        <div className="flex items-center justify-between text-white">

            <h1 className="font-semibold text-lg text-orange-300">
                Dony Putra Perkasa
            </h1>

            <ul className="flex gap-8 text-sm text-white/80">
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

        </div>

        </nav>
    )
}
