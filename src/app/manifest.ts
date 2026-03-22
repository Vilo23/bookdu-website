import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'BOOKDU - Finance Tracking for Models',
    short_name: 'BOOKDU',
    description: 'Track payments, guard contracts, manage your schedule, and sort tax. Built for models who work through agencies.',
    start_url: '/',
    display: 'standalone',
    background_color: '#4D5045',
    theme_color: '#BEC4A8',
    icons: [
      { src: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { src: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }
}
