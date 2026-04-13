import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/opengraph-image', '/manifest.webmanifest'],
    },
    sitemap: 'https://bookdu.co/sitemap.xml',
  }
}
