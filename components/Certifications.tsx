const certifications = [
    {
        title: "Fullstack Software Engineering",
        issuer: "RevoU",
        year: "2026",
    },
    {
        title: "Teacher Certificate Program",
        issuer: "Kemendikbud",
        year: "2024",
    },
]

export default function Certifications() {
    return (
        <section
        id="certifications"
        className="min-h-screen px-6 py-24 text-white flex items-center justify-center"
        >
        <div className="max-w-4xl w-full">

            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Certifications
            </h2>
            <p className="text-white/60">
                Courses and certifications I have completed
            </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
                <div
                key={index}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6"
                >
                <h3 className="text-lg font-semibold">
                    {cert.title}
                </h3>

                <p className="text-white/70 text-sm">
                    {cert.issuer}
                </p>

                <p className="text-white/50 text-sm">
                    {cert.year}
                </p>
                </div>
            ))}
            </div>

        </div>
        </section>
    )
}
