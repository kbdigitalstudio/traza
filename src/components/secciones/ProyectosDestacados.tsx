import Link from "next/link";
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { ProjectCard } from "@/components/ProjectCard";
import { proyectos } from "@/data/proyectos";

export function ProyectosDestacados() {
  const destacados = proyectos.filter((proyecto) => proyecto.featured);

  return (
    <Section id="proyectos" tone="concreto">
      <SectionTitle
        etiqueta="Portafolio conceptual · 04 casos"
        title="Infraestructura que deja huella."
        description="Cuatro casos demostrativos que muestran el enfoque de TRAZA en distintas ramas de la ingeniería civil. Las ubicaciones y los datos forman parte del concepto, no de obras ejecutadas."
      />

      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-9 lg:gap-x-8 lg:gap-y-11">
        {destacados.map((proyecto, index) => (
          <ProjectCard
            key={proyecto.slug}
            proyecto={proyecto}
            index={index}
            destacado={index === 0}
          />
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-2 border-t border-grafito/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[62ch] text-[0.74rem] leading-5 text-grafito/70">
          Fotografías ilustrativas bajo licencia Unsplash. No representan obras
          propias de TRAZA.
        </p>
        <Link
          href="/proyectos"
          className="shrink-0 text-[0.78rem] font-semibold text-grafito transition-colors hover:text-naranja-texto"
        >
          Ver todos los proyectos <span aria-hidden="true">→</span>
        </Link>
      </div>
    </Section>
  );
}
