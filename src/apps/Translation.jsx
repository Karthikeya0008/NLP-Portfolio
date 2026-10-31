import { LLM_TRANSLATION, METRICS, MY_TRANSLATION, RUBRIC, VERSE } from '../data'
import { Block, Chip, Doc, Stars } from './ui'

export default function Translation({ open }) {
  const tl = RUBRIC.reduce((s, r) => s + r[1], 0), tm = RUBRIC.reduce((s, r) => s + r[2], 0)
  return (
    <Doc eyebrow="Classroom · Machine translation" title="Translating Pothana's Telugu verse"
      meta={<><Stars n={3} /><Chip>Telugu, my mother tongue</Chip><Chip>Similarity metrics</Chip></>}>
      <Block label="Task"><p>Translate a literary work from an Indian language yourself, compare it with an LLM translation, and evaluate both.</p></Block>
      <div className="verse" lang="te">{VERSE.map((l) => <div key={l}>{l}</div>)}</div>
      <p className="muted small">Bammera Pothana, <i>Andhra Maha Bhagavatam</i>, Prahlada Charitra · <a href="https://teluguteachers-parakri.blogspot.com/2012/07/blog-post_08.html" target="_blank" rel="noreferrer">Source text</a></p>
      <Block label="Meaning">
        <p>Prahlada tells his father, the demon king Hiranyakashipu, not to doubt whether Vishnu is present in one place and absent in another. The bearer of the discus pervades everything, and wherever one searches for Him, He is found right there.</p>
      </Block>
      <div className="pair">
        <blockquote><b>LLM translation</b>“{LLM_TRANSLATION}”</blockquote>
        <blockquote className="mine"><b>My translation</b>“{MY_TRANSLATION}”</blockquote>
      </div>
      <Block label="Similarity, computed in Python with the LLM translation as reference">
        <div className="scrollx tablebox">
          <table className="t">
            <thead><tr><th>Metric</th><th>Score</th><th>What it shows</th></tr></thead>
            <tbody>{METRICS.map(([m, s, w]) => <tr key={m}><td>{m}</td><td className="num">{s}</td><td>{w}</td></tr>)}</tbody>
          </table>
        </div>
        <button className="btn ghost small" onClick={() => open('playground')}>Recompute these in the Playground →</button>
      </Block>
      <Block label="Differences">
        <p>Both carry the central idea that Vishnu is found wherever one searches. The LLM version is shorter and closer to the literal sense of each line. Mine names the Sudarshana Chakram, which makes the cultural reference explicit, and keeps Prahlada's voice addressing his father. However, my opening turns the instruction “do not doubt” into a question, which weakens the confident tone of the original. The LLM version reads like prose, and neither reproduces the rhythm of the Telugu verse.</p>
      </Block>
      <Block label="Rubric">
        <div className="legend mono"><span className="k llm" /> LLM <span className="k me" /> Mine</div>
        <div className="rub">
          {RUBRIC.map(([name, l, m]) => (
            <div className="rubrow" key={name}>
              <span>{name}</span>
              <div className="bars">
                <div className="bar llm"><i style={{ '--v': `${(l / 5) * 100}%` }} /><span>{l} / 5</span></div>
                <div className="bar me"><i style={{ '--v': `${(m / 5) * 100}%` }} /><span>{m} / 5</span></div>
              </div>
            </div>
          ))}
        </div>
        <div className="rubtotal mono"><span>LLM {tl} / 35 ({((tl / 35) * 100).toFixed(2)}%)</span><span>Mine {tm} / 35 ({((tm / 35) * 100).toFixed(2)}%)</span></div>
      </Block>
    </Doc>
  )
}
