import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog-scanner';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://unpolished.media';

    const posts = getAllPosts();
    const journalRoutes = posts.map(p => `/journal/${p.slug}`);

    const baseRoutes = [
        '',
        '/about',
        '/portfolio',
        '/contact',
        '/services',
        '/journal',
        '/privacy',
        '/terms',
        '/cookies',
        '/disclaimer',
    ];

    const allRoutes = [...baseRoutes, ...journalRoutes];

    return allRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : (route.startsWith('/journal/') ? 0.7 : 0.8),
    }));
}
