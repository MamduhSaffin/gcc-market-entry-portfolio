"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import {
  ArrowUpRight,
  BarChart3,
  Globe2,
  Languages,
  Megaphone,
  ShieldCheck,
  Store,
  Users,
} from "lucide-react"
import { SITE_BASE_PATH } from "@/lib/site"

type Lang = "en" | "bm" | "ar"

const copy = {
  en: {
    eyebrow: "Official eRomman GCC market entry",
    title: "A clearer route from Malaysia to GCC customers",
    body:
      "Explore how eRomman supports Malaysian brands through Arabic localisation, consumer discovery, marketplace access, fulfilment support and structured GCC expansion.",
    metrics: [["1,300+", "Sellers"], ["250,000+", "SKUs"], ["9M+", "Campaign views"], ["4", "Regional locations"]],
    discoveryEyebrow: "Consumer discovery & digital marketing",
    discoveryTitle: "How GCC consumers discover your products",
    discoveryBody:
      "Arabic content, KOL engagement, paid digital discovery, social media, market insight and demand validation work together to build visibility and evidence before scaling.",
    buntingTitle: "Your gateway to the Middle East",
    buntingBody:
      "A concise seller-facing overview of GCC market access, Arabic support, fulfilment and marketplace expansion.",
    overviewTitle: "GCC expansion overview",
    overviewBody:
      "See eRomman’s target markets, seller support model, marketplace pathways and regional expansion approach in one visual.",
    ecosystemTitle: "GCC market entry ecosystem",
    ecosystemBody:
      "Build visibility, engage GCC consumers, validate demand and expand through suitable channels.",
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
    eyebrow: "Kemasukan pasaran GCC rasmi eRomman",
    title: "Laluan yang lebih jelas dari Malaysia ke pelanggan GCC",
    body:
      "Lihat bagaimana eRomman membantu jenama Malaysia melalui lokalisasi Arab, consumer discovery, akses marketplace, fulfilment support dan pengembangan GCC secara tersusun.",
    metrics: [["1,300+", "Seller"], ["250,000+", "SKU"], ["9M+", "Campaign views"], ["4", "Lokasi serantau"]],
    discoveryEyebrow: "Consumer discovery & digital marketing",
    discoveryTitle: "Bagaimana pengguna GCC menemui produk anda",
    discoveryBody:
      "Kandungan Arab, KOL engagement, paid digital discovery, social media, market insight dan demand validation digabungkan untuk membina visibility dan bukti sebelum scale.",
    buntingTitle: "Pintu masuk anda ke Timur Tengah",
    buntingBody:
      "Ringkasan visual tentang akses pasaran GCC, sokongan Arab, fulfilment dan pengembangan marketplace.",
    overviewTitle: "Ringkasan pengembangan GCC",
    overviewBody:
      "Lihat pasaran sasaran eRomman, model seller support, laluan marketplace dan pendekatan pengembangan serantau dalam satu visual.",
    ecosystemTitle: "Ekosistem kemasukan pasaran GCC",
    ecosystemBody:
      "Bina visibility, engage pengguna GCC, validate demand dan berkembang melalui saluran yang sesuai.",
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
    eyebrow: "دخول أسواق الخليج مع eRomman",
    title: "مسار أوضح من ماليزيا إلى المستهلك الخليجي",
    body:
      "تعرّف على كيفية دعم eRomman للعلامات الماليزية من خلال التوطين العربي واكتشاف المستهلك والوصول إلى المنصات ودعم التنفيذ والتوسع المنظم في الخليج.",
    metrics: [["1,300+", "بائع"], ["250,000+", "منتج SKU"], ["9M+", "مشاهدة للحملات"], ["4", "مواقع إقليمية"]],
    discoveryEyebrow: "اكتشاف المستهلك والتسويق الرقمي",
    discoveryTitle: "كيف يكتشف المستهلك الخليجي منتجاتك",
    discoveryBody:
      "يعمل المحتوى العربي والتفاعل مع المؤثرين والإعلانات الرقمية ووسائل التواصل ورؤى السوق والتحقق من الطلب معاً لبناء الظهور قبل التوسع.",
    buntingTitle: "بوابتك إلى الشرق الأوسط",
    buntingBody:
      "عرض مختصر للوصول إلى الخليج والدعم العربي والتنفيذ والتوسع عبر المنصات.",
    overviewTitle: "نظرة عامة على التوسع في الخليج",
    overviewBody:
      "تعرّف على الأسواق المستهدفة ودعم البائعين ومسارات المنصات ونهج التوسع الإقليمي لدى eRomman في عرض واحد.",
    ecosystemTitle: "منظومة دخول السوق الخليجي",
    ecosystemBody:
      "ابنِ الظهور، تفاعل مع المستهلك الخليجي، اختبر الطلب ثم توسع عبر القنوات المناسبة.",
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

const asset = (name: string) => `${SITE_BASE_PATH}/images/official/${name}`

export function OfficialBrandShowcase() {
  const [target, setTarget] = useState<HTMLElement | null>(null)
  const [lang, setLang] = useState<Lang>("en")

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
    <section
      id="official-eromman-materials"
      dir={rtl ? "rtl" : "ltr"}
      className="relative overflow-hidden border-t border-red-100 bg-[linear-gradient(180deg,#fff8f4_0%,#ffffff_48%,#fff9f6_100%)] py-16 sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute -left-32 top-16 h-80 w-80 rounded-full bg-red-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#d8b36c]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-primary shadow-sm">
            <ShieldCheck className="h-4 w-4" />
            {t.eyebrow}
          </span>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-[#211916] sm:text-4xl lg:text-5xl">{t.title}</h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">{t.body}</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4">
          {t.metrics.map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-red-100 bg-white p-5 text-center shadow-sm">
              <p className="text-2xl font-black text-primary sm:text-3xl">{value}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.08em] text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>

        <article className="mt-14 overflow-hidden rounded-[2rem] border border-red-100 bg-white shadow-[0_28px_80px_rgba(93,13,18,0.11)]">
          <div className="grid items-center lg:grid-cols-[0.42fr_1.58fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-primary">
                <Languages className="h-4 w-4" />
                {t.discoveryEyebrow}
              </span>
              <h3 className="mt-5 text-2xl font-black tracking-tight text-[#211916] sm:text-3xl">{t.discoveryTitle}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{t.discoveryBody}</p>
            </div>
            <div className="bg-[#fffaf7] p-3 sm:p-5 lg:p-6">
              <img
                src={asset("eromman-consumer-discovery-hq.webp")}
                alt="How GCC consumers discover products through Arabic content, KOL engagement and paid digital discovery"
                width={600}
                height={400}
                className="block h-auto w-full rounded-2xl border border-red-100 bg-white object-contain shadow-sm"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </div>
        </article>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.68fr_1.32fr]">
          <article className="overflow-hidden rounded-[2rem] border border-red-100 bg-white shadow-[0_22px_60px_rgba(93,13,18,0.09)]">
            <div className="bg-gradient-to-r from-[#850a12] to-[#b5121b] p-6 text-white">
              <div className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10"><Store className="h-5 w-5" /></span>
                <div>
                  <h3 className="text-xl font-black">{t.buntingTitle}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{t.buntingBody}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center bg-[#f6f0ec] p-5 sm:p-7">
              <img
                src={asset("eromman-bunting-hq.webp")}
                alt="eRomman Your Gateway to the Middle East seller bunting"
                width={480}
                height={1200}
                className="block h-auto max-h-[820px] w-auto max-w-full rounded-xl object-contain shadow-xl"
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>

          <article className="overflow-hidden rounded-[2rem] border border-red-100 bg-white shadow-[0_22px_60px_rgba(93,13,18,0.09)]">
            <div className="bg-gradient-to-r from-[#850a12] to-[#b5121b] p-6 text-white">
              <div className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10"><Globe2 className="h-5 w-5" /></span>
                <div>
                  <h3 className="text-xl font-black">{t.overviewTitle}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{t.overviewBody}</p>
                </div>
              </div>
            </div>
            <div className="bg-[#fffaf7] p-4 sm:p-6">
              <img
                src={asset("eromman-brochure-hq.webp")}
                alt="eRomman sell to the Middle East GCC expansion overview"
                width={1200}
                height={675}
                className="block h-auto w-full rounded-2xl border border-red-100 bg-white object-contain shadow-sm"
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] bg-[#810910] p-6 text-white shadow-[0_24px_65px_rgba(93,13,18,0.18)] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#f1ce78]">
                <Megaphone className="h-4 w-4" />
                {t.ecosystemTitle}
              </div>
              <p className="mt-4 text-base leading-relaxed text-white/75">{t.ecosystemBody}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {t.pillars.map(([title, body], index) => {
                const Icon = icons[index] ?? Globe2
                return (
                  <div key={title} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-primary shadow-sm"><Icon className="h-4 w-4" /></span>
                    <h4 className="mt-3 text-sm font-black">{title}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-white/70">{body}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-red-100 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-bold text-[#3a302d]">{t.presence}</p>
          <p className="flex max-w-xl items-start gap-2 text-xs leading-relaxed text-muted-foreground">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            {t.note}
          </p>
        </div>
      </div>
    </section>,
    target,
  )
}
