"use cache";

import Link from "next/link";
import { Logo } from "./Logo";
import { Container } from "@/components/Container";
import { buttonVariants } from "@/components/ui/button-variants";

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

const linkClass =
  "text-[0.82rem] leading-6 text-concreto/70 transition-colors hover:text-naranja";

export async function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-grafito text-concreto">
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 py-9 sm:gap-9 lg:grid-cols-[1.35fr_0.75fr_1.25fr_1fr] lg:gap-10 lg:py-14">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex">
              <Logo size="sm" variant="inverse" />
              <span className="sr-only">Inicio</span>
            </Link>
            <p className="mt-4 max-w-xs text-[0.82rem] leading-6 text-concreto/70">
              Concepto de marca de ingeniería civil orientado al desarrollo de
              infraestructura en Colombia.
            </p>
          </div>

          <div>
            <h2 className="eyebrow mb-3 min-h-[2.4em] text-concreto/70 sm:min-h-0">
              Navegación
            </h2>
            <ul className="space-y-1.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow mb-3 min-h-[2.4em] text-concreto/70 sm:min-h-0">
              Servicios principales
            </h2>
            <ul className="grid gap-1.5">
              {SERVICIOS_PRINCIPALES.map((servicio) => (
                <li key={servicio.href}>
                  <Link href={servicio.href} className={linkClass}>
                    {servicio.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h2 className="eyebrow mb-3 text-concreto/70">Contacto</h2>
            <p className="mb-4 max-w-[30ch] text-[0.82rem] leading-6 text-concreto/70">
              Consultas y solicitudes de cotización a través del formulario.
              Este concepto no publica teléfono ni dirección física.
            </p>
            <Link
              href="/contacto"
              className={buttonVariants({ variant: "outlineInverse", size: "sm" })}
            >
              Ir al formulario
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.72rem] leading-5 text-concreto/65">
            © {year} TRAZA Ingeniería &amp; Infraestructura. Todos los derechos
            reservados.
          </p>
          <p className="text-[0.72rem] leading-5 text-concreto/65 sm:text-right">
            Concepto digital desarrollado por{" "}
            <strong className="font-semibold text-naranja">KB Digital Studio</strong>.
          </p>
        </div>
      </Container>
    </footer>
  );
}
