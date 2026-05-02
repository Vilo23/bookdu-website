import { AppStoreBadge } from "@/components/AppStoreBadge";

export default function InlineAppStoreCTA() {
  return (
    <aside className="my-16 border border-border bg-bg-deep p-8 md:p-10">
      <span className="data-label mb-3">BOOKDU // App</span>
      <h3 className="font-display text-xl md:text-2xl uppercase tracking-tight text-text mb-3">
        Track everything BOOKDU helps with.
      </h3>
      <p className="text-text-muted leading-relaxed mb-6 max-w-2xl">
        Payments, contracts, schedule — one app. Free on iOS, no account
        required.
      </p>
      <AppStoreBadge size="medium" track="blog-inline" />
    </aside>
  );
}
