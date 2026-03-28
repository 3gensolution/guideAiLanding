import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { WaitlistProvider } from './context/WaitlistContext'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import ProblemSection from './components/ProblemSection/ProblemSection'
import HowItWorks from './components/HowItWorks/HowItWorks'
import FeaturePillars from './components/FeaturePillars/FeaturePillars'
import EnterpriseFeatures from './components/EnterpriseFeatures/EnterpriseFeatures'
import Integrations from './components/Integrations/Integrations'
import Pricing from './components/Pricing/Pricing'
import FinalCTA from './components/FinalCTA/FinalCTA'
import Footer from './components/Footer/Footer'
import WaitlistModal from './components/WaitlistModal/WaitlistModal'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    ScrollTrigger.refresh()
  }, [])

  return (
    <WaitlistProvider>
      <Navbar />
      <main>
        <Hero />
        {/* <SocialProof /> */}
        <ProblemSection />
        <HowItWorks />
        <FeaturePillars />
        <EnterpriseFeatures />
        <Integrations />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
      <WaitlistModal />
    </WaitlistProvider>
  )
}

export default App
