import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { servicios } from "@/data/servicios";

/**
 * Servicios de ingeniería presentados en bloques visuales coherentes.
 * Cada servicio explica el problema que ayuda a resolver.
 * Sin afirmaciones de certificaciones o matrículas no verificadas.
 */

export function Servicios() {
  return (
    <section id="servicios" className="bg-white py-20 md:py-28 lg:py-36 border-y border-grafito/10">
      <div className="mx-auto max-w-72 px-4 sm:px-6 lg:px-8">
        <SectionTitle
          etiqueta="Áreas de práctica"
          title="Servicios de ingeniería."
          description={
            "Cada bloque describe el problema técnico que el servicio ayuda a resolver. No se afirman habilitaciones profesionales ni licencias no verificadas."
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicios.map((servicio) => (
            <ServiceCard key={servicio.slug} servicio={servicio} />
          ))}
        </div>
      </div>
    </section>
  );
}
