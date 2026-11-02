import { useMemo, useState } from 'react'
import { LLM_TRANSLATION, MY_TRANSLATION } from '../data'
import {
  SIM_STOP, STOPWORDS, bigramModel, cosine, jaccard, ngrams, nextWordProbs, sentTokenize, simpleWords, stem, wordTokenize,
} from '../nlp/nlp'
import { EditDistanceWidget, Tabs } from './widgets'

const SAMPLE = 'Lionel Messi won the 2022 FIFA World Cup with Argentina. He scored twice in the final vs. France! Dr. Sharma said, "NLP isn\'t easy." The ticket cost Rs. 450.50 only.'
const TWEET = 'Floods in #Chennai again!!! @NDRF please help 🙏 stuck near Velachery https://t.co/x1'

function Tokenizer() {
  const [text, setText] = useState(SAMPLE)
  const [mode, setMode] = useState('word')
  const out = useMemo(() => {
    if (mode === 'sent') return sentTokenize(text)
    if (mode === 'tweet') return wordTokenize(text, { tweet: true })
    if (mode === 'split') return text.split(/\s+/).filter(Boolean)
    return wordTokenize(text)
  }, [text, mode])
  return (
    <div className="pg">
      <p className="muted">Compare how each strategy breaks the same text. Notice <code>isn't</code>, <code>Rs. 450.50</code> and <code>Dr.</code></p>
      <textarea value={text} onChange={(e) => setText(e.target.value)} rows={3} spellCheck={false} aria-label="Text to tokenize" />
      <div className="seg">
        {[['word', 'word_tokenize'], ['sent', 'sent_tokenize'], ['tweet', 'TweetTokenizer'], ['split', 'str.split()']].map(([k, l]) => (
          <button key={k} className={mode === k ? 'on' : ''} onClick={() => { setMode(k); if (k === 'tweet' && text === SAMPLE) setText(TWEET) }}>{l}</button>
        ))}
      </div>
      <div className={mode === 'sent' ? 'sents' : 'toks'}>
        {out.map((t, i) => <span key={i}>{t}</span>)}
      </div>
      <p className="mono small muted">{out.length} {mode === 'sent' ? 'sentences' : 'tokens'}</p>
    </div>
  )
}

function Stemmer() {
  const [text, setText] = useState('running runs ran easily studies studying happiness organization dribbling scored matches wolves')
  const words = (text.toLowerCase().match(/[a-z]+/g) || []).slice(0, 40)
  return (
    <div className="pg">
      <p className="muted">Porter stemmer, the same algorithm as NLTK's <code>PorterStemmer</code>. Stems need not be real words (<code>studies → studi</code>), and irregular forms like <code>ran</code> are untouched; that is where lemmatization helps.</p>
      <textarea value={text} onChange={(e) => setText(e.target.value)} rows={2} spellCheck={false} aria-label="Words to stem" />
      <div className="scrollx tablebox">
        <table className="t">
          <thead><tr><th>Word</th><th>Stem</th><th>Stop word?</th></tr></thead>
          <tbody>{words.map((w, i) => <tr key={i}><td className="num">{w}</td><td className="num hl">{stem(w)}</td><td>{STOPWORDS.has(w) ? 'yes' : ''}</td></tr>)}</tbody>
        </table>
      </div>
    </div>
  )
}

function Ngrams() {
  const [text, setText] = useState('Messi scores a goal. Messi scores again. Messi wins the match. Argentina wins the World Cup. Messi lifts the World Cup.')
  const [n, setN] = useState(2)
  const toks = useMemo(() => wordTokenize(text.toLowerCase()).filter((t) => /\p{L}/u.test(t)), [text])
  const freq = useMemo(() => {
    const m = new Map()
    ngrams(toks, n).forEach((g) => { const k = g.join(' '); m.set(k, (m.get(k) || 0) + 1) })
    return [...m.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10)
  }, [toks, n])
  const model = useMemo(() => bigramModel(toks), [toks])
  const vocab = [...model.keys()]
  const [w, setW] = useState('messi')
  const probs = nextWordProbs(model, w)
  const max = freq[0]?.[1] || 1
  return (
    <div className="pg">
      <textarea value={text} onChange={(e) => setText(e.target.value)} rows={3} spellCheck={false} aria-label="Corpus" />
      <div className="row">
        <div className="col">
          <div className="seg">{[1, 2, 3].map((k) => <button key={k} className={n === k ? 'on' : ''} onClick={() => setN(k)}>{['Unigrams', 'Bigrams', 'Trigrams'][k - 1]}</button>)}</div>
          <div className="freq">
            {freq.map(([g, c]) => <div key={g}><span className="mono">{g}</span><i style={{ '--v': `${(c / max) * 100}%` }} /><b className="mono">{c}</b></div>)}
          </div>
        </div>
        <div className="col">
          <p className="label">Bigram model: P(next | word)</p>
          <select value={w} onChange={(e) => setW(e.target.value)} aria-label="Previous word">{vocab.map((v) => <option key={v}>{v}</option>)}</select>
          <div className="freq">
            {probs.map(([nx, p]) => <div key={nx}><span className="mono">{nx}</span><i style={{ '--v': `${p * 100}%` }} /><b className="mono">{p.toFixed(2)}</b></div>)}
            {!probs.length && <p className="muted small">No word follows “{w}” in this corpus.</p>}
          </div>
          <p className="muted small">P = count({w}, next) / count({w})</p>
        </div>
      </div>
    </div>
  )
}

function Similarity() {
  const [a, setA] = useState(LLM_TRANSLATION)
  const [b, setB] = useState(MY_TRANSLATION)
  const wa = simpleWords(a), wb = simpleWords(b)
  const ca = wa.filter((x) => !SIM_STOP.has(x)), cb = wb.filter((x) => !SIM_STOP.has(x))
  const cos = cosine(wa, wb), cosC = cosine(ca, cb), jac = jaccard(ca, cb)
  return (
    <div className="pg">
      <p className="muted">Pre-filled with the two translations of Pothana's verse. Edit either text to see the scores change.</p>
      <div className="row">
        <label className="col">Text A<textarea value={a} onChange={(e) => setA(e.target.value)} rows={4} /></label>
        <label className="col">Text B<textarea value={b} onChange={(e) => setB(e.target.value)} rows={4} /></label>
      </div>
      <div className="gauges">
        {[['Cosine (all words)', cos], ['Cosine (content words)', cosC], ['Jaccard (content words)', jac.score]].map(([l, v]) => (
          <div key={l} className="gauge"><b>{v.toFixed(2)}</b><i style={{ '--v': `${v * 100}%` }} /><span>{l}</span></div>
        ))}
      </div>
      <p className="small"><span className="label">Shared content words </span>{jac.shared.map((s) => <span className="chip" key={s}>{s}</span>)}</p>
    </div>
  )
}

export default function Playground() {
  return (
    <Tabs tabs={[
      ['Tokenizer', <Tokenizer key="t" />],
      ['Stemmer', <Stemmer key="s" />],
      ['N-grams', <Ngrams key="n" />],
      ['Similarity', <Similarity key="c" />],
      ['Edit distance', <div className="pg" key="e"><EditDistanceWidget a="INTENTION" b="EXECUTION" /></div>],
    ]} />
  )
}
