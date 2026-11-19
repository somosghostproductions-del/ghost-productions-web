"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronDown, 
  Play,
  Pause,
  Scissors,
  Zap,
  Layers
} from "lucide-react";

function VerticalVideoCard({ src, label }: { src: string; label: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      onClick={togglePlay}
      className="aspect-[9/16] rounded-3xl bg-zinc-900 border border-white/15 hover:border-[#29ABE2]/50 overflow-hidden relative shadow-2xl flex items-center justify-center group cursor-pointer transition-all duration-300"
    >
      <video
        ref={videoRef}
        src={src}
        className="absolute inset-0 w-full h-full object-cover"
        playsInline
        loop
        preload="metadata"
        onEnded={() => setIsPlaying(false)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />
      <div
        className={`absolute inset-0 flex items-center justify-center z-20 pointer-events-none transition-opacity duration-300 ${
          isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        }`}
      >
        <div className="w-16 h-16 rounded-full bg-[#29ABE2] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          {isPlaying ? <Pause className="w-6 h-6 fill-white" /> : <Play className="w-6 h-6 fill-white ml-0.5" />}
        </div>
      </div>
      <span className="absolute bottom-6 z-20 text-xs font-bold uppercase tracking-widest text-zinc-200 pointer-events-none">
        {label}
      </span>
    </div>
  );
}

export default function EdicionPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const targetAudience = [
    {
      title: "Tienes tu equipo, te grabas y ya no quieres perder tiempo editando.",
      description: "Ya pasaste la parte más difícil que es encender la cámara y hablar. No te gastes las horas intentando sincronizar cortes y subtítulos; enfócate en tu mensaje y deja la postproducción en nuestras manos.",
    },
    {
      title: "Eres un creador o marca personal que busca escalar su impacto.",
      description: "Entiendes que las redes sociales exigen consistencia y un ritmo visual impecable para retener la atención. Quieres que tus videos se vean con nivel profesional sin quemar tus fines de semana frente al monitor.",
    },
    {
      title: "Quieres dejar de pensar como editor y empezar a actuar como creador.",
      description: "Tu trabajo es liderar, aportar valor y conectar con tu comunidad, no perder media tarde buscando efectos de sonido o limpiando ruidos de audio. Tu tiempo vale más.",
    },
  ];

  const features = [
    {
      title: "Edición Dinámica y Retención",
      description: "Cortes limpios, zoom estratégicos, efectos de sonido (SFX) y transiciones fluidas que mantienen a la gente pegada al video hasta el final.",
    },
    {
      title: "Subtítulos Animados Pro",
      description: "Subtítulos atractivos con palabras clave resaltadas en color, optimizados al 100% para Reels, TikTok y YouTube Shorts.",
    },
    {
      title: "Corrección de Color y Audio",
      description: "Voces nítidas sin ruido de fondo, eliminación de respiraciones y un toque de color cinematográfico para que tu imagen destaque.",
    },
  ];

  const faqs = [
    {
      question: "¿Cómo te mandamos los videos?",
      answer: "Super fácil. Una vez arrancamos, te pasamos una carpeta privada en Google Drive o un enlace directo para que subas los clips originales (brutos) sin perder nada de calidad.",
    },
    {
      question: "¿Cuántas revisiones incluye cada video?",
      answer: "Queremos que el resultado quede exactamente como lo imaginas. Cada pieza incluye hasta 2 rondas de correcciones para ajustar detalles de ritmo, textos o efectos.",
    },
    {
      question: "¿En cuánto tiempo se entrega?",
      answer: "Trabajamos con un equipo ágil. Por lo general, entregamos tus videos listos para publicar en un plazo de 48 a 72 horas hábiles después de recibir el material.",
    },
    {
      question: "¿Qué formatos y medidas entregan?",
      answer: "Entregamos en formato vertical (9:16) ideal para Instagram Reels, TikTok y YouTube Shorts, y también en horizontal (16:9) si manejas videos largos para YouTube.",
    },
    {
      question: "¿Cómo empezamos a trabajar?",
      answer: "Dale al botón de abajo para escribirnos directo al WhatsApp. Revisamos tu volumen de contenido y te asignamos un editor experto para tu marca.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#141414] text-white font-sans selection:bg-[#29ABE2] selection:text-white">
      
      {/* ================= HEADER / NAVBAR ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 via-black/60 to-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center z-50" aria-label="Ir al inicio de Ghost Productions">
            <img src="/logo.png" alt="Ghost Productions" className="h-9 sm:h-11 md:h-12 w-auto object-contain" />
          </Link>

          <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider uppercase">
            <Link href="/" className="text-zinc-300 hover:text-[#29ABE2] pb-1 transition-colors">Home</Link>
            <Link href="/content-day" className="text-zinc-300 hover:text-[#29ABE2] pb-1 transition-colors">Content Day</Link>
            <Link href="/edicion" className="text-white border-b-2 border-[#29ABE2] pb-1 transition-colors">Edición</Link>
            <Link href="/portafolio" className="text-zinc-300 hover:text-[#29ABE2] pb-1 transition-colors">Portafolio</Link>
            <Link href="/contacto" className="text-zinc-300 hover:text-[#29ABE2] pb-1 transition-colors">Contacto</Link>
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
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-zinc-200">Home</Link>
            <Link href="/content-day" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-zinc-200">Content Day</Link>
            <Link href="/edicion" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-[#29ABE2]">Edición</Link>
            <Link href="/portafolio" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-zinc-200">Portafolio</Link>
            <Link href="/contacto" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-zinc-200">Contacto</Link>
          </nav>
        )}
      </header>

      <main>
        {/* ================= HERO EDICIÓN DE VIDEO ================= */}
        <section aria-labelledby="edicion-hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-28 pb-16 px-5 sm:px-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(41,171,226,0.12),transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
            <h1 id="edicion-hero" className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
              <span className="block text-white">Edición de Video Profesional</span>
            </h1>

            <p className="mt-6 text-xl sm:text-2xl md:text-3xl font-bold text-zinc-300 max-w-2xl leading-snug">
              Tú te grabas, nosotros nos encargamos de transformar tus clips en piezas virales.
            </p>

            <p className="mt-4 text-sm sm:text-base text-zinc-400">
              Delega la postproducción y escala tu contenido <span className="text-[#29ABE2] font-semibold">sin quemar tu tiempo</span>.
            </p>

            <div className="mt-10">
              <a
                href="https://wa.me/584242142498?text=Hola%20Ghost%20Productions,%20quiero%20informaci%C3%B3n%20sobre%20los%20paquetes%20de%20edici%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-[#29ABE2] hover:bg-[#1f97ca] text-white font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-[0_10px_30px_rgba(41,171,226,0.45)] hover:shadow-[0_15px_40px_rgba(41,171,226,0.7)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Dejar de editar mis videos</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ================= PILARES DEL SERVICIO ================= */}
        <section aria-labelledby="features-title" className="py-24 px-5 sm:px-6 bg-[#0e0e0e] border-y border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 id="features-title" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                ¿Qué incluye nuestro servicio de edición?
              </h2>
              <p className="mt-3 text-zinc-400 text-sm sm:text-base">
                Aplicamos los estándares de retención más altos del mercado digital actual.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feat, index) => (
                <div key={index} className="bg-zinc-900/80 rounded-3xl p-8 border border-white/10 hover:border-[#29ABE2]/50 transition-all duration-300 flex flex-col justify-between shadow-lg">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#29ABE2]/10 border border-[#29ABE2]/30 flex items-center justify-center text-[#29ABE2] mb-6">
                      {index === 0 && <Zap className="w-6 h-6" />}
                      {index === 1 && <Layers className="w-6 h-6" />}
                      {index === 2 && <Scissors className="w-6 h-6" />}
                    </div>
                    <h3 className="text-xl font-extrabold text-white mb-3">{feat.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ¿PARA QUIÉN ES ESTO? ================= */}
        <section aria-labelledby="audience-title" className="py-24 px-5 sm:px-6 bg-[#141414]">
          <div className="max-w-6xl mx-auto">
            <h2 id="audience-title" className="text-3xl sm:text-4xl font-extrabold text-center tracking-tight text-white mb-14">
              ¿Para quién es esto?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {targetAudience.map((item, index) => (
                <article key={index} className="bg-zinc-900/80 hover:bg-zinc-900 rounded-3xl p-8 border border-white/10 hover:border-[#29ABE2]/50 transition-all duration-300 flex flex-col justify-between shadow-lg">
                  <div>
                    <span className="inline-block w-8 h-8 rounded-full bg-[#29ABE2]/15 text-[#29ABE2] font-bold text-sm text-center leading-8 mb-6 border border-[#29ABE2]/30">
                      0{index + 1}
                    </span>
                    <h3 className="text-xl font-extrabold text-white mb-3">{item.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-14 text-center">
              <a
                href="https://wa.me/584242142498?text=Hola,%20quiero%20delegar%20la%20edici%C3%B3n%20de%20mis%20videos%20con%20Ghost%20Productions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-full bg-[#29ABE2] hover:bg-[#1f97ca] text-white font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-[0_10px_25px_rgba(41,171,226,0.35)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Delega tu edición hoy</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ================= VIDEOS DE MUESTRA (REELS REALES) ================= */}
        <section aria-labelledby="samples-edicion" className="py-20 px-5 sm:px-6 bg-[#0e0e0e] border-y border-white/5">
          <div className="max-w-5xl mx-auto text-center">
            <h2 id="samples-edicion" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Edición dinámica lista para retener
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              Ejemplos del ritmo visual y subtitulado que aplicamos a cada entrega.
            </p>

            {/* Cambia las rutas src por los nombres de tus 2 videos en public/videos/ */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <VerticalVideoCard src="/videos/edicion-1.mp4" label="Muestra Edición 01" />
              <VerticalVideoCard src="/videos/edicion-3.mp4" label="Muestra Edición 02" />
            </div>
          </div>
        </section>

        {/* ================= PREGUNTAS FRECUENTES ================= */}
        <section aria-labelledby="faq-edicion" className="py-24 px-5 sm:px-6 bg-[#141414]">
          <div className="max-w-3xl mx-auto">
            <h2 id="faq-edicion" className="text-3xl font-extrabold text-center text-white tracking-tight mb-12">
              Preguntas Frecuentes
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div key={index} className="border border-white/10 rounded-2xl bg-zinc-900/60 overflow-hidden transition-colors">
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-white hover:text-[#29ABE2] transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-[#29ABE2] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 text-sm sm:text-base text-zinc-400 leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-14 text-center">
              <a
                href="https://wa.me/584242142498?text=Hola,%20tengo%20una%20duda%20sobre%20el%20servicio%20de%20edici%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-[#29ABE2] hover:bg-[#1f97ca] text-white font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-[0_10px_25px_rgba(41,171,226,0.35)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Hablar con un editor</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="py-14 px-5 sm:px-6 bg-[#0e0e0e] text-zinc-400 border-t border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="mb-5">
            <img src="/logo.png" alt="Ghost Productions" className="h-9 sm:h-10 w-auto object-contain mx-auto" />
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed px-2">
            Productora audiovisual y agencia de contenido estratégico para marcas, creadores y negocios que buscan liderar en redes sociales.
          </p>
          <div className="mt-12 pt-6 border-t border-white/5 w-full text-xs text-zinc-600">
            © {new Date().getFullYear()} Ghost Productions. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}