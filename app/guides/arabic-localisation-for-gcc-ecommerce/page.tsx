import type { Metadata } from "next"
import { SeoLandingPage } from "@/components/seo-landing-page"

const title = "Arabic Localisation for GCC E-commerce"
const description = "A practical Arabic localisation guide for Malaysian brands preparing GCC e-commerce listings, product descriptions, claims, specifications and customer-facing content."

export const metadata: Metadata = {
  title,
  description,
  keywords: ["Arabic ecommerce localisation", "Arabic product listing GCC", "Arabic SEO Middle East ecommerce", "Malaysia GCC Arabic translation"],
  alternates: { canonical: "https://gccmarketentry.me/guides/arabic-localisation-for-gcc-ecommerce/" },
  openGraph: { title: `${title} | GCC Market Entry`, description, url: "https://gccmarketentry.me/guides/arabic-localisation-for-gcc-ecommerce/" },
}

export default function Page() {
  return <SeoLandingPage
    eyebrow="Arabic-ready product content"
    title="Arabic localisation for GCC e-commerce: translate the meaning, not just the words"
    intro="Good Arabic localisation should help GCC customers understand the product accurately and quickly. It should preserve specifications, usage information and supported claims while adapting the presentation for Arabic-speaking customers and regional marketplace search behaviour."
    highlights={[
      "Start from accurate English or Malay source content before translating.",
      "Keep product claims consistent with the evidence and packaging.",
      "Localise titles, benefits, specifications and usage information as one system.",
      "Review Arabic content in context rather than translating isolated keywords.",
    ]}
    sections={[
      { title: "Fix the source content first", paragraphs: ["Localisation cannot repair unclear product information. Before translating, make sure the source listing has a clear title, product type, benefits, specifications, usage instructions and important limitations."], bullets: ["One clear product name", "Consistent dimensions or ingredients", "Supported benefits", "Correct model or variant information"] },
      { title: "Write for customer understanding", paragraphs: ["Direct word-for-word translation can sound unnatural or create ambiguity. Arabic content should communicate what the product is, why it matters, how it is used and which specifications affect the purchase decision."], bullets: ["Natural Arabic phrasing", "Clear benefit hierarchy", "Readable specifications", "Customer-friendly usage information"] },
      { title: "Keep claims disciplined", paragraphs: ["This is especially important for beauty, wellness and health-adjacent products. Localisation should not turn a modest product statement into a medical, guaranteed or exaggerated claim."], bullets: ["Match packaging and source claims", "Avoid unsupported superlatives", "Do not invent certifications", "Flag regulated language for review"] },
      { title: "Localise marketplace search terms carefully", paragraphs: ["Search optimisation can help customers discover a listing, but keywords should remain relevant to the actual product. Use category language, product type, key specifications and genuine customer-use terms rather than keyword stuffing."], bullets: ["Product category terms", "Key specifications", "Brand and model", "Relevant customer use cases"] },
      { title: "Review the full listing before publishing", paragraphs: ["Final quality control should compare Arabic content with the source content, packaging images and product documents. This reduces inconsistencies that can confuse customers or slow down platform review."], bullets: ["Title versus packaging", "Claims versus documentation", "Variant and size consistency", "Image and text alignment"] },
    ]}
    faqs={[
      { question: "Is Arabic required for every GCC marketplace?", answer: "Requirements vary by market and platform. Even where English content is accepted, Arabic-ready customer information can improve regional clarity and should be considered as part of market preparation." },
      { question: "Can I use automatic translation only?", answer: "Automatic translation can help create a draft, but product listings should be reviewed for accuracy, natural phrasing, technical meaning and claims before publication." },
      { question: "What should never be changed during localisation?", answer: "Core facts such as ingredients, dimensions, model numbers, warnings, usage instructions and supported claims should remain consistent with the product and its documents." },
      { question: "Is Arabic SEO different from translation?", answer: "Yes. Translation focuses on meaning, while Arabic SEO also considers the search terms customers may use. Search terms must still be accurate and relevant to the product." },
    ]}
    canonicalPath="/guides/arabic-localisation-for-gcc-ecommerce/"
    breadcrumbLabel="Arabic Localisation"
    breadcrumbParent={{ label: "Guides", href: "/guides/" }}
    related={[
      { href: "/beauty-wellness/", label: "Beauty & Wellness", description: "Apply careful localisation to a category where claims and ingredients matter." },
      { href: "/guides/gcc-market-entry-checklist-malaysian-brands/", label: "GCC entry checklist", description: "Make localisation one part of a complete market-readiness review." },
      { href: "/uae/", label: "UAE market entry", description: "See how bilingual preparation fits into a UAE launch plan." },
    ]}
    whatsappPrompt="Hi Mamduh, I found your Arabic localisation guide. I would like help reviewing my product content for GCC customers and marketplace listings."
  />
}
