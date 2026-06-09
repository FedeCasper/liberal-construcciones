import { stats } from "@/data/stats";

export default function StatsSection() {
  return (
    <section className="bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-[2rem] border border-slate-200/80 bg-slate-50 p-8 text-center transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
              <p className="text-4xl font-semibold tracking-tight text-slate-950">{item.value}</p>
              <p className="mt-4 text-sm uppercase tracking-[0.28em] text-slate-500">{item.label}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
