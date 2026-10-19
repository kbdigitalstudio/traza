"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { Container } from "@/components/Container";

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

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, []);

  // Cierra el menú al navegar (clic en un enlace)
  const handleLinkClick = useCallback(() => {
    closeMenu();
  }, [closeMenu]);

  // Gestión de foco al abrir/cerrar
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      buttonRef.current?.setAttribute("aria-expanded", "true");
      menuRef.current?.setAttribute("data-open", "true");
      const firstFocusable = menuRef.current?.querySelector(
        'a, button'
      ) as HTMLElement | null;
      if (firstFocusable) {
        firstFocusable.focus();
      }
    } else {
      buttonRef.current?.setAttribute("aria-expanded", "false");
      menuRef.current?.removeAttribute("data-open");
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    }
  }, [isOpen]);

  // Cierra con la tecla Escape
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        closeMenu();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeMenu]);

  // Detecta cambio de tamaño para mostrar/ocultar menú móvil sin problemas de hidratación
  const [isMobileMenu, setIsMobileMenu] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => setIsMobileMenu(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <nav
      className="fixed inset-x-0 top-0 z-40"
      aria-label="Navegación principal"
    >
      <div className="bg-concreto/90 backdrop-blur supports-[backdrop-filter]:bg-concreto/70 border-b border-grafito/10">
        <Container className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex shrink-0 items-center gap-2">
            <Link href="/" className="flex items-center gap-2" onClick={handleLinkClick}>
              <Logo size="sm" withDescriptor={false} />
              <span className="hidden sm:block text-[0.75rem] tracking-widest uppercase font-semibold text-grafito/70">
                Traza
              </span>
            </Link>
          </div>

          {/* Enlaces de escritorio */}
          <div className="hidden md:flex items-center gap-x-8 text-[0.85rem] font-semibold tracking-wide uppercase">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-grafito hover:text-naranja transition-colors focus-visible:ring-2 focus-visible:ring-naranja focus-visible:rounded-sm focus-visible:px-1"
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="rounded-full bg-white text-grafito px-4 py-2 text-[0.8rem] shadow-sm hover:bg-grafito hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-naranja"
              onClick={handleLinkClick}
            >
              Solicitar cotización
            </Link>
          </div>

          {/* Botón menú móvil */}
          <div className="md:hidden flex items-center">
            <Button
              ref={buttonRef}
              variant="ghost"
              size="sm"
              aria-expanded={isOpen}
              aria-controls="traza-mobile-menu"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? "Cerrar menú" : "Abrir menú"}
            </Button>
          </div>
        </Container>

        {/* Menú móvil */}
        {isMobileMenu && (
          <div
            ref={menuRef}
            id="traza-mobile-menu"
            role="menu"
            aria-orientation="vertical"
            className={`md:hidden bg-concreto border-t border-grafito/10 transition-all duration-300 ease-out ${
              isOpen ? "max-h-96 opacity-100 mt-0" : "max-h-0 opacity-0 mt-2 overflow-hidden"
            }`}
            style={{
              transitionProperty: "max-height, opacity",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDuration: "300ms",
            }}
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  role="menuitem"
                  onClick={handleLinkClick}
                  className="block rounded-lg px-4 py-3 text-left text-[0.9rem] font-semibold tracking-wide uppercase text-grafito hover:bg-grafito/5 hover:text-naranja transition-colors focus-visible:ring-2 focus-visible:ring-naranja focus-visible:outline-none"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-grafito/10">
                <Link
                  href="/contacto"
                  role="menuitem"
                  onClick={handleLinkClick}
                  className="block w-full rounded-full bg-naranja text-white px-4 py-3 text-[0.85rem] font-semibold text-center shadow-sm hover:bg-naranja/90 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                >
                  Solicitar cotización
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
