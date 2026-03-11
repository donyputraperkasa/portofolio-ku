const education = [
    {
        school: "RevoU",
        degree: "Fullstack Software Engineering",
        year: "2025 - 2026",
        description: "During my time at the faculty, I studied fundamental web development technologies including HTML5, Tailwind CSS, JavaScript, and TypeScript. I also gained experience using Next.js for front-end development and Nest.js for back-end development, building a solid foundation in full-stack web application development",
    },
    {
        school: "Sanata Dharma University",
        degree: "Mathematics Education",
        year: "2014 - 2019",
        description: "Studied core subjects including Algebra, Geometry, Calculus, and Statistics, while developing analytical and problem-solving skills. Gained knowledge in instructional planning, classroom management, and effective teaching strategies, including preparing structured lesson plans, designing engaging learning activities, and incorporating games and ice-breaking sessions to create an interactive and positive classroom environment."
    }
]

export default function Education() {
    return (
        <section
        id="education"
        className="min-h-screen px-6 py-24 text-white flex items-center justify-center"
        >
        <div className="max-w-4xl w-full">

            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
            <p className="text-white/60">
                My academic background
            </p>
            </div>

            <div className="space-y-6">
            {education.map((item, index) => (
                <div
                key={index}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6"
                >
                <h3 className="text-xl font-semibold">{item.school}</h3>
                <p className="text-white/70">{item.degree}</p>
                <p className="text-sm text-white/50 mb-3">{item.year}</p>
                <p className="text-white/70 text-sm">{item.description}</p>
                </div>
            ))}
            </div>

        </div>
        </section>
    )
}
