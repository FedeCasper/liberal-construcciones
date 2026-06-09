import Image from "next/image";
import { clients } from "@/data/clients";
import SectionHeading from "@/components/SectionHeading";

export default function ClientsSection() {
  return (
    <section id="clients" className="border-t border-slate-200/80 bg-slate-50 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Clientes"
          title="Confían en nosotros empresas y desarrolladores de alto nivel"
          description="Trabajamos con clientes que requieren soluciones constructivas profesionales, diseño sólido y entregas responsables."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50"
            >
              <Image src={client.logo} alt={client.alt} width={140} height={48} className="h-auto w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
