"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Mail, User, Briefcase, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function LeadPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const handleScroll = () => {
            const hasSeenPopup = sessionStorage.getItem("hasSeenLeadPopup");

            // If they've already seen it or it's currently showing, do nothing
            if (hasSeenPopup === "true" || isVisible) return;

            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;

            if (docHeight <= 0) return;

            const scrollPercent = (scrollTop / docHeight) * 100;

            // Triggering slightly earlier (25%) to ensure it's seen
            if (scrollPercent > 25) {
                console.log("Triggering Lead Popup at:", scrollPercent.toFixed(2) + "%");
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [mounted, isVisible]);

    useEffect(() => {
        if (!mounted) return;

        // Handle scroll locking on mobile when visible
        if (isVisible && !isSubmitted && window.innerWidth < 768) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [mounted, isVisible, isSubmitted]);

    if (!mounted) return null;

    const closePopup = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsVisible(false);
            sessionStorage.setItem("hasSeenLeadPopup", "true");
        }, 3000); // Allow some lingering or just close
        setIsVisible(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const data = {
            source: "Lead Popup",
            name: formData.get("name"),
            email: formData.get("email"),
            website: formData.get("website"),
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setIsSubmitted(true);
                sessionStorage.setItem("hasSeenLeadPopup", "true");
                setTimeout(() => setIsVisible(false), 3000);
            }
        } catch (error) {
            console.error("Submission error:", error);
            // Fallback: still show submitted so user doesn't get stuck
            setIsSubmitted(true);
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closePopup}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-[500px] bg-neutral-950 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,1)]"
                    >
                        {/* Glow Effect */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-sm" />

                        {/* Close Button */}
                        <button
                            onClick={closePopup}
                            className="absolute top-6 right-6 text-neutral-500 hover:text-white transition-colors z-10"
                        >
                            <X size={24} />
                        </button>

                        <div className="p-8 md:p-12">
                            {!isSubmitted ? (
                                <>
                                    <div className="mb-8">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase tracking-widest font-bold mb-4">
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                            </span>
                                            Limited Strategy Slots
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter uppercase mb-4 leading-tight">
                                            Get Your Growth <br />
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Audit for Free</span>
                                        </h2>
                                        <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                                            Stop guessing. Let us analyze your current funnel and show you exactly where you're losing revenue.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="relative group">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                placeholder="Full Name"
                                                className="w-full bg-neutral-900/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-blue-500/50 transition-all"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                placeholder="Work Email"
                                                className="w-full bg-neutral-900/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-blue-500/50 transition-all"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                                            <input
                                                required
                                                type="text"
                                                name="website"
                                                placeholder="Company Website"
                                                className="w-full bg-neutral-900/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-blue-500/50 transition-all"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-white text-black font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all mt-6"
                                        >
                                            Secure My Audit
                                            <ChevronRight size={18} />
                                        </button>

                                        <p className="text-[10px] text-neutral-600 text-center uppercase tracking-widest font-bold">
                                            No Spam. Just high-density growth data.
                                        </p>
                                    </form>
                                </>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-12 text-center"
                                >
                                    <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-500 border border-blue-500/20">
                                        <Send size={32} />
                                    </div>
                                    <h2 className="text-3xl font-bold text-white tracking-tighter uppercase mb-4">You're on the list</h2>
                                    <p className="text-neutral-400">
                                        Our strategy team is reviewing your site. <br />
                                        Expect a teardown in your inbox shortly.
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
