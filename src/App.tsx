import { WaitlistProvider } from './context/WaitlistContext'
import LandingPage from './pages/LandingPage'
import WaitlistModal from './components/WaitlistModal/WaitlistModal'

function App() {
  return (
    <WaitlistProvider>
      <LandingPage />
      <WaitlistModal />
    </WaitlistProvider>
  )
}

export default App
