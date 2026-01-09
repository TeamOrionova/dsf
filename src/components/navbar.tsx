"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
            <div className="flex items-center gap-8 px-8 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
                <Link href="/" className="text-xl font-bold tracking-tighter text-white mr-4">
                    UNPOLISHED
                </Link>
                <div className="hidden md:flex items-center gap-6">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-white",
                                pathname === link.href ? "text-white" : "text-neutral-400"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                <Link
                    href="/contact"
                    className="ml-4 px-4 py-2 text-xs font-bold uppercase tracking-widest text-black bg-white rounded-full transition-transform hover:scale-105 active:scale-95"
                >
                    Let's Build
                </Link>
            </div>
        </nav>
    );
}
