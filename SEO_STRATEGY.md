# Ninethcloud Media SEO & Visibility Strategy

This guide outlines how to maintain and grow your rankings on Google and AI-driven search engines (like Perplexity, ChatGPT, and Gemini).

## 0. Getting Indexed (Do This First)
Before you can rank, Google needs to know you exist. Do these 3 things immediately after your next deploy:

### A. Google Search Console (Direct Invitation)
1. Go to [Google Search Console](https://search.google.com/search-console/).
2. Add your domain: `unpolished.media`.
3. Go to **Sitemaps** and submit your link: `https://unpolished.media/sitemap.xml`.
4. Use the **URL Inspection** bar at the top to paste your home page URL and click "Request Indexing."

### B. Social Signals (Fast Discovery)
Google finds new sites by following links from big social platforms.
1. **LinkedIn**: Post a "Launch" post with your website link.
2. **Instagram**: Add the link to your bio.
3. **Twitter (X)**: Tweet your link and pin it.

### C. Direct Submissions
1. Create a free business profile on **Clutch.co** and **Crunchbase**. Link to your site.
2. If you have a YouTube channel, put the website link in the "About" section and video descriptions.

## 1. Technical SEO (Already Implemented)
We have set up the foundation:
- **Dynamic Sitemap**: Automatically stays updated at `/sitemap.xml`.
- **Robots.txt**: Guides search crawlers.
- **Global Metadata**: High-quality titles and descriptions for every page.
- **JSON-LD Structured Data**: Helps Google understand you are a professional business entity.
- **Next.js Image Optimization**: Ensures fast load times.

## 2. Ranking on Google (1 Month Sprint)
To hit the top results in a month, follow these high-impact actions:

### A. Google Business Profile (CRITICAL)
If you serve clients locally (or want to appear in map results):
1. Create a [Google Business Profile](https://www.google.com/business/).
2. Use the exact business name: **Ninethcloud Media**.
3. Link to `https://unpolished.media`.
4. Ask 3-5 past clients to leave 5-star reviews this week. Reviews are the #1 local ranking factor.

### B. High-Frequency Journaling (Content Strategy)
Google rewards "Freshness":
1. Create a `/journal` or `/blog` section if you don't have one.
2. Publish **2 articles per week** specifically targeting "Niche" keywords.
   - *Example Titles*: "How Founder-Led Content Is Scaling Brands in 2026", "Why Mumbai Media Agencies Are Shifting to Result-Driven Models".
3. Use **Internal Linking**: Within your articles, link to your `/portfolio` or `/services`.

### C. Backlinks
1. List your site on directories: Crunchbase, Clutch.co, and local business directories.
2. Share project launches on LinkedIn and Twitter with the URL.

---

## 3. Ranking for AI Search (GEO - Generative Engine Optimization)
AI Search (Perplexity, SearchGPT) works differently than Google. It looks for **Authority** and **Citation**.

### A. The "Citation" Strategy
AI models verify facts by looking at multiple sources.
1. **Consistency**: Ensure your name, address, and phone (NAP) are EXACTLY the same on your website, LinkedIn, and Instagram.
2. **Third-Party Mentions**: If a niche blog or news site mentions "Ninethcloud Media is a top result-driven agency," Perplexity is 5x more likely to recommend you.

### B. LLM-Friendly Content
AI models summarize content. To be summarized correctly:
1. **Use Clear Headers**: Use `<h2>` and `<h3>` tags with descriptive titles.
2. **Entity Association**: Clearly state what you are. "Ninethcloud Media is a **Creative Agency** based in **Mumbai** specializing in **Founder-led storytelling**."
3. **Bullet Points**: AI loves lists. Use them for your services and results.

---

## 4. Maintenance Checklist
- [ ] **Weekly**: Update the Portfolio with 1 new project (this triggers the auto-scanner and updates your sitemap).
- [ ] **Bi-Weekly**: Check [Google Search Console](https://search.google.com/search-console) for indexing errors.
- [ ] **Monthly**: Search for "Ninethcloud Media" on Perplexity.ai and see what it says. If it's missing info, add that info to your "About" page.

---

## How to update SEO yourself in code
- **Global Settings**: Edit `src/app/layout.tsx` in the `metadata` object.
- **Individual Pages**: Add an `export const metadata = { ... }` block to any `page.tsx`.
- **Structured Data**: Edit the `jsonLd` object in `src/app/page.tsx`.

## 5. How to add Blog Posts (Auto-Scanner)
The site now includes an automated blog system to help you rank for specific niches.
1. Create a new folder in `public/journal/` (e.g., `public/journal/how-to-scale-agency`).
2. Add an `info.txt` file inside with this exact format:
   ```text
   Title: Your Catchy Title
   Description: Short summary for Google
   Date: 2026-01-24
   Category: Business
   ```
3. Add a `content.md` file with your article content using standard Markdown.
4. **Push to Git**: The post will automatically appear on `/journal`.
