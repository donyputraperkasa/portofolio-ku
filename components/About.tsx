export default function About() {
    return (
        <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6 py-24 text-white"
        >
        <div className="max-w-4xl w-full">

            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                About Me
            </h2>
            <p className="text-white/60">
                A short introduction about who I am and what I do
            </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 md:p-10">

            <p className="text-white/80 leading-relaxed mb-6">
                I am a developer with a strong analytical background in mathematics education, bringing structured thinking and problem-solving into modern web development. I enjoy building practical digital solutions and continuously improving my technical skills.
            </p>

            <p className="text-white/70 leading-relaxed">
                My core stack includes <span className="font-semibold text-orange-300">JavaScript</span> and <span className="font-semibold text-orange-300">TypeScript</span> with modern frameworks such as <span className="font-semibold text-orange-300">Next.js</span> and <span className="font-semibold text-orange-300">NestJS</span> for building fullstack applications. I also work with HTML5, Tailwind CSS, and responsive UI development. I enjoy transforming ideas into clean, functional, and scalable web experiences while continuously learning new technologies.
            </p>

            </div>

        </div>
        </section>
    )
}