import InfiniteHero from "@/components/ui/infinite-hero";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { ScrollBasedVelocityImagesDemo } from "@/components/scroll-velocity-demo";
import { ThreeDCarousel } from "@/components/three-d-carousel";

export const metadata = {
  title: "Premium Web Development & Creative Marketing Agency",
  description: "Growth-focused agency specializing in high-performance Web Development, founder-led content strategy, and result-driven marketing.",
};

export default function Home() {
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
          "text": "Ninethcloud Media is a full-service agency providing high-performance Web Development (Next.js, React), cinematic Video Production, Performance Marketing, and Founder-led Content Strategy."
        }
      },
      {
        "@type": "Question",
        "name": "How is Ninethcloud different from other marketing agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We focus on human-to-human connection and measurable ROI rather than generic corporate creativity. Our founder-led approach ensures your brand builds authentic trust with its audience."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer custom web development services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in building ultra-fast, premium websites using the latest technologies like Next.js and Tailwind CSS, optimized for both user experience and high search engine rankings."
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
      {/* New 3D Infinite Hero Section */}
      <section className="w-full relative">
        <InfiniteHero
          title="Premium Web Development and Creative Marketing"
          description="Ninethcloud Media is a results-driven agency. We skip the fake corporate history and focus on what matters: growing your brand through human, founder-led storytelling and robust digital experiences."
        />
      </section>

      {/* Hero Scroll Section */}
      <section className="w-full bg-neutral-950">
        <div className="flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <div className="flex flex-col items-center">
                <h2 className="text-4xl font-semibold text-white text-center">
                  We focus on results, not just <br />
                  <span className="text-5xl md:text-[6rem] font-bold mt-1 leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    Creativity
                  </span>
                </h2>
                <p className="mt-8 text-neutral-400 max-w-2xl text-lg text-center">
                  At Ninethcloud Media, we skip the fake corporate history and focus on what matters: growing your brand through human, founder-led storytelling and robust digital experiences.
                </p>
              </div>
            }
          >
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
              alt="Ninethcloud Media Web Development and Marketing"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-center"
              draggable={false}
            />
          </ContainerScroll>
        </div>
      </section>

      {/* Scroll Velocity Images Section */}
      <section className="w-full bg-neutral-950 pb-20">
        <ScrollBasedVelocityImagesDemo />
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
