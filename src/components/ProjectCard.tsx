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
        "group relative overflow-hidden border border-grafito/15 bg-white",
        destacado ? "border-grafito/20" : "transition-colors hover:border-grafito/30",
      ].join(" ")}
    >
      <Link
        href={`/proyectos/${proyecto.slug}`}
        className="block"
        aria-label={`Consultar detalle del proyecto: ${proyecto.title}`}
      >
        <div className="relative h-48 md:h-52 lg:h-60 overflow-hidden">
          <Image
            src={proyecto.image}
            alt={proyecto.imageAlt}
            fill
            sizes={destacado
              ? "(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 48vw"
              : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 46vw"}
            className="object-cover object-center"
            priority={destacado}
          />
          <span className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-[0.65rem] font-semibold text-grafito border border-white">
            {proyecto.status}
          </span>
          <span className="absolute left-4 bottom-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-grafito/90 backdrop-blur px-2.5 py-1 text-[0.65rem] font-semibold text-concreto tracking-wide">
            {proyecto.category}
          </span>
        </div>
        <div className={destacado ? "p-5 md:p-6" : "p-4 md:p-5"}>
          <h3 className="text-grafito font-bold tracking-tight leading-snug mb-2">
            {destacado ? "text-lg md:text-xl" : "text-base md:text-lg"}{" "}
            {proyecto.title}
          </h3>
          <p className="text-[0.82rem] leading-6 text-grafito/60 mb-4">
            {proyecto.location}
          </p>
          <div className="flex items-center justify-between text-[0.78rem]">
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
