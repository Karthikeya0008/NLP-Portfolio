import { useCallback, useState } from 'react'
import Boot from './os/Boot'
import Login from './os/Login'
import Desktop from './os/Desktop'

const seen = () => { try { return sessionStorage.getItem('lexicon-booted') === '1' } catch { return false } }

export default function App() {
  const [stage, setStage] = useState(seen() ? 'login' : 'boot')
  const booted = useCallback(() => {
    try { sessionStorage.setItem('lexicon-booted', '1') } catch { /* storage unavailable */ }
    setStage((s) => (s === 'boot' ? 'login' : s))
  }, [])
  const login = useCallback(() => setStage('desktop'), [])
  if (stage === 'boot') return <Boot onDone={booted} />
  if (stage === 'login') return <Login onLogin={login} />
  return <Desktop onLock={() => setStage('login')} />
}
