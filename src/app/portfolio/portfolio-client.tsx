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
        <main className="flex min-h-screen flex-col items-center bg-neutral-950">
            <section className="w-full relative h-[50vh] flex items-center justify-center overflow-hidden border-b border-neutral-900">
                <BackgroundPaths title="Selected Works" />
            </section>

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
                                <Image
                                    src={project.media[0].type === 'video' ? 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop' : project.media[0].url}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors" />
                            </div>
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
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl"
                        onClick={closeProject}
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-6xl h-full max-h-[85vh] bg-neutral-900/50 rounded-[2.5rem] border border-white/10 overflow-hidden flex flex-col md:flex-row shadow-2xl"
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeProject}
                                className="absolute top-6 right-6 z-50 p-3 bg-black/40 hover:bg-white hover:text-black rounded-full backdrop-blur-md transition-all border border-white/10"
                            >
                                <X size={20} />
                            </button>

                            {/* Media Section (Fixed AR) */}
                            <div
                                className="relative flex-1 min-h-[50vh] md:min-h-0 bg-black overflow-hidden group/media"
                                onTouchStart={onTouchStart}
                                onTouchMove={onTouchMove}
                                onTouchEnd={onTouchEnd}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={`${selectedProjectIndex}-${currentMediaIndex}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-full h-full"
                                    >
                                        {projects[selectedProjectIndex].media[currentMediaIndex].type === "video" ? (
                                            <video
                                                src={projects[selectedProjectIndex].media[currentMediaIndex].url}
                                                autoPlay loop muted playsInline
                                                className="w-full h-full object-contain"
                                            />
                                        ) : (
                                            <Image
                                                src={projects[selectedProjectIndex].media[currentMediaIndex].url}
                                                alt="project media"
                                                fill
                                                className="object-contain"
                                            />
                                        )}
                                    </motion.div>
                                </AnimatePresence>

                                {/* Media Gallery Navigation (Internal) */}
                                {projects[selectedProjectIndex].media.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevMedia}
                                            className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-black/20 hover:bg-black/60 rounded-full backdrop-blur-md border border-white/5 opacity-100 md:opacity-0 md:group-hover/media:opacity-100 transition-all z-10"
                                        >
                                            <ChevronLeft size={24} />
                                        </button>
                                        <button
                                            onClick={nextMedia}
                                            className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-black/20 hover:bg-black/60 rounded-full backdrop-blur-md border border-white/5 opacity-100 md:opacity-0 md:group-hover/media:opacity-100 transition-all z-10"
                                        >
                                            <ChevronRight size={24} />
                                        </button>

                                        {/* Pagination indicator */}
                                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                                            {projects[selectedProjectIndex].media.map((_, i) => (
                                                <div
                                                    key={i}
                                                    className={cn(
                                                        "h-1 transition-all duration-300 rounded-full",
                                                        currentMediaIndex === i ? "w-8 bg-white" : "w-2 bg-white/20"
                                                    )}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Info Sidebar Section */}
                            <div className="w-full md:w-[400px] border-l border-white/10 p-10 flex flex-col justify-between bg-neutral-900/80 backdrop-blur-xl overflow-y-auto md:overflow-y-visible">
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-8 block">Case Study</span>
                                    <h2 className="text-4xl font-bold text-white mb-6 italic tracking-tighter uppercase leading-none">
                                        {projects[selectedProjectIndex].title}
                                    </h2>
                                    <p className="text-neutral-400 font-medium mb-8 leading-relaxed">
                                        {projects[selectedProjectIndex].details}
                                    </p>

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center py-4 border-b border-white/5">
                                            <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Category</span>
                                            <span className="text-xs font-bold text-white">{projects[selectedProjectIndex].category}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-4 border-b border-white/5">
                                            <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Agency Role</span>
                                            <span className="text-xs font-bold text-white uppercase italic">Execution</span>
                                        </div>
                                    </div>
                                </div>

                                {/* External Project Navigation */}
                                <div className="mt-12 space-y-3">
                                    <button
                                        onClick={prevProject}
                                        className="w-full flex items-center justify-between p-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 group transition-all"
                                    >
                                        <div className="flex items-center gap-3">
                                            <ArrowLeft size={16} className="text-neutral-500 group-hover:text-white transition-colors" />
                                            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 group-hover:text-white">Previous</span>
                                        </div>
                                    </button>
                                    <button
                                        onClick={nextProject}
                                        className="w-full flex items-center justify-between p-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 group transition-all"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 group-hover:text-white">Next Project</span>
                                            <ArrowRight size={16} className="text-neutral-500 group-hover:text-white transition-colors" />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
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
        </main>
    );
}
