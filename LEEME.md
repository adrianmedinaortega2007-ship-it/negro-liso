# NEGRO LISO — primera tienda con catálogo

Accesorios (relojes, gorras, gafas, cadenas) y ropa básica lisa.

## Estado real

- **Compila y funciona.** Probado: `npm install` + `npm run build` + `npm start`,
  con capturas revisadas en escritorio y móvil.
- **El catálogo es un ESQUELETO.** Los 20 productos y sus precios son de
  muestra, para ver la tienda montada. Hay que sustituirlos por los reales de
  CJdropshipping. El aviso amarillo de la página lo dice; quítalo cuando los
  productos sean reales (`catalogo.aviso` a "").
- **No cobra todavía.** Ningún producto tiene `checkoutUrl`, así que el botón
  sale como "Próximamente" en vez de llevar a ningún sitio. En cuanto pegues
  un Stripe Payment Link en ese campo, ese producto pasa a "Comprar".

## Qué cambia respecto a las 5 tiendas anteriores

Aquellas eran la plantilla de agencia con texto de producto encima: tenían
secciones "Servicios" y "Precios" que hablaban de *"presupuesto final según el
alcance del proyecto"* debajo de unas tiras LED, contacto sin rellenar y
caracteres chinos colados en el texto.

Esta tiene lo que necesita una tienda: catálogo por categorías, precio cerrado
por producto, botón de pago por producto y las garantías (envío, devolución,
pago seguro) ANTES del catálogo — porque quien llega de un vídeo no te conoce
y decide en los primeros segundos.

## Todo el contenido está en un solo sitio

`content/site.config.json`. Ahí se cambian marca, textos, categorías,
productos, precios y enlaces de pago. Ningún componente tiene texto escrito
a mano.

Cada producto admite:

    {
      "nombre": "...",
      "descripcion": "...",
      "precio": "24,90 €",
      "coste": "6,80 €",          <- solo para tus cuentas, NUNCA se muestra
      "imagen": "/fotos/x.jpg",   <- opcional; si falta, ilustración de relleno
      "checkoutUrl": "https://buy.stripe.com/..."   <- sin esto, "Próximamente"
    }

Las fotos reales van en `public/fotos/`.

## Para verla

    npm install
    npm run dev        # http://localhost:3000

`npm run build` necesita internet: las fuentes se descargan de Google Fonts
en tiempo de compilación.

## Navegación por pestañas

El catálogo muestra **una categoría a la vez**. Con las 8 seguidas la página
medía 6.677 px y quien entraba desde un vídeo tenía que bajar por relojes,
gorras y gafas para llegar a las colonias. Con pestañas mide 2.345 px y se
salta a la categoría que interesa de un toque. La barra queda pegada al
desplazar, para no perderla al bajar por la rejilla.

Está resuelto con estado en cliente, sin rutas por categoría: con ~45
productos no compensa. Si el catálogo crece mucho, el paso siguiente sería
`/categoria/[id]` con URL propia y compartible.

## Aviso serio sobre las colonias

Dos cosas que no son opinión de diseño, son riesgo real:

1. **Nunca vendas perfume usando el nombre de una marca ajena**, ni como
   "inspirado en", ni "equivalente a", ni con el número de la casa.

   El "inspirado en" parece un hueco legal y no lo es: el Tribunal de Justicia
   de la UE lo resolvió en *L'Oréal contra Bellure* (C-487/07), que iba
   exactamente de listas de perfumes equivalentes. Usar la marca ajena para
   vender tu olor parecido es aprovecharse de su reputación, aunque nadie se
   confunda sobre quién lo fabrica.

   Por eso las doce colonias se nombran por su **familia olfativa** y sus
   notas (amaderado cedro y vetiver, fougère, acuático...). Ninguna menciona
   una marca. Mantenlo así: además vende mejor, porque describe el olor a
   quien no conoce la referencia.
2. **El perfume lleva alcohol**, y eso son mercancías peligrosas para el
   transporte aéreo. Muchos proveedores no lo envían por avión a España o lo
   hacen con restricciones y plazos más largos. Confirma con CJ que ese
   producto concreto llega a España **antes** de ponerlo a la venta, no
   después del primer pedido.

## Antes de publicar

- Cambiar `meta.siteUrl` por la URL real de Vercel.
- Rellenar `contact.email` (ahora está entre corchetes).
- Poner productos, precios y fotos reales.
- Textos legales (aviso legal, privacidad, devoluciones) — eso lo mira una
  gestoría, no se inventa.

## Tallas y colores

Cada producto admite `tallas` y `colores`. Se muestran como información, no
como selector: sin carrito, la talla se elige en la pasarela (un enlace de
pago por variante) o se confirma al preparar el pedido. Enseñarlas evita que
alguien se vaya sin comprar por no saber si hay su talla.
