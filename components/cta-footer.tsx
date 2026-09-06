import { ExternalLink, Mail, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EROMMAN_LINKS, SELLER_SUPPORT } from "@/lib/links"
import { SITE_BASE_PATH } from "@/lib/site"

export function CtaFooter() {
  return (
    <>
      <section id="contact" className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-primary to-red-900 text-primary-foreground shadow-xl shadow-primary/10">
            <div className="grid gap-10 px-6 py-12 sm:px-10 lg:grid-cols-5 lg:px-14 lg:py-16">
              <div className="lg:col-span-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Seller support contact</p>
                <h2 className="mt-3 max-w-2xl text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  Discuss whether your products are ready for the GCC market
                </h2>
                <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
                  Start with a practical market-fit discussion, select suitable SKUs and map the next step without disrupting your current Malaysia operations.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    nativeButton={false}
                    render={
                      <a href={EROMMAN_LINKS.sellerSupportWhatsapp} target="_blank" rel="noopener noreferrer" />
                    }
                    size="lg"
                    className="rounded-full bg-white px-6 text-primary hover:bg-white/90"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp Mamduh
                  </Button>
                  <Button
                    nativeButton={false}
                    render={<a href={EROMMAN_LINKS.sellerSupportEmail} />}
                    size="lg"
                    variant="outline"
                    className="rounded-full border-primary-foreground/30 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Email Seller Support
                  </Button>
                </div>
              </div>

              <aside className="rounded-2xl bg-white p-6 text-foreground lg:col-span-2">
                <img
                  src={SITE_BASE_PATH + "/images/eromman-logo.png"}
                  alt="eRomman"
                  width={1157}
                  height={238}
                  className="h-8 w-auto"
                />
                <p className="mt-6 font-serif text-xl font-semibold">{SELLER_SUPPORT.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{SELLER_SUPPORT.role}</p>

                <div className="mt-6 space-y-3 text-sm">
                  <a href={EROMMAN_LINKS.sellerSupportEmail} className="flex items-center gap-3 hover:text-primary">
                    <Mail className="h-4 w-4 text-primary" />
                    {SELLER_SUPPORT.email}
                  </a>
                  <a href={EROMMAN_LINKS.sellerSupportPhone} className="flex items-center gap-3 hover:text-primary">
                    <Phone className="h-4 w-4 text-primary" />
                    {SELLER_SUPPORT.phone}
                  </a>
                  <a
                    href={EROMMAN_LINKS.home}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-primary"
                  >
                    <ExternalLink className="h-4 w-4 text-primary" />
                    www.eromman.com
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-muted-foreground sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>Portfolio © {new Date().getFullYear()} Muhammad Mamduh Bin Saffin.</p>
          <p className="max-w-2xl lg:text-right">
            Professional portfolio based on eRomman seller-support materials. For official corporate information, visit{" "}
            <a
              href={EROMMAN_LINKS.home}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline underline-offset-4"
            >
              eromman.com
            </a>.
          </p>
        </div>
      </footer>
    </>
  )
}
