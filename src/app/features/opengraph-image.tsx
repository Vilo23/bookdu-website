import { ImageResponse } from 'next/og'

export const alt = 'BOOKDU Features - Payment Tracking, Contracts & Tax for Models'
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
              maxWidth: '800px',
              textAlign: 'center',
              lineHeight: 1.3,
              textTransform: 'uppercase',
            }}
          >
            One app. Everything protected.
          </div>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              marginTop: '16px',
            }}
          >
            {['Payments', 'Contracts', 'Schedule'].map((label) => (
              <div
                key={label}
                style={{
                  fontSize: 18,
                  color: '#3D4037',
                  background: '#BEC4A8',
                  padding: '12px 28px',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
