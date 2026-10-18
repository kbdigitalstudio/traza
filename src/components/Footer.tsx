"use cache";

import Link from "next/link";
import { Logo } from "./Logo";

const FOOTER_LINKS: { label: string; href: string }[] = [
  { label: "Inicio", href: "/" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Servicios", href: "/servicios" },
  { label: "Empresa", href: "/empresa" },
  { label: "Contacto", href: "/contacto" },
];

const SERVICIOS_PRINCIPALES: { label: string; href: string }[] = [
  { label: "Ingeniería estructural", href: "/servicios#ingenieria-estructural" },
  { label: "Infraestructura vial", href: "/servicios#infraestructura-vial" },
  { label: "Interventoría y supervisión", href: "/servicios#interventoria-supervision" },
  { label: "Obras hidráulicas y drenaje", href: "/servicios#obras-hidraulicas-drenaje" },
];

export async function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-grafito/10 bg-grafito text-concreto">
      <div className="mx-auto max-w-72 px-4 sm:px-6 lg:px-8">
        <div className="pt-10 md:pt-14 pb-12 md:pb-16 lg:grid lg:grid-cols-4 lg:gap-10">
          {/* Marca */}
          <div className="lg:col-span-1 mb-8 lg:mb-0">
            <Link href="/" className="flex items-center gap-2">
              <Logo size="sm" withDescriptor />
            </Link>
            <p className="mt-6 text-sm text-grafito/40 leading-relaxed max-w-xs">
              Concepto de marca de ingeniería civil orientado al desarrollo de
              infraestructura en Colombia.
            </p>
          </div>

          {/* Navegación secundaria */}
          <div className="mb-8 lg:mb-0 lg:col-span-1">
            <h2 className="mb-4 text-xs font-semibold tracking-widest uppercase text-blanco">Navegación</h2>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.85rem] text-grafito/60 hover:text-naranja transition-colors focus-visible:ring-2 focus-visible:ring-naranja focus-visible:rounded-sm focus-visible:px-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios principales */}
          <div className="mb-8 lg:mb-0 lg:col-span-2">
            <h2 className="mb-4 text-xs font-semibold tracking-widest uppercase text-blanco">Servicios principales</h2>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {SERVICIOS_PRINCIPALES.map((servicio) => (
                <li key={servicio.href}>
                  <Link
                    href={servicio.href}
                    className="text-[0.85rem] text-grafito/60 hover:text-naranja transition-colors focus-visible:ring-2 focus-visible:ring-naranja focus-visible:rounded-sm focus-visible:px-1"
                  >
                    {servicio.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="lg:col-span-1">
            <h2 className="mb-4 text-xs font-semibold tracking-widest uppercase text-blanco">Contacto</h2>
            <p className="mb-6 text-[0.85rem] text-grafito/60 leading-relaxed">
              Solicita información a través del formulario de contacto. No hay
              número telefónico ni dirección física publicados en este concepto.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-grafito px-4 py-2 text-[0.8rem] font-semibold shadow-sm hover:bg-naranja hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-naranja focus-visible:outline-none"
            >
              Ir al formulario
            </Link>
          </div>
        </div>

        {/* Pie de página: año y crédito discreto */}
        <div className="mt-12 lg:mt-16 border-t border-grafito/20 pt-8 pb-10 md:flex md:items-center md:justify-between gap-6">
          <p className="text-[0.75rem] text-grafito/40 tracking-wide">
            © {year} TRAZA Ingeniería &amp; Infraestructura. Todos los derechos
            reservados.
          </p>
          <p className="text-[0.7rem] text-grafito/40 tracking-wide max-w-xs md:text-right">
            Concepto digital desarrollado por <strong className="text-naranja">KB Digital Studio</strong>.
          </p>
        </div>
      </div>
    </footer>
  );
}
