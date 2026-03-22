import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://bookdu.co',
      lastModified: new Date('2026-03-22'),
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
  ]
}
