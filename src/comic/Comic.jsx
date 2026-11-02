import { useEffect, useRef, useState } from 'react'
import { ME } from '../data'
import Nav from './Nav'
import Cover from './Cover'
import { Build, Epilogue, Origin, SyllabusMap, Training, Trials, Verse, Victory } from './Chapters'
import { STARS, groupStars } from './stars'
import { Star } from './parts'

// Fades panels in as they scroll into view. Everything shows at once when motion is reduced.
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }), { rootMargin: '0px 0px -8% 0px' })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

// Counts the stars whose section has scrolled past 60% of the viewport, and announces new ones.
function useStars() {
  const [earned, setEarned] = useState(0)
  const [found, setFound] = useState(null)
  const best = useRef(0)
  useEffect(() => {
    let raf = 0
    const check = () => {
      raf = 0
      const line = window.innerHeight * 0.6
      const n = STARS.filter((s) => document.getElementById(s.at)?.getBoundingClientRect().top < line).length
      setEarned(n)
      if (n > best.current) { setFound({ stars: STARS.slice(best.current, n), key: n }); best.current = n }
    }
    const on = () => { if (!raf) raf = requestAnimationFrame(check) }
    check()
    window.addEventListener('scroll', on, { passive: true })
    window.addEventListener('resize', on)
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on); cancelAnimationFrame(raf) }
  }, [])
  useEffect(() => {
    if (!found) return
    const t = setTimeout(() => setFound(null), 2800)
    return () => clearTimeout(t)
  }, [found])
  return [earned, found]
}

export default function Comic() {
  useReveal()
  const [earned, found] = useStars()
  return (
    <>
      <div className="cosmos" aria-hidden="true" />
      <a className="skip" href="#origin">Skip to the story</a>
      <Nav earned={earned} />
      <main>
        <Cover />
        <Origin />
        <Trials />
        <Verse />
        <Training />
        <Build />
        <Victory />
        <SyllabusMap />
        <Epilogue />
      </main>
      <footer className="footer">
        <div className="wrap">
          <p className="brand">The Lexicon</p>
          <p>{ME.name} · {ME.reg} · {ME.course} ({ME.code}), {ME.college} · {ME.faculty}</p>
          <p><a href={ME.github} target="_blank" rel="noreferrer">github.com/Karthikeya0008</a> · All characters and artwork in this story are original.</p>
        </div>
      </footer>
      <div className="toast-zone" aria-live="polite">
        {found && (
          <div className="toast" key={found.key}>
            <span className="toast-stars">{found.stars.map((s) => <Star key={s.id} color={s.color} size={22} />)}</span>
            <span><b>{found.stars.length === 1 ? 'Star earned' : `${found.stars.length} stars earned`}</b>{groupStars(found.stars).map((g) => g.name).join(', ')}</span>
          </div>
        )}
      </div>
    </>
  )
}
