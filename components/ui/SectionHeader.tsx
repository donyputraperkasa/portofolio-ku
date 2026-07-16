type SectionHeaderProps = {
    align?: "center" | "left"
    description: string
    eyebrow: string
    title: string
}

export default function SectionHeader({
    align = "center",
    description,
    eyebrow,
    title,
}: SectionHeaderProps) {
    const alignment = align === "center"
        ? "mx-auto items-center text-center"
        : "items-start text-left"

    return (
        <header className={`flex max-w-2xl flex-col ${alignment}`}>
            <span
                className="mb-5 inline-flex rounded-full border
                    border-orange-400/20 bg-orange-400/10 px-4 py-2
                    text-xs font-semibold uppercase tracking-[0.2em]
                    text-orange-300"
            >
                {eyebrow}
            </span>
            <h2
                className="text-3xl font-bold tracking-tight text-white
                    md:text-5xl"
            >
                {title}
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/55 md:text-base">
                {description}
            </p>
        </header>
    )
}
