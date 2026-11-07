import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dony Putra Perkasa — Owner satelyd.id | Software Engineering & Pendidik Matematika",
  description:
    "Portofolio resmi Dony Putra Perkasa — Owner satelyd.id, Software Engineering, dan Pendidik Matematika di Yogyakarta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F8FAFC] text-slate-900 selection:bg-[#0284C7] selection:text-white`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
