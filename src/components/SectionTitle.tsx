/**
 * Encabezado de sección con estilo editorial-técnico.
 * Etiqueta superior + titular + línea de cota sutil.
 */

export type SectionTitleProps = {
  etiqueta?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionTitle({
  etiqueta,
  title,
  description,
  className,
}: SectionTitleProps) {
  return (
    <div className={["mb-8 md:mb-10 lg:mb-12", className].filter(Boolean).join(" ")}>
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 lg:gap-6 mb-4">
        {etiqueta && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-naranja/10 px-3 py-1 text-[0.68rem] font-bold text-naranja tracking-wider uppercase">
            {etiqueta}
          </span>
        )}
        <div className="flex items-end gap-3">
          <h2
            className={[
              "text-grafito font-black tracking-tight leading-tight",
              "text-3xl md:text-4xl lg:text-5xl",
            ].join(" ")}
          >
            {title}
          </h2>
          <div className="hidden lg:block">
            <div className="relative w-20 h-[1px] bg-grafito/20 mb-1">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-naranja" />
            </div>
          </div>
        </div>
      </div>
      {description && (
        <p className="max-w-md text-[0.95rem] leading-7 text-grafito/70 lg:max-w-lg">
          {description}
        </p>
      )}
    </div>
  );
}
