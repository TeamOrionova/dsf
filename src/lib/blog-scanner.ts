import fs from 'fs';
import path from 'path';

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    category: string;
    content: string;
    image?: string;
}

export function getAllPosts(): BlogPost[] {
    const journalDir = path.join(process.cwd(), 'public', 'journal');

    if (!fs.existsSync(journalDir)) {
        return [];
    }

    const slugs = fs.readdirSync(journalDir).filter(f =>
        fs.statSync(path.join(journalDir, f)).isDirectory()
    );

    const posts: BlogPost[] = slugs.map(slug => {
        const postPath = path.join(journalDir, slug);
        const infoFile = path.join(postPath, 'info.txt');
        const contentFile = path.join(postPath, 'content.md');

        let title = slug.replace(/-/g, ' ');
        let description = "";
        let date = new Date().toISOString().split('T')[0];
        let category = "Business";
        let content = "";
        let image = "";

        if (fs.existsSync(infoFile)) {
            const info = fs.readFileSync(infoFile, 'utf-8');
            const lines = info.split('\n');
            lines.forEach(line => {
                if (line.startsWith('Title:')) title = line.replace('Title:', '').trim();
                if (line.startsWith('Description:')) description = line.replace('Description:', '').trim();
                if (line.startsWith('Date:')) date = line.replace('Date:', '').trim();
                if (line.startsWith('Category:')) category = line.replace('Category:', '').trim();
                if (line.startsWith('Image:')) image = line.replace('Image:', '').trim();
            });
        }

        if (fs.existsSync(contentFile)) {
            content = fs.readFileSync(contentFile, 'utf-8');
        }

        return {
            slug,
            title,
            description,
            date,
            category,
            content,
            image: image || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop'
        };
    });

    return posts.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        if (isNaN(dateA) || isNaN(dateB)) return 0;
        return dateB - dateA;
    });
}

export function getPostBySlug(slug: string): BlogPost | null {
    const posts = getAllPosts();
    return posts.find(p => p.slug === slug) || null;
}
