export const EXTERNAL_LINKS = {
  privacyPolicy: "https://vilo23.github.io/bookdu-legal/privacy-policy.html",
  support: "https://vilo23.github.io/bookdu-legal/support.html",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/screenshots", label: "Screenshots" },
  { href: "/about", label: "About" },
] as const;

export const FEATURES = [
  {
    title: "Smart Payslip OCR",
    description: "Scan any payslip with your camera. Our smart OCR extracts all the important details automatically.",
    icon: "scan",
  },
  {
    title: "Money Buckets Dashboard",
    description: "See your income organised into clear categories. Know exactly where your money is going.",
    icon: "chart",
  },
  {
    title: "Tax Awareness View",
    description: "See your potential income tax obligation at a glance. A simple reminder to set money aside before tax time catches you off guard.",
    icon: "calculator",
  },
  {
    title: "Expense Tracking",
    description: "Track expenses completely separately. Upload receipts, take photos, add notes. Download a clean CSV at the end of the tax year.",
    icon: "receipt",
  },
  {
    title: "Smart Reminders",
    description: "Never miss a payment or deadline. Get notified when invoices are due or payments are late.",
    icon: "bell",
  },
  {
    title: "CSV Export",
    description: "Export your data anytime. Compatible with Excel, accounting software, and your accountant.",
    icon: "download",
  },
  {
    title: "100% Offline & Private",
    description: "Your data never leaves your device. No accounts, no cloud sync, no tracking. Complete privacy.",
    icon: "shield",
  },
] as const;
