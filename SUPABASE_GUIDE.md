# Supabase Setup Guide - Unpolished Media

To make your website dynamic without using YouTube/Vimeo embeds, follow these 3 steps:

## 1. Create the Projects Table
Go to the **SQL Editor** in your Supabase dashboard and run this command:

```sql
create table projects (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text,
  category text, -- e.g., 'Video', 'Photo', 'Social'
  media_type text, -- 'video' or 'image'
  media_url text not null,
  poster_url text, -- optional thumbnail for videos
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Enable public access for viewing
alter table projects enable row level security;
create policy "Allow public view" on projects for select using (true);
```

## 2. Set Up Media Storage
- Go to **Storage** -> **New Bucket**.
- Name it `media`.
- Set it to **Public** (so anyone can view the videos).
- Upload your `.mp4` or `.jpg` files here.
- Copy the **Public URL** of each file to use in your database.

## 3. Environment Variables
Create a file named `.env.local` in your root folder and add your Supabase credentials (found in Settings -> API):

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## 4. Why this is $0?
- **Supabase Core:** Free up to 50,000 users.
- **Supabase Storage:** Free up to 1GB of media (plenty for high-quality compressed portfolio clips).
- **Control:** Zero third-party logos on your videos. Pure, unpolished quality.
