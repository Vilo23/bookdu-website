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
          background: '#4D5045',
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
              fontWeight: 900,
              color: '#F1ECE4',
              textTransform: 'uppercase',
            }}
          >
            BOOKDU
          </div>
          <div
            style={{
              fontSize: 40,
              fontWeight: 900,
              color: '#F1ECE4',
              maxWidth: '700px',
              textAlign: 'center',
              lineHeight: 1.3,
              textTransform: 'uppercase',
            }}
          >
            See the app in action
          </div>
          <div
            style={{
              fontSize: 20,
              color: '#C5C0B6',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              marginTop: '8px',
            }}
          >
            18 screenshots // payments, contracts & more
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
