import { siteConfig } from "@/content/site.config";

export function Pricing() {
  const { pricing } = siteConfig;

  if (pricing.length === 0) return null;

  return (
    <section id="precios" className="border-b border-ink-200">
      <div className="mx-auto max-w-content px-6 py-20">
        <h2 className="font-display text-3xl font-bold text-ink-900 md:text-4xl">
          Precios
        </h2>
        <p className="mt-3 max-w-2xl text-ink-600">
          Precios orientativos por tipo de proyecto — el presupuesto final
          depende del alcance real.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-card border p-8 ${
                plan.highlighted
                  ? "border-brand-600 bg-brand-600 text-white shadow-lg"
                  : "border-ink-200 bg-white"
              }`}
            >
              <h3
                className={`font-display text-xl font-semibold ${
                  plan.highlighted ? "text-white" : "text-ink-900"
                }`}
              >
                {plan.name}
              </h3>

              <div className="mt-4 flex items-baseline gap-2">
                <span
                  className={`font-display text-3xl font-bold ${
                    plan.highlighted ? "text-white" : "text-ink-900"
                  }`}
                >
                  {plan.price}
                </span>
                {plan.priceNote && (
                  <span
                    className={`text-sm ${
                      plan.highlighted ? "text-brand-100" : "text-ink-500"
                    }`}
                  >
                    {plan.priceNote}
                  </span>
                )}
              </div>

              <p
                className={`mt-3 text-sm ${
                  plan.highlighted ? "text-brand-50" : "text-ink-600"
                }`}
              >
                {plan.description}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex gap-2 text-sm ${
                      plan.highlighted ? "text-brand-50" : "text-ink-700"
                    }`}
                  >
                    <span aria-hidden="true">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={plan.cta.href}
                className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-semibold transition ${
                  plan.highlighted
                    ? "bg-white text-brand-700 hover:bg-brand-50"
                    : "bg-ink-900 text-white hover:bg-ink-800"
                }`}
              >
                {plan.cta.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
