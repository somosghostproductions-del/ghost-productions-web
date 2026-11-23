"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { 
  Menu, 
  X, 
  Play,
  Pause,
  Film,
  MessageCircle
} from "lucide-react";

interface VideoItem {
  id: number;
  title: string;
  src: string;
  poster?: string;
}

// Subcomponente ultra-ligero: NO descarga ni 1 byte de video hasta que el usuario hace clic
function VerticalVideoCard({
  video,
  isActive,
  onActivate,
}: {
  video: VideoItem;
  isActive: boolean;
  onActivate: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleCardClick = () => {
    // Primer clic: monta el <video> por primera vez y lo reproduce
    if (!hasLoaded) {
      setHasLoaded(true);
      setIsPlaying(true);
      onActivate();
      return;
    }

    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
      onActivate();
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Si otro video empieza a reproducirse, pausamos este automáticamente
  if (!isActive && isPlaying && videoRef.current && !videoRef.current.paused) {
    videoRef.current.pause();
    setIsPlaying(false);
  }

  return (
    <div
      onClick={handleCardClick}
      className="aspect-[9/16] rounded-3xl bg-zinc-900 border border-white/10 hover:border-[#29ABE2]/50 overflow-hidden relative shadow-2xl flex flex-col justify-end p-5 group transition-all duration-300 cursor-pointer"
    >
      {!hasLoaded ? (
        /* FACHADA ESTÁTICA: Solo carga una imagen JPG ligera (~50 KB) o el fondo oscuro */
        <>
          {video.poster ? (
            <img
              src={video.poster}
              alt={video.title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/80 via-zinc-900 to-black" />
          )}
        </>
      ) : (
        /* REPRODUCTOR REAL: Solo existe en el DOM después del clic */
        <video
          ref={videoRef}
          src={video.src}
          poster={video.poster}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          playsInline
          loop
          preload="none"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        />
      )}

      {/* Degradado oscuro inferior */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent z-10 pointer-events-none" />

      {/* Botón central Play / Pause */}
      <div
        className={`absolute inset-0 flex items-center justify-center z-20 pointer-events-none transition-opacity duration-300 ${
          isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        }`}
      >
        <div className="w-14 h-14 rounded-full bg-[#29ABE2] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          {isPlaying ? (
            <Pause className="w-5 h-5 fill-white" />
          ) : (
            <Play className="w-5 h-5 fill-white ml-0.5" />
          )}
        </div>
      </div>

      {/* Título inferior */}
      <div className="relative z-20 flex items-center justify-between text-xs font-semibold text-zinc-200 pointer-events-none">
        <span className="truncate pr-2">{video.title}</span>
        <span className="text-[#29ABE2] font-bold uppercase tracking-wider text-[10px] shrink-0">
          {isPlaying ? "Pausar" : "Ver"}
        </span>
      </div>
    </div>
  );
}

export default function PortafolioPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeVideoKey, setActiveVideoKey] = useState<string | null>(null);

  // 1. VIDEOS DE REDES SOCIALES
  // Tip: Cuando exportes las miniaturas JPG (720x1280) a public/thumbnails/, descomenta la línea poster
  const socialVideos: VideoItem[] = [
    { id: 1, title: "Caso Redes 01", src: "/videos/social-1.mp4" /*, poster: "/thumbnails/social-1.jpg" */ },
    { id: 2, title: "Caso Redes 02", src: "/videos/social-2.mp4" /*, poster: "/thumbnails/social-2.jpg" */ },
    { id: 3, title: "Caso Redes 03", src: "/videos/social-3.mp4" /*, poster: "/thumbnails/social-3.jpg" */ },
    { id: 4, title: "Caso Redes 04", src: "/videos/social-4.mp4" /*, poster: "/thumbnails/social-4.jpg" */ },
  ];

  // 2. GALERÍA DE BRANDING / IDENTIDAD
  const identityGallery = [
    { id: 1, title: "Branding & Identidad Visual", client: "Mova", image: "/branding/marca-1.jpg" },
    { id: 2, title: "Sistema Visual Corporativo", client: "Dolce lab", image: "/branding/marca-2.jpg" },
    { id: 3, title: "Lineamiento Gráfico y Estilo", client: "Diez20", image: "/branding/marca-3.jpg" },
    { id: 4, title: "Dirección de Arte & Marca", client: "Diez20", image: "/branding/marca-4.jpg" },
    { id: 5, title: "Dirección de Arte & Marca", client: "Grill House", image: "/branding/marca-5.jpg" },
    { id: 6, title: "Identidad de Marca", client: "Belidarain", image: "/branding/marca-6.jpg" },
  ];

  // 3. VIDEOS DE EDICIÓN
  const editingVideos: VideoItem[] = [
    { id: 1, title: "Edición Consein", src: "/videos/edicion-1.mp4" /*, poster: "/thumbnails/edicion-1.jpg" */ },
    { id: 2, title: "Color y Etalonaje", src: "/videos/edicion-2.mp4" /*, poster: "/thumbnails/edicion-2.jpg" */ },
    { id: 3, title: "Ritmo Visual y Subtítulos", src: "/videos/edicion-3.mp4" /*, poster: "/thumbnails/edicion-3.jpg" */ },
    { id: 4, title: "Edición", src: "/videos/edicion-4.mp4" /*, poster: "/thumbnails/edicion-4.jpg" */ },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#141414] text-white font-sans selection:bg-[#29ABE2] selection:text-white">
      
      {/* ================= HEADER / NAVBAR ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 via-black/60 to-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 h-20 flex items-center justify-between">
          
          <Link href="/" prefetch={false} className="flex items-center z-50" aria-label="Ir al inicio de Ghost Productions">
            <img
              src="/logo.png"
              alt="Ghost Productions"
              className="h-9 sm:h-11 md:h-12 w-auto object-contain"
            />
          </Link>

          <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider uppercase">
            <Link href="/" prefetch={false} className="text-zinc-300 hover:text-[#29ABE2] pb-1 transition-colors">
              Home
            </Link>
            <Link href="/content-day" prefetch={false} className="text-zinc-300 hover:text-[#29ABE2] pb-1 transition-colors">
              Content Day
            </Link>
            <Link href="/edicion" prefetch={false} className="text-zinc-300 hover:text-[#29ABE2] pb-1 transition-colors">
              Edición
            </Link>
            <Link href="/portafolio" prefetch={false} className="text-white border-b-2 border-[#29ABE2] pb-1 transition-colors">
              Portafolio
            </Link>
            <Link href="/contacto" prefetch={false} className="text-zinc-300 hover:text-[#29ABE2] pb-1 transition-colors">
              Contacto
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Menú de navegación"
            className="md:hidden z-50 p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 border border-white/15 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-[#29ABE2]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav aria-label="Menú móvil" className="md:hidden bg-[#141414]/98 backdrop-blur-xl border-b border-white/10 px-6 pt-4 pb-8 flex flex-col gap-5 text-center uppercase tracking-widest font-bold text-sm shadow-2xl">
            <Link href="/" prefetch={false} onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-zinc-200">Home</Link>
            <Link href="/content-day" prefetch={false} onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-zinc-200">Content Day</Link>
            <Link href="/edicion" prefetch={false} onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-zinc-200">Edición</Link>
            <Link href="/portafolio" prefetch={false} onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-[#29ABE2]">Portafolio</Link>
            <Link href="/contacto" prefetch={false} onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-zinc-200">Contacto</Link>
          </nav>
        )}
      </header>

      <main className="pt-28 pb-20">

        {/* ================= INTRO / MENSAJE PRINCIPAL ================= */}
        <section aria-labelledby="portafolio-intro" className="max-w-3xl mx-auto text-center px-5 sm:px-6 mb-20">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#29ABE2] bg-[#29ABE2]/10 px-4 py-1.5 rounded-full mb-6 border border-[#29ABE2]/25">
            <Film className="w-3.5 h-3.5" />
            <span>Casos de Éxito & Trabajos</span>
          </span>

          <h1 id="portafolio-intro" className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
            Cada video tiene un propósito único.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            Las métricas de vanidad no facturan; conectar el mensaje correcto con la audiencia adecuada es lo que marca la diferencia en tu negocio.
          </p>
        </section>

        {/* ================= BLOQUE 1: REDES SOCIALES ================= */}
        <section aria-labelledby="redes-sociales-title" className="mb-24 px-5 sm:px-6 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 id="redes-sociales-title" className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wider text-white">
              Redes Sociales
            </h2>
            <p className="mt-2 text-sm text-zinc-400">Tu mayor altavoz.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialVideos.map((video) => {
              const key = `social-${video.id}`;
              return (
                <VerticalVideoCard
                  key={key}
                  video={video}
                  isActive={activeVideoKey === key}
                  onActivate={() => setActiveVideoKey(key)}
                />
              );
            })}
          </div>
        </section>

        {/* ================= BLOQUE 2: BRANDING / IDENTIDAD ================= */}
        <section aria-labelledby="branding-title" className="mb-24 px-5 sm:px-6 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 id="branding-title" className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wider text-white">
              Branding & Identidad
            </h2>
            <p className="mt-2 text-sm text-zinc-400">Universos visuales y diseño con carácter.</p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {identityGallery.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid rounded-3xl bg-zinc-900 border border-white/10 hover:border-[#29ABE2]/50 overflow-hidden relative shadow-xl group transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto block group-hover:scale-[1.03] transition-transform duration-500"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-6 pt-12 z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#29ABE2] bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#29ABE2]/30">
                    {item.client}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-white group-hover:text-[#29ABE2] transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= BLOQUE 3: EDICIÓN ================= */}
        <section aria-labelledby="edicion-portafolio-title" className="mb-16 px-5 sm:px-6 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 id="edicion-portafolio-title" className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wider text-white">
              Edición & Postproducción
            </h2>
            <p className="mt-2 text-sm text-zinc-400">Magia en la postproducción y ritmo visual en formato vertical.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {editingVideos.map((video) => {
              const key = `edicion-${video.id}`;
              return (
                <VerticalVideoCard
                  key={key}
                  video={video}
                  isActive={activeVideoKey === key}
                  onActivate={() => setActiveVideoKey(key)}
                />
              );
            })}
          </div>
        </section>

        {/* ================= CTA FINAL ================= */}
        <section className="mt-20 py-16 px-5 sm:px-6 bg-[#0e0e0e] border-t border-white/5 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              ¿Listo para destacar con tu contenido?
            </h2>
            <p className="mt-3 text-zinc-400 text-sm sm:text-base">
              Hablemos sobre los objetivos de tu marca.
            </p>

            <div className="mt-8">
              <a
                href="https://wa.me/584242142498?text=Hola%20Ghost%20Productions,%20vi%20el%20portafolio%20y%20quiero%20empezar%20un%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-full bg-[#29ABE2] hover:bg-[#1f97ca] text-white font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-[0_10px_25px_rgba(41,171,226,0.35)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Iniciar proyecto</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="py-14 px-5 sm:px-6 bg-[#141414] text-zinc-400 border-t border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
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
          <div className="mt-12 pt-6 border-t border-white/5 w-full text-xs text-zinc-600">
            © 2026 Ghost Productions. Todos los derechos reservados.
          </div>
        </div>
      </footer>

    </div>
  );
}