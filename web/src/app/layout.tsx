import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Vibe Coding Atlası",
    template: "%s | Vibe Coding Atlası",
  },
  description:
    "Vibe coding odaları, ambient odak toplulukları ve lofi kodlama yayını yapan platformlar için tek erişim noktası.",
  metadataBase: new URL("https://agentic-7b1ed855.vercel.app"),
  openGraph: {
    title: "Vibe Coding Atlası",
    description:
      "Tüm vibe coding platformları tek sayfada: canlı odak odaları, lofi akışları ve topluluklar.",
    type: "website",
    url: "https://agentic-7b1ed855.vercel.app",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibe Coding Atlası",
    description:
      "Güncel vibe coding odaları ve ambient araçları keşfet.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="bg-zinc-50 dark:bg-zinc-950">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
