import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Velion Consulting - Humanize Tech'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          backgroundColor: '#020617', // bg-slate-950
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'radial-gradient(circle at 25px 25px, #1e293b 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1e293b 2%, transparent 0%)',
          backgroundSize: '100px 100px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '60px 100px',
            borderRadius: '40px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          }}
        >
           {/* Logo Icon Representation */}
           <div
             style={{
               width: 80,
               height: 80,
               borderRadius: 20,
               background: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)',
               marginBottom: 30,
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               color: 'white',
               fontSize: 40,
               fontWeight: 900,
             }}
           >
             V
           </div>

           {/* Brand Name */}
          <div
            style={{
              display: 'flex',
              fontSize: 70,
              fontWeight: 900,
              letterSpacing: '-0.03em',
              color: 'white',
              lineHeight: 1,
              marginBottom: 20,
            }}
          >
            Velion
            <span style={{ color: '#38bdf8', marginLeft: 10 }}>.</span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 30,
              color: '#94a3b8', // text-slate-400
              letterSpacing: '-0.02em',
              fontWeight: 500,
            }}
          >
            Born to Humanize Tech
          </div>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}
