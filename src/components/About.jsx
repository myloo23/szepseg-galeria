import { useEffect, useRef, useState } from 'react'
import { Award, Heart, Users, Star } from 'lucide-react'

const stats = [
  { icon: Star, value: '5★', label: 'Átlagos értékelés' },
  { icon: Users, value: '500+', label: 'Elégedett vendég' },
  { icon: Award, value: '10+', label: 'Év tapasztalat' },
  { icon: Heart, value: '4', label: 'Prémium szolgáltatás' },
]

export default function About() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="rolunk" style={{ background: 'var(--cream-dark)', padding: '7rem 1.5rem' }}>
      <div ref={ref} style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '5rem', alignItems: 'center',
      }}>

        {/* Image side */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(-40px)',
          transition: 'all 0.8s ease',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', top: -20, left: -20,
            width: '85%', height: '85%',
            border: '1px solid var(--gold-light)',
            borderRadius: 4, zIndex: 0,
          }} />
          <img
            src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=700&q=80&auto=format&fit=crop"
            alt="Szépség Galéria szalon"
            style={{
              width: '100%', aspectRatio: '4/5',
              objectFit: 'cover', borderRadius: 4,
              position: 'relative', zIndex: 1,
              boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
            }}
          />
          {/* Gold badge */}
          <div style={{
            position: 'absolute', bottom: -24, right: -24, zIndex: 2,
            background: 'var(--gold)',
            width: 130, height: 130, borderRadius: '50%',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 8px 30px rgba(184,150,90,0.4)',
          }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'white', lineHeight: 1 }}>10+</span>
            <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.85)', letterSpacing: '0.1em', textTransform: 'uppercase', textAlign: 'center', lineHeight: 1.4 }}>év<br/>tapasztalat</span>
          </div>
        </div>

        {/* Text side */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(40px)',
          transition: 'all 0.8s ease 0.2s',
        }}>
          <p style={{
            fontSize: '0.65rem', letterSpacing: '0.3em',
            textTransform: 'uppercase', color: 'var(--gold)',
            fontWeight: 600, marginBottom: '1rem',
          }}>A mi történetünk</p>

          <h2 style={{
            fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 400, color: 'var(--charcoal)', marginBottom: '1rem', lineHeight: 1.2,
          }}>Dabas szívében, <br /><em>a szépség otthona</em></h2>

          <div style={{ width: 50, height: 1, background: 'var(--gold)', marginBottom: '1.8rem' }} />

          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: '1.2rem' }}>
            A Szépség Galéria Dabas belvárosában egy gondosan megalkotott térben kínál egyedi szépségélményt. Csapatunk szenvedélyesen hisz abban, hogy minden vendég megérdemel egy kis luxust a hétköznapi életben.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: '2.5rem' }}>
            Legyen szó fodrászatról, megfiatalító kozmetikai kezelésről, fejbőr-rituáléról vagy mélyen ellazító masszázsról – nálunk minden percet a pihenésnek és a megújulásnak szentelhet.
          </p>

          {/* Stats */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem', marginBottom: '2.5rem',
          }}>
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'var(--gold-pale)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Icon size={16} color="var(--gold)" />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--charcoal)', lineHeight: 1 }}>{value}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 2 }}>{label}</div>
                </div>
              </div>
            ))}
          </div>

          <a href="https://www.facebook.com/szepseggaleriadabas/" target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              border: '1px solid var(--gold)',
              color: 'var(--gold)',
              padding: '0.75rem 1.8rem',
              fontSize: '0.75rem', letterSpacing: '0.15em',
              textTransform: 'uppercase', fontWeight: 500,
              borderRadius: 2,
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'white' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)' }}
          >
            Kövessen Facebookon
          </a>
        </div>
      </div>
    </section>
  )
}
