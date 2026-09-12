"use client"

import { useEffect, useMemo, useState } from "react"
import {
  BarChart3,
  CheckCircle2,
  ExternalLink,
  Globe2,
  Languages,
  Mail,
  Menu,
  MessageCircle,
  PackageCheck,
  Phone,
  ShieldCheck,
  Store,
  Truck,
  X,
} from "lucide-react"
import { SITE_BASE_PATH } from "@/lib/site"
import { EROMMAN_LINKS, SELLER_SUPPORT } from "@/lib/links"

type Lang = "en" | "bm" | "ar"

type Plan = {
  name: string
  tier: string
  blurb: string
  price: string
  normal: string
  monthly?: string
  features: string[]
  featured?: boolean
}

const content = {
  en: {
    languageName: "English",
    dir: "ltr",
    nav: {
      how: "How It Works",
      support: "Seller Support",
      marketplaces: "Marketplace Opportunities",
      plans: "Plans",
      fees: "Seller Fees",
      faq: "FAQ",
      contact: "Contact",
      login: "Seller Login",
      check: "Check My Products",
    },
    hero: {
      badge: "Sell to the Middle East with eRomman",
      title: "Add the Middle East as a new sales channel — without changing how you sell in Malaysia.",
      body:
        "eRomman is an Arabic-language marketplace connecting Malaysian sellers with customers in the Middle East. If you already sell on Shopee, Lazada, your own website or other marketplaces, the model is familiar: continue operating as usual in Malaysia while eRomman helps you reach new customers in the Middle East.",
      bullets: [
        "Keep stock in Malaysia",
        "No Middle East office needed",
        "Start with only a few SKUs",
        "Arabic marketplace support",
      ],
      primary: "Check If My Products Fit",
      secondary: "See How It Works",
      marketsLabel: "Target Middle East Markets",
      routeLabel: "Simple marketplace model",
      route: "Malaysia → eRomman → Middle East customer",
      noteTitle: "Your business model stays the same.",
      note:
        "eRomman adds exposure to a new market while you continue running your Malaysia operations.",
    },
    markets: ["Saudi Arabia", "UAE", "Kuwait", "Qatar", "Bahrain", "Oman"],
    stats: {
      eyebrow: "eRomman ecosystem snapshot",
      title: "Existing marketplace infrastructure for regional growth",
      body:
        "eRomman supports sellers with marketplace access, Arabic localisation, market-entry support and logistics coordination across its regional ecosystem.",
      items: [
        ["1,300", "Sellers onboarded"],
        ["250,000", "SKUs listed"],
        ["9M+", "Campaign views"],
        ["MATRADE", "Strategic partner"],
      ],
      presence: "Regional presence",
      offices: ["Kuala Lumpur", "Jeddah", "Dubai", "Jakarta"],
    },
    process: {
      eyebrow: "How it works",
      title: "A normal marketplace flow, focused on Middle East customers",
      body:
        "You keep operating in Malaysia. eRomman adds another sales channel and supports the cross-border order journey.",
      steps: [
        ["Upload", "Provide your products and basic information."],
        ["List", "Products are displayed on eRomman with marketplace support."],
        ["Order", "A Middle East customer places an order."],
        ["Prepare", "Pack the product using your normal process."],
        ["Deliver", "The order is collected or shipped and delivered to the customer."],
      ],
      footer: "Seller continues running the business as usual in Malaysia.",
    },
    ease: {
      eyebrow: "Minimal change for the seller",
      title: "Try a new market without disrupting your current business",
      body:
        "You do not need to completely change your operations just to explore the Middle East.",
      items: [
        ["Continue selling as usual", "Keep operating your Malaysia business normally."],
        ["Keep stock in Malaysia", "There is no need to relocate inventory simply to test the market."],
        ["Use your normal packing process", "Prepare orders using your existing operational routine."],
        ["No Middle East office required", "Explore the market without opening your own regional office first."],
      ],
      controlEyebrow: "Seller control & brand ownership",
      controlTitle: "You stay in control of your brand.",
      control: ["Products", "Pricing", "Inventory", "Documentation", "Brand positioning"],
      rommanTitle: "eRomman supports the market-facing work",
      romman:
        "Marketplace access, consumer exposure, Arabic localisation, market validation and operational workflow support.",
    },
    support: {
      eyebrow: "How eRomman helps",
      title: "You focus on your products. eRomman helps open the market.",
      body:
        "The seller journey combines marketplace access, Arabic support, visibility, promotion, customer support and cross-border coordination.",
      items: [
        ["Arabic Marketplace & Localisation", "Arabic-first marketplace presentation, product listing support, translation and localisation."],
        ["Middle East Customer Exposure", "Create another route for your products to be discovered by customers across target GCC markets."],
        ["Marketing & Promotion", "Support may include Arabic SEO, social campaigns, email, content, display advertising and seasonal promotions."],
        ["Market Validation", "Start with suitable SKUs, observe response and use market evidence before expanding further."],
        ["Customer & Seller Support", "Support for marketplace coordination, customer-facing communication and seller guidance."],
        ["Order & Logistics Coordination", "Cross-border order coordination, pickup options and fulfilment support for suitable sellers."],
      ],
    },
    marketplace: {
      eyebrow: "Marketplace ecosystem",
      title: "One registration. Multiple marketplace opportunities.",
      body:
        "eRomman acts as a central gateway where suitable products may be reviewed for opportunities across multiple Middle East marketplace channels.",
      disclaimer:
        "Marketplace exposure is subject to product suitability, category requirements, documentation and the relevant platform approval process.",
      platforms: [
        "eRomman",
        "Amazon Saudi Arabia",
        "Amazon UAE",
        "Noon Saudi Arabia",
        "Noon UAE",
        "SHEIN Saudi Arabia",
        "SHEIN UAE",
        "Trendyol",
        "Carrefour Saudi Arabia",
      ],
      learn: "Learn about selling on eRomman",
    },
    framework: {
      eyebrow: "Evidence before expansion",
      title: "Start small. Test the market. Scale what works.",
      body:
        "You do not need to list every product from day one. eRomman's market-validation framework is designed to reduce the commitment of testing a new region.",
      steps: [
        ["Start", "Select a manageable number of suitable products."],
        ["Test", "Introduce the products to Middle East customers."],
        ["Learn", "Observe consumer response and market signals."],
        ["Validate", "Identify products showing stronger market potential."],
        ["Scale", "Expand gradually based on validated opportunity."],
      ],
      journeyTitle: "How Middle East customers discover products",
      journey:
        "Arabic Content → Awareness → Engagement → Marketplace Discovery → Purchase → Repeat Purchase",
      journeyNote: "Success depends on localisation, visibility and consumer trust.",
    },
    pricing: {
      eyebrow: "Hari Malaysia Special — September 2026",
      title: "A lighter way to start exploring the Middle East market",
      body:
        "The September offer provides 50% off selected annual packages plus 8 extra months of membership, giving a total membership period of 20 months.",
      promo: "50% OFF selected annual packages + 8 extra months",
      total: "Total membership: 20 months",
      valid: "Valid until 30 September 2026",
      ask: "Ask About This Plan",
      annualNote:
        "Annual subscription applies. The monthly figures shown for Silver and Gold are simple annual-cost equivalents. If one-shot payment is difficult, payment arrangements can be discussed with the seller support team.",
      plans: [
        {
          name: "Silver",
          tier: "Starter Package",
          blurb: "Best for new sellers starting their Middle East journey.",
          price: "RM645",
          normal: "RM1,290",
          monthly: "≈ RM54/month",
          features: ["Seller onboarding", "Middle East marketplace access", "Product listing", "Marketplace opportunity review", "Product exposure"],
        },
        {
          name: "Gold",
          tier: "Growth Package",
          blurb: "Best for growing brands and SMEs that want more localisation and campaign support.",
          price: "RM1,645",
          normal: "RM3,290",
          monthly: "≈ RM137/month",
          features: ["Everything in Silver", "Arabic localisation", "Arabic SEO support", "Monthly campaign participation", "Enhanced seller support"],
          featured: true,
        },
        {
          name: "Platinum",
          tier: "Visibility Growth Package",
          blurb: "Best for established brands seeking stronger regional expansion support.",
          price: "RM5,000",
          normal: "RM10,000",
          features: ["Everything in Gold", "Marketing campaign inclusion", "Dedicated seller support", "Premium seller features", "Visibility growth support"],
        },
        {
          name: "Pro Platinum",
          tier: "Corporate / Enterprise",
          blurb: "Best for larger operations requiring a tailored regional package.",
          price: "Custom package",
          normal: "Contact us",
          features: ["Everything in Platinum", "Priority marketing opportunities", "Arab brand manager", "AI+ content guidance", "Multi-platform support"],
        },
      ] as Plan[],
    },
    fees: {
      eyebrow: "Seller charges & settlement",
      title: "No sale = no commission",
      body:
        "Commission is charged only when the customer successfully receives the product and the order is completed.",
      badges: ["No registration fee", "No listing fee", "No hidden costs", "Commission after sale"],
      calculator: "Settlement calculator",
      price: "Product selling price (RM)",
      category: "Product category",
      commission: "Commission rate (%)",
      handover: "Order handover method",
      collect: "eRomman collects — RM7 pickup fee",
      self: "Seller ships independently — RM0 pickup fee",
      estimate: "Estimated seller settlement",
      sellerPrice: "Seller price",
      pickupFee: "Pickup fee",
      receives: "Seller receives",
      note:
        "Estimate only. Customer pays shipping. Seller payment is processed within 10–15 working days after successful delivery.",
      typical: "Typical commission rates",
      categoryNote: "Commission depends on product category.",
      categories: [
        ["Fashion & Accessories", 20, 20],
        ["Health & Beauty", 18, 20],
        ["Electronics", 10, 20],
        ["Mobile Phones", 13, 13],
        ["Computers & Laptops", 13, 13],
        ["Home Appliances", 15, 20],
        ["Books & Media", 20, 20],
        ["Automotive", 18, 20],
      ] as [string, number, number][],
    },
    faq: {
      eyebrow: "Seller FAQ",
      title: "The practical questions sellers usually ask",
      items: [
        ["What is eRomman?", "eRomman is an Arabic-language marketplace connecting sellers from Malaysia with customers in the Middle East."],
        ["Do I need to move my stock or open an office in the Middle East?", "No. Sellers can keep stock in Malaysia and do not need to open a Middle East office just to start exploring the market."],
        ["Do I need to list every product?", "No. You can start with only a few suitable SKUs, test customer response first and add more products if the market shows potential."],
        ["When is commission charged?", "Commission is charged only after a successful sale — when the customer receives the product and the order is completed."],
        ["When do sellers get paid?", "Seller payment is processed within 10–15 working days after successful delivery."],
        ["How does pickup work?", "If eRomman collects the order, the pickup fee is RM7 per order. If the seller ships independently, there is no pickup fee."],
        ["What happens if a customer returns an item?", "Return handling depends on the cause. Customer change-of-mind items may be kept within the GCC market for remarketing; seller/product issues are the seller's responsibility; confirmed logistics issues are handled through the applicable logistics and insurance claim process."],
        ["Can payment arrangements for the subscription be discussed?", "Yes. If one-shot payment is difficult, payment arrangements can be discussed with the team."],
      ],
    },
    cta: {
      eyebrow: "Start small",
      title: "Let’s test the Middle East market together.",
      body:
        "Send me your brand or product link. I can help review which products may be suitable to start with and explain the eRomman process clearly before you decide.",
      whatsapp: "WhatsApp Mamduh",
      email: "Email Seller Support",
      footer:
        "Seller guide prepared to help Malaysian sellers understand eRomman’s Middle East marketplace opportunity.",
      official: "For official eRomman corporate information, policies and registration, visit eromman.com.",
    },
  },
  bm: {
    languageName: "Bahasa Melayu",
    dir: "ltr",
    nav: {
      how: "Cara Ia Berfungsi",
      support: "Sokongan Penjual",
      marketplaces: "Peluang Marketplace",
      plans: "Pelan",
      fees: "Caj Penjual",
      faq: "Soalan Lazim",
      contact: "Hubungi Kami",
      login: "Log Masuk Penjual",
      check: "Semak Produk Saya",
    },
    hero: {
      badge: "Jual ke Timur Tengah bersama eRomman",
      title: "Jadikan Timur Tengah sebagai saluran jualan baharu — tanpa mengubah cara anda berniaga di Malaysia.",
      body:
        "eRomman ialah marketplace berbahasa Arab yang menghubungkan penjual dari Malaysia dengan pelanggan di Timur Tengah. Jika anda sudah menjual di Shopee, Lazada, laman web sendiri atau marketplace lain, konsepnya mudah dan biasa. Teruskan operasi anda seperti biasa di Malaysia sementara eRomman membantu membuka peluang untuk mencapai pelanggan baharu di Timur Tengah.",
      bullets: [
        "Simpan stok di Malaysia",
        "Tidak perlu pejabat di Timur Tengah",
        "Boleh mula dengan beberapa SKU sahaja",
        "Sokongan marketplace dalam bahasa Arab",
      ],
      primary: "Semak Kesesuaian Produk Saya",
      secondary: "Lihat Cara Ia Berfungsi",
      marketsLabel: "Pasaran Sasaran Timur Tengah",
      routeLabel: "Model marketplace yang mudah",
      route: "Malaysia → eRomman → Pelanggan Timur Tengah",
      noteTitle: "Model perniagaan anda kekal sama.",
      note:
        "eRomman menambah pendedahan ke pasaran baharu sementara anda terus menjalankan operasi di Malaysia.",
    },
    markets: ["Arab Saudi", "UAE", "Kuwait", "Qatar", "Bahrain", "Oman"],
    stats: {
      eyebrow: "Gambaran ekosistem eRomman",
      title: "Ekosistem marketplace untuk pertumbuhan serantau",
      body:
        "eRomman membantu penjual melalui akses marketplace, lokalisasi bahasa Arab, sokongan kemasukan pasaran dan penyelarasan logistik.",
      items: [
        ["1,300", "Penjual telah menyertai"],
        ["250,000", "SKU telah disenaraikan"],
        ["9M+", "Paparan kempen"],
        ["MATRADE", "Rakan strategik"],
      ],
      presence: "Kehadiran serantau",
      offices: ["Kuala Lumpur", "Jeddah", "Dubai", "Jakarta"],
    },
    process: {
      eyebrow: "Cara ia berfungsi",
      title: "Aliran marketplace biasa, dengan fokus pelanggan Timur Tengah",
      body:
        "Anda terus beroperasi di Malaysia. eRomman menambah satu lagi saluran jualan dan membantu perjalanan pesanan rentas sempadan.",
      steps: [
        ["Muat naik", "Berikan produk dan maklumat asas."],
        ["Senaraikan", "Produk dipaparkan di eRomman dengan sokongan marketplace."],
        ["Pesanan", "Pelanggan Timur Tengah membuat pesanan."],
        ["Sediakan", "Bungkus produk menggunakan proses biasa anda."],
        ["Hantar", "Pesanan diambil atau dihantar dan kemudian diserahkan kepada pelanggan."],
      ],
      footer: "Penjual terus menjalankan perniagaan seperti biasa di Malaysia.",
    },
    ease: {
      eyebrow: "Perubahan minimum untuk penjual",
      title: "Terokai pasaran baharu tanpa mengganggu operasi sedia ada",
      body:
        "Anda tidak perlu mengubah keseluruhan operasi perniagaan hanya untuk mencuba pasaran Timur Tengah.",
      items: [
        ["Teruskan jualan seperti biasa", "Teruskan operasi perniagaan anda di Malaysia."],
        ["Simpan stok di Malaysia", "Tidak perlu memindahkan stok ke luar negara hanya untuk menguji pasaran."],
        ["Gunakan proses pembungkusan biasa", "Sediakan produk menggunakan proses operasi yang anda sudah gunakan."],
        ["Tidak perlu pejabat di Timur Tengah", "Anda boleh mula meneroka pasaran tanpa membuka pejabat sendiri di rantau tersebut."],
      ],
      controlEyebrow: "Kawalan penjual & pemilikan jenama",
      controlTitle: "Anda kekal mengawal jenama anda.",
      control: ["Produk", "Harga", "Inventori", "Dokumentasi", "Kedudukan jenama"],
      rommanTitle: "eRomman membantu bahagian yang menghadap pasaran",
      romman:
        "Akses marketplace, pendedahan pengguna, lokalisasi bahasa Arab, validasi pasaran dan sokongan aliran operasi.",
    },
    support: {
      eyebrow: "Bagaimana eRomman membantu",
      title: "Anda fokus pada produk. eRomman membantu membuka pasaran.",
      body:
        "Perjalanan penjual menggabungkan akses marketplace, sokongan bahasa Arab, keterlihatan, promosi, khidmat pelanggan dan koordinasi rentas sempadan.",
      items: [
        ["Marketplace & Lokalisasi Bahasa Arab", "Sokongan penyenaraian produk, terjemahan dan kandungan yang disesuaikan untuk pengguna berbahasa Arab."],
        ["Pendedahan Pelanggan Timur Tengah", "Membantu produk anda mendapat pendedahan kepada pelanggan di pasaran GCC yang disasarkan."],
        ["Pemasaran & Promosi", "Sokongan boleh merangkumi SEO bahasa Arab, media sosial, e-mel, kandungan, iklan digital dan kempen bermusim."],
        ["Validasi Pasaran", "Mulakan dengan produk sesuai, lihat tindak balas pelanggan dan gunakan bukti pasaran sebelum berkembang."],
        ["Sokongan Pelanggan & Penjual", "Sokongan koordinasi marketplace, panduan penjual dan komunikasi dengan pelanggan."],
        ["Koordinasi Pesanan & Logistik", "Sokongan pesanan rentas sempadan, pilihan pickup dan aliran fulfilment untuk penjual yang sesuai."],
      ],
    },
    marketplace: {
      eyebrow: "Ekosistem marketplace",
      title: "Satu pendaftaran. Pelbagai peluang marketplace.",
      body:
        "eRomman bertindak sebagai pintu masuk pusat di mana produk yang sesuai boleh dinilai untuk peluang pendedahan melalui beberapa saluran marketplace di Timur Tengah.",
      disclaimer:
        "Pendedahan di marketplace tertakluk kepada kesesuaian produk, keperluan kategori, dokumentasi dan proses kelulusan platform berkaitan.",
      platforms: [
        "eRomman",
        "Amazon Arab Saudi",
        "Amazon UAE",
        "Noon Arab Saudi",
        "Noon UAE",
        "SHEIN Arab Saudi",
        "SHEIN UAE",
        "Trendyol",
        "Carrefour Arab Saudi",
      ],
      learn: "Ketahui tentang jualan di eRomman",
    },
    framework: {
      eyebrow: "Bukti sebelum berkembang",
      title: "Mula kecil. Uji pasaran. Kembangkan apa yang berkesan.",
      body:
        "Anda tidak perlu menyenaraikan semua produk sejak hari pertama. Rangka kerja validasi pasaran eRomman membantu mengurangkan komitmen ketika menguji rantau baharu.",
      steps: [
        ["Mula", "Pilih beberapa produk yang sesuai untuk dimulakan."],
        ["Uji", "Perkenalkan produk kepada pelanggan di Timur Tengah."],
        ["Pelajari", "Lihat tindak balas pengguna dan petunjuk permintaan pasaran."],
        ["Validasi", "Kenal pasti produk yang menunjukkan potensi lebih kuat."],
        ["Kembangkan", "Tambah produk dan aktiviti secara berperingkat berdasarkan peluang yang telah disahkan."],
      ],
      journeyTitle: "Bagaimana pelanggan Timur Tengah menemui produk",
      journey:
        "Kandungan Arab → Kesedaran → Interaksi → Penemuan di Marketplace → Pembelian → Pembelian Semula",
      journeyNote: "Kejayaan bergantung pada lokalisasi, keterlihatan dan kepercayaan pengguna.",
    },
    pricing: {
      eyebrow: "Promosi Khas Hari Malaysia — September 2026",
      title: "Cara yang lebih mudah untuk mula meneroka pasaran Timur Tengah",
      body:
        "Tawaran September memberikan diskaun 50% untuk pakej tahunan terpilih serta 8 bulan tambahan, menjadikan jumlah tempoh keahlian 20 bulan.",
      promo: "Diskaun 50% untuk pakej tahunan terpilih + 8 bulan tambahan",
      total: "Jumlah tempoh keahlian: 20 bulan",
      valid: "Sah sehingga 30 September 2026",
      ask: "Tanya Tentang Pelan Ini",
      annualNote:
        "Langganan adalah tahunan. Anggaran bulanan untuk Silver dan Gold hanyalah pembahagian kos tahunan. Sekiranya pembayaran sekali gus sukar, pengaturan pembayaran boleh dibincangkan bersama pasukan sokongan penjual.",
      plans: [
        {
          name: "Silver",
          tier: "Pakej Permulaan",
          blurb: "Sesuai untuk penjual baharu yang ingin memulakan pasaran Timur Tengah.",
          price: "RM645",
          normal: "RM1,290",
          monthly: "≈ RM54/bulan",
          features: ["Onboarding penjual", "Akses marketplace Timur Tengah", "Penyenaraian produk", "Semakan peluang marketplace", "Pendedahan produk"],
        },
        {
          name: "Gold",
          tier: "Pakej Pertumbuhan",
          blurb: "Sesuai untuk jenama dan SME yang mahukan lebih banyak lokalisasi dan sokongan kempen.",
          price: "RM1,645",
          normal: "RM3,290",
          monthly: "≈ RM137/bulan",
          features: ["Semua dalam Silver", "Lokalisasi bahasa Arab", "Sokongan SEO bahasa Arab", "Penyertaan kempen bulanan", "Sokongan penjual dipertingkat"],
          featured: true,
        },
        {
          name: "Platinum",
          tier: "Pakej Pertumbuhan Keterlihatan",
          blurb: "Sesuai untuk jenama established yang mahukan sokongan pengembangan serantau lebih kuat.",
          price: "RM5,000",
          normal: "RM10,000",
          features: ["Semua dalam Gold", "Penyertaan kempen pemasaran", "Sokongan penjual khusus", "Ciri premium untuk penjual", "Sokongan peningkatan keterlihatan"],
        },
        {
          name: "Pro Platinum",
          tier: "Korporat / Enterprise",
          blurb: "Sesuai untuk operasi besar yang memerlukan pakej serantau yang disesuaikan.",
          price: "Pakej khas",
          normal: "Hubungi kami",
          features: ["Semua dalam Platinum", "Peluang pemasaran keutamaan", "Pengurus jenama Arab", "Panduan kandungan AI+", "Sokongan pelbagai platform"],
        },
      ] as Plan[],
    },
    fees: {
      eyebrow: "Caj penjual & pembayaran",
      title: "Tiada jualan = tiada komisen",
      body:
        "Komisen hanya dikenakan apabila pelanggan berjaya menerima produk dan pesanan telah selesai.",
      badges: ["Tiada yuran pendaftaran", "Tiada yuran penyenaraian", "Tiada caj tersembunyi", "Komisen selepas jualan"],
      calculator: "Kalkulator pembayaran",
      price: "Harga jualan produk (RM)",
      category: "Kategori produk",
      commission: "Kadar komisen (%)",
      handover: "Kaedah serahan pesanan",
      collect: "eRomman membuat pickup — RM7 caj pickup",
      self: "Penjual menghantar sendiri — RM0 caj pickup",
      estimate: "Anggaran pembayaran penjual",
      sellerPrice: "Harga penjual",
      pickupFee: "Caj pickup",
      receives: "Penjual menerima",
      note:
        "Anggaran sahaja. Kos penghantaran kepada pelanggan dibayar oleh pelanggan. Pembayaran penjual diproses dalam 10–15 hari bekerja selepas penghantaran berjaya.",
      typical: "Kadar komisen biasa",
      categoryNote: "Kadar komisen bergantung pada kategori produk.",
      categories: [
        ["Fesyen & Aksesori", 20, 20],
        ["Kesihatan & Kecantikan", 18, 20],
        ["Elektronik", 10, 20],
        ["Telefon Bimbit", 13, 13],
        ["Komputer & Laptop", 13, 13],
        ["Peralatan Rumah", 15, 20],
        ["Buku & Media", 20, 20],
        ["Automotif", 18, 20],
      ] as [string, number, number][],
    },
    faq: {
      eyebrow: "Soalan lazim penjual",
      title: "Soalan praktikal yang biasa ditanya oleh penjual",
      items: [
        ["Apa itu eRomman?", "eRomman ialah marketplace berbahasa Arab yang menghubungkan penjual dari Malaysia dengan pelanggan di Timur Tengah."],
        ["Perlu pindahkan stok atau buka pejabat di Timur Tengah?", "Tidak. Penjual boleh menyimpan stok di Malaysia dan tidak perlu membuka pejabat di Timur Tengah hanya untuk mula meneroka pasaran."],
        ["Perlu senaraikan semua produk?", "Tidak. Mulakan dengan beberapa SKU yang sesuai, lihat tindak balas pelanggan dan tambah produk jika terdapat potensi."],
        ["Bila komisen dikenakan?", "Komisen hanya dikenakan selepas jualan berjaya apabila pelanggan menerima produk dan pesanan selesai."],
        ["Bila penjual dibayar?", "Pembayaran penjual diproses dalam tempoh 10–15 hari bekerja selepas penghantaran berjaya."],
        ["Bagaimana pickup berfungsi?", "Jika eRomman mengambil pesanan, caj pickup ialah RM7 setiap pesanan. Jika penjual menghantar sendiri, tiada caj pickup."],
        ["Apa berlaku jika pelanggan memulangkan produk?", "Pengendalian pemulangan bergantung pada punca. Produk change-of-mind boleh kekal dalam pasaran GCC untuk dipasarkan semula; isu produk/penjual menjadi tanggungjawab penjual; isu logistik yang disahkan dikendalikan melalui proses tuntutan logistik dan insurans."],
        ["Bolehkah pengaturan pembayaran langganan dibincangkan?", "Ya. Jika pembayaran sekali gus sukar, pengaturan pembayaran boleh dibincangkan bersama pasukan."],
      ],
    },
    cta: {
      eyebrow: "Mula kecil",
      title: "Mari kita uji pasaran Timur Tengah bersama.",
      body:
        "Hantarkan kepada saya pautan jenama atau produk anda. Saya boleh membantu melihat produk mana yang sesuai untuk dimulakan dan menerangkan proses eRomman dengan jelas sebelum anda membuat keputusan.",
      whatsapp: "WhatsApp Mamduh",
      email: "E-mel Sokongan Penjual",
      footer:
        "Panduan ini disediakan untuk membantu penjual Malaysia memahami peluang marketplace Timur Tengah melalui eRomman.",
      official:
        "Untuk maklumat korporat rasmi, polisi dan pendaftaran eRomman, sila layari eromman.com.",
    },
  },
  ar: {
    languageName: "العربية",
    dir: "rtl",
    nav: {
      how: "كيف تعمل المنصة",
      support: "دعم البائعين",
      marketplaces: "فرص المنصات",
      plans: "الباقات",
      fees: "رسوم البائع",
      faq: "الأسئلة الشائعة",
      contact: "تواصل معنا",
      login: "دخول البائع",
      check: "تحقق من منتجاتي",
    },
    hero: {
      badge: "بِع إلى الشرق الأوسط مع eRomman",
      title: "أضف الشرق الأوسط كقناة مبيعات جديدة — دون تغيير طريقة عملك في ماليزيا.",
      body:
        "eRomman هي منصة سوق إلكتروني باللغة العربية تربط البائعين في ماليزيا بالعملاء في الشرق الأوسط. إذا كنت تبيع بالفعل عبر Shopee أو Lazada أو موقعك الإلكتروني أو منصات أخرى، فالنموذج بسيط ومألوف. واصل إدارة أعمالك كالمعتاد في ماليزيا، بينما تساعدك eRomman على الوصول إلى عملاء جدد في الشرق الأوسط.",
      bullets: [
        "الاحتفاظ بالمخزون في ماليزيا",
        "لا حاجة إلى فتح مكتب في الشرق الأوسط",
        "إمكانية البدء بعدد محدود من المنتجات",
        "دعم للعرض والبيع باللغة العربية",
      ],
      primary: "تحقق من مناسبة منتجاتي",
      secondary: "اطّلع على آلية العمل",
      marketsLabel: "الأسواق المستهدفة في الشرق الأوسط",
      routeLabel: "نموذج سوق إلكتروني بسيط",
      route: "ماليزيا ← eRomman ← عميل في الشرق الأوسط",
      noteTitle: "يبقى نموذج عملك كما هو.",
      note:
        "تضيف eRomman فرصة للوصول إلى سوق جديد بينما تواصل إدارة عملياتك في ماليزيا.",
    },
    markets: ["السعودية", "الإمارات", "الكويت", "قطر", "البحرين", "عُمان"],
    stats: {
      eyebrow: "لمحة عن منظومة eRomman",
      title: "بنية قائمة لدعم النمو الإقليمي",
      body:
        "تدعم eRomman البائعين من خلال الوصول إلى المنصات، والتوطين باللغة العربية، ودعم دخول السوق، وتنسيق الخدمات اللوجستية.",
      items: [
        ["1,300", "بائع تم ضمّه إلى المنصة"],
        ["250,000", "منتج / SKU مدرج"],
        ["+9 مليون", "مشاهدة للحملات"],
        ["MATRADE", "شريك استراتيجي"],
      ],
      presence: "الحضور الإقليمي",
      offices: ["كوالالمبور", "جدة", "دبي", "جاكرتا"],
    },
    process: {
      eyebrow: "كيف تعمل المنصة",
      title: "تجربة سوق إلكتروني مألوفة، مع التركيز على عملاء الشرق الأوسط",
      body:
        "تواصل العمل من ماليزيا، بينما تضيف eRomman قناة مبيعات جديدة وتدعم رحلة الطلب عبر الحدود.",
      steps: [
        ["الرفع", "قدّم منتجاتك والمعلومات الأساسية."],
        ["الإدراج", "يتم عرض المنتجات على eRomman مع دعم المنصة."],
        ["الطلب", "يقوم عميل في الشرق الأوسط بإجراء طلب."],
        ["التجهيز", "جهّز المنتج وفق عملية التغليف المعتادة لديك."],
        ["التوصيل", "يتم استلام الطلب أو شحنه ثم توصيله إلى العميل."],
      ],
      footer: "يواصل البائع إدارة أعماله كالمعتاد في ماليزيا.",
    },
    ease: {
      eyebrow: "تغييرات محدودة للبائع",
      title: "استكشف سوقاً جديداً دون تعطيل أعمالك الحالية",
      body:
        "لا تحتاج إلى تغيير طريقة عملك بالكامل لمجرد تجربة سوق الشرق الأوسط.",
      items: [
        ["واصل البيع كالمعتاد", "استمر في إدارة أعمالك في ماليزيا بالطريقة المعتادة."],
        ["احتفظ بالمخزون في ماليزيا", "لا حاجة إلى نقل المخزون إلى الخارج لمجرد اختبار السوق."],
        ["استخدم عملية التغليف المعتادة", "قم بتجهيز المنتجات وفق إجراءاتك التشغيلية الحالية."],
        ["لا حاجة إلى مكتب في الشرق الأوسط", "يمكنك استكشاف السوق دون فتح مكتب خاص بك في المنطقة."],
      ],
      controlEyebrow: "تحكم البائع وملكية العلامة التجارية",
      controlTitle: "تبقى السيطرة على علامتك التجارية بيدك.",
      control: ["المنتجات", "الأسعار", "المخزون", "الوثائق", "تموضع العلامة التجارية"],
      rommanTitle: "وتدعم eRomman في الأعمال المرتبطة بالسوق",
      romman:
        "الوصول إلى المنصات، والظهور أمام المستهلكين، والتوطين باللغة العربية، والتحقق من السوق، والدعم التشغيلي.",
    },
    support: {
      eyebrow: "كيف تساعد eRomman",
      title: "ركّز على منتجاتك، وتساعدك eRomman على فتح السوق.",
      body:
        "تجمع رحلة البائع بين الوصول إلى المنصات، والدعم باللغة العربية، والظهور، والترويج، وخدمة العملاء، والتنسيق عبر الحدود.",
      items: [
        ["السوق والتوطين باللغة العربية", "دعم إدراج المنتجات والترجمة وتقديم المحتوى بما يناسب المستهلك العربي."],
        ["الوصول إلى عملاء الشرق الأوسط", "المساعدة في زيادة ظهور المنتجات أمام العملاء في أسواق الخليج المستهدفة."],
        ["التسويق والترويج", "قد يشمل الدعم تحسين الظهور في البحث بالعربية، وحملات التواصل الاجتماعي، والبريد الإلكتروني، والمحتوى، والإعلانات والحملات الموسمية."],
        ["التحقق من السوق", "ابدأ بمنتجات مناسبة، وراقب استجابة العملاء، واستخدم بيانات السوق قبل التوسع."],
        ["دعم العملاء والبائعين", "دعم تنسيق المنصة، وإرشاد البائعين، والتواصل مع العملاء."],
        ["تنسيق الطلبات والخدمات اللوجستية", "دعم تنسيق الطلبات عبر الحدود، وخيارات الاستلام، وعمليات التنفيذ للبائعين المناسبين."],
      ],
    },
    marketplace: {
      eyebrow: "منظومة المنصات",
      title: "تسجيل واحد. فرص عبر عدة منصات.",
      body:
        "تعمل eRomman كبوابة مركزية يمكن من خلالها تقييم المنتجات المناسبة لفرص الظهور عبر عدد من منصات التجارة الإلكترونية في الشرق الأوسط.",
      disclaimer:
        "يعتمد الظهور في أي منصة على ملاءمة المنتج، ومتطلبات الفئة، والوثائق المطلوبة، وإجراءات الموافقة الخاصة بكل منصة.",
      platforms: [
        "eRomman",
        "Amazon السعودية",
        "Amazon الإمارات",
        "Noon السعودية",
        "Noon الإمارات",
        "SHEIN السعودية",
        "SHEIN الإمارات",
        "Trendyol",
        "Carrefour السعودية",
      ],
      learn: "تعرّف على البيع عبر eRomman",
    },
    framework: {
      eyebrow: "الأدلة قبل التوسع",
      title: "ابدأ بشكل محدود. اختبر السوق. ثم توسّع فيما ينجح.",
      body:
        "لا تحتاج إلى إدراج جميع منتجاتك منذ اليوم الأول. يساعد إطار eRomman للتحقق من السوق على تقليل الالتزام عند تجربة منطقة جديدة.",
      steps: [
        ["البداية", "اختر عدداً مناسباً ومحدوداً من المنتجات."],
        ["الاختبار", "اعرض المنتجات على العملاء في الشرق الأوسط."],
        ["التعلّم", "راقب استجابة المستهلكين وإشارات الطلب."],
        ["التحقق", "حدّد المنتجات التي تظهر مؤشرات أقوى للنجاح."],
        ["التوسع", "وسّع نطاق المنتجات والنشاط تدريجياً بناءً على النتائج."],
      ],
      journeyTitle: "كيف يكتشف عملاء الشرق الأوسط المنتجات",
      journey:
        "محتوى عربي ← الوعي ← التفاعل ← اكتشاف المنتج في المنصة ← الشراء ← إعادة الشراء",
      journeyNote: "يعتمد النجاح على التوطين والظهور وثقة المستهلك.",
    },
    pricing: {
      eyebrow: "عرض خاص بمناسبة يوم ماليزيا — سبتمبر 2026",
      title: "طريقة أسهل لبدء استكشاف سوق الشرق الأوسط",
      body:
        "يتضمن عرض سبتمبر خصماً بنسبة 50% على الباقات السنوية المحددة مع 8 أشهر إضافية، ليصبح إجمالي مدة العضوية 20 شهراً.",
      promo: "خصم 50% على الباقات السنوية المحددة + 8 أشهر إضافية",
      total: "إجمالي مدة العضوية: 20 شهراً",
      valid: "صالح حتى 30 سبتمبر 2026",
      ask: "استفسر عن هذه الباقة",
      annualNote:
        "الاشتراك سنوي. الأرقام الشهرية الظاهرة لباقة Silver وGold هي مجرد تقسيم للتكلفة السنوية. إذا كان الدفع دفعة واحدة صعباً، يمكن مناقشة ترتيبات الدفع مع فريق دعم البائعين.",
      plans: [
        {
          name: "Silver",
          tier: "باقة البداية",
          blurb: "مناسبة للبائعين الجدد الراغبين في بدء تجربة سوق الشرق الأوسط.",
          price: "RM645",
          normal: "RM1,290",
          monthly: "≈ RM54 شهرياً",
          features: ["تهيئة البائع", "الوصول إلى سوق الشرق الأوسط", "إدراج المنتجات", "مراجعة فرص المنصات", "زيادة ظهور المنتجات"],
        },
        {
          name: "Gold",
          tier: "باقة النمو",
          blurb: "مناسبة للعلامات التجارية والشركات الصغيرة والمتوسطة التي تحتاج دعماً أكبر في التوطين والحملات.",
          price: "RM1,645",
          normal: "RM3,290",
          monthly: "≈ RM137 شهرياً",
          features: ["جميع مزايا Silver", "التوطين باللغة العربية", "دعم تحسين الظهور في البحث بالعربية", "المشاركة في الحملات الشهرية", "دعم إضافي للبائع"],
          featured: true,
        },
        {
          name: "Platinum",
          tier: "باقة نمو الظهور",
          blurb: "مناسبة للعلامات التجارية القائمة التي تبحث عن دعم أقوى للتوسع الإقليمي.",
          price: "RM5,000",
          normal: "RM10,000",
          features: ["جميع مزايا Gold", "المشاركة في الحملات التسويقية", "دعم مخصص للبائع", "مزايا متقدمة للبائع", "دعم زيادة الظهور"],
        },
        {
          name: "Pro Platinum",
          tier: "الشركات / المؤسسات",
          blurb: "مناسبة للعمليات الكبيرة التي تحتاج إلى باقة إقليمية مخصصة.",
          price: "باقة مخصصة",
          normal: "تواصل معنا",
          features: ["جميع مزايا Platinum", "فرص تسويقية ذات أولوية", "مدير علامة تجارية عربي", "إرشاد محتوى مدعوم بالذكاء الاصطناعي", "دعم متعدد المنصات"],
        },
      ] as Plan[],
    },
    fees: {
      eyebrow: "رسوم البائع والمستحقات",
      title: "لا بيع = لا عمولة",
      body:
        "لا تُفرض العمولة إلا بعد استلام العميل للمنتج بنجاح واكتمال الطلب.",
      badges: ["لا رسوم تسجيل", "لا رسوم إدراج", "لا تكاليف مخفية", "العمولة بعد البيع"],
      calculator: "حاسبة مستحقات البائع",
      price: "سعر بيع المنتج (RM)",
      category: "فئة المنتج",
      commission: "نسبة العمولة (%)",
      handover: "طريقة تسليم الطلب",
      collect: "استلام eRomman للطلب — RM7 رسوم استلام",
      self: "شحن البائع بنفسه — RM0 رسوم استلام",
      estimate: "المبلغ التقديري للبائع",
      sellerPrice: "سعر البائع",
      pickupFee: "رسوم الاستلام",
      receives: "يستلم البائع",
      note:
        "للتقدير فقط. يدفع العميل تكلفة الشحن إليه. تتم معالجة مستحقات البائع خلال 10–15 يوم عمل بعد التسليم الناجح.",
      typical: "نسب العمولة المعتادة",
      categoryNote: "تختلف نسبة العمولة حسب فئة المنتج.",
      categories: [
        ["الأزياء والإكسسوارات", 20, 20],
        ["الصحة والجمال", 18, 20],
        ["الإلكترونيات", 10, 20],
        ["الهواتف المحمولة", 13, 13],
        ["أجهزة الكمبيوتر والمحمولة", 13, 13],
        ["الأجهزة المنزلية", 15, 20],
        ["الكتب والإعلام", 20, 20],
        ["السيارات", 18, 20],
      ] as [string, number, number][],
    },
    faq: {
      eyebrow: "الأسئلة الشائعة للبائعين",
      title: "الأسئلة العملية التي يطرحها البائعون عادة",
      items: [
        ["ما هي eRomman؟", "eRomman هي منصة سوق إلكتروني باللغة العربية تربط البائعين في ماليزيا بالعملاء في الشرق الأوسط."],
        ["هل أحتاج إلى نقل المخزون أو فتح مكتب في الشرق الأوسط؟", "لا. يمكن للبائع الاحتفاظ بالمخزون في ماليزيا، ولا يحتاج إلى فتح مكتب في الشرق الأوسط لمجرد البدء في استكشاف السوق."],
        ["هل يجب إدراج جميع المنتجات؟", "لا. يمكنك البدء بعدد محدود من المنتجات المناسبة، ثم اختبار استجابة العملاء وإضافة المزيد عند ظهور فرص جيدة."],
        ["متى تُفرض العمولة؟", "تُفرض العمولة فقط بعد نجاح البيع، واستلام العميل للمنتج، واكتمال الطلب."],
        ["متى يحصل البائع على مستحقاته؟", "تتم معالجة مستحقات البائع خلال 10–15 يوم عمل بعد التسليم الناجح."],
        ["كيف يعمل استلام الطلب؟", "إذا قامت eRomman باستلام الطلب، تكون الرسوم RM7 لكل طلب. وإذا قام البائع بالشحن بنفسه، فلا توجد رسوم استلام."],
        ["ماذا يحدث إذا أعاد العميل المنتج؟", "تعتمد معالجة الإرجاع على السبب. قد يتم الاحتفاظ بمنتجات تغيير رأي العميل داخل سوق الخليج لإعادة تسويقها؛ وتكون مشاكل المنتج أو البائع مسؤولية البائع؛ أما المشاكل اللوجستية المؤكدة فتُعالج وفق إجراءات المطالبات اللوجستية والتأمين."],
        ["هل يمكن مناقشة ترتيبات دفع الاشتراك؟", "نعم. إذا كان الدفع دفعة واحدة صعباً، يمكن مناقشة ترتيبات الدفع مع الفريق."],
      ],
    },
    cta: {
      eyebrow: "ابدأ بشكل محدود",
      title: "لنختبر سوق الشرق الأوسط معاً.",
      body:
        "أرسل لي رابط علامتك التجارية أو منتجاتك. يمكنني مساعدتك في مراجعة المنتجات المناسبة للبدء وشرح آلية eRomman بشكل واضح قبل اتخاذ قرارك.",
      whatsapp: "تواصل مع ممدوح عبر واتساب",
      email: "راسل دعم البائعين",
      footer:
        "أُعد هذا الدليل لمساعدة البائعين الماليزيين على فهم فرص الوصول إلى سوق الشرق الأوسط من خلال eRomman.",
      official:
        "للمعلومات الرسمية عن eRomman والسياسات والتسجيل، يرجى زيارة eromman.com.",
    },
  },
} as const

