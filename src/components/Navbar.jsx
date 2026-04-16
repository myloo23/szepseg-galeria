import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Szolgáltatások', href: '#szolgaltatasok' },
  { label: 'Rólunk', href: '#rolunk' },
  { label: 'Galéria', href: '#galeria' },
  { label: 'Vélemények', href: '#velemenyek' },
  { label: 'Kapcsolat', href: '#kapcsolat' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      transition: 'all 0.4s ease',
      background: scrolled ? 'rgba(250,248,245,0.97)' : 'transparent',
      boxShadow: scrolled ? '0 1px 30px rgba(0,0,0,0.07)' : 'none',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
    }}>
      <nav style={{
        maxWidth: 1200, margin: '0 auto',
        padding: '0 2rem',
        height: scrolled ? 72 : 88,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'height 0.4s ease',
      }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.55rem',
            letterSpacing: '0.06em',
            color: 'var(--charcoal)',
            fontWeight: 400,
          }}>Szépség Galéria</span>
          <span style={{
            fontSize: '0.65rem',
            letterSpacing: '0.22em',
            color: 'var(--gold)',
            textTransform: 'uppercase',
            fontWeight: 500,
          }}>Dabas</span>
        </a>

        {/* Desktop links */}
        <ul style={{
          display: 'flex', gap: '2.5rem', listStyle: 'none',
          alignItems: 'center',
        }} className="desktop-nav">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} style={{
                fontSize: '0.8rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--charcoal-light)',
                fontWeight: 500,
                transition: 'color 0.2s',
                position: 'relative',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--gold)'}
              onMouseLeave={e => e.target.style.color = 'var(--charcoal-light)'}
              >{link.label}</a>
            </li>
          ))}
          <li>
            <a href="#kapcsolat" style={{
              background: 'var(--gold)',
              color: 'var(--white)',
              padding: '0.55rem 1.4rem',
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 500,
              borderRadius: 2,
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.target.style.background = 'var(--charcoal)'}
            onMouseLeave={e => e.target.style.background = 'var(--gold)'}
            >Foglalás</a>
          </li>
        </ul>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', color: 'var(--charcoal)' }}
          className="burger-btn"
          aria-label="Menü"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(250,248,245,0.98)',
          backdropFilter: 'blur(12px)',
          padding: '1.5rem 2rem 2rem',
          borderTop: '1px solid var(--cream-dark)',
        }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontSize: '1rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--charcoal)',
                    fontWeight: 500,
                  }}>{link.label}</a>
              </li>
            ))}
            <li>
              <a href="#kapcsolat"
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'inline-block',
                  background: 'var(--gold)',
                  color: 'var(--white)',
                  padding: '0.65rem 1.6rem',
                  fontSize: '0.8rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  borderRadius: 2,
                }}>Foglalás</a>
            </li>
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .burger-btn { display: block !important; }
        }
      `}</style>
    </header>
  )
}
