import { companyDetails } from "@/data/company";
import SectionHeading from "@/components/SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="border-t border-slate-200/80 bg-slate-50 px-6 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Sobre Nosotros"
            title={companyDetails.aboutTitle}
            description={companyDetails.aboutDescription}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {companyDetails.aboutList.map((item) => (
              <div key={item} className="rounded-3xl bg-white p-6 shadow-sm shadow-slate-200/50">
                <p className="text-base leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] bg-slate-950/95 p-10 text-white shadow-[0_24px_80px_rgba(15,23,42,0.12)] sm:p-12">
          <p className="text-sm uppercase tracking-[0.28em] text-amber-400">Confianza y proyección</p>
          <h3 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-white">
            18 años respaldando obras de alto impacto.
          </h3>
          <p className="mt-6 text-base leading-8 text-slate-300">
            Nuestro enfoque combina la calidad técnica con la gestión proactiva. Cada proyecto se desarrolla con planificación estructural, supervisión exhaustiva y entregas puntuales.
          </p>
          <div className="mt-10 space-y-4 text-sm text-slate-300">
            <div className="rounded-3xl bg-white/5 p-5">
              <p className="font-semibold text-white">Plazos garantizados</p>
              <p>Procesos claros desde la planificación hasta la entrega final.</p>
            </div>
            <div className="rounded-3xl bg-white/5 p-5">
              <p className="font-semibold text-white">Control de calidad</p>
              <p>Inspecciones continuas y materiales calificados en cada fase.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
