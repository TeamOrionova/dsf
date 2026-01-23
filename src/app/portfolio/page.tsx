import { scanPortfolio } from "@/lib/portfolio-scanner";
import PortfolioClient from "./portfolio-client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Explore our latest projects in video, photo, and website design. High-fidelity results for brands that matter.",
};


// This is a Server Component. It runs on the server at build time (or request time if dynamic).
// By default in Next.js App Router, this is static unless dynamic functions are used.
// It will scan the folders and pass the data to the client component.
export default function PortfolioPage() {
    const projects = scanPortfolio();

    return <PortfolioClient projects={projects} />;
}
