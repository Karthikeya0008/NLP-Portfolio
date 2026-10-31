// Abstract "bloom" wallpaper: translucent petals fanning out of a soft glow, drawn in SVG.
const PETALS = [
  { r: -66, s: 0.72, g: 'a', o: 0.5 },
  { r: -40, s: 0.9, g: 'b', o: 0.62 },
  { r: -14, s: 1.06, g: 'c', o: 0.75 },
  { r: 12, s: 1.02, g: 'b', o: 0.66 },
  { r: 38, s: 0.9, g: 'd', o: 0.6 },
  { r: 64, s: 0.72, g: 'a', o: 0.5 },
]
const PETAL = 'M0 0C150 -90 250 -300 0 -460C-250 -300 -150 -90 0 0Z'

const grad = (id, from, to) => (
  <linearGradient id={`wp-${id}`} x1="0.5" y1="1" x2="0.5" y2="0">
    <stop offset="0" stopColor={from} stopOpacity="0.15" />
    <stop offset="0.55" stopColor={from} stopOpacity="0.7" />
    <stop offset="1" stopColor={to} stopOpacity="0.95" />
  </linearGradient>
)

export default function Wallpaper() {
  return (
    <svg className="wp" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="wp-bg" cx="50%" cy="68%" r="80%">
          <stop offset="0" stopColor="#123049" />
          <stop offset="0.5" stopColor="#0A1528" />
          <stop offset="1" stopColor="#04070D" />
        </radialGradient>
        {grad('a', '#1E4E7A', '#5CC8BE')}
        {grad('b', '#2D3F9E', '#7CC4FF')}
        {grad('c', '#245E8C', '#B6F0E8')}
        {grad('d', '#7A3B4A', '#F2C14E')}
        <filter id="wp-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="70" /></filter>
      </defs>
      <rect width="1600" height="1000" fill="url(#wp-bg)" />
      <ellipse cx="800" cy="600" rx="430" ry="250" fill="#2A86B8" opacity="0.38" filter="url(#wp-glow)" />
      <ellipse cx="930" cy="470" rx="220" ry="160" fill="#F2C14E" opacity="0.12" filter="url(#wp-glow)" />
      <g transform="translate(800 660)">
        {PETALS.map((p, i) => (
          <path key={i} d={PETAL} transform={`rotate(${p.r}) scale(${p.s})`} fill={`url(#wp-${p.g})`} opacity={p.o}
            stroke="rgba(255,255,255,0.28)" strokeWidth="1.2" style={{ mixBlendMode: 'screen' }} />
        ))}
      </g>
    </svg>
  )
}
