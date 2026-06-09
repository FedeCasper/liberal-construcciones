export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-slate-950 px-6 py-12 text-slate-400 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm">© 2026 Liberal Constructora. Todos los derechos reservados.</p>
        <div className="flex flex-wrap gap-4 text-sm">
          <a href="#home" className="transition hover:text-white">
            Inicio
          </a>
          <a href="#projects" className="transition hover:text-white">
            Proyectos
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
