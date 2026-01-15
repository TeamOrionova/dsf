# Portfolio Media Assets

Place your portfolio media files in the appropriate folders:

## Folder Structure

- **`videos/`** - Place your `.mp4` video files here
- **`images/`** - Place your `.jpg`, `.png`, or other image files here

## Usage in Projects

When adding projects to `src/data/projects.ts`, reference files like this:

```typescript
{
    media_type: "video",
    media_url: "/portfolio/videos/your-video.mp4",
    poster_url: "/portfolio/images/your-poster.jpg", // optional thumbnail
}
```

or

```typescript
{
    media_type: "image",
    media_url: "/portfolio/images/your-image.jpg",
}
```

Files in the `public` folder are served from the root path (`/`), so `/portfolio/videos/file.mp4` maps to `public/portfolio/videos/file.mp4`.

