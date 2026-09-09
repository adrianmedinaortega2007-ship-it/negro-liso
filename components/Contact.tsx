import { siteConfig } from "@/content/site.config";

// Sin backend propio a proposito (ver blueprint, seccion "Formulario de
// contacto"): si `contact.formEndpoint` esta configurado (ej. Formspree,
// un endpoint serverless propio), se renderiza un <form> real que postea
// ahi. Si no, se muestra una tarjeta de contacto directo (mailto/telefono)
// que funciona sin nada que mantener.

export function Contact() {
  const { contact } = siteConfig;

  return (
    <section id="contacto" className="bg-ink-900">
      <div className="mx-auto max-w-content px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              {contact.headline}
            </h2>
            <p className="mt-3 max-w-md text-ink-300">{contact.description}</p>

            <dl className="mt-8 space-y-3 text-sm">
              <div className="flex gap-2">
                <dt className="font-medium text-ink-400">Email:</dt>
                <dd>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-white underline decoration-brand-400 underline-offset-4 hover:text-brand-200"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
              {contact.phone && (
                <div className="flex gap-2">
                  <dt className="font-medium text-ink-400">Telefono:</dt>
                  <dd className="text-white">{contact.phone}</dd>
                </div>
              )}
            </dl>
          </div>

          {contact.formEndpoint ? (
            <form
              action={contact.formEndpoint}
              method="POST"
              className="space-y-4 rounded-card bg-white p-8"
            >
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-ink-700"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 w-full rounded-lg border border-ink-300 px-4 py-2 text-ink-900 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-ink-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg border border-ink-300 px-4 py-2 text-ink-900 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-ink-700"
                >
                  Cuentame tu proyecto
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 w-full rounded-lg border border-ink-300 px-4 py-2 text-ink-900 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                Enviar
              </button>
            </form>
          ) : (
            <div className="rounded-card bg-white p-8">
              <p className="text-ink-700">
                Escribe directamente a{" "}
                <a
                  href={`mailto:${contact.email}`}
                  className="font-semibold text-brand-700 underline underline-offset-2"
                >
                  {contact.email}
                </a>{" "}
                y te respondo en menos de 48h.
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-6 inline-block rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                Escribir email
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
