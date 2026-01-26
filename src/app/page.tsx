import InfiniteHero from "@/components/ui/infinite-hero";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { ScrollBasedVelocityImagesDemo } from "@/components/scroll-velocity-demo";
import { ThreeDCarousel } from "@/components/three-d-carousel";

export const metadata = {
  title: "Growth-Engine Agency | Web Development, Ads & Organic Marketing",
  description: "We build high-performance digital systems and scale them through Meta Ads, Google Ads, and founder-led organic strategy. Real growth, no fluff.",
};

export default function Home() {
  // ... (keeping existing JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Ninethcloud Media",
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
      "https://www.instagram.com/ninethcloud",
      "https://www.linkedin.com/company/ninethcloud"
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Ninethcloud Media provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ninethcloud Media is a full-service growth agency providing high-performance Web Development, Meta & Google Ads management, cinematic Video Production, and Founder-led Organic Strategy."
        }
      },
      {
        "@type": "Question",
        "name": "How is Ninethcloud different from other marketing agencies?",
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
      {/* Re-positioned Full-Service Growth Hero */}
      <section className="w-full relative">
        <InfiniteHero
          eyebrow="FULL-STACK GROWTH PARTNER"
          title="We Build the Engine. We Fuel the Scaling."
          description="High-performance code meets high-conversion marketing. We don't just build your website—we scale your brand through precision Meta Ads, Google Ads, and founder-led organic strategy."
          primaryCTA="Start Scaling Now"
          primaryLink="/contact"
          secondaryCTA="View Our Systems"
          secondaryLink="/portfolio"
        />
      </section>

      {/* Hero Scroll Section */}
      <section className="w-full bg-neutral-950">
        <div className="flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <div className="flex flex-col items-center">
                <h2 className="text-4xl font-semibold text-white text-center">
                  Systems that work as hard as <br />
                  <span className="text-5xl md:text-[6rem] font-bold mt-1 leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    Your Ambition
                  </span>
                </h2>
                <p className="mt-8 text-neutral-400 max-w-2xl text-lg text-center leading-relaxed">
                  We don't just deliver files; we deploy digital infrastructures. By combining high-speed development with aggressive growth marketing, we build the foundation your brand needs to dominate.
                </p>
              </div>
            }
          >
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
              alt="Ninethcloud Media Digital Growth"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-center shadow-2xl"
              draggable={false}
            />
          </ContainerScroll>
        </div>
      </section>

      {/* Final Conversion CTA Section */}
      <section className="w-full bg-neutral-950 py-32 px-6">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-b from-neutral-900 to-black border border-white/10 p-12 md:p-24 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full -translate-y-1/2" />

          <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter italic uppercase">Ready to scale?</h2>
          <p className="text-neutral-400 text-xl max-w-2xl mx-auto mb-12">
            Stop losing potential clients to a slow, outdated website. Let's build a digital experience that actually converts.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-10 py-5 bg-white text-black font-bold rounded-full text-lg transition-transform hover:scale-105 active:scale-95">
                Book a Strategy Call
              </button>
            </a>
            <a href="/portfolio" className="w-full sm:w-auto text-white font-medium hover:text-blue-400 transition-colors">
              See the work first →
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ThreeDCarousel />

      {/* FAQ Section for SEO & LLMs */}
      <section className="w-full max-w-4xl mx-auto py-32 px-6 border-t border-white/5">
        <h2 className="text-5xl font-bold mb-16 italic tracking-tighter text-center uppercase">Frequently Asked Questions</h2>
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">What services does Ninethcloud Media provide?</h3>
            <p className="text-neutral-400 text-lg">Ninethcloud Media is a full-service agency providing high-performance <strong>Web Development</strong>, cinematic <strong>Video Production</strong>, <strong>Performance Marketing</strong>, and <strong>Founder-led Content Strategy</strong>.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">How is Ninethcloud different from other marketing agencies?</h3>
            <p className="text-neutral-400 text-lg">We focus on human-to-human connection and measurable ROI rather than generic corporate creativity. Our founder-led approach ensures your brand builds authentic trust with its audience.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Do you offer custom web development services?</h3>
            <p className="text-neutral-400 text-lg">Yes, we specialize in building ultra-fast, premium websites using modern tech stacks like Next.js and React, optimized for both user experience and search engine visibility.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
