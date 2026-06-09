import { services } from "@/data/services";
import SectionHeading from "@/components/SectionHeading";

export default function ServicesSection() {
  return (
    <section id="services" className="border-t border-slate-200/80 bg-slate-50 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Servicios"
          title="Soluciones constructivas para cada etapa del proyecto"
          description="Ofrecemos una propuesta integral con equipos especializados y procesos diseñados para alcance, calidad y cumplimiento de tiempos."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/40"
            >
              <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl ${service.accent}`}>
                <span className="text-2xl">{service.icon}</span>
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{service.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
