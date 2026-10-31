import { useRef } from 'react'
import { AppIcon, Glyph } from './icons'

const MIN_W = 360, MIN_H = 240, TASKBAR = 48
const EDGES = ['e', 'w', 's', 'se', 'sw']

export default function Window({ win, app, focused, mobile, onFocus, onClose, onMin, onMax, onChange, children }) {
  const drag = useRef(null)
  const size = useRef(null)

  const down = (e) => {
    if (mobile || e.button !== 0 || e.target.closest('button')) return
    onFocus()
    // A maximised window waits for real movement before restoring, so clicks and double-clicks still work.
    drag.current = win.max ? { pending: true, sx: e.clientX, sy: e.clientY } : { x: e.clientX - win.x, y: e.clientY - win.y }
    e.currentTarget.setPointerCapture(e.pointerId)
  }
  const move = (e) => {
    const d = drag.current
    if (!d) return
    if (d.pending) {
      if (Math.hypot(e.clientX - d.sx, e.clientY - d.sy) < 6) return
      // Dragging a maximised window restores it under the cursor.
      drag.current = { x: win.w / 2, y: d.sy }
      onChange({ max: false, x: e.clientX - win.w / 2, y: e.clientY - d.sy })
      return
    }
    const x = Math.min(Math.max(e.clientX - drag.current.x, -win.w + 120), window.innerWidth - 120)
    const y = Math.min(Math.max(e.clientY - drag.current.y, 0), window.innerHeight - TASKBAR - 40)
    onChange({ x, y })
  }
  const up = (e) => {
    // Dropping a window on the top edge maximises it.
    if (drag.current && e.clientY <= 4) onChange({ max: true })
    drag.current = null
  }

  const rdown = (dir) => (e) => {
    if (e.button !== 0) return
    e.stopPropagation()
    onFocus()
    size.current = { dir, sx: e.clientX, sy: e.clientY, x: win.x, w: win.w, h: win.h }
    e.currentTarget.setPointerCapture(e.pointerId)
  }
  const rmove = (e) => {
    const s = size.current
    if (!s) return
    const dx = e.clientX - s.sx, dy = e.clientY - s.sy, p = {}
    if (s.dir.includes('e')) p.w = Math.max(MIN_W, s.w + dx)
    if (s.dir.includes('w')) { p.w = Math.max(MIN_W, s.w - dx); p.x = s.x + s.w - p.w }
    if (s.dir.includes('s')) p.h = Math.max(MIN_H, Math.min(s.h + dy, window.innerHeight - TASKBAR - win.y))
    onChange(p)
  }
  const rup = () => { size.current = null }

  const style = mobile || win.max ? undefined : { left: win.x, top: win.y, width: win.w, height: win.h }

  return (
    <section
      className={`window ${focused ? 'focused' : ''} ${win.max || mobile ? 'max' : ''}`}
      style={{ ...style, zIndex: win.z }}
      onPointerDown={onFocus}
      aria-label={app.title}
      hidden={win.min}
    >
      <header className="titlebar" onPointerDown={down} onPointerMove={move} onPointerUp={up} onDoubleClick={(e) => !mobile && !e.target.closest('button') && onMax()}>
        {mobile && <button className="back" onClick={onClose} aria-label="Back"><Glyph name="back" size={18} /></button>}
        <div className="wtitle"><AppIcon id={app.id} size={16} /><span>{app.title}</span></div>
        {!mobile && (
          <div className="caption">
            <button onClick={onMin} aria-label={`Minimise ${app.title}`} title="Minimise"><Glyph name="min" /></button>
            <button onClick={onMax} aria-label={`${win.max ? 'Restore' : 'Maximise'} ${app.title}`} title={win.max ? 'Restore down' : 'Maximise'}>
              <Glyph name={win.max ? 'restore' : 'max'} />
            </button>
            <button className="cap-close" onClick={onClose} aria-label={`Close ${app.title}`} title="Close"><Glyph name="close" /></button>
          </div>
        )}
      </header>
      <div className="wbody">{children}</div>
      {!mobile && !win.max && EDGES.map((d) => (
        <div key={d} className={`rz rz-${d}`} onPointerDown={rdown(d)} onPointerMove={rmove} onPointerUp={rup} aria-hidden="true" />
      ))}
    </section>
  )
}
