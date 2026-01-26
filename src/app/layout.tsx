import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

import { SmoothScrolling } from "@/components/smooth-scrolling";
import { FluidCursor } from "@/components/fluid-cursor";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://unpolished.media"), // Replace with your actual domain
  title: {
    default: "Ninth Cloud Studio | Results Driven Creative Agency",
    template: "%s | Ninth Cloud Studio",
  },
  description: "Ninth Cloud Studio is a premium Web Development and Marketing Agency focusing on founder-led content strategy and high-fidelity production for modern brands.",
  keywords: ["Web Development Agency", "Marketing Agency", "Creative Agency", "Next.js Web Development", "Content Strategy", "Founder-led Marketing", "Ninth Cloud Studio"],
  authors: [{ name: "Ninth Cloud Studio" }],
  creator: "Ninth Cloud Studio",
  publisher: "Ninth Cloud Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://unpolished.media",
    siteName: "Ninth Cloud Studio",
    title: "Ninth Cloud Studio | Results Driven Creative Agency",
    description: "We focus on results, not just creativity. Human, founder-led content strategy and production for real brands.",
    images: [
      {
        url: "/og-image.jpg", // Make sure to add this image to /public
        width: 1200,
        height: 630,
        alt: "Ninth Cloud Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ninth Cloud Studio | Results Driven Creative Agency",
    description: "Results-driven creative agency specializing in human, founder-led content strategy.",
    images: ["/og-image.jpg"],
    creator: "@ninthcloud",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="83d825d0-4ae1-4ffb-8f2c-0f2a4bf160f7"
        />
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
