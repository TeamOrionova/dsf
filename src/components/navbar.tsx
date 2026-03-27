"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

import { BrandLogo } from "@/components/ui/brand-logo";

const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Journal", href: "/journal" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
            <div className="flex flex-col items-center w-full max-w-4xl">
                <div className="flex items-center justify-between w-full md:w-auto md:gap-8 px-6 md:px-8 py-3 rounded-full bg-[#111] border border-[#2a2a2a]">
                    <Link href="/" className="flex items-center">
                        <BrandLogo size="md" />
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-6">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-[#f5f5f5]",
                                    pathname === link.href ? "text-[#0d7377]" : "text-[#a0a0a0]"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <Link
                            href="/contact"
                            className="hidden sm:block px-4 py-2 text-xs font-bold tracking-wider text-white bg-[#0d7377] rounded-full transition-colors hover:bg-[#14a085] whitespace-nowrap"
                        >
                            Let's Build
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden p-2 text-[#f5f5f5] hover:bg-[#2a2a2a] rounded-full transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden mt-4 w-full p-6 rounded-2xl bg-[#111] border border-[#2a2a2a]">
                        <div className="flex flex-col gap-4">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-lg font-medium transition-colors hover:text-[#f5f5f5] py-2 border-b border-[#2a2a2a]",
                                        pathname === link.href ? "text-[#0d7377]" : "text-[#a0a0a0]"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="mt-4 px-6 py-3 text-center text-sm font-bold tracking-wider text-white bg-[#0d7377] rounded-full hover:bg-[#14a085] transition-colors"
                            >
                                Let's Build
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
