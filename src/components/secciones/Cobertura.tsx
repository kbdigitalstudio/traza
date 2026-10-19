import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";

const REGIONES = [
  { nombre: "Meta", zona: "Orinoquía", ejemplo: "Infraestructura vial" },
  { nombre: "Cundinamarca", zona: "Andina", ejemplo: "Edificación institucional" },
  { nombre: "Antioquia", zona: "Andina", ejemplo: "Estructuras de concreto" },
  { nombre: "Valle del Cauca", zona: "Pacífico", ejemplo: "Obras hidráulicas" },
];

export function Cobertura() {
  return (
    <Section id="cobertura" tone="concreto">
      <SectionTitle
        etiqueta="Contexto territorial"
        title="Colombia, en cuatro referencias."
        description="Geografías que inspiran el concepto. No se afirman oficinas, sedes ni cobertura operativa confirmada."
      />

      <div className="border-t border-grafito/20">
        <div className="hidden grid-cols-[1.2fr_0.8fr_1.4fr] gap-6 border-b border-grafito/10 py-2 sm:grid">
          <p className="eyebrow text-grafito/70">Región</p>
          <span className="eyebrow text-grafito/70">Zona</span>
          <span className="eyebrow text-grafito/70">Ejemplo de práctica</span>
        </div>

        <ul>
          {REGIONES.map((region, index) => (
            <li
              key={region.nombre}
              className="grid gap-1 border-b border-grafito/10 py-4 sm:grid-cols-[1.2fr_0.8fr_1.4fr] sm:items-center sm:gap-6"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[0.62rem] text-naranja-texto">
                  0{index + 1}
                </span>
                <span className="text-lg font-bold tracking-[-0.02em] text-grafito">
                  {region.nombre}
                </span>
              </div>
              <p className="pl-7 text-[0.82rem] text-grafito/70 sm:pl-0">
                {region.zona}
              </p>
              <p className="pl-7 text-[0.82rem] text-grafito/70 sm:pl-0">
                {region.ejemplo}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-6 max-w-[64ch] text-[0.74rem] leading-5 text-grafito/70">
        Regiones de referencia del concepto. No corresponden a sedes operativas
        ni a proyectos ejecutados.
      </p>
    </Section>
  );
}
