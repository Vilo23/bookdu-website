import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import ImageStrip from "@/components/sections/ImageStrip";
import HowItWorks from "@/components/sections/HowItWorks";
import ForModelsStrip from "@/components/sections/ForModelsStrip";
import Features from "@/components/sections/Features";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "BOOKDU - Finance Tracking App for Models & Talent",
  description: "Track agency payments, guard contracts, manage schedules, and sort taxes. The only finance app built for models and talent. Free on iOS.",
  keywords: [
    "finance app for models",
    "model payment tracking",
    "talent payment app",
    "modeling agency payment tracker",
    "freelance model finance",
    "modeling contract management",
    "casting schedule app",
    "model tax tracking",
    "agency payment tracker iOS",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "BOOKDU - Finance Tracking App for Models & Talent",
    description: "Track agency payments, guard contracts, manage your schedule, and sort tax. Built for models.",
    url: "https://bookdu.co",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BOOKDU - Finance Tracking App for Models & Talent",
    description: "Track agency payments, guard contracts, manage your schedule, and sort tax. Built for models.",
  },
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "@id": "https://bookdu.co/#app",
  name: "BOOKDU",
  operatingSystem: "iOS",
  applicationCategory: "FinanceApplication",
  description: "Track agency payments, guard modeling contracts, manage casting schedules, and sort freelance taxes. Built for models who work through agencies.",
  url: "https://bookdu.co",
  downloadUrl: "https://apps.apple.com/us/app/bookdu/id6757381396",
  installUrl: "https://apps.apple.com/us/app/bookdu/id6757381396",
  publisher: { "@id": "https://bookdu.co/#organization" },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Payment tracking with agency-client-job structure",
    "Overdue payment alerts and reminders",
    "Contract management with expiry tracking",
    "Calendar view for castings and fittings",
    "Expense tracking with receipt photos",
    "Multi-country tax estimation (US, UK, AU, NZ, France, Italy)",
    "CSV export with custom date ranges",
    "100% offline and private — no accounts, no cloud",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(appSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <Problem />
      <ImageStrip />
      <HowItWorks />
      <ForModelsStrip />
      <Features />
      <CTA />
    </>
  );
}
