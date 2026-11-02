import { useEffect, useState } from 'react'
import { CHAPTERS, STARS } from './stars'
import { Star } from './parts'

export default function Nav({ earned }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const k = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', k)
    document.body.classList.add('locked')
    return () => { window.removeEventListener('keydown', k); document.body.classList.remove('locked') }
  }, [open])

  // The sheet sits outside the header: the header's backdrop blur would otherwise contain the fixed sheet.
  return (
    <>
      <header className="nav">
        <a className="brand" href="#cover" onClick={() => setOpen(false)}>The Lexicon</a>
        <nav className="nav-links" aria-label="Chapters">
          {CHAPTERS.map(([id, , , short]) => <a key={id} href={`#${id}`}>{short}</a>)}
        </nav>
        <div className="tracker" role="img" aria-label={`${earned} of ${STARS.length} stars reached so far`} title="Stars earned in class, lit as you read">
          {STARS.map((s, i) => <Star key={s.id} color={s.color} lit={i < earned} size={15} />)}
        </div>
        <button className="menu-btn" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="chapter-menu">
          {open ? 'Close' : 'Chapters'}
        </button>
      </header>
      {open && (
        <div id="chapter-menu" className="sheet">
          <ol>
            {CHAPTERS.map(([id, name, no]) => (
              <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)}><small>{no}</small>{name}</a></li>
            ))}
          </ol>
        </div>
      )}
    </>
  )
}
