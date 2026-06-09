import Image from "next/image";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/SectionHeading";

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Proyectos Destacados"
          title="Portafolio de obras con impacto visual y técnico"
          description="Explora proyectos clave que muestran nuestra capacidad para crear espacios atractivos, funcionales y duraderos."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-950 text-white shadow-xl shadow-slate-900/10"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs uppercase tracking-[0.32em] text-amber-300/90">{project.category}</p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight">{project.title}</h3>
                </div>
              </div>
              <div className="space-y-3 p-8 bg-white text-slate-900">
                <p className="text-base leading-7 text-slate-600">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
