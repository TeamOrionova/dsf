import { BackgroundPaths } from "@/components/ui/background-paths";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section with Background Paths */}
      <section className="w-full relative">
        <BackgroundPaths title="Unpolished Media Results Driven Excellence" />
      </section>

      {/* Hero Scroll Section */}
      <section className="w-full bg-neutral-950">
        <div className="flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <div className="flex flex-col items-center">
                <h2 className="text-4xl font-semibold text-white">
                  We focus on results, not just <br />
                  <span className="text-5xl md:text-[6rem] font-bold mt-1 leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    Creativity
                  </span>
                </h2>
                <p className="mt-8 text-neutral-400 max-w-2xl text-lg">
                  At Unpolished Media, we skip the fake corporate history and focus on what matters: growing your brand through human, founder-led storytelling and data-backed strategies.
                </p>
              </div>
            }
          >
            <Image
              src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2070&auto=format&fit=crop"
              alt="Unpolished Media Workspace"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-center"
              draggable={false}
            />
          </ContainerScroll>
        </div>
      </section>

      {/* Services Section Summary (Placeholder for now) */}
      <section className="w-full py-24 bg-white dark:bg-neutral-950 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Services</h2>
          <p className="text-xl text-neutral-500 mb-16">The tools we use to scale your presence.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-8 rounded-3xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <h3 className="text-2xl font-bold mb-4">Video Production</h3>
              <p className="text-neutral-500">Premium visual storytelling that captures attention and converts viewers into clients.</p>
            </div>
            <div className="p-8 rounded-3xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <h3 className="text-2xl font-bold mb-4">Digital Marketing</h3>
              <p className="text-neutral-500">Data-driven growth through SEO, Ads, and strategic content distribution.</p>
            </div>
            <div className="p-8 rounded-3xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <h3 className="text-2xl font-bold mb-4">Content Strategy</h3>
              <p className="text-neutral-500">A roadmap for your brand's digital identity, focused on long-term sustainability and results.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
