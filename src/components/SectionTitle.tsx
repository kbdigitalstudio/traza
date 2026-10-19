export type SectionTitleProps = {
  etiqueta?: string;
  title: string;
  description?: string;
  className?: string;
  as?: "h1" | "h2";
};

/**
 * Encabezado editorial de sección:
 * etiqueta técnica + titular + descripción en una misma retícula.
 */
export function SectionTitle({
  etiqueta,
  title,
  description,
  className,
  as = "h2",
}: SectionTitleProps) {
  const Heading = as;

  return (
    <header className={["mb-8 md:mb-10", className].filter(Boolean).join(" ")}>
      {etiqueta && (
        <p className="eyebrow mb-3 flex items-center gap-2.5 text-grafito/70">
          <span className="rule-accent" aria-hidden="true" />
          {etiqueta}
        </p>
      )}

      <div className="grid items-end gap-3 lg:grid-cols-12 lg:gap-8">
        <Heading className="text-[2rem] font-extrabold leading-[1.06] tracking-[-0.03em] text-grafito text-balance md:text-4xl lg:col-span-7">
          {title}
        </Heading>
        {description && (
          <p className="max-w-[48ch] text-[0.95rem] leading-7 text-grafito/65 lg:col-span-5 lg:justify-self-end">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
