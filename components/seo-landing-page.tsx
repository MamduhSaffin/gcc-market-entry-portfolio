import { ArrowRight, CheckCircle2, ExternalLink, Globe2, MessageCircle, ShieldCheck } from "lucide-react"
import { EROMMAN_LINKS, SELLER_SUPPORT } from "@/lib/links"
import { SITE_URL } from "@/lib/site"

type Section = {
  title: string
  paragraphs?: string[]
  bullets?: string[]
}

type Faq = { question: string; answer: string }
type RelatedLink = { href: string; label: string; description: string }
type BreadcrumbParent = { label: string; href: string }

export type SeoLandingPageProps = {
  eyebrow: string
  title: string
  intro: string
  highlights: string[]
  sections: Section[]
  faqs: Faq[]
  canonicalPath: string
  breadcrumbLabel: string
  breadcrumbParent?: BreadcrumbParent
  related: RelatedLink[]
  ctaTitle?: string
  ctaBody?: string
  whatsappPrompt?: string
}

const jsonLd = (value: unknown) => ({ __html: JSON.stringify(value).replace(/</g, "\\u003c") })

export function SeoLandingPage({
  eyebrow,
  title,
  intro,
  highlights,
  sections,
  faqs,
  canonicalPath,
  breadcrumbLabel,
  breadcrumbParent,
  related,
  ctaTitle = "Want a practical GCC starting point for your products?",
  ctaBody = "Share your product or brand link. I can help you identify the most practical category, documentation and market-entry questions to review first.",
  whatsappPrompt = "Hi Mamduh, I found GCC Market Entry and would like help reviewing my products for Saudi Arabia, UAE or the wider GCC.",
}: SeoLandingPageProps) {
  const canonical = `${SITE_URL}${canonicalPath}`
  const whatsapp = `https://wa.me/60126413812?text=${encodeURIComponent(whatsappPrompt)}`

  const breadcrumbItems = [
    { "@type": "ListItem", position: 1, name: "GCC Market Entry", item: `${SITE_URL}/` },
    ...(breadcrumbParent
      ? [{ "@type": "ListItem", position: 2, name: breadcrumbParent.label, item: `${SITE_URL}${breadcrumbParent.href}` }]
      : []),
    {
      "@type": "ListItem",
      position: breadcrumbParent ? 3 : 2,
      name: breadcrumbLabel,
      item: canonical,
    },
  ]

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      description: intro,
      url: canonical,
      inLanguage: "en-MY",
      isPartOf: { "@type": "WebSite", name: "GCC Market Entry", url: `${SITE_URL}/` },
      author: {
        "@type": "Person",
        name: SELLER_SUPPORT.name,
        jobTitle: SELLER_SUPPORT.role,
        url: EROMMAN_LINKS.sellerSupportLinkedIn,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ]

  return (
    <div className="min-h-screen bg-[#fffaf7] text-[#1c1715]">
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />
      ))}

      <header className="border-b border-red-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <a href="/" className="flex items-center gap-3" aria-label="GCC Market Entry home">
            <img src="/images/eromman-logo.png" alt="eRomman" className="h-8 w-auto" />
            <span className="h-7 w-px bg-red-100" />
            <span>
              <strong className="block text-sm font-black">GCC Market Entry</strong>
              <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-primary">Seller Growth Portal</span>
            </span>
          </a>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold text-muted-foreground" aria-label="GCC market resources">
            <a href="/saudi-arabia/" className="hover:text-primary">Saudi Arabia</a>
            <a href="/uae/" className="hover:text-primary">UAE</a>
            <a href="/beauty-wellness/" className="hover:text-primary">Beauty & Wellness</a>
            <a href="/electronics/" className="hover:text-primary">Electronics</a>
            <a href="/guides/" className="hover:text-primary">Guides</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-red-100 bg-gradient-to-br from-[#fffaf7] via-white to-[#fff0eb]">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div className="relative z-10">
              <a href="/" className="mb-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-primary">GCC Market Entry</a>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-primary">{eyebrow}</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">{title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#665953]">{intro}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a data-track="whatsapp-seo-page" href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-primary/20">
                  <MessageCircle className="h-4 w-4" /> Check My Products
                </a>
                <a href="/#fit-check" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary/15 bg-white px-6 py-3.5 text-sm font-black text-primary">
                  Use Product Fit Checker <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <aside className="relative z-10 rounded-[2rem] border border-red-100 bg-white p-6 shadow-xl shadow-red-950/5 sm:p-8">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary"><ShieldCheck className="h-5 w-5" /></div>
              <h2 className="text-xl font-black">What to focus on first</h2>
              <div className="mt-5 space-y-4">
                {highlights.map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-6 text-[#554a45]"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>{item}</span></div>
                ))}
              </div>
              <p className="mt-6 rounded-xl bg-[#fff7f3] p-4 text-xs leading-5 text-muted-foreground">This portal provides practical seller guidance. Product eligibility, marketplace acceptance and regulatory requirements depend on the product, category, documents and target market.</p>
            </aside>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <article key={section.title} className="grid gap-4 border-b border-border pb-10 last:border-0 last:pb-0 md:grid-cols-[140px_1fr]">
                  <div className="text-xs font-black uppercase tracking-[0.14em] text-primary">{String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <h2 className="text-2xl font-black tracking-[-0.02em] sm:text-3xl">{section.title}</h2>
                    {section.paragraphs?.map((paragraph) => <p key={paragraph} className="mt-4 text-base leading-8 text-[#665953]">{paragraph}</p>)}
                    {section.bullets && (
                      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                        {section.bullets.map((bullet) => <li key={bullet} className="flex gap-3 rounded-xl bg-[#fff8f5] p-4 text-sm leading-6"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{bullet}</span></li>)}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-red-100 bg-[#fff8f5] py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-primary">Seller questions</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.03em]">Frequently asked questions</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-2xl border border-red-100 bg-white p-6">
                  <h3 className="font-black">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#665953]">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-primary">Continue exploring</p>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.03em]">Related GCC market-entry resources</h2>
              </div>
              <Globe2 className="hidden h-9 w-9 text-primary md:block" />
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <a key={item.href} href={item.href} className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                  <h3 className="font-black group-hover:text-primary">{item.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-black text-primary">Read guide <ArrowRight className="h-3.5 w-3.5" /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#710910] py-16 text-white lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-white/60">Next step</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl">{ctaTitle}</h2>
              <p className="mt-4 max-w-3xl leading-7 text-white/75">{ctaBody}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a data-track="whatsapp-seo-cta" href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-black text-primary"><MessageCircle className="h-4 w-4" /> WhatsApp Mamduh</a>
              <a data-track="eromman-official" href={EROMMAN_LINKS.home} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 text-sm font-black text-white">Official eRomman <ExternalLink className="h-4 w-4" /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-red-900/40 bg-[#5c070d] text-white">
        <div className="mx-auto max-w-7xl px-4 py-8 text-xs leading-6 text-white/70 sm:px-6 lg:px-8">
          GCC Market Entry is a seller information portal prepared by {SELLER_SUPPORT.name} using eRomman seller materials and practical market-entry guidance. For official corporate information, policies and registration, refer to eromman.com.
        </div>
      </footer>
    </div>
  )
}
