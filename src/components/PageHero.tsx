export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink-line/60">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div
        className="absolute -top-24 left-1/3 h-[320px] w-[320px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-magenta) 0%, transparent 60%)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan">{eyebrow}</p>
        <h1 className="mt-4 font-display text-5xl text-cream md:text-7xl">{title}</h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg text-cream-soft/80">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
