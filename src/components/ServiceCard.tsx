"use client";

import Link from "next/link";
import { type Servicio } from "@/data/servicios";
import { cn } from "@/lib/utils";

export type ServiceCardProps = {
  servicio: Servicio;
  variant?: number;
};

export function ServiceCard({
  servicio,
  variant = 0,
}: ServiceCardProps) {
  const variants: Record<number, string> = {
    0: "border-l-2 border-l-naranja",
    1: "border-l-2 border-l-verde",
    2: "border-t-2 border-t-naranja",
  };

  return (
    <article
      id={servicio.slug}
      className={cn(
        "group relative rounded-[3px] border border-grafito/15 bg-white p-6 md:p-8 shadow-sm transition-colors hover:border-grafito/40 focus-within:border-naranja focus-within:outline-none",
        variants[variant],
      )}
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1.5 h-1.5 rounded-full bg-naranja" />
        <span className="text-[0.7rem] font-black text-grafito tracking-wider uppercase">
          Servicio de ingeniería
        </span>
      </div>

      <Link
        href={`/contacto?servicio=${servicio.slug}`}
        className="block"
        aria-label={`Solicitar cotización para: ${servicio.title}`}
      >
        <h3
          className="text-grafito font-bold text-lg md:text-xl tracking-tight leading-snug hover:text-naranja transition-colors focus-visible:ring-2 focus-visible:ring-naranja focus-visible:rounded-sm focus-visible:px-2"
        >
          {servicio.title}
        </h3>
      </Link>

      <p className="mt-4 text-[0.9rem] leading-7 text-grafito/60">
        {servicio.description}
      </p>

      <div className="mt-5 pt-4 border-t border-grafito/10">
        <p className="text-[0.8rem] text-grafito/50 mb-3 font-mono tracking-wide uppercase text-xs">
          Información para la cotización
        </p>
        <p className="text-[0.85rem] leading-6 text-grafito/60 italic">
          {servicio.whatToBring}
        </p>
      </div>
    </article>
  );
}
