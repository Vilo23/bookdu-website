import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'
import { getAllTerms } from '@/lib/glossary'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().filter((post) => !post.noIndex)
  const terms = getAllTerms()
  const buildDate = new Date()
  const latestPostDate = posts.length > 0 ? new Date(posts[0].date) : buildDate

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://bookdu.co/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const glossaryEntries: MetadataRoute.Sitemap = terms.map((t) => ({
    url: `https://bookdu.co/glossary/${t.slug}`,
    lastModified: new Date(t.lastUpdated),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
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
      url: 'https://bookdu.co/payment-tracker',
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://bookdu.co/expense-tracker',
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://bookdu.co/tax-and-expenses',
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
    {
      url: 'https://bookdu.co/glossary',
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...glossaryEntries,
    ...blogEntries,
  ]
}
