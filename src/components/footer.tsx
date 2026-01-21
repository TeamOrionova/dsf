import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full py-16 px-6 bg-neutral-950 border-t border-neutral-900">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <Link href="/" className="text-2xl font-bold tracking-tighter text-white mb-6 block">
                        NINETHCLOUD MEDIA
                    </Link>
                    <p className="text-neutral-400 max-w-sm mb-8">
                        A results-driven content agency specializing in human, founder-led storytelling that moves the needle.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-neutral-400 hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="text-neutral-400 hover:text-white transition-colors">WhatsApp</a>
                        <a href="#" className="text-neutral-400 hover:text-white transition-colors">LinkedIn</a>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6 italic">Quick Links</h4>
                    <ul className="space-y-4">
                        <li><Link href="/about" className="text-neutral-400 hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="/services" className="text-neutral-400 hover:text-white transition-colors">Services</Link></li>
                        <li><Link href="/portfolio" className="text-neutral-400 hover:text-white transition-colors">Portfolio</Link></li>
                        <li><Link href="/contact" className="text-neutral-400 hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6 italic">Legal</h4>
                    <ul className="space-y-4">
                        <li><Link href="/privacy" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/terms" className="text-neutral-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
                        <li><Link href="/cookies" className="text-neutral-400 hover:text-white transition-colors">Cookie Policy</Link></li>
                        <li><Link href="/disclaimer" className="text-neutral-400 hover:text-white transition-colors">Disclaimer</Link></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-neutral-900 flex flex-col md:row items-center justify-between gap-4">
                <p className="text-neutral-500 text-sm">© {new Date().getFullYear()} Ninethcloud Media. All rights reserved.</p>
                <p className="text-neutral-500 text-sm italic">Build Something Real.</p>
            </div>
        </footer>
    );
}
