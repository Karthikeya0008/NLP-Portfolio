import { useEffect, useRef, useState } from 'react'
import { ME } from '../data'
import { editDistance, sentTokenize, stem, wordTokenize } from '../nlp/nlp'
import { APPS } from './registry'

const PROMPT = 'karthik@lexicon:~$'

export default function Terminal({ open }) {
  const [lines, setLines] = useState([
    ['out', `Lexicon OS terminal. Type "help" to see commands.`],
  ])
  const [val, setVal] = useState('')
  const [hist, setHist] = useState([])
  const [hi, setHi] = useState(-1)
  const end = useRef(null)
  const inp = useRef(null)
  useEffect(() => { end.current?.scrollIntoView({ block: 'end' }) }, [lines])

  const run = (cmdline) => {
    const [cmd, ...args] = cmdline.trim().split(/\s+/)
    const rest = cmdline.trim().slice(cmd.length).trim()
    const out = (t) => ['out', t]
    switch ((cmd || '').toLowerCase()) {
      case '': return []
      case 'help': return [out(
`whoami                 who is signed in
ls                     list apps
open <app>             open an app, e.g. open translation
stars                  stars earned in class
med <source> <target>  minimum edit distance (sub cost 2)
tokenize <text>        word tokenization
sents <text>           sentence tokenization
stem <words>           Porter stemmer
neofetch               system summary
clear                  clear the screen`)]
      case 'whoami': return [out(`${ME.name} (${ME.reg})\n${ME.program}\n${ME.course}, ${ME.code}`)]
      case 'ls': return [out(Object.keys(APPS).map((k) => k.padEnd(12)).join('  '))]
      case 'open':
        if (APPS[args[0]]) { open(args[0]); return [out(`opening ${APPS[args[0]].title}...`)] }
        return [['err', `open: no app named "${args[0] || ''}". Try "ls".`]]
      case 'stars': return [out('★★ CAT-1 highest score + NLTK code\n★  Minimum edit distance + git diff use case\n★★★ Telugu literary translation\n-- total: 6')]
      case 'med': {
        if (args.length < 2) return [['err', 'usage: med <source> <target>']]
        const r = editDistance(args[0].toUpperCase(), args[1].toUpperCase(), 2)
        return [out(`distance(${args[0].toUpperCase()}, ${args[1].toUpperCase()}) = ${r.distance}\n${r.steps.join('\n')}`)]
      }
      case 'tokenize': return rest ? [out(JSON.stringify(wordTokenize(rest)))] : [['err', 'usage: tokenize <text>']]
      case 'sents': return rest ? [out(sentTokenize(rest).map((s, i) => `${i + 1}. ${s}`).join('\n'))] : [['err', 'usage: sents <text>']]
      case 'stem': return rest ? [out(rest.split(/\s+/).map((w) => `${w} -> ${stem(w)}`).join('\n'))] : [['err', 'usage: stem <words>']]
      case 'neofetch': return [['neo',
`   ██╗     ██╗  ██╗      ${ME.name}@lexicon
   ██║     ╚██╗██╔╝      ---------------------
   ██║      ╚███╔╝       OS:       Lexicon OS 1.0
   ██║      ██╔██╗       Course:   ${ME.code} · Slot ${ME.slot}
   ███████╗██╔╝ ██╗      Faculty:  ${ME.faculty}
   ╚══════╝╚═╝  ╚═╝      Stars:    ★★★★★★ (6)
                         Projects: NLP-Practice, Crisis-Bridge-AI
                         Awards:   IntelliCode 2026, 1st place
                         Langs:    en hi te kn es`]]
      case 'sudo': return [['err', 'sudo: only the course faculty has root access here.']]
      case 'clear': return null
      default: return [['err', `${cmd}: command not found. Type "help".`]]
    }
  }

  const submit = (e) => {
    e.preventDefault()
    const res = run(val)
    if (res === null) setLines([])
    else setLines((l) => [...l, ['in', val], ...res])
    if (val.trim()) setHist((h) => [val, ...h])
    setHi(-1); setVal('')
  }
  const key = (e) => {
    if (e.key === 'ArrowUp' && hist.length) { e.preventDefault(); const n = Math.min(hi + 1, hist.length - 1); setHi(n); setVal(hist[n]) }
    if (e.key === 'ArrowDown') { e.preventDefault(); const n = hi - 1; setHi(n); setVal(n < 0 ? '' : hist[n]) }
  }
  const quick = ['help', 'neofetch', 'stars', 'med REPLACE DELETE', 'tokenize NLP isn\'t easy!', 'stem running studies']

  return (
    <div className="term" onClick={() => inp.current?.focus()}>
      <div className="termout">
        {lines.map(([k, t], i) => (
          <pre key={i} className={k}>{k === 'in' ? <><span className="pr">{PROMPT}</span> {t}</> : t}</pre>
        ))}
        <form onSubmit={submit} className="termline">
          <span className="pr">{PROMPT}</span>
          <input ref={inp} value={val} onChange={(e) => setVal(e.target.value)} onKeyDown={key} autoFocus spellCheck={false} autoCapitalize="off" aria-label="Terminal command" />
        </form>
        <div ref={end} />
      </div>
      <div className="termquick">
        {quick.map((q) => <button key={q} onClick={(e) => { e.stopPropagation(); const r = run(q); setLines((l) => r === null ? [] : [...l, ['in', q], ...r]) }}>{q}</button>)}
      </div>
    </div>
  )
}
