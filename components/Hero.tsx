export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center text-white px-6 relative">
        
        <div className="text-center max-w-2xl">

            <div className="flex justify-center mb-10">
            <div className="relative">

                <div className="absolute inset-0 bg-blue-500/30 blur-[120px] rounded-full"></div>

                <img
                src="/gambar1.jpeg"
                alt="profile"
                className="relative w-40 h-40 rounded-full object-cover border border-white/20"
                />

            </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Dony Putra Perkasa
            </h1>

            <p className="text-white/70 mb-6 text-lg">
            Frontend Developer | Backend Developer | Fullstack Developer
            </p>

            <p className="text-white/60 mb-10">
            Building modern web applications using Next.js, NestJS and PostgreSQL
            </p>

            <div className="flex justify-center gap-4">

            <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition text-white"
            >
                View Projects
            </a>

            <a
                href="https://docs.google.com/document/d/1quYpMCwGWWUtjxLIXxJSrMJrJDa0DJvBVqAsg_N3i4g/edit?pli=1&tab=t.0"
                className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition"
            >
                View CV
            </a>

            </div>

        </div>

        </section>
    )
}