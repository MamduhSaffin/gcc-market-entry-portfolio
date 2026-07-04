import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaFooter() {
  return (
    <>
      <section id="contact" className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-border">
            <Image
              src="/images/gcc-cta.png"
              alt="Middle Eastern marketplace with wellness products"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/85" />
            <div className="relative flex flex-col items-start gap-6 px-6 py-14 text-primary-foreground sm:px-12 lg:px-16 lg:py-20">
              <h2 className="max-w-2xl text-balance font-serif text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
                Ready to expand into the GCC?
              </h2>
              <p className="max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
                Explore market opportunities and connect with our business development team to map
                your entry strategy.
              </p>
              <Button
                nativeButton={false}
                render={<a href="mailto:hello@eromman.com" />}
                size="lg"
                className="rounded-full bg-accent px-6 text-accent-foreground hover:bg-accent/90"
              >
                Start Your Journey
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center sm:flex-row sm:justify-between sm:px-6 sm:text-left lg:px-8">
          <div className="flex items-center">
            <Image
              src="/images/eromman-logo.png"
              alt="eRomman"
              width={1157}
              height={238}
              className="h-9 w-auto"
            />
          </div>
          <div className="text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} eRomman GCC Business Development Hub. All rights reserved.</p>
            <p className="mt-1">By Muhammad Mamduh Bin Saffin — Business Development Lead</p>
          </div>
        </div>
      </footer>
    </>
  )
}
