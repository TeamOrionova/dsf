import fs from 'fs';
import path from 'path';

// Define the shape of our project data
export interface MediaItem {
    type: 'video' | 'image';
    url: string;
}

export interface Project {
    id: number;
    title: string;
    category: string;
    type: string;
    desc: string;
    details: string;
    niche?: string;
    externalLink?: string;
    media: MediaItem[];
}

export function scanPortfolio(): Project[] {
    const portfolioDir = path.join(process.cwd(), 'public', 'portfolio');

    if (!fs.existsSync(portfolioDir)) {
        return [];
    }

    const projects: Project[] = [];
    let idCounter = 1;

    const categories = fs.readdirSync(portfolioDir).filter(f =>
        fs.statSync(path.join(portfolioDir, f)).isDirectory()
    );

    categories.forEach(category => {
        const categoryPath = path.join(portfolioDir, category);

        if (category === 'Websites') {
            const niches = fs.readdirSync(categoryPath).filter(f =>
                fs.statSync(path.join(categoryPath, f)).isDirectory()
            );

            niches.forEach(niche => {
                const nichePath = path.join(categoryPath, niche);
                const projectFiles = fs.readdirSync(nichePath).filter(f => f.endsWith('.txt'));

                projectFiles.forEach(file => {
                    const filePath = path.join(nichePath, file);
                    const url = fs.readFileSync(filePath, 'utf-8').trim();
                    const title = file.replace('.txt', '').replace(/-/g, ' ');

                    // Even if URL is empty, we list it (it might be filled later)
                    // But usually we want valid ones.
                    if (url) {
                        projects.push({
                            id: idCounter++,
                            title,
                            category,
                            niche: niche.replace(/-/g, ' '),
                            type: 'website',
                            desc: `A high-performance ${niche.replace(/-/g, ' ')} website.`,
                            details: `Direct live preview of ${title} project.`,
                            externalLink: url,
                            media: [
                                {
                                    type: 'image',
                                    // We use a placeholder here; the client will enhance it with the live link logic
                                    // or we can pre-generate the screenshot link here.
                                    // Robust screenshot URL with wait timer to prevent black screens
                                    // Switched to WordPress mShots service for more reliable free screenshots
                                    url: `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=800&h=600`
                                }
                            ]
                        });
                    }
                });
            });
        } else {
            // Photo / Video
            const folderProjects = fs.readdirSync(categoryPath).filter(f =>
                fs.statSync(path.join(categoryPath, f)).isDirectory()
            );

            folderProjects.forEach(projectFolder => {
                const projectPath = path.join(categoryPath, projectFolder);
                const files = fs.readdirSync(projectPath).sort();

                let title = projectFolder.replace(/-/g, ' ');
                let description = "";
                let details = "";

                const infoFile = path.join(projectPath, 'info.txt');
                if (fs.existsSync(infoFile)) {
                    const content = fs.readFileSync(infoFile, 'utf-8');
                    const parts = content.split('---');

                    const metaLines = parts[0].split('\n');
                    metaLines.forEach(line => {
                        if (line.startsWith('Title:')) title = line.replace('Title:', '').trim();
                        if (line.startsWith('Description:')) description = line.replace('Description:', '').trim();
                    });

                    if (parts[1]) details = parts[1].replace('Details:', '').trim();
                }

                const media = files
                    .filter(f => f.match(/\.(jpg|jpeg|png|webp|mp4|webm)$/i))
                    .map(f => ({
                        type: f.endsWith('.mp4') || f.endsWith('.webm') ? 'video' : 'image',
                        url: `/portfolio/${category}/${projectFolder}/${f}`
                    })) as MediaItem[];

                if (media.length > 0) {
                    projects.push({
                        id: idCounter++,
                        title,
                        category,
                        type: media[0].type,
                        desc: description || `Original ${category} project.`,
                        details: details || description,
                        media
                    });
                }
            });
        }
    });

    return projects;
}
