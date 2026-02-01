# BOOKDU

Marketing website for [BOOKDU](https://bookdu.co) — payment tracking for models, talent, and creatives who work through agencies.

**App Store:** [Download BOOKDU](https://apps.apple.com/us/app/bookdu/id6757381396)

## Status

🚧 **In Development** — Site copy has been rewritten with new positioning. Not yet deployed.

## Positioning

> "Track your jobs. Know who owes you."

Built for models, talent, influencers, and creatives who:
- Work through agencies (one or several)
- Get paid weeks or months after the job
- Need to track what's paid and what's outstanding

**This is not** a budget app, invoicing app, or timesheet tracker.

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing — Hero, Problem, How It Works, Features, CTA |
| `/features` | Full feature breakdown + Privacy + Tax/Expenses |
| `/screenshots` | 15-image gallery with lightbox |
| `/about` | Story, audience, values |

## Key Features Highlighted

- Job tracking with agency → client → job structure
- "Money Waiting" alerts for overdue payments
- Multi-country tax estimates (US, UK, AU, NZ, France, Italy)
- Expense tracking with job tagging via notes
- CSV export with custom date ranges
- 100% offline — no accounts, no cloud

## Deployment

Will be deployed to [Vercel](https://vercel.com) with custom domain **bookdu.co**.

```bash
npm run build    # Verify production build
vercel           # Deploy when ready
```

## Legal Pages

Privacy policy and support pages are hosted separately on GitHub Pages:

- [Privacy Policy](https://vilo23.github.io/bookdu-legal/privacy-policy.html)
- [Support](https://vilo23.github.io/bookdu-legal/support.html)

## Documentation

See `CLAUDE.md` for full context on positioning, tone, page structure, and screenshots.
