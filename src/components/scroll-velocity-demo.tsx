import {
    ScrollVelocityContainer,
    ScrollVelocityRow,
} from "@/components/magicui/scroll-based-velocity"
import Link from "next/link"

const PREVIOUS_WORKS = [
    "/portfolio/Photo/Concert/01.jpg",
    "/portfolio/Photo/Electric-Soul-Performance/01.jpg",
    "/portfolio/Photo/Concert/02.jpg",
    "/portfolio/Photo/Electric-Soul-Performance/02.jpg",
]

const TESTIMONIALS = [
    {
        text: "Ninth Cloud Studio helped us cross 1M+ views on Instagram in just 30 days! Their hooks and storytelling are insane, and they really know how to capture the Indian audience's attention.",
        author: "Aryan Sharma, Growth Lead"
    },
    {
        text: "The most professional team in India for high-performance creative strategy. They didn't just give us content; they gave us a brand identity that actually converts into sales. No fluff, just results.",
        author: "Priya Patel, Founder"
    },
    {
        text: "Our LinkedIn engagement grew by 400% after their strategic intervention. They really understand social media psychology and how to build authority in the tech space.",
        author: "Rohan Gupta, Tech Entrepreneur"
    },
    {
        text: "They behave like founders, not just an agency. It's rare to find a team that cares about our ROI as much as we do. Best investment we've made in our creative spend this year.",
        author: "Ananya Iyer, D2C Owner"
    },
    {
        text: "From strategy to final production, Kabir and his team handled everything seamlessly. Our content quality has gone from amateur to world-class, and our community loves it.",
        author: "Kabir Singh, Content Creator"
    },
]

export function ScrollBasedVelocityImagesDemo() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-12 bg-neutral-950">
            <div className="text-center mb-10 px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white opacity-80 uppercase tracking-[0.2em]">Our Impact</h2>
            </div>

            <ScrollVelocityContainer className="w-full">
                {/* Row 1: Previous Works (Images) */}
                <ScrollVelocityRow baseVelocity={3} direction={1} className="py-4">
                    {PREVIOUS_WORKS.map((src, idx) => (
                        <Link key={idx} href="/portfolio" className="block relative group mx-4">
                            <div className="relative h-48 w-72 overflow-hidden rounded-xl">
                                <img
                                    src={src}
                                    alt="Previous Work"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-white text-sm font-bold uppercase tracking-widest">View Project</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </ScrollVelocityRow>

                {/* Row 2: Testimonials (Text Cards) */}
                <ScrollVelocityRow baseVelocity={2} direction={-1} className="py-10">
                    {TESTIMONIALS.map((t, idx) => (
                        <div
                            key={idx}
                            className="mx-8 flex flex-col justify-start w-[450px] min-h-[250px] p-10 rounded-3xl bg-neutral-900/50 backdrop-blur-sm border border-white/5 shadow-2xl hover:border-white/10 transition-all duration-300 whitespace-normal"
                        >
                            <p className="text-neutral-200 text-sm md:text-base italic mb-6 leading-relaxed">
                                "{t.text}"
                            </p>
                            <div className="mt-auto">
                                <p className="text-white text-xs font-bold uppercase tracking-widest opacity-60">— {t.author}</p>
                            </div>
                        </div>
                    ))}
                </ScrollVelocityRow>
            </ScrollVelocityContainer>

            <div className="from-neutral-950 pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-neutral-950 pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div>
    )
}
