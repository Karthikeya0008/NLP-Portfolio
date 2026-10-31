import { useEffect, useRef, useState } from 'react'
import { APPS, DESKTOP_ORDER } from '../apps/registry'
import { ME, TIMELINE } from '../data'
import { AppIcon, Glyph } from './icons'
import Avatar from './Avatar'

const RECENT = TIMELINE.slice(-6).reverse()

const Row = ({ id, title, sub, onOpen }) => (
  <button className="sm-row" onClick={() => onOpen(id)}>
    <AppIcon id={id} size={32} />
    <span><b>{title}</b><small>{sub}</small></span>
  </button>
)

export default function StartMenu({ focusSearch, onOpen, onLock }) {
  const [q, setQ] = useState('')
  const input = useRef(null)
  useEffect(() => { if (focusSearch) input.current?.focus() }, [focusSearch])

  const s = q.trim().toLowerCase()
  const apps = s ? DESKTOP_ORDER.filter((id) => APPS[id].title.toLowerCase().includes(s)) : []
  const notes = s ? TIMELINE.filter((t) => `${t.title} ${t.text}`.toLowerCase().includes(s)) : []

  const submit = (e) => {
    e.preventDefault()
    const first = apps[0] ?? notes[0]?.app
    if (first) onOpen(first)
  }

  return (
    <div className="startmenu" role="dialog" aria-label="Start">
      <div className="sm-main">
        <form className="sm-search" onSubmit={submit}>
          <Glyph name="search" />
          <input ref={input} value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search apps and highlights" aria-label="Search apps and highlights" />
        </form>

        {s ? (
          <section>
            <div className="sm-sec"><b>Results</b></div>
            <div className="sm-list">
              {apps.map((id) => <Row key={id} id={id} title={APPS[id].title} sub="App" onOpen={onOpen} />)}
              {notes.map((t) => <Row key={t.title} id={t.app} title={t.title} sub={t.date} onOpen={onOpen} />)}
              {apps.length + notes.length === 0 && <p className="muted small sm-empty">No results for "{q.trim()}".</p>}
            </div>
          </section>
        ) : (
          <>
            <section>
              <div className="sm-sec"><b>Pinned</b></div>
              <div className="sm-grid">
                {DESKTOP_ORDER.map((id) => (
                  <button key={id} onClick={() => onOpen(id)}><AppIcon id={id} size={36} /><span>{APPS[id].short || APPS[id].title}</span></button>
                ))}
              </div>
            </section>
            <section>
              <div className="sm-sec"><b>Recommended</b></div>
              <div className="sm-rec">
                {RECENT.map((t) => <Row key={t.title} id={t.app} title={t.title} sub={t.date} onOpen={onOpen} />)}
              </div>
            </section>
          </>
        )}
      </div>

      <div className="sm-foot">
        <button className="sm-user" onClick={() => onOpen('about')}>
          <Avatar size={32} />
          <span><b>{ME.name}</b><small className="mono">{ME.reg}</small></span>
        </button>
        <button className="sm-power" onClick={onLock} aria-label="Lock" title="Lock"><Glyph name="power" size={18} /></button>
      </div>
    </div>
  )
}
