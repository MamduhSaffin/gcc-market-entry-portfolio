"use client"

import { ExternalLink, PlayCircle, Sparkles } from "lucide-react"

type Lang = "en" | "bm" | "ar"

const VIDEO_ID = "SNpyhzCsYHs"
const VIDEO_URL = "https://youtu.be/SNpyhzCsYHs"

const copy = {
  en: {
    eyebrow: "Discover eRomman",
    title: "See How eRomman Connects Brands to the Middle East",
    body: "Watch our company profile to understand eRomman’s marketplace ecosystem, regional reach and the support available for sellers exploring the GCC market.",
    badge: "Official Company Profile",
    watch: "Watch on YouTube",
    note: "Your gateway to Middle East marketplace opportunities",
  },
  bm: {
    eyebrow: "Kenali eRomman",
    title: "Lihat Bagaimana eRomman Menghubungkan Jenama ke Timur Tengah",
    body: "Tonton profil syarikat kami untuk memahami ekosistem marketplace eRomman, jangkauan serantau dan sokongan yang tersedia untuk penjual yang ingin meneroka pasaran GCC.",
    badge: "Profil Rasmi Syarikat",
    watch: "Tonton di YouTube",
    note: "Pintu masuk anda ke peluang marketplace Timur Tengah",
  },
  ar: {
    eyebrow: "تعرّف على eRomman",
    title: "شاهد كيف تربط eRomman العلامات التجارية بأسواق الشرق الأوسط",
    body: "شاهد الملف التعريفي للشركة للتعرّف على منظومة eRomman وانتشارها الإقليمي والدعم المتاح للبائعين الراغبين في دخول أسواق الخليج.",
    badge: "الملف التعريفي الرسمي للشركة",
    watch: "المشاهدة على YouTube",
    note: "بوابتك إلى فرص التجارة الإلكترونية في الشرق الأوسط",
  },
} as const

export function CompanyProfileVideo({ lang }: { lang: Lang }) {
  const t = copy[lang]

  return (
    <section id="company-profile-video" className="relative overflow-hidden bg-[#8f0912] py-20 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#d5a84b]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white backdrop-blur">
              <Sparkles className="h-4 w-4 text-[#f2cf7b]" />
              {t.eyebrow}
            </span>
            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">{t.title}</h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{t.body}</p>

            <div className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-black/10 px-4 py-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-primary shadow-lg">
                <PlayCircle className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#f2cf7b]">{t.badge}</p>
                <p className="mt-0.5 text-sm font-semibold text-white/85">{t.note}</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-black shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0`}
                title="eRomman Company Profile"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="flex flex-col gap-3 border-t border-white/10 bg-[#75070e] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f2cf7b]">eRomman</p>
                <p className="mt-1 font-bold">{t.badge}</p>
              </div>
              <a
                href={VIDEO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-black text-primary transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                {t.watch}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
