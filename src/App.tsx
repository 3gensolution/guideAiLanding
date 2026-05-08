import { useCallback, useEffect, useState } from 'react'
import { WaitlistProvider } from './context/WaitlistContext'
import LandingPage from './pages/LandingPage'
import V2LandingPage from './pages/V2LandingPage'
import WaitlistModal from './components/WaitlistModal/WaitlistModal'

function App() {
  const [pathname, setPathname] = useState(() => window.location.pathname || '/')

  const navigate = useCallback((nextPath: string, replace = false) => {
    if (replace) {
      window.history.replaceState({}, '', nextPath)
    } else {
      window.history.pushState({}, '', nextPath)
    }
    setPathname(nextPath)
  }, [])

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname || '/')
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  return (
    <WaitlistProvider>
      {pathname === '/v2' ? (
        <V2LandingPage onNavigate={navigate} />
      ) : (
        <LandingPage />
      )}
      <WaitlistModal />
    </WaitlistProvider>
  )
}

export default App
