import type { Metadata, Viewport } from "next"
import "./globals.css"
import { Analytics } from "@/components/analytics"
import { EROMMAN_LINKS, SELLER_SUPPORT } from "@/lib/links"
import { SITE_URL } from "@/lib/site"

const siteUrl = `${SITE_URL}/`
const socialImage = siteUrl + "images/gcc-hero.png"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GCC Market Entry | Malaysian Brands to Saudi Arabia, UAE & the Middle East",
    template: "%s | GCC Market Entry",
  },
  description:
    "Practical GCC market-entry guidance for Malaysian brands exploring Saudi Arabia, UAE and the wider Middle East with eRomman: product fit, localisation, marketplace readiness and seller support.",
  keywords: [
    "GCC market entry",
    "sell to Saudi Arabia from Malaysia",
    "sell to UAE from Malaysia",
    "Malaysia Middle East e-commerce",
    "Saudi Arabia marketplace",
    "UAE marketplace",
    "Arabic ecommerce localisation",
    "cross-border e-commerce Malaysia",
    "Malaysian brands GCC",
  ],
  authors: [{ name: SELLER_SUPPORT.name }],
  creator: SELLER_SUPPORT.name,
  publisher: "GCC Market Entry",
  category: "E-commerce market entry",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-MY": siteUrl + "en/",
      "ms-MY": siteUrl + "bm/",
      ar: siteUrl + "ar/",
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "GCC Market Entry — Malaysian Brands to Saudi Arabia, UAE & the Middle East",
    description:
      "Start small, validate demand and explore Saudi Arabia, UAE and the wider GCC through a structured seller pathway with eRomman.",
    siteName: "GCC Market Entry",
    locale: "en_MY",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "GCC Market Entry — Malaysian Brands to the Middle East",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GCC Market Entry — Malaysian Brands to the Middle East",
    description: "Practical GCC market-entry guidance for Malaysian brands exploring Saudi Arabia and UAE.",
    images: [socialImage],
  },
  icons: {
    icon: siteUrl + "icon.svg?v=20260912",
    apple: siteUrl + "apple-icon.png",
  },
}

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#b3131b",
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "GCC Market Entry",
  url: siteUrl,
  description: metadata.description,
  inLanguage: ["en-MY", "ms-MY", "ar"],
  author: {
    "@type": "Person",
    name: SELLER_SUPPORT.name,
    jobTitle: SELLER_SUPPORT.role,
    url: EROMMAN_LINKS.sellerSupportLinkedIn,
  },
}

const authorSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SELLER_SUPPORT.name,
  jobTitle: SELLER_SUPPORT.role,
  url: EROMMAN_LINKS.sellerSupportLinkedIn,
  worksFor: {
    "@type": "Organization",
    name: "eRomman",
    url: EROMMAN_LINKS.home,
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c") }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema).replace(/</g, "\\u003c") }} />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
