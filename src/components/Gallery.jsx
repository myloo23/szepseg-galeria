import { useEffect, useRef, useState } from 'react'

const images = [
  { src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80&auto=format&fit=crop', span: 2, label: 'Hajformázás' },
  { src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80&auto=format&fit=crop', span: 1, label: 'Kozmetika' },
  { src: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80&auto=format&fit=crop', span: 1, label: 'Masszázs' },
  { src: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=600&q=80&auto=format&fit=crop', span: 1, label: 'HeadSpa' },
  { src: 'https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=600&q=80&auto=format&fit=crop', span: 2, label: 'Balayage' },
  { src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80&auto=format&fit=crop', span: 1, label: 'Szalon' },
]

export default function Gallery() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="galeria" style={{ padding: '7rem 1.5rem', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{
            fontSize: '0.65rem', letterSpacing: '0.3em',
            textTransform: 'uppercase', color: 'var(--gold)',
            fontWeight: 600, marginBottom: '1rem',
          }}>Munkáink</p>
          <h2 style={{
            fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 400, color: 'var(--charcoal)', marginBottom: '1rem',
          }}>Galéria</h2>
          <div style={{ width: 60, height: 1, background: 'var(--gold)', margin: '0 auto' }} />
        </div>

        {/* Mosaic grid */}
        <div ref={ref} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridAutoRows: 280,
          gap: '0.8rem',
        }}>
          {images.map((img, i) => (
            <div key={i}
              style={{
                gridColumn: `span ${img.span}`,
                position: 'relative', overflow: 'hidden', borderRadius: 3,
                opacity: visible ? 1 : 0,
                transform: visible ? 'scale(1)' : 'scale(0.95)',
                transition: `all 0.6s ease ${i * 0.1}s`,
                cursor: 'pointer',
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <img src={img.src} alt={img.label} style={{
                width: '100%', height: '100%', objectFit: 'cover',
                transform: hovered === i ? 'scale(1.07)' : 'scale(1)',
                transition: 'transform 0.5s ease',
              }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: hovered === i ? 'rgba(28,28,28,0.45)' : 'rgba(28,28,28,0.1)',
                transition: 'background 0.4s ease',
                display: 'flex', alignItems: 'flex-end', padding: '1.2rem',
              }}>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.1rem', color: 'white',
                  opacity: hovered === i ? 1 : 0,
                  transform: hovered === i ? 'translateY(0)' : 'translateY(8px)',
                  transition: 'all 0.3s ease',
                  letterSpacing: '0.05em',
                }}>{img.label}</span>
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
          Még több kép a{' '}
          <a href="https://www.facebook.com/szepseggaleriadabas/" target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--gold)', borderBottom: '1px solid var(--gold-light)' }}>
            Facebook oldalunkon
          </a>
        </p>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #galeria .gallery-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  )
}
