// Hand-drawn app glyphs, 24x24 stroke icons placed on coloured tiles.
const P = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }

const glyphs = {
  welcome: <><path {...P} d="M4 11.5 12 5l8 6.5" /><path {...P} d="M6.5 10v9h11v-9" /><path {...P} d="M10.5 19v-4.5h3V19" /></>,
  about: <><circle {...P} cx="12" cy="8.5" r="3.5" /><path {...P} d="M5 19.5c1.2-3.6 4-5.5 7-5.5s5.8 1.9 7 5.5" /></>,
  cat1: <><path {...P} d="M7 3.5h7l4 4V20.5H7z" /><path {...P} d="M14 3.5v4h4" /><path {...P} d="m9.5 14 2 2 3.5-4" /></>,
  med: <><rect {...P} x="4" y="4" width="16" height="16" rx="2" /><path {...P} d="M4 9.3h16M4 14.6h16M9.3 4v16M14.6 4v16" /><path {...P} d="m5.5 5.5 3 3 5.5 5.5 4.5 4.5" strokeWidth="2.4" /></>,
  translation: <><path {...P} d="M4 6h8M8 4v2M6 6c.5 3 2.5 5 5 6M10 6c-.7 3-2.7 5.4-6 6.5" /><path {...P} d="m12.5 20 3.5-8 3.5 8M13.6 17.5h4.8" /></>,
  playground: <><path {...P} d="M9 3.5v6L4.5 18a1.6 1.6 0 0 0 1.4 2.5h12.2a1.6 1.6 0 0 0 1.4-2.5L15 9.5v-6" /><path {...P} d="M8 3.5h8M7 14.5h10" /></>,
  projects: <><path {...P} d="M3.5 7.5a2 2 0 0 1 2-2h4l2 2.2h7a2 2 0 0 1 2 2v8.8a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z" /><path {...P} d="m10 13-1.6 1.6L10 16.2M14 13l1.6 1.6-1.6 1.6" /></>,
  trophies: <><path {...P} d="M8 4h8v5a4 4 0 0 1-8 0z" /><path {...P} d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v3.5M8.5 20h7M9.5 20l.8-3.5h3.4l.8 3.5" /></>,
  timeline: <><path {...P} d="M12 3v18" /><circle {...P} cx="12" cy="6.5" r="1.6" /><circle {...P} cx="12" cy="12" r="1.6" /><circle {...P} cx="12" cy="17.5" r="1.6" /><path {...P} d="M14 6.5h5M5 12h5M14 17.5h4" /></>,
  syllabus: <><path {...P} d="M4 5.5 9 4l6 2 5-1.5v14L15 20l-6-2-5 1.5z" /><path {...P} d="M9 4v14M15 6v14" /></>,
  reflection: <><path {...P} d="M6 3.5h12v17H6z" /><path {...P} d="M9 8h6M9 11.5h6M9 15h4" /></>,
  terminal: <><rect {...P} x="3.5" y="5" width="17" height="14" rx="2" /><path {...P} d="m7.5 10 2.5 2-2.5 2M12.5 14.5h4" /></>,
}

export const APP_COLORS = {
  welcome: '#3E6F6A', about: '#9B5D2E', cat1: '#2F5D8A', med: '#6B4E9B', translation: '#A8453F', playground: '#2E7D5B',
  projects: '#8A6A1F', trophies: '#B8862B', timeline: '#386C8C', syllabus: '#5B6B2E', reflection: '#6C5A4E', terminal: '#1E2A30',
}

export function AppIcon({ id, size = 52 }) {
  return (
    <span className="appicon" style={{ width: size, height: size, backgroundColor: APP_COLORS[id] }} aria-hidden="true">
      <svg viewBox="0 0 24 24" width={size * 0.56} height={size * 0.56}>{glyphs[id]}</svg>
    </span>
  )
}

// 16x16 system glyphs for window captions, taskbar and tray.
const G = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.2, strokeLinecap: 'round', strokeLinejoin: 'round' }

const sys = {
  min: <path {...G} d="M3.5 8h9" />,
  max: <rect {...G} x="3.5" y="3.5" width="9" height="9" rx="1.5" />,
  restore: <><rect {...G} x="3.5" y="5.5" width="7" height="7" rx="1.2" /><path {...G} d="M5.5 5.5v-.7c0-.7.6-1.3 1.3-1.3h4.4c.7 0 1.3.6 1.3 1.3v4.4c0 .7-.6 1.3-1.3 1.3h-.7" /></>,
  close: <path {...G} d="m4 4 8 8M12 4l-8 8" />,
  back: <path {...G} strokeWidth="1.6" d="M10 3.5 5.5 8l4.5 4.5" />,
  search: <><circle {...G} cx="7" cy="7" r="4.2" /><path {...G} d="m10.2 10.2 3.3 3.3" /></>,
  wifi: <><path {...G} d="M1.8 6.2a9 9 0 0 1 12.4 0M3.9 8.4a6 6 0 0 1 8.2 0M6 10.6a3 3 0 0 1 4 0" /><circle cx="8" cy="12.6" r=".9" fill="currentColor" /></>,
  volume: <><path {...G} d="M2.5 6.2h2.2L8 3.5v9L4.7 9.8H2.5z" /><path {...G} d="M10.5 5.8a3 3 0 0 1 0 4.4M12.3 4a5.6 5.6 0 0 1 0 8" /></>,
  battery: <><rect {...G} x="1.5" y="4.8" width="11.5" height="6.4" rx="1.5" /><path {...G} d="M14.5 7v2" /><rect x="3" y="6.3" width="7.2" height="3.4" rx=".6" fill="currentColor" /></>,
  power: <><path {...G} d="M8 2.5v5" /><path {...G} d="M4.8 4.6a4.8 4.8 0 1 0 6.4 0" /></>,
  desktop: <><rect {...G} x="2" y="3" width="12" height="8.5" rx="1.2" /><path {...G} d="M6 14h4M8 11.5V14" /></>,
  star: <path d="m8 1.8 1.85 3.9 4.25.55-3.1 2.95.78 4.2L8 11.35 4.22 13.4 5 9.2 1.9 6.25l4.25-.55z" fill="currentColor" />,
}

export const Glyph = ({ name, size = 16 }) => (
  <svg className="glyph" viewBox="0 0 16 16" width={size} height={size} aria-hidden="true">{sys[name]}</svg>
)

export function Logo({ size = 24 }) {
  return (
    <svg className="logo" viewBox="0 0 32 32" width={size} height={size} aria-hidden="true">
      <defs>
        <linearGradient id="lx-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#FFD976" /><stop offset="1" stopColor="#E59A35" /></linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#lx-g)" />
      <text x="16" y="21.5" textAnchor="middle" fontFamily="'Geist Mono', ui-monospace, monospace" fontSize="14" fontWeight="700" fill="#1A1405">Lx</text>
    </svg>
  )
}
