import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Confianza } from "@/components/Confianza";
import { Catalogo } from "@/components/Catalogo";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

// Orden de una tienda, no de una web de agencia:
//   Hero (que vendo) -> Confianza (por que fiarse) -> Catalogo (que hay)
//   -> Contacto -> Footer.
//
// Confianza va ANTES del catalogo a proposito: el visitante llega de un
// video, no te conoce, y decide si sigue mirando en los primeros segundos.
// Las secciones Servicios/Portfolio/Precios de la plantilla de agencia se
// quedan fuera: en una tienda no pintan nada.
export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Confianza />
        <Catalogo />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
