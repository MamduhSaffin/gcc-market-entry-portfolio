"use client"

import {
  ArrowRight,
  BarChart3,
  Boxes,
  Building2,
  ExternalLink,
  Globe2,
  Languages,
  MapPin,
  Megaphone,
  PlayCircle,
  SearchCheck,
  ShieldCheck,
  Users,
} from "lucide-react"
import { SITE_BASE_PATH } from "@/lib/site"

type Lang = "en" | "bm" | "ar"

const copy = {
  en: {
    officialEyebrow: "Official eRomman GCC expansion materials",
    officialTitle: "A structured path from visibility to validated GCC growth",
    officialBody:
      "These official eRomman materials bring the market-entry model together: marketplace visibility, Arabic localisation, consumer engagement, market validation and structured expansion across the GCC.",
    brochureTitle: "The GCC expansion pathway",
    brochureBody: "A visual overview of who eRomman is, the target GCC markets, seller support and the marketplace journey.",
    buntingTitle: "Your gateway to the Middle East",
    buntingBody: "A concise seller-facing overview of GCC access, Arabic support, fulfilment and marketplace expansion.",
    snapshot: "eRomman ecosystem snapshot",
    snapshotNote: "Operational snapshot shown in the official GCC booklet; figures may evolve over time.",
    sellers: "sellers",
    skus: "SKUs",
    views: "campaign views",
    locations: "regional locations",
    frameworkEyebrow: "GCC Market Entry Ecosystem",
    frameworkTitle: "Build visibility. Validate demand. Scale strategically.",
    frameworkBody: "The official booklet frames the journey as five connected stages rather than a one-off listing exercise.",
    steps: ["Visibility", "Awareness", "Engagement", "Market Validation", "Expansion"],
    regional: "Regional presence",
    operating: "Operating model",
    operatingBody: "Consignment-first approach → eRomman platform → Fulfilled by eRomman (FBE) programmes for scalable seller growth.",
    discoveryEyebrow: "Consumer discovery & digital marketing",
    discoveryTitle: "How GCC consumers discover your products",
    discoveryBody: "Arabic content, KOL and consumer engagement, paid digital discovery, market insight and demand validation work together to build evidence before scaling.",
    campaignNote: "Campaign scope, package eligibility and current pricing should be confirmed with eRomman before commitment.",
    voicesEyebrow: "Seller voices",
    voicesTitle: "Seller Success Stories",
    voicesBody: "Hear directly from sellers and discover their experience with eRomman. Real stories help new brands understand the journey before taking the next step.",
    story1: "Seller Success Story 01",
    story2: "Seller Success Story 02",
    watch: "Watch on YouTube",
  },
  bm: {
    officialEyebrow: "Bahan rasmi pengembangan GCC eRomman",
    officialTitle: "Laluan tersusun daripada visibility kepada pertumbuhan GCC yang disahkan",
    officialBody:
      "Bahan rasmi eRomman ini menghimpunkan model kemasukan pasaran: marketplace visibility, lokalisasi Arab, penglibatan pengguna, validasi pasaran dan pengembangan tersusun di GCC.",
    brochureTitle: "Laluan pengembangan GCC",
    brochureBody: "Gambaran visual tentang eRomman, pasaran GCC sasaran, sokongan penjual dan perjalanan marketplace.",
    buntingTitle: "Pintu masuk anda ke Timur Tengah",
    buntingBody: "Ringkasan mesra penjual tentang akses GCC, sokongan Arab, fulfilment dan pengembangan marketplace.",
    snapshot: "Ringkasan ekosistem eRomman",
    snapshotNote: "Gambaran operasi seperti dalam booklet rasmi GCC; angka boleh berubah dari semasa ke semasa.",
    sellers: "penjual",
    skus: "SKU",
    views: "tontonan kempen",
    locations: "lokasi serantau",
    frameworkEyebrow: "Ekosistem Kemasukan Pasaran GCC",
    frameworkTitle: "Bina visibility. Sahkan permintaan. Scale secara strategik.",
    frameworkBody: "Booklet rasmi menggambarkan perjalanan ini sebagai lima peringkat yang saling berkait, bukan sekadar penyenaraian sekali sahaja.",
    steps: ["Visibility", "Awareness", "Engagement", "Validasi Pasaran", "Pengembangan"],
    regional: "Kehadiran serantau",
    operating: "Model operasi",
    operatingBody: "Pendekatan consignment-first → platform eRomman → program Fulfilled by eRomman (FBE) untuk pertumbuhan penjual yang boleh diskalakan.",
    discoveryEyebrow: "Penemuan pengguna & pemasaran digital",
    discoveryTitle: "Bagaimana pengguna GCC menemui produk anda",
    discoveryBody: "Kandungan Arab, KOL dan penglibatan pengguna, paid digital discovery, market insight dan demand validation digabungkan untuk membina bukti sebelum scale.",
    campaignNote: "Skop kempen, kelayakan pakej dan harga semasa perlu disahkan dengan eRomman sebelum komitmen.",
    voicesEyebrow: "Suara penjual",
    voicesTitle: "Kisah Kejayaan Penjual",
    voicesBody: "Dengar sendiri pengalaman penjual bersama eRomman. Kisah sebenar membantu jenama baharu memahami perjalanan sebelum mengambil langkah seterusnya.",
    story1: "Kisah Kejayaan Penjual 01",
    story2: "Kisah Kejayaan Penjual 02",
    watch: "Tonton di YouTube",
  },
  ar: {
    officialEyebrow: "مواد eRomman الرسمية للتوسع في الخليج",
    officialTitle: "مسار منظم من الظهور إلى نمو خليجي مبني على التحقق",
    officialBody:
      "تجمع هذه المواد الرسمية نموذج الدخول إلى السوق لدى eRomman: الظهور في المنصات، والتوطين العربي، وتفاعل المستهلك، والتحقق من السوق، ثم التوسع المنظم في دول الخليج.",
    brochureTitle: "مسار التوسع في الخليج",
    brochureBody: "نظرة بصرية على eRomman والأسواق الخليجية المستهدفة ودعم البائعين ومسار الوصول إلى المنصات.",
    buntingTitle: "بوابتك إلى الشرق الأوسط",
    buntingBody: "ملخص للبائعين حول الوصول إلى الخليج، والدعم العربي، والتنفيذ، والتوسع عبر المنصات.",
    snapshot: "لمحة عن منظومة eRomman",
    snapshotNote: "لقطة تشغيلية كما تظهر في الكتيب الرسمي للخليج؛ وقد تتغير الأرقام بمرور الوقت.",
    sellers: "بائع",
    skus: "منتج مدرج",
    views: "مشاهدة للحملات",
    locations: "مواقع إقليمية",
    frameworkEyebrow: "منظومة دخول السوق الخليجي",
    frameworkTitle: "ابنِ الظهور. اختبر الطلب. توسع بشكل استراتيجي.",
    frameworkBody: "يعرض الكتيب الرسمي الرحلة في خمس مراحل مترابطة، وليس كمجرد عملية إدراج واحدة.",
    steps: ["الظهور", "الوعي", "التفاعل", "التحقق من السوق", "التوسع"],
    regional: "الحضور الإقليمي",
    operating: "نموذج التشغيل",
    operatingBody: "نهج يبدأ بالشحن بالعمولة → منصة eRomman → برامج Fulfilled by eRomman (FBE) لدعم نمو البائع بصورة قابلة للتوسع.",
    discoveryEyebrow: "اكتشاف المستهلك والتسويق الرقمي",
    discoveryTitle: "كيف يكتشف المستهلك الخليجي منتجاتك",
    discoveryBody: "المحتوى العربي، وحملات المؤثرين وتفاعل المستهلك، والإعلانات الرقمية، ورؤى السوق والتحقق من الطلب تعمل معاً لبناء أدلة قبل التوسع.",
    campaignNote: "يجب تأكيد نطاق الحملة وأهلية الباقة والأسعار الحالية مع eRomman قبل أي التزام.",
    voicesEyebrow: "أصوات البائعين",
    voicesTitle: "قصص نجاح البائعين",
    voicesBody: "استمع مباشرة إلى تجارب البائعين مع eRomman. تساعد القصص الحقيقية العلامات الجديدة على فهم الرحلة قبل اتخاذ الخطوة التالية.",
    story1: "قصة نجاح البائع 01",
    story2: "قصة نجاح البائع 02",
    watch: "المشاهدة على YouTube",
  },
} as const

