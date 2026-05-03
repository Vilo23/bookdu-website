export const EXTERNAL_LINKS = {
  privacyPolicy: "https://vilo23.github.io/bookdu-legal/privacy-policy.html",
  support: "https://vilo23.github.io/bookdu-legal/support.html",
  appStore: "https://apps.apple.com/us/app/bookdu/id6757381396",
  instagram: "https://www.instagram.com/bookdu.co/",
  tiktok: "https://www.tiktok.com/@bookdu.co",
} as const;

export const FOR_MODELS_LINKS = [
  { href: "/payment-tracker", label: "Model Payment Tracker" },
  { href: "/expense-tracker", label: "Expense Tracker" },
  { href: "/tax-and-expenses", label: "Tax & Expenses" },
  { href: "/guides/model-tax/australia", label: "Australian Model Tax Guide" },
  { href: "/glossary", label: "Glossary" },
] as const;

export type NavLink =
  | { href: string; label: string }
  | { label: string; children: ReadonlyArray<{ href: string; label: string }> };

export const NAV_LINKS: ReadonlyArray<NavLink> = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { label: "For Models", children: FOR_MODELS_LINKS },
  { href: "/screenshots", label: "Screenshots" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];
