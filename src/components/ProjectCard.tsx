"use client";

import Link from "next/link";
import Image from "next/image";
import { type Proyecto } from "@/data/proyectos";

export type ProjectCardProps = { proyecto: Proyecto };

export function ProjectCard({ proyecto }: ProjectCardProps) {
  return (
    <article
      className="group relative overflow-hidden rounded-[2px] border border-grafito/15 bg-white shadow-sm transition-colors hover:border-grafito/40 focus-within:border-naranja focus-within:outline-none"
    >
      <Link
        href={`/proyectos/${proyecto.slug}`}
        className="block"
        aria-label={`Consultar detalle del proyecto: ${proyecto.title}`}
      >
        <div className="relative h-48 md:h-56 overflow-hidden">
          <Image
            src={proyecto.image}
            alt={proyecto.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            priority={proyecto.featured}
          />
          {/* Cinta de estado superior */}
          <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-[0.65rem] font-semibold text-grafito shadow-sm border border-white">
            {proyecto.status}
          </span>
          {/* Categoría */}
          <span className="absolute left-3 bottom-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-grafito/90 backdrop-blur px-2.5 py-1 text-[0.65rem] font-semibold text-concreto tracking-wide">
            {proyecto.category}
          </span>
        </div>
        <div className="p-5 md:p-6">
          <h3 className="text-grafito font-bold text-lg md:text-xl tracking-tight leading-snug">
            {proyecto.title}
          </h3>
          <p className="mt-2.5 text-[0.85rem] leading-6 text-grafito/60">
            {proyecto.location}
          </p>
          <div className="mt-4 flex items-center justify-between text-[0.8rem]">
            <span className="text-grafito font-medium">
              Ver detalle{" "}
              <span aria-hidden="true">→</span>
            </span>
            <span className="text-grafito/50 font-mono text-[0.7rem]">
              {proyecto.slug}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
