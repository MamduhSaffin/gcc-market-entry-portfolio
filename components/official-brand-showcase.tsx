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
    discoveryEyebrow: "Consumer discovery & digital marketing",
    discoveryTitle: "How GCC consumers discover your products",
    discoveryBody: "Arabic content, KOL and consumer engagement, paid digital discovery, market insight and demand validation work together to build visibility, trust and measurable market traction across the GCC.",
    buntingTitle: "Official GCC Seller Bunting",
    buntingBody: "A concise seller-facing overview of GCC access, Arabic support, fulfilment and marketplace expansion.",
    brochureTitle: "eRomman GCC Expansion Overview",
    brochureBody: "A visual overview of eRomman’s seller support, target markets, marketplace pathways and cross-border proposition.",
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
    discoveryEyebrow: "Consumer discovery & digital marketing",
    discoveryTitle: "Bagaimana pengguna GCC menemui produk anda",
    discoveryBody: "Kandungan Arab, KOL dan engagement pengguna, paid digital discovery, market insight dan demand validation bekerja bersama untuk membina visibility, kepercayaan dan traction pasaran di GCC.",
    buntingTitle: "Bunting Rasmi Seller GCC",
    buntingBody: "Ringkasan visual untuk seller tentang akses GCC, sokongan Arab, fulfilment dan pengembangan marketplace.",
    brochureTitle: "Ringkasan Pengembangan GCC eRomman",
    brochureBody: "Gambaran visual tentang seller support, pasaran sasaran, laluan marketplace dan cadangan cross-border eRomman.",
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
    discoveryEyebrow: "اكتشاف المستهلك والتسويق الرقمي",
    discoveryTitle: "كيف يكتشف مستهلكو الخليج منتجاتك",
    discoveryBody: "يعمل المحتوى العربي والتفاعل مع المؤثرين والمستهلكين والوصول الرقمي المدفوع ورؤى السوق والتحقق من الطلب معاً لبناء الظهور والثقة وقياس الاستجابة في أسواق الخليج.",
    buntingTitle: "البنر الرسمي لبائعي الخليج",
    buntingBody: "ملخص بصري يوضح الوصول إلى الخليج والدعم العربي وخدمات التنفيذ والتوسع عبر المنصات.",
    brochureTitle: "نظرة عامة على توسع eRomman في الخليج",
    brochureBody: "عرض بصري لدعم البائعين والأسواق المستهدفة ومسارات المنصات والقيمة المقترحة للتجارة عبر الحدود.",
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

        <div className="mt-14 grid items-center gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="lg:pr-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-primary shadow-sm">
              <Megaphone className="h-4 w-4" />
              {t.discoveryEyebrow}
            </span>
            <h3 className="mt-5 text-3xl font-black tracking-tight text-[#211916] sm:text-4xl">{t.discoveryTitle}</h3>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{t.discoveryBody}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {t.pillars.map(([title, body], index) => {
                const Icon = icons[index] ?? Globe2
                return (
                  <div key={title} className="rounded-2xl border border-red-100 bg-white p-4 shadow-sm">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-white"><Icon className="h-4 w-4" /></span>
                    <h4 className="mt-3 text-sm font-black text-[#2c221f]">{title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{body}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <article className="overflow-hidden rounded-[2rem] border border-red-100 bg-white p-3 shadow-[0_30px_80px_rgba(92,12,18,0.12)] sm:p-4">
            <div className="overflow-hidden rounded-[1.45rem] bg-[#fffdfb]">
              <img
                src={asset("eromman-consumer-discovery.webp")}
                alt="How GCC consumers discover products through Arabic content, KOL engagement and paid digital discovery"
                className="block h-auto w-full object-contain"
                decoding="async"
              />
            </div>
          </article>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="overflow-hidden rounded-[2rem] border border-red-100 bg-white shadow-[0_24px_65px_rgba(92,12,18,0.09)]">
            <div className="bg-gradient-to-r from-[#8b0a13] to-[#b5121b] px-6 py-5 text-white sm:px-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#f2cf7b]">{t.buntingTitle}</p>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/80">{t.buntingBody}</p>
                </div>
                <span className="hidden h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/12 text-white sm:grid"><Store className="h-5 w-5" /></span>
              </div>
            </div>
            <div className="flex min-h-[520px] items-center justify-center bg-[#f7f1ed] p-5 sm:p-7">
              <img
                loading="lazy"
                decoding="async"
                src={asset("eromman-bunting-red.webp")}
                alt="eRomman GCC market entry bunting"
                className="block max-h-[760px] w-auto max-w-full rounded-xl object-contain shadow-2xl"
              />
            </div>
          </article>

          <article className="overflow-hidden rounded-[2rem] border border-red-100 bg-white shadow-[0_24px_65px_rgba(92,12,18,0.09)]">
            <div className="bg-gradient-to-r from-[#8b0a13] to-[#b5121b] px-6 py-5 text-white sm:px-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#f2cf7b]">{t.brochureTitle}</p>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/80">{t.brochureBody}</p>
                </div>
                <span className="hidden h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/12 text-white sm:grid"><Globe2 className="h-5 w-5" /></span>
              </div>
            </div>
            <div className="flex min-h-[520px] items-center justify-center bg-[#fffdfb] p-5 sm:p-7">
              <img
                loading="lazy"
                decoding="async"
                src={asset("eromman-premium-brochure.webp")}
                alt="eRomman Middle East marketplace and seller support brochure"
                className="block h-auto w-full max-w-full rounded-xl object-contain"
              />
            </div>
          </article>
        </div>

        <div className="mt-10 rounded-[2rem] border border-red-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-primary">{t.visualTitle}</p>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">{t.visualBody}</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground"><ShieldCheck className="h-4 w-4 text-primary" />{t.note}</div>
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
