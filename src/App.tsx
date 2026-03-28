import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    ScrollTrigger.refresh()
  }, [])

  return (
    <>
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
    </>
  )
}

export default App
