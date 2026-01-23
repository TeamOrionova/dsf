import { BackgroundPaths } from "@/components/ui/background-paths";

export const metadata = {
    title: "Services | Web Development & Marketing Agency",
    description: "Premium Web Development, Performance Marketing, and High-fidelity Content Strategy. We build results-oriented digital experiences for modern brands.",
};


const services = [
    {
        title: "Web Development",
        what: "Custom-built, high-performance websites using Next.js, React, and modern tech stacks.",
        who: "Businesses needing ultra-fast, premium digital storefronts or high-converting landing pages.",
        problem: "Slow, outdated websites that lose customers and fail to rank on search engines.",
        color: "from-blue-600 to-indigo-600"
    },
    {
        title: "Video Production",
        what: "High-end cinematic storytelling tailored for high-impact brand awareness.",
        who: "Established brands and founders looking to elevate their visual presence.",
        problem: "Boring, generic corporate videos that fail to engage or build emotional connection.",
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Performance Marketing",
        what: "Data-backed growth strategy across Paid Ads, SEO, and Funnel Optimization.",
        who: "Brands looking for a measurable return on their marketing spend. Results, not vibes.",
        problem: "Ad spend wasted on unoptimized campaigns with no clear tracking or ROI.",
        color: "from-yellow-500 to-orange-500"
    },
    {
        title: "Photography",
        what: "Premium brand photography, product shoots, and founder portraits.",
        who: "Brands needing high-quality assets for websites and advertising.",
        problem: "Stock photos that look fake and disconnect the brand from its audience.",
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Social Media Content",
        what: "Short-form vertical video (Reels/TikToks) and engaging static content.",
        who: "Businesses struggling to stay relevant and consistent on social platforms.",
        problem: "Low engagement and high production friction for daily social content.",
        color: "from-orange-500 to-red-500"
    },
    {
        title: "Content Strategy",
        what: "A 12-month roadmap for content that builds authority and drives sales.",
        who: "Founders who have the expertise but lack the structure to share it.",
        problem: "Inconsistent posting and content that doesn't align with business goals.",
        color: "from-indigo-500 to-blue-500"
    }
];

export default function Services() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <section className="w-full relative h-[50vh] flex items-center justify-center overflow-hidden">
                <BackgroundPaths title="Services Designed to Drive Growth" />
            </section>

            <section className="max-w-7xl mx-auto py-24 px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-[2rem] bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all duration-300"
                        >
                            <div className={`w-12 h-12 rounded-xl mb-6 bg-gradient-to-br ${service.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
                            <h3 className="text-2xl font-bold mb-6 text-white">{service.title}</h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-xs uppercase tracking-widest text-neutral-500 mb-2">What it is</h4>
                                    <p className="text-neutral-300">{service.what}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Who it's for</h4>
                                    <p className="text-neutral-300">{service.who}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Problem solved</h4>
                                    <p className="text-neutral-300">{service.problem}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="w-full py-24 bg-neutral-950 border-t border-neutral-900 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 italic">Need a Custom Strategy?</h2>
                    <p className="text-xl text-neutral-400 mb-12">
                        Every business is different. We don't believe in one-size-fits-all packages.
                        Let's talk about your goals and build a solution that works for you.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-12 py-5 bg-white text-black font-bold rounded-full text-lg hover:scale-105 transition-transform"
                    >
                        Let's Build Something
                    </a>
                </div>
            </section>
        </main>
    );
}
