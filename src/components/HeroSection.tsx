import Image from "next/image";
import { companyDetails } from "@/data/company";

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0">
        <Image
          src="/hero.svg"
          alt="Vista de obra constructiva" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-950/65" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center px-6 py-24 text-white lg:px-8">
        <div className="max-w-3xl space-y-8">
          <span className="inline-flex rounded-full bg-amber-400/15 px-4 py-2 text-xs uppercase tracking-[0.36em] text-amber-200">
            {companyDetails.heroTagline}
          </span>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {companyDetails.heroTitle}
          </h1>
          <p className="max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            {companyDetails.heroSubtitle}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-amber-400"
            >
              {companyDetails.heroCta}
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white/40 hover:bg-white/15"
            >
              Ver Proyectos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
