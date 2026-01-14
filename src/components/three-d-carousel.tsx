"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { Monitor, Palette, Camera, Zap } from "lucide-react";

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
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isInteracting, setIsInteracting] = useState(false);
    const rotation = useMotionValue(0);
    const controls = useAnimation();
    const radius = 450; // Increased radius for a more circular feel
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const rotateTo = (index: number) => {
        const targetRotation = index * -90;
        controls.start({
            rotateY: targetRotation,
            transition: {
                type: "spring",
                stiffness: 40, // Softer spring for more "fluid" rotation
                damping: 15
            }
        });
        setCurrentIndex(index);
        rotation.set(targetRotation);
    };

    const handleNext = () => {
        rotateTo(currentIndex + 1);
        resetTimer();
    };

    const resetTimer = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        if (!isInteracting) {
            timerRef.current = setTimeout(() => {
                handleNext();
            }, 30000);
        }
    };

    useEffect(() => {
        resetTimer();
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [currentIndex, isInteracting]);

    const handleDragEnd = (_: any, info: any) => {
        setIsInteracting(false);
        const threshold = 50;
        if (info.offset.x > threshold) {
            rotateTo(currentIndex - 1);
        } else if (info.offset.x < -threshold) {
            rotateTo(currentIndex + 1);
        } else {
            rotateTo(currentIndex);
        }
    };

    return (
        <div className="w-full min-h-[900px] flex flex-col items-center justify-center bg-neutral-950 overflow-hidden relative py-20 grayscale-[0.5] hover:grayscale-0 transition-all duration-700">
            <div className="text-center mb-20 z-10 px-4">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Performative <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                        Creative Agency
                    </span>
                </h2>
                <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                    We position ourselves as a performative creative agency, working at the intersection of brand storytelling and data-driven growth.
                </p>
            </div>

            <div
                className="relative w-full h-[600px] flex items-center justify-center"
                style={{ perspective: "1200px" }} // Explicit perspective for depth
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.1}
                    onDragStart={() => setIsInteracting(true)}
                    onDragEnd={handleDragEnd}
                    animate={controls}
                    style={{
                        rotateY: rotation,
                        transformStyle: "preserve-3d",
                        width: 350,
                        height: 450,
                        cursor: isInteracting ? "grabbing" : "grab"
                    }}
                    className="relative"
                >
                    {CARDS.map((card, index) => {
                        const angle = (index * 360) / CARDS.length;
                        // Calculate relative angle to current rotation to adjust scale/opacity
                        const normalizedCurrentIndex = ((currentIndex % CARDS.length) + CARDS.length) % CARDS.length;
                        const isActive = normalizedCurrentIndex === index;

                        return (
                            <motion.div
                                key={index}
                                className="absolute top-0 left-0 w-full h-full"
                                initial={false}
                                animate={{
                                    scale: isActive ? 1.1 : 0.85,
                                    opacity: isActive ? 1 : 0.3,
                                    filter: isActive ? "blur(0px)" : "blur(4px)",
                                }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                                    transformStyle: "preserve-3d",
                                    backfaceVisibility: "hidden"
                                }}
                                onClick={() => {
                                    if (!isInteracting) rotateTo(currentIndex + 1);
                                }}
                            >
                                <ServiceCard card={card} index={index} isActive={isActive} />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>

            <div className="flex gap-4 mt-20 z-10">
                {CARDS.map((_, i) => {
                    const normalizedIndex = ((currentIndex % CARDS.length) + CARDS.length) % CARDS.length;
                    return (
                        <button
                            key={i}
                            onClick={() => rotateTo(i)}
                            className={`h-1.5 rounded-full transition-all duration-500 ${normalizedIndex === i ? "w-12 bg-white" : "w-2 bg-neutral-800"}`}
                        />
                    );
                })}
            </div>

            <p className="text-neutral-600 text-sm mt-8 animate-pulse font-mono tracking-widest uppercase">
                Drag to explore • Click to advance • 30s dwell
            </p>
        </div>
    );
}

function ServiceCard({ card, index, isActive }: { card: typeof CARDS[0], index: number, isActive: boolean }) {
    const Icon = card.icon;
    const colorClass =
        card.color === "blue" ? "text-blue-400 bg-blue-500/10 border-blue-500/20 hover:border-blue-500" :
            card.color === "purple" ? "text-purple-400 bg-purple-500/10 border-purple-500/20 hover:border-purple-500" :
                card.color === "emerald" ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20 hover:border-emerald-500" :
                    "text-pink-400 bg-pink-500/10 border-pink-500/20 hover:border-pink-500";

    const glowColor =
        card.color === "blue" ? "rgba(59, 130, 246, 0.4)" :
            card.color === "purple" ? "rgba(168, 85, 247, 0.4)" :
                card.color === "emerald" ? "rgba(16, 185, 129, 0.4)" :
                    "rgba(236, 72, 153, 0.4)";

    return (
        <div
            className={`w-full h-full bg-neutral-900/95 backdrop-blur-xl rounded-2xl p-8 border transition-all duration-700 shadow-2xl flex flex-col justify-between ${isActive ? 'border-white/20' : 'border-neutral-800'}`}
            style={{
                boxShadow: isActive ? `0 20px 50px ${glowColor}` : 'none',
            }}
        >
            <div>
                <div className={`h-14 w-14 rounded-full flex items-center justify-center mb-6 ${colorClass} border shadow-inner`}>
                    <Icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                <p className={`text-sm font-medium mb-4 ${card.color === 'blue' ? 'text-blue-300' : card.color === 'purple' ? 'text-purple-300' : card.color === 'emerald' ? 'text-emerald-300' : 'text-pink-300'}`}>{card.subtitle}</p>
                <p className="text-neutral-400 mb-6 leading-relaxed">
                    {card.desc}
                </p>
                <ul className="space-y-3">
                    {card.list.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-neutral-300 text-sm font-light">
                            <div className={`w-1.5 h-1.5 rounded-full ${card.color === 'blue' ? 'bg-blue-400' : card.color === 'purple' ? 'bg-purple-400' : card.color === 'emerald' ? 'bg-emerald-400' : 'bg-pink-400'}`} />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="pt-4 border-t border-neutral-800/50 mt-4 flex justify-between items-center">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">0{String(CARDS.indexOf(card) + 1)} / SERVICE</span>
                {isActive && (
                    <div className="flex gap-1">
                        <div className="w-1 h-1 rounded-full bg-white/40 animate-pulse" />
                        <div className="w-1 h-1 rounded-full bg-white/40 animate-pulse delay-75" />
                        <div className="w-1 h-1 rounded-full bg-white/40 animate-pulse delay-150" />
                    </div>
                )}
            </div>
        </div>
    );
}
