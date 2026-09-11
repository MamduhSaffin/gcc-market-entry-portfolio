import type { Metadata, Viewport } from "next"
import "./globals.css"

const siteUrl = "https://gccmarketentry.me/"
const socialImage = siteUrl + "images/gcc-hero.png"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GCC Market Entry | Malaysian Brands to the Middle East",
    template: "%s | GCC Market Entry",
  },
  description:
    "A practical trilingual GCC market-entry portal for Malaysian brands exploring Saudi Arabia, UAE and the wider Middle East with eRomman.",
  keywords: [
    "GCC market entry",
    "sell to Middle East",
    "eRomman seller guide",
    "Malaysia Middle East e-commerce",
    "Saudi Arabia marketplace",
    "UAE marketplace",
    "Arabic marketplace",
    "cross-border e-commerce Malaysia",
  ],
  authors: [{ name: "Muhammad Mamduh Bin Saffin" }],
  creator: "Muhammad Mamduh Bin Saffin",
  alternates: {
    canonical: siteUrl,
    languages: {
      en: siteUrl + "en/",
      ms: siteUrl + "bm/",
      ar: siteUrl + "ar/",
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "GCC Market Entry — Malaysian Brands to the Middle East",
    description:
      "Start small, validate demand and explore Saudi Arabia, UAE and the wider GCC through a structured seller pathway with eRomman.",
    siteName: "GCC Market Entry",
    images: [
      {
        url: socialImage,
        alt: "GCC Market Entry — Malaysian Brands to the Middle East",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GCC Market Entry — Malaysian Brands to the Middle East",
    description: "A practical trilingual GCC market-entry portal for Malaysian brands.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
