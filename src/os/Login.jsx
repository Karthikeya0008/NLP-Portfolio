import { useEffect, useState } from 'react'
import { ME } from '../data'
import Avatar from './Avatar'
import Wallpaper from './Wallpaper'

// Lock screen first (clock and date); any key or click reveals the sign-in card.
export default function Login({ onLogin }) {
  const [now, setNow] = useState(new Date())
  const [up, setUp] = useState(false)
  useEffect(() => { const t = setInterval(() => setNow(new Date()), 1000); return () => clearInterval(t) }, [])
  useEffect(() => {
    const k = (e) => {
      if (!up) setUp(true)
      else if (e.key === 'Enter') onLogin()
      else if (e.key === 'Escape') setUp(false)
    }
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [up, onLogin])

  return (
    <div className={`login wallpaper ${up ? 'up' : ''}`} onClick={() => !up && setUp(true)}>
      <Wallpaper />
      <div className="lock-face" aria-hidden={up}>
        <div className="lock-time">{now.toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit' }).replace(/\s?[ap]m$/i, '')}</div>
        <div className="lock-date">{now.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })}</div>
      </div>
      {up ? (
        <div className="signin">
          <Avatar size={150} />
          <h1>{ME.name}</h1>
          <p className="mono">{ME.reg} · {ME.code} · Slot {ME.slot}</p>
          <button className="btn primary" onClick={onLogin} autoFocus>Sign in</button>
          <p className="hint">No password needed. Press Enter.</p>
        </div>
      ) : (
        <p className="lock-hint">Click or press any key to sign in</p>
      )}
      <p className="login-foot">{ME.course} · {ME.faculty}</p>
    </div>
  )
}
