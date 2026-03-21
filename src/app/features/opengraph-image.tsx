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
              maxWidth: '800px',
              textAlign: 'center',
              lineHeight: 1.3,
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
            <div
              style={{
                fontSize: 20,
                color: '#FFFFFF',
                background: '#A4AA8E',
                padding: '12px 28px',
                borderRadius: '24px',
              }}
            >
              Payments
            </div>
            <div
              style={{
                fontSize: 20,
                color: '#FFFFFF',
                background: '#A4AA8E',
                padding: '12px 28px',
                borderRadius: '24px',
              }}
            >
              Contracts
            </div>
            <div
              style={{
                fontSize: 20,
                color: '#FFFFFF',
                background: '#A4AA8E',
                padding: '12px 28px',
                borderRadius: '24px',
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
