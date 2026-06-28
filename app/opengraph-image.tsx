import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Tevin Owino — Full-Stack Software Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#09090B',
          width: '100%',
          height: '100%',
          display: 'flex',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Dot grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Cyan glow top-right */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,191,166,0.18) 0%, transparent 70%)',
          }}
        />

        {/* Blue glow bottom-left */}
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            left: -80,
            width: 360,
            height: 360,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16,178,206,0.12) 0%, transparent 70%)',
          }}
        />

        {/* Main content */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '64px 80px',
            width: '100%',
          }}
        >
          {/* Top row: availability badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: '#00BFA6',
              }}
            />
            <span
              style={{
                fontSize: 16,
                color: '#00BFA6',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              Open to hire · Nairobi, Kenya
            </span>
          </div>

          {/* Centre: name block */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <div
              style={{
                fontSize: 18,
                color: 'rgba(255,255,255,0.45)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: 16,
                fontWeight: 500,
              }}
            >
              Full-Stack Software Engineer
            </div>
            <div
              style={{
                fontSize: 92,
                fontWeight: 900,
                color: 'white',
                lineHeight: 1,
                letterSpacing: '-0.03em',
              }}
            >
              Tevin
            </div>
            <div
              style={{
                fontSize: 92,
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: '-0.03em',
                background: 'linear-gradient(135deg, #00BFA6 0%, #10b2ce 100%)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Owino.
            </div>
          </div>

          {/* Bottom row: domain + stack */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ fontSize: 18, color: 'rgba(255,255,255,0.35)', fontWeight: 400 }}>
              tevinowino.co.ke
            </span>
            <div style={{ display: 'flex', gap: 10 }}>
              {['TypeScript', 'React', 'Next.js', 'Node.js'].map((tech) => (
                <div
                  key={tech}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 999,
                    border: '1px solid rgba(255,255,255,0.12)',
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.5)',
                    fontFamily: 'monospace',
                  }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative </> code bracket, bottom-right */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 60,
            fontSize: 220,
            fontWeight: 900,
            color: 'rgba(0,191,166,0.05)',
            fontFamily: 'monospace',
            lineHeight: 1,
            userSelect: 'none',
          }}
        >
          {'</>'}
        </div>
      </div>
    ),
    { ...size }
  )
}
