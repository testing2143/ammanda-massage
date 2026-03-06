import type { Metadata, Viewport } from "next";
import { Manrope, Playfair_Display } from "next/font/google";

import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { CookieNotice } from "@/components/CookieNotice";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { defaultMetadata } from "@/lib/metadata";

import "./globals.css";

const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["600", "700"]
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: "#F5F0E8",
  colorScheme: "light"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${headingFont.variable} ${bodyFont.variable} bg-mist text-ink antialiased`}>
        <div className="relative isolate min-h-screen overflow-x-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_left,rgba(143,188,143,0.26),transparent_38%),radial-gradient(circle_at_top_right,rgba(201,169,110,0.22),transparent_30%)]" />
          <Header />
          <AnnouncementBanner />
          <main className="relative">{children}</main>
          <Footer />
          <CookieNotice />
        </div>
        <LocalBusinessJsonLd />
      </body>
    </html>
  );
}
