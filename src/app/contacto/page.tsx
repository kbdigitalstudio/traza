import Link from "next/link";
import { Suspense } from "react";
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { ContactForm } from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a TRAZA Ingeniería & Infraestructura a través del formulario. Concepto de ingeniería civil colombiana.",
};

export default function ContactoPage() {
  return (
    <Section tone="white" bordered>
      <SectionTitle
        as="h1"
        etiqueta="Contacto · Consultas"
        title="Hablemos de tu proyecto."
        description="Envíanos la necesidad, la etapa y la ubicación del proyecto. El formulario es una demostración de interfaz: valida los campos, pero no envía datos a un backend."
      />

      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <aside className="max-w-md">
          <h2 className="eyebrow text-grafito/70">Canales disponibles</h2>

          <dl className="mt-4 border-t border-grafito/15">
            <div className="border-b border-grafito/10 py-4">
              <dt className="text-[0.88rem] font-semibold text-grafito">
                Formulario
              </dt>
              <dd className="mt-1 text-[0.82rem] leading-6 text-grafito/65">
                Usa el formulario de esta página para describir tu consulta.
              </dd>
            </div>
            <div className="border-b border-grafito/10 py-4">
              <dt className="text-[0.88rem] font-semibold text-grafito">
                WhatsApp
              </dt>
              <dd className="mt-1 text-[0.82rem] leading-6 text-grafito/65">
                No hay un número configurado en este concepto. Utiliza el
                formulario o la ruta{" "}
                <Link
                  href="/contacto"
                  className="font-medium text-grafito underline decoration-grafito/30 underline-offset-4 transition-colors hover:text-naranja-texto"
                >
                  /contacto
                </Link>
                .
              </dd>
            </div>
            <div className="border-b border-grafito/10 py-4">
              <dt className="text-[0.88rem] font-semibold text-grafito">
                Teléfono y dirección
              </dt>
              <dd className="mt-1 text-[0.82rem] leading-6 text-grafito/65">
                No se publican datos de contacto adicionales en este concepto.
              </dd>
            </div>
          </dl>

          <p className="mt-5 text-[0.74rem] leading-5 text-grafito/70">
            La disponibilidad de canales reales debe definirse antes de publicar
            el sitio como una firma operativa.
          </p>
        </aside>

        <div className="w-full max-w-[620px] lg:justify-self-end">
          <Suspense fallback={<FormFallback />}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </Section>
  );
}

function FormFallback() {
  return (
    <div
      className="min-h-[420px] border border-grafito/10 bg-concreto/60"
      aria-hidden="true"
    />
  );
}
