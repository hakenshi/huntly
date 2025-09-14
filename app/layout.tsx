import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Huntly - Discovery Engine para Leads de Qualidade",
  description: "Encontre e qualifique leads automaticamente com nossa discovery engine. Economize horas de pesquisa manual e aumente suas conversões.",
  keywords: "leads, marketing, automação, CRM, discovery engine",
  authors: [{ name: "Huntly Team" }],
  openGraph: {
    title: "Huntly - Discovery Engine para Leads",
    description: "Encontre leads de qualidade automaticamente",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
