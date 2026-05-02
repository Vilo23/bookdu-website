import type { Metadata } from "next";
import { Archivo_Black, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PostHogProvider } from "@/components/PostHogProvider";

const archivoBlack = Archivo_Black({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bookdu.co"),
  title: {
    default: "BOOKDU - Finance Tracking App for Models & Talent",
    template: "%s | BOOKDU",
  },
  description: "Track agency payments, guard contracts, manage schedules, and sort taxes. The only finance app built for models and talent. Free on iOS.",
  keywords: [
    "finance app for models",
    "model payment tracking",
    "talent payment tracker",
    "modeling agency payments",
    "freelance model finance",
    "modeling contract management",
    "casting schedule app",
    "model tax tracking",
    "expense tracker for models",
    "freelance talent app",
    "agency payment reminder",
    "modeling income tracker",
  ],
  authors: [{ name: "BOOKDU" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BOOKDU - Finance Tracking App for Models & Talent",
    description: "Track agency payments, guard contracts, manage your schedule, and sort tax. Built for models.",
    type: "website",
    url: "https://bookdu.co",
    siteName: "BOOKDU",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BOOKDU - Finance Tracking App for Models & Talent",
    description: "Track agency payments, guard contracts, manage your schedule. Built for models who work through agencies.",
  },
  icons: {
    icon: "/favicon-32.png",
    apple: "/apple-touch-icon.png",
  },
};

// JSON-LD structured data — static, developer-controlled content (safe)
const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://bookdu.co/#organization",
      name: "BOOKDU",
      url: "https://bookdu.co",
      logo: {
        "@type": "ImageObject",
        url: "https://bookdu.co/logo.png",
        width: 1024,
        height: 1024,
      },
      description: "Finance tracking app for models and talent who work through agencies.",
      sameAs: [
        "https://apps.apple.com/us/app/bookdu/id6757381396",
        "https://www.instagram.com/bookdu.co/",
        "https://www.tiktok.com/@bookdu.co",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://bookdu.co/#website",
      name: "BOOKDU",
      url: "https://bookdu.co",
      description: "Track agency payments, guard modeling contracts, manage casting schedules, and sort freelance taxes.",
      publisher: { "@id": "https://bookdu.co/#organization" },
    },
  ],
}).replace(/</g, "\\u003c");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivoBlack.variable} ${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
        <PostHogProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </PostHogProvider>
      </body>
    </html>
  );
}
