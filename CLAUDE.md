# BOOKDU Marketing Website

## Project Status: Live site ready for Vercel deployment

### What This Is
Marketing website for the BOOKDU iOS app — a payment tracking tool for freelancers, creatives, and models. This is a static Next.js site, separate from the main app codebase.

### Domain
- **Purchased domain:** bookdu.co
- **GitHub repo:** https://github.com/Vilo23/bookdu-website
- **Legal pages (external):** https://vilo23.github.io/bookdu-legal/

### Tech Stack
- Next.js 16 (App Router)
- Tailwind CSS 4 (configured via `@theme` in globals.css, no tailwind.config.ts)
- Framer Motion (animations)
- TypeScript
- Plus Jakarta Sans font (via next/font/google)

### Architecture
Two separate deployments:
1. **This site** → Vercel → bookdu.co
2. **Legal pages** → GitHub Pages → vilo23.github.io/bookdu-legal/ (preserves Apple-submitted URLs for privacy policy and support)

### File Structure
```
src/
├── app/
│   ├── page.tsx                    # Landing (Hero + Features + CTA)
│   ├── layout.tsx                  # Root layout, metadata, font
│   ├── globals.css                 # Tailwind config, design tokens, shimmer keyframe
│   ├── icon.png                    # Favicon (auto-served by Next.js)
│   ├── features/
│   │   ├── page.tsx                # Features page (server component, metadata)
│   │   └── FeaturesContent.tsx     # Client component (animations, progress bar)
│   ├── screenshots/
│   │   ├── page.tsx                # Screenshot gallery with lightbox (client)
│   │   └── layout.tsx              # Metadata wrapper
│   └── about/
│       ├── page.tsx                # About page (server component, metadata)
│       └── AboutContent.tsx        # Client component (scroll animations)
├── components/
│   ├── layout/
│   │   ├── Header.tsx              # Sticky nav, mobile menu, active page underline
│   │   └── Footer.tsx              # Links, back-to-top button
│   ├── ui/
│   │   ├── Button.tsx              # Primary/secondary with press effect
│   │   ├── Card.tsx                # Hover lift + accent border
│   │   ├── Badge.tsx               # With optional shimmer animation
│   │   └── Icon.tsx                # SVG icons by name
│   └── sections/
│       ├── Hero.tsx                # Floating logo, badge, CTA buttons
│       ├── Features.tsx            # Staggered feature grid
│       └── CTA.tsx                 # Animated gradient blobs
└── lib/
    └── constants.ts                # Nav links, external URLs, feature data
public/
├── logo.png                        # 1024x1024 app logo (BB monogram)
├── screenshots/                    # 6 app screenshots from bookd/Screenshots
├── favicon-32.png, favicon-16.png
├── apple-touch-icon.png
└── app-store-badge.svg             # Placeholder badge
```

### Design System (defined in globals.css)
```
bg: #F1ECE4        — warm off-white background
surface: #FFFFFF   — cards, sections
border: #D1CEC4    — hairline borders
text: #4D5045      — primary body text
text-muted: #878C76 — secondary text
title: #6E725F     — headings, brand
accent: #A4AA8E    — sage green (buttons, highlights)
accent-dark: #878C76 — hover states
```

### Key Design Decisions
- **No "Australian" branding** — positioned for global market. Only mention of Australia is in tax context on About page ("Currently supporting Australian tax brackets, with more regions coming soon")
- **Target audience:** Freelancers, creatives, models who juggle multiple agencies/recruiters with long payment gaps
- **Core messaging:** Track jobs, follow up on payments, know your tax, privacy first
- **App Store link** — live at https://apps.apple.com/us/app/bookdu/id6757381396
- **Server/Client split** — pages with metadata are server components, animation content is extracted to client components (e.g. AboutContent.tsx, FeaturesContent.tsx)

### Git Tags
- `v1-base-site` — site before visual enhancements (rollback point)

### Next Steps (TODO)
1. **Deploy to Vercel** — connect GitHub repo, set custom domain to bookdu.co
2. **Configure bookdu.co DNS** — point domain to Vercel
3. ~~**After Apple approval**~~ — **Done.** App Store link added across Hero and CTA sections
4. **OG image** — create and add public/og-image.png for social sharing
5. **Analytics** — consider Vercel Analytics or Plausible (privacy-friendly)
6. **SEO** — add sitemap.xml, robots.txt

### Commands
```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build (static export)
npm run lint     # ESLint
```

### Related Projects
- **bookd/** — main iOS app (Expo/React Native)
- **bookdu-legal/** — privacy policy and support pages (GitHub Pages)
