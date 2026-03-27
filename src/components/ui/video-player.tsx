"use client";
import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
    src: string;
    poster?: string;
    className?: string;
}

export function VideoPlayer({ src, poster, className }: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    const togglePlay = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
            setHasInteracted(true);
        }
    };

    // Intersection Observer for autoplay on scroll (muted)
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && videoRef.current) {
                        videoRef.current.play().catch(() => {
                            // Browser might block autoplay
                            console.log("Autoplay blocked");
                        });
                        setIsPlaying(true);
                    } else if (videoRef.current) {
                        videoRef.current.pause();
                        setIsPlaying(false);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className={cn("relative rounded-2xl overflow-hidden group bg-black shadow-2xl", className)}>
            <video
                ref={videoRef}
                src={src}
                poster={poster}
                className="w-full h-full object-contain"
                loop
                muted={!hasInteracted}
                playsInline
                preload="none"
                onClick={togglePlay}
            />

            {/* Custom Controls Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between">
                <button
                    onClick={togglePlay}
                    className="text-white hover:scale-110 transition-transform"
                >
                    {isPlaying ? (
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
                    ) : (
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    )}
                </button>

                <div className="flex items-center gap-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/50">Ninth Cloud Native</span>
                    <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                </div>
            </div>

            {/* Play/Pause Large Overlay for first-time use */}
            {!hasInteracted && !isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white translate-x-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                </div>
            )}
        </div>
    );
}
