import { SectionTitle } from "@/components/SectionTitle";
import { Container } from "@/components/Container";
import { MetodoTrabajo } from "@/components/secciones/MetodoTrabajo";
import { Enfoque } from "@/components/secciones/Enfoque";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empresa",
  description:
    "Identidad y metodología de TRAZA Ingeniería & Infraestructura: firma conceptual de ingeniería civil para el mercado colombiano.",
};

export default function EmpresaPage() {
  return (
    <section className="bg-concreto py-16 md:py-20 lg:py-24">
      <Container>
        <SectionTitle
          etiqueta="Identidad"
          title="Empresa."
          description={
            "TRAZA es un concepto de marca de ingeniería civil orientado al desarrollo de infraestructura en Colombia. Personalidad técnica, precisa, contemporánea, confiable y sobria."
          }
        />

        <div className="grid lg:grid-cols-2 lg:gap-12 mt-10 lg:mt-14">
          <div>
            <h2 className="font-black text-grafito text-3xl md:text-4xl tracking-tight leading-tight mb-4">
              Concepto de marca
            </h2>
            <p className="text-grafito/70 text-lg leading-8 mb-6">
              “Construimos las conexiones que impulsan el futuro.”
            </p>
            <p className="text-grafito/60 text-lg leading-8 mb-8">
              Una firma conceptual colombiana especializada en ingeniería
              civil, consultoría técnica, estructuras, infraestructura y gestión
              de proyectos.
            </p>
            <h3 className="font-bold text-grafito text-lg tracking-tight mb-3">
              Personalidad
            </h3>
            <ul className="space-y-3 text-grafito/60 text-lg leading-7 list-disc pl-6">
              <li>Técnica y precisa.</li>
              <li>Contemporánea y sobria.</li>
              <li>Confiable y orientada a resultados.</li>
              <li>Comprometida con el desarrollo de infraestructura.</li>
            </ul>
            <p className="mt-8 text-[0.78rem] text-grafito/40 max-w-md">
              Este sitio es un concepto demostrativo desarrollado para el
              portafolio de KB Digital Studio. No se afirman años de experiencia,
              certificaciones, licencias, contratos, clientes reales ni premios.
            </p>
          </div>

          <div>
            <MetodoTrabajo />
          </div>
        </div>

        <Enfoque />
      </Container>
    </section>
  );
}
