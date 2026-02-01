export const EXTERNAL_LINKS = {
  privacyPolicy: "https://vilo23.github.io/bookdu-legal/privacy-policy.html",
  support: "https://vilo23.github.io/bookdu-legal/support.html",
  appStore: "https://apps.apple.com/us/app/bookdu/id6757381396",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/screenshots", label: "Screenshots" },
  { href: "/about", label: "About" },
] as const;

export const FEATURES = [
  {
    title: "See what's outstanding",
    description: "Total owed. Number of jobs. How long you've been waiting. All right there.",
    icon: "chart",
  },
  {
    title: "Log jobs properly",
    description: "Agency. Client. Job. Rate. The way your income actually works — not some generic budget app.",
    icon: "clipboard",
  },
  {
    title: "Reminders that help",
    description: "We'll ping you when a payment's been waiting too long. So you actually follow up.",
    icon: "bell",
  },
  {
    title: "Completely private",
    description: "Everything stays on your phone. No accounts. No cloud. No one sees your money but you.",
    icon: "shield",
  },
  {
    title: "Expenses, sorted",
    description: "Track what you spend and tag it to jobs. Export a CSV at tax time. Done.",
    icon: "receipt",
  },
  {
    title: "Scan your payslips",
    description: "Photo of a voucher or payslip. We pull out the details. You check it. Easy.",
    icon: "scan",
  },
] as const;
