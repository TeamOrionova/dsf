import Link from "next/link";
import { BrandLogo } from "@/components/ui/brand-logo";

export function Footer() {
    return (
        <footer className="w-full py-16 px-6 bg-[#0a0a0a] border-t border-[#1a1a1a]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left: Logo + Description + Social */}
                <div>
                    <Link href="/" className="mb-6 block">
                        <BrandLogo size="lg" />
                    </Link>
                    <p className="text-[#737373] max-w-sm mb-8 leading-relaxed">
                        A results-driven content agency specializing in high-performance web development and cinematic storytelling.
                    </p>
                    <div className="flex gap-6">
                        <a 
                            href="https://instagram.com/ninthcloudstudio" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[#737373] hover:text-[#0d7377] transition-colors text-sm font-medium"
                        >
                            Instagram
                        </a>
                        <a 
                            href="https://wa.me/918269364803" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[#737373] hover:text-[#0d7377] transition-colors text-sm font-medium"
                        >
                            WhatsApp
                        </a>
                        <a 
                            href="#" 
                            className="text-[#737373] hover:text-[#0d7377] transition-colors text-sm font-medium"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                {/* Right: Links */}
                <div className="flex gap-16 md:justify-end">
                    <div>
                        <h4 className="text-[#f5f5f5] font-medium mb-4">Navigation</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-[#737373] hover:text-[#f5f5f5] transition-colors text-sm">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-[#737373] hover:text-[#f5f5f5] transition-colors text-sm">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/portfolio" className="text-[#737373] hover:text-[#f5f5f5] transition-colors text-sm">
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-[#737373] hover:text-[#f5f5f5] transition-colors text-sm">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[#f5f5f5] font-medium mb-4">Legal</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/privacy" className="text-[#737373] hover:text-[#f5f5f5] transition-colors text-sm">
                                    Privacy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-[#737373] hover:text-[#f5f5f5] transition-colors text-sm">
                                    Terms
                                </Link>
                            </li>
                            <li>
                                <Link href="/cookies" className="text-[#737373] hover:text-[#f5f5f5] transition-colors text-sm">
                                    Cookies
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-[#525252] text-sm">© {new Date().getFullYear()} Ninth Cloud Studio. All rights reserved.</p>
                <p className="text-[#525252] text-sm">Built for growth.</p>
            </div>
        </footer>
    );
}
