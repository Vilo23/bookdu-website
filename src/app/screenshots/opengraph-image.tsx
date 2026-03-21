import { ImageResponse } from 'next/og'

export const alt = 'BOOKDU App Screenshots - Finance Tracking for Models'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#F1ECE4',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: '#6E725F',
            }}
          >
            BOOKDU
          </div>
          <div
            style={{
              fontSize: 40,
              fontWeight: 600,
              color: '#4D5045',
              maxWidth: '700px',
              textAlign: 'center',
              lineHeight: 1.3,
            }}
          >
            See the app in action
          </div>
          <div
            style={{
              fontSize: 22,
              color: '#878C76',
              maxWidth: '600px',
              textAlign: 'center',
              marginTop: '8px',
            }}
          >
            18 screenshots of payment tracking, contracts, and more
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
