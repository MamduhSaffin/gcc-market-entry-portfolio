import type { Metadata } from "next"
import { SeoLandingPage } from "@/components/seo-landing-page"

const title = "GCC Market Entry Guides for Malaysian Brands"
const description = "Practical guides for Malaysian sellers exploring Saudi Arabia, UAE and the wider GCC: readiness, localisation, market testing and marketplace preparation."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://gccmarketentry.me/guides/" },
  openGraph: { title: `${title} | GCC Market Entry`, description, url: "https://gccmarketentry.me/guides/" },
}

export default function Page() {
  return <SeoLandingPage
    eyebrow="Practical seller resources"
    title="GCC market-entry guides built around the questions sellers actually face"
    intro="Use these guides to prepare before you commit inventory, documentation work or marketing budget. The goal is to make the first GCC conversation more focused and reduce avoidable seller friction."
    highlights={[
      "Check readiness before paying for expansion activity.",
      "Use market-specific and category-specific preparation instead of generic export advice.",
      "Separate marketplace opportunity from guaranteed approval.",
      "Build evidence from a controlled test before scaling.",
    ]}
    sections={[
      { title: "GCC Market Entry Checklist for Malaysian Brands", paragraphs: ["A structured pre-launch checklist covering product fit, pricing, documents, localisation, listing assets and fulfilment readiness."], bullets: ["Product selection", "Pricing and margin", "Documentation", "Operational readiness"] },
      { title: "Arabic Localisation for GCC E-commerce", paragraphs: ["A practical guide to preparing titles, descriptions, benefits, specifications and product instructions for Arabic-speaking customers while keeping the content accurate."], bullets: ["Arabic-ready content", "Claims discipline", "Search visibility", "Customer clarity"] },
      { title: "How to Test GCC Demand Before Scaling", paragraphs: ["A test-first framework for Malaysian sellers who want to learn from real GCC customer response before sending larger inventory or expanding the full catalogue."], bullets: ["Selected SKUs", "Demand signals", "Operational learning", "Evidence-based scaling"] },
    ]}
    faqs={[
      { question: "Are these guides official marketplace rules?", answer: "No. They are practical seller-preparation resources. Marketplace and authority requirements should always be confirmed for the exact product and target market." },
      { question: "Can I use these guides before speaking to eRomman?", answer: "Yes. They are designed to help you organise the information needed for a more productive first discussion." },
      { question: "Which guide should I start with?", answer: "Start with the GCC Market Entry Checklist. Then use the localisation or market-testing guide depending on the biggest gap in your current preparation." },
      { question: "Can I request a product-specific review?", answer: "Yes. Send a product, store or catalogue link through WhatsApp and the initial discussion can focus on your actual category and target market." },
    ]}
    canonicalPath="/guides/"
    breadcrumbLabel="Guides"
    related={[
      { href: "/guides/gcc-market-entry-checklist-malaysian-brands/", label: "GCC market-entry checklist", description: "Prepare your products, documents, pricing and operations before launch." },
      { href: "/guides/arabic-localisation-for-gcc-ecommerce/", label: "Arabic localisation", description: "Make GCC-facing product content clearer and more useful for Arabic-speaking customers." },
      { href: "/guides/how-to-test-gcc-demand-before-scaling/", label: "Test demand before scaling", description: "Use a controlled launch to collect evidence before a larger commitment." },
    ]}
    ctaTitle="Have a product already? Turn the guide into a real product review."
    whatsappPrompt="Hi Mamduh, I found the GCC Market Entry guides. I would like help applying the checklist to my brand and products."
  />
}
