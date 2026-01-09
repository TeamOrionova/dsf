"use client";
import React, { useState } from "react";
import { BackgroundPaths } from "@/components/ui/background-paths";
import Image from "next/image";
import { VideoPlayer } from "@/components/ui/video-player";
import { cn } from "@/lib/utils";

const projects = [
    {
        id: 1,
        title: "The Unpolished Cut",
        category: "Video",
        type: "video",
        src: "https://ui.aceternity.com/video-sample.mp4", // Replace with Supabase URL
        desc: "A raw look into our creative process."
    },
    {
        id: 2,
        title: "Urban Beats",
        category: "Social",
        type: "image",
        src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop",
        desc: "Highly engaging Reels for a streetwear brand."
    },
    {
        id: 3,
        title: "Founder Story",
        category: "Photo",
        type: "image",
        src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
        desc: "Professional branding shoot for a SaaS founder."
    },
    {
        id: 4,
        title: "Brand Essence",
        category: "Branding",
        type: "video",
        src: "https://ui.aceternity.com/video-sample.mp4", // Replace with Supabase URL
        desc: "Visual identity captured in motion."
    },
    {
        id: 5,
        title: "Fitness Flow",
        category: "Video",
        type: "image",
        src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
        desc: "High-octane commercial for a premium gym."
    },
    {
        id: 6,
        title: "Gourmet Story",
        category: "Photo",
        type: "image",
        src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
        desc: "Product and lifestyle photography for a restaurant."
    },
];

const categories = ["All", "Video", "Photo", "Social", "Branding"];

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <main className="flex min-h-screen flex-col items-center">
            <section className="w-full relative h-[50vh] flex items-center justify-center overflow-hidden">
                <BackgroundPaths title="Selected Works & Motion Stories" />
            </section>

            <section className="max-w-7xl mx-auto py-24 px-6 w-full">
                <div className="flex flex-wrap gap-4 mb-16 justify-center">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-medium transition-all border",
                                activeCategory === cat
                                    ? "bg-white text-black border-white"
                                    : "bg-transparent text-neutral-400 border-neutral-800 hover:border-neutral-600"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="flex flex-col gap-6"
                        >
                            <div className="relative aspect-video rounded-3xl overflow-hidden bg-neutral-900 group">
                                {project.type === "video" ? (
                                    <VideoPlayer src={project.src} className="w-full h-full" />
                                ) : (
                                    <div className="relative w-full h-full overflow-hidden">
                                        <Image
                                            src={project.src}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="px-2">
                                <div className="flex items-center gap-4 mb-2">
                                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-500 py-1 px-3 rounded-full border border-neutral-800 bg-neutral-900/50">
                                        {project.category}
                                    </span>
                                    {project.type === "video" && (
                                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-500 italic">Motion</span>
                                    )}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 italic tracking-tighter">{project.title}</h3>
                                <p className="text-neutral-400 text-sm md:text-lg max-w-sm">{project.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="w-full py-24 bg-neutral-950 px-6 text-center border-t border-neutral-900">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 italic tracking-tighter">Ready to be our next success story?</h2>
                    <p className="text-neutral-500 mb-12 max-w-lg mx-auto">Let's build a visual strategy that works while you sleep.</p>
                    <a
                        href="/contact"
                        className="inline-block px-12 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-all shadow-xl shadow-white/5"
                    >
                        Start Your Project
                    </a>
                </div>
            </section>
        </main>
    );
}
