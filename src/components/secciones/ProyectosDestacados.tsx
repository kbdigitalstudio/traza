import { SectionTitle } from "@/components/SectionTitle";
import { ProjectCard } from "@/components/ProjectCard";
import { Container } from "@/components/Container";
import { proyectos } from "@/data/proyectos";

/**
 * Sección editorial de proyectos destacados.
 * "Obras pensadas para durar."
 * Composición asimétrica: el primero ocupa mayor jerarquía visual.
 */

export function ProyectosDestacados() {
  const destacados = proyectos.filter((p) => p.featured);
  const [primero, ...restantes] = destacados;

  return (
    <section id="proyectos" className="bg-concreto py-20 md:py-28 lg:py-36">
      <Container>
        <SectionTitle
          etiqueta="Portafolio conceptual"
          title="Obras pensadas para durar."
          description={
            "Cuatro casos demostrativos que muestran el enfoque de TRAZA en distintas ramas de la ingeniería civil. Todas las ubicaciones y datos son parte del concepto y no obras ejecutadas por una empresa real."
          }
        />

        <div className="space-y-12 lg:space-y-16">
          {primero && (
            <div className="mb-12 lg:mb-0">
              <ProjectCard proyecto={primero} destacado />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {restantes.map((proyecto) => (
              <ProjectCard key={proyecto.slug} proyecto={proyecto} />
            ))}
          </div>
        </div>

        <p className="mt-10 text-[0.8rem] text-grafito/50 max-w-md">
          Nota: las fotografías son referencias ilustrativas bajo licencia
          Unsplash y no representan obras propias de TRAZA.
        </p>
      </Container>
    </section>
  );
}
