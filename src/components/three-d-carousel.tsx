"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { Monitor, Palette, Camera, Zap } from "lucide-react";

const CARDS = [
    {
        title: "Visual Identity",
        subtitle: "How your brand looks & feels",
        desc: "Crafting a distinctive aesthetic that resonates with your audience and builds lasting recognition.",
        icon: Palette,
        color: "coral",
        list: ["Logo Design", "Graphic Design", "Packaging Design"],
    },
    {
        title: "Content & Production",
        subtitle: "What your audience sees",
        desc: "High-end visual assets that tell your story across all platforms with cinematic precision.",
        icon: Camera,
        color: "coral-light",
        list: ["Video Editing (Short-form & Long-form)"],
    },
    {
        title: "Digital Experience",
        subtitle: "How your brand lives online",
        desc: "Building seamless, high-performance web ecosystems that convert visitors into loyal advocates.",
        icon: Monitor,
        color: "teal",
        list: ["Website Design & Development", "UI/UX Design", "AI Automation Integration"],
    },
    {
        title: "Growth & Performance",
        subtitle: "How your brand scales",
        desc: "Precision Ads and organic strategies to dominate your niche and turn attention into measurable revenue.",
        icon: Zap,
        color: "teal-light",
        list: [
            "Meta Ads (FB/IG)",
            "Google Ads (Search/Display)",
            "Organic Growth Strategy",
            "Advanced Analytics & Tracking",
        ],
    },
];

export function ThreeDCarousel() {
    const [isPaused, setIsPaused] = useState(false);
    const rotation = useMotionValue(0);
    const controls = useAnimation();
    const radius = 350;

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

    return (
        <div className="w-full min-h-[800px] flex flex-col items-center justify-center bg-[#111] overflow-hidden relative">
            <div className="text-center mb-20 z-10 px-4">
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-[#f5f5f5] mb-6">
                    Engineered for{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d7377] to-[#14a085]">
                        Growth
                    </span>
                </h2>
                <p className="text-[#a0a0a0] max-w-2xl mx-auto text-lg leading-relaxed">
                    We don't just build websites; we build growth engines. Every pixel and every line of code is designed to synergize with precision marketing to scale your revenue.
                </p>
            </div>

            <div className="relative w-full h-[600px] flex items-center justify-center perspective-1000">
                <motion.div
                    animate={controls}
                    onUpdate={handleUpdate}
                    className="relative w-[300px] h-[480px] preserve-3d"
                    style={{
                        transformStyle: "preserve-3d",
                    }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {CARDS.map((card, index) => {
                        const angle = (index * 360) / CARDS.length;
                        return (
                            <div
                                key={index}
                                className="absolute top-0 left-0 w-full h-full"
                                style={{
                                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                                }}
                            >
                                <ServiceCard card={card} />
                            </div>
                        );
                    })}
                </motion.div>
            </div>

            {/* Mobile Disclaimer */}
            <p className="md:hidden text-[#525252] text-sm mt-8 animate-pulse">Swipe or tap to pause</p>
        </div>
    );
}

function ServiceCard({ card }: { card: typeof CARDS[0] }) {
    const Icon = card.icon;
    
    // Color mapping for Teal + Coral palette
    const colorClasses = {
        teal: {
            text: "text-[#0d7377]",
            bg: "bg-[#0d7377]/10",
            border: "border-[#0d7377]/20 hover:border-[#0d7377]",
            subtitle: "text-[#14a085]",
            dot: "bg-[#0d7377]",
            shadow: "hover:shadow-[#0d7377]/20"
        },
        "teal-light": {
            text: "text-[#14a085]",
            bg: "bg-[#14a085]/10",
            border: "border-[#14a085]/20 hover:border-[#14a085]",
            subtitle: "text-[#0d7377]",
            dot: "bg-[#14a085]",
            shadow: "hover:shadow-[#14a085]/20"
        },
        coral: {
            text: "text-[#ff6b6b]",
            bg: "bg-[#ff6b6b]/10",
            border: "border-[#ff6b6b]/20 hover:border-[#ff6b6b]",
            subtitle: "text-[#ff8e8e]",
            dot: "bg-[#ff6b6b]",
            shadow: "hover:shadow-[#ff6b6b]/20"
        },
        "coral-light": {
            text: "text-[#ff8e8e]",
            bg: "bg-[#ff8e8e]/10",
            border: "border-[#ff8e8e]/20 hover:border-[#ff8e8e]",
            subtitle: "text-[#ff6b6b]",
            dot: "bg-[#ff8e8e]",
            shadow: "hover:shadow-[#ff8e8e]/20"
        }
    };

    const colors = colorClasses[card.color as keyof typeof colorClasses];

    return (
        <div className={`w-full h-full bg-[#1a1a1a] rounded-2xl p-8 border border-[#2a2a2a] transition-all duration-300 shadow-2xl flex flex-col justify-between ${colors.shadow}`}>
            <div>
                <div className={`h-14 w-14 rounded-full flex items-center justify-center mb-6 ${colors.text} ${colors.bg} ${colors.border} border`}>
                    <Icon size={28} />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#f5f5f5] mb-2">{card.title}</h3>
                <p className={`text-sm font-medium mb-4 ${colors.subtitle}`}>{card.subtitle}</p>
                <p className="text-[#a0a0a0] mb-6 leading-relaxed">
                    {card.desc}
                </p>
                <ul className="space-y-3">
                    {card.list.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-[#a0a0a0] text-sm">
                            <div className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="pt-4 border-t border-[#2a2a2a]/50 mt-4">
                <span className="text-xs font-mono text-[#525252] tracking-widest">0{String(CARDS.indexOf(card) + 1)} / Service</span>
            </div>
        </div>
    );
}
