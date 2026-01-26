"use client";
import React, { useState, useEffect } from "react";
import { BackgroundPaths } from "@/components/ui/background-paths";
import Image from "next/image";
import { VideoPlayer } from "@/components/ui/video-player";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowRight, ArrowLeft } from "lucide-react";

// The "Control Panel" - Add your photos and videos here
// Each project can have multiple media items
// Removed static import of projects
import { Project } from "@/lib/portfolio-scanner";

export default function PortfolioClient({ projects }: { projects: Project[] }) {
    const categories = ["All", "Video", "Photo", "Websites"];
    // moved niches derivation inside component or useMemo, but since categories are static we can derive niches from props
    // Actually, let's derive niches from the passed projects prop to be truly dynamic
    const niches = ["All", ...Array.from(new Set(projects.filter(p => p.category === "Websites" && p.niche).map(p => p.niche as string)))];

    // State variables
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeNiche, setActiveNiche] = useState("All");
    const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    // Filter projects based on active selections
    const filteredProjects = projects.filter(p => {
        const categoryMatch = activeCategory === "All" || p.category === activeCategory;
        const nicheMatch = activeCategory !== "Websites" || activeNiche === "All" || p.niche === activeNiche;
        return categoryMatch && nicheMatch;
    });

    const openProject = (index: number) => {
        const project = filteredProjects[index];

        // Direct jump for websites
        if (project.externalLink) {
            window.open(project.externalLink, '_blank');
            return;
        }

        const trueIndex = projects.findIndex(p => p.id === project.id);
        setSelectedProjectIndex(trueIndex);
        setCurrentMediaIndex(0);
        document.body.style.overflow = "hidden";
    };

    const closeProject = () => {
        setSelectedProjectIndex(null);
        document.body.style.overflow = "auto";
    };

    const nextProject = () => {
        if (selectedProjectIndex === null) return;
        setSelectedProjectIndex((selectedProjectIndex + 1) % projects.length);
        setCurrentMediaIndex(0);
    };

    const prevProject = () => {
        if (selectedProjectIndex === null) return;
        setSelectedProjectIndex((selectedProjectIndex - 1 + projects.length) % projects.length);
        setCurrentMediaIndex(0);
    };

    const nextMedia = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedProjectIndex === null) return;
        const project = projects[selectedProjectIndex];
        setCurrentMediaIndex((currentMediaIndex + 1) % project.media.length);
    };

    const prevMedia = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedProjectIndex === null) return;
        const project = projects[selectedProjectIndex];
        setCurrentMediaIndex((currentMediaIndex - 1 + project.media.length) % project.media.length);
    };

    // Swipe handlers for mobile
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd || selectedProjectIndex === null) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        const project = projects[selectedProjectIndex];

        if (isLeftSwipe && project.media.length > 1) {
            setCurrentMediaIndex((currentMediaIndex + 1) % project.media.length);
        }
        if (isRightSwipe && project.media.length > 1) {
            setCurrentMediaIndex((currentMediaIndex - 1 + project.media.length) % project.media.length);
        }
    };

    return (
        <>
            <section className="max-w-7xl mx-auto py-24 px-6 w-full relative">
                <div className="flex flex-col items-center gap-8 mb-16">
                    <div className="flex flex-wrap gap-4 justify-center">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => {
                                    setActiveCategory(cat);
                                    setActiveNiche("All");
                                }}
                                className={cn(
                                    "px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500",
                                    activeCategory === cat
                                        ? "bg-white text-black shadow-xl shadow-white/10"
                                        : "bg-transparent text-neutral-500 border border-neutral-800 hover:border-neutral-600"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <AnimatePresence>
                        {activeCategory === "Websites" && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="flex flex-wrap gap-3 justify-center"
                            >
                                {niches.map((niche) => (
                                    <button
                                        key={niche}
                                        onClick={() => setActiveNiche(niche)}
                                        className={cn(
                                            "px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300",
                                            activeNiche === niche
                                                ? "bg-blue-600 text-white"
                                                : "bg-neutral-900 text-neutral-500 border border-white/5 hover:border-white/10"
                                        )}
                                    >
                                        {niche}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            layoutId={`project-${project.id}`}
                            onClick={() => openProject(index)}
                            className="group cursor-pointer flex flex-col gap-6"
                        >
                            <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-neutral-900 border border-neutral-800">
                                {project.media[0].type === 'video' ? (
                                    <video
                                        src={project.media[0].url}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                                    />
                                ) : (
                                    <Image
                                        src={project.media[0].url}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                                    />
                                )}
                                <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors" />
                            </div>
                            {project.desc && (
                                <div className="px-2">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-500">{project.category}</span>
                                        {project.niche && (
                                            <>
                                                <div className="w-1 h-1 rounded-full bg-neutral-800" />
                                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-500">{project.niche}</span>
                                            </>
                                        )}
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-2 italic tracking-tighter uppercase">{project.title}</h3>
                                    <p className="text-neutral-500 text-lg font-medium">{project.desc}</p>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Case Study Modal */}
            <AnimatePresence>
                {selectedProjectIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-3xl"
                        onClick={closeProject}
                    >
                        {/* Global Close Button */}
                        <button
                            onClick={closeProject}
                            className="fixed top-8 right-8 z-[120] p-4 text-white/40 hover:text-white transition-all hover:rotate-90 duration-300"
                        >
                            <X size={32} strokeWidth={1.5} />
                        </button>

                        {/* Fixed Project Navigation Arrows */}
                        <button
                            onClick={(e) => { e.stopPropagation(); prevProject(); }}
                            className="fixed left-4 md:left-10 top-1/2 -translate-y-1/2 z-[120] p-4 text-white/20 hover:text-white transition-all group hidden md:block"
                        >
                            <ChevronLeft size={80} strokeWidth={0.5} className="group-hover:scale-110 transition-transform" />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); nextProject(); }}
                            className="fixed right-4 md:right-10 top-1/2 -translate-y-1/2 z-[120] p-4 text-white/20 hover:text-white transition-all group hidden md:block"
                        >
                            <ChevronRight size={80} strokeWidth={0.5} className="group-hover:scale-110 transition-transform" />
                        </button>

                        {/* Centered 16:9 Media Container */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-6xl aspect-video mx-4 shadow-[0_0_100px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden border border-white/5 bg-black"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`${selectedProjectIndex}-${currentMediaIndex}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="w-full h-full flex items-center justify-center"
                                >
                                    {projects[selectedProjectIndex].media[currentMediaIndex].type === "video" ? (
                                        <video
                                            src={projects[selectedProjectIndex].media[currentMediaIndex].url}
                                            autoPlay
                                            loop
                                            playsInline
                                            controls
                                            className="w-full h-full object-contain"
                                        />
                                    ) : (
                                        <div className="relative w-full h-full px-4">
                                            <Image
                                                src={projects[selectedProjectIndex].media[currentMediaIndex].url}
                                                alt="project media"
                                                fill
                                                className="object-contain"
                                                priority
                                            />
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>

                            {/* Media Pagination (if project has multiple items) */}
                            {projects[selectedProjectIndex].media.length > 1 && (
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10 px-4 py-2 bg-black/20 backdrop-blur-md rounded-full">
                                    {projects[selectedProjectIndex].media.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={(e) => { e.stopPropagation(); setCurrentMediaIndex(i); }}
                                            className={cn(
                                                "h-1.5 transition-all duration-300 rounded-full",
                                                currentMediaIndex === i ? "w-8 bg-white" : "w-2 bg-white/20"
                                            )}
                                        />
                                    ))}
                                </div>
                            )}
                        </motion.div>

                        {/* Mobile Navigation Bar */}
                        <div className="fixed bottom-10 left-0 right-0 flex justify-between px-10 md:hidden z-[120]">
                            <button onClick={prevProject} className="p-4 text-white/50 bg-white/5 rounded-full backdrop-blur-lg border border-white/10"><ChevronLeft size={32} /></button>
                            <button onClick={nextProject} className="p-4 text-white/50 bg-white/5 rounded-full backdrop-blur-lg border border-white/10"><ChevronRight size={32} /></button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bottom CTA */}
            <section className="w-full py-32 bg-neutral-950 px-6 text-center border-t border-neutral-900 relative h-screen flex flex-col items-center justify-center">
                <h2 className="text-6xl md:text-9xl font-black mb-12 italic tracking-tighter text-white uppercase opacity-40">RESULTS</h2>
                <a
                    href="/contact"
                    className="inline-block px-16 py-6 bg-white text-black font-black rounded-full hover:scale-105 transition-all uppercase italic tracking-tighter text-xl"
                >
                    Start Your Project
                </a>
            </section>
        </>
    );
}
