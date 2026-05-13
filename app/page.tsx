import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { FeaturesSection } from "@/components/features-section";
import { AgentCanvasSection } from "@/components/agent-canvas-section";
import { SmartInsightsSection } from "@/components/smart-insights-section";
import { VoiceSection } from "@/components/voice-section";
import { CaseStudySection } from "@/components/case-study-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <AgentCanvasSection />
      <SmartInsightsSection />
      <VoiceSection />
      {/* <CaseStudySection /> */}
      <CTASection />
      <Footer />
    </main>
  );
}
