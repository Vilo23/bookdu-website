# BOOKDU Marketing Website

## Project Status: LIVE — v1.3.0 deployed to bookdu.co

Website copy and structure updated to v1.3.0 — three pillars positioning (Payments, Contracts, Calendar). Deployed Feb 2026.

### What This Is
Marketing website for the BOOKDU iOS app — a payment tracking, contract management, and scheduling tool for models, talent, influencers, and creatives who work through agencies. The app is live on the [App Store](https://apps.apple.com/us/app/bookdu/id6757381396). This is a static Next.js site, separate from the main app codebase.

### Domain
- **Purchased domain:** bookdu.co (currently shows old version)
- **GitHub repo:** https://github.com/Vilo23/bookdu-website
- **Legal pages (external):** https://vilo23.github.io/bookdu-legal/

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
1. **Hero** — "Stop carrying it all in your head."
2. **Problem** — "Your brain shouldn't be your filing cabinet."
3. **How It Works** — "Dead simple." (3 steps: Log it → See everything → Get nudged)
4. **Features** — "Three things protected." (3 pillar cards + 2 extras)
5. **CTA** — "Ready to stop worrying?"

### About (`/about`)
- "Why we built this." / "Your brain shouldn't be your filing cabinet."
- Sections: The problem, The fix, Who it's for, What BOOKDU protects, Tax, Expenses, Privacy
- Values: Keep it simple, Respect privacy, Be honest

### Features (`/features`)
- "One app. Everything protected."
- Three pillars section (Get Paid, Guard Contracts, See Your Schedule)
- Privacy section + Smart reminders (7 types) + Tax/Expenses section
- Multi-country tax: US, UK, AU, NZ, France, Italy
- CSV export with custom date ranges

### Screenshots (`/screenshots`)
- "See how it works."
- 17 screenshots showing full user flow (including Calendar + Contracts)
- Lightbox modal on click

---

## SCREENSHOTS (17 files in /public/screenshots/)

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

**Note:** `Calendar Month View.png` and `Contracts List.png` need to be added to `/public/screenshots/`. The new `Home Screen.png` should replace the old dashboard screenshot.

---

## TECH STACK

- Next.js 16 (App Router)
- Tailwind CSS 4 (configured via `@theme` in globals.css)
- Framer Motion (animations)
- TypeScript
- Plus Jakarta Sans font (via next/font/google)

### File Structure
```
src/
├── app/
│   ├── page.tsx                    # Landing (Hero + Problem + HowItWorks + Features + CTA)
│   ├── layout.tsx                  # Root layout, metadata, font
│   ├── globals.css                 # Tailwind config, design tokens
│   ├── features/
│   │   ├── page.tsx                # Features page
│   │   └── FeaturesContent.tsx     # Three pillars + Privacy + Reminders + Tax/Expenses
│   ├── screenshots/
│   │   ├── page.tsx                # Screenshot gallery (17 images)
│   │   └── layout.tsx              # Metadata
│   └── about/
│       ├── page.tsx                # About page
│       └── AboutContent.tsx        # Story + What BOOKDU protects + Values sections
├── components/
│   ├── layout/
│   │   ├── Header.tsx              # Sticky nav, mobile menu
│   │   └── Footer.tsx              # Links, back-to-top
│   ├── ui/
│   │   ├── Button.tsx, Card.tsx, Badge.tsx, Icon.tsx
│   └── sections/
│       ├── Hero.tsx                # "Stop carrying it all in your head."
│       ├── Problem.tsx             # "Your brain shouldn't be your filing cabinet."
│       ├── HowItWorks.tsx          # 3-step flow (Log it → See everything → Get nudged)
│       ├── Features.tsx            # Three pillars + extras (inline data, no constants)
│       └── CTA.tsx                 # "Ready to stop worrying?"
└── lib/
    └── constants.ts                # Nav links, external links
```

### Design System (globals.css)
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

## DEPLOYMENT

### Current State
- **Live at:** https://bookdu.co (Vercel)
- **v1.3.0** deployed Feb 2026

### To Deploy
```bash
npm run build    # Verify production build works
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