const languageLinks: { code: Lang; label: string; href: string }[] = [
  { code: "en", label: "English", href: (SITE_BASE_PATH || "") + "/en/" },
  { code: "bm", label: "Bahasa Melayu", href: (SITE_BASE_PATH || "") + "/bm/" },
  { code: "ar", label: "العربية", href: (SITE_BASE_PATH || "") + "/ar/" },
]

const icons = [Store, Globe2, PackageCheck, Truck, CheckCircle2]
const supportIcons = [Languages, Globe2, MegaphoneIcon, BarChart3, ShieldCheck, Truck]

function MegaphoneIcon(props: React.ComponentProps<typeof Globe2>) {
  return <BarChart3 {...props} />
}

function SettlementCalculator({ lang }: { lang: Lang }) {
  const t = content[lang].fees
  const [price, setPrice] = useState("100")
  const [categoryIndex, setCategoryIndex] = useState(0)
  const [rateInput, setRateInput] = useState(String(t.categories[0][1]))
  const [method, setMethod] = useState<"pickup" | "self">("pickup")

  const category = t.categories[categoryIndex]

  useEffect(() => {
    setRateInput(String(category[1]))
  }, [categoryIndex, category])

  const result = useMemo(() => {
    const selling = Math.max(0, Number.parseFloat(price) || 0)
    const requested = Number.parseFloat(rateInput) || category[1]
    const rate = Math.min(category[2], Math.max(category[1], requested))
    const commission = (selling * rate) / 100
    const pickup = method === "pickup" ? 7 : 0
    return {
      selling,
      rate,
      commission,
      pickup,
      settlement: Math.max(0, selling - commission - pickup),
    }
  }, [price, rateInput, category, method])

  const fmt = (value: number) =>
    value.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 })

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-5">
      <div className="rounded-2xl border border-border bg-card p-6 lg:col-span-3 lg:p-8">
        <h3 className="font-serif text-xl font-semibold">{t.calculator}</h3>

        <div className="mt-6 space-y-5">
          <label className="block text-sm font-medium">
            {t.price}
            <input
              type="number"
              min={0}
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2.5 outline-none focus:ring-2 focus:ring-ring"
            />
          </label>

          <label className="block text-sm font-medium">
            {t.category}
            <select
              value={categoryIndex}
              onChange={(e) => setCategoryIndex(Number(e.target.value))}
              className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2.5 outline-none focus:ring-2 focus:ring-ring"
            >
              {t.categories.map((item, index) => (
                <option key={item[0]} value={index}>
                  {item[0]}
                </option>
              ))}
            </select>
          </label>

          <label className="block text-sm font-medium">
            {t.commission}
            <input
              type="number"
              min={category[1]}
              max={category[2]}
              value={rateInput}
              onChange={(e) => setRateInput(e.target.value)}
              disabled={category[1] === category[2]}
              className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2.5 outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
            />
          </label>

          <label className="block text-sm font-medium">
            {t.handover}
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value as "pickup" | "self")}
              className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2.5 outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="pickup">{t.collect}</option>
              <option value="self">{t.self}</option>
            </select>
          </label>
        </div>
      </div>

      <div className="rounded-2xl bg-primary p-6 text-primary-foreground lg:col-span-2 lg:p-8">
        <h3 className="font-serif text-xl font-semibold">{t.estimate}</h3>
        <dl className="mt-6 space-y-4 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-primary-foreground/70">{t.sellerPrice}</dt>
            <dd>RM {fmt(result.selling)}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-primary-foreground/70">{t.commission} ({result.rate}%)</dt>
            <dd>- RM {fmt(result.commission)}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-primary-foreground/70">{t.pickupFee}</dt>
            <dd>- RM {fmt(result.pickup)}</dd>
          </div>
        </dl>
        <div className="mt-6 border-t border-primary-foreground/20 pt-6">
          <div className="flex items-end justify-between gap-4">
            <span className="text-primary-foreground/70">{t.receives}</span>
            <span className="font-serif text-3xl font-semibold">RM {fmt(result.settlement)}</span>
          </div>
        </div>
        <p className="mt-6 text-xs leading-relaxed text-primary-foreground/75">{t.note}</p>
      </div>
    </div>
  )
}

