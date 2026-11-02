import { useMemo, useRef, useState } from 'react'
import { editDistance } from '../nlp/nlp'

export const Chip = ({ children }) => <span className="chip">{children}</span>

export function Photos({ items, wide, single, shots, gallery }) {
  const dlg = useRef(null)
  const [cur, setCur] = useState(null)
  const show = (it) => { setCur(it); dlg.current?.showModal?.() }
  return (
    <>
      <div className={`photos ${wide ? 'wide' : ''} ${single ? 'single' : ''} ${shots ? 'shots' : ''} ${gallery ? 'gallery' : ''}`}>
        {items.map(([src, alt]) => (
          <button key={src} type="button" onClick={() => show([src, alt])} aria-label={`Enlarge: ${alt}`}><img src={src} alt={alt} loading="lazy" /></button>
        ))}
      </div>
      <dialog ref={dlg} className="lightbox" onClick={(e) => e.target === dlg.current && dlg.current.close()}>
        {cur && <img src={cur[0]} alt={cur[1]} />}
        <button className="btn" onClick={() => dlg.current.close()}>Close</button>
      </dialog>
    </>
  )
}

export function Tabs({ tabs, initial = 0 }) {
  const [i, setI] = useState(initial)
  return (
    <div className="tabs">
      <div className="tablist" role="tablist">
        {tabs.map(([name], k) => (
          <button key={name} role="tab" aria-selected={k === i} className={k === i ? 'on' : ''} onClick={() => setI(k)}>{name}</button>
        ))}
      </div>
      <div className="tabpanel" role="tabpanel">{tabs[i][1]}</div>
    </div>
  )
}

export function EditDistanceWidget({ a = 'REPLACE', b = 'DELETE' }) {
  const [s, setS] = useState(a)
  const [t, setT] = useState(b)
  const [lev, setLev] = useState(true)
  const S = s.toUpperCase().slice(0, 12), T = t.toUpperCase().slice(0, 12)
  const r = useMemo(() => editDistance(S, T, lev ? 2 : 1), [S, T, lev])
  const pl = (n, w) => `${n} ${w}${n === 1 ? '' : 's'}`
  return (
    <div className="med">
      <div className="medin">
        <label>Source<input value={s} onChange={(e) => setS(e.target.value)} maxLength={12} spellCheck={false} /></label>
        <label>Target<input value={t} onChange={(e) => setT(e.target.value)} maxLength={12} spellCheck={false} /></label>
        <label className="tog"><input type="checkbox" checked={lev} onChange={(e) => setLev(e.target.checked)} /> Substitution cost 2</label>
      </div>
      <div className="scrollx">
        <table className="dp">
          <tbody>
            <tr><th /><th>#</th>{[...T].map((c, j) => <th key={j}>{c}</th>)}</tr>
            {r.table.map((row, i) => (
              <tr key={i}>
                <th>{i === 0 ? '#' : S[i - 1]}</th>
                {row.map((v, j) => <td key={j} className={r.path.has(`${i},${j}`) ? 'path' : ''}>{v}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="medout">
        Distance <b>{r.distance}</b> · {pl(r.ops.sub, 'substitution')}, {pl(r.ops.del, 'deletion')}, {pl(r.ops.ins, 'insertion')}, {pl(r.ops.match, 'match')}
      </p>
      <p className="medsteps mono">{r.steps.join('  ·  ')}</p>
    </div>
  )
}
