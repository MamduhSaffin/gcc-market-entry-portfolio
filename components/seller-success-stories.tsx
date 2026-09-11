"use client"

import { ExternalLink, PlayCircle } from "lucide-react"

type Lang = "en" | "bm" | "ar"

const copy = {
  en: {
    eyebrow: "Seller voices",
    title: "Seller Success Stories",
    body: "Hear directly from sellers and discover their experience with eRomman. Real stories help new brands understand the journey before taking the next step.",
    story1: "Seller Success Story 01",
    story2: "Seller Success Story 02",
    watch: "Watch on YouTube",
  },
  bm: {
    eyebrow: "Suara penjual",
    title: "Kisah Kejayaan Penjual",
    body: "Dengar sendiri pengalaman penjual bersama eRomman. Kisah sebenar membantu jenama baharu memahami perjalanan sebelum mengambil langkah seterusnya.",
    story1: "Kisah Kejayaan Penjual 01",
    story2: "Kisah Kejayaan Penjual 02",
    watch: "Tonton di YouTube",
  },
  ar: {
    eyebrow: "أصوات البائعين",
    title: "قصص نجاح البائعين",
    body: "استمع مباشرة إلى تجارب البائعين مع eRomman. تساعد القصص الحقيقية العلامات الجديدة على فهم الرحلة قبل اتخاذ الخطوة التالية.",
    story1: "قصة نجاح البائع 01",
    story2: "قصة نجاح البائع 02",
    watch: "المشاهدة على YouTube",
  },
} as const

const stories = [
  { id: "a-ak5h5d3jo", start: 21, url: "https://www.youtube.com/watch?v=a-ak5h5d3jo&t=21s" },
  { id: "I7GU3g0i7Bg", start: 25, url: "https://www.youtube.com/watch?v=I7GU3g0i7Bg&t=25s" },
]

export function SellerSuccessStories({ lang }: { lang: Lang }) {
  const t = copy[lang]
  const labels = [t.story1, t.story2]
  const rtl = lang === "ar"

  return (
    <section id="seller-success-stories" dir={rtl ? "rtl" : "ltr"} className="relative overflow-hidden border-y border-red-100 bg-[#fff8f3] py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-32 top-8 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-8 h-72 w-72 rounded-full bg-[#d5a84b]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-primary shadow-sm">
            <PlayCircle className="h-4 w-4" />
            {t.eyebrow}
          </span>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-[#211a18] sm:text-4xl lg:text-5xl">{t.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-[#70635e] sm:text-lg">{t.body}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {stories.map((story, index) => (
            <article key={story.id} className="overflow-hidden rounded-[1.75rem] border border-red-100 bg-white shadow-[0_22px_60px_rgba(92,12,18,0.10)] transition hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(92,12,18,0.14)]">
              <div className="aspect-video overflow-hidden bg-black">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${story.id}?start=${story.start}&rel=0`}
                  title={labels[index]}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary">eRomman</p>
                  <h3 className="mt-1 text-lg font-black text-[#241c1a] sm:text-xl">{labels[index]}</h3>
                </div>
                <a
                  href={story.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-red-100 px-3.5 py-2 text-xs font-bold text-primary transition hover:bg-primary hover:text-white"
                >
                  {t.watch}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
