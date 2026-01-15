"use client";
import React, { useState, useEffect } from "react";
import { BackgroundPaths } from "@/components/ui/background-paths";
import Image from "next/image";
import { VideoPlayer } from "@/components/ui/video-player";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";

const categories = ["All", "Video", "Photo", "Social", "Branding"];

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProjects() {
            setLoading(true);
            try {
                const { data, error } = await supabase
                    .from('projects')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) throw error;
                setProjects(data || []);
            } catch (err) {
                console.error("Error fetching projects:", err);
                // No static fallback here since this is the primary portfolio page
            } finally {
                setLoading(false);
            }
        }

        fetchProjects();
    }, []);

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category?.toLowerCase() === activeCategory.toLowerCase());

    return (
        <main className="flex min-h-screen flex-col items-center bg-neutral-950">
            <section className="w-full relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-neutral-900">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]" />
                <BackgroundPaths title="The Unpolished Archive" />
            </section>

            <section className="max-w-7xl mx-auto py-32 px-6 w-full relative">
                <div className="flex flex-col items-center mb-24">
                    <span className="text-xs font-black uppercase tracking-[0.5em] text-blue-500 mb-6">Discovery</span>
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-12 italic tracking-tighter text-center">
                        Every Frame <br /> Has a Purpose
                    </h2>

                    <div className="flex flex-wrap gap-4 justify-center bg-neutral-900/50 p-2 rounded-full border border-neutral-800 backdrop-blur-md">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    "px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500",
                                    activeCategory === cat
                                        ? "bg-white text-black shadow-xl shadow-white/10"
                                        : "bg-transparent text-neutral-500 hover:text-white"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 animate-pulse">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="aspect-video bg-neutral-900 rounded-3xl" />
                        ))}
                    </div>
                ) : projects.length === 0 ? (
                    <div className="text-center py-24 border border-dashed border-neutral-800 rounded-3xl">
                        <p className="text-neutral-500 font-mono italic tracking-widest uppercase">No projects found in the archive.</p>
                        <p className="text-neutral-700 text-xs mt-4">Check your Supabase configuration or upload media to the 'projects' table.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="group flex flex-col gap-8"
                            >
                                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-neutral-900 border border-neutral-800 transition-all duration-700 group-hover:border-white/20 shadow-2xl">
                                    {project.media_type === "video" ? (
                                        <VideoPlayer src={project.media_url} poster={project.poster_url} className="w-full h-full" />
                                    ) : (
                                        <div className="relative w-full h-full overflow-hidden">
                                            <Image
                                                src={project.media_url}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                                            />
                                        </div>
                                    )}
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-neutral-950 to-transparent opacity-60 pointer-events-none" />
                                </div>

                                <div className="px-4 transition-transform duration-500 group-hover:translate-x-2">
                                    <div className="flex items-center gap-6 mb-4">
                                        <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white py-1.5 px-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                                            {project.category}
                                        </span>
                                        {project.media_type === "video" && (
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                                                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-blue-500 italic">Active Motion</span>
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 italic tracking-tighter leading-none group-hover:text-blue-400 transition-colors uppercase">
                                        {project.title}
                                    </h3>
                                    <p className="text-neutral-500 text-lg md:text-xl max-w-xl font-medium leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            <section className="w-full py-40 bg-neutral-950 px-6 text-center border-t border-neutral-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03),transparent_70%)]" />
                <div className="max-w-4xl mx-auto relative z-10">
                    <span className="text-xs font-black uppercase tracking-[0.5em] text-neutral-600 mb-8 block">Execution</span>
                    <h2 className="text-5xl md:text-8xl font-bold mb-12 italic tracking-tighter text-white uppercase">
                        Driven by <br /> results
                    </h2>
                    <p className="text-neutral-500 mb-16 max-w-xl mx-auto text-xl font-medium">We don't just create; we curate experiences that move the needle. Your growth is our only metric.</p>
                    <a
                        href="/contact"
                        className="inline-block px-16 py-6 bg-white text-black font-black rounded-full hover:scale-105 transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)] uppercase italic tracking-tighter text-lg"
                    >
                        Start Your Project
                    </a>
                </div>
            </section>
        </main>
    );
}
