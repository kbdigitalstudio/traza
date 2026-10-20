"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Logo } from "./Logo";
import { Container } from "@/components/Container";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

type NavLink = {
  href: string;
  label: string;
};

const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/empresa", label: "Empresa" },
  { href: "/contacto", label: "Contacto" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/* Detección de hidratación sin setState dentro de un efecto. En el
   servidor devuelve false; tras hidratar, true. */
const subscribeToHydration = () => () => {};
const getClientHydrated = () => true;
const getServerHydrated = () => false;

export function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mounted = useSyncExternalStore(
    subscribeToHydration,
    getClientHydrated,
    getServerHydrated
  );
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  /*
   * En el HTML prerenderizado usePathname no puede resolver la ruta.
   * El header arranca sólido (legible sobre fondo claro) y solo adopta
   * el estado transparente del hero después de montarse en el cliente.
   * Así el primer render coincide con el servidor y nunca queda texto
   * claro sobre un fondo claro.
   */
  const solid = !mounted || !isHome || scrolled || isOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const firstLink = menuRef.current?.querySelector("a") as HTMLElement | null;
    firstLink?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <nav
      aria-label="Navegación principal"
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        solid
          ? "border-grafito/10 bg-concreto"
          : "border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="shrink-0" onClick={() => setIsOpen(false)}>
          <Logo size="sm" withDescriptor={false} variant={solid ? "default" : "inverse"} />
          <span className="sr-only">Inicio</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          <ul className="flex items-center gap-5 lg:gap-7">
            {NAV_LINKS.map((link) => {
              const active = isActivePath(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative py-1 text-[0.72rem] font-semibold uppercase tracking-[0.12em] transition-colors",
                      solid
                        ? active
                          ? "text-grafito"
                          : "text-grafito/70 hover:text-grafito"
                        : active
                          ? "text-concreto"
                          : "text-concreto/75 hover:text-concreto",
                      active &&
                        "after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:bg-naranja"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/contacto"
            className={buttonVariants({ variant: "primary", size: "sm" })}
          >
            Solicitar cotización
          </Link>
        </div>

        <button
          ref={buttonRef}
          type="button"
          aria-expanded={isOpen}
          aria-controls={isOpen ? "menu-movil" : undefined}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsOpen((value) => !value)}
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-card border transition-colors md:hidden",
            solid
              ? "border-grafito/25 text-grafito hover:border-grafito/60"
              : "border-concreto/35 text-concreto hover:border-concreto/70"
          )}
        >
          {isOpen ? (
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M3 7h18M3 12h18M3 17h18" />
            </svg>
          )}
        </button>
      </Container>

      {isOpen && (
        <div
          ref={menuRef}
          id="menu-movil"
          aria-label="Navegación móvil"
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-grafito/10 bg-concreto md:hidden"
        >
          <Container className="py-3">
            <ul className="divide-y divide-grafito/10">
              {NAV_LINKS.map((link) => {
                const active = isActivePath(pathname, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex min-h-11 items-center justify-between text-sm font-medium",
                        active ? "text-grafito" : "text-grafito/65"
                      )}
                    >
                      {link.label}
                      {active && (
                        <span className="h-px w-6 bg-naranja" aria-hidden="true" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href="/contacto"
              onClick={() => setIsOpen(false)}
              className={cn(
                buttonVariants({ variant: "primary", size: "md" }),
                "mt-4 w-full"
              )}
            >
              Solicitar cotización
            </Link>
          </Container>
        </div>
      )}
    </nav>
  );
}
