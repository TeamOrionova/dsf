import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

import { SmoothScrolling } from "@/components/smooth-scrolling";
import { FluidCursor } from "@/components/fluid-cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unpolished Media | Results Driven Creative Agency",
  description: "We focus on results, not just creativity. Human, founder-led content strategy and production for real brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-purple-500/30 bg-neutral-950 text-white`}
      >
        <SmoothScrolling>
          <FluidCursor />
          <Navbar />
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
