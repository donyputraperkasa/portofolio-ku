export default function TechnicalSkill() {
    const skills = [
        {
        category: "Programming Languages",
        items: ["JavaScript", "TypeScript"],
        },
        {
        category: "Frontend Framework",
        items: ["Next.js"],
        },
        {
        category: "Backend Framework",
        items: ["NestJS"],
        },
        {
        category: "Database Management",
        items: ["PostgreSQL"],
        },
        {
        category: "Cloud Service / Infrastructure",
        items: ["Railway", "Vercel"],
        },
        {
        category: "Version Control",
        items: ["Git"],
        },
        {
        category: "Software Development",
        items: ["Postman"],
        },
    ];

    return (
        <section id="technical-skill" className="py-20">
        <h2 className="text-3xl font-bold text-white mb-10">
            Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
            <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-5"
            >
                <h3 className="text-white font-semibold mb-2">
                {skill.category}
                </h3>

                <p className="text-white/70 text-sm">
                {skill.items.join(", ")}
                </p>
            </div>
            ))}
        </div>
        </section>
    );
}
