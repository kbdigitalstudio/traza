import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CO" className={`${inter.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
