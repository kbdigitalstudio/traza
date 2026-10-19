import { SectionTitle } from "@/components/SectionTitle";
import { Container } from "@/components/Container";

const REGIONES = [
  { nombre: "Meta", zona: "Orinoquía", ejemplo: "Infraestructura vial" },
  { nombre: "Cundinamarca", zona: "Andina", ejemplo: "Edificación institucional" },
  { nombre: "Antioquia", zona: "Andina", ejemplo: "Estructuras de concreto" },
  { nombre: "Valle del Cauca", zona: "Pacífico", ejemplo: "Obras hidráulicas" },
];

export function Cobertura() {
  return (
    <section id="cobertura" className="bg-concreto py-16 md:py-20 lg:py-24">
      <Container>
        <SectionTitle
          etiqueta="Contexto"
          title="Colombia."
          description={
            "Referencias visuales del territorio donde se desarrolla el concepto. No se afirman oficinas ni cobertura operativa confirmada en ciudades específicas."
          }
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mt-3">
          {REGIONES.map((region) => (
            <article
              key={region.nombre}
              className="rounded-md border border-grafito/15 bg-white p-4 md:p-5 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1 h-3 bg-naranja" />
                <span className="text-[0.68rem] font-bold text-grafito tracking-wider uppercase">
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

        <p className="mt-8 text-[0.78rem] text-grafito/50 max-w-md">
          Estas regiones son referencias del concepto, no sedes operativas
          confirmadas de TRAZA.
        </p>
      </Container>
    </section>
  );
}
