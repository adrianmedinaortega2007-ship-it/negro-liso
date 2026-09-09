import { siteConfig } from "@/content/site.config";

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section id="top" className="border-b border-ink-200 bg-ink-50">
      <div className="mx-auto flex max-w-content flex-col items-start gap-6 px-6 py-24 md:py-32">
        {hero.eyebrow && (
          <span className="rounded-full bg-brand-100 px-4 py-1 text-sm font-semibold text-brand-700">
            {hero.eyebrow}
          </span>
        )}

        <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-ink-900 md:text-6xl">
          {hero.headline}
        </h1>

        <p className="max-w-2xl text-lg text-ink-600 md:text-xl">
          {hero.subheadline}
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href={hero.primaryCta.href}
            className="rounded-full bg-brand-600 px-7 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-700"
          >
            {hero.primaryCta.label}
          </a>

          {hero.secondaryCta && (
            <a
              href={hero.secondaryCta.href}
              className="rounded-full border border-ink-300 px-7 py-3 text-base font-semibold text-ink-800 transition hover:border-ink-400 hover:bg-white"
            >
              {hero.secondaryCta.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
