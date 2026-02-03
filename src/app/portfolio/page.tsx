import { scanPortfolio } from "@/lib/portfolio-scanner";
import PortfolioClient from "./portfolio-client";
import { Metadata } from "next";
import { BackgroundPaths } from "@/components/ui/background-paths";

export const metadata: Metadata = {
    title: "Portfolio | Case Studies in Lead Gen & Web Performance",
    description: "Explore our latest projects in lead generation funnels, performance marketing, and high-speed web design. Results-driven digital systems.",
};


// This is a Server Component. It runs on the server at build time (or request time if dynamic).
// By default in Next.js App Router, this is static unless dynamic functions are used.
// It will scan the folders and pass the data to the client component.
export default function PortfolioPage() {
    const projects = scanPortfolio();

    return (
        <main className="flex min-h-screen flex-col items-center">
            <section className="w-full relative overflow-hidden">
                <BackgroundPaths title="The Scaling Portfolio" />
            </section>
            <PortfolioClient projects={projects} />
        </main>
    );
}
