import { siteConfig } from "@/content/site.config";

// Garantias visibles. En una tienda que nadie conoce, esto es lo que decide
// la compra: quien entra desde un video de TikTok no sabe quien eres, y lo
// primero que piensa es "y si no llega". Decirlo claro y arriba convierte
// mas que cualquier adorno.
export function Confianza() {
  const { confianza } = siteConfig;
  if (!confianza || confianza.length === 0) return null;

  return (
    <section className="border-b border-ink-200 bg-ink-50">
      <div className="mx-auto max-w-content px-6 py-14">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {confianza.map((c) => (
            <div key={c.titulo}>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-brand-700">
                {c.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{c.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
