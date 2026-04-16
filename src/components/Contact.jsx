import { MapPin, Clock, Phone, Facebook } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const hours = [
  { day: 'Hétfő – Péntek', time: '9:00 – 19:00' },
  { day: 'Szombat', time: '9:00 – 16:00' },
  { day: 'Vasárnap', time: 'Zárva' },
]

export default function Contact() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="kapcsolat" style={{ padding: '7rem 1.5rem', background: 'var(--cream-dark)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <p style={{
            fontSize: '0.65rem', letterSpacing: '0.3em',
            textTransform: 'uppercase', color: 'var(--gold)',
            fontWeight: 600, marginBottom: '1rem',
          }}>Várjuk Önt</p>
          <h2 style={{
            fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 400, color: 'var(--charcoal)', marginBottom: '1rem',
          }}>Kapcsolat & Időpontfoglalás</h2>
          <div style={{ width: 60, height: 1, background: 'var(--gold)', margin: '0 auto 1.2rem' }} />
          <p style={{ maxWidth: 480, margin: '0 auto', fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
            Foglaljon időpontot Facebookon keresztül, vagy keressen minket telefonon. Örömmel várjuk!
          </p>
        </div>

        <div ref={ref} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem', alignItems: 'start',
        }}>

          {/* Info cards */}
          <div style={{
            display: 'flex', flexDirection: 'column', gap: '1.5rem',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s ease',
          }}>
            {[
              {
                icon: MapPin, color: '#B8965A',
                title: 'Cím',
                content: '2370 Dabas, Pesti út 4.',
                sub: 'Könnyen megközelíthető parkolóval',
              },
              {
                icon: Clock, color: '#8FA8A0',
                title: 'Nyitvatartás',
                content: null,
                hours: true,
              },
              {
                icon: Facebook, color: '#4267B2',
                title: 'Facebook',
                content: 'Szépség Galéria Dabas',
                link: 'https://www.facebook.com/szepseggaleriadabas/',
                sub: 'Üzenjen nekünk időpontfoglaláshoz',
              },
            ].map(({ icon: Icon, color, title, content, sub, hours: showHours, link }) => (
              <div key={title} style={{
                background: 'var(--white)',
                borderRadius: 4, padding: '1.6rem',
                display: 'flex', gap: '1.2rem', alignItems: 'flex-start',
                boxShadow: '0 2px 20px rgba(0,0,0,0.05)',
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
                  background: `${color}18`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={18} color={color} />
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600 }}>{title}</div>
                  {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer"
                      style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: color, display: 'block', marginBottom: '0.2rem' }}>
                      {content}
                    </a>
                  ) : (
                    content && <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: 'var(--charcoal)', marginBottom: '0.2rem' }}>{content}</div>
                  )}
                  {showHours && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', marginTop: '0.2rem' }}>
                      {hours.map(h => (
                        <div key={h.day} style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', fontSize: '0.82rem' }}>
                          <span style={{ color: 'var(--charcoal-light)' }}>{h.day}</span>
                          <span style={{ color: h.time === 'Zárva' ? '#C4A09E' : 'var(--gold)', fontWeight: 500 }}>{h.time}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {sub && <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{sub}</div>}
                </div>
              </div>
            ))}
          </div>

          {/* Map + CTA */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s ease 0.2s',
            display: 'flex', flexDirection: 'column', gap: '1.5rem',
          }}>
            {/* Map embed */}
            <div style={{ borderRadius: 4, overflow: 'hidden', boxShadow: '0 4px 30px rgba(0,0,0,0.1)', height: 300 }}>
              <iframe
                title="Szépség Galéria térkép"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2704.5!2d19.0851!3d47.1863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741f0b0b0b0b0b1%3A0x1!2sPesti+%C3%BAt+4%2C+Dabas%2C+2370!5e0!3m2!1shu!2shu!4v1234567890"
                width="100%" height="100%"
                style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* CTA box */}
            <div style={{
              background: 'var(--charcoal)',
              borderRadius: 4, padding: '2rem',
              textAlign: 'center',
            }}>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.6rem', fontWeight: 400,
                color: 'var(--white)', marginBottom: '0.6rem',
              }}>Foglaljon most!</h3>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Írjon nekünk Facebookon és mi 24 órán belül visszajelzünk az elérhető időpontokkal.
              </p>
              <a href="https://www.facebook.com/szepseggaleriadabas/" target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: 'var(--gold)', color: 'white',
                  padding: '0.9rem 2.2rem',
                  fontSize: '0.75rem', letterSpacing: '0.18em',
                  textTransform: 'uppercase', fontWeight: 500,
                  borderRadius: 2,
                  transition: 'background 0.25s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--gold-light)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--gold)'}
              >
                Üzenjen Facebookon
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
