"use client";

import { useState } from "react";
import Link from "next/link";
import { navItems } from "@/data/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="#home" className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-950">
          LIBERAL CONSTRUCTORA
        </Link>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:border-slate-300 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <span className="sr-only">Abrir menú</span>
          {isOpen ? "Cerrar" : "Menú"}
        </button>

        <nav className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="hidden rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-sm transition hover:bg-amber-400 lg:inline-flex"
        >
          Contáctanos
        </Link>
      </div>

      {isOpen ? (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white/95 px-6 pb-6 pt-4 lg:hidden">
          <div className="space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base font-medium text-slate-900 transition hover:bg-slate-100"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="block rounded-2xl bg-amber-500 px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-amber-400"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
