import { useEffect, useState } from 'react'
import { Logo } from './icons'

const LINES = [
  'Initialising corpus memory',
  'Loading punkt sentence tokenizer',
  'Loading Porter stemmer',
  'Loading WordNet lexical database',
  'Loading Telugu script support',
  'Computing minimum edit distance: REPLACE to DELETE = 7',
  'Mounting /classroom/stars: 6 found',
  'Mounting /projects: 2 repositories',
  'Mounting /achievements: IntelliCode 2026, 1st',
  'Starting session for Dara Karthikeya (23MIC0008)',
]

export default function Boot({ onDone }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (n >= LINES.length) { const t = setTimeout(onDone, 700); return () => clearTimeout(t) }
    const t = setTimeout(() => setN(n + 1), n === 0 ? 700 : 240)
    return () => clearTimeout(t)
  }, [n, onDone])

  useEffect(() => {
    const skip = () => onDone()
    window.addEventListener('keydown', skip)
    return () => window.removeEventListener('keydown', skip)
  }, [onDone])

  return (
    <div className="boot" onClick={onDone} role="status" aria-live="polite">
      <Logo size={88} />
      <div className="boot-low">
        <div className="spinner" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => <i key={i} style={{ '--i': i }} />)}
        </div>
        <p className="boot-line mono">{n ? LINES[Math.min(n, LINES.length) - 1] : 'Starting Lexicon OS'}</p>
      </div>
      <p className="boot-skip">Press any key or click to skip</p>
    </div>
  )
}
