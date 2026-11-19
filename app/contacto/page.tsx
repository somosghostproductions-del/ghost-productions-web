"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Menu, 
  X, 
  MessageCircle, 
  Mail
} from "lucide-react";

export default function ContactoPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#141414] text-white font-sans selection:bg-[#29ABE2] selection:text-white">
      
      {/* ================= HEADER / NAVBAR ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 via-black/60 to-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 h-20 flex items-center justify-between">
          
          <Link href="/" className="flex items-center z-50" aria-label="Ir al inicio de Ghost Productions">
            <img
              src="/logo.png"
              alt="Ghost Productions"
              className="h-9 sm:h-11 md:h-12 w-auto object-contain"
            />
          </Link>

          <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider uppercase">
            <Link href="/" className="text-zinc-300 hover:text-[#29ABE2] pb-1 transition-colors">
              Home
            </Link>
            <Link href="/content-day" className="text-zinc-300 hover:text-[#29ABE2] pb-1 transition-colors">
              Content Day
            </Link>
            <Link href="/edicion" className="text-zinc-300 hover:text-[#29ABE2] pb-1 transition-colors">
              Edición
            </Link>
            <Link href="/portafolio" className="text-zinc-300 hover:text-[#29ABE2] pb-1 transition-colors">
              Portafolio
            </Link>
            <Link href="/contacto" className="text-white border-b-2 border-[#29ABE2] pb-1 transition-colors">
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
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-zinc-200">Home</Link>
            <Link href="/content-day" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-zinc-200">Content Day</Link>
            <Link href="/edicion" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-zinc-200">Edición</Link>
            <Link href="/portafolio" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-zinc-200">Portafolio</Link>
            <Link href="/contacto" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-[#29ABE2]">Contacto</Link>
          </nav>
        )}
      </header>

      <main className="pt-36 pb-24">

        {/* ================= MANIFESTO / HISTORIA Y PROMESA ================= */}
        <section aria-labelledby="about-title" className="max-w-3xl mx-auto text-center px-5 sm:px-6">
          
          <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#29ABE2] bg-[#29ABE2]/10 px-4 py-1.5 rounded-full mb-6 border border-[#29ABE2]/25">
            Sobre Nosotros
          </span>

          <h1 id="about-title" className="text-3xl sm:text-5xl font-extrabold uppercase tracking-wider text-white mb-10">
            Somos Ghost Productions
          </h1>

          <div className="space-y-6 text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              Llevamos más de <strong className="text-white font-bold">8 años trabajando con redes sociales</strong>, viendo de cerca lo que funciona y lo que ya es obsoleto en el mundo digital.
            </p>

            <p>
              Nos hemos formado rigurosamente en <strong className="text-[#29ABE2] font-semibold">edición de video, creación de contenido y social media marketing</strong> para entender la pauta completa que exige el mercado actual.
            </p>

            <p className="text-white font-semibold pt-2 text-xl">
              No somos una productora más.
            </p>

            <p>
              Ayudamos a creadores, marcas y negocios a potenciar su imagen para atraer más y mejores clientes de forma online. Todo de forma cómoda, disfrutando del proceso y garantizando resultados reales.
            </p>
          </div>

          <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-white/10">
            <p className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              ¿Esto resuena contigo?
            </p>
            <p className="mt-2 text-sm text-zinc-400">
              Demos el primer paso para escalar tu presencia digital.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/584242142498?text=Hola%20Ghost%20Productions,%20quiero%20ponerme%20en%20contacto%20con%20ustedes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-full bg-[#29ABE2] hover:bg-[#1f97ca] text-white font-extrabold text-sm tracking-wider uppercase shadow-[0_10px_25px_rgba(41,171,226,0.35)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contacto por WhatsApp</span>
              </a>
            </div>
          </div>

        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="py-14 px-5 sm:px-6 bg-[#0e0e0e] text-zinc-400 border-t border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          <div className="mb-5">
            <img
              src="/logo.png"
              alt="Ghost Productions"
              className="h-9 sm:h-10 w-auto object-contain mx-auto"
            />
          </div>

          <p className="text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed px-2">
            Productora audiovisual y agencia de contenido estratégico para marcas, creadores y negocios que buscan liderar en redes sociales.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="https://www.instagram.com/mr_ghostp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-xl bg-white hover:bg-[#29ABE2] text-[#141414] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://wa.me/584242142498"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-xl bg-white hover:bg-[#29ABE2] text-[#141414] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="mailto:somosghost.productions@gmail.com"
              aria-label="Email"
              className="w-10 h-10 rounded-xl bg-white hover:bg-[#29ABE2] text-[#141414] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-12 pt-6 border-t border-white/5 w-full text-xs text-zinc-600">
            © {new Date().getFullYear()} Ghost Productions. Todos los derechos reservados.
          </div>
        </div>
      </footer>

    </div>
  );
}