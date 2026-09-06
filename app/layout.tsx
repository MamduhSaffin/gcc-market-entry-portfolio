import type { Metadata, Viewport } from "next"
import "./globals.css"

const portfolioUrl = "https://mamduhsaffin.github.io/gcc-market-entry-portfolio/"

export const metadata: Metadata = {
  metadataBase: new URL(portfolioUrl),
  title: {
    default: "Muhammad Mamduh | GCC Market Entry Portfolio — eRomman",
    template: "%s | GCC Market Entry Portfolio",
  },
  description:
    "A professional GCC market-entry portfolio presenting eRomman seller support for Malaysian brands: Arabic localisation, marketplace visibility, digital marketing, market validation, logistics coordination and GCC expansion.",
  keywords: [
    "GCC market entry",
    "Middle East e-commerce",
    "Malaysia GCC",
    "Saudi Arabia marketplace",
    "UAE marketplace",
    "eRomman",
    "seller acquisition",
    "Arabic localisation",
    "cross-border e-commerce",
  ],
  authors: [{ name: "Muhammad Mamduh Bin Saffin" }],
  creator: "Muhammad Mamduh Bin Saffin",
  alternates: {
    canonical: portfolioUrl,
  },
  openGraph: {
    type: "website",
    url: portfolioUrl,
    title: "GCC Market Entry Portfolio — eRomman",
    description:
      "Structured GCC market-entry support for Malaysian brands: build visibility, validate demand and scale strategically.",
    siteName: "GCC Market Entry Portfolio",
  },
  twitter: {
    card: "summary",
    title: "GCC Market Entry Portfolio — eRomman",
    description:
      "Structured GCC market-entry support for Malaysian brands.",
  },
  icons: {
    icon: "https://mamduhsaffin.github.io/gcc-market-entry-portfolio/icon.svg",
    apple: "https://mamduhsaffin.github.io/gcc-market-entry-portfolio/apple-icon.png",
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
