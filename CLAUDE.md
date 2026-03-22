# BOOKDU Marketing Website

## Project Status: LIVE — v2.0 (Dark Editorial Redesign) deployed to bookdu.co

Website redesigned Mar 2026 with a dark editorial fashion aesthetic. Flipped colour palette (dark olive bg, cream text), new typography (Archivo Black, Inter, JetBrains Mono), editorial layout with data cards, structural background characters, and fashion photography image strips. All content and SEO preserved from v1.3.0.

### What This Is
Marketing website for the BOOKDU iOS app — a payment tracking, contract management, and scheduling tool for models, talent, influencers, and creatives who work through agencies. The app is live on the [App Store](https://apps.apple.com/us/app/bookdu/id6757381396). This is a static Next.js site, separate from the main app codebase.

### Domain
- **Live at:** https://bookdu.co (Vercel)
- **GitHub repo:** https://github.com/Vilo23/bookdu-website
- **Legal pages (external):** https://vilo23.github.io/bookdu-legal/
- **Google Search Console:** verified, sitemap submitted

---

## POSITIONING v1.3.0 (Feb 2026) — Three Pillars + Cognitive Freedom

### Target Audience
**Primary:** Models and talent who work through agencies
**Secondary:** Influencers, creatives, freelancers with similar payment structures

### Core Value Proposition
> "Stop carrying it all in your head."
> Payments. Contracts. Schedule. One app tracks everything — so you don't have to.

### The Three Pillars
1. **Your Money** — Track payments. Get reminded. Get paid.
2. **Your Contracts** — Store them. Track expiry. Never get locked in.
3. **Your Schedule** — See your week. Know what's confirmed.

### The Unique Problem We Solve
- Jobs ≠ invoices (models don't send invoices, agencies pay them)
- Payment ≠ immediate (weeks to months delay is normal)
- Contracts get buried in emails and forgotten
- Schedule pieced together from texts, emails, and memory
- One person = multiple agencies, multiple clients
- Mental load + follow-up + social friction = lost money and missed deadlines

**We are NOT:** A budget app, invoicing app, or timesheet tracker.
**We ARE:** A memory, accountability, and protection system.

### Tone & Voice
- **Demographic:** 18-29 year olds
- **Style:** Casual, direct, confident without arrogance
- **Avoid:** Corporate speak, "empower", "streamline", exclamation marks
- **Good:** Short sentences, "yeah we get it", "dead simple"

---

## PAGE STRUCTURE

### Homepage (`/`)
1. **Hero** — "YOU DID THE WORK" (giant Archivo Black headline, side nav cluster, micro data block, download CTA)
2. **Problem** — Section "01" with 4 data cards (3 problems + 1 solution)
3. **Image Strips** — 3 full-bleed fashion photos (grayscale → colour on hover) with overlay labels
4. **How It Works** — Section "02" with 3 data cards (Log It → We Remind You → We Watch The Money)
5. **Features** — Section "03" with 5 module data cards (Payments, Contracts, Schedule, Tax, Privacy)
6. **CTA** — "YOUR MONEY. YOUR CONTRACTS. YOUR SCHEDULE."

### About (`/about`)
- "WHY WE BUILT THIS" — editorial long-form layout
- Sections: Story, What BOOKDU does, Who it's for, Tax, Security/Privacy
- Values: 3 data cards (For Models, Your Data, Honesty)

### Features (`/features`)
- "THE THREE PILLARS" — detailed breakdown
- Privacy section, Smart reminders (7 types), Tax/Expenses section
- FAQ section (4 questions with FAQPage schema)

### Screenshots (`/screenshots`)
- "SEE BOOKDU IN ACTION"
- 18 screenshots grouped by category with dark gallery cards
- Lightbox modal on click

---

## SCREENSHOTS (18 files in /public/screenshots/)

| File | Title | Caption |
|------|-------|---------|
| Home Screen.png | Dashboard | Money owed, upcoming jobs, and alerts — one screen |
| Calendar Month View.png | Calendar | Your jobs on a calendar — confirmed vs unconfirmed at a glance |
| Contracts List.png | Contracts | All your agency contracts with expiry countdowns |
| Home Screen Alert.png | Money waiting | Get alerted when payments have been waiting too long |
| Jobs Confirmed list.png | Confirmed jobs | All your confirmed work in one place |
| Waiting on payment.png | Waiting on payment | Track which jobs are overdue |
| Job entry 1.png | Log a job | Agency, client, job details — the way you actually work |
| Job entry 2.png | Add the rate | Day rate, project fee, whatever fits |
| Job Confirmation.png | Job saved | Confirm the details before saving |
| Job mark paid.png | Mark as paid | When the money lands, mark it done |
| Payment received.png | Payment received | A little celebration when you get paid |
| Job Paid list.png | Paid jobs | Everything that's been paid out |
| Expenses List.png | Expenses | Track what you spend |
| Expense Receipt.png | Snap receipts | Add photos and notes to expenses |
| Job and Expense Export.png | Export to CSV | Jobs or expenses, custom date ranges |
| Settings.png | Settings | Customise what you track |
| Country Setting Tax.png | Multi-country tax | US, UK, AU, NZ, France, Italy |

---

## IMAGE STRIPS (3 files in /public/)

| File | Subject | Overlay Label |
|------|---------|---------------|
| strip-backstage.png | Backstage prep — clothing racks, look sheets, model being fitted | The work // Logged |
| strip-runway.png | Models walking the runway in couture gowns | The money // Watched |
| strip-models.png | Models getting ready backstage before a show | The contracts // Guarded |

---

## TECH STACK

- Next.js 16 (App Router)
- Tailwind CSS 4 (configured via `@theme inline` in globals.css)
- Framer Motion (animations)
- TypeScript
- Fonts: Archivo Black (display), Inter (body), JetBrains Mono (mono) — via next/font/google

### File Structure
```
src/
├── app/
│   ├── page.tsx                    # Landing + MobileApplication JSON-LD
│   ├── layout.tsx                  # Root layout, metadata, fonts, Organization+WebSite JSON-LD
│   ├── globals.css                 # Tailwind config, design tokens, utility classes
│   ├── robots.ts                   # Generates /robots.txt
│   ├── sitemap.ts                  # Generates /sitemap.xml
│   ├── manifest.ts                 # Generates /manifest.webmanifest
│   ├── opengraph-image.tsx         # Dynamic OG image (root)
│   ├── features/
│   │   ├── page.tsx                # Features page + FAQPage + Breadcrumb JSON-LD
│   │   ├── opengraph-image.tsx     # Features OG image
│   │   └── FeaturesContent.tsx     # Three pillars + Privacy + Reminders + Tax/Expenses
│   ├── screenshots/
│   │   ├── page.tsx                # Screenshot gallery (18 images, grouped by category)
│   │   ├── layout.tsx              # Metadata + Breadcrumb JSON-LD
│   │   └── opengraph-image.tsx     # Screenshots OG image
│   └── about/
│       ├── page.tsx                # About page + Breadcrumb JSON-LD
│       ├── opengraph-image.tsx     # About OG image
│       └── AboutContent.tsx        # Story + What BOOKDU protects + Values sections
├── components/
│   ├── layout/
│   │   ├── Header.tsx              # Mobile-only hamburger menu (desktop nav is in Hero)
│   │   └── Footer.tsx              # Minimal editorial footer — brand left, mono links right
│   ├── ui/
│   │   ├── Button.tsx              # Primary (cream bg) and secondary (outlined) variants
│   │   └── Badge.tsx               # Monospace uppercase, sharp edges
│   └── sections/
│       ├── Hero.tsx                # Full-viewport hero with side nav cluster, structural chars
│       ├── Problem.tsx             # Section "01" — 4 data cards (problems + solution)
│       ├── ImageStrip.tsx          # 3 fashion photo strips (grayscale → colour hover)
│       ├── HowItWorks.tsx          # Section "02" — 3 step data cards
│       ├── Features.tsx            # Section "03" — 5 module data cards
│       └── CTA.tsx                 # Bold download CTA
└── lib/
    └── constants.ts                # Nav links, external links
```

### Design System (globals.css)
```
bg: #4D5045        — dark olive background
bg-deep: #3D4037   — deeper olive for section contrast
surface: #5A5E4E   — slightly lighter olive for cards
border: #7A7E6E    — olive border (visible against bg)
text: #F1ECE4      — cream (primary text, headings)
text-muted: #C5C0B6 — muted cream (NOT olive — stays readable)
accent: #BEC4A8    — lighter sage green
accent-dark: #A4AA8E — sage for hover states
```

### Design Patterns
- **Data cards**: Top border, monospace `.data-label`, Inter heading, muted description
- **Section numbers**: Giant decorative numbers ("01", "02", "03") via `.section-num`
- **Structural characters**: Fixed giant "B" and "D" letterforms behind hero
- **Image strips**: Full-bleed photos, grayscale by default, colour on hover
- **Micro data**: System-style monospace labels (e.g. "PAYMENTS // TRACKED")
- **Crosshair cursor**: Desktop only (reverts to default on touch devices)
- **Grain texture**: Subtle noise overlay at 0.04 opacity

---

## APP FEATURES TO HIGHLIGHT

1. **Job tracking with agency-client-job structure** — the unique data model
2. **"Money Waiting" alerts** — reminders when payments are overdue
3. **Contract management** — PDF upload, expiry tracking, renewal reminders
4. **Calendar view** — confirmed vs unconfirmed jobs, week/month views
5. **Smart reminders** — 7 types (payment, contract, unconfirmed, weekly summary)
6. **Payment celebration** — in-app celebration when you mark paid
7. **Expense tracking with job tagging** — notes field to reference jobs
8. **Multi-country tax** — US, UK, AU, NZ, France, Italy
9. **CSV export** — jobs or expenses, custom date ranges
10. **100% offline/private** — no accounts, no cloud, no tracking

---

## SEO

### What's Configured
- **robots.txt** — allows all crawlers, references sitemap
- **sitemap.xml** — all 4 pages with priorities and static lastModified dates
- **manifest.webmanifest** — PWA metadata (dark olive theme)
- **OG images** — dynamic per-page via `opengraph-image.tsx` (1200x630, dark olive bg)
- **metadataBase** — `https://bookdu.co` (resolves all relative URLs)
- **title.template** — `%s | BOOKDU` (keyword-first titles)
- **Canonical URLs** — set on every page via `alternates.canonical`
- **JSON-LD structured data:**
  - Organization + WebSite (root layout)
  - MobileApplication with price "Free" (homepage)
  - FAQPage with 4 questions (features page)
  - BreadcrumbList (all sub-pages)
- **Heading hierarchy** — sr-only H1 keyword span, sr-only H2s on homepage sections, proper H2/H3 nesting
- **Meta descriptions** — all under 160 chars
- **Breadcrumb navigation** — visible on features, about, screenshots
- **Google Search Console** — verified, sitemap submitted (Mar 2026)

### SEO Keywords (primary)
`finance app for models`, `model payment tracking`, `modeling agency payments`, `freelance model finance`, `modeling contract management`

---

## DEPLOYMENT

### Current State
- **Live at:** https://bookdu.co (Vercel)
- **v2.0 (Dark Editorial Redesign)** deployed Mar 2026
- **Deploys via:** push to `main` branch on GitHub (auto-deploys on Vercel)

### To Deploy
```bash
npm run build    # Verify production build works
git push         # Push to GitHub, Vercel auto-deploys
# Or manually:
vercel --prod    # Deploy to Vercel production (bookdu.co)
```

---

## COMMANDS

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
```

---

## RELATED PROJECTS

- **bookd/** — main iOS app (Expo/React Native)
- **bookdu-legal/** — privacy policy and support pages (GitHub Pages)
