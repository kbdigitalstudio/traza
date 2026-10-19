import Link from "next/link";
import { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a TRAZA Ingeniería & Infraestructura a través del formulario. Concepto de ingeniería civil colombiana.",
};

export default function ContactoPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const servicio = typeof searchParams.servicio === "string" ? searchParams.servicio : undefined;

  return (
    <section className="bg-white py-20 md:py-28 lg:py-36 border-y border-grafito/10">
      <Container>
        <SectionTitle
          etiqueta="Contacto"
          title="Hablemos de tu proyecto."
          description={
            "Envíanos tu necesidad y coordinamos una conversación técnica. Formulario a nivel de interfaz; el envío real requiere conectar un servicio de correo o CRM."
          }
        />
        <ContactForm searchParamsServicio={servicio} />

        <div className="mt-16 md:mt-20 rounded-[2px] border border-grafito/15 bg-concreto p-8 md:p-12 shadow-sm">
          <h3 className="font-bold text-grafito text-lg tracking-tight mb-4">
            Canales de contacto
          </h3>
          <ul className="space-y-3 text-grafito/60 text-lg leading-7">
            <li className="flex items-start gap-3">
              <span className="shrink-0 text-[0.85rem] font-mono text-naranja">
                Formulario
              </span>
              <span>
                Usa el formulario de esta página para enviarnos tu consulta.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 text-[0.85rem] font-mono text-grafito/50">
                WhatsApp
              </span>
              <span className="text-grafito/60">
                No hay un número de WhatsApp configurado en este concepto. Para
                contactarnos, utiliza el formulario o la ruta{" "}
                <Link
                  href="/contacto"
                  className="underline underline-offset-4 hover:text-naranja transition-colors"
                >
                  /contacto
                </Link>
                .
              </span>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
