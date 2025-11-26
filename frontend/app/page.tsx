import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { CTASection } from "@/components/landing/cta-section"
import { LandingHeader } from "@/components/landing/landing-header"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingHeader />
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </div>
  )
}
