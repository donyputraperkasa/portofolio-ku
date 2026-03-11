const experiences = [
    {
        role: "Education Staff",
        company: "Fulltime - Yayasan BOPKRI Yogyakarta",
        year: "2023 - Present",
        description: [
            "Streamline academic administration processes by organizing lesson plans, reports, and student performance tracking, reducing preparation time through structured documentation systems.",
            "Design and implement engaging digital learning media, increasing classroom participation and enhancing students’ comprehension of abstract mathematical concepts.",
            "Develop examination materials and evaluation frameworks aligned with curriculum standards, ensuring fair, measurable, and outcome-based student assessments.",
            "Contribute to the school’s documentation and content team by producing educational and promotional digital materials, supporting institutional branding and student engagement initiatives."
        ],
    },
]

export default function Experience() {
    return (
        <section
        id="experience"
        className="min-h-screen px-6 py-24 text-white flex items-center justify-center"
        >
        <div className="max-w-4xl w-full">

            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Experience
            </h2>
            <p className="text-white/60">
                My working experience
            </p>
            </div>

            <div className="space-y-6">
            {experiences.map((exp, index) => (
                <div
                key={index}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6"
                >
                <h3 className="text-xl font-semibold">
                    {exp.role}
                </h3>

                <p className="text-white/70">
                    {exp.company}
                </p>

                <p className="text-sm text-white/50 mb-3">
                    {exp.year}
                </p>

                <ul className="text-white/80 text-sm space-y-3 mt-4">
                    {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 leading-relaxed">
                            <span className="text-green-400 mt-1"></span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                </div>
            ))}
            </div>

        </div>
        </section>
    )
}
