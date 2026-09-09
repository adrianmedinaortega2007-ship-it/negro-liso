import { siteConfig } from "@/content/site.config";

export function Footer() {
  const { footer } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950">
      <div className="mx-auto flex max-w-content flex-col items-center gap-4 px-6 py-10 text-sm text-ink-400 md:flex-row md:justify-between">
        <p>
          © {year} {footer.legalName ?? siteConfig.meta.brandName}. Todos los
          derechos reservados.
        </p>

        <nav aria-label="Enlaces del pie" className="flex gap-6">
          {footer.links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
