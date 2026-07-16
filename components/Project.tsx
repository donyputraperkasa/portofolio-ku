import ProjectCard from "./projects/ProjectCard"
import { projects } from "./projects/project-data"

export default function Projects() {
    return (
        <section
            className="scroll-mt-24 px-6 py-20 text-white md:py-28"
            id="projects"
        >
            <div className="mx-auto w-full max-w-6xl">
                <header className="mx-auto mb-14 max-w-2xl text-center">
                    <span
                        className="mb-5 inline-flex rounded-full border
                            border-orange-400/20 bg-orange-400/10 px-4 py-2
                            text-xs font-semibold uppercase tracking-[0.2em]
                            text-orange-300"
                    >
                        Selected work
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                        Projects built to solve
                        <span className="block text-orange-300">
                            real problems
                        </span>
                    </h2>
                    <p className="mt-5 text-sm leading-7 text-white/55 md:text-base">
                        A collection of full-stack products, learning platforms,
                        and collaborative projects I have helped bring to life.
                    </p>
                </header>

                <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <ProjectCard
                            index={index}
                            key={project.title}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
