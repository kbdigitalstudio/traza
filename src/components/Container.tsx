export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Retícula central del sitio. Todas las secciones comparten este ancho
 * máximo, padding lateral y márgenes automáticos.
 */
export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={[
        "mx-auto w-full max-w-site px-5 sm:px-6 lg:px-8",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
