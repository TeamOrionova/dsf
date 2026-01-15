"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { Monitor, Palette, Camera, Zap } from "lucide-react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";

const FALLBACK_MEDIA = {
    "Visual Identity": { url: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop", type: "image" },
    "Content & Production": { url: "https://ui.aceternity.com/video-sample.mp4", type: "video" },
    "Digital Experience": { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", type: "image" },
    "Growth & Performance": { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", type: "image" },
};

const CARDS = [
    {
        title: "Visual Identity",
        subtitle: "The Soul of Your Brand",
        desc: "Crafting a distinctive aesthetic that resonates with your audience and builds lasting recognition.",
        icon: Palette,
        color: "purple",
        list: ["Logo Design", "Graphic Design", "Packaging Design"],
    },
    {
        title: "Content & Production",
        subtitle: "Stories That Captivate",
        desc: "High-end visual assets that tell your story across all platforms with cinematic precision.",
        icon: Camera,
        color: "pink",
        list: ["Video Editing (Short & Long)", "Videography", "Photography"],
    },
    {
        title: "Digital Experience",
        subtitle: "Your Brand's Digital Home",
        desc: "Building seamless, high-performance web ecosystems that convert visitors into loyal advocates.",
        icon: Monitor,
        color: "blue",
        list: ["Website Design & Development", "UI/UX Design", "AI Automation Integration"],
    },
    {
        title: "Growth & Performance",
        subtitle: "Scaling Without Limits",
        desc: "Strategic distribution and data-driven marketing to amplify your reach and dominate your niche.",
        icon: Zap,
        color: "emerald",
        list: ["Social Media Marketing & Mgmt", "Meta Ads", "SEO & Analytics"],
    },
];

export function ThreeDCarousel() {
    const [isPaused, setIsPaused] = useState(false);
    const [dynamicCards, setDynamicCards] = useState<any[]>([]);
    const rotation = useMotionValue(0);
    const controls = useAnimation();
    const radius = 350;

    useEffect(() => {
        async function fetchProjectMedia() {
            try {
                const { data: projects, error } = await supabase
                    .from('projects')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) throw error;

                const updatedCards = CARDS.map(card => {
                    const matchedProject = projects?.find(p =>
                        p.category?.toLowerCase() === card.title.toLowerCase() ||
                        p.title?.toLowerCase().includes(card.title.toLowerCase())
                    );

                    return {
                        ...card,
                        media_url: matchedProject?.media_url || (FALLBACK_MEDIA as any)[card.title].url,
                        media_type: matchedProject?.media_type || (FALLBACK_MEDIA as any)[card.title].type,
                        poster: matchedProject?.poster_url
                    };
                });
                setDynamicCards(updatedCards);
            } catch (err) {
                console.error("Error fetching projects:", err);
                setDynamicCards(CARDS.map(card => ({
                    ...card,
                    media_url: (FALLBACK_MEDIA as any)[card.title].url,
                    media_type: (FALLBACK_MEDIA as any)[card.title].type,
                })));
            }
        }

        fetchProjectMedia();
    }, []);

    useEffect(() => {
        if (!isPaused) {
            controls.start({
                rotateY: [rotation.get(), rotation.get() - 360],
                transition: {
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                },
            });
        } else {
            controls.stop();
            rotation.set(rotation.get());
        }
    }, [isPaused, controls, rotation]);

    const handleUpdate = (latest: any) => {
        if (latest.rotateY) {
            rotation.set(typeof latest.rotateY === 'number' ? latest.rotateY : parseFloat(latest.rotateY as string));
        }
    }

    if (dynamicCards.length === 0) return null;

    return (
        <div className="w-full min-h-[900px] flex flex-col items-center justify-center bg-neutral-950 overflow-hidden relative py-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />

            <div className="text-center mb-24 z-10 px-4">
                <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 italic tracking-tighter">
                    Selected <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                        Works in Motion
                    </span>
                </h2>
                <p className="text-neutral-500 max-w-2xl mx-auto text-lg md:text-xl font-medium">
                    Hover to pause the orbit. Each card represents a pillar of our creative output, pulled directly from our project database.
                </p>
            </div>

            <div className="relative w-full h-[600px] flex items-center justify-center perspective-2000">
                <motion.div
                    animate={controls}
                    onUpdate={handleUpdate}
                    className="relative w-[340px] h-[480px] preserve-3d"
                    style={{
                        transformStyle: "preserve-3d",
                    }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {dynamicCards.map((card, index) => {
                        const angle = (index * 360) / dynamicCards.length;
                        return (
                            <div
                                key={index}
                                className="absolute top-0 left-0 w-full h-full"
                                style={{
                                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                                }}
                            >
                                <ServiceCard card={card} index={index} />
                            </div>
                        );
                    })}
                </motion.div>
            </div>

            <p className="md:hidden text-neutral-600 text-sm mt-8 animate-pulse text-center">Drag or Tap to stop the spin</p>
        </div>
    );
}

function ServiceCard({ card, index }: { card: any, index: number }) {
    const Icon = card.icon;
    const colorClass =
        card.color === "blue" ? "text-blue-400 bg-blue-500/20 border-blue-500/50" :
            card.color === "purple" ? "text-purple-400 bg-purple-500/20 border-purple-500/50" :
                card.color === "emerald" ? "text-emerald-400 bg-emerald-500/20 border-emerald-500/50" :
                    "text-pink-400 bg-pink-500/20 border-pink-500/50";

    return (
        <div className="w-full h-full relative group">
            {/* Background Image/Video */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl transition-all duration-700 group-hover:scale-[1.02] group-hover:border-white/20">
                {card.media_type === "video" ? (
                    <video
                        src={card.media_url}
                        poster={card.poster}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000"
                    />
                ) : (
                    <Image
                        src={card.media_url}
                        alt={card.title}
                        fill
                        className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
            </div>

            {/* Content Content */}
            <div className="relative h-full p-8 flex flex-col justify-between z-10">
                <div>
                    <div className={`h-16 w-16 rounded-2xl flex items-center justify-center mb-8 ${colorClass} border backdrop-blur-xl shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                        <Icon size={32} />
                    </div>
                    <h3 className="text-3xl font-black text-white mb-2 italic tracking-tighter uppercase">{card.title}</h3>
                    <p className={`text-sm font-bold mb-6 tracking-widest uppercase opacity-70 ${card.color === 'blue' ? 'text-blue-300' : card.color === 'purple' ? 'text-purple-300' : card.color === 'emerald' ? 'text-emerald-300' : 'text-pink-300'}`}>
                        {card.subtitle}
                    </p>
                    <p className="text-neutral-400 mb-8 leading-relaxed text-lg font-medium">
                        {card.desc}
                    </p>
                    <ul className="space-y-4">
                        {card.list.map((item: string, i: number) => (
                            <li key={i} className="flex items-center gap-4 text-neutral-100 text-sm font-bold italic tracking-tight">
                                <div className={`w-2 h-2 rounded-full ${card.color === 'blue' ? 'bg-blue-400' : card.color === 'purple' ? 'bg-purple-400' : card.color === 'emerald' ? 'bg-emerald-400' : 'bg-pink-400'} shadow-[0_0_10px_rgba(255,255,255,0.5)]`} />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="pt-6 border-t border-white/5 mt-4 flex items-center justify-between">
                    <span className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.3em]">0{index + 1} / CASE STUDY</span>
                    <div className="h-1 w-12 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="h-full w-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
