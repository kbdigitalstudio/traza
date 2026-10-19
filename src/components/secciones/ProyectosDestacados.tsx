import { SectionTitle } from "@/components/SectionTitle";
import { ProjectCard } from "@/components/ProjectCard";
import { Container } from "@/components/Container";
import { proyectos } from "@/data/proyectos";

export function ProyectosDestacados() {
  const destacados = proyectos.filter((p) => p.featured);
  const [primero, ...restantes] = destacados;

  return (
    <section id="proyectos" className="bg-concreto py-16 md:py-20 lg:py-24">
      <Container>
        <SectionTitle
          etiqueta="Portafolio conceptual"
          title="Obras pensadas para durar."
          description={
            "Cuatro casos demostrativos que muestran el enfoque de TRAZA en distintas ramas de la ingeniería civil. Todas las ubicaciones y datos son parte del concepto y no obras ejecutadas por una empresa real."
          }
        />

        <div className="space-y-8 lg:space-y-12">
          {primero && (
            <div className="mb-8 lg:mb-0">
              <ProjectCard proyecto={primero} destacado />
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
            {restantes.map((proyecto) => (
              <ProjectCard key={proyecto.slug} proyecto={proyecto} />
            ))}
          </div>
        </div>

        <p className="mt-8 text-[0.78rem] text-grafito/50 max-w-md">
          Nota: las fotografías son referencias ilustrativas bajo licencia
          Unsplash y no representan obras propias de TRAZA.
        </p>
      </Container>
    </section>
  );
}
