import { SiteNavbar } from "@/components/site-navbar"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { SellerEaseSection } from "@/components/seller-ease-section"
import { FocusSection } from "@/components/focus-section"
import { MarketplaceSection } from "@/components/marketplace-section"
import { FrameworkSection } from "@/components/framework-section"
import { PricingSection } from "@/components/pricing-section"
import { SettlementCalculator } from "@/components/settlement-calculator"
import { FaqSection } from "@/components/faq-section"
import { CtaFooter } from "@/components/cta-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />
      <main>
        <HeroSection />
        <StatsSection />
        <HowItWorksSection />
        <SellerEaseSection />
        <FocusSection />
        <MarketplaceSection />
        <FrameworkSection />
        <PricingSection />
        <SettlementCalculator />
        <FaqSection />
        <CtaFooter />
      </main>
    </div>
  )
}
