import { SiteConfig } from "@/lib/types";
import raw from "./site.config.json";

// ============================================================================
// El contenido real vive en site.config.json (mismo directorio) — este
// archivo solo lo tipa. Motivo: el panel Revenant (pestaña Web) lee y
// escribe ese JSON directamente para el editor visual de contenido, sin
// tener que parsear/generar TypeScript. Editar el JSON a mano funciona
// igual de bien que usar el panel.
//
// UNICO archivo de datos a editar para adaptar esta plantilla a un
// proyecto nuevo: la marca de Sitio-Propio, o la de un cliente de
// Servicio-Clientes. Ningun componente tiene texto escrito a mano; todos
// leen de aqui (via este wrapper). Ver el blueprint completo:
// ObsidianBrain/Knowledge/Web/Blueprint-Sitios-Web-Profesionales.md
//
// Todo lo que va entre [CORCHETES] es contenido de relleno sin confirmar
// (precios, nombre de marca, ejemplos de portfolio) — sustituir antes de
// publicar. Nada de esto se ha inventado como dato real.
//
// OJO con meta.siteUrl: aunque sea un valor de relleno, tiene que ser una
// URL valida de verdad (new URL() se usa en layout.tsx/sitemap.ts/
// robots.ts en build) — nunca dejarlo con [CORCHETES], a diferencia de
// los demas campos.
// ============================================================================

export const siteConfig: SiteConfig = raw as SiteConfig;
