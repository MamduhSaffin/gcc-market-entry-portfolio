import type { Metadata } from "next"
import { SeoLandingPage } from "@/components/seo-landing-page"

const title = "Beauty & Wellness GCC Market Entry for Malaysian Brands"
const description = "Practical GCC market-entry guidance for Malaysian beauty and wellness brands: product claims, documentation, localisation, marketplace readiness and test-first expansion."

export const metadata: Metadata = {
  title,
  description,
  keywords: ["Malaysian beauty brands GCC", "sell beauty products Saudi Arabia", "sell skincare UAE", "GCC beauty market entry", "Middle East beauty ecommerce"],
  alternates: { canonical: "https://gccmarketentry.me/beauty-wellness/" },
  openGraph: { title: `${title} | GCC Market Entry`, description, url: "https://gccmarketentry.me/beauty-wellness/" },
}

export default function Page() {
  return <SeoLandingPage
    eyebrow="Beauty & Wellness category"
    title="Build a GCC entry plan for beauty and wellness products"
    intro="Beauty and wellness is a priority category for eRomman seller development, but category potential does not remove the need for careful product claims, ingredients, documents and localisation. Malaysian brands should prepare a focused assortment and review market-specific requirements before listing."
    highlights={[
      "Lead with products that already have strong customer proof in Malaysia.",
      "Review ingredients, claims and product documents before marketplace submission.",
      "Prepare professional images and Arabic-ready product information.",
      "Start with selected hero SKUs instead of uploading the full catalogue immediately.",
    ]}
    sections={[
      { title: "Choose hero products with a clear story", paragraphs: ["A beauty range is easier to test when the first assortment has a clear purpose and strong product differentiation. Prioritise items that are already understood by Malaysian customers and that can be explained simply to a new audience."], bullets: ["Proven bestsellers", "Clear use case or benefit", "Professional packaging and imagery", "Sensible price-to-value positioning"] },
      { title: "Treat claims and documentation seriously", paragraphs: ["Beauty, wellness and health-adjacent products can face stricter scrutiny than general merchandise. Ingredient information, product claims, certificates and target-market requirements should be checked before a listing is submitted or marketing copy is finalised."], bullets: ["Ingredient and product information", "Supported claims only", "Certificates or authority documents where required", "Consistent packaging and label information"] },
      { title: "Localise for GCC customers", paragraphs: ["Good localisation helps customers understand what the product is, who it is for and how it should be used. Arabic-ready titles, descriptions and instructions should remain accurate rather than becoming exaggerated marketing copy."], bullets: ["Clear Arabic-ready titles", "Usage and benefit explanation", "Skin or product suitability information", "Avoid unsupported medical-style claims"] },
      { title: "Prepare marketplace-quality assets", paragraphs: ["Beauty listings are highly visual. Clean product images, multiple packaging angles, barcode information and clear product details can reduce friction during marketplace review and improve customer confidence after listing."], bullets: ["White-background product images", "Front, back and side packaging views", "Barcode close-up where required", "Accurate size, volume and variant details"] },
      { title: "Scale after the first market signals", paragraphs: ["Do not assume that every Malaysian bestseller will perform equally in the GCC. Use the first selected products to learn which price points, formats and benefits resonate, then expand based on evidence."], bullets: ["Track engagement by SKU", "Compare pricing response", "Refine localisation", "Expand the winning products first"] },
    ]}
    faqs={[
      { question: "Are Malaysian beauty products suitable for Saudi Arabia and UAE?", answer: "Many may have potential, but suitability depends on the exact product, ingredients, claims, documentation, pricing and marketplace or authority requirements." },
      { question: "Can I list supplements or health products the same way as cosmetics?", answer: "Not necessarily. Supplements and other health-related categories can require different regulatory and marketplace documentation and should be reviewed separately before submission." },
      { question: "Should I launch my whole range?", answer: "Usually a smaller set of hero SKUs is more practical for the first market test. It reduces documentation and listing workload while giving clearer feedback on demand." },
      { question: "What materials should I prepare first?", answer: "Prepare product links, ingredient and product information, packaging images, barcodes, available certificates and clear retail pricing. Additional documents can be identified during the review." },
    ]}
    canonicalPath="/beauty-wellness/"
    breadcrumbLabel="Beauty & Wellness"
    related={[
      { href: "/saudi-arabia/", label: "Saudi Arabia", description: "Understand the broader Saudi market-entry pathway." },
      { href: "/uae/", label: "UAE", description: "Review the UAE market-entry considerations for Malaysian brands." },
      { href: "/guides/arabic-localisation-for-gcc-ecommerce/", label: "Arabic localisation guide", description: "Prepare product content for Arabic-speaking GCC customers without weakening accuracy." },
    ]}
    whatsappPrompt="Hi Mamduh, I found the Beauty & Wellness GCC Market Entry page. I would like help reviewing my beauty, wellness or personal-care products for Saudi Arabia/UAE."
  />
}
