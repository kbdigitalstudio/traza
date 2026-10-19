"use client";

import Link from "next/link";
import { type Servicio } from "@/data/servicios";

export type ServiceCardProps = {
  servicio: Servicio;
};

export function ServiceCard({ servicio }: ServiceCardProps) {
  return (
    <article
      id={servicio.slug}
      className="group relative border border-grafito/15 bg-white p-5 md:p-6"
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1 h-3 bg-naranja" />
        <span className="text-[0.68rem] font-black text-grafito tracking-wider uppercase">
          Servicio de ingeniería
        </span>
      </div>

      <Link
        href={`/contacto?servicio=${servicio.slug}`}
        className="block"
        aria-label={`Solicitar cotización para: ${servicio.title}`}
      >
        <h3
          className="text-grafito font-bold text-base md:text-lg tracking-tight leading-snug hover:text-naranja transition-colors focus-visible:ring-2 focus-visible:ring-naranja focus-visible:rounded-sm focus-visible:px-2"
        >
          {servicio.title}
        </h3>
      </Link>

      <p className="mt-3 text-[0.85rem] leading-7 text-grafito/60">
        {servicio.description}
      </p>

      <div className="mt-4 pt-3 border-t border-grafito/10">
        <p className="text-[0.72rem] text-grafito/50 mb-2 font-mono tracking-wide uppercase text-xs">
          Información para la cotización
        </p>
        <p className="text-[0.82rem] leading-6 text-grafito/60 italic">
          {servicio.whatToBring}
        </p>
      </div>
    </article>
  );
}
