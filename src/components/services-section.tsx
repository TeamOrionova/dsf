"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Monitor, Palette, Camera, ArrowUpRight } from "lucide-react";

export function ServicesSection() {
    return (
        <div className="flex flex-col overflow-hidden bg-neutral-950">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-white">
                            Performative <br />
                            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                                Creative Agency
                            </span>
                        </h1>
                        <p className="mt-8 text-neutral-400 max-w-2xl mx-auto text-lg text-center">
                            We position ourselves as a performative creative agency, working at the intersection of brand storytelling and data-driven growth.
                        </p>
                    </>
                }
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full p-4">
                    {/* Card 1: Tech & Performance */}
                    <div className="h-full bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between group hover:border-blue-500/50 transition-colors">
                        <div>
                            <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400">
                                <Monitor size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Performance & Tech</h3>
                            <p className="text-sm text-neutral-400 mb-4">"The Where & How Much"</p>
                            <p className="text-sm text-neutral-500">
                                Focused on platforms, distribution, and measurable growth.
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
                                <li className="flex items-center gap-2">• Website Development</li>
                                <li className="flex items-center gap-2">• SEO & Analytics</li>
                                <li className="flex items-center gap-2">• Business & Finance Niches</li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 2: Brand & Identity */}
                    <div className="h-full bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between group hover:border-purple-500/50 transition-colors">
                        <div>
                            <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 text-purple-400">
                                <Palette size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Brand & Identity</h3>
                            <p className="text-sm text-neutral-400 mb-4">"The Who & Why"</p>
                            <p className="text-sm text-neutral-500">
                                Shaping narratives, identity, and brand voice.
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
                                <li className="flex items-center gap-2">• Graphic Design</li>
                                <li className="flex items-center gap-2">• Social Media Mgmt</li>
                                <li className="flex items-center gap-2">• Education Niches</li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 3: Visual Storytelling */}
                    <div className="h-full bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between group hover:border-pink-500/50 transition-colors">
                        <div>
                            <div className="h-12 w-12 rounded-full bg-pink-500/10 flex items-center justify-center mb-4 text-pink-400">
                                <Camera size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Visual Storytelling</h3>
                            <p className="text-sm text-neutral-400 mb-4">Creativity meets Performance</p>
                            <p className="text-sm text-neutral-500">
                                High-end production for entertainment and media.
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
                                <li className="flex items-center gap-2">• Video Editing</li>
                                <li className="flex items-center gap-2">• Photography</li>
                                <li className="flex items-center gap-2">• Entertainment Niches</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </ContainerScroll>
        </div>
    );
}
