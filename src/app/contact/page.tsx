"use client";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { Button } from "@/components/ui/button";

export default function Contact() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <section className="w-full relative h-[50vh] flex items-center justify-center overflow-hidden">
                <BackgroundPaths title="Let’s Build Something Together" />
            </section>

            <section className="max-w-7xl mx-auto py-24 px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-24">
                {/* Contact Info */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-5xl md:text-6xl font-bold mb-8 italic tracking-tighter">Get in Touch</h2>
                    <p className="text-xl text-neutral-400 mb-12 max-w-lg">
                        Whether you have a specific project in mind or just want to brainstorm how content can grow your business, we're here to help.
                    </p>

                    <div className="space-y-8">
                        <a
                            href="https://wa.me/918269364803"
                            className="flex items-center gap-6 group hover:translate-x-2 transition-transform"
                        >
                            <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.43 5.623 1.43h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                            </div>
                            <span className="text-2xl font-bold text-white uppercase italic tracking-tighter">Chat on WhatsApp</span>
                        </a>

                        <a
                            href="https://instagram.com/ninethcloudmedia"
                            className="flex items-center gap-6 group hover:translate-x-2 transition-transform"
                        >
                            <div className="w-14 h-14 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500 border border-pink-500/20">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073s3.667-.014 4.947-.072c4.337-.2 6.78-2.618 6.98-6.98.058-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.337-2.618-6.78-6.98-6.98-1.281-.058-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </div>
                            <span className="text-2xl font-bold text-white uppercase italic tracking-tighter">Follow on Instagram</span>
                        </a>
                    </div>
                </div>

                {/* Lead Form */}
                <div className="p-10 rounded-[2.5rem] bg-neutral-900 border border-neutral-800 shadow-2xl">
                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-neutral-500 font-bold">Name</label>
                                <input type="text" className="w-full bg-neutral-950 border border-neutral-800 p-4 rounded-xl focus:outline-none focus:border-white transition-colors" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-neutral-500 font-bold">Email</label>
                                <input type="email" className="w-full bg-neutral-950 border border-neutral-800 p-4 rounded-xl focus:outline-none focus:border-white transition-colors" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-neutral-500 font-bold">Phone</label>
                            <input type="text" className="w-full bg-neutral-950 border border-neutral-800 p-4 rounded-xl focus:outline-none focus:border-white transition-colors" placeholder="+91 8269364803" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-neutral-500 font-bold">How can we help?</label>
                            <textarea rows={4} className="w-full bg-neutral-950 border border-neutral-800 p-4 rounded-xl focus:outline-none focus:border-white transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                        </div>
                        <Button className="w-full py-8 rounded-2xl text-lg font-bold uppercase tracking-widest italic transition-all hover:scale-[1.02]">
                            Let’s Build Something
                        </Button>
                    </form>
                </div>
            </section>
        </main>
    );
}
