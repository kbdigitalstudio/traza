"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

/**
 * Hero de impacto para TRAZA.
 * Composición editorial: tipografía + fotografía de infraestructura de gran escala.
 * Evita el aspecto de plantilla SaaS.
 */

const SCROLL_HINT = "Desplazar";

export function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="relative bg-grafito text-blanco"
      aria-labelledby="hero-titular"
    >
      {/* Detalle gráfico técnico discreto: retícula suave en la esquina superior derecha */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-naranja/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="relative reticle z-0" />
      </div>

      <div className="relative z-10 mx-auto max-w-72 px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-24 md:pb-32 lg:pb-40">
        <div className="grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Contenido tipográfico */}
          <div className="lg:pr-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-naranja/15 px-3 py-1 text-[0.7rem] font-bold text-naranja tracking-wider uppercase mb-6 block">
              Ingeniería civil · Colombia
            </span>

            <h1
              id="hero-titular"
              className="text-grafito font-black tracking-tight leading-[1.05] text-4xl md:text-6xl lg:text-7xl text-blanco mb-6"
            >
              Infraestructura que conecta.<br />
              <span className="text-naranja">Ingeniería que transforma.</span>
            </h1>

            <p className="max-w-xl text-concreto/80 text-lg md:text-xl leading-7 mb-10">
              Diseño, planeación y desarrollo de proyectos de infraestructura
              civil: estructuras de concreto, corredores viales, edificación
              institucional y obras hidráulicas. Una base técnica para el
              desarrollo de Colombia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/proyectos"
                className="flex items-center justify-center gap-2"
              >
                <Button variant="primary" size="lg">
                  Explorar proyectos
                </Button>
              </Link>
              <Link href="/contacto">
                <Button variant="outline" size="lg">
                  Hablemos de tu proyecto
                </Button>
              </Link>
            </div>
          </div>

          {/* Fotografía protagonista */}
          <div className="relative hidden lg:block">
            <div className="relative h-[70vh] min-h-[560px] rounded-[2px] border border-concreto/20 overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1764449321531-a5f6a42c5d12?fm=jpg&q=60&w=2000&auto=format&fit=crop"
                alt="Estructura de concreto de gran escala, viaducto moderno contra cielo despejado"
                fill
                sizes="100vw"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-grafito/90 via-grafito/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none">
                <div className="flex flex-col gap-1">
                  <span className="text-[0.7rem] font-bold text-concreto/70 tracking-wider uppercase">
                    Protagonista
                  </span>
                  <span className="text-xl font-black text-blanco tracking-tight">
                    Obra de gran escala
                  </span>
                </div>
                <div className="text-concreto/40 font-mono text-[0.7rem] tracking-widest uppercase">
                  ref. estructura 01
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de desplazamiento */}
      {!scrolled && (
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce"
          style={{ animationDuration: "1.2s" }}
          aria-hidden="true"
        >
          <span className="text-[0.65rem] font-bold text-concreto/50 tracking-widest uppercase">
            {SCROLL_HINT}
          </span>
          <div className="w-1 h-4 rounded-full bg-concreto/50" />
        </div>
      )}
    </section>
  );
}
