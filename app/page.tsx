"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Video, 
  Scissors, 
  Palette, 
  TrendingUp, 
  ArrowRight, 
  MessageCircle, 
  Mail,
  Menu,
  X
} from "lucide-react";

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 12 logos con escala controlada para móvil y desktop sin desbordar pantalla
  const brands = [
    { name: "Elixir", logo: "/logos/elixir.png", scale: "scale-110 sm:scale-125" },
    { name: "Fisio", logo: "/logos/Fisio.png", scale: "scale-125 sm:scale-150" },
    { name: "Eurobig", logo: "/logos/eurobig.png", scale: "scale-125 sm:scale-150" },
    { name: "Son Sabor Latino", logo: "/logos/sonsabor.png", scale: "scale-115 sm:scale-135" },
    { name: "Ferrexito", logo: "/logos/ferrexito.png", scale: "scale-125 sm:scale-150" },
    { name: "Mova", logo: "/logos/mova.png", scale: "scale-125 sm:scale-150" },
    { name: "PGU Impresión", logo: "/logos/PGU.png", scale: "scale-125 sm:scale-150" },
    { name: "Russos Part", logo: "/logos/russospart.png", scale: "scale-110 sm:scale-125" },
    { name: "Grill House", logo: "/logos/grillhouse.png", scale: "scale-110 sm:scale-125" },
    { name: "Cerise", logo: "/logos/Cerise.png", scale: "scale-90 sm:scale-95" },
    { name: "Diez10", logo: "/logos/diez10.png", scale: "scale-125 sm:scale-150" },
    { name: "Consein", logo: "/logos/consein.png", scale: "scale-105 sm:scale-110" },
  ];

  // 4 servicios informativos
  const services = [
    {
      title: "Content Day",
      description: "Jornada de grabación mensual con guiones, luces y dirección en set para tu marca.",
      icon: Video,
      badge: "Producción",
    },
    {
      title: "Edición de Video",
      description: "Postproducción dinámica enfocada en retención, ritmo visual, subtítulos y color.",
      icon: Scissors,
      badge: "Postproducción",
    },
    {
      title: "Identidad Visual",
      description: "Construimos el universo gráfico y estético para que tu marca destaque con autoridad.",
      icon: Palette,
      badge: "Branding",
    },
    {
      title: "Gestión de Ads",
      description: "Campañas publicitarias estratégicas en Meta Ads para escalar tu alcance y tus ventas.",
      icon: TrendingUp,
      badge: "Tráfico Pago",
    },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#141414] text-white font-sans selection:bg-[#29ABE2] selection:text-white">
      
      {/* ================= HEADER / NAVBAR ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 via-black/60 to-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 h-20 flex items-center justify-between">
          
          {/* Logo principal */}
          <Link href="/" className="flex items-center z-50" aria-label="Ir al inicio de Ghost Productions">
            <img
              src="/logo.png"
              alt="Ghost Productions"
              className="h-9 sm:h-11 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Navegación Desktop (oculta en móvil) */}
          <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider uppercase">
            <Link href="/" className="text-white border-b-2 border-[#29ABE2] pb-1 transition-colors">
              Home
            </Link>
            <Link href="/portafolio" className="text-zinc-300 hover:text-[#29ABE2] pb-1 transition-colors">
              Portafolio
            </Link>
            <Link href="/contacto" className="text-zinc-300 hover:text-[#29ABE2] pb-1 transition-colors">
  Contacto
</Link>
          </nav>

          {/* Botón Menú Hamburguesa (solo visible en móvil) */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            className="md:hidden z-50 p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 border border-white/15 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#29ABE2]" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Menú Desplegable Móvil */}
        {isMobileMenuOpen && (
          <nav
            aria-label="Menú móvil"
            className="md:hidden bg-[#141414]/98 backdrop-blur-xl border-b border-white/10 px-6 pt-4 pb-8 flex flex-col gap-5 text-center uppercase tracking-widest font-bold text-sm shadow-2xl"
          >
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 text-[#29ABE2]"
            >
              Home
            </Link>
            <Link
              href="/portafolio"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 text-zinc-200 hover:text-[#29ABE2] transition-colors"
            >
              Portafolio
            </Link>
            <Link
  href="/contacto"
  onClick={() => setIsMobileMenuOpen(false)}
  className="py-2 text-zinc-200 hover:text-[#29ABE2] transition-colors"
>
  Contacto
</Link>
          </nav>
        )}
      </header>

      {/* ================= CONTENIDO PRINCIPAL (MAIN SEMÁNTICO) ================= */}
      <main>

        {/* ================= 1. HERO SECTION ================= */}
        <section
          aria-labelledby="hero-heading"
          className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-12 px-5 sm:px-6"
        >
          {/* Video de fondo */}
          <div className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
              <source
                src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
                type="video/mp4"
              />
            </video>

            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#141414]" />
          </div>

          {/* Contenido Central del Hero */}
          <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center">
            <h1
              id="hero-heading"
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15]"
            >
              <span className="block text-white drop-shadow-md">
                Contenido Audiovisual
              </span>
              <span className="block text-zinc-200 font-bold mt-1 drop-shadow-md">
                para marcas y negocios
              </span>
            </h1>

            <p className="mt-4 sm:mt-5 text-sm sm:text-lg md:text-xl text-zinc-200 max-w-md sm:max-w-xl font-normal drop-shadow leading-relaxed">
              Videos que te dan autoridad, crecimiento y ventas.
            </p>

            {/* 2 Botones Principales */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-xs sm:max-w-none">
              <Link
                href="/content-day"
                className="w-full sm:w-auto sm:min-w-[240px] px-6 sm:px-8 py-4 rounded-xl bg-[#29ABE2] hover:bg-[#1f97ca] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-[0_10px_25px_rgba(41,171,226,0.4)] hover:shadow-[0_15px_35px_rgba(41,171,226,0.65)] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Contenido para Redes</span>
                <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>

              <Link
                href="/edicion"
                className="w-full sm:w-auto sm:min-w-[240px] px-6 sm:px-8 py-4 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/30 hover:border-[#29ABE2] font-extrabold text-xs sm:text-sm tracking-wider uppercase backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Edición de Video</span>
                <ArrowRight className="w-4 h-4 shrink-0 text-[#29ABE2] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* ================= 2. MARCAS QUE HAN CONFIADO ================= */}
        <section
          aria-labelledby="brands-heading"
          className="py-16 sm:py-20 px-5 sm:px-6 bg-[#141414] relative z-10 overflow-hidden"
        >
          <div className="max-w-5xl mx-auto text-center">
            <h2
              id="brands-heading"
              className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug"
            >
              <span className="block text-[#29ABE2]">Las Marcas</span>
              <span className="block text-white">que han confiado en nosotros</span>
            </h2>

            {/* Lista semántica <ul> de 12 Logos (2 cols en móvil, 3 en tablet, 4 en desktop) */}
            <ul className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-10 sm:gap-y-16 gap-x-4 sm:gap-x-10 items-center justify-items-center">
              {brands.map((brand, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-center h-16 sm:h-20 w-full max-w-[140px] sm:max-w-[170px] opacity-85 hover:opacity-100 transition-all duration-300 overflow-hidden"
                >
                  <img
                    src={brand.logo}
                    alt={`Logo de ${brand.name}`}
                    loading="lazy"
                    className={`max-h-11 sm:max-h-15 w-auto max-w-[85%] object-contain transition-transform duration-300 ${brand.scale}`}
                  />
                </li>
              ))}
            </ul>

            {/* Botón de Contacto debajo de los logos */}
            <div className="mt-14 sm:mt-16 text-center">
              <a
                href="https://wa.me/584242142498?text=Hola%20Ghost%20Productions,%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-9 sm:px-10 py-3.5 rounded-full bg-[#29ABE2] hover:bg-[#1f97ca] text-white font-bold text-sm sm:text-base tracking-wide shadow-[0_10px_25px_rgba(41,171,226,0.35)] hover:shadow-[0_15px_30px_rgba(41,171,226,0.5)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span>contactar</span>
              </a>
            </div>
          </div>
        </section>

        {/* ================= 3. SERVICIOS (TE AYUDAMOS CON) ================= */}
        <section
          aria-labelledby="services-heading"
          className="py-20 sm:py-24 px-5 sm:px-6 bg-white text-[#141414]"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto px-2">
              <h2
                id="services-heading"
                className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-900"
              >
                Te ayudamos con:
              </h2>
              <p className="mt-3 text-zinc-500 text-sm sm:text-lg leading-relaxed">
                Soluciones audiovisuales completas diseñadas para escalar tu presencia digital sin complicaciones.
              </p>
            </div>

            {/* Lista semántica <ul> de 4 Tarjetas con <article> */}
            <ul className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <li key={index} className="w-full">
                    <article className="h-full group relative bg-zinc-50 hover:bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200/80 hover:border-[#29ABE2]/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(41,171,226,0.12)] transition-all duration-300 flex flex-col items-center text-center sm:items-start sm:text-left hover:-translate-y-1">
                      <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#29ABE2] bg-[#29ABE2]/10 px-3 py-1 rounded-full mb-5">
                        {service.badge}
                      </span>

                      <div
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-zinc-200 group-hover:border-[#29ABE2] group-hover:bg-[#29ABE2] transition-colors duration-300 flex items-center justify-center shadow-sm mb-5 sm:mb-6"
                        aria-hidden="true"
                      >
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-zinc-800 group-hover:text-white transition-colors duration-300" />
                      </div>

                      <h3 className="text-lg sm:text-xl font-extrabold text-zinc-900 group-hover:text-[#29ABE2] transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-2.5 text-sm text-zinc-600 leading-relaxed">
                        {service.description}
                      </p>
                    </article>
                  </li>
                );
              })}
            </ul>

            {/* Botón Contactar Central */}
            <div className="mt-12 sm:mt-14 text-center">
              <a
                href="https://wa.me/584242142498?text=Hola%20Ghost%20Productions,%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-9 sm:px-10 py-4 rounded-full bg-[#29ABE2] hover:bg-[#1f97ca] text-white font-bold text-sm sm:text-base tracking-wide shadow-[0_10px_25px_rgba(41,171,226,0.35)] hover:shadow-[0_15px_30px_rgba(41,171,226,0.5)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span>contactar</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* ================= FOOTER SEMÁNTICO ================= */}
      <footer id="contacto" className="py-14 sm:py-16 px-5 sm:px-6 bg-[#141414] text-zinc-400 border-t border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          {/* Logo en el Footer */}
          <div className="mb-5">
            <img
              src="/logo.png"
              alt="Ghost Productions"
              loading="lazy"
              className="h-9 sm:h-10 w-auto object-contain mx-auto"
            />
          </div>

          <p className="text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed px-2">
            Productora audiovisual y agencia de contenido estratégico para marcas, creadores y negocios que buscan liderar en redes sociales.
          </p>

          {/* Redes Sociales */}
          <div className="mt-8">
            <h2 className="block text-xs font-bold uppercase tracking-widest text-white mb-4">
              redes
            </h2>
            <ul className="flex items-center justify-center gap-4">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Síguenos en Instagram"
                  className="w-11 h-11 rounded-xl bg-white hover:bg-[#29ABE2] text-[#141414] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:-translate-y-0.5"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/584242142498"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Escríbenos por WhatsApp"
                  className="w-11 h-11 rounded-xl bg-white hover:bg-[#29ABE2] text-[#141414] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:somosghost.productions@gmail.com"
                  aria-label="Envíanos un correo electrónico"
                  className="w-11 h-11 rounded-xl bg-white hover:bg-[#29ABE2] text-[#141414] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:-translate-y-0.5"
                >
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-12 pt-6 border-t border-white/5 w-full text-xs text-zinc-600">
            © 2026 Ghost Productions. Todos los derechos reservados.
          </div>
        </div>
      </footer>

    </div>
  );
}