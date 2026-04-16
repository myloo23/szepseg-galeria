import { useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: 620, overflow: 'hidden' }}>
      {/* Background */}
      <div ref={heroRef} style={{
        position: 'absolute', inset: '-20%',
        background: `
          linear-gradient(160deg, rgba(28,28,28,0.72) 0%, rgba(28,28,28,0.45) 50%, rgba(184,150,90,0.3) 100%),
          url('https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1800&q=85&auto=format&fit=crop') center/cover no-repeat
        `,
        willChange: 'transform',
      }} />

      {/* Decorative line */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 1, height: '20%', background: 'linear-gradient(to bottom, transparent, rgba(184,150,90,0.5))',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        height: '100%', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '0 1.5rem',
      }}>
        <p className="animate-fadeIn" style={{
          fontSize: '0.7rem', letterSpacing: '0.35em',
          textTransform: 'uppercase', color: 'var(--gold-light)',
          fontFamily: 'var(--font-body)', fontWeight: 500,
          marginBottom: '1.5rem',
        }}>
          Dabas · Pesti út 4.
        </p>

        <h1 className="animate-fadeInUp delay-1" style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          fontWeight: 300,
          color: 'var(--white)',
          letterSpacing: '0.04em',
          lineHeight: 1.05,
          marginBottom: '0.4rem',
        }}>
          Szépség Galéria
        </h1>

        <div className="animate-fadeInUp delay-2" style={{
          display: 'flex', alignItems: 'center', gap: '1rem',
          marginBottom: '1.8rem',
        }}>
          <div style={{ width: 50, height: 1, background: 'var(--gold-light)' }} />
          <p style={{
            fontFamily: 'var(--font-heading)', fontStyle: 'italic',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            color: 'rgba(255,255,255,0.85)', letterSpacing: '0.06em', fontWeight: 300,
          }}>
            Ahol a szépség találkozik a nyugalommal
          </p>
          <div style={{ width: 50, height: 1, background: 'var(--gold-light)' }} />
        </div>

        <p className="animate-fadeInUp delay-3" style={{
          fontSize: '0.75rem', letterSpacing: '0.2em',
          textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)',
          fontWeight: 300, marginBottom: '3rem',
        }}>
          Fodrászat &nbsp;·&nbsp; HeadSpa &nbsp;·&nbsp; Kozmetika &nbsp;·&nbsp; Masszázs
        </p>

        <div className="animate-fadeInUp delay-4" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#kapcsolat" style={{
            background: 'var(--gold)',
            color: 'var(--white)',
            padding: '0.9rem 2.4rem',
            fontSize: '0.75rem', letterSpacing: '0.18em',
            textTransform: 'uppercase', fontWeight: 500,
            borderRadius: 2,
            transition: 'all 0.3s ease',
            border: '1px solid var(--gold)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--white)' }}
          >Időpontfoglalás</a>

          <a href="#szolgaltatasok" style={{
            background: 'transparent',
            color: 'var(--white)',
            padding: '0.9rem 2.4rem',
            fontSize: '0.75rem', letterSpacing: '0.18em',
            textTransform: 'uppercase', fontWeight: 500,
            borderRadius: 2,
            border: '1px solid rgba(255,255,255,0.4)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.8)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)' }}
          >Szolgáltatások</a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
        animation: 'fadeIn 2s ease 1.5s both',
      }}>
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>Görgess</span>
        <ChevronDown size={16} color="rgba(255,255,255,0.5)" style={{ animation: 'fadeInUp 1s ease infinite alternate' }} />
      </div>

      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 120,
        background: 'linear-gradient(to top, var(--cream), transparent)',
      }} />
    </section>
  )
}
