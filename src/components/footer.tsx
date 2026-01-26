import Link from "next/link";
import { BrandLogo } from "@/components/ui/brand-logo";

export function Footer() {
    return (
        <footer className="w-full py-16 px-6 bg-neutral-950 border-t border-neutral-900">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <Link href="/" className="mb-6 block">
                        <BrandLogo size="lg" />
                    </Link>
                    <p className="text-neutral-400 max-w-sm mb-8">
                        A results-driven content agency specializing in high-performance web development and cinematic storytelling.
                    </p>
                    <div className="flex gap-6">
                        <a href="https://instagram.com/ninthcloudstudio" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors uppercase text-[10px] font-black tracking-widest">Instagram</a>
                        <a href="https://wa.me/918269364803" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors uppercase text-[10px] font-black tracking-widest">WhatsApp</a>
                        <a href="#" className="text-neutral-400 hover:text-white transition-colors uppercase text-[10px] font-black tracking-widest">LinkedIn</a>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6">Quick Links</h4>
                    <ul className="space-y-4">
                        <li><Link href="/about" className="text-neutral-400 hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="/services" className="text-neutral-400 hover:text-white transition-colors">Services</Link></li>
                        <li><Link href="/portfolio" className="text-neutral-400 hover:text-white transition-colors">Portfolio</Link></li>
                        <li><Link href="/contact" className="text-neutral-400 hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6">Legal</h4>
                    <ul className="space-y-4">
                        <li><Link href="/privacy" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/terms" className="text-neutral-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
                        <li><Link href="/cookies" className="text-neutral-400 hover:text-white transition-colors">Cookie Policy</Link></li>
                        <li><Link href="/disclaimer" className="text-neutral-400 hover:text-white transition-colors">Disclaimer</Link></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-neutral-900 flex flex-col md:row items-center justify-between gap-4">
                <p className="text-neutral-500 text-sm">© {new Date().getFullYear()} Ninth Cloud Studio. All rights reserved.</p>
                <p className="text-neutral-500 text-sm">Build Something Real.</p>
            </div>
        </footer>
    );
}
