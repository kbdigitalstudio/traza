import { SectionTitle } from "@/components/SectionTitle";
import { Container } from "@/components/Container";

/**
 * Cobertura: Colombia como contexto de trabajo.
 * Referencias visuales de departamentos, sin afirmar oficinas ni cobertura operativa confirmada.
 */

const REGIONES = [
  { nombre: "Meta", zona: "Orinoquía", ejemplo: "Infraestructura vial" },
  { nombre: "Cundinamarca", zona: "Andina", ejemplo: "Edificación institucional" },
  { nombre: "Antioquia", zona: "Andina", ejemplo: "Estructuras de concreto" },
  { nombre: "Valle del Cauca", zona: "Pacífico", ejemplo: "Obras hidráulicas" },
];

export function Cobertura() {
  return (
    <section id="cobertura" className="bg-concreto py-20 md:py-28 lg:py-36">
      <Container>
        <SectionTitle
          etiqueta="Contexto"
          title="Colombia."
          description={
            "Referencias visuales del territorio donde se desarrolla el concepto. No se afirman oficinas ni cobertura operativa confirmada en ciudades específicas."
          }
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mt-4">
          {REGIONES.map((region) => (
            <article
              key={region.nombre}
              className="rounded-[2px] border border-grafito/15 bg-white p-5 md:p-6 shadow-sm flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 bg-naranja rounded-full" />
                <span className="text-[0.65rem] font-bold text-grafito tracking-wider uppercase">
                  Referencia
                </span>
              </div>
              <h3 className="text-grafito font-bold text-lg tracking-tight mb-1">
                {region.nombre}
              </h3>
              <p className="text-[0.8rem] text-grafito/50">{region.zona}</p>
              <p className="mt-auto text-[0.8rem] italic text-grafito/40">
                Ejemplo: {region.ejemplo}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-[0.8rem] text-grafito/50 max-w-md">
          Estas regiones son referencias del concepto, no sedes operativas
          confirmadas de TRAZA.
        </p>
      </Container>
    </section>
  );
}
