"use client"

import { useMemo, useState } from "react"
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Cpu,
  ExternalLink,
  FileCheck2,
  Globe2,
  HeartPulse,
  Home,
  Languages,
  Mail,
  Menu,
  MessageCircle,
  PackageCheck,
  Phone,
  Pill,
  SearchCheck,
  ShieldCheck,
  Shirt,
  Sparkles,
  Store,
  Truck,
  UtensilsCrossed,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react"
import { SITE_BASE_PATH } from "@/lib/site"
import { EROMMAN_LINKS, SELLER_SUPPORT } from "@/lib/links"
import { CompanyProfileVideo } from "@/components/company-profile-video"
import { SellerSuccessStories } from "@/components/seller-success-stories"

type Lang = "en" | "bm" | "ar"
type CategoryKey = "beauty" | "electronics" | "home" | "fashion" | "supplement" | "food" | "other"
type DocsKey = "ready" | "partial" | "none"
type SalesKey = "established" | "growing" | "early"
type TargetKey = "saudi" | "uae" | "gcc"

type CategoryOption = {
  key: CategoryKey
  icon: LucideIcon
  score: number
  label: Record<Lang, string>
  badge: Record<Lang, string>
  note: Record<Lang, string>
}

const categories: CategoryOption[] = [
  {
    key: "beauty",
    icon: HeartPulse,
    score: 3,
    label: { en: "Beauty & Wellness", bm: "Kecantikan & Wellness", ar: "الجمال والعناية" },
    badge: { en: "Priority focus", bm: "Fokus utama", ar: "تركيز رئيسي" },
    note: {
      en: "Strong focus area. Product claims, ingredients and market-specific documentation still need review.",
      bm: "Kategori fokus yang kuat. Tuntutan produk, ramuan dan dokumen khusus pasaran masih perlu disemak.",
      ar: "من فئات التركيز الرئيسية، مع ضرورة مراجعة الادعاءات والمكونات والوثائق الخاصة بكل سوق.",
    },
  },
  {
    key: "electronics",
    icon: Cpu,
    score: 3,
    label: { en: "Electronics & Accessories", bm: "Elektronik & Aksesori", ar: "الإلكترونيات والإكسسوارات" },
    badge: { en: "Good potential", bm: "Potensi baik", ar: "فرصة جيدة" },
    note: {
      en: "Products with clear specifications, compatibility information and competitive pricing are easier to assess.",
      bm: "Produk dengan spesifikasi, maklumat keserasian dan harga yang jelas lebih mudah dinilai.",
      ar: "المنتجات ذات المواصفات الواضحة ومعلومات التوافق والتسعير التنافسي أسهل في التقييم.",
    },
  },
  {
    key: "home",
    icon: Home,
    score: 2,
    label: { en: "Home & Lifestyle", bm: "Rumah & Gaya Hidup", ar: "المنزل ونمط الحياة" },
    badge: { en: "Reviewable", bm: "Boleh dinilai", ar: "قابل للتقييم" },
    note: {
      en: "Practical, differentiated and easy-to-ship products may fit well for a controlled GCC market test.",
      bm: "Produk praktikal, berbeza dan mudah dihantar boleh sesuai untuk ujian pasaran GCC secara terkawal.",
      ar: "المنتجات العملية والمتميزة وسهلة الشحن قد تناسب اختباراً منظماً للسوق الخليجي.",
    },
  },
  {
    key: "fashion",
    icon: Shirt,
    score: 1,
    label: { en: "Fashion & Accessories", bm: "Fesyen & Aksesori", ar: "الأزياء والإكسسوارات" },
    badge: { en: "Selective", bm: "Secara terpilih", ar: "انتقائي" },
    note: {
      en: "Opportunity exists, but sizing, exchanges and cross-border return practicality should be reviewed carefully.",
      bm: "Ada peluang, tetapi isu saiz, pertukaran dan pemulangan rentas sempadan perlu dinilai dengan teliti.",
      ar: "توجد فرص، لكن المقاسات والاستبدال وعمليات الإرجاع عبر الحدود تحتاج إلى تقييم دقيق.",
    },
  },
  {
    key: "supplement",
    icon: Pill,
    score: 1,
    label: { en: "Supplements & Health", bm: "Suplemen & Kesihatan", ar: "المكملات والصحة" },
    badge: { en: "Documentation-led", bm: "Bergantung dokumen", ar: "تعتمد على الوثائق" },
    note: {
      en: "Market potential can be strong, but regulatory and marketplace documentation must be checked before listing.",
      bm: "Potensi pasaran boleh kuat, tetapi dokumen kawal selia dan marketplace perlu disemak sebelum penyenaraian.",
      ar: "قد تكون الفرصة قوية، لكن يجب التحقق من المتطلبات التنظيمية ووثائق المنصات قبل الإدراج.",
    },
  },
  {
    key: "food",
    icon: UtensilsCrossed,
    score: 0,
    label: { en: "Food & Perishables", bm: "Makanan & Mudah Rosak", ar: "الأغذية والمنتجات سريعة التلف" },
    badge: { en: "Separate review", bm: "Semakan berasingan", ar: "مراجعة منفصلة" },
    note: {
      en: "Logistics, shelf life and import requirements make this category less straightforward for the current programme.",
      bm: "Logistik, jangka hayat dan keperluan import menjadikan kategori ini kurang sesuai untuk laluan semasa.",
      ar: "متطلبات الشحن والصلاحية والاستيراد تجعل هذه الفئة أقل بساطة ضمن المسار الحالي.",
    },
  },
  {
    key: "other",
    icon: PackageCheck,
    score: 1,
    label: { en: "Other Product", bm: "Produk Lain", ar: "منتج آخر" },
    badge: { en: "Needs review", bm: "Perlu semakan", ar: "يحتاج مراجعة" },
    note: {
      en: "Send the product link for a category and market-fit review before deciding the entry route.",
      bm: "Hantar pautan produk untuk semakan kategori dan kesesuaian pasaran sebelum memilih laluan kemasukan.",
      ar: "أرسل رابط المنتج لمراجعة الفئة وملاءمة السوق قبل تحديد مسار الدخول.",
    },
  },
]

