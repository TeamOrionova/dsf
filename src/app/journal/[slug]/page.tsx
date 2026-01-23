import { getPostBySlug, getAllPosts } from "@/lib/blog-scanner";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return {};

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            images: [{ url: post.image }],
            type: 'article',
            publishedTime: post.date,
        },
    };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.image,
        "datePublished": post.date,
        "description": post.description,
        "author": [{
            "@type": "Organization",
            "name": "Ninethcloud Media",
            "url": "https://unpolished.media"
        }]
    };

    return (
        <main className="min-h-screen bg-neutral-950 pt-32 pb-24 px-6">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <article className="max-w-4xl mx-auto">
                <Link
                    href="/journal"
                    className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors uppercase text-xs font-bold tracking-[0.2em] mb-12 group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Journal
                </Link>

                <div className="space-y-8 mb-16">
                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">
                        <span>{post.category}</span>
                        <span className="w-1 h-1 rounded-full bg-neutral-800" />
                        <span className="text-neutral-500">{post.date}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9] uppercase italic">
                        {post.title}
                    </h1>

                    <p className="text-xl md:text-2xl text-neutral-400 font-medium leading-relaxed italic">
                        {post.description}
                    </p>
                </div>

                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-neutral-800 bg-neutral-900 mb-16">
                    <Image
                        src={post.image || ""}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="prose prose-invert prose-lg max-w-none 
                    prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tighter prose-headings:uppercase prose-headings:italic
                    prose-p:text-neutral-300 prose-p:leading-relaxed prose-p:font-medium
                    prose-li:text-neutral-300 prose-strong:text-white prose-strong:font-black
                    prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8
                    prose-h3:text-2xl prose-h3:mt-12
                    ">
                    {/* In a real app we'd use a markdown parser here, for now we render simple blocks */}
                    <div dangerouslySetInnerHTML={{ __html: formatContent(post.content) }} />
                </div>

                <div className="mt-24 pt-12 border-t border-neutral-900 text-center">
                    <h3 className="text-2xl font-bold text-white mb-6 uppercase italic tracking-tighter">Ready to scale your business?</h3>
                    <Link
                        href="/contact"
                        className="inline-block px-12 py-5 bg-white text-black font-black rounded-full uppercase italic tracking-tighter text-xl hover:scale-105 transition-all"
                    >
                        Start Your Project
                    </Link>
                </div>
            </article>
        </main>
    );
}

// Simple helper to convert MD-like headers and lists to HTML for demonstration
// In production, we should use 'react-markdown' or similar.
function formatContent(content: string) {
    return content
        .replace(/^# (.*$)/gim, '<h1 class="hidden">$1</h1>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^\- (.*$)/gim, '<li>$1</li>')
        .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br />');
}