const stories = [
  {
    id: "a-ak5h5d3jo",
    start: 21,
    url: "https://www.youtube.com/watch?v=a-ak5h5d3jo&t=21s",
  },
  {
    id: "I7GU3g0i7Bg",
    start: 25,
    url: "https://www.youtube.com/watch?v=I7GU3g0i7Bg&t=25s",
  },
]

const frameworkIcons = [SearchCheck, Megaphone, Users, BarChart3, ArrowRight]

export function SellerSuccessStories({ lang }: { lang: Lang }) {
  const t = copy[lang]
  const labels = [t.story1, t.story2]
  const rtl = lang === "ar"

  return (
    <>
      <section id="official-materials" dir={rtl ? "rtl" : "ltr"} className="relative overflow-hidden bg-white py-20 lg:py-24">
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/7 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#d5a84b]/12 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-[#fff8f3] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-primary shadow-sm">
              <ShieldCheck className="h-4 w-4" />
              {t.officialEyebrow}
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-[#211a18] sm:text-4xl lg:text-5xl">{t.officialTitle}</h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#70635e] sm:text-lg">{t.officialBody}</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.55fr_0.65fr] lg:items-stretch">
            <article className="overflow-hidden rounded-[2rem] border border-red-100 bg-[#fffaf7] shadow-[0_26px_70px_rgba(92,12,18,0.10)]">
              <div className="border-b border-red-100 p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-white"><Globe2 className="h-5 w-5" /></span>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">eRomman GCC</p>
                    <h3 className="text-xl font-black text-[#241c1a]">{t.brochureTitle}</h3>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#70635e]">{t.brochureBody}</p>
              </div>
              <div className="bg-[#f7f1ed] p-3 sm:p-5">
                <img
                  src={SITE_BASE_PATH + "/images/official/eromman-brochure.svg"}
                  alt="eRomman GCC expansion brochure overview"
                  width={900}
                  height={507}
                  loading="lazy"
                  className="h-auto w-full rounded-2xl border border-red-100 bg-white object-contain shadow-sm"
                />
              </div>
            </article>

            <article className="overflow-hidden rounded-[2rem] border border-red-100 bg-[#8f0912] p-4 text-white shadow-[0_26px_70px_rgba(92,12,18,0.16)] sm:p-5">
              <div className="mb-4 rounded-2xl border border-white/15 bg-white/8 p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f2cf7b]">eRomman</p>
                <h3 className="mt-1 text-xl font-black">{t.buntingTitle}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{t.buntingBody}</p>
              </div>
              <img
                src={SITE_BASE_PATH + "/images/official/eromman-bunting.svg"}
                alt="eRomman Your Gateway to the Middle East bunting"
                width={420}
                height={758}
                loading="lazy"
                className="mx-auto h-auto max-h-[640px] w-full rounded-2xl bg-white object-contain shadow-2xl"
              />
            </article>
          </div>

          <div className="mt-8 rounded-[2rem] border border-red-100 bg-[#fff8f3] p-5 shadow-sm sm:p-7">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">{t.snapshot}</p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#70635e]">{t.snapshotNote}</p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-3 py-2 text-xs font-bold text-primary">
                <Building2 className="h-4 w-4" />
                {t.regional}: Kuala Lumpur · Jeddah · Dubai · Jakarta
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["1,300+", t.sellers, Users],
                ["250,000+", t.skus, Boxes],
                ["9M+", t.views, BarChart3],
                ["4", t.locations, MapPin],
              ].map(([value, label, Icon]) => {
                const MetricIcon = Icon as typeof Users
                return (
                  <div key={String(label)} className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
                    <MetricIcon className="h-5 w-5 text-primary" />
                    <p className="mt-4 text-3xl font-black text-[#211a18]">{String(value)}</p>
                    <p className="mt-1 text-xs font-black uppercase tracking-[0.12em] text-[#7b6d67]">{String(label)}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-[2rem] bg-[#830810] p-6 text-white shadow-[0_26px_70px_rgba(92,12,18,0.16)] sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f2cf7b]">{t.frameworkEyebrow}</p>
                <h3 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{t.frameworkTitle}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">{t.frameworkBody}</p>
                <div className="mt-6 rounded-2xl border border-white/15 bg-white/8 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#f2cf7b]">{t.operating}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{t.operatingBody}</p>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-5">
                {t.steps.map((step, index) => {
                  const Icon = frameworkIcons[index]
                  return (
                    <div key={step} className="relative rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur-sm">
                      <span className="mx-auto grid h-10 w-10 place-items-center rounded-xl bg-white text-primary shadow-sm"><Icon className="h-5 w-5" /></span>
                      <p className="mt-3 text-sm font-black leading-tight">{step}</p>
                      {index < t.steps.length - 1 && <span className="absolute -right-2 top-1/2 hidden h-px w-4 bg-[#f2cf7b]/60 sm:block" />}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <article className="mt-8 overflow-hidden rounded-[2rem] border border-red-100 bg-white shadow-[0_26px_70px_rgba(92,12,18,0.10)]">
            <div className="grid gap-0 lg:grid-cols-[0.48fr_1.52fr] lg:items-center">
              <div className="p-6 sm:p-8 lg:p-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-primary">
                  <Languages className="h-4 w-4" />
                  {t.discoveryEyebrow}
                </span>
                <h3 className="mt-4 text-2xl font-black tracking-tight text-[#211a18] sm:text-3xl">{t.discoveryTitle}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#70635e] sm:text-base">{t.discoveryBody}</p>
                <p className="mt-5 rounded-xl border border-red-100 bg-[#fff8f3] p-3 text-xs leading-relaxed text-[#806f68]">{t.campaignNote}</p>
              </div>
              <div className="bg-[#fffaf7] p-3 sm:p-5">
                <img
                  src={SITE_BASE_PATH + "/images/official/eromman-consumer-discovery.svg"}
                  alt="How GCC consumers discover products through eRomman"
                  width={900}
                  height={600}
                  loading="lazy"
                  className="h-auto w-full rounded-2xl border border-red-100 bg-white object-contain"
                />
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="seller-success-stories" dir={rtl ? "rtl" : "ltr"} className="relative overflow-hidden border-y border-red-100 bg-[#fff8f3] py-20 lg:py-24">
        <div className="pointer-events-none absolute -left-32 top-8 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-8 h-72 w-72 rounded-full bg-[#d5a84b]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-primary shadow-sm">
              <PlayCircle className="h-4 w-4" />
              {t.voicesEyebrow}
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-[#211a18] sm:text-4xl lg:text-5xl">{t.voicesTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-[#70635e] sm:text-lg">{t.voicesBody}</p>
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
    </>
  )
}