const copy = {
  en: {
    dir: "ltr",
    portal: "GCC Market Entry",
    portalSub: "Seller Growth Portal",
    nav: { fit: "Product Fit", how: "How It Works", opportunities: "Opportunities", marketplaces: "Marketplaces", plans: "Plans", stories: "Seller Stories", faq: "FAQ" },
    hero: {
      eyebrow: "GCC Market Entry · Powered by eRomman",
      title1: "Expand Your Brand",
      title2: "Into the GCC",
      body: "A practical market-entry pathway for Malaysian sellers exploring Saudi Arabia, UAE and the wider GCC. Start with suitable products, localise for Arabic-speaking customers, test demand and scale based on evidence.",
      primary: "Check My Product’s GCC Potential",
      secondary: "Talk to Mamduh",
      bullets: ["Keep stock in Malaysia", "Start with selected SKUs", "Arabic localisation support", "No GCC office needed to test"],
      route: "Malaysia → eRomman → GCC customers",
      markets: "Target markets",
    },
    trust: {
      title: "Built around a low-disruption market test",
      items: [
        ["1,300+", "sellers onboarded"],
        ["250,000", "SKUs listed"],
        ["9M+", "campaign views"],
        ["4", "regional locations"],
      ],
      note: "eRomman ecosystem snapshot; operational figures may change over time.",
    },
    fit: {
      eyebrow: "60-second product check",
      title: "Is your product a practical candidate for GCC review?",
      body: "This quick checker does not approve a product. It helps identify whether your brand looks ready for an initial conversation and what needs attention first.",
      category: "Product category",
      docs: "Documentation readiness",
      sales: "Current sales stage",
      target: "Priority market",
      productLink: "Product or brand link (optional)",
      placeholder: "https://yourbrand.com/product",
      docsOptions: { ready: "Core documents are ready", partial: "Some documents are ready", none: "Not prepared yet" },
      salesOptions: { established: "Established online / retail sales", growing: "Growing brand with active sales", early: "Early-stage / testing" },
      targetOptions: { saudi: "Saudi Arabia", uae: "UAE", gcc: "Wider GCC" },
      resultLabel: "Initial assessment",
      highTitle: "Strong candidate for an initial GCC review",
      highBody: "Your current profile looks suitable for a focused product and documentation assessment.",
      midTitle: "Worth a focused GCC assessment",
      midBody: "There is potential, but one or two areas should be strengthened before marketplace submission.",
      lowTitle: "More preparation is recommended first",
      lowBody: "The product may still have potential, but documentation, category fit or cross-border practicality needs more work.",
      disclaimer: "Indicative only. Final eligibility depends on product suitability, category rules, documentation, platform requirements and the relevant authority or marketplace approval process.",
      whatsapp: "Send This Review to WhatsApp",
    },
    opportunities: {
      eyebrow: "Category opportunities",
      title: "Different categories need different entry strategies",
      body: "The right starting point is not simply ‘list everything’. Start with the categories and SKUs that are practical to localise, document, ship and test.",
    },
    how: {
      eyebrow: "How GCC market entry works",
      title: "Start small. Validate demand. Scale strategically.",
      body: "You continue operating in Malaysia while eRomman supports the market-facing and cross-border journey.",
      steps: [
        ["Product review", "Select a manageable group of suitable SKUs and identify obvious documentation gaps."],
        ["Localise", "Prepare product information for Arabic-speaking customers and target-market expectations."],
        ["Marketplace review", "Assess suitable eRomman and third-party marketplace opportunities subject to their requirements."],
        ["Test demand", "Introduce selected products and observe customer response, pricing and operational practicality."],
        ["Scale what works", "Expand gradually based on validated demand rather than committing too much inventory upfront."],
      ],
    },
    after: {
      eyebrow: "After you contact Mamduh",
      title: "Know exactly what happens next",
      steps: [
        ["1", "Product link review", "Share your website, Shopee, TikTok Shop or product catalogue."],
        ["2", "Category & document check", "Identify platform, regulatory or product-information requirements that may affect entry."],
        ["3", "Recommended starting route", "Choose suitable SKUs and the most practical market or marketplace pathway."],
        ["4", "Onboarding & listing", "Prepare seller information, localisation and listing materials."],
        ["5", "Market test & growth", "Track response and expand only when the opportunity is validated."],
      ],
    },
    support: {
      eyebrow: "What eRomman supports",
      title: "More than a product listing",
      items: [
        ["Arabic localisation", "Product listing support, translation and Arabic-market presentation."],
        ["Marketplace access", "A central route to eRomman plus selected third-party marketplace opportunities."],
        ["Marketing visibility", "Campaign, content, Arabic SEO and promotional support depending on package and suitability."],
        ["Seller guidance", "A direct point of contact to help sellers understand the next operational step."],
        ["Cross-border coordination", "Order, pickup and fulfilment coordination for suitable seller arrangements."],
        ["Market validation", "A test-first approach so sellers can learn before scaling further."],
      ],
    },
    marketplaces: {
      eyebrow: "Marketplace ecosystem",
      title: "One starting point, multiple possible channels",
      body: "Suitable products may be reviewed for opportunities across eRomman and selected Middle East marketplace channels.",
      platforms: ["eRomman", "Amazon Saudi Arabia", "Amazon UAE", "Noon Saudi Arabia", "Noon UAE", "SHEIN Saudi Arabia", "SHEIN UAE", "Trendyol", "Carrefour Saudi Arabia"],
      disclaimer: "Marketplace exposure is not automatic. It is subject to product suitability, category rules, documentation and the approval process of each platform.",
    },
    pricing: {
      eyebrow: "Hari Malaysia Special · September 2026",
      title: "Choose the level of support that matches your expansion stage",
      body: "Current September offer: 50% off selected annual packages plus 8 extra months, for a total membership period of 20 months. Valid until 30 September 2026.",
      plans: [
        { name: "Silver", price: "RM645", normal: "RM1,290", label: "Starter", features: ["Seller onboarding", "Middle East marketplace access", "Product listing", "Marketplace opportunity review"] },
        { name: "Gold", price: "RM1,645", normal: "RM3,290", label: "Growth", features: ["Everything in Silver", "Arabic localisation", "Arabic SEO support", "Monthly campaign participation"] },
        { name: "Platinum", price: "RM5,000", normal: "RM10,000", label: "Visibility", features: ["Everything in Gold", "Marketing campaign inclusion", "Dedicated support", "Premium seller features"] },
        { name: "Pro Platinum", price: "Contact us", normal: "Custom", label: "Corporate", features: ["Everything in Platinum", "Priority marketing opportunities", "Arab brand manager", "Multi-platform support"] },
      ],
      ask: "Discuss This Plan",
      note: "Package scope, eligibility and payment arrangements should be confirmed with seller support before payment.",
    },
    cost: {
      eyebrow: "Seller cost snapshot",
      title: "Estimate your post-commission settlement",
      body: "Use this as a simple planning tool. Commission is charged after a successful sale. Customer shipping is paid by the buyer under the current seller guide.",
      price: "Selling price (RM)",
      rate: "Commission rate (%)",
      pickup: "eRomman pickup",
      yes: "Yes — RM7 pickup fee",
      no: "No — seller hands over independently",
      commission: "Estimated commission",
      pickupFee: "Pickup fee",
      receives: "Estimated seller settlement",
      note: "Illustrative estimate only. Confirm the current category rate and operational charges before onboarding. Seller payment is processed within 10–15 working days after successful delivery under the current guide.",
    },
    faq: {
      eyebrow: "Seller FAQ",
      title: "Questions sellers normally ask before starting",
      items: [
        ["Do I need to move stock to the Middle East?", "No. Sellers can keep stock in Malaysia while testing the market, subject to the agreed fulfilment arrangement."],
        ["Do I need to list every product?", "No. Starting with a smaller group of suitable SKUs is usually more practical for market validation."],
        ["Can eRomman guarantee Amazon or Noon approval?", "No. Third-party marketplace listing depends on product eligibility, documentation, category rules and platform approval."],
        ["What about supplements, health or beauty products?", "These categories can have strong potential, but market-specific regulatory and marketplace documentation must be checked before submission."],
        ["Who pays customer shipping?", "Under the current seller guide, the buyer pays shipping. Confirm the final arrangement during onboarding."],
        ["When does the seller get paid?", "The current guide states 10–15 working days after successful delivery and completion of the order."],
      ],
    },
    contact: {
      eyebrow: "Start with one product link",
      title: "Let’s identify the most practical GCC starting point for your brand.",
      body: "Send your website, marketplace store or product link. I can help review the category, documentation considerations and the most sensible first route before you decide.",
      whatsapp: "Check My Products on WhatsApp",
      email: "Email Seller Support",
    },
    footer: "GCC Market Entry is a seller information portal prepared by Muhammad Mamduh Bin Saffin using eRomman seller materials. For official corporate information, policies and registration, visit eromman.com.",
  },
  bm: {
    dir: "ltr",
    portal: "GCC Market Entry",
    portalSub: "Portal Pertumbuhan Penjual",
    nav: { fit: "Semak Produk", how: "Cara Ia Berfungsi", opportunities: "Peluang", marketplaces: "Marketplace", plans: "Pelan", stories: "Kisah Penjual", faq: "Soalan Lazim" },
    hero: {
      eyebrow: "GCC Market Entry · Bersama eRomman",
      title1: "Kembangkan Jenama Anda",
      title2: "Ke Pasaran GCC",
      body: "Laluan kemasukan pasaran yang praktikal untuk penjual Malaysia meneroka Arab Saudi, UAE dan GCC. Mulakan dengan produk yang sesuai, lokalisasikan untuk pelanggan berbahasa Arab, uji permintaan dan berkembang berdasarkan bukti pasaran.",
      primary: "Semak Potensi GCC Produk Saya",
      secondary: "WhatsApp Mamduh",
      bullets: ["Stok kekal di Malaysia", "Mula dengan SKU terpilih", "Sokongan lokalisasi Arab", "Tak perlu pejabat GCC untuk menguji"],
      route: "Malaysia → eRomman → Pelanggan GCC",
      markets: "Pasaran sasaran",
    },
    trust: {
      title: "Direka untuk ujian pasaran dengan gangguan minimum",
      items: [["1,300+", "penjual onboard"], ["250,000", "SKU disenaraikan"], ["9M+", "paparan kempen"], ["4", "lokasi serantau"]],
      note: "Gambaran ekosistem eRomman; angka operasi boleh berubah dari semasa ke semasa.",
    },
    fit: {
      eyebrow: "Semakan produk 60 saat",
      title: "Adakah produk anda calon praktikal untuk semakan GCC?",
      body: "Semakan ringkas ini bukan kelulusan produk. Ia membantu mengenal pasti sama ada jenama anda sudah bersedia untuk perbincangan awal dan perkara yang perlu diberi perhatian dahulu.",
      category: "Kategori produk",
      docs: "Kesediaan dokumen",
      sales: "Tahap jualan semasa",
      target: "Pasaran keutamaan",
      productLink: "Pautan produk atau jenama (pilihan)",
      placeholder: "https://jenamaanda.com/produk",
      docsOptions: { ready: "Dokumen utama sudah sedia", partial: "Sebahagian dokumen sudah sedia", none: "Belum disediakan" },
      salesOptions: { established: "Jualan online / retail sudah kukuh", growing: "Jenama berkembang dengan jualan aktif", early: "Peringkat awal / ujian" },
      targetOptions: { saudi: "Arab Saudi", uae: "UAE", gcc: "GCC lebih luas" },
      resultLabel: "Penilaian awal",
      highTitle: "Calon yang kuat untuk semakan awal GCC",
      highBody: "Profil semasa anda kelihatan sesuai untuk penilaian produk dan dokumen secara fokus.",
      midTitle: "Berbaloi untuk penilaian GCC yang lebih fokus",
      midBody: "Ada potensi, tetapi satu atau dua perkara perlu diperkuat sebelum penghantaran ke marketplace.",
      lowTitle: "Disaran buat persediaan tambahan dahulu",
      lowBody: "Produk mungkin masih berpotensi, tetapi dokumen, kesesuaian kategori atau praktikaliti rentas sempadan perlu diperbaiki.",
      disclaimer: "Untuk panduan awal sahaja. Kelayakan akhir bergantung pada kesesuaian produk, peraturan kategori, dokumen, syarat platform dan proses kelulusan pihak berkaitan.",
      whatsapp: "Hantar Semakan Ini ke WhatsApp",
    },
    opportunities: {
      eyebrow: "Peluang kategori",
      title: "Kategori berbeza perlukan strategi kemasukan yang berbeza",
      body: "Pendekatan terbaik bukan sekadar ‘senaraikan semua’. Mulakan dengan kategori dan SKU yang praktikal untuk dilokalisasi, didokumenkan, dihantar dan diuji.",
    },
    how: {
      eyebrow: "Bagaimana kemasukan pasaran GCC berfungsi",
      title: "Mula kecil. Sahkan permintaan. Berkembang secara strategik.",
      body: "Anda terus beroperasi di Malaysia sementara eRomman membantu bahagian yang menghadap pasaran dan perjalanan rentas sempadan.",
      steps: [
        ["Semakan produk", "Pilih beberapa SKU yang sesuai dan kenal pasti kekurangan dokumen utama."],
        ["Lokalisasi", "Sediakan maklumat produk untuk pelanggan berbahasa Arab dan jangkaan pasaran sasaran."],
        ["Semakan marketplace", "Nilai peluang eRomman dan marketplace pihak ketiga berdasarkan syarat masing-masing."],
        ["Uji permintaan", "Perkenalkan produk terpilih dan lihat respons pelanggan, harga dan praktikaliti operasi."],
        ["Skala yang berjaya", "Tambah produk secara berperingkat berdasarkan permintaan yang telah disahkan."],
      ],
    },
    after: {
      eyebrow: "Selepas anda hubungi Mamduh",
      title: "Jelas apa yang akan berlaku seterusnya",
      steps: [
        ["1", "Semakan pautan produk", "Kongsi laman web, Shopee, TikTok Shop atau katalog produk anda."],
        ["2", "Semakan kategori & dokumen", "Kenal pasti syarat platform, regulatori atau maklumat produk yang boleh mempengaruhi kemasukan."],
        ["3", "Cadangan laluan permulaan", "Pilih SKU dan pasaran atau marketplace yang paling praktikal untuk bermula."],
        ["4", "Onboarding & listing", "Sediakan maklumat penjual, lokalisasi dan bahan penyenaraian."],
        ["5", "Ujian pasaran & pertumbuhan", "Pantau respons dan berkembang apabila peluang telah disahkan."],
      ],
    },
    support: {
      eyebrow: "Sokongan eRomman",
      title: "Lebih daripada sekadar listing produk",
      items: [
        ["Lokalisasi Arab", "Sokongan listing, terjemahan dan persembahan produk untuk pasaran Arab."],
        ["Akses marketplace", "Laluan berpusat ke eRomman dan peluang marketplace pihak ketiga yang sesuai."],
        ["Visibiliti pemasaran", "Kempen, kandungan, Arabic SEO dan promosi bergantung pada pelan serta kesesuaian."],
        ["Panduan penjual", "PIC untuk membantu penjual faham langkah operasi seterusnya."],
        ["Koordinasi rentas sempadan", "Koordinasi order, pickup dan fulfilment untuk susunan yang sesuai."],
        ["Validasi pasaran", "Pendekatan uji dahulu supaya penjual belajar sebelum berkembang."],
      ],
    },
    marketplaces: {
      eyebrow: "Ekosistem marketplace",
      title: "Satu titik mula, beberapa saluran berpotensi",
      body: "Produk yang sesuai boleh dinilai untuk peluang di eRomman dan marketplace Timur Tengah terpilih.",
      platforms: ["eRomman", "Amazon Arab Saudi", "Amazon UAE", "Noon Arab Saudi", "Noon UAE", "SHEIN Arab Saudi", "SHEIN UAE", "Trendyol", "Carrefour Arab Saudi"],
      disclaimer: "Pendedahan marketplace bukan automatik. Ia tertakluk pada kesesuaian produk, peraturan kategori, dokumen dan proses kelulusan setiap platform.",
    },
    pricing: {
      eyebrow: "Promosi Hari Malaysia · September 2026",
      title: "Pilih tahap sokongan mengikut peringkat pengembangan anda",
      body: "Tawaran September semasa: diskaun 50% untuk pelan tahunan terpilih serta tambahan 8 bulan, menjadikan jumlah keahlian 20 bulan. Sah sehingga 30 September 2026.",
      plans: [
        { name: "Silver", price: "RM645", normal: "RM1,290", label: "Permulaan", features: ["Onboarding penjual", "Akses marketplace Timur Tengah", "Listing produk", "Semakan peluang marketplace"] },
        { name: "Gold", price: "RM1,645", normal: "RM3,290", label: "Pertumbuhan", features: ["Semua dalam Silver", "Lokalisasi Arab", "Sokongan Arabic SEO", "Penyertaan kempen bulanan"] },
        { name: "Platinum", price: "RM5,000", normal: "RM10,000", label: "Visibiliti", features: ["Semua dalam Gold", "Penyertaan kempen pemasaran", "Sokongan khusus", "Ciri premium penjual"] },
        { name: "Pro Platinum", price: "Hubungi kami", normal: "Custom", label: "Korporat", features: ["Semua dalam Platinum", "Peluang pemasaran keutamaan", "Arab brand manager", "Sokongan multi-platform"] },
      ],
      ask: "Bincang Pelan Ini",
      note: "Skop pelan, kelayakan dan aturan pembayaran perlu disahkan dengan seller support sebelum pembayaran.",
    },
    cost: {
      eyebrow: "Gambaran kos penjual",
      title: "Anggar settlement selepas komisen",
      body: "Gunakan sebagai alat perancangan ringkas. Komisen dikenakan selepas jualan berjaya. Kos penghantaran pelanggan dibayar oleh pembeli mengikut panduan penjual semasa.",
      price: "Harga jualan (RM)", rate: "Kadar komisen (%)", pickup: "Pickup eRomman", yes: "Ya — caj pickup RM7", no: "Tidak — penjual serah sendiri", commission: "Anggaran komisen", pickupFee: "Caj pickup", receives: "Anggaran settlement penjual", note: "Anggaran sahaja. Sahkan kadar kategori dan caj operasi semasa sebelum onboarding. Panduan semasa menyatakan bayaran penjual diproses dalam 10–15 hari bekerja selepas penghantaran berjaya.",
    },
    faq: {
      eyebrow: "Soalan lazim penjual",
      title: "Soalan yang biasanya ditanya sebelum bermula",
      items: [
        ["Perlu pindahkan stok ke Timur Tengah?", "Tidak. Penjual boleh simpan stok di Malaysia ketika menguji pasaran, tertakluk pada susunan fulfilment yang dipersetujui."],
        ["Perlu senaraikan semua produk?", "Tidak. Mulakan dengan kumpulan SKU yang lebih kecil dan sesuai untuk validasi pasaran."],
        ["Boleh eRomman jamin kelulusan Amazon atau Noon?", "Tidak. Listing pihak ketiga bergantung pada kelayakan produk, dokumen, peraturan kategori dan kelulusan platform."],
        ["Bagaimana dengan suplemen, kesihatan atau beauty?", "Kategori ini boleh berpotensi kuat, tetapi dokumen regulatori dan marketplace khusus pasaran perlu disemak sebelum submission."],
        ["Siapa bayar penghantaran pelanggan?", "Mengikut panduan semasa, pembeli membayar penghantaran. Sahkan susunan akhir semasa onboarding."],
        ["Bila penjual dibayar?", "Panduan semasa menyatakan 10–15 hari bekerja selepas penghantaran berjaya dan order selesai."],
      ],
    },
    contact: {
      eyebrow: "Mula dengan satu pautan produk",
      title: "Mari kenal pasti titik mula GCC yang paling praktikal untuk jenama anda.",
      body: "Hantar laman web, kedai marketplace atau pautan produk anda. Saya boleh bantu semak kategori, keperluan dokumen dan laluan permulaan yang lebih praktikal sebelum anda membuat keputusan.",
      whatsapp: "Semak Produk Saya di WhatsApp",
      email: "Email Seller Support",
    },
    footer: "GCC Market Entry ialah portal maklumat penjual yang disediakan oleh Muhammad Mamduh Bin Saffin menggunakan bahan penjual eRomman. Untuk maklumat korporat, polisi dan pendaftaran rasmi, sila rujuk eromman.com.",
  },
  ar: {
    dir: "rtl",
    portal: "GCC Market Entry",
    portalSub: "بوابة نمو البائعين",
    nav: { fit: "فحص المنتج", how: "آلية العمل", opportunities: "الفرص", marketplaces: "المنصات", plans: "الباقات", stories: "قصص البائعين", faq: "الأسئلة الشائعة" },
    hero: {
      eyebrow: "GCC Market Entry · بدعم eRomman",
      title1: "وسّع علامتك التجارية",
      title2: "إلى أسواق الخليج",
      body: "مسار عملي للعلامات الماليزية الراغبة في استكشاف السعودية والإمارات ودول الخليج. ابدأ بمنتجات مناسبة، وهيّئ المحتوى للجمهور العربي، واختبر الطلب ثم توسّع بناءً على مؤشرات السوق.",
      primary: "افحص قابلية منتجي للسوق الخليجي",
      secondary: "تواصل مع ممدوح",
      bullets: ["المخزون يبقى في ماليزيا", "ابدأ بعدد محدود من المنتجات", "دعم التوطين بالعربية", "لا حاجة إلى مكتب خليجي للاختبار"],
      route: "ماليزيا ← eRomman ← عملاء الخليج",
      markets: "الأسواق المستهدفة",
    },
    trust: {
      title: "مصمم لاختبار السوق بأقل تغيير تشغيلي ممكن",
      items: [["1,300+", "بائع تم ضمه"], ["250,000", "منتج مدرج"], ["9M+", "مشاهدة للحملات"], ["4", "مواقع إقليمية"]],
      note: "لمحة عن منظومة eRomman؛ قد تتغير الأرقام التشغيلية مع الوقت.",
    },
    fit: {
      eyebrow: "فحص المنتج خلال 60 ثانية",
      title: "هل منتجك مرشح عملي للمراجعة في أسواق الخليج؟",
      body: "هذا الفحص لا يُعد موافقة على المنتج، وإنما يساعد على تحديد مدى جاهزية العلامة للمراجعة الأولية وما الذي ينبغي تحسينه أولاً.",
      category: "فئة المنتج", docs: "جاهزية الوثائق", sales: "مرحلة المبيعات الحالية", target: "السوق ذو الأولوية", productLink: "رابط المنتج أو العلامة (اختياري)", placeholder: "https://yourbrand.com/product",
      docsOptions: { ready: "الوثائق الأساسية جاهزة", partial: "بعض الوثائق جاهزة", none: "لم تُجهز بعد" },
      salesOptions: { established: "مبيعات إلكترونية / تجزئة مستقرة", growing: "علامة نامية بمبيعات نشطة", early: "مرحلة مبكرة / اختبار" },
      targetOptions: { saudi: "السعودية", uae: "الإمارات", gcc: "دول الخليج" },
      resultLabel: "التقييم الأولي",
      highTitle: "مرشح قوي لمراجعة أولية للسوق الخليجي", highBody: "يبدو أن ملفك الحالي مناسب لمراجعة مركزة للمنتج والوثائق.",
      midTitle: "يستحق تقييماً خليجياً أكثر تركيزاً", midBody: "توجد فرصة، لكن يُفضّل تعزيز نقطة أو نقطتين قبل التقديم إلى المنصات.",
      lowTitle: "يُنصح بمزيد من التجهيز أولاً", lowBody: "قد تظل هناك فرصة، لكن الوثائق أو ملاءمة الفئة أو الجوانب التشغيلية عبر الحدود تحتاج إلى تطوير.",
      disclaimer: "للاسترشاد الأولي فقط. الأهلية النهائية تعتمد على ملاءمة المنتج وقواعد الفئة والوثائق ومتطلبات كل منصة وإجراءات موافقة الجهات ذات الصلة.",
      whatsapp: "أرسل هذا التقييم عبر واتساب",
    },
    opportunities: { eyebrow: "فرص الفئات", title: "لكل فئة استراتيجية دخول مختلفة", body: "النهج الأفضل ليس إدراج جميع المنتجات منذ البداية، بل اختيار المنتجات الأسهل في التوطين والتوثيق والشحن والاختبار." },
    how: {
      eyebrow: "كيف يعمل الدخول إلى أسواق الخليج",
      title: "ابدأ بشكل محدود، اختبر الطلب، ثم توسّع بذكاء.",
      body: "تواصل تشغيل أعمالك في ماليزيا بينما تدعم eRomman الجوانب المواجهة للسوق والتنسيق عبر الحدود.",
      steps: [
        ["مراجعة المنتج", "اختيار عدد مناسب من المنتجات وتحديد الفجوات الواضحة في الوثائق."],
        ["التوطين", "تهيئة معلومات المنتج للعملاء الناطقين بالعربية ومتطلبات السوق المستهدف."],
        ["مراجعة المنصات", "تقييم فرص eRomman والمنصات الأخرى وفق متطلبات كل منصة."],
        ["اختبار الطلب", "طرح منتجات مختارة ومراقبة الاستجابة والتسعير والعملية التشغيلية."],
        ["التوسع فيما ينجح", "زيادة المنتجات تدريجياً بناءً على طلب مُثبت بدلاً من الالتزام الكبير منذ البداية."],
      ],
    },
    after: {
      eyebrow: "بعد التواصل مع ممدوح", title: "اعرف بوضوح ما الذي سيحدث بعد ذلك",
      steps: [["1", "مراجعة رابط المنتج", "أرسل موقعك أو متجر Shopee أو TikTok Shop أو الكتالوج."], ["2", "مراجعة الفئة والوثائق", "تحديد متطلبات المنصة أو الجهات التنظيمية أو معلومات المنتج."], ["3", "تحديد مسار البداية", "اختيار المنتجات والسوق أو المنصة الأكثر عملية للبدء."], ["4", "التهيئة والإدراج", "إعداد بيانات البائع والتوطين ومواد الإدراج."], ["5", "اختبار السوق والنمو", "متابعة الاستجابة والتوسع عندما تتأكد الفرصة."]],
    },
    support: {
      eyebrow: "دعم eRomman", title: "أكثر من مجرد إدراج منتج",
      items: [["التوطين بالعربية", "دعم إدراج المنتجات والترجمة وطريقة العرض المناسبة للسوق العربي."], ["الوصول إلى المنصات", "مسار مركزي إلى eRomman وفرص مختارة على منصات خارجية."], ["الظهور التسويقي", "حملات ومحتوى وSEO عربي وعروض بحسب الباقة والملاءمة."], ["إرشاد البائع", "نقطة تواصل مباشرة لتوضيح الخطوة التشغيلية التالية."], ["التنسيق عبر الحدود", "تنسيق الطلبات والاستلام والتنفيذ للترتيبات المناسبة."], ["اختبار السوق", "نهج يبدأ بالاختبار والتعلم قبل التوسع."]],
    },
    marketplaces: { eyebrow: "منظومة المنصات", title: "نقطة بداية واحدة وقنوات محتملة متعددة", body: "يمكن تقييم المنتجات المناسبة لفرص على eRomman وبعض منصات الشرق الأوسط المختارة.", platforms: ["eRomman", "Amazon السعودية", "Amazon الإمارات", "Noon السعودية", "Noon الإمارات", "SHEIN السعودية", "SHEIN الإمارات", "Trendyol", "Carrefour السعودية"], disclaimer: "الظهور على المنصات ليس تلقائياً، بل يخضع لملاءمة المنتج وقواعد الفئة والوثائق وإجراءات موافقة كل منصة." },
    pricing: {
      eyebrow: "عرض يوم ماليزيا · سبتمبر 2026", title: "اختر مستوى الدعم المناسب لمرحلة توسعك", body: "العرض الحالي لشهر سبتمبر: خصم 50% على باقات سنوية مختارة مع 8 أشهر إضافية، ليصبح إجمالي العضوية 20 شهراً. صالح حتى 30 سبتمبر 2026.",
      plans: [{ name: "Silver", price: "RM645", normal: "RM1,290", label: "بداية", features: ["تهيئة البائع", "الوصول إلى سوق الشرق الأوسط", "إدراج المنتجات", "مراجعة فرص المنصات"] }, { name: "Gold", price: "RM1,645", normal: "RM3,290", label: "نمو", features: ["كل مزايا Silver", "التوطين بالعربية", "دعم SEO عربي", "المشاركة في الحملات الشهرية"] }, { name: "Platinum", price: "RM5,000", normal: "RM10,000", label: "ظهور", features: ["كل مزايا Gold", "الإدراج في حملات التسويق", "دعم مخصص", "ميزات بائع متقدمة"] }, { name: "Pro Platinum", price: "تواصل معنا", normal: "مخصص", label: "شركات", features: ["كل مزايا Platinum", "فرص تسويقية ذات أولوية", "مدير علامة عربي", "دعم متعدد المنصات"] }],
      ask: "ناقش هذه الباقة", note: "يجب تأكيد نطاق الباقة والأهلية وترتيبات الدفع مع فريق دعم البائعين قبل الدفع.",
    },
    cost: { eyebrow: "لمحة عن تكاليف البائع", title: "قدّر صافي التسوية بعد العمولة", body: "استخدم الأداة للتخطيط فقط. تُفرض العمولة بعد إتمام البيع بنجاح، ووفق الدليل الحالي يتحمل المشتري تكلفة الشحن.", price: "سعر البيع (RM)", rate: "نسبة العمولة (%)", pickup: "استلام eRomman", yes: "نعم — رسوم استلام RM7", no: "لا — البائع يسلّم بشكل مستقل", commission: "العمولة التقديرية", pickupFee: "رسوم الاستلام", receives: "صافي التسوية التقديري", note: "تقدير توضيحي فقط. أكّد نسبة الفئة والرسوم التشغيلية الحالية قبل الانضمام. ينص الدليل الحالي على معالجة دفعة البائع خلال 10–15 يوم عمل بعد التسليم الناجح." },
    faq: { eyebrow: "أسئلة البائعين", title: "أسئلة شائعة قبل البدء", items: [["هل يجب نقل المخزون إلى الشرق الأوسط؟", "لا. يمكن إبقاء المخزون في ماليزيا أثناء اختبار السوق وفق ترتيب التنفيذ المتفق عليه."], ["هل يجب إدراج جميع المنتجات؟", "لا. البدء بعدد أصغر من المنتجات المناسبة أكثر عملية لاختبار السوق."], ["هل تضمن eRomman قبول Amazon أو Noon؟", "لا. الإدراج على المنصات الخارجية يعتمد على أهلية المنتج والوثائق وقواعد الفئة وموافقة المنصة."], ["ماذا عن المكملات والصحة والجمال؟", "قد تكون فرصها قوية، لكن يجب فحص المتطلبات التنظيمية ووثائق كل سوق ومنصة قبل التقديم."], ["من يدفع شحن العميل؟", "وفق الدليل الحالي يدفع المشتري تكلفة الشحن، ويجب تأكيد الترتيب النهائي أثناء الانضمام."], ["متى يحصل البائع على مستحقاته؟", "ينص الدليل الحالي على 10–15 يوم عمل بعد التسليم الناجح وإكمال الطلب."]]},
    contact: { eyebrow: "ابدأ برابط منتج واحد", title: "لنحدد نقطة البداية الخليجية الأكثر عملية لعلامتك.", body: "أرسل موقعك أو متجر المنصة أو رابط المنتج. يمكنني مساعدتك في مراجعة الفئة والوثائق والمسار الأنسب قبل اتخاذ القرار.", whatsapp: "افحص منتجاتي عبر واتساب", email: "راسل دعم البائعين" },
    footer: "GCC Market Entry بوابة معلومات للبائعين أعدّها Muhammad Mamduh Bin Saffin بالاستناد إلى مواد eRomman للبائعين. للمعلومات الرسمية والسياسات والتسجيل يرجى الرجوع إلى eromman.com.",
  },
} as const

