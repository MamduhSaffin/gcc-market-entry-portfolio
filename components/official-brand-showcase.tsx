"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { ArrowUpRight, BarChart3, Globe2, Megaphone, ShieldCheck, Truck, Users } from "lucide-react"
import { SITE_BASE_PATH } from "@/lib/site"

const copy = {
  en: {
    eyebrow: "Official eRomman GCC growth materials",
    title: "See the GCC market-entry ecosystem clearly",
    body: "A cleaner visual overview of how eRomman supports Malaysian brands with market access, Arabic localisation, consumer discovery, validation and structured GCC expansion.",
    metrics: [["1,300+", "Sellers"], ["250,000+", "SKUs"], ["9M+", "Campaign views"], ["4", "Regional locations"]],
    discoveryEyebrow: "Consumer discovery & digital marketing",
    discoveryTitle: "How GCC consumers discover your products",
    discoveryBody: "Arabic content, KOL engagement, paid digital discovery, market insight and demand validation work together to build visibility and measurable market traction.",
    overviewEyebrow: "Seller expansion overview",
    overviewTitle: "Sell to the Middle East through a structured pathway",
    overviewBody: "A seller-facing visual showing target GCC markets, Arabic support, marketplace opportunities, fulfilment and the practical steps from onboarding to orders.",
    pillars: [
      ["Visibility", "Build marketplace presence and discoverability."],
      ["Engagement", "Reach GCC consumers with Arabic content and campaigns."],
      ["Market validation", "Measure response before scaling further."],
      ["Expansion", "Grow validated products through suitable GCC channels."],
    ],
    presence: "Regional presence: Kuala Lumpur · Jeddah · Dubai · Jakarta",
    note: "Figures and operating details reflect the supplied eRomman GCC materials and may change over time.",
  },
  bm: {
    eyebrow: "Bahan rasmi pertumbuhan GCC eRomman",
    title: "Lihat ekosistem kemasukan pasaran GCC dengan lebih jelas",
    body: "Gambaran visual yang lebih kemas tentang bagaimana eRomman membantu jenama Malaysia dari segi market access, lokalisasi Arab, consumer discovery, validation dan pengembangan GCC secara berstruktur.",
    metrics: [["1,300+", "Seller"], ["250,000+", "SKU"], ["9M+", "Campaign views"], ["4", "Lokasi serantau"]],
    discoveryEyebrow: "Consumer discovery & digital marketing",
    discoveryTitle: "Bagaimana pengguna GCC menemui produk anda",
    discoveryBody: "Kandungan Arab, KOL engagement, paid digital discovery, market insight dan demand validation membantu membina visibility dan traction pasaran yang boleh diukur.",
    overviewEyebrow: "Ringkasan pengembangan seller",
    overviewTitle: "Jual ke Timur Tengah melalui laluan yang lebih tersusun",
    overviewBody: "Visual mesra seller yang menunjukkan pasaran GCC sasaran, sokongan Arab, peluang marketplace, fulfilment dan langkah praktikal daripada onboarding kepada order.",
    pillars: [
      ["Visibility", "Bina kehadiran marketplace dan product discoverability."],
      ["Engagement", "Capai pengguna GCC melalui kandungan Arab dan kempen."],
      ["Market validation", "Nilai respons sebelum scale lebih jauh."],
      ["Expansion", "Kembangkan produk yang telah divalidasi melalui saluran GCC yang sesuai."],
    ],
    presence: "Kehadiran serantau: Kuala Lumpur · Jeddah · Dubai · Jakarta",
    note: "Angka dan butiran operasi merujuk bahan GCC eRomman yang dibekalkan dan boleh berubah dari semasa ke semasa.",
  },
  ar: {
    eyebrow: "مواد eRomman الرسمية للنمو في الخليج",
    title: "تعرّف بوضوح على منظومة دخول السوق الخليجي",
    body: "عرض بصري أنظف لكيفية دعم eRomman للعلامات الماليزية عبر الوصول إلى السوق والتوطين العربي واكتشاف المستهلك والتحقق من الطلب والتوسع المنظم في الخليج.",
    metrics: [["1,300+", "بائع"], ["250,000+", "منتج SKU"], ["9M+", "مشاهدة للحملات"], ["4", "مواقع إقليمية"]],
    discoveryEyebrow: "اكتشاف المستهلك والتسويق الرقمي",
    discoveryTitle: "كيف يكتشف مستهلكو الخليج منتجاتك",
    discoveryBody: "يعمل المحتوى العربي والتفاعل مع المؤثرين والوصول الرقمي المدفوع ورؤى السوق والتحقق من الطلب معاً لبناء الظهور وقياس الاستجابة.",
    overviewEyebrow: "نظرة عامة على توسع البائع",
    overviewTitle: "بع منتجاتك في الشرق الأوسط عبر مسار منظم",
    overviewBody: "عرض بصري للبائع يوضح أسواق الخليج المستهدفة والدعم العربي وفرص المنصات والتنفيذ والخطوات العملية من التسجيل حتى استقبال الطلبات.",
    pillars: [
      ["الظهور", "بناء حضور في المنصات وتحسين اكتشاف المنتجات."],
      ["التفاعل", "الوصول إلى المستهلك الخليجي بالمحتوى العربي والحملات."],
      ["التحقق من السوق", "قياس الاستجابة قبل التوسع بشكل أكبر."],
      ["التوسع", "توسيع المنتجات التي أثبتت جدواها عبر القنوات المناسبة."],
    ],
    presence: "الحضور الإقليمي: كوالالمبور · جدة · دبي · جاكرتا",
    note: "الأرقام والتفاصيل التشغيلية مستندة إلى مواد eRomman الخليجية المرفقة وقد تتغير بمرور الوقت.",
  },
} as const

