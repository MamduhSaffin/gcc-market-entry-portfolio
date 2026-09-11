"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { ArrowUpRight, BarChart3, Globe2, Megaphone, ShieldCheck, Store, Truck, Users } from "lucide-react"
import { SITE_BASE_PATH } from "@/lib/site"

const copy = {
  en: {
    eyebrow: "Official eRomman GCC growth materials",
    title: "See the market-entry ecosystem behind the seller journey",
    body: "A clearer view of how eRomman positions Malaysian brands for GCC visibility, consumer engagement, market validation and structured expansion.",
    visualTitle: "GCC market-entry toolkit",
    visualBody: "Official campaign and business-development materials used to explain the eRomman approach to Malaysian brands.",
    metrics: [["1,300+", "Sellers"], ["250,000+", "SKUs"], ["9M+", "Campaign views"], ["4", "Regional locations"]],
    pillars: [
      ["Visibility", "Build marketplace presence and product discoverability."],
      ["Engagement", "Use Arabic content, campaigns and trusted voices to reach GCC consumers."],
      ["Market validation", "Observe demand, feedback and product response before scaling."],
      ["Expansion", "Scale validated products across suitable GCC channels."],
    ],
    presence: "Regional presence: Malaysia (Kuala Lumpur), Saudi Arabia (Jeddah), UAE (Dubai) and Indonesia (Jakarta).",
    note: "Figures and operating details reflect the eRomman GCC booklet supplied for this website and may change over time.",
    card1: "Your gateway to the Middle East",
    card2: "GCC consumer discovery",
    card3: "Seller and marketplace ecosystem",
  },
  bm: {
    eyebrow: "Bahan rasmi pertumbuhan GCC eRomman",
    title: "Lihat ekosistem kemasukan pasaran di sebalik perjalanan seller",
    body: "Gambaran lebih jelas tentang bagaimana eRomman membantu jenama Malaysia membina visibility, engagement pengguna, market validation dan pengembangan berstruktur di GCC.",
    visualTitle: "Toolkit kemasukan pasaran GCC",
    visualBody: "Bahan rasmi kempen dan business development yang digunakan untuk menerangkan pendekatan eRomman kepada jenama Malaysia.",
    metrics: [["1,300+", "Seller"], ["250,000+", "SKU"], ["9M+", "Campaign views"], ["4", "Lokasi serantau"]],
    pillars: [
      ["Visibility", "Bina kehadiran marketplace dan tingkatkan product discoverability."],
      ["Engagement", "Gunakan kandungan Arab, kempen dan trusted voices untuk capai pengguna GCC."],
      ["Market validation", "Nilai demand, feedback dan respons produk sebelum scale."],
      ["Expansion", "Scale produk yang telah divalidasi melalui saluran GCC yang sesuai."],
    ],
    presence: "Kehadiran serantau: Malaysia (Kuala Lumpur), Arab Saudi (Jeddah), UAE (Dubai) dan Indonesia (Jakarta).",
    note: "Angka dan butiran operasi merujuk kepada GCC booklet eRomman yang dibekalkan untuk laman ini dan boleh berubah dari semasa ke semasa.",
    card1: "Gerbang anda ke Timur Tengah",
    card2: "Bagaimana pengguna GCC menemui produk",
    card3: "Ekosistem seller dan marketplace",
  },
  ar: {
    eyebrow: "مواد eRomman الرسمية للنمو في الخليج",
    title: "تعرّف على منظومة دخول السوق وراء رحلة البائع",
    body: "صورة أوضح لكيفية مساعدة eRomman للعلامات الماليزية على بناء الظهور والتفاعل مع المستهلك والتحقق من الطلب والتوسع المنظم في أسواق الخليج.",
    visualTitle: "منظومة أدوات دخول السوق الخليجي",
    visualBody: "مواد رسمية للحملات وتطوير الأعمال تُستخدم لشرح منهج eRomman للعلامات الماليزية.",
    metrics: [["1,300+", "بائع"], ["250,000+", "منتج SKU"], ["9M+", "مشاهدة للحملات"], ["4", "مواقع إقليمية"]],
    pillars: [
      ["الظهور", "بناء حضور في المنصات وتحسين اكتشاف المنتجات."],
      ["التفاعل", "محتوى عربي وحملات وأصوات موثوقة للوصول إلى المستهلك الخليجي."],
      ["التحقق من السوق", "قياس الطلب وردود الفعل واستجابة المنتج قبل التوسع."],
      ["التوسع", "توسيع المنتجات التي أثبتت جدواها عبر القنوات الخليجية المناسبة."],
    ],
    presence: "الحضور الإقليمي: ماليزيا (كوالالمبور)، السعودية (جدة)، الإمارات (دبي)، وإندونيسيا (جاكرتا).",
    note: "الأرقام والتفاصيل التشغيلية مأخوذة من كتيب eRomman الخليجي المرفق لهذا الموقع وقد تتغير بمرور الوقت.",
    card1: "بوابتك إلى الشرق الأوسط",
    card2: "كيف يكتشف مستهلكو الخليج المنتجات",
    card3: "منظومة البائع والمنصات",
  },
} as const

