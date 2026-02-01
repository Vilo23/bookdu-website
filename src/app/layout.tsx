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
  title: "BOOKDU - Payment Tracking for Models & Talent",
  description: "Track jobs, scan payslips, know your tax. Simple payment tracking designed for models and talent.",
  keywords: ["model", "talent", "agency", "payment tracking", "tax", "payslip", "invoice", "expenses"],
  authors: [{ name: "BOOKDU" }],
  openGraph: {
    title: "BOOKDU - Payment Tracking for Models & Talent",
    description: "Track jobs, scan payslips, know your tax. Simple payment tracking designed for models and talent.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BOOKDU - Payment Tracking for Models & Talent",
    description: "Track jobs, scan payslips, know your tax.",
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
