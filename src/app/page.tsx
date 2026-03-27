import { BackgroundPaths } from "@/components/ui/background-paths";
import Image from "next/image";
import { ThreeDCarousel } from "@/components/three-d-carousel";

export const metadata = {
  title: "Lead Generation & Growth Agency | High-Performance Web Systems",
  description: "We build lead generation machines and scale them through precision marketing. High-performance Next.js websites, Meta Ads, and automated sales funnels. Real results, no fluff.",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Ninth Cloud Studio",
    "image": "https://unpolished.media/og-image.jpg",
    "url": "https://unpolished.media",
    "telephone": "+918269364803",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mumbai West",
      "addressLocality": "Mumbai",
      "addressRegion": "MH",
      "postalCode": "400001",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.instagram.com/ninthcloud",
      "https://www.linkedin.com/company/ninthcloud"
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Ninth Cloud Studio provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ninth Cloud Studio is a growth-focused agency providing high-performance Web Development, Meta & Google Ads management, Automated Lead Generation Funnels, and Performance Marketing Strategy."
        }
      },
      {
        "@type": "Question",
        "name": "How is Ninth Cloud different from other marketing agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We take total ownership of your growth. Most agencies just build a site or just run ads. We build the high-speed infrastructure AND fuel it with data-driven marketing to ensure measurable ROI."
        }
      }
    ]
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section - Keep Animation */}
      <section className="w-full relative">
        <BackgroundPaths title="Scale Your Brand Exponentially" />
      </section>

      {/* About Section - Replaces ContainerScroll */}
      <section className="w-full bg-[#111] py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-[#f5f5f5] mb-6 leading-tight">
                Systems that work as hard as your ambition
              </h2>
              <p className="text-[#a0a0a0] text-lg leading-relaxed mb-8">
                We don't just deliver files; we deploy digital infrastructures. By combining 
                high-speed development with aggressive growth marketing, we build the foundation 
                your brand needs to dominate.
              </p>
              <a 
                href="/portfolio" 
                className="inline-flex items-center gap-2 text-[#0d7377] hover:text-[#14a085] transition-colors font-medium text-lg"
              >
                View our work 
                <span>→</span>
              </a>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#1a1a1a] border border-[#2a2a2a]">
              <Image 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                alt="Ninth Cloud Studio Digital Growth"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#111] py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] p-10 md:p-16 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-[#f5f5f5] mb-6">
            Ready to scale?
          </h2>
          <p className="text-[#a0a0a0] text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Stop losing potential clients to a slow, outdated website. Let's build a digital experience that actually converts.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/contact" 
              className="w-full sm:w-auto px-8 py-4 bg-[#0d7377] text-white font-semibold rounded-full hover:bg-[#14a085] transition-colors text-lg"
            >
              Book a Strategy Call
            </a>
            <a 
              href="/portfolio" 
              className="w-full sm:w-auto px-8 py-4 text-[#f5f5f5] border border-[#2a2a2a] rounded-full hover:border-[#0d7377] transition-colors font-medium"
            >
              See our work
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ThreeDCarousel />

      {/* FAQ Section */}
      <section className="w-full max-w-4xl mx-auto py-24 md:py-32 px-6 border-t border-[#2a2a2a]">
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#f5f5f5] mb-16 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-12">
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-[#f5f5f5] mb-4">
              What services does Ninth Cloud Studio provide?
            </h3>
            <p className="text-[#a0a0a0] text-lg leading-relaxed">
              Ninth Cloud Studio is a growth agency specializing in high-performance <strong className="text-[#f5f5f5]">Web Development</strong>, <strong className="text-[#f5f5f5]">Lead Generation Funnels</strong>, <strong className="text-[#f5f5f5]">Performance Marketing</strong>, and <strong className="text-[#f5f5f5]">Conversion Rate Optimization (CRO)</strong>.
            </p>
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-[#f5f5f5] mb-4">
              How is Ninth Cloud different from other marketing agencies?
            </h3>
            <p className="text-[#a0a0a0] text-lg leading-relaxed">
              We focus on human-to-human connection and measurable ROI rather than generic corporate creativity. Our founder-led approach ensures your brand builds authentic trust with its audience.
            </p>
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-[#f5f5f5] mb-4">
              Do you offer custom web development services?
            </h3>
            <p className="text-[#a0a0a0] text-lg leading-relaxed">
              Yes, we specialize in building ultra-fast, premium websites using modern tech stacks like Next.js and React, optimized for both user experience and search engine visibility.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