function asset(name: string) {
  return `${SITE_BASE_PATH}/images/official/${name}`
}

export function OfficialBrandShowcase() {
  const [target, setTarget] = useState<HTMLElement | null>(null)
  const [lang, setLang] = useState<keyof typeof copy>("en")

  useEffect(() => {
    const path = window.location.pathname.replace(/\/+$/, "") || "/"
    const allowed = ["/", "/en", "/bm", "/ar"]
    if (!allowed.includes(path)) return
    if (path === "/bm") setLang("bm")
    else if (path === "/ar") setLang("ar")
    else setLang("en")
    setTarget(document.querySelector("main"))
  }, [])

  if (!target) return null
  const t = copy[lang]
  const rtl = lang === "ar"
  const icons = [Globe2, Users, BarChart3, ArrowUpRight]

  return createPortal(
    <section id="official-eromman-materials" dir={rtl ? "rtl" : "ltr"} className="border-t border-red-100 bg-[#fff9f5] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-primary">{t.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#211916] sm:text-4xl lg:text-5xl">{t.title}</h2>
          </div>
          <div>
            <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">{t.body}</p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {t.metrics.map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-red-100 bg-white p-4 shadow-sm">
                  <p className="text-2xl font-black text-primary sm:text-3xl">{value}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.08em] text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <article className="overflow-hidden rounded-[2rem] border border-red-100 bg-white shadow-[0_28px_70px_rgba(92,12,18,0.10)]">
            <div className="bg-[#850a12] px-6 py-5 text-white">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#f0c66a]">{t.card1}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/75">Arabic marketplace · GCC market access · fulfilment support · marketplace expansion</p>
            </div>
            <div className="bg-[#f5eee9] p-4 sm:p-6">
              <img loading="lazy" src={asset("eromman-bunting-red.webp")} alt="eRomman GCC market entry bunting" className="mx-auto max-h-[760px] w-auto rounded-xl object-contain shadow-2xl" />
            </div>
          </article>

          <div className="grid gap-6">
            <article className="overflow-hidden rounded-[2rem] border border-red-100 bg-white shadow-[0_28px_70px_rgba(92,12,18,0.08)]">
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-primary">{t.card2}</p>
                    <h3 className="mt-2 text-xl font-black text-[#251b18] sm:text-2xl">Arabic content, trusted voices, paid reach and market insight</h3>
                  </div>
                  <span className="hidden h-12 w-12 place-items-center rounded-xl bg-primary text-white sm:grid"><Megaphone className="h-5 w-5" /></span>
                </div>
              </div>
              <img loading="lazy" src={asset("eromman-consumer-discovery.webp")} alt="How GCC consumers discover products through Arabic content, KOL engagement and paid digital discovery" className="w-full border-t border-red-100 object-cover" />
            </article>

            <article className="overflow-hidden rounded-[2rem] border border-red-100 bg-white shadow-[0_28px_70px_rgba(92,12,18,0.08)]">
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-primary">{t.card3}</p>
                    <h3 className="mt-2 text-xl font-black text-[#251b18] sm:text-2xl">Sell to the Middle East with localisation, marketing and fulfilment support</h3>
                  </div>
                  <span className="hidden h-12 w-12 place-items-center rounded-xl bg-primary text-white sm:grid"><Store className="h-5 w-5" /></span>
                </div>
              </div>
              <img loading="lazy" src={asset("eromman-premium-brochure.webp")} alt="eRomman Middle East marketplace and seller support brochure" className="w-full border-t border-red-100 object-cover" />
            </article>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-red-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-primary">{t.visualTitle}</p>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">{t.visualBody}</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground"><ShieldCheck className="h-4 w-4 text-primary" />{t.note}</div>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.pillars.map(([title, body], index) => {
              const Icon = icons[index] ?? Globe2
              return (
                <div key={title} className="rounded-2xl border border-red-100 bg-[#fffaf7] p-5">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-white"><Icon className="h-4 w-4" /></span>
                  <h3 className="mt-4 text-lg font-black text-[#2c221f]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-6 flex flex-col gap-3 rounded-2xl bg-[#820910] p-5 text-white sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-bold leading-relaxed text-white/90">{t.presence}</p>
            <div className="flex shrink-0 items-center gap-3 text-xs font-black uppercase tracking-[0.1em] text-[#f2cf7b]"><Truck className="h-4 w-4" />Consignment &amp; FBE strategy</div>
          </div>
        </div>
      </div>
    </section>,
    target,
  )
}
