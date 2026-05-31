export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center text-white px-6 relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent"></div>

        <div className="text-center max-w-3xl relative z-10">

            <div className="flex justify-center mb-8">
            <div className="relative group">

                <div className="absolute inset-0 bg-blue-500/30 blur-[120px] rounded-full"></div>
                <div className="absolute -inset-2 rounded-full border border-blue-400/30 group-hover:scale-110 transition duration-500"></div>

                <img
                src="/gambar1.jpeg"
                alt="profile"
                className="relative w-44 h-44 rounded-full object-cover border-4 border-white/10 shadow-2xl"
                />

            </div>
            </div>

            <div className="flex justify-center items-center gap-3 flex-wrap mb-4">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                    Dony Putra Perkasa
                </h1>

                <span className="px-3 py-1 rounded-full text-xs md:text-sm font-semibold border border-blue-400/30 bg-blue-500/10 text-blue-300 backdrop-blur-sm">
                    Junior IT
                </span>
            </div>

            <p className="text-white/80 mb-4 text-lg md:text-xl font-medium">
            Frontend Developer • Backend Developer • Fullstack Developer
            </p>

            <p className="text-white/60 mb-10 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Passionate about building modern, responsive, and scalable web applications using Next.js, NestJS, PostgreSQL, and modern web technologies.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">

            <a
                href="#projects"
                className="px-7 py-3 rounded-full bg-blue-500 hover:bg-blue-600 hover:scale-105 transition duration-300 text-white font-medium shadow-lg shadow-blue-500/20"
            >
                View Projects
            </a>

            <a
                href="https://docs.google.com/document/d/1quYpMCwGWWUtjxLIXxJSrMJrJDa0DJvBVqAsg_N3i4g/edit?pli=1&tab=t.0"
                className="px-7 py-3 rounded-full border border-white/20 hover:bg-white/10 hover:scale-105 transition duration-300 font-medium backdrop-blur-sm"
            >
                View CV
            </a>

            </div>

        </div>

        </section>
    )
}