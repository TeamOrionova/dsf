export interface Project {
    id: string;
    title: string;
    description: string;
    category: "Video" | "Photo" | "Social" | "Branding";
    media_type: "video" | "image";
    media_url: string; // Path relative to /public or full URL
    poster_url?: string; // Optional thumbnail for videos
    created_at?: string; // Optional date string for sorting
}

export const projects: Project[] = [
    {
        id: "1",
        title: "Vintage Portrait",
        description: "A dramatic, stylized portrait with vintage aesthetic, capturing raw emotion and timeless beauty through film grain and evocative composition.",
        category: "Photo",
        media_type: "image",
        media_url: "/portfolio/images/vintage-portrait.jpg",
        created_at: "2024-01-15",
    },
];

