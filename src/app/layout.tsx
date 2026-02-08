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
  title: "BOOKDU - Get Paid. Stay Protected.",
  description: "Payments, contracts, and schedule — one app for models and talent who work through agencies.",
  keywords: ["model", "talent", "agency", "payment tracking", "contracts", "calendar", "tax", "expenses"],
  authors: [{ name: "BOOKDU" }],
  openGraph: {
    title: "BOOKDU - Get Paid. Stay Protected.",
    description: "Payments, contracts, and schedule — one app for models and talent who work through agencies.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BOOKDU - Get Paid. Stay Protected.",
    description: "Payments, contracts, and schedule — one app for models and talent.",
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
