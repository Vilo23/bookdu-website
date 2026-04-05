import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://bookdu.co/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: 'https://bookdu.co',
      lastModified: new Date('2026-04-05'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://bookdu.co/features',
      lastModified: new Date('2026-03-22'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://bookdu.co/blog',
      lastModified: new Date('2026-04-05'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://bookdu.co/about',
      lastModified: new Date('2026-03-22'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://bookdu.co/screenshots',
      lastModified: new Date('2026-03-22'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...blogEntries,
  ]
}
