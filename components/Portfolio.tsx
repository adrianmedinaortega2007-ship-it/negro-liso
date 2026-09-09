import Image from "next/image";
import { siteConfig } from "@/content/site.config";

export function Portfolio() {
  const { portfolio } = siteConfig;

  if (portfolio.length === 0) return null;

  return (
    <section id="portfolio" className="border-b border-ink-200 bg-ink-50">
      <div className="mx-auto max-w-content px-6 py-20">
        <h2 className="font-display text-3xl font-bold text-ink-900 md:text-4xl">
          Portfolio
        </h2>
        <p className="mt-3 max-w-2xl text-ink-600">
          Algunos de los proyectos en los que he trabajado.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item) => {
            const content = (
              <>
                <div className="relative aspect-video overflow-hidden rounded-card bg-ink-200">
                  {item.imageSrc && (
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      className="object-cover transition group-hover:scale-105"
                    />
                  )}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-ink-600">{item.description}</p>
                {item.tags && item.tags.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-white px-3 py-1 text-xs font-medium text-ink-600 ring-1 ring-inset ring-ink-200"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            );

            return item.href ? (
              <a key={item.title} href={item.href} className="group block">
                {content}
              </a>
            ) : (
              <div key={item.title} className="group">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
