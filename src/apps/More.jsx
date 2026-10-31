import { COURSE_OUTCOMES, IMAGES, NLTK_FILES, SYLLABUS, TIMELINE } from '../data'
import { APPS } from './registry'
import { Block, Chip, Doc, Photos, Tabs } from './ui'

function Nltk() {
  return (
    <div className="stack">
      <p>Alongside the hands-on sessions, I worked through most of the NLTK library and practised each module with code, one script per topic. Comments are written in transliterated Telugu, the way I take notes.</p>
      <div className="files">
        <div className="fileshead mono"><span>Name</span><span>Date</span><span>About</span></div>
        {NLTK_FILES.map(([f, d, a]) => (
          <div key={f} className="file"><span className="mono"><i className="py">py</i>{f}</span><span className="mono muted">{d}</span><span>{a}</span></div>
        ))}
      </div>
      <a className="repo" href="https://github.com/Karthikeya0008/NLP-Practice" target="_blank" rel="noreferrer">github.com/Karthikeya0008/NLP-Practice ↗</a>
    </div>
  )
}

function Crisis() {
  const steps = [
    ['Ingest', 'Disaster posts and news feeds'],
    ['Classify', 'Humanitarian category, trained on HumAID'],
    ['Extract', 'NER: places, people, resources'],
    ['Prioritise', 'Urgency score per post'],
    ['Index', 'Embeddings in a vector store'],
    ['Answer', 'RAG with cited sources'],
  ]
  return (
    <div className="stack">
      <p>I missed the group work session on health maps and transport data. In its place, I took the CrisisBridge AI project, suggested by my faculty, to a higher level. The system reads disaster posts, works out what happened, where, who needs help and how urgently, and answers responders' questions with sources cited.</p>
      <ol className="pipe">
        {steps.map(([t, d]) => <li key={t}><b>{t}</b><span>{d}</span></li>)}
      </ol>
      <Block label="NLP techniques used">
        <ul className="ticks">
          <li>Text classification into humanitarian categories, trained on the HumAID dataset</li>
          <li>Named entity recognition to extract locations, people and resources</li>
          <li>Urgency scoring of each post</li>
          <li>Retrieval-Augmented Generation over a vector index, so answers are grounded in real reports</li>
        </ul>
      </Block>
      <p>I am also drafting a research paper on the project in IEEE style, and with my faculty's approval I would like to submit it to a conference.</p>
      <a className="repo" href="https://github.com/Karthikeya0008/Crisis-Bridge-AI" target="_blank" rel="noreferrer">github.com/Karthikeya0008/Crisis-Bridge-AI ↗</a>
    </div>
  )
}

export function Projects() {
  return (
    <div className="doc">
      <header className="dochead"><p className="eyebrow">Beyond the classroom</p><h2>Projects</h2></header>
      <Tabs tabs={[['NLTK Practice', <Nltk key="n" />], ['CrisisBridge AI', <Crisis key="c" />]]} />
    </div>
  )
}

export function Trophies() {
  return (
    <Doc eyebrow="Achievement · 27 Oct 2026" title="IntelliCode 2026: first place"
      meta={<><Chip>FinTech + NLP</Chip><Chip>Multi-agent RAG</Chip><Chip>NEXAI conclave, VIT</Chip></>}>
      <div className="prize">
        <div><b>1st</b><span>Team HELL-FIRE</span></div>
        <div><b>₹5,000</b><span>Cash prize</span></div>
        <div><b>Optum</b><span>Connection with a senior leader</span></div>
      </div>
      <p>The architecture I discussed with my faculty for CrisisBridge AI led me to take part in IntelliCode 2026, a codeathon held at VIT as part of the NEXAI conclave, in the FinTech and NLP domain.</p>
      <div className="debate" aria-label="How the system works">
        <div className="dnode src"><b>DRHP</b><span>Hundreds of pages</span></div>
        <div className="dnode"><b>RAG retrieval</b><span>Finds the relevant sections</span></div>
        <div className="dsplit">
          <div className="dnode pos"><b>Positive agent</b><span>Case for the IPO</span></div>
          <div className="dnode neg"><b>Negative agent</b><span>Risks and weaknesses</span></div>
        </div>
        <div className="dnode out"><b>Balanced view</b><span>For the investor</span></div>
      </div>
      <p>The application reads the entire Draft Red Herring Prospectus (DRHP) of a company planning an IPO. Retrieval-Augmented Generation lets it search hundreds of pages accurately, and two agents then argue opposite sides, giving an investor a balanced view instead of a one-sided summary. I credit my faculty for this, because her guidance taught me how to build NLP applications with better accuracy.</p>
      <Block label="Result announcement">
        <Photos wide items={[[IMAGES.result, 'Result email announcing team HELL-FIRE as first prize winners of IntelliCode 2026']]} />
      </Block>
    </Doc>
  )
}

export function Timeline({ open }) {
  return (
    <Doc eyebrow="Aug to Oct 2026" title="Learning timeline">
      <ol className="timeline">
        {TIMELINE.map((e) => (
          <li key={e.title} className={`k-${e.kind.toLowerCase()}`}>
            <div className="tl-date mono">{e.date}</div>
            <div className="tl-dot" />
            <div className="tl-body">
              <span className="tl-kind mono">{e.kind}</span>
              <b>{e.title}</b>
              <p>{e.text}</p>
              {e.app && APPS[e.app] && <button className="link" onClick={() => open(e.app)}>Open {APPS[e.app].title} →</button>}
            </div>
          </li>
        ))}
      </ol>
    </Doc>
  )
}

export function Syllabus({ open }) {
  const all = SYLLABUS.flatMap((a) => a.topics)
  const count = (st) => all.filter((t) => t[1] === st).length
  return (
    <Doc eyebrow="CSI4001 · Syllabus v1.0 · 45 lecture hours" title="Syllabus map"
      meta={<p className="muted small">Every module of the official syllabus, and where each topic shows up in my work. Click a highlighted topic to open its evidence.</p>}>
      <div className="legend3">
        <span className="s-starred">Starred work <b>{count('starred')}</b></span>
        <span className="s-built">Used in my code <b>{count('built')}</b></span>
        <span className="s-course">Covered in course <b>{count('course')}</b></span>
      </div>
      <div className="areas">
        {SYLLABUS.map((a) => {
          const hands = a.topics.filter((t) => t[1] !== 'course').length
          return (
            <section key={a.area} className="area">
              <div className="areahead">
                <span className="mono modno">M{a.m}</span>
                <h3>{a.area}</h3>
                <span className="mono muted small">{a.hours} h</span>
              </div>
              <div className="cov" aria-label={`${hands} of ${a.topics.length} topics applied`}>
                {a.topics.map(([t, st]) => <i key={t} className={`c-${st}`} />)}
              </div>
              <div className="topics">
                {a.topics.map(([t, st, app]) => (
                  app ? <button key={t} className={`topic s-${st}`} onClick={() => open(app)}>{t}</button>
                    : <span key={t} className={`topic s-${st}`}>{t}</span>
                ))}
              </div>
            </section>
          )
        })}
      </div>
      <Block label="Course outcomes, and where I show them">
        <ol className="outcomes">
          {COURSE_OUTCOMES.map(([o, app], i) => (
            <li key={o}><span className="mono amber">CO{i + 1}</span><span>{o}</span><button className="link" onClick={() => open(app)}>{APPS[app].title} →</button></li>
          ))}
        </ol>
      </Block>
      <p className="muted small">CrisisBridge AI is my J-component project for this course (4 J credits).</p>
    </Doc>
  )
}
