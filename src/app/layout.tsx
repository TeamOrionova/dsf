import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

import { SmoothScrolling } from "@/components/smooth-scrolling";
import { LeadPopup } from "@/components/lead-popup";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://unpolished.media"),
  title: {
    default: "Ninth Cloud Studio | Results Driven Creative Agency",
    template: "%s | Ninth Cloud Studio",
  },
  description: "High-performance Lead Generation and Growth Marketing Agency. We build results-driven digital systems and automated sales funnels for modern brands.",
  keywords: ["Lead Generation Agency", "Growth Marketing", "Performance Web Development", "Next.js Development", "Sales Funnels", "Conversion Rate Optimization", "Ninth Cloud Studio"],
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
        url: "/og-image.jpg",
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
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.svg", type: "image/svg+xml", sizes: "180x180" },
    ],
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
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-[#111] text-[#f5f5f5]`}
      >
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="83d825d0-4ae1-4ffb-8f2c-0f2a4bf160f7"
        />
        <SmoothScrolling>
          <Navbar />
          {children}
          <Footer />
          <LeadPopup />
        </SmoothScrolling>
      </body>
    </html>
  );
}
