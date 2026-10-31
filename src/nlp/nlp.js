// Small, dependency-light NLP helpers used by the Playground, Terminal and apps.
import { stemmer } from 'stemmer'

export const STOPWORDS = new Set(
  ('a an the of and or but if is are was were be been being to in on at by for with from as that this these those ' +
   'it its he him his she her they them their you your i me my we our us do does did not no so than then there here ' +
   'will would can could shall should may might must o oh').split(' ')
)

// Penn Treebank-flavoured word tokenizer: splits clitics ("isn't" -> is n't, "Messi's" -> Messi 's) and punctuation,
// keeps decimals, URLs, @mentions and #hashtags whole.
export function wordTokenize(text, { tweet = false } = {}) {
  const pattern = tweet
    ? /https?:\/\/\S+|[@#][\w_]+|\p{Extended_Pictographic}|\d+(?:[.,]\d+)*|[A-Za-z]+(?=n't)|n't|'(?:s|re|ve|ll|d|m)\b|[\p{L}\p{M}]+(?:-[\p{L}\p{M}]+)*|[^\s\w]+/gu
    : /https?:\/\/\S+|\d+(?:[.,]\d+)*|[A-Za-z]+(?=n't)|n't|'(?:s|re|ve|ll|d|m)\b|[\p{L}\p{M}]+(?:-[\p{L}\p{M}]+)*|\.\.\.|[^\s\w]/gu
  return text.match(pattern) || []
}

const ABBREV = new Set(['dr', 'mr', 'mrs', 'ms', 'prof', 'rs', 'vs', 'etc', 'e.g', 'i.e', 'a.m', 'p.m', 'st', 'no', 'fig'])
export function sentTokenize(text) {
  const out = []
  let start = 0
  const re = /[.!?]+["')\]]*\s+/g
  let m
  while ((m = re.exec(text))) {
    const before = text.slice(start, m.index + 1)
    const lastWord = (before.match(/([A-Za-z.]+)\.$/) || [])[1]
    if (lastWord && ABBREV.has(lastWord.toLowerCase().replace(/\.$/, ''))) continue
    out.push(text.slice(start, m.index + m[0].length).trim())
    start = m.index + m[0].length
  }
  if (text.slice(start).trim()) out.push(text.slice(start).trim())
  return out
}

export const stem = (w) => stemmer(w.toLowerCase())

export function ngrams(tokens, n) {
  const out = []
  for (let i = 0; i + n <= tokens.length; i++) out.push(tokens.slice(i, i + n))
  return out
}

export function bigramModel(tokens) {
  const model = new Map()
  for (const [a, b] of ngrams(tokens, 2)) {
    if (!model.has(a)) model.set(a, new Map())
    const m = model.get(a)
    m.set(b, (m.get(b) || 0) + 1)
  }
  return model
}

export function nextWordProbs(model, word) {
  const m = model.get(word)
  if (!m) return []
  const total = [...m.values()].reduce((s, v) => s + v, 0)
  return [...m.entries()].map(([w, c]) => [w, c / total, c]).sort((x, y) => y[1] - x[1])
}

// The small stop list used for the translation metrics in the portfolio.
export const SIM_STOP = new Set('the of a an and or is are you he him that will be to my o oh do not'.split(' '))

const counts = (arr) => arr.reduce((m, w) => m.set(w, (m.get(w) || 0) + 1), new Map())
export const simpleWords = (s) => (s.toLowerCase().match(/[a-z]+/g) || [])

export function cosine(a, b) {
  const ca = counts(a), cb = counts(b)
  let dot = 0
  for (const [k, v] of ca) dot += v * (cb.get(k) || 0)
  const na = Math.sqrt([...ca.values()].reduce((s, v) => s + v * v, 0))
  const nb = Math.sqrt([...cb.values()].reduce((s, v) => s + v * v, 0))
  return na && nb ? dot / (na * nb) : 0
}

export function jaccard(a, b) {
  const A = new Set(a), B = new Set(b)
  const inter = [...A].filter((x) => B.has(x))
  const union = new Set([...A, ...B])
  return { score: union.size ? inter.length / union.size : 0, shared: inter.sort() }
}

// Minimum edit distance with full table and one optimal backtrace.
export function editDistance(s, t, subCost = 2) {
  const n = s.length, m = t.length
  const D = Array.from({ length: n + 1 }, (_, i) => Array.from({ length: m + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0)))
  for (let i = 1; i <= n; i++)
    for (let j = 1; j <= m; j++)
      D[i][j] = Math.min(D[i - 1][j] + 1, D[i][j - 1] + 1, D[i - 1][j - 1] + (s[i - 1] === t[j - 1] ? 0 : subCost))
  const path = new Set([`${n},${m}`])
  const ops = { match: 0, sub: 0, ins: 0, del: 0 }
  const steps = []
  let i = n, j = m
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && D[i][j] === D[i - 1][j - 1] + (s[i - 1] === t[j - 1] ? 0 : subCost)) {
      if (s[i - 1] === t[j - 1]) { ops.match++; steps.push(`keep ${s[i - 1]}`) }
      else { ops.sub++; steps.push(`substitute ${s[i - 1]} → ${t[j - 1]}`) }
      i--; j--
    } else if (i > 0 && D[i][j] === D[i - 1][j] + 1) { ops.del++; steps.push(`delete ${s[i - 1]}`); i-- }
    else { ops.ins++; steps.push(`insert ${t[j - 1]}`); j-- }
    path.add(`${i},${j}`)
  }
  return { distance: D[n][m], table: D, path, ops, steps: steps.reverse() }
}
