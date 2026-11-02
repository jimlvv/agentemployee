import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';
import { SITE } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  return [
    { url: SITE.url, changeFrequency: 'weekly', priority: 1 },
    {
      url: `${SITE.url}/blog`,
      lastModified: posts[0]?.date,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...posts.map((p) => ({
      url: `${SITE.url}/blog/${p.slug}`,
      lastModified: p.updated ?? p.date,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
