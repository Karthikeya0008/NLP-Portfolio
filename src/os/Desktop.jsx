import { useCallback, useEffect, useState } from 'react'
import { APPS, DESKTOP_ORDER } from '../apps/registry'
import { AppIcon, Glyph } from './icons'
import Window from './Window'
import Taskbar from './Taskbar'
import StartMenu from './StartMenu'
import Wallpaper from './Wallpaper'
import { ME } from '../data'
import Avatar from './Avatar'

const useMobile = () => {
  const q = '(max-width: 760px)'
  const [m, setM] = useState(() => window.matchMedia(q).matches)
  useEffect(() => {
    const mq = window.matchMedia(q), f = () => setM(mq.matches)
    mq.addEventListener('change', f); return () => mq.removeEventListener('change', f)
  }, [])
  return m
}

const TASKBAR = 48
let zTop = 10
let cascade = 0

export default function Desktop({ onLock }) {
  const mobile = useMobile()
  const [wins, setWins] = useState([])
  const [now, setNow] = useState(new Date())
  const [start, setStart] = useState(null) // null, 'open' or 'search'
  const [ctx, setCtx] = useState(null)

  useEffect(() => { const t = setInterval(() => setNow(new Date()), 15000); return () => clearInterval(t) }, [])

  const open = useCallback((id) => {
    if (!APPS[id]) return
    setWins((ws) => {
      const ex = ws.find((w) => w.id === id)
      if (ex) return ws.map((w) => (w.id === id ? { ...w, min: false, z: ++zTop } : w))
      const a = APPS[id]
      const vw = window.innerWidth, vh = window.innerHeight - TASKBAR
      const w = Math.min(a.w || 760, vw - 140), h = Math.min(a.h || 560, vh - 40)
      const off = (cascade++ % 6) * 28
      const x = Math.max(120, Math.min((vw - w) / 2 + off - 60, vw - w - 20))
      const y = Math.max(12, Math.min((vh - h) / 2 + off - 40, vh - h - 12))
      return [...ws, { id, x, y, w, h, z: ++zTop, min: false, max: false }]
    })
    setStart(null)
    setCtx(null)
  }, [])

  useEffect(() => { if (!mobile) open('welcome') }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const update = (id, patch) => setWins((ws) => ws.map((w) => (w.id === id ? { ...w, ...patch } : w)))
  const close = (id) => setWins((ws) => ws.filter((w) => w.id !== id))
  const focus = (id) => setWins((ws) => ws.map((w) => (w.id === id ? { ...w, z: ++zTop } : w)))
  const topId = wins.filter((w) => !w.min).sort((a, b) => b.z - a.z)[0]?.id

  // Taskbar buttons minimise the focused app and bring back anything else, as on Windows.
  const taskClick = (id) => {
    const w = wins.find((x) => x.id === id)
    if (w && !w.min && id === topId) update(id, { min: true })
    else open(id)
  }
  const showDesktop = () => {
    setWins((ws) => { const any = ws.some((w) => !w.min); return ws.map((w) => ({ ...w, min: any })) })
    setCtx(null)
  }

  useEffect(() => {
    const k = (e) => {
      if (e.key !== 'Escape') return
      if (start || ctx) { setStart(null); setCtx(null) } else if (topId) close(topId)
    }
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k)
  }, [topId, start, ctx])

  const dismiss = (e) => {
    if (start && !e.target.closest('.startmenu, [data-start]')) setStart(null)
    if (ctx && !e.target.closest('.ctxmenu')) setCtx(null)
  }
  const menu = (e) => {
    if (mobile || e.target.closest('.window, .taskbar, .startmenu')) return
    e.preventDefault()
    setStart(null)
    setCtx({ x: Math.min(e.clientX, window.innerWidth - 236), y: Math.min(e.clientY, window.innerHeight - 220) })
  }

  const visible = mobile ? wins.filter((w) => w.id === topId) : wins
  const time = now.toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit' })

  return (
    <div className="desktop wallpaper" onPointerDown={dismiss} onContextMenu={menu}>
      <Wallpaper />

      {mobile && (
        <>
          <div className="statusbar"><span>{time}</span><span><Glyph name="wifi" /><Glyph name="battery" /></span></div>
          <div className="mwidget">
            <Avatar size={64} />
            <div>
              <b>{ME.name}</b>
              <span className="mono">{ME.reg} · {ME.code}</span>
              <span className="mono amber">★ {ME.stars} stars · IntelliCode 1st place</span>
            </div>
          </div>
        </>
      )}

      <nav className="icons" aria-label="Apps">
        {DESKTOP_ORDER.map((id) => (
          <button key={id} className="dicon" onClick={() => open(id)}>
            <AppIcon id={id} size={mobile ? 56 : 44} />
            <span>{APPS[id].short || APPS[id].title}</span>
          </button>
        ))}
      </nav>

      <div className="watermark" aria-hidden="true">
        <b>Lexicon OS</b>
        <span>Every/DT word/NN has/VBZ structure/NN underneath/RB ./.</span>
      </div>

      {visible.map((w) => {
        const A = APPS[w.id]
        const C = A.component
        return (
          <Window key={w.id} win={w} app={A} mobile={mobile} focused={w.id === topId}
            onFocus={() => focus(w.id)} onClose={() => close(w.id)}
            onMin={() => update(w.id, { min: true })} onMax={() => update(w.id, { max: !w.max })}
            onChange={(p) => update(w.id, p)}>
            <C open={open} />
          </Window>
        )
      })}

      {ctx && (
        <div className="ctxmenu" role="menu" style={{ left: ctx.x, top: ctx.y }}>
          <button role="menuitem" onClick={() => open('terminal')}><AppIcon id="terminal" size={18} /> Open Terminal</button>
          <button role="menuitem" onClick={() => open('playground')}><AppIcon id="playground" size={18} /> NLP Playground</button>
          <button role="menuitem" onClick={showDesktop}><Glyph name="desktop" /> Show desktop</button>
          <hr />
          <button role="menuitem" onClick={() => open('about')}><AppIcon id="about" size={18} /> About {ME.first}</button>
          <button role="menuitem" onClick={onLock}><Glyph name="power" /> Lock</button>
        </div>
      )}

      {!mobile && start && (
        <StartMenu key={start} focusSearch={start === 'search'} onOpen={open} onLock={onLock} />
      )}

      {!mobile && (
        <Taskbar wins={wins} topId={topId} now={now} startOpen={!!start}
          onStart={() => setStart((s) => (s ? null : 'open'))}
          onSearch={() => setStart((s) => (s === 'search' ? null : 'search'))}
          onApp={taskClick} onShowDesktop={showDesktop} />
      )}
    </div>
  )
}