const docsScore: Record<DocsKey, number> = { ready: 2, partial: 1, none: 0 }
const salesScore: Record<SalesKey, number> = { established: 2, growing: 1, early: 0 }

const fmt = (value: number) => value.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 })

export function GccMarketEntryGuide({ lang }: { lang: Lang }) {
  const t = copy[lang]
  const isArabic = lang === "ar"
  const [menuOpen, setMenuOpen] = useState(false)
  const [category, setCategory] = useState<CategoryKey>("beauty")
  const [docs, setDocs] = useState<DocsKey>("partial")
  const [sales, setSales] = useState<SalesKey>("growing")
  const [target, setTarget] = useState<TargetKey>("saudi")
  const [productLink, setProductLink] = useState("")
  const [price, setPrice] = useState("100")
  const [rate, setRate] = useState("18")
  const [pickup, setPickup] = useState(true)

  const selectedCategory = categories.find((item) => item.key === category) ?? categories[0]
  const fitScore = selectedCategory.score + docsScore[docs] + salesScore[sales]
  const fitLevel = category === "food" || (category === "supplement" && docs === "none") ? "low" : fitScore >= 5 ? "high" : fitScore >= 3 ? "mid" : "low"
  const fitTitle = fitLevel === "high" ? t.fit.highTitle : fitLevel === "mid" ? t.fit.midTitle : t.fit.lowTitle
  const fitBody = fitLevel === "high" ? t.fit.highBody : fitLevel === "mid" ? t.fit.midBody : t.fit.lowBody

  const targetLabels: Record<TargetKey, string> = {
    saudi: t.fit.targetOptions.saudi,
    uae: t.fit.targetOptions.uae,
    gcc: t.fit.targetOptions.gcc,
  }

  const docsLabels: Record<DocsKey, string> = {
    ready: t.fit.docsOptions.ready,
    partial: t.fit.docsOptions.partial,
    none: t.fit.docsOptions.none,
  }

  const salesLabels: Record<SalesKey, string> = {
    established: t.fit.salesOptions.established,
    growing: t.fit.salesOptions.growing,
    early: t.fit.salesOptions.early,
  }

  const whatsappReview = useMemo(() => {
    const message = [
      "Hi Mamduh, I used the GCC Market Entry product checker.",
      `Category: ${selectedCategory.label.en}`,
      `Target: ${targetLabels[target]}`,
      `Documents: ${docsLabels[docs]}`,
      `Sales stage: ${salesLabels[sales]}`,
      `Initial result: ${fitTitle}`,
      productLink ? `Product link: ${productLink}` : "",
      "Could you help me review the most practical GCC starting point?",
    ].filter(Boolean).join("\n")
    return `https://wa.me/60126413812?text=${encodeURIComponent(message)}`
  }, [docs, docsLabels, fitTitle, productLink, sales, salesLabels, selectedCategory.label.en, target, targetLabels])

  const sellingPrice = Math.max(0, Number.parseFloat(price) || 0)
  const commissionRate = Math.min(100, Math.max(0, Number.parseFloat(rate) || 0))
  const commission = (sellingPrice * commissionRate) / 100
  const pickupFee = pickup ? 7 : 0
  const settlement = Math.max(0, sellingPrice - commission - pickupFee)

  const languageLinks = [
    { code: "en" as const, label: "EN", href: (SITE_BASE_PATH || "") + "/en/" },
    { code: "bm" as const, label: "BM", href: (SITE_BASE_PATH || "") + "/bm/" },
    { code: "ar" as const, label: "AR", href: (SITE_BASE_PATH || "") + "/ar/" },
  ]

  const supportIcons = [Languages, Globe2, BarChart3, SearchCheck, Truck, Zap]
  const processIcons = [SearchCheck, Languages, Store, BarChart3, Zap]

  return (
    <div dir={t.dir} lang={lang === "bm" ? "ms" : lang} className={isArabic ? "font-sans" : ""}>
      <header className="sticky top-0 z-50 border-b border-red-100/80 bg-white/95 shadow-[0_8px_30px_rgba(120,10,18,0.06)] backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <a href={(SITE_BASE_PATH || "") + "/"} className="flex min-w-0 items-center gap-3" aria-label="GCC Market Entry">
            <img src={SITE_BASE_PATH + "/images/eromman-logo.png"} alt="eRomman" width={1157} height={238} className="h-8 w-auto sm:h-9" />
            <span className="hidden h-8 w-px bg-red-100 sm:block" />
            <span className="hidden min-w-0 sm:block">
              <span className="block truncate text-sm font-black tracking-tight text-[#221a18]">{t.portal}</span>
              <span className="block truncate text-[10px] font-bold uppercase tracking-[0.14em] text-primary">{t.portalSub}</span>
            </span>
          </a>

          <ul className="hidden items-center gap-4 xl:flex">
            {[
              [t.nav.fit, "#fit-check"],
              [t.nav.how, "#how-it-works"],
              [t.nav.opportunities, "#opportunities"],
              [t.nav.marketplaces, "#marketplaces"],
              [t.nav.plans, "#pricing"],
              [t.nav.stories, "#seller-success-stories"],
              [t.nav.faq, "#faq"],
            ].map(([label, href]) => (
              <li key={href}><a href={href} className="text-xs font-bold text-muted-foreground transition hover:text-primary">{label}</a></li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <div className="flex rounded-full border border-border bg-card p-1">
              {languageLinks.map((item) => <a key={item.code} href={item.href} className={"rounded-full px-3 py-1.5 text-xs font-bold " + (item.code === lang ? "bg-primary text-white" : "text-muted-foreground hover:text-primary")}>{item.label}</a>)}
            </div>
            <a href="#fit-check" className="rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/20">{t.nav.fit}</a>
          </div>

          <button type="button" onClick={() => setMenuOpen((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center rounded-lg md:hidden" aria-label="Menu">
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-border bg-white md:hidden">
            <div className="mx-auto max-w-7xl px-4 py-4">
              <div className="mb-3 flex gap-2">{languageLinks.map((item) => <a key={item.code} href={item.href} className={"rounded-full px-3 py-1.5 text-xs font-bold " + (item.code === lang ? "bg-primary text-white" : "border border-border")}>{item.label}</a>)}</div>
              {[[t.nav.fit, "#fit-check"], [t.nav.how, "#how-it-works"], [t.nav.opportunities, "#opportunities"], [t.nav.marketplaces, "#marketplaces"], [t.nav.plans, "#pricing"], [t.nav.stories, "#seller-success-stories"], [t.nav.faq, "#faq"]].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-semibold hover:bg-secondary">{label}</a>)}
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="relative overflow-hidden bg-[#fffaf7]">
          <div className="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-0 h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-3xl" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-24 lg:pt-16">
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-primary shadow-sm"><Sparkles className="h-4 w-4 text-accent" />{t.hero.eyebrow}</span>
              <h1 className="mt-6 text-[2.7rem] font-black leading-[0.96] tracking-[-0.045em] text-[#171312] sm:text-6xl lg:text-[5rem]">
                <span className="block">{t.hero.title1}</span>
                <span className="mt-1 block text-primary">{t.hero.title2}</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#645852] sm:text-xl">{t.hero.body}</p>
              <div className="mt-7 flex flex-wrap gap-2.5">{t.hero.bullets.map((item) => <span key={item} className="inline-flex items-center gap-2 rounded-xl border border-red-100 bg-white px-3.5 py-2.5 text-sm font-bold text-[#332b28] shadow-sm"><CheckCircle2 className="h-4 w-4 text-primary" />{item}</span>)}</div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#fit-check" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-black text-white shadow-xl shadow-primary/20 transition hover:-translate-y-0.5">{t.hero.primary}<ArrowRight className="h-4 w-4" /></a>
                <a href={EROMMAN_LINKS.sellerSupportWhatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary/20 bg-white px-7 py-3.5 text-sm font-black text-primary transition hover:bg-primary/5"><MessageCircle className="h-4 w-4" />{t.hero.secondary}</a>
              </div>
              <div className="mt-10 border-t border-red-100 pt-6">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">{t.hero.markets}</p>
                <div className="mt-3 flex flex-wrap gap-2">{["Saudi Arabia", "UAE", "Kuwait", "Qatar", "Bahrain", "Oman"].map((market) => <span key={market} className="rounded-full bg-primary/7 px-3 py-1.5 text-xs font-black text-primary">{market}</span>)}</div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] border border-red-100 bg-white shadow-[0_35px_90px_rgba(91,10,17,0.18)]">
                <img src={SITE_BASE_PATH + "/images/official/eromman-gcc-bridge-hero.webp"} alt="GCC market entry with eRomman" width={1024} height={1024} className="h-[470px] w-full object-cover sm:h-[560px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6d0710]/85 via-transparent to-white/5" />
                <div className="absolute left-5 top-5 rounded-xl border border-white/50 bg-white/92 px-4 py-3 shadow-lg backdrop-blur-md">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{t.portal}</p>
                  <p className="mt-1 max-w-[15rem] text-sm font-black leading-tight text-[#221b19]">{t.hero.route}</p>
                </div>
                <div className="absolute bottom-5 left-5 right-5 grid gap-2 rounded-2xl border border-white/30 bg-white/95 p-4 shadow-2xl backdrop-blur-xl sm:grid-cols-3">
                  {[{ icon: SearchCheck, label: t.how.steps[0][0] }, { icon: Languages, label: t.how.steps[1][0] }, { icon: BarChart3, label: t.how.steps[3][0] }].map(({ icon: Icon, label }) => <div key={label} className="flex items-center gap-2 rounded-xl bg-[#fff5f2] px-3 py-3"><span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-white"><Icon className="h-4 w-4" /></span><span className="text-xs font-black text-[#3a302d]">{label}</span></div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#860810] py-10 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"><div><p className="text-xs font-black uppercase tracking-[0.18em] text-[#f2cf7b]">eRomman ecosystem</p><h2 className="mt-2 text-2xl font-black">{t.trust.title}</h2></div><p className="max-w-xl text-xs leading-relaxed text-white/60">{t.trust.note}</p></div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{t.trust.items.map((item) => <div key={item[1]} className="rounded-2xl border border-white/15 bg-white/8 p-5"><p className="text-3xl font-black">{item[0]}</p><p className="mt-1 text-xs font-bold uppercase tracking-[0.1em] text-white/65">{item[1]}</p></div>)}</div>
          </div>
        </section>

        <section id="fit-check" className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div className="lg:sticky lg:top-28">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-primary">{t.fit.eyebrow}</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{t.fit.title}</h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{t.fit.body}</p>
                <div className="mt-7 rounded-2xl border border-primary/15 bg-primary/5 p-5"><ShieldCheck className="h-6 w-6 text-primary" /><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.fit.disclaimer}</p></div>
              </div>

              <div className="rounded-[2rem] border border-red-100 bg-[#fffaf7] p-5 shadow-[0_24px_70px_rgba(92,12,18,0.08)] sm:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-sm font-bold">{t.fit.category}<select value={category} onChange={(event) => setCategory(event.target.value as CategoryKey)} className="mt-2 w-full rounded-xl border border-input bg-white px-3 py-3 font-medium outline-none focus:ring-2 focus:ring-primary/20">{categories.map((item) => <option key={item.key} value={item.key}>{item.label[lang]}</option>)}</select></label>
                  <label className="text-sm font-bold">{t.fit.docs}<select value={docs} onChange={(event) => setDocs(event.target.value as DocsKey)} className="mt-2 w-full rounded-xl border border-input bg-white px-3 py-3 font-medium outline-none focus:ring-2 focus:ring-primary/20"><option value="ready">{t.fit.docsOptions.ready}</option><option value="partial">{t.fit.docsOptions.partial}</option><option value="none">{t.fit.docsOptions.none}</option></select></label>
                  <label className="text-sm font-bold">{t.fit.sales}<select value={sales} onChange={(event) => setSales(event.target.value as SalesKey)} className="mt-2 w-full rounded-xl border border-input bg-white px-3 py-3 font-medium outline-none focus:ring-2 focus:ring-primary/20"><option value="established">{t.fit.salesOptions.established}</option><option value="growing">{t.fit.salesOptions.growing}</option><option value="early">{t.fit.salesOptions.early}</option></select></label>
                  <label className="text-sm font-bold">{t.fit.target}<select value={target} onChange={(event) => setTarget(event.target.value as TargetKey)} className="mt-2 w-full rounded-xl border border-input bg-white px-3 py-3 font-medium outline-none focus:ring-2 focus:ring-primary/20"><option value="saudi">{t.fit.targetOptions.saudi}</option><option value="uae">{t.fit.targetOptions.uae}</option><option value="gcc">{t.fit.targetOptions.gcc}</option></select></label>
                </div>
                <label className="mt-5 block text-sm font-bold">{t.fit.productLink}<input value={productLink} onChange={(event) => setProductLink(event.target.value)} placeholder={t.fit.placeholder} className="mt-2 w-full rounded-xl border border-input bg-white px-3 py-3 font-medium outline-none focus:ring-2 focus:ring-primary/20" /></label>

                <div className="mt-7 overflow-hidden rounded-2xl border border-primary/15 bg-white">
                  <div className="flex items-center justify-between gap-3 border-b border-red-100 px-5 py-4"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/8 text-primary"><selectedCategory.icon className="h-5 w-5" /></span><div><p className="text-xs font-black uppercase tracking-[0.14em] text-primary">{t.fit.resultLabel}</p><p className="font-black">{selectedCategory.label[lang]}</p></div></div><span className="rounded-full bg-primary/8 px-3 py-1.5 text-xs font-black text-primary">{selectedCategory.badge[lang]}</span></div>
                  <div className="p-5 sm:p-6"><div className="flex items-start gap-3"><BadgeCheck className="mt-1 h-6 w-6 shrink-0 text-primary" /><div><h3 className="text-xl font-black">{fitTitle}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{fitBody}</p><p className="mt-3 text-sm leading-relaxed text-[#6b5d58]">{selectedCategory.note[lang]}</p></div></div><a href={whatsappReview} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-black text-white shadow-lg shadow-primary/20 sm:w-auto"><MessageCircle className="h-4 w-4" />{t.fit.whatsapp}</a></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="opportunities" className="border-y border-red-100 bg-[#fff8f3] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center"><p className="text-xs font-black uppercase tracking-[0.22em] text-primary">{t.opportunities.eyebrow}</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{t.opportunities.title}</h2><p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{t.opportunities.body}</p></div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{categories.slice(0, 6).map((item) => { const Icon = item.icon; return <article key={item.key} className="group rounded-2xl border border-red-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className="flex items-start justify-between gap-4"><span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/8 text-primary transition group-hover:bg-primary group-hover:text-white"><Icon className="h-5 w-5" /></span><span className="rounded-full bg-[#fff1ec] px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-primary">{item.badge[lang]}</span></div><h3 className="mt-5 text-xl font-black">{item.label[lang]}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.note[lang]}</p></article> })}</div>
          </div>
        </section>

        <section id="how-it-works" className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center"><p className="text-xs font-black uppercase tracking-[0.22em] text-primary">{t.how.eyebrow}</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{t.how.title}</h2><p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{t.how.body}</p></div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{t.how.steps.map((step, index) => { const Icon = processIcons[index]; return <article key={step[0]} className="relative rounded-2xl border border-border bg-card p-6 shadow-sm"><span className="absolute right-4 top-4 text-3xl font-black text-primary/10">0{index + 1}</span><Icon className="h-6 w-6 text-primary" /><h3 className="mt-5 text-lg font-black">{step[0]}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step[1]}</p></article> })}</div>
          </div>
        </section>

        <section className="bg-[#8f0912] py-20 text-white lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start"><div><p className="text-xs font-black uppercase tracking-[0.22em] text-[#f2cf7b]">{t.after.eyebrow}</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{t.after.title}</h2></div><div className="space-y-3">{t.after.steps.map((step) => <div key={step[0]} className="grid gap-3 rounded-2xl border border-white/15 bg-white/8 p-5 sm:grid-cols-[auto_0.45fr_1fr] sm:items-center"><span className="grid h-10 w-10 place-items-center rounded-full bg-white text-sm font-black text-primary">{step[0]}</span><h3 className="font-black">{step[1]}</h3><p className="text-sm leading-relaxed text-white/70">{step[2]}</p></div>)}</div></div>
          </div>
        </section>

        <section className="bg-[#fffaf7] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl text-center"><p className="text-xs font-black uppercase tracking-[0.22em] text-primary">{t.support.eyebrow}</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{t.support.title}</h2></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{t.support.items.map((item, index) => { const Icon = supportIcons[index]; return <article key={item[0]} className="rounded-2xl border border-red-100 bg-white p-6 shadow-sm"><span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/8 text-primary"><Icon className="h-5 w-5" /></span><h3 className="mt-4 text-lg font-black">{item[0]}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item[1]}</p></article> })}</div></div>
        </section>

        <section id="marketplaces" className="border-y border-red-100 bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl text-center"><p className="text-xs font-black uppercase tracking-[0.22em] text-primary">{t.marketplaces.eyebrow}</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{t.marketplaces.title}</h2><p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{t.marketplaces.body}</p></div><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{t.marketplaces.platforms.map((platform, index) => <div key={platform} className={"flex min-h-24 items-center justify-center rounded-2xl border p-5 text-center text-lg font-black " + (index === 0 ? "border-primary bg-primary text-white" : "border-red-100 bg-[#fffaf7]")}>{platform}</div>)}</div><p className="mx-auto mt-7 max-w-4xl rounded-2xl border border-primary/15 bg-primary/5 p-5 text-center text-sm leading-relaxed text-muted-foreground">{t.marketplaces.disclaimer}</p></div>
        </section>

        <CompanyProfileVideo lang={lang} />
        <SellerSuccessStories lang={lang} />

        <section id="pricing" className="bg-[#fff8f3] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[0.22em] text-primary">{t.pricing.eyebrow}</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{t.pricing.title}</h2><p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{t.pricing.body}</p></div><div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{t.pricing.plans.map((plan, index) => <article key={plan.name} className={"flex flex-col rounded-2xl border p-6 " + (index === 1 ? "border-primary bg-white shadow-xl ring-1 ring-primary" : "border-red-100 bg-white")}><p className="text-xs font-black uppercase tracking-[0.16em] text-primary">{plan.label}</p><h3 className="mt-2 text-2xl font-black">{plan.name}</h3><div className="mt-5"><p className="text-3xl font-black text-primary">{plan.price}</p><p className="mt-1 text-sm text-muted-foreground line-through">{plan.normal}</p></div><ul className="mt-6 flex-1 space-y-3">{plan.features.map((feature) => <li key={feature} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{feature}</li>)}</ul><a href={EROMMAN_LINKS.sellerSupportWhatsapp} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-black text-white">{t.pricing.ask}<ChevronRight className="h-4 w-4" /></a></article>)}</div><p className="mt-6 rounded-2xl border border-border bg-white p-5 text-sm leading-relaxed text-muted-foreground">{t.pricing.note}</p></div>
        </section>

        <section id="cost-estimator" className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"><div><p className="text-xs font-black uppercase tracking-[0.22em] text-primary">{t.cost.eyebrow}</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{t.cost.title}</h2><p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{t.cost.body}</p></div><div className="overflow-hidden rounded-[2rem] border border-red-100 bg-[#fffaf7] shadow-[0_20px_60px_rgba(92,12,18,0.08)]"><div className="grid gap-5 p-6 sm:grid-cols-2 sm:p-8"><label className="text-sm font-bold">{t.cost.price}<div className="mt-2 flex items-center rounded-xl border border-input bg-white"><span className="pl-3 text-muted-foreground">RM</span><input type="number" min="0" step="0.01" value={price} onChange={(event) => setPrice(event.target.value)} className="w-full bg-transparent px-2 py-3 outline-none" /></div></label><label className="text-sm font-bold">{t.cost.rate}<input type="number" min="0" max="100" step="1" value={rate} onChange={(event) => setRate(event.target.value)} className="mt-2 w-full rounded-xl border border-input bg-white px-3 py-3 outline-none" /></label><label className="text-sm font-bold sm:col-span-2">{t.cost.pickup}<select value={pickup ? "yes" : "no"} onChange={(event) => setPickup(event.target.value === "yes")} className="mt-2 w-full rounded-xl border border-input bg-white px-3 py-3 outline-none"><option value="yes">{t.cost.yes}</option><option value="no">{t.cost.no}</option></select></label></div><div className="bg-primary p-6 text-white sm:p-8"><dl className="space-y-4 text-sm"><div className="flex justify-between gap-4"><dt className="text-white/70">{t.cost.commission}</dt><dd className="font-black">- RM {fmt(commission)}</dd></div><div className="flex justify-between gap-4"><dt className="text-white/70">{t.cost.pickupFee}</dt><dd className="font-black">- RM {fmt(pickupFee)}</dd></div></dl><div className="mt-6 border-t border-white/20 pt-6"><div className="flex items-end justify-between gap-4"><span className="text-sm text-white/70">{t.cost.receives}</span><span className="text-3xl font-black">RM {fmt(settlement)}</span></div></div><p className="mt-5 text-xs leading-relaxed text-white/70">{t.cost.note}</p></div></div></div></div>
        </section>

        <section id="faq" className="border-y border-red-100 bg-[#fffaf7] py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><p className="text-xs font-black uppercase tracking-[0.22em] text-primary">{t.faq.eyebrow}</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{t.faq.title}</h2><div className="mt-9 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white">{t.faq.items.map((item) => <details key={item[0]} className="p-6 open:bg-secondary/40"><summary className="cursor-pointer font-black">{item[0]}</summary><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item[1]}</p></details>)}</div></div>
        </section>

        <section id="contact" className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-[#75070e] text-white"><div className="grid gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-14 lg:py-16"><div><p className="text-xs font-black uppercase tracking-[0.22em] text-[#f2cf7b]">{t.contact.eyebrow}</p><h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{t.contact.title}</h2><p className="mt-5 max-w-2xl text-base leading-relaxed text-white/78 sm:text-lg">{t.contact.body}</p><div className="mt-8 flex flex-wrap gap-3"><a href={EROMMAN_LINKS.sellerSupportWhatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-black text-primary"><MessageCircle className="h-4 w-4" />{t.contact.whatsapp}</a><a href={EROMMAN_LINKS.sellerSupportEmail} className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-black"><Mail className="h-4 w-4" />{t.contact.email}</a></div></div><aside className="rounded-2xl bg-white p-6 text-foreground"><img src={SITE_BASE_PATH + "/images/eromman-logo.png"} alt="eRomman" width={1157} height={238} className="h-8 w-auto" /><p className="mt-6 text-xl font-black">{SELLER_SUPPORT.name}</p><p className="mt-1 text-sm text-muted-foreground">{SELLER_SUPPORT.role}</p><div className="mt-6 space-y-3 text-sm"><a href={EROMMAN_LINKS.sellerSupportEmail} className="flex items-center gap-3 hover:text-primary"><Mail className="h-4 w-4 text-primary" />{SELLER_SUPPORT.email}</a><a href={EROMMAN_LINKS.sellerSupportPhone} className="flex items-center gap-3 hover:text-primary"><Phone className="h-4 w-4 text-primary" />{SELLER_SUPPORT.phone}</a><a href={EROMMAN_LINKS.sellerSupportLinkedIn} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary"><ExternalLink className="h-4 w-4 text-primary" />LinkedIn</a><a href={EROMMAN_LINKS.home} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary"><ExternalLink className="h-4 w-4 text-primary" />www.eromman.com</a></div></aside></div></div></div>
        </section>
      </main>

      <footer className="border-t border-red-900/30 bg-[#6f0710] text-white"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-10 text-sm text-white/70 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8"><p className="max-w-4xl leading-relaxed">{t.footer}</p><a href={EROMMAN_LINKS.home} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 font-black text-white">eromman.com<ExternalLink className="h-4 w-4" /></a></div></footer>

      <a href={EROMMAN_LINKS.sellerSupportWhatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp seller support" className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#148f55] px-4 py-3 text-sm font-black text-white shadow-2xl transition hover:-translate-y-1 rtl:left-5 rtl:right-auto"><MessageCircle className="h-5 w-5" /><span className="hidden sm:inline">{t.hero.secondary}</span></a>
    </div>
  )
}
