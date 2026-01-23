import { getAllPosts } from "@/lib/blog-scanner";
import InfiniteHero from "@/components/ui/infinite-hero";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Journal | Scaling Brands & Creative Strategy",
    description: "Insights on scaling businesses, interior design marketing, web development trends, and founder-led content strategy.",
};

export default function JournalPage() {
    const posts = getAllPosts();

    return (
        <main className="flex min-h-screen flex-col items-center bg-neutral-950">
            <section className="w-full relative overflow-hidden">
                <InfiniteHero
                    height="h-[80vh]"
                    title="The Journal"
                    description="Thoughts on growth, scaling luxury brands, and the technical edge of modern web development."
                />
            </section>

            <section className="max-w-7xl mx-auto py-24 px-6 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/journal/${post.slug}`}
                            className="group flex flex-col gap-6"
                        >
                            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900">
                                <Image
                                    src={post.image || ""}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">
                                    <span>{post.category}</span>
                                    <span className="w-1 h-1 rounded-full bg-neutral-800" />
                                    <span className="text-neutral-500">{post.date}</span>
                                </div>
                                <h2 className="text-3xl font-bold text-white tracking-tighter leading-tight group-hover:text-blue-400 transition-colors uppercase italic">
                                    {post.title}
                                </h2>
                                <p className="text-neutral-400 font-medium leading-relaxed line-clamp-2">
                                    {post.description}
                                </p>
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white mt-4 group-hover:gap-4 transition-all">
                                    Read Article <span className="text-blue-500">→</span>
                                </div>
                            </div>
                        </Link>
                    ))}

                    {posts.length === 0 && (
                        <div className="col-span-full py-20 text-center">
                            <p className="text-neutral-500 text-xl italic font-serif">Writing the future... coming soon.</p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
