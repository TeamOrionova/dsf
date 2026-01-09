import { BackgroundPaths } from "@/components/ui/background-paths";
import Image from "next/image";

export default function About() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <section className="w-full relative h-[60vh] flex items-center justify-center overflow-hidden">
                <BackgroundPaths title="Real People Real Results No Fluff" />
            </section>

            <section className="max-w-4xl mx-auto py-24 px-6 text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-12 italic tracking-tighter">Who is Unpolished Media?</h2>
                <div className="space-y-8 text-xl text-neutral-400 leading-relaxed">
                    <p>
                        We're tired of "marketing speak." We're tired of agencies that sell you creativity while ignoring your conversion rates.
                        <span className="text-white"> Unpolished Media</span> was founded on a simple principle: <span className="text-white italic">Be human, be real, and focus on the bottom line.</span>
                    </p>
                    <p>
                        We don't have a fake 20-year corporate history. We don't have a glass office in a city we don't live in.
                        We're a team of creators and strategists led by founders who actually do the work.
                    </p>
                </div>
            </section>

            <section className="w-full py-24 bg-neutral-900 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-8">Our Mission & Approach</h2>
                        <div className="space-y-6">
                            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
                                <h3 className="text-xl font-bold mb-2">The Result-First Mindset</h3>
                                <p className="text-neutral-400">Every piece of content we produce has a goal. Whether it's to sell, to educate, or to build trust, we measure success by your metrics, not just our portfolio aesthetics.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
                                <h3 className="text-xl font-bold mb-2">Human-Centric Strategy</h3>
                                <p className="text-neutral-400">People buy from people. We specialize in founder-led content that builds a bridge between you and your audience without the "corporate filter."</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                            alt="Team collaboration"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="max-w-4xl mx-auto py-24 px-6 text-center">
                <blockquote className="text-3xl md:text-4xl italic font-serif text-white mb-8">
                    "Unpolished doesn't mean low quality. It means high authenticity."
                </blockquote>
                <p className="text-neutral-500">— Founder, Unpolished Media</p>
            </section>
        </main>
    );
}
