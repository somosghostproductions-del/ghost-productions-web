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
  Pause
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

export default function ContentDayPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const painPoints = [
    {
      title: "No tienes tiempo.",
      description: "Si ya estás haciendo contenido para tu negocio o marca, te consume demasiado tiempo. Esto es para ti.",
    },
    {
      title: "No sabes grabarte bien.",
      description: "Luces, sonido, cámaras, ópticas... tú no puedes saber de todo. Si quieres aumentar la calidad sin complicaciones, esto es para ti.",
    },
    {
      title: "Tu imagen actual no está a la altura.",
      description: "Tu marca vale tanto como lo que la gente percibe. Por muy bueno que sea tu servicio, si no se transmite, no vale nada.",
    },
  ];

  const faqs = [
    {
      question: "¿Dónde se realiza la grabación?",
      answer: "Nosotros nos desplazamos directamente a tu oficina, local o espacio de trabajo. Llevamos todo el equipo profesional de iluminación, audio y cámaras para montar el set allí mismo sin que tengas que trasladarte.",
    },
    {
      question: "¿Cuántos vídeos haremos en el Content Day?",
      answer: "Varía según los objetivos de la sesión, pero en una jornada de grabación podemos producir desde 6 hasta 20 piezas de contenido estratégico (Reels, TikToks, Shorts y videos principales).",
    },
    {
      question: "¿Cuánto tiempo estaremos grabando?",
      answer: "Optimizamos cada minuto para que no sacrifiques tu operación diaria. Las jornadas de grabación suelen durar entre 3 y 4 horas intensivas y bien organizadas.",
    },
    {
      question: "¿Hacen ustedes los guiones?",
      answer: "¡Sí! Nos encargamos de estructurar toda la pauta, los ganchos de retención y los guiones antes de la sesión para que tú solo te preocupes por hablar a la cámara.",
    },
    {
      question: "Mi negocio es diferente, ¿esto me ayudará?",
      answer: "Absolutamente. El contenido audiovisual de autoridad funciona para marcas personales, negocios locales, profesionales, e-commerce y empresas B2B que quieren destacar en digital.",
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
            <Link href="/content-day" className="text-white border-b-2 border-[#29ABE2] pb-1 transition-colors">Content Day</Link>
            <Link href="/edicion" className="text-zinc-300 hover:text-[#29ABE2] pb-1 transition-colors">Edición</Link>
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
            <Link href="/content-day" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-[#29ABE2]">Content Day</Link>
            <Link href="/edicion" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-zinc-200">Edición</Link>
            <Link href="/portafolio" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-zinc-200">Portafolio</Link>
            <Link href="/contacto" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-zinc-200">Contacto</Link>
          </nav>
        )}
      </header>

      <main>
        {/* ================= HERO CONTENT DAY ================= */}
        <section aria-labelledby="content-day-hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-28 pb-16 px-5 sm:px-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(41,171,226,0.12),transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
            <h1 id="content-day-hero" className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
              <span className="block text-white">Content Day</span>
            </h1>

            <p className="mt-6 text-xl sm:text-2xl md:text-3xl font-bold text-zinc-300 max-w-2xl leading-snug">
              Todo tu contenido en un día, con la mayor calidad y ahorrando tiempo.
            </p>

            <p className="mt-4 text-sm sm:text-base text-zinc-400">
              Si tienes un <span className="text-[#29ABE2] font-semibold">negocio o marca</span>, esto es para ti.
            </p>

            <div className="mt-10">
              <a
                href="https://wa.me/584242142498?text=Hola%20Ghost%20Productions,%20quiero%20agendar%20mi%20Content%20Day"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-[#29ABE2] hover:bg-[#1f97ca] text-white font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-[0_10px_30px_rgba(41,171,226,0.45)] hover:shadow-[0_15px_40px_rgba(41,171,226,0.7)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Tengo un negocio o marca</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="block mt-3 text-xs text-zinc-500 uppercase tracking-widest">
                Plazas mensuales muy limitadas
              </span>
            </div>
          </div>
        </section>

        {/* ================= ¿TODAVÍA GRABAS TÚ MISMO? ================= */}
        <section aria-labelledby="pain-points-title" className="py-24 px-5 sm:px-6 bg-[#0e0e0e] border-y border-white/5">
          <div className="max-w-6xl mx-auto">
            <h2 id="pain-points-title" className="text-3xl sm:text-4xl font-extrabold text-center tracking-tight text-white mb-14">
              ¿Todavía grabas tú mismo el contenido para RRSS?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {painPoints.map((point, index) => (
                <article
                  key={index}
                  className="bg-zinc-900/80 hover:bg-zinc-900 rounded-3xl p-8 border border-white/10 hover:border-[#29ABE2]/50 transition-all duration-300 flex flex-col justify-between shadow-lg"
                >
                  <div>
                    <span className="inline-block w-8 h-8 rounded-full bg-[#29ABE2]/15 text-[#29ABE2] font-bold text-sm text-center leading-8 mb-6 border border-[#29ABE2]/30">
                      0{index + 1}
                    </span>
                    <h3 className="text-xl font-extrabold text-white mb-3">{point.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{point.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-14 text-center">
              <a
                href="https://wa.me/584242142498?text=Hola,%20quiero%20delegar%20mi%20contenido%20con%20Ghost%20Productions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-full bg-[#29ABE2] hover:bg-[#1f97ca] text-white font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-[0_10px_25px_rgba(41,171,226,0.35)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Delegar mi contenido</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ================= VIDEOS DE MUESTRA ================= */}
        <section aria-labelledby="samples-title" className="py-24 px-5 sm:px-6 bg-[#141414]">
          <div className="max-w-5xl mx-auto text-center">
            <h2 id="samples-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Calidad impecable en cada formato vertical
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              Así se ve el contenido que producimos para nuestros clientes.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <VerticalVideoCard src="/videos/content-1.mp4" label="Ejemplo Cliente 01" />
              <VerticalVideoCard src="/videos/content-2.mp4" label="Ejemplo Cliente 02" />
            </div>
          </div>
        </section>

        {/* ================= PREGUNTAS FRECUENTES ================= */}
        <section aria-labelledby="faq-title" className="py-24 px-5 sm:px-6 bg-[#0e0e0e] border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <h2 id="faq-title" className="text-3xl font-extrabold text-center text-white tracking-tight mb-12">
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
                href="https://wa.me/584242142498?text=Hola,%20tengo%20una%20duda%20sobre%20el%20Content%20Day"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-[#29ABE2] hover:bg-[#1f97ca] text-white font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-[0_10px_25px_rgba(41,171,226,0.35)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Agendar Llamada</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="py-14 px-5 sm:px-6 bg-[#141414] text-zinc-400 border-t border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="mb-5">
            <img src="/logo.png" alt="Ghost Productions" className="h-9 sm:h-10 w-auto object-contain mx-auto" />
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