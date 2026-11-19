import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Ghost Productions | Productora Audiovisual & Contenido Estratégico",
    template: "%s | Ghost Productions",
  },
  description:
    "Productora audiovisual y agencia de contenido estratégico en Caracas. Content Day, edición de video de alta retención y branding para marcas y creadores.",
  openGraph: {
    title: "Ghost Productions | Productora Audiovisual & Contenido Estratégico",
    description:
      "Todo tu contenido en un día, edición profesional y universes visuales con carácter para escalar tu marca.",
    url: "https://ghost-productions-web.vercel.app",
    siteName: "Ghost Productions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ghost Productions - Productora Audiovisual",
      },
    ],
    locale: "es_VE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghost Productions | Productora Audiovisual",
    description:
      "Content Day, edición de video y branding estratégico para marcas y negocios.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${jakarta.className} bg-[#141414] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}