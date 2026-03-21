import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bookdu.co"),
  title: {
    default: "BOOKDU - Finance Tracking App for Models & Talent",
    template: "%s | BOOKDU",
  },
  description: "Track agency payments, guard modeling contracts, manage casting schedules, and sort freelance taxes. The only finance app built specifically for models and talent. Free on iOS.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jakarta.variable} antialiased`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "BOOKDU",
                  url: "https://bookdu.co",
                  logo: "https://bookdu.co/logo.png",
                  description: "Finance tracking app for models and talent who work through agencies.",
                  sameAs: [
                    "https://apps.apple.com/us/app/bookdu/id6757381396",
                  ],
                },
                {
                  "@type": "WebSite",
                  name: "BOOKDU",
                  url: "https://bookdu.co",
                  description: "Track agency payments, guard modeling contracts, manage casting schedules, and sort freelance taxes.",
                },
              ],
            }).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
