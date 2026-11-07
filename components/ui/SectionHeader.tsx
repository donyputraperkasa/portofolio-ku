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
    const alignment =
        align === "center"
            ? "mx-auto items-center text-center"
            : "items-start text-left"

    return (
        <header className={`flex max-w-2xl flex-col ${alignment}`}>
            <span
                className="mb-4 inline-flex items-center gap-2 rounded-lg border
                    border-sky-200 bg-sky-50 px-3.5 py-1.5 text-xs font-semibold
                    uppercase tracking-wider text-[#0284C7]"
            >
                <span className="h-1.5 w-1.5 rounded-full bg-[#0284C7]" />
                {eyebrow}
            </span>
            <h2
                className="text-3xl font-extrabold tracking-tight text-slate-900
                    md:text-4xl lg:text-[2.65rem] lg:leading-[1.15]"
            >
                {title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                {description}
            </p>
        </header>
    )
}