export function OfficialBrandShowcase() {
  const [target, setTarget] = useState<HTMLElement | null>(null)
  const [lang, setLang] = useState<keyof typeof copy>("en")

  useEffect(() => {
    const path = window.location.pathname.replace(/\/+$/, "") || "/"
    const allowed = ["/", "/en", "/bm", "/ar"]
    if (!allowed.includes(path)) return
    setLang(path === "/bm" ? "bm" : path === "/ar" ? "ar" : "en")
    setTarget(document.querySelector("main"))
  }, [])

  if (!target) return null
  const t = copy[lang]
  const rtl = lang === "ar"
  const icons = [Globe2, Users, BarChart3, ArrowUpRight]

  return createPortal(
    <section id="official-eromman-materials" dir={rtl ? "rtl" : "ltr"} className="border-t border-red-100 bg-[linear-gradient(180deg,#fffaf7_0%,#ffffff_50%,#fff8f4_100%)] py-16 sm:py-20 lg:py-24">
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

        <article className="mt-14 overflow-hidden rounded-[2rem] border border-red-100 bg-white shadow-[0_26px_70px_rgba(92,12,18,0.10)]">
          <div className="grid lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div className="p-6 sm:p-8 lg:p-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-[#fff8f4] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-primary">
                <Megaphone className="h-4 w-4" /> {t.discoveryEyebrow}
              </span>
              <h3 className="mt-5 text-3xl font-black tracking-tight text-[#211916] sm:text-4xl">{t.discoveryTitle}</h3>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{t.discoveryBody}</p>
            </div>
            <div className="bg-[#fff8f4] p-3 sm:p-5 lg:p-6">
              <img
                src={`${SITE_BASE_PATH}/images/gcc-cta.png`}
                alt="How GCC consumers discover products through Arabic content, KOL engagement and paid digital discovery"
                className="block h-auto w-full rounded-[1.35rem] border border-red-100 bg-white object-contain shadow-sm"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </div>
        </article>

        <article className="mt-8 overflow-hidden rounded-[2rem] border border-red-100 bg-white shadow-[0_26px_70px_rgba(92,12,18,0.10)]">
          <div className="p-6 sm:p-8 lg:p-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-[#fff8f4] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-primary">
              <Globe2 className="h-4 w-4" /> {t.overviewEyebrow}
            </span>
            <h3 className="mt-4 text-2xl font-black tracking-tight text-[#211916] sm:text-3xl">{t.overviewTitle}</h3>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted-foreground sm:text-base">{t.overviewBody}</p>
          </div>
          <div className="border-t border-red-100 bg-[#f8f1ed] p-3 sm:p-5 lg:p-6">
            <img
              src={`${SITE_BASE_PATH}/images/gcc-hero.png`}
              alt="eRomman GCC seller expansion overview"
              className="block h-auto w-full rounded-[1.35rem] border border-red-100 bg-white object-contain shadow-sm"
              loading="lazy"
              decoding="async"
            />
          </div>
        </article>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.pillars.map(([title, body], index) => {
            const Icon = icons[index] ?? Globe2
            return (
              <div key={title} className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-white"><Icon className="h-4 w-4" /></span>
                <h4 className="mt-4 text-lg font-black text-[#2c221f]">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-8 flex flex-col gap-3 rounded-2xl bg-[#820910] p-5 text-white sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-bold leading-relaxed text-white/90">{t.presence}</p>
          <div className="flex shrink-0 items-center gap-2 text-xs font-bold text-[#f2cf7b]"><ShieldCheck className="h-4 w-4" />{t.note}</div>
        </div>
      </div>
    </section>,
    target,
  )
}
