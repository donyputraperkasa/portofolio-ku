export default function SoftSkill() {
    const softSkills = [
        "Enjoy Learning",
        "Teamwork",
        "Discipline",
    ];

    return (
        <section id="soft-skill" className="py-20">
        <h2 className="text-3xl font-bold text-white mb-10">
            Soft Skills
        </h2>

        <div className="flex flex-wrap gap-4">
            {softSkills.map((skill, index) => (
            <span
                key={index}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white/80"
            >
                {skill}
            </span>
            ))}
        </div>
        </section>
    );
}
