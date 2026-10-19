/**
 * Contenedor central reutilizable para todo el sitio TRAZA.
 * Establece un ancho máximo consistente (1240px en escritorio),
 * márgenes horizontales automáticos y padding lateral simétrico y responsive.
 */

export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={[
        "mx-auto max-w-[1240px] w-full px-4 sm:px-6 lg:px-8",
        className,
      ].filter(Boolean).join(" ")}
    >
      {children}
    </div>
  );
}
