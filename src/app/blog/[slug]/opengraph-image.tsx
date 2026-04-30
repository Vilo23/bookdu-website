import { ImageResponse } from 'next/og'
import { getAllPosts, getPostBySlug } from '@/lib/blog'

export const alt = 'BOOKDU Blog'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export default async function Image({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  const title = post?.title ?? 'BOOKDU Blog'
  const pillar = post?.pillar ?? 'BOOKDU'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#4D5045',
          fontFamily: 'sans-serif',
          padding: '72px',
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 900,
            color: '#F1ECE4',
            letterSpacing: '4px',
            textTransform: 'uppercase',
          }}
        >
          BOOKDU
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
          }}
        >
          <div
            style={{
              fontSize: 18,
              color: '#BEC4A8',
              letterSpacing: '6px',
              textTransform: 'uppercase',
            }}
          >
            {`${pillar} // BLOG`}
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 900,
              color: '#F1ECE4',
              lineHeight: 1.15,
              textTransform: 'uppercase',
              maxWidth: '1000px',
            }}
          >
            {title}
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
