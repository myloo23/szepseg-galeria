import { useEffect, useRef, useState } from 'react'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Kovács Anita',
    service: 'Fodrászat',
    text: 'Életemben nem voltam még ilyen elégedett egy fodrásszal. A csapat pontosan megértette, amit szerettem volna, és az eredmény felülmúlta minden várakozásomat. Garantáltan visszajövök!',
    stars: 5,
    initials: 'KA',
  },
  {
    name: 'Molnár Éva',
    service: 'HeadSpa & Masszázs',
    text: 'A HeadSpa kezelés csodálatos volt – éreztem, ahogy a stressz lassan elszáll. A légkör annyira nyugodt és elegáns, hogy az ember rögtön elfelejt minden napi gondot. Mindenkinek ajánlom!',
    stars: 5,
    initials: 'MÉ',
  },
  {
    name: 'Szabó Krisztina',
    service: 'Kozmetika',
    text: 'Fantasztikus kozmetikai kezelés, nagyon profik és kedvesek. A bőröm soha nem volt ilyen szép! A szalon hangulata gyönyörű, tényleg érezni hogy gondot fordítanak minden részletre.',
    stars: 5,
    initials: 'SzK',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="velemenyek" style={{
      padding: '7rem 1.5rem',
      background: 'var(--charcoal)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorative */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60vw', height: '60vw', maxWidth: 700,
        borderRadius: '50%',
        border: '1px solid rgba(184,150,90,0.08)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <p style={{
            fontSize: '0.65rem', letterSpacing: '0.3em',
            textTransform: 'uppercase', color: 'var(--gold)',
            fontWeight: 600, marginBottom: '1rem',
          }}>Vendégeink mondják</p>
          <h2 style={{
            fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 400, color: 'var(--white)', marginBottom: '1rem',
          }}>Vélemények</h2>
          <div style={{ width: 60, height: 1, background: 'var(--gold)', margin: '0 auto' }} />
        </div>

        {/* Cards */}
        <div ref={ref} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
        }}>
          {reviews.map((r, i) => (
            <div key={r.name} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(184,150,90,0.2)',
              borderRadius: 4, padding: '2.2rem',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: `all 0.7s ease ${i * 0.15}s`,
              position: 'relative',
            }}>
              <Quote size={28} color="rgba(184,150,90,0.3)" style={{ marginBottom: '1.2rem' }} />

              <p style={{
                fontSize: '0.92rem', color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.85, marginBottom: '1.8rem', fontStyle: 'italic',
              }}>"{r.text}"</p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: 'var(--gold)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-heading)', color: 'white', fontSize: '0.9rem',
                  flexShrink: 0,
                }}>{r.initials}</div>
                <div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--white)', fontWeight: 500 }}>{r.name}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--gold-light)', letterSpacing: '0.05em' }}>{r.service}</div>
                </div>
                <div style={{ marginLeft: 'auto', display: 'flex', gap: 2 }}>
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <Star key={j} size={12} fill="var(--gold)" color="var(--gold)" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
