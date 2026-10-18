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
    <div
      className={[
        "mx-auto max-w-72 px-4 sm:px-6 lg:px-8",
        "mb-12 md:mb-16 lg:mb-20",
        className,
      ].filter(Boolean).join(" ")}
    >
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-8 mb-8">
        {etiqueta && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-naranja/10 px-3 py-1 text-[0.7rem] font-bold text-naranja tracking-wider uppercase">
            {etiqueta}
          </span>
        )}
        <div className="flex items-end gap-3">
          <h2
            className={[
              "text-grafito font-black tracking-tight leading-tight",
              "text-3xl md:text-5xl lg:text-6xl",
            ].join(" ")}
          >
            {title}
          </h2>
          <div className="hidden lg:block">
            <div className="relative w-24 h-[1px] bg-grafito/30 mb-1">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-naranja" />
            </div>
          </div>
        </div>
      </div>
      {description && (
        <p className="max-w-md text-[1rem] leading-7 text-grafito/70 lg:max-w-lg">
          {description}
        </p>
      )}
    </div>
  );
}
