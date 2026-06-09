import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Liberal Constructora | Construcción corporativa",
  description:
    "Landing page corporativa para empresa constructora con experiencia en proyectos residenciales, comerciales e industriales.",
  openGraph: {
    title: "Liberal Constructora | Construcción corporativa",
    description:
      "Landing page informativa para una empresa constructora enfocada en profesionalismo, calidad y confianza.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full bg-white font-sans text-slate-950">{children}</body>
    </html>
  );
}
