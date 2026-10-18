"use client";

import Link from "next/link";
import { type Servicio } from "@/data/servicios";

export type ServiceCardProps = { servicio: Servicio };

export function ServiceCard({ servicio }: ServiceCardProps) {
  return (
    <article
      className="group relative rounded-[2px] border border-grafito/15 bg-white p-6 md:p-8 shadow-sm transition-colors hover:border-grafito/40 focus-within:border-naranja focus-within:outline-none"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1.5 bg-naranja rounded-full" />
        <span className="text-[0.7rem] font-black text-grafito tracking-wider uppercase">
          Servicio de ingeniería
        </span>
      </div>
      <Link
        href={`/servicios#${servicio.slug}`}
        className="block"
        aria-label={`Más información sobre: ${servicio.title}`}
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
      <p className="mt-3 text-[0.8rem] leading-6 text-grafito/50 italic">
        {servicio.problem}
      </p>
    </article>
  );
}
