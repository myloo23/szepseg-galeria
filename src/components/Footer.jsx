export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{
      background: '#111',
      padding: '3rem 1.5rem',
      borderTop: '1px solid rgba(184,150,90,0.15)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'flex', flexWrap: 'wrap',
        alignItems: 'center', justifyContent: 'space-between',
        gap: '1.5rem',
      }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-heading)', fontSize: '1.3rem',
            color: 'var(--white)', letterSpacing: '0.06em', marginBottom: 4,
          }}>Szépség Galéria</div>
          <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase' }}>Dabas · Pesti út 4.</div>
        </div>

        <div style={{ display: 'flex', gap: '2rem' }}>
          {['Fodrászat','HeadSpa','Kozmetika','Masszázs'].map(s => (
            <a key={s} href="#szolgaltatasok" style={{
              fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)',
              letterSpacing: '0.08em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--gold)'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
            >{s}</a>
          ))}
        </div>

        <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.05em' }}>
          © {year} Szépség Galéria Dabas. Minden jog fenntartva.
        </div>
      </div>
    </footer>
  )
}
