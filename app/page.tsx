import { SiteNavbar } from "@/components/site-navbar"
import { HeroSection } from "@/components/hero-section"
import { FocusSection } from "@/components/focus-section"
import { StatsSection } from "@/components/stats-section"
import { FrameworkSection } from "@/components/framework-section"
import { PricingSection } from "@/components/pricing-section"
import { SettlementCalculator } from "@/components/settlement-calculator"
import { CtaFooter } from "@/components/cta-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />
      <main>
        <HeroSection />
        <FocusSection />
        <StatsSection />
        <FrameworkSection />
        <PricingSection />
        <SettlementCalculator />
        <CtaFooter />
      </main>
    </div>
  )
}
