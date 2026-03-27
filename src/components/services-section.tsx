"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Monitor, TrendingUp, Target, ArrowUpRight } from "lucide-react";

export function ServicesSection() {
    return (
        <div className="flex flex-col overflow-hidden bg-neutral-950">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-white">
                            Performance-Driven <br />
                            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                                Growth Agency
                            </span>
                        </h1>
                        <p className="mt-8 text-neutral-400 max-w-2xl mx-auto text-lg text-center">
                            We build end-to-end digital sales machines, combining high-speed infrastructure with aggressive client acquisition strategies.
                        </p>
                    </>
                }
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full p-4">
                    {/* Card 1: Tech & Infrastructure */}
                    <div className="h-full bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between group hover:border-blue-500/50 transition-colors">
                        <div>
                            <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400">
                                <Monitor size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">High-Speed Tech</h3>
                            <p className="text-sm text-neutral-400 mb-4">"The Infrastructure"</p>
                            <p className="text-sm text-neutral-500">
                                Ultra-fast digital bases optimized for search and speed.
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
                                <li className="flex items-center gap-2">• Next.js Ecosystems</li>
                                <li className="flex items-center gap-2">• Performance Hosting</li>
                                <li className="flex items-center gap-2">• API & CRM Integrations</li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 2: Conversion & Analytics */}
                    <div className="h-full bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between group hover:border-purple-500/50 transition-colors">
                        <div>
                            <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 text-purple-400">
                                <TrendingUp size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Conversion Stack</h3>
                            <p className="text-sm text-neutral-400 mb-4">"The Psychology"</p>
                            <p className="text-sm text-neutral-500">
                                Data-driven UI/UX designed to guide users to the "Buy" button.
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
                                <li className="flex items-center gap-2">• Conversion Optimization</li>
                                <li className="flex items-center gap-2">• User Journey Mapping</li>
                                <li className="flex items-center gap-2">• Data & Heatmap Analysis</li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 3: Growth & Lead Gen */}
                    <div className="h-full bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between group hover:border-pink-500/50 transition-colors">
                        <div>
                            <div className="h-12 w-12 rounded-full bg-pink-500/10 flex items-center justify-center mb-4 text-pink-400">
                                <Target size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Lead Generation</h3>
                            <p className="text-sm text-neutral-400 mb-4">"The Revenue"</p>
                            <p className="text-sm text-neutral-500">
                                Aggressive client acquisition through precision marketing.
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
                                <li className="flex items-center gap-2">• Meta & Google Ads</li>
                                <li className="flex items-center gap-2">• Automated Funnels</li>
                                <li className="flex items-center gap-2">• B2B Lead Pipelines</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </ContainerScroll>
        </div>
    );
}
