import { BackgroundPaths } from "@/components/ui/background-paths";

export const metadata = {
    title: "Services | Lead Generation & Performance Marketing Agency",
    description: "High-performance Web Development, Data-Driven Marketing, and Lead Generation Systems. We build digital infrastructures that convert visitors into revenue.",
};

const services = [
    {
        title: "Web Development",
        what: "Custom-built, high-performance websites using Next.js, React, and modern tech stacks.",
        who: "Businesses needing ultra-fast, premium digital storefronts or high-converting landing pages.",
        problem: "Slow, outdated websites that lose customers and fail to rank on search engines.",
        color: "from-[#0d7377] to-[#14a085]"
    },
    {
        title: "Lead Gen Funnels",
        what: "Engineered sales funnels designed to capture, nurture, and convert high-quality leads automatically.",
        who: "Service-based businesses and B2B companies looking to automate their sales pipeline.",
        problem: "Traffic that doesn't convert and lack of a systematic way to capture customer interest.",
        color: "from-[#14a085] to-[#0a5c5f]"
    },
    {
        title: "Performance Marketing",
        what: "Data-backed growth strategy across Paid Ads, SEO, and Funnel Optimization.",
        who: "Brands looking for a measurable return on their marketing spend. Results, not vibes.",
        problem: "Ad spend wasted on unoptimized campaigns with no clear tracking or ROI.",
        color: "from-[#ff6b6b] to-[#e55555]"
    },
    {
        title: "Conversion Optimization",
        what: "Continuous A/B testing and UI/UX refinements to maximize the value of every visitor.",
        who: "Existing sites with traffic that want to squeeze more ROI from their current audience.",
        problem: "High bounce rates and abandoned carts/forms despite having good traffic.",
        color: "from-[#ff8e8e] to-[#ff6b6b]"
    },
    {
        title: "Growth Marketing",
        what: "Strategic multi-channel campaigns focused on aggressive scale and measurable ROI.",
        who: "Brands ready to move past organic growth and dominate their niche through paid media.",
        problem: "Stagnant growth and inability to predict where the next customer is coming from.",
        color: "from-[#0a5c5f] to-[#0d7377]"
    },
    {
        title: "Content Strategy",
        what: "A 12-month roadmap for content that builds authority and drives sales.",
        who: "Founders who have the expertise but lack the structure to share it.",
        problem: "Inconsistent posting and content that doesn't align with business goals.",
        color: "from-[#e55555] to-[#ff6b6b]"
    }
];

export default function Services() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-[#111]">
            <section className="w-full relative overflow-hidden">
                <BackgroundPaths title="High Precision Growth Systems" />
            </section>

            <section className="max-w-7xl mx-auto py-24 px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#404040] transition-all duration-300"
                        >
                            <div className={`w-12 h-12 rounded-xl mb-6 bg-gradient-to-br ${service.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
                            <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#f5f5f5] mb-6">{service.title}</h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-xs tracking-wider text-[#737373] mb-2 uppercase">What it is</h4>
                                    <p className="text-[#a0a0a0] leading-relaxed">{service.what}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs tracking-wider text-[#737373] mb-2 uppercase">Who it's for</h4>
                                    <p className="text-[#a0a0a0] leading-relaxed">{service.who}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs tracking-wider text-[#737373] mb-2 uppercase">Problem solved</h4>
                                    <p className="text-[#a0a0a0] leading-relaxed">{service.problem}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="w-full py-24 bg-[#0a0a0a] border-t border-[#1a1a1a] px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#f5f5f5] mb-6">
                        Need a Custom Strategy?
                    </h2>
                    <p className="text-lg text-[#a0a0a0] mb-12 max-w-2xl mx-auto leading-relaxed">
                        Every business is different. We don't believe in one-size-fits-all packages.
                        Let's talk about your goals and build a solution that works for you.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-10 py-4 bg-[#0d7377] text-white font-semibold rounded-full text-lg hover:bg-[#14a085] transition-colors"
                    >
                        Start a Conversation
                    </a>
                </div>
            </section>
        </main>
    );
}
