import {
    ScrollVelocityContainer,
    ScrollVelocityRow,
} from "@/components/magicui/scroll-based-velocity"
import Link from "next/link"

const IMAGES_ROW_A = [
    "https://images.unsplash.com/photo-1749738456487-2af715ab65ea?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1720139288219-e20aa9c8895b?q=80&w=1810&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]

const IMAGES_ROW_B = [
    "https://images.unsplash.com/photo-1749738456487-2af715ab65ea?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1720139288219-e20aa9c8895b?q=80&w=1810&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]

export function ScrollBasedVelocityImagesDemo() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8">
            <ScrollVelocityContainer className="w-full">
                <ScrollVelocityRow baseVelocity={5} direction={1} className="py-4">
                    {IMAGES_ROW_A.map((src, idx) => (
                        <Link key={idx} href="/portfolio" className="block relative">
                            <img
                                src={`${src}&ixlib=rb-4.0.3`}
                                alt="Unsplash sample"
                                width={240}
                                height={160}
                                loading="lazy"
                                decoding="async"
                                className="mx-4 inline-block h-40 w-60 rounded-lg object-cover shadow-sm transition-transform hover:scale-105 cursor-pointer"
                            />
                        </Link>
                    ))}
                </ScrollVelocityRow>
                <ScrollVelocityRow baseVelocity={5} direction={-1} className="py-4">
                    {IMAGES_ROW_B.map((src, idx) => (
                        <Link key={idx} href="/portfolio" className="block relative">
                            <img
                                src={`${src}&ixlib=rb-4.0.3`}
                                alt="Unsplash sample"
                                width={240}
                                height={160}
                                loading="lazy"
                                decoding="async"
                                className="mx-4 inline-block h-40 w-60 rounded-lg object-cover shadow-sm transition-transform hover:scale-105 cursor-pointer"
                            />
                        </Link>
                    ))}
                </ScrollVelocityRow>
            </ScrollVelocityContainer>

            <div className="from-white dark:from-neutral-950 pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-white dark:from-neutral-950 pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div>
    )
}
