import { ImageResponse } from 'next/og'

export const alt = 'BOOKDU - Finance tracking for models'
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
              fontSize: 80,
              fontWeight: 900,
              color: '#F1ECE4',
              letterSpacing: '-2px',
              textTransform: 'uppercase',
            }}
          >
            BOOKDU
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#C5C0B6',
              letterSpacing: '6px',
              textTransform: 'uppercase',
            }}
          >
            Finance tracking for models
          </div>
          <div
            style={{
              display: 'flex',
              gap: '12px',
              marginTop: '16px',
            }}
          >
            {['Payments', 'Contracts', 'Schedule'].map((label) => (
              <div
                key={label}
                style={{
                  fontSize: 16,
                  color: '#F1ECE4',
                  background: '#5A5E4E',
                  padding: '8px 20px',
                  border: '1px solid #7A7E6E',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
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
