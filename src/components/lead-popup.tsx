"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Mail, User, Briefcase, ChevronRight } from "lucide-react";

export function LeadPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const handleScroll = () => {
            const hasSeenPopup = sessionStorage.getItem("hasSeenLeadPopup");

            if (hasSeenPopup === "true" || isVisible) return;

            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;

            if (docHeight <= 0) return;

            const scrollPercent = (scrollTop / docHeight) * 100;

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

        if (isVisible && !isSubmitted && window.innerWidth < 768) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [mounted, isVisible, isSubmitted]);

    if (!mounted) return null;

    const closePopup = () => {
        setIsVisible(false);
        sessionStorage.setItem("hasSeenLeadPopup", "true");
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
                        className="absolute inset-0 bg-black/80"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="relative w-full max-w-[500px] bg-[#111] border border-[#2a2a2a] rounded-2xl overflow-hidden shadow-2xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closePopup}
                            className="absolute top-6 right-6 text-[#737373] hover:text-[#f5f5f5] transition-colors z-10"
                        >
                            <X size={24} />
                        </button>

                        <div className="p-8 md:p-12">
                            {!isSubmitted ? (
                                <>
                                    <div className="mb-8">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d7377]/10 border border-[#0d7377]/20 text-[#0d7377] text-xs tracking-wider font-medium mb-4">
                                            <span className="w-2 h-2 rounded-full bg-[#0d7377]"></span>
                                            Limited Strategy Slots
                                        </div>
                                        <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-[#f5f5f5] mb-4 leading-tight">
                                            Get Your Growth{" "}
                                            <span className="text-[#0d7377]">Audit for Free</span>
                                        </h2>
                                        <p className="text-[#a0a0a0] leading-relaxed">
                                            Stop guessing. Let us analyze your current funnel and show you exactly where you're losing revenue.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="relative group">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#525252] group-focus-within:text-[#0d7377] transition-colors" size={18} />
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                placeholder="Full Name"
                                                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl py-4 pl-12 pr-4 text-[#f5f5f5] placeholder:text-[#525252] focus:outline-none focus:border-[#0d7377] transition-all"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#525252] group-focus-within:text-[#0d7377] transition-colors" size={18} />
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                placeholder="Work Email"
                                                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl py-4 pl-12 pr-4 text-[#f5f5f5] placeholder:text-[#525252] focus:outline-none focus:border-[#0d7377] transition-all"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-[#525252] group-focus-within:text-[#0d7377] transition-colors" size={18} />
                                            <input
                                                required
                                                type="text"
                                                name="website"
                                                placeholder="Company Website"
                                                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl py-4 pl-12 pr-4 text-[#f5f5f5] placeholder:text-[#525252] focus:outline-none focus:border-[#0d7377] transition-all"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-[#0d7377] text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#14a085] transition-colors mt-6"
                                        >
                                            Secure My Audit
                                            <ChevronRight size={18} />
                                        </button>

                                        <p className="text-xs text-[#525252] text-center tracking-wide">
                                            No spam. Just high-density growth data.
                                        </p>
                                    </form>
                                </>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="py-12 text-center"
                                >
                                    <div className="w-20 h-20 bg-[#0d7377]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#0d7377] border border-[#0d7377]/20">
                                        <Send size={32} />
                                    </div>
                                    <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-[#f5f5f5] mb-4">You're on the list</h2>
                                    <p className="text-[#a0a0a0]">
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
