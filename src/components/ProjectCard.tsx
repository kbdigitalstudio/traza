import Link from "next/link";
import Image from "next/image";
import { type Proyecto } from "@/data/proyectos";

export type ProjectCardProps = {
  proyecto: Proyecto;
  destacado?: boolean;
  index?: number;
  headingLevel?: "h2" | "h3";
};

export function ProjectCard({
  proyecto,
  destacado = false,
  index,
  headingLevel = "h3",
}: ProjectCardProps) {
  const Heading = headingLevel;
  return (
    <article className="group flex h-full flex-col">
      <Link href={`/proyectos/${proyecto.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-grafito/10">
          <Image
            src={proyecto.image}
            alt={proyecto.imageAlt}
            fill
            sizes="(max-width: 1240px) 50vw, 580px"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            priority={destacado}
          />
          <span className="absolute left-2 top-2 inline-flex items-center border border-white/60 bg-concreto/95 px-1.5 py-1 text-[0.64rem] font-semibold uppercase leading-none tracking-[0.04em] text-grafito sm:left-3 sm:top-3 sm:px-2.5 sm:text-[0.64rem]">
            {proyecto.status}
          </span>
          {typeof index === "number" && (
            <span className="absolute bottom-3 right-3 hidden bg-grafito/85 px-1.5 py-0.5 font-mono text-[0.68rem] tracking-[0.14em] text-concreto sm:block">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col pt-3 sm:pt-4">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <p className="font-mono text-[0.64rem] font-medium uppercase leading-[1.25] tracking-[0.06em] text-grafito/70 sm:text-[0.7rem] sm:tracking-[0.14em]">
              {proyecto.category}
            </p>
            <span
              className="hidden h-px w-4 shrink-0 bg-naranja transition-all duration-300 group-hover:w-7 sm:block sm:w-6 sm:group-hover:w-10"
              aria-hidden="true"
            />
          </div>

          <Heading className="mt-1.5 max-w-[28ch] text-[0.95rem] font-bold leading-snug tracking-[-0.02em] text-grafito transition-colors duration-200 group-hover:text-naranja-texto sm:mt-2 sm:text-lg md:text-xl">
            {proyecto.title}
          </Heading>

          <div className="mt-auto flex flex-col gap-1 border-t border-grafito/10 pt-2 sm:mt-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:pt-3">
            <p className="text-[0.75rem] leading-5 text-grafito/70 sm:text-[0.8rem]">
              {proyecto.location}
            </p>
            <span className="shrink-0 text-[0.72rem] font-semibold text-grafito sm:text-[0.78rem]">
              Ver proyecto <span aria-hidden="true">→</span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
