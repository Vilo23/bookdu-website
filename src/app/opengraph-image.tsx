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
              fontSize: 80,
              fontWeight: 700,
              color: '#6E725F',
              letterSpacing: '-2px',
            }}
          >
            BOOKDU
          </div>
          <div
            style={{
              fontSize: 32,
              color: '#878C76',
              maxWidth: '600px',
              textAlign: 'center',
              lineHeight: 1.4,
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
            <div
              style={{
                fontSize: 18,
                color: '#A4AA8E',
                background: '#FFFFFF',
                padding: '8px 20px',
                borderRadius: '20px',
                border: '1px solid #D1CEC4',
              }}
            >
              Payments
            </div>
            <div
              style={{
                fontSize: 18,
                color: '#A4AA8E',
                background: '#FFFFFF',
                padding: '8px 20px',
                borderRadius: '20px',
                border: '1px solid #D1CEC4',
              }}
            >
              Contracts
            </div>
            <div
              style={{
                fontSize: 18,
                color: '#A4AA8E',
                background: '#FFFFFF',
                padding: '8px 20px',
                borderRadius: '20px',
                border: '1px solid #D1CEC4',
              }}
            >
              Schedule
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
