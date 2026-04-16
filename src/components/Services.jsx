import { useEffect, useRef, useState } from 'react'
import { Scissors, Droplets, Sparkles, Hand } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'Fodrászat',
    subtitle: 'Hajformázás & Festés',
    desc: 'Haj- és szakáll vágás, kreatív festési technikák – balayage, ombre, highlights – és prémium hajápolási kezelések. Egyedi stíluslap az Ön arcformájához és életviteléhez igazítva.',
    items: ['Hajvágás & formázás', 'Balayage & ombre', 'Tartós hajformázás', 'Hajápolási kezelések'],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80&auto=format&fit=crop',
    color: '#B8965A',
  },
  {
    icon: Droplets,
    title: 'HeadSpa',
    subtitle: 'Fejbőr & Relaxáció',
    desc: 'Japán inspirációjú fejbőr-rituálé, amely megújítja a hajat és felszabadítja a feszültséget. Mélytisztítás, vérkeringés-fokozás és tápanyag-utánpótlás egyszerre.',
    items: ['Fejbőr diagnózis', 'Mélytisztító kezelés', 'Fejmasszázs', 'Tápláló hajpakolás'],
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&q=80&auto=format&fit=crop',
    color: '#8FA8A0',
  },
  {
    icon: Sparkles,
    title: 'Kozmetika',
    subtitle: 'Arckezelések & Bőrápolás',
    desc: 'Személyre szabott arckezelések, bőranalízissel megalapozva. Prémium termékekkel dolgozunk, hogy bőre sugárzó, fiatalos és egészséges legyen minden évszakban.',
    items: ['Arcdiagnózis', 'Mélytisztító arctisztítás', 'Anti-aging kezelések', 'Szemöldök & szempilla'],
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80&auto=format&fit=crop',
    color: '#C4A09E',
  },
  {
    icon: Hand,
    title: 'Masszázs',
    subtitle: 'Test & Lélek',
    desc: 'Professzionális masszázskezelések, amelyek oldják az izomfeszültséget, javítják a vérkeringést és visszaadják a belső egyensúlyt. Teljes test-, hát- és talpasszázs.',
    items: ['Relaxáló masszázs', 'Stresszoldó hátmasszázs', 'Talpasszázs', 'Aromaterápia'],
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80&auto=format&fit=crop',
    color: '#A0967A',
  },
]

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const Icon = service.icon

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(40px)',
      transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s`,
      background: 'var(--white)',
      borderRadius: 4,
      overflow: 'hidden',
      boxShadow: '0 4px 40px rgba(0,0,0,0.06)',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Image */}
      <div style={{ position: 'relative', height: 220, overflow: 'hidden' }}>
        <img src={service.image} alt={service.title} style={{
          width: '100%', height: '100%', objectFit: 'cover',
          transition: 'transform 0.6s ease',
        }}
        onMouseEnter={e => e.target.style.transform = 'scale(1.06)'}
        onMouseLeave={e => e.target.style.transform = 'scale(1)'}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(to top, rgba(28,28,28,0.5) 0%, transparent 60%)`,
        }} />
        <div style={{
          position: 'absolute', bottom: '1rem', left: '1.2rem',
          display: 'flex', alignItems: 'center', gap: '0.6rem',
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: '50%',
            background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '1px solid rgba(255,255,255,0.3)',
          }}>
            <Icon size={16} color="white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '1.8rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{
          display: 'inline-block',
          fontSize: '0.6rem', letterSpacing: '0.2em',
          textTransform: 'uppercase', color: service.color,
          fontWeight: 600, marginBottom: '0.5rem',
        }}>{service.subtitle}</div>

        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.6rem', fontWeight: 400,
          color: 'var(--charcoal)', marginBottom: '0.8rem',
        }}>{service.title}</h3>

        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '1.4rem', flex: 1 }}>
          {service.desc}
        </p>

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {service.items.map(item => (
            <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.82rem', color: 'var(--charcoal-light)' }}>
              <span style={{ width: 16, height: 1, background: service.color, display: 'block', flexShrink: 0 }} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Services() {
  const titleRef = useRef(null)
  const [titleVisible, setTitleVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTitleVisible(true) }, { threshold: 0.2 })
    if (titleRef.current) obs.observe(titleRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="szolgaltatasok" style={{ padding: '7rem 1.5rem', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Section header */}
        <div ref={titleRef} style={{
          textAlign: 'center', marginBottom: '4.5rem',
          opacity: titleVisible ? 1 : 0,
          transform: titleVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.7s ease',
        }}>
          <p style={{
            fontSize: '0.65rem', letterSpacing: '0.3em',
            textTransform: 'uppercase', color: 'var(--gold)',
            fontWeight: 600, marginBottom: '1rem',
          }}>Kezelések</p>
          <h2 style={{
            fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 400, color: 'var(--charcoal)', marginBottom: '1.2rem',
          }}>Szolgáltatásaink</h2>
          <div style={{ width: 60, height: 1, background: 'var(--gold)', margin: '0 auto 1.2rem' }} />
          <p style={{ maxWidth: 540, margin: '0 auto', fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
            Minden kezelésünk egyedileg van összeállítva az Ön igényeire. A minőségi termékek és a szakértő kezek garantálják a tökéletes eredményt.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem',
        }}>
          {services.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}
        </div>
      </div>
    </section>
  )
}
