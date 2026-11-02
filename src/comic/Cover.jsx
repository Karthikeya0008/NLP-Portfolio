import { ME, PORTRAIT } from '../data'
import { CHAPTERS, STARS, groupStars } from './stars'
import { Star } from './parts'

const chapterOf = (at) => ({ verse: 'Chapter 3', crisisbridge: 'Chapter 5' })[at] || 'Chapter 2'
const activities = new Set(STARS.map((s) => s.at)).size

export default function Cover() {
  return (
    <section id="cover" className="cover">
      <div className="wrap cover-grid">
        <div className="cover-text">
          <p className="issue">Issue #1 · {ME.code} · {ME.college} · 2026</p>
          <h1 className="masthead">
            <span className="the">The <span className="kind">NLP Portfolio</span></span>
            <span className="word" aria-hidden="true">{[...'LEXICON'].map((ch, i) => <span key={i} style={{ '--i': i }}>{ch}</span>)}</span>
            <span className="sr">Lexicon</span>
          </h1>
          <p className="tagline">An origin story in seven stars</p>
          <p className="lede">
            I'm {ME.name}, and this is my portfolio for {ME.course} ({ME.code}). Every chapter is real coursework:
            the assessment I topped, the Telugu verse I translated, the disaster response system we built and the codeathon my team won.
          </p>
          <p className="meta mono">{ME.reg} · {ME.semester} · Slot {ME.slot} · {ME.faculty}</p>
          <div className="cta">
            <a className="btn primary" href={`#${CHAPTERS[0][0]}`}>Begin the story</a>
            <a className="btn" href="#training">Go to the Training Ground</a>
          </div>
        </div>

        <div className="cover-art">
          <div className="portrait">
            <img src={PORTRAIT} alt={ME.name} />
          </div>
          <p className="bubble cover-bubble">Every word has structure underneath.</p>
        </div>
      </div>

      <div className="wrap">
        <div className="vault">
          <p className="label">Seven stars, each earned in class</p>
          <ul>
            {groupStars(STARS).map((g) => (
              <li key={g.id}>
                <a href={`#${g.at}`} style={{ '--g': g.color }}>
                  <span className="vault-stars">{g.stars.map((s) => <Star key={s.id} color={s.color} size={26} />)}</span>
                  <b>{g.name}</b>
                  <small>{chapterOf(g.at)}</small>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <dl className="stats">
          <div><dt>Stars earned</dt><dd>{ME.stars}</dd></div>
          <div><dt>Starred activities</dt><dd>{activities}</dd></div>
          <div><dt>Public repos</dt><dd>2</dd></div>
          <div><dt>Codeathon place</dt><dd>1st</dd></div>
        </dl>
      </div>
    </section>
  )
}
