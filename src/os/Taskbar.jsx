import { APPS, DOCK_ORDER } from '../apps/registry'
import { ME } from '../data'
import { AppIcon, Glyph, Logo } from './icons'

export default function Taskbar({ wins, topId, now, startOpen, onStart, onSearch, onApp, onShowDesktop }) {
  // Pinned apps first, then anything running that is not pinned.
  const items = [...DOCK_ORDER, ...wins.map((w) => w.id).filter((id) => !DOCK_ORDER.includes(id))]

  return (
    <footer className="taskbar" role="toolbar" aria-label="Taskbar">
      <button className="tb-widget" onClick={() => onApp('timeline')} title="Open the timeline">
        <Glyph name="star" size={20} />
        <span><b>{ME.stars} stars earned</b><small>{ME.code} · Slot {ME.slot}</small></span>
      </button>

      <div className="tb-center">
        <button data-start className={`tb-btn ${startOpen ? 'on' : ''}`} onClick={onStart} aria-label="Start" aria-expanded={startOpen} title="Start">
          <Logo size={24} />
        </button>
        <button data-start className="tb-search" onClick={onSearch} aria-label="Search">
          <Glyph name="search" /><span>Search</span>
        </button>
        {items.map((id) => {
          const w = wins.find((x) => x.id === id)
          const state = !w ? '' : id === topId ? 'active' : 'running'
          return (
            <button key={id} className={`tb-btn ${state}`} onClick={() => onApp(id)} title={APPS[id].title} aria-label={APPS[id].title}>
              <AppIcon id={id} size={26} />
            </button>
          )
        })}
      </div>

      <div className="tb-tray">
        <span className="tray-icons" aria-hidden="true"><Glyph name="wifi" /><Glyph name="volume" /><Glyph name="battery" /></span>
        <span className="tray-clock">
          <span>{now.toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit' })}</span>
          <span>{now.toLocaleDateString('en-IN')}</span>
        </span>
        <button className="tb-peek" onClick={onShowDesktop} aria-label="Show desktop" title="Show desktop" />
      </div>
    </footer>
  )
}
