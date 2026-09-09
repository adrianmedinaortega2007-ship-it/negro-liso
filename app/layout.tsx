import type { Metadata } from "next";
import { siteConfig } from "@/content/site.config";
import "./globals.css";

// SIN fuente externa, a proposito.
//
// La plantilla cargaba Inter y Plus Jakarta Sans con next/font/google. Eso
// obliga a tener internet EN LA COMPILACION (las descarga al construir), y
// ademas anade peso a la primera carga. En una tienda, la primera carga es
// justo lo que decide si alguien que llega de un video se queda o se va.
//
// Se usa la pila de fuentes del sistema: Segoe UI en Windows, San Francisco
// en Mac e iPhone, Roboto en Android. Cero descargas, cero espera, y el
// texto se ve nativo en cada aparato. Si mas adelante se quiere una
// tipografia propia, se mete en public/fuentes y se usa next/font/local,
// que tampoco necesita internet.
const PILA_SISTEMA =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.meta.siteUrl),
  title: siteConfig.meta.siteTitle,
  description: siteConfig.meta.siteDescription,
  openGraph: {
    title: siteConfig.meta.siteTitle,
    description: siteConfig.meta.siteDescription,
    url: siteConfig.meta.siteUrl,
    siteName: siteConfig.meta.brandName,
    locale: siteConfig.meta.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.meta.siteTitle,
    description: siteConfig.meta.siteDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={siteConfig.meta.locale} style={{ ["--font-body" as string]: PILA_SISTEMA, ["--font-display" as string]: PILA_SISTEMA }}>
      <body>{children}</body>
    </html>
  );
}
