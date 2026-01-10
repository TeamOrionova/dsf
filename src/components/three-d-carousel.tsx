"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { Monitor, Palette, Camera } from "lucide-react";

const CARDS = [
    {
        title: "Performance & Tech",
        subtitle: "\"The Where & How Much\"",
        desc: "Focused on platforms, distribution, and measurable growth.",
        icon: Monitor,
        color: "blue",
        list: ["Website Development", "SEO & Analytics", "Business & Finance Niches"],
    },
    {
        title: "Brand & Identity",
        subtitle: "\"The Who & Why\"",
        desc: "Shaping narratives, identity, and brand voice.",
        icon: Palette,
        color: "purple",
        list: ["Graphic Design", "Social Media Mgmt", "Education Niches"],
    },
    {
        title: "Visual Storytelling",
        subtitle: "Creativity meets Performance",
        desc: "High-end production for entertainment and media.",
        icon: Camera,
        color: "pink",
        list: ["Video Editing", "Photography", "Entertainment Niches"],
    },
];

export function ThreeDCarousel() {
    const [isPaused, setIsPaused] = useState(false);
    const rotation = useMotionValue(0);
    const controls = useAnimation();
    const radius = 300; // Radius of the merry-go-round

    useEffect(() => {
        if (!isPaused) {
            controls.start({
                rotateY: [rotation.get(), rotation.get() - 360],
                transition: {
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                },
            });
        } else {
            controls.stop();
            rotation.set(rotation.get()); // Maintain current rotation
        }
    }, [isPaused, controls, rotation]);

    // Handle rotation updates to sync motion value
    const handleUpdate = (latest: any) => {
        if (latest.rotateY) {
            rotation.set(typeof latest.rotateY === 'number' ? latest.rotateY : parseFloat(latest.rotateY as string));
        }
    }


    return (
        <div className="w-full min-h-[800px] flex flex-col items-center justify-center bg-neutral-950 overflow-hidden relative">
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

            <div className="relative w-full h-[500px] flex items-center justify-center perspective-1000">
                <motion.div
                    animate={controls}
                    onUpdate={handleUpdate}
                    className="relative w-[300px] h-[400px] preserve-3d"
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
            <p className="md:hidden text-neutral-600 text-sm mt-8 animate-pulse">Swipe or Tap to pause</p>
        </div>
    );
}

function ServiceCard({ card }: { card: typeof CARDS[0] }) {
    const Icon = card.icon;
    const colorClass =
        card.color === "blue" ? "text-blue-400 bg-blue-500/10 border-blue-500/20 hover:border-blue-500" :
            card.color === "purple" ? "text-purple-400 bg-purple-500/10 border-purple-500/20 hover:border-purple-500" :
                "text-pink-400 bg-pink-500/10 border-pink-500/20 hover:border-pink-500";

    return (
        <div className={`w-full h-full bg-neutral-900/90 backdrop-blur-md rounded-2xl p-8 border border-neutral-800 transition-all duration-300 shadow-2xl flex flex-col justify-between ${card.color === "blue" ? "hover:shadow-blue-900/20" : card.color === "purple" ? "hover:shadow-purple-900/20" : "hover:shadow-pink-900/20"}`}>
            <div>
                <div className={`h-14 w-14 rounded-full flex items-center justify-center mb-6 ${colorClass} border`}>
                    <Icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                <p className={`text-sm font-medium mb-4 ${card.color === 'blue' ? 'text-blue-300' : card.color === 'purple' ? 'text-purple-300' : 'text-pink-300'}`}>{card.subtitle}</p>
                <p className="text-neutral-400 mb-6 leading-relaxed">
                    {card.desc}
                </p>
                <ul className="space-y-3">
                    {card.list.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-neutral-300 text-sm">
                            <div className={`w-1.5 h-1.5 rounded-full ${card.color === 'blue' ? 'bg-blue-400' : card.color === 'purple' ? 'bg-purple-400' : 'bg-pink-400'}`} />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="pt-4 border-t border-neutral-800/50 mt-4">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">0{String(CARDS.indexOf(card) + 1)} / SERVICE</span>
            </div>
        </div>
    );
}
