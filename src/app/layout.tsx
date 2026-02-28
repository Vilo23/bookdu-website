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
  title: "BOOKDU — Finance tracking for models",
  description: "Track payments, guard contracts, manage your schedule, and sort tax — built for models who work through agencies. Free on the App Store.",
  keywords: ["model", "talent", "agency", "payment tracking", "contracts", "calendar", "tax", "expenses", "freelance"],
  authors: [{ name: "BOOKDU" }],
  openGraph: {
    title: "BOOKDU — You did the work. We'll make sure you get paid.",
    description: "Track payments, guard contracts, manage your schedule, and sort tax — built for models who work through agencies.",
    type: "website",
    url: "https://bookdu.co",
    siteName: "BOOKDU",
    images: [
      {
        url: "https://bookdu.co/og-image.png",
        width: 1200,
        height: 630,
        alt: "BOOKDU — Finance tracking for models",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BOOKDU — Finance tracking for models",
    description: "Track payments, guard contracts, manage your schedule. Built for models who work through agencies.",
    images: ["https://bookdu.co/og-image.png"],
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
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
