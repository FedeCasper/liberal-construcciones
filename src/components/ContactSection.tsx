import { contactInfo } from "@/data/contact";
import SectionHeading from "@/components/SectionHeading";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-slate-950 px-6 py-20 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Contacto"
            title="Hablemos del próximo proyecto"
            description="Déjanos tus datos y un breve resumen de tu idea. Te responderemos con una propuesta de alcance y presupuesto." 
          />
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-amber-300">Información de contacto</p>
            <div className="mt-8 space-y-5 text-sm leading-7 text-slate-200">
              <div>
                <p className="font-semibold text-white">Dirección</p>
                <p>{contactInfo.address}</p>
              </div>
              <div>
                <p className="font-semibold text-white">Teléfono</p>
                <a href={`tel:${contactInfo.phone}`} className="text-amber-200 hover:text-amber-100">
                  {contactInfo.phone}
                </a>
              </div>
              <div>
                <p className="font-semibold text-white">Email</p>
                <a href={`mailto:${contactInfo.email}`} className="text-amber-200 hover:text-amber-100">
                  {contactInfo.email}
                </a>
              </div>
              <div>
                <p className="font-semibold text-white">Horario</p>
                <p>{contactInfo.hours}</p>
              </div>
            </div>
          </div>
        </div>

        <form className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.2)]">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-200">
              <span>Nombre</span>
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                className="w-full rounded-3xl border border-slate-700/80 bg-slate-900/90 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-200">
              <span>Correo</span>
              <input
                type="email"
                name="email"
                placeholder="correo@ejemplo.com"
                className="w-full rounded-3xl border border-slate-700/80 bg-slate-900/90 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"
              />
            </label>
          </div>
          <label className="space-y-2 text-sm text-slate-200">
            <span>Mensaje</span>
            <textarea
              name="message"
              rows={5}
              placeholder="Cuéntanos sobre tu proyecto"
              className="w-full rounded-3xl border border-slate-700/80 bg-slate-900/90 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"
            />
          </label>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-amber-500 px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-amber-400"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
