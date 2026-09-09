"use client";

import { useState } from "react";
import siteConfig from "@/content/site.config.json";

export function Catalogo() {
  const catalogo = siteConfig.catalogo as any[];

  // Búsqueda en tiempo real
  const [busqueda, setBusqueda] = useState("");

  // Tipos únicos (Camisetas, Zapatos, Relojes...)
  const tiposUnicos = Array.from(new Set(catalogo.map((c) => c.tipo || "General")));
  const [tipoSel, setTipoSel] = useState(tiposUnicos[0] || "");

  // Categorías filtradas por tipo
  const categoriasFiltradas = catalogo.filter((c) => (c.tipo || "General") === tipoSel);
  const [catSel, setCatSel] = useState(categoriasFiltradas[0]?.id || "");

  const catActual =
    categoriasFiltradas.find((c) => c.id === catSel) || categoriasFiltradas[0] || catalogo[0];

  // Productos filtrados según la búsqueda o según la categoría
  const productosAMostrar = busqueda.trim() !== "" 
    ? catalogo.flatMap(c => c.productos).filter((p: any) => p.nombre.toLowerCase().includes(busqueda.toLowerCase()))
    : catActual?.productos || [];

  return (
    <section className="py-16 bg-slate-50 text-slate-900 min-h-screen" id="catalogo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Colección Oficial
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Catálogo Negro Liso
          </h2>
          <p className="text-slate-600 mt-2 text-base">
            Selecciona el tipo de prenda o busca tu modelo preferido para pedir directamente por WhatsApp.
          </p>

          {/* Barra de Búsqueda */}
          <div className="mt-6 relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Buscar modelo o prenda..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition text-slate-800 placeholder-slate-400"
            />
            <svg
              className="w-5 h-5 absolute left-3 top-3.5 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {busqueda.trim() === "" && (
          <>
            {/* Nivel 1: Selector por Tipo (Camisetas, Zapatos, Relojes...) */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {tiposUnicos.map((tipo) => {
                const activo = tipo === tipoSel;
                return (
                  <button
                    key={tipo}
                    onClick={() => {
                      setTipoSel(tipo);
                      const primerasCat = catalogo.filter((c) => (c.tipo || "General") === tipo);
                      if (primerasCat.length > 0) {
                        setCatSel(primerasCat[0].id);
                      }
                    }}
                    className={`px-6 py-3 rounded-xl font-bold text-sm tracking-wide uppercase transition-all duration-200 shadow-sm ${
                      activo
                        ? "bg-blue-600 text-white shadow-blue-200 shadow-lg scale-105"
                        : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    {tipo}
                  </button>
                );
              })}
            </div>

            {/* Nivel 2: Selector por Marca */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categoriasFiltradas.map((cat) => {
                const activa = cat.id === (catActual?.id || "");
                return (
                  <button
                    key={cat.id}
                    onClick={() => setCatSel(cat.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activa
                        ? "bg-slate-900 text-white shadow-md"
                        : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    {cat.marca || cat.categoria}
                    <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                      activa ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"
                    }`}>
                      {cat.productos.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </>
        )}

        {/* Encabezado del Bloque de Productos */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-8">
          <h3 className="text-xl font-bold text-slate-800 uppercase tracking-wider">
            {busqueda.trim() !== "" ? `Resultados de la búsqueda ("${busqueda}")` : catActual?.categoria}
          </h3>
          <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-md">
            {productosAMostrar.length} Modelos
          </span>
        </div>

        {/* Rejilla de Productos */}
        {productosAMostrar.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {productosAMostrar.map((prod: any, index: number) => {
              const mensaje = `Hola Negro Liso, me interesa consultar/pedir este producto: ${prod.nombre}`;
              const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(mensaje)}`;

              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  {prod.imagen && (
                    <div className="w-full h-64 bg-slate-100 overflow-hidden relative">
                      <img
                        src={prod.imagen}
                        alt={prod.nombre}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                      <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-slate-800 text-xs font-bold px-2.5 py-1 rounded-md shadow-sm border border-slate-100">
                        Disponible
                      </span>
                    </div>
                  )}

                  <div className="p-5 flex flex-col flex-grow justify-between">
                    <div>
                      <h4 className="font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {prod.nombre}
                      </h4>
                      <p className="text-sm font-semibold text-blue-600 mt-1 mb-4">
                        {prod.precio}
                      </p>
                    </div>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm py-3 px-4 rounded-xl transition-colors shadow-sm gap-2"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12.031 0c-6.627 0-12 5.373-12 12 0 2.159.572 4.187 1.565 5.952l-1.596 5.829 5.932-1.563c1.704.928 3.659 1.458 5.733 1.458 6.628 0 12-5.373 12-12 0-6.627-5.372-12-12.034-12zm6.318 16.892c-.262.736-1.528 1.408-2.124 1.464-.56.052-1.285.228-3.791-.766-2.981-1.183-4.887-4.218-5.038-4.417-.149-.198-1.218-1.621-1.218-3.092 0-1.472.772-2.195 1.045-2.493.273-.299.596-.373.795-.373.199 0 .398.002.572.01.187.008.438-.071.686.522.259.621.884 2.155.96 2.311.076.156.126.338.025.536-.101.198-.152.323-.301.498-.149.174-.313.389-.447.523-.149.149-.305.311-.131.609.174.298.774 1.277 1.662 2.068 1.141 1.018 2.102 1.332 2.399 1.481.298.149.472.124.646-.075.174-.199.746-.869.945-1.168.199-.298.398-.248.671-.149.273.099 1.739.82 2.037.969.298.149.497.223.572.348.075.124.075.72-.187 1.456z"/>
                      </svg>
                      Pedir por WhatsApp
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-500 text-lg">No se encontraron productos en esta categoría o búsqueda.</p>
          </div>
        )}

      </div>
    </section>
  );
}

export default Catalogo;
