import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().filter((post) => !post.noIndex)
  const buildDate = new Date()
  const latestPostDate = posts.length > 0 ? new Date(posts[0].date) : buildDate

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://bookdu.co/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: 'https://bookdu.co',
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://bookdu.co/features',
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://bookdu.co/blog',
      lastModified: latestPostDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://bookdu.co/about',
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://bookdu.co/about/roman-feldman',
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://bookdu.co/about/bec',
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://bookdu.co/screenshots',
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...blogEntries,
  ]
}
