import { siteConfig } from "@/content/site.config";

export function Services() {
  const { services } = siteConfig;

  if (services.length === 0) return null;

  return (
    <section id="servicios" className="border-b border-ink-200">
      <div className="mx-auto max-w-content px-6 py-20">
        <h2 className="font-display text-3xl font-bold text-ink-900 md:text-4xl">
          Servicios
        </h2>
        <p className="mt-3 max-w-2xl text-ink-600">
          Cada proyecto se disena a medida — esto es lo que puedo construir
          para ti.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-card border border-ink-200 bg-white p-6 transition hover:border-brand-300 hover:shadow-sm"
            >
              <h3 className="font-display text-lg font-semibold text-ink-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
