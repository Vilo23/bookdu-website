# BOOKDU Marketing Website

## Project Status: IN DEVELOPMENT — Not yet deployed

Website copy and structure have been rewritten to reflect new positioning. Ready for review before deploying to bookdu.co.

### What This Is
Marketing website for the BOOKDU iOS app — a payment tracking tool for models, talent, influencers, and creatives who work through agencies. The app is live on the [App Store](https://apps.apple.com/us/app/bookdu/id6757381396). This is a static Next.js site, separate from the main app codebase.

### Domain
- **Purchased domain:** bookdu.co (currently shows old version)
- **GitHub repo:** https://github.com/Vilo23/bookdu-website
- **Legal pages (external):** https://vilo23.github.io/bookdu-legal/

---

## NEW POSITIONING (Feb 2026)

### Target Audience
**Primary:** Models and talent who work through agencies
**Secondary:** Influencers, creatives, freelancers with similar payment structures

### Core Value Proposition
> "Track every job. Know who owes you."
> For people who work through agencies and get paid weeks or months later.

### The Unique Problem We Solve
- Jobs ≠ invoices (models don't send invoices, agencies pay them)
- Payment ≠ immediate (weeks to months delay is normal)
- One person = multiple agencies, multiple clients
- Memory + follow-up + social friction = lost money

**We are NOT:** A budget app, invoicing app, or timesheet tracker.
**We ARE:** A memory, accountability, and money-recovery system.

### Tone & Voice
- **Demographic:** 18-29 year olds
- **Style:** Casual, direct, confident without arrogance
- **Avoid:** Corporate speak, "empower", "streamline", exclamation marks
- **Good:** Short sentences, "yeah we get it", "dead simple"

---

## PAGE STRUCTURE

### Homepage (`/`)
1. **Hero** — "Track your jobs. Know who owes you."
2. **Problem** — "Yeah, we get it." (relatable pain story)
3. **How It Works** — "Dead simple." (3 steps: Log it → See what's owed → Get nudged)
4. **Features** — "What you get." (4 feature cards)
5. **CTA** — "Ready?"

### About (`/about`)
- "Why we built this." / "Built for how you actually work."
- Sections: The problem, The fix, Who it's for, Tax, Expenses, Privacy
- Values: Keep it simple, Respect privacy, Be honest

### Features (`/features`)
- "What's in the app."
- All 6 feature cards + Privacy section + Tax/Expenses section
- Multi-country tax: US, UK, AU, NZ, France, Italy
- CSV export with custom date ranges

### Screenshots (`/screenshots`)
- "See how it works."
- 15 screenshots showing full user flow
- Lightbox modal on click

---

## SCREENSHOTS (15 files in /public/screenshots/)

| File | Title | Caption |
|------|-------|---------|
| Home Screen.png | Dashboard | See what you've earned, what's owed, and what's waiting |
| Home Screen Alert.png | Money waiting | Get alerted when payments have been sitting too long |
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
│   │   └── FeaturesContent.tsx     # Privacy + Tax/Expenses sections
│   ├── screenshots/
│   │   ├── page.tsx                # Screenshot gallery (15 images)
│   │   └── layout.tsx              # Metadata
│   └── about/
│       ├── page.tsx                # About page
│       └── AboutContent.tsx        # Story + Values sections
├── components/
│   ├── layout/
│   │   ├── Header.tsx              # Sticky nav, mobile menu
│   │   └── Footer.tsx              # Links, back-to-top
│   ├── ui/
│   │   ├── Button.tsx, Card.tsx, Badge.tsx, Icon.tsx
│   └── sections/
│       ├── Hero.tsx                # New: "Track your jobs. Know who owes you."
│       ├── Problem.tsx             # NEW: "Yeah, we get it." section
│       ├── HowItWorks.tsx          # NEW: 3-step flow
│       ├── Features.tsx            # Feature grid (updated copy)
│       └── CTA.tsx                 # "Ready?" section
└── lib/
    └── constants.ts                # Features data (updated copy)
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
3. **Payment celebration** — in-app celebration when you mark paid
4. **Expense tracking with job tagging** — notes field to reference jobs
5. **Multi-country tax** — US, UK, AU, NZ, France, Italy
6. **CSV export** — jobs or expenses, custom date ranges
7. **100% offline/private** — no accounts, no cloud, no tracking

---

## DEPLOYMENT

### Current State
- **Local development only** — not yet deployed
- **bookdu.co** shows old version of site

### To Deploy
```bash
npm run build    # Verify production build works
vercel           # Deploy to Vercel (will update bookdu.co)
```

### Pre-Deploy Checklist
- [ ] Review all page copy one more time
- [ ] Test on mobile viewport
- [ ] Verify all 15 screenshots load correctly
- [ ] Check OG image / social sharing preview
- [ ] Consider adding sitemap.xml, robots.txt

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
