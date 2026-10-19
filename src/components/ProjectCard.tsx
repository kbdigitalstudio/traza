"use client";

import Link from "next/link";
import Image from "next/image";
import { type Proyecto } from "@/data/proyectos";

export type ProjectCardProps = { proyecto: Proyecto; destacado?: boolean };

export function ProjectCard({
  proyecto,
  destacado = false,
}: ProjectCardProps) {
  return (
    <article
      className={[
        "group relative overflow-hidden rounded-[3px] border border-grafito/15 bg-white shadow-sm",
        destacado
          ? "border-grafito/25 shadow-md"
          : "transition-colors hover:border-grafito/40 focus-within:border-naranja focus-within:outline-none",
      ].join(" ")}
    >
      <Link
        href={`/proyectos/${proyecto.slug}`}
        className="block"
        aria-label={`Consultar detalle del proyecto: ${proyecto.title}`}
      >
        <div className="relative h-56 md:h-64 lg:h-72 overflow-hidden">
          <Image
            src={proyecto.image}
            alt={proyecto.imageAlt}
            fill
            sizes={destacado
              ? "(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 48vw"
              : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 30vw"}
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            priority={destacado}
          />
          {/* Etiqueta de estado */}
          <span className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-[0.65rem] font-semibold text-grafito shadow-sm border border-white">
            {proyecto.status}
          </span>
          {/* Categoría */}
          <span className="absolute left-4 bottom-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-grafito/90 backdrop-blur px-2.5 py-1 text-[0.65rem] font-semibold text-concreto tracking-wide">
            {proyecto.category}
          </span>
        </div>
        <div className={destacado ? "p-6 md:p-8" : "p-5 md:p-6"}>
          <h3 className="text-grafito font-bold tracking-tight leading-snug mb-2">
            {destacado ? "text-xl md:text-2xl" : "text-lg md:text-xl"}{" "}
            {proyecto.title}
          </h3>
          <p className="text-[0.85rem] leading-6 text-grafito/60 mb-5">
            {proyecto.location}
          </p>
          <div className="flex items-center justify-between text-[0.8rem]">
            <span className="text-grafito font-medium">
              Ver proyecto{" "}
              <span aria-hidden="true">→</span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
