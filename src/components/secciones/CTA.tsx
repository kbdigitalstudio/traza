import Link from "next/link";
import { Button } from "@/components/ui/button";

/**
 * Llamada a la acción de cierre.
 * Sin número telefónico ni correo inventados.
 */

export function CTA() {
  return (
    <section id="cta" className="bg-grafito text-blanco py-24 md:py-32">
      <div className="mx-auto max-w-48 px-4 sm:px-6 lg:px-8">
        <div className="rounded-[3px] border border-concreto/20 bg-grafito/80 p-10 md:p-16 text-center md:text-left shadow-2xl">
          <h2
            className="font-black tracking-tight leading-[1.1] text-3xl md:text-5xl text-blanco mb-6"
          >
            ¿Tienes un proyecto que necesita una base sólida?
          </h2>
          <p className="max-w-md text-concreto/70 text-lg leading-7 mb-10 md:mb-12">
            Cuéntanos tu necesidad y coordinamos una conversación técnica sobre
            tu proyecto de infraestructura.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/contacto">
              <Button variant="primary" size="lg">
                Solicitar cotización
              </Button>
            </Link>
            <Link href="/contacto">
              <Button variant="outline" size="lg">
                Formulario de contacto
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
