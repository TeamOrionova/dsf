"use client";
import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import { Project } from "@/lib/portfolio-scanner";

export default function PortfolioClient({ projects }: { projects: Project[] }) {
    const categories = ["All", "Websites"];
    const niches = ["All", ...Array.from(new Set(projects.filter(p => p.category === "Websites" && p.niche).map(p => p.niche as string)))];

    const [activeCategory, setActiveCategory] = useState("All");
    const [activeNiche, setActiveNiche] = useState("All");
    const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const filteredProjects = projects.filter(p => {
        const categoryMatch = activeCategory === "All" || p.category === activeCategory;
        const nicheMatch = activeCategory !== "Websites" || activeNiche === "All" || p.niche === activeNiche;
        return categoryMatch && nicheMatch;
    });

    const openProject = (index: number) => {
        const project = filteredProjects[index];

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
                                    "px-8 py-3 rounded-full text-xs font-bold tracking-wider transition-all duration-300",
                                    activeCategory === cat
                                        ? "bg-[#0d7377] text-white"
                                        : "bg-transparent text-[#737373] border border-[#2a2a2a] hover:border-[#404040]"
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
                                            "px-5 py-2 rounded-full text-[10px] font-bold tracking-widest transition-all duration-300",
                                            activeNiche === niche
                                                ? "bg-[#0d7377] text-white"
                                                : "bg-[#1a1a1a] text-[#737373] border border-[#2a2a2a] hover:border-[#404040]"
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
                            <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#1a1a1a] border border-[#2a2a2a]">
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
                                <div className="absolute inset-0 bg-[#111]/20 group-hover:bg-transparent transition-colors" />
                            </div>
                            {project.desc && (
                                <div className="px-2">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-[10px] tracking-widest font-bold text-[#737373]">{project.category}</span>
                                        {project.niche && (
                                            <>
                                                <div className="w-1 h-1 rounded-full bg-[#2a2a2a]" />
                                                <span className="text-[10px] tracking-widest font-bold text-[#0d7377]">{project.niche}</span>
                                            </>
                                        )}
                                    </div>
                                    <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[#f5f5f5] mb-2">{project.title}</h3>
                                    <p className="text-[#a0a0a0] text-lg">{project.desc}</p>
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
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
                        onClick={closeProject}
                    >
                        {/* Global Close Button */}
                        <button
                            onClick={closeProject}
                            className="fixed top-8 right-8 z-[120] p-4 text-[#737373] hover:text-[#f5f5f5] transition-all hover:rotate-90 duration-300"
                        >
                            <X size={32} strokeWidth={1.5} />
                        </button>

                        {/* Fixed Project Navigation Arrows */}
                        <button
                            onClick={(e) => { e.stopPropagation(); prevProject(); }}
                            className="fixed left-4 md:left-10 top-1/2 -translate-y-1/2 z-[120] p-4 text-[#525252] hover:text-[#f5f5f5] transition-all group hidden md:block"
                        >
                            <ChevronLeft size={80} strokeWidth={0.5} className="group-hover:scale-110 transition-transform" />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); nextProject(); }}
                            className="fixed right-4 md:right-10 top-1/2 -translate-y-1/2 z-[120] p-4 text-[#525252] hover:text-[#f5f5f5] transition-all group hidden md:block"
                        >
                            <ChevronRight size={80} strokeWidth={0.5} className="group-hover:scale-110 transition-transform" />
                        </button>

                        {/* Centered Media Container */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full md:max-w-6xl h-auto max-h-[85vh] md:aspect-video mx-auto md:px-0 md:rounded-2xl overflow-hidden border-y md:border border-[#2a2a2a] bg-[#0a0a0a]"
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
                                            className="w-full h-full object-cover md:object-contain"
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

                            {/* Media Pagination */}
                            {projects[selectedProjectIndex].media.length > 1 && (
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10 px-4 py-2 bg-[#111]/50 rounded-full">
                                    {projects[selectedProjectIndex].media.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={(e) => { e.stopPropagation(); setCurrentMediaIndex(i); }}
                                            className={cn(
                                                "h-1.5 transition-all duration-300 rounded-full",
                                                currentMediaIndex === i ? "w-8 bg-[#0d7377]" : "w-2 bg-[#525252]"
                                            )}
                                        />
                                    ))}
                                </div>
                            )}
                        </motion.div>

                        {/* Mobile Navigation Bar */}
                        <div className="fixed bottom-10 left-0 right-0 flex justify-between px-10 md:hidden z-[120]">
                            <button onClick={prevProject} className="p-4 text-[#737373] bg-[#1a1a1a] rounded-full border border-[#2a2a2a]"><ChevronLeft size={32} /></button>
                            <button onClick={nextProject} className="p-4 text-[#737373] bg-[#1a1a1a] rounded-full border border-[#2a2a2a]"><ChevronRight size={32} /></button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bottom CTA */}
            <section className="w-full py-32 bg-[#0a0a0a] px-6 text-center border-t border-[#1a1a1a] relative h-screen flex flex-col items-center justify-center">
                <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-9xl mb-12 text-[#f5f5f5] opacity-20">Results</h2>
                <a
                    href="/contact"
                    className="inline-block px-12 py-5 bg-[#0d7377] text-white font-semibold rounded-full hover:bg-[#14a085] transition-colors text-lg"
                >
                    Start Your Project
                </a>
            </section>
        </>
    );
}
