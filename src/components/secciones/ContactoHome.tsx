import Link from "next/link";
import { Suspense } from "react";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";

export function ContactoHome() {
  return (
    <Section id="contacto" tone="white" bordered>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div className="max-w-md">
          <p className="eyebrow mb-3 flex items-center gap-2.5 text-grafito/70">
            <span className="rule-accent" aria-hidden="true" />
            Contacto · Consultas
          </p>
          <h2 className="text-[2rem] font-extrabold leading-[1.06] tracking-[-0.03em] text-grafito text-balance md:text-4xl">
            Hablemos de tu proyecto.
          </h2>
          <p className="mt-4 text-[0.95rem] leading-7 text-grafito/65">
            Cuéntanos la necesidad, la etapa y la ubicación del proyecto.
            Coordinamos una conversación técnica a partir de esa información.
          </p>

          <p className="mt-5 max-w-[46ch] border-t border-grafito/15 pt-4 text-[0.78rem] leading-5 text-grafito/70">
            Formulario de demostración: valida los campos, pero no está conectado
            a un servicio de envío.
          </p>

          <Link
            href="/contacto"
            className="mt-4 inline-flex text-[0.8rem] font-semibold text-grafito transition-colors hover:text-naranja-texto"
          >
            Ver página de contacto <span aria-hidden="true">→</span>
          </Link>
        </div>

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