export function TrilingualSellerGuide({ lang }: { lang: Lang }) {
  const t = content[lang]
  const [menuOpen, setMenuOpen] = useState(false)
  const isArabic = lang === "ar"

  useEffect(() => {
    document.documentElement.lang = lang === "bm" ? "ms" : lang
    document.documentElement.dir = t.dir
    return () => {
      document.documentElement.dir = "ltr"
    }
  }, [lang, t.dir])

  return (
    <div dir={t.dir} lang={lang === "bm" ? "ms" : lang} className={isArabic ? "font-sans" : ""}>
      <header className="sticky top-0 z-50 border-b border-red-100/80 bg-white/95 shadow-[0_8px_30px_rgba(120,10,18,0.06)] backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <a href={(SITE_BASE_PATH || "") + "/"} className="flex shrink-0 items-center" aria-label="eRomman seller guide">
            <img
              src={SITE_BASE_PATH + "/images/eromman-logo.png"}
              alt="eRomman"
              width={1157}
              height={238}
              className="h-9 w-auto sm:h-10"
            />
          </a>

          <ul className="hidden items-center gap-5 xl:flex">
            {[
              [t.nav.how, "#how-it-works"],
              [t.nav.support, "#support"],
              [t.nav.marketplaces, "#marketplaces"],
              [t.nav.plans, "#pricing"],
              [t.nav.fees, "#fees"],
              [t.nav.faq, "#faq"],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <div className="flex rounded-full border border-border bg-card p-1">
              {languageLinks.map((item) => (
                <a
                  key={item.code}
                  href={item.href}
                  className={
                    "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors " +
                    (item.code === lang ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary")
                  }
                >
                  {item.code === "bm" ? "BM" : item.code.toUpperCase()}
                </a>
              ))}
            </div>
            <a
              href={EROMMAN_LINKS.sellerSupportWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              {t.nav.check}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md md:hidden"
            aria-label="Menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-border bg-background md:hidden">
            <div className="mx-auto max-w-6xl px-4 py-4">
              <div className="mb-3 flex gap-2">
                {languageLinks.map((item) => (
                  <a
                    key={item.code}
                    href={item.href}
                    className={
                      "rounded-full px-3 py-1.5 text-xs font-semibold " +
                      (item.code === lang ? "bg-primary text-primary-foreground" : "border border-border")
                    }
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              {[
                [t.nav.how, "#how-it-works"],
                [t.nav.support, "#support"],
                [t.nav.marketplaces, "#marketplaces"],
                [t.nav.plans, "#pricing"],
                [t.nav.fees, "#fees"],
                [t.nav.faq, "#faq"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-secondary"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="relative overflow-hidden bg-[#fffaf7]">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
          </div>

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-24 lg:pt-16">
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-primary">
                {lang === "en" ? "Malaysian Brands · Global Opportunities" : lang === "bm" ? "Jenama Malaysia · Peluang Global" : "علامات ماليزية · فرص عالمية"}
              </p>

              <div className="mt-5 h-0.5 w-14 bg-accent" />

              <h1 className="mt-5 text-balance text-[2.65rem] font-black leading-[0.98] tracking-[-0.045em] text-[#171312] sm:text-6xl lg:text-[4.8rem]">
                <span className="block">
                  {lang === "en" ? "YOUR GATEWAY TO" : lang === "bm" ? "PINTU MASUK ANDA KE" : "بوابتك إلى"}
                </span>
                <span className="mt-1 block text-primary">
                  {lang === "en" ? "THE MIDDLE EAST" : lang === "bm" ? "PASARAN TIMUR TENGAH" : "سوق الشرق الأوسط"}
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#5c5350]">{t.hero.body}</p>

              <div className="mt-7 flex flex-wrap gap-2.5">
                {t.hero.bullets.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-red-100 bg-white px-3.5 py-2.5 text-sm font-semibold text-[#332b28] shadow-sm"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={EROMMAN_LINKS.sellerSupportWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-primary px-7 py-3.5 text-center text-sm font-bold text-white shadow-xl shadow-primary/20 transition hover:-translate-y-0.5"
                >
                  {t.hero.primary} →
                </a>
                <a
                  href="#how-it-works"
                  className="rounded-xl border-2 border-primary/25 bg-white px-7 py-3.5 text-center text-sm font-bold text-primary transition hover:border-primary/50 hover:bg-primary/5"
                >
                  {t.hero.secondary}
                </a>
              </div>

              <div className="mt-10 grid gap-3 border-t border-red-100 pt-6 sm:grid-cols-4">
                {[
                  [Globe2, lang === "en" ? "GCC Market Access" : lang === "bm" ? "Akses Pasaran GCC" : "الوصول إلى الخليج"],
                  [Languages, lang === "en" ? "Arabic Support" : lang === "bm" ? "Sokongan Arab" : "دعم عربي"],
                  [PackageCheck, lang === "en" ? "Seller Support" : lang === "bm" ? "Sokongan Penjual" : "دعم البائع"],
                  [Truck, lang === "en" ? "Cross-Border" : lang === "bm" ? "Rentas Sempadan" : "عبر الحدود"],
                ].map(([Icon, label]) => {
                  const HeroIcon = Icon as typeof Globe2
                  return (
                    <div key={String(label)} className="flex items-center gap-2 text-xs font-semibold text-[#5c5350]">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/8 text-primary">
                        <HeroIcon className="h-4 w-4" />
                      </span>
                      <span>{label as string}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="relative lg:pl-4">
              <div className="absolute -right-6 -top-6 hidden h-28 w-28 rounded-full border border-accent/50 lg:block" />
              <div className="absolute -right-10 top-8 hidden h-28 w-28 rounded-full border border-primary/10 lg:block" />

              <div className="relative overflow-hidden rounded-[2rem] border border-red-100 bg-white shadow-[0_35px_90px_rgba(91,10,17,0.18)]">
                <img
                  src={SITE_BASE_PATH + "/images/official/eromman-gcc-bridge-hero.webp"}
                  alt="eRomman GCC market expansion"
                  width={1024}
                  height={1024}
                  className="h-[430px] w-full object-cover sm:h-[520px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6d0710]/80 via-transparent to-white/5" />

                <div className="absolute left-5 top-5 rounded-xl border border-white/50 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">eRomman</p>
                  <p className="mt-1 max-w-[12rem] text-sm font-bold leading-tight text-[#221b19]">
                    Bridging Brands Beyond Borders
                  </p>
                </div>

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-white/95 p-5 shadow-2xl backdrop-blur-xl">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">{t.hero.routeLabel}</p>
                  <p className="mt-1 text-lg font-black text-[#241c1a] sm:text-xl">{t.hero.route}</p>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {t.process.steps.slice(0, 3).map((step, i) => (
                      <div key={step[0]} className="rounded-xl bg-[#fff5f2] px-3 py-2.5">
                        <span className="text-[10px] font-black text-primary">0{i + 1}</span>
                        <p className="mt-0.5 text-xs font-bold text-[#3a302d]">{step[0]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative -mt-5 mx-4 rounded-2xl border border-red-100 bg-white px-5 py-4 shadow-xl sm:mx-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7b6f6a]">{t.hero.marketsLabel}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {t.markets.map((market) => (
                    <span key={market} className="rounded-full bg-primary/7 px-3 py-1.5 text-xs font-bold text-primary">
                      {market}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-br from-[#9f0712] via-primary to-[#6f0710] py-16 text-primary-foreground" id="ecosystem">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">{t.stats.eyebrow}</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold">{t.stats.title}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-primary-foreground/75">{t.stats.body}</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {t.stats.items.map((item) => (
                <div key={item[1]} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/8 p-5">
                  <p className="font-serif text-4xl font-semibold">{item[0]}</p>
                  <p className="mt-2 text-sm uppercase tracking-wide text-primary-foreground/70">{item[1]}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-primary-foreground/15 pt-6">
              <p className="text-sm font-semibold">{t.stats.presence}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {t.stats.offices.map((office) => (
                  <span key={office} className="rounded-full border border-primary-foreground/20 px-3 py-1.5 text-xs">
                    {office}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">{t.process.eyebrow}</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">{t.process.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{t.process.body}</p>
            </div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {t.process.steps.map((step, i) => {
                const Icon = icons[i]
                return (
                  <article key={step[0]} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <Icon className="h-6 w-6 text-primary" />
                    <h3 className="mt-4 font-serif text-xl font-semibold">{step[0]}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step[1]}</p>
                  </article>
                )
              })}
            </div>
            <div className="mt-8 rounded-2xl border border-primary/15 bg-primary/5 p-5 text-center font-semibold text-primary">
              {t.process.footer}
            </div>
          </div>
        </section>

        <section className="border-y border-red-100 bg-[#fffaf7] py-20 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">{t.ease.eyebrow}</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">{t.ease.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{t.ease.body}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {t.ease.items.map((item) => (
                  <article key={item[0]} className="rounded-2xl border border-border bg-card p-5">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <h3 className="mt-3 font-semibold">{item[0]}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item[1]}</p>
                  </article>
                ))}
              </div>
            </div>
            <aside className="rounded-3xl bg-primary p-6 text-primary-foreground sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/70">{t.ease.controlEyebrow}</p>
              <h3 className="mt-2 font-serif text-2xl font-semibold">{t.ease.controlTitle}</h3>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {t.ease.control.map((item) => (
                  <div key={item} className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/10 px-4 py-3 text-sm font-medium">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-7 rounded-2xl bg-white p-5 text-foreground">
                <p className="text-sm font-semibold text-primary">{t.ease.rommanTitle}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.ease.romman}</p>
              </div>
            </aside>
          </div>
        </section>

        <section id="support" className="relative overflow-hidden bg-gradient-to-br from-[#a80714] via-primary to-[#790710] py-20 text-white lg:py-24">
          <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-24 bottom-8 h-80 w-80 rounded-full border border-accent/20" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#f3c96d]">{t.support.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{t.support.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">{t.support.body}</p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {t.support.items.map((item, i) => {
                const Icon = supportIcons[i]
                return (
                  <article
                    key={item[0]}
                    className="group rounded-2xl border border-white/15 bg-white p-6 text-[#241d1b] shadow-[0_18px_45px_rgba(58,0,5,0.16)] transition hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/8 text-primary transition group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-lg font-black">{item[0]}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#6a5e59]">{item[1]}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="marketplaces" className="bg-[#fffaf7] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-red-100 bg-white px-5 py-10 shadow-[0_24px_70px_rgba(92,12,18,0.08)] sm:px-8 lg:px-12">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary">{t.marketplace.eyebrow}</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-[#1d1715] sm:text-4xl">
                  {t.marketplace.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#6b605c]">{t.marketplace.body}</p>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {t.marketplace.platforms.map((platform, i) => {
                  const pieces = platform.split(" ")
                  const brand = platform === "eRomman" ? "eRomman" : pieces[0]
                  const region = platform === "eRomman" ? (lang === "en" ? "Arabic Marketplace" : lang === "bm" ? "Marketplace Bahasa Arab" : "السوق العربي") : pieces.slice(1).join(" ")
                  return (
                    <div
                      key={platform}
                      className={
                        "flex min-h-28 flex-col items-center justify-center rounded-2xl border px-5 py-5 text-center transition hover:-translate-y-1 hover:shadow-lg " +
                        (i === 0 ? "border-primary bg-primary text-white" : "border-red-100 bg-[#fffdfc] text-[#1f1917]")
                      }
                    >
                      <p
                        className={
                          "text-2xl font-black tracking-[-0.04em] " +
                          (brand.toLowerCase() === "noon" ? "lowercase" : brand.toUpperCase() === "SHEIN" ? "tracking-[0.16em]" : "")
                        }
                      >
                        {brand}
                      </p>
                      <p className={"mt-1 text-xs font-bold uppercase tracking-[0.12em] " + (i === 0 ? "text-white/70" : "text-[#8b7f7a]")}>
                        {region || (lang === "en" ? "Marketplace Opportunity" : lang === "bm" ? "Peluang Marketplace" : "فرصة منصة")}
                      </p>
                    </div>
                  )
                })}
              </div>

              <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#fff4f0] px-5 py-4 text-center sm:flex-row sm:text-left">
                <p className="max-w-3xl text-xs leading-relaxed text-[#756862]">{t.marketplace.disclaimer}</p>
                <a
                  href={EROMMAN_LINKS.sell}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white"
                >
                  {t.marketplace.learn}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">{t.framework.eyebrow}</p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl font-semibold sm:text-4xl">{t.framework.title}</h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">{t.framework.body}</p>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {t.framework.steps.map((step, i) => (
                <article key={step[0]} className="rounded-2xl border border-border bg-card p-6">
                  <span className="font-serif text-4xl font-semibold text-primary/30">0{i + 1}</span>
                  <h3 className="mt-4 font-serif text-xl font-semibold">{step[0]}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step[1]}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 rounded-2xl border border-primary/15 bg-primary/5 p-6">
              <p className="font-semibold text-primary">{t.framework.journeyTitle}</p>
              <p className="mt-2 text-sm font-medium">{t.framework.journey}</p>
              <p className="mt-2 text-sm text-muted-foreground">{t.framework.journeyNote}</p>
            </div>
          </div>
        </section>

        <section id="pricing" className="border-t border-red-100 bg-[#fff8f3] py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">{t.pricing.eyebrow}</p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl font-semibold sm:text-4xl">{t.pricing.title}</h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">{t.pricing.body}</p>

            <div className="mt-8 rounded-2xl bg-primary p-5 text-primary-foreground">
              <p className="font-serif text-2xl font-semibold">{t.pricing.promo}</p>
              <p className="mt-2 text-sm text-primary-foreground/75">{t.pricing.total} · {t.pricing.valid}</p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-4">
              {t.pricing.plans.map((plan) => (
                <article
                  key={plan.name}
                  className={
                    "relative flex flex-col rounded-2xl border p-6 " +
                    (plan.featured ? "border-primary bg-card shadow-lg ring-1 ring-primary" : "border-border bg-card")
                  }
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">{plan.tier}</p>
                  <h3 className="mt-1 font-serif text-2xl font-semibold">{plan.name}</h3>
                  <p className="mt-3 min-h-[4.5rem] text-sm leading-relaxed text-muted-foreground">{plan.blurb}</p>
                  <p className="mt-5 font-serif text-3xl font-semibold">{plan.price}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <span className={plan.normal.startsWith("RM") ? "line-through" : ""}>{plan.normal}</span>
                  </p>
                  {plan.monthly && <p className="mt-2 text-sm font-semibold text-primary">{plan.monthly}</p>}
                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={EROMMAN_LINKS.sellerSupportWhatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
                  >
                    {t.pricing.ask}
                  </a>
                </article>
              ))}
            </div>

            <p className="mt-6 rounded-2xl border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground">
              {t.pricing.annualNote}
            </p>
          </div>
        </section>

        <section id="fees" className="border-t border-red-100 bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">{t.fees.eyebrow}</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">{t.fees.title}</h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">{t.fees.body}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {t.fees.badges.map((badge) => (
                <div key={badge} className="flex items-center gap-2 rounded-xl border border-border bg-card p-4 text-sm font-medium">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  {badge}
                </div>
              ))}
            </div>

            <SettlementCalculator lang={lang} />

            <div className="mt-12">
              <h3 className="font-serif text-2xl font-semibold">{t.fees.typical}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.fees.categoryNote}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {t.fees.categories.map((item) => (
                  <div key={item[0]} className="rounded-xl border border-border bg-card p-4">
                    <p className="text-sm font-medium">{item[0]}</p>
                    <p className="mt-2 font-serif text-2xl font-semibold text-primary">
                      {item[1] === item[2] ? item[1] + "%" : item[1] + "%–" + item[2] + "%"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="border-t border-red-100 bg-[#fffaf7] py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">{t.faq.eyebrow}</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">{t.faq.title}</h2>
            <div className="mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
              {t.faq.items.map((item) => (
                <details key={item[0]} className="p-6 open:bg-secondary/40">
                  <summary className="cursor-pointer font-semibold">{item[0]}</summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item[1]}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-red-900 text-primary-foreground">
              <div className="grid gap-10 px-6 py-12 sm:px-10 lg:grid-cols-5 lg:px-14 lg:py-16">
                <div className="lg:col-span-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{t.cta.eyebrow}</p>
                  <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl lg:text-5xl">{t.cta.title}</h2>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/80">{t.cta.body}</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={EROMMAN_LINKS.sellerSupportWhatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary"
                    >
                      <MessageCircle className="h-4 w-4" />
                      {t.cta.whatsapp}
                    </a>
                    <a
                      href={EROMMAN_LINKS.sellerSupportEmail}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold"
                    >
                      <Mail className="h-4 w-4" />
                      {t.cta.email}
                    </a>
                    <a
                      href={EROMMAN_LINKS.sellerSupportLinkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold"
                    >
                      <ExternalLink className="h-4 w-4" />
                      LinkedIn
                    </a>
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
                  <p className="mt-1 text-sm text-muted-foreground">{SELLER_SUPPORT.role}</p>
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
                      href={EROMMAN_LINKS.sellerSupportLinkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-primary"
                    >
                      <ExternalLink className="h-4 w-4 text-primary" />
                      View professional LinkedIn
                    </a>
                    <a href={EROMMAN_LINKS.home} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary">
                      <ExternalLink className="h-4 w-4 text-primary" />
                      www.eromman.com
                    </a>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-red-900/30 bg-[#7f0710] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 text-sm text-white/70 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p>{t.cta.footer}</p>
            <a
              href={EROMMAN_LINKS.sellerSupportLinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
            >
              <ExternalLink className="h-4 w-4" />
              Connect with Mamduh on LinkedIn
            </a>
          </div>
          <p>{t.cta.official}</p>
        </div>
      </footer>
    </div>
  )
}
