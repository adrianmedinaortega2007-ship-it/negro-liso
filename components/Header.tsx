import Link from "next/link";
import { siteConfig } from "@/content/site.config";

export function Header() {
  const { meta, nav } = siteConfig;

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <Link
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-ink-900"
        >
          {meta.brandName}
        </Link>

        <nav aria-label="Navegacion principal" className="hidden gap-8 md:flex">
          {nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-600 transition hover:text-ink-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={siteConfig.hero.primaryCta.href}
          className="rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          {siteConfig.hero.primaryCta.label}
        </a>
      </div>
    </header>
  );
}
