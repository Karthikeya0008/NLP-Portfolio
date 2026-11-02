import { groupStars } from './stars'

// Small comic building blocks: stars, chapters, panels, captions, bubbles and sound effects.

export function Star({ color, lit = true, size = 18, label }) {
  return (
    <svg className={`staricon ${lit ? 'lit' : ''}`} viewBox="0 0 20 20" width={size} height={size} style={{ '--g': color }}
      role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
      <path className="star-body" d="M10 1.4l2.6 5.5 6 .8-4.4 4.2 1.1 6L10 15l-5.3 2.9 1.1-6-4.4-4.2 6-.8z" />
      <path className="star-face" d="M10 1.4 12.6 6.9 10 15Z" />
    </svg>
  )
}

export function Chapter({ id, no, title, sub, color, children }) {
  return (
    <section id={id} className="chapter" style={{ '--c': color }} aria-labelledby={`${id}-h`}>
      <div className="wrap">
        <header className="ch-head reveal">
          <span className="ch-no">{no}</span>
          <h2 id={`${id}-h`}>{title}</h2>
          {sub && <p>{sub}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}

export const Panels = ({ children }) => <div className="panels">{children}</div>

export function Panel({ span = 6, tag, sfx, sfxColor, light, className = '', children, ...rest }) {
  return (
    <div className={`panel s${span} reveal ${light ? 'light' : ''} ${tag ? 'tagged' : ''} ${className}`} {...rest}>
      {tag && <span className="caption tag">{tag}</span>}
      {sfx && <span className="sfx" style={sfxColor ? { '--s': sfxColor } : undefined} aria-hidden="true">{sfx}</span>}
      {children}
    </div>
  )
}

export const Label = ({ children }) => <p className="label">{children}</p>

export const Bubble = ({ who, side = 'left', children }) => (
  <blockquote className={`bubble ${side}`}>
    {who && <b>{who}</b>}
    {children}
  </blockquote>
)

export function Award({ stars }) {
  return (
    <ul className="award">
      {groupStars(stars).map((g) => (
        <li key={g.id}>
          <span className="award-stars">{g.stars.map((s) => <Star key={s.id} color={s.color} size={28} />)}</span>
          <span><b>{g.name}{g.stars.length > 1 ? ` ×${g.stars.length}` : ''}</b><small>{g.note}</small></span>
        </li>
      ))}
    </ul>
  )
}
