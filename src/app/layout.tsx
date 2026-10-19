import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import "./intro.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Intro } from "@/components/Intro";
import { SiteOffset } from "@/components/SiteOffset";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | TRAZA Ingeniería & Infraestructura",
    default: "TRAZA Ingeniería & Infraestructura",
  },
  description:
    "Concepto de marca de ingeniería civil colombiana. Diseño, planeación y desarrollo de proyectos de infraestructura: estructuras, infraestructura vial, interventoría, obras hidráulicas y gestión de obra.",
  openGraph: {
    title: "TRAZA Ingeniería & Infraestructura",
    description:
      "Construimos las conexiones que impulsan el futuro. Concepto de ingeniería civil para el mercado colombiano.",
    type: "website",
    locale: "es_CO",
    siteName: "TRAZA Ingeniería & Infraestructura",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#20272D",
};

/**
 * Evita que la intro se repita en la misma sesión y antes del primer
 * pintado. Si el almacenamiento falla o hay movimiento reducido, se
 * muestra la web directamente.
 */
const introGuard = `
(function () {
  try {
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var seen = window.sessionStorage.getItem("traza:intro:seen") === "1";
    if (reduce || seen) {
      document.documentElement.setAttribute("data-intro", "skip");
    }
  } catch (error) {
    document.documentElement.setAttribute("data-intro", "skip");
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-CO"
      className={`${inter.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: introGuard }} />
        <noscript>
          <style>{`#traza-intro{display:none}`}</style>
        </noscript>
      </head>
      <body className="min-h-dvh bg-concreto">
        <Intro />
        <div id="site-content" className="flex min-h-dvh flex-col">
          <a href="#contenido-principal" className="skip-link">
            Saltar al contenido
          </a>
          <Navigation />
          <main id="contenido-principal" className="flex-1" tabIndex={-1}>
            <SiteOffset>{children}</SiteOffset>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
