import { BackgroundPaths } from "@/components/ui/background-paths";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { ScrollBasedVelocityImagesDemo } from "@/components/scroll-velocity-demo";
import { ThreeDCarousel } from "@/components/three-d-carousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section with Background Paths */}
      <section className="w-full relative">
        <BackgroundPaths title="Ninethcloud Media Results Driven Excellence" />
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
                  At Ninethcloud Media, we skip the fake corporate history and focus on what matters: growing your brand through human, founder-led storytelling and data-backed strategies.
                </p>
              </div>
            }
          >
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
              alt="Ninethcloud Media Creative Studio"
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
    </main>
  );
}
