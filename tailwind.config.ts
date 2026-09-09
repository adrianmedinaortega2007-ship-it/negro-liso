import type { Config } from "tailwindcss";

// Sistema de diseno de la plantilla. Estos son los UNICOS valores que hay
// que tocar para adaptar la plantilla a la marca de un cliente nuevo (o a
// la marca final de Sitio-Propio): el resto de componentes usan siempre
// estos tokens, nunca colores/tamanos sueltos escritos a mano.
//
// Ver blueprint completo en:
// ObsidianBrain/Knowledge/Web/Blueprint-Sitios-Web-Profesionales.md

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta neutra profesional por defecto. Sustituir por la
        // identidad de marca real del proyecto (Sitio-Propio o cliente).
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
        ink: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
      fontFamily: {
        // Fuente de titulares y fuente de cuerpo, separadas a proposito
        // (patron ya usado en el panel Revenant: display + texto).
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem", // 1152px - ancho maximo de contenido en todas las secciones
      },
      borderRadius: {
        card: "1rem",
      },
    },
  },
  plugins: [],
};

export default config;
