import Link from "next/link";
import { PageHero } from "@/components/PageHero";

const perGame = [
  { when: "Weekdays before 5pm", price: "$5.50 / game / person" },
  { when: "Weekdays after 5pm", price: "$7.50 / game / person" },
  { when: "Weekends, all day", price: "$8.50 / game / person" },
  { when: "Shoe rental", price: "$4.00 / pair" },
];

const perHour = [
  { when: "Weekday matinée (open – 5pm)", price: "$32 / lane / hour" },
  { when: "Weeknight (5pm – close)", price: "$44 / lane / hour" },
  { when: "Weekend (open – 5pm)", price: "$48 / lane / hour" },
  { when: "Weekend prime (5pm – close)", price: "$55 / lane / hour" },
];

const specials = [
  { name: "$5 Game Mondays", desc: "Every game, every lane, all day Monday. $5 per person.", color: "cyan" as const },
  { name: "Cosmic Fridays", desc: "Fridays 9pm–close. Black lights, DJ, $30 unlimited bowling per person.", color: "magenta" as const },
  { name: "Family Sundays", desc: "Sundays open – 5pm. Kids 12 and under bowl free with a paying adult.", color: "amber" as const },
  { name: "Senior Days", desc: "Tue/Thu, 11am – 3pm. $4 games + $2 shoe rental for guests 55+.", color: "cyan" as const },
];

const colorText = {
  magenta: "text-magenta",
  cyan: "text-cyan",
  amber: "text-amber",
};
const colorBorder = {
  magenta: "border-magenta/40",
  cyan: "border-cyan/40",
  amber: "border-amber/40",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Straightforward rates."
        subtitle="Pay per game or reserve a lane by the hour. Group discounts kick in at 4+ lanes — check the Events page for packages."
        image="/ella-christenson-l6DorjudX64-unsplash.jpg"
        imageAlt="Bowling ball striking pins at lane 6"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <RateCard title="Per game" eyebrow="Walk in" rows={perGame} />
          <RateCard title="Per lane / hour" eyebrow="Reserve ahead" rows={perHour} highlighted />
        </div>
      </section>

      <section className="border-t border-ink-line/60 bg-ink-soft/60">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber">Weekly deals</p>
          <h2 className="mt-2 font-display text-4xl text-cream">Specials worth the trip.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {specials.map((s) => (
              <div key={s.name} className={`rounded-2xl border ${colorBorder[s.color]} bg-ink p-6`}>
                <h3 className={`font-display text-2xl ${colorText[s.color]}`}>{s.name}</h3>
                <p className="mt-2 text-sm text-cream-soft/80">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 text-center md:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan">Ready?</p>
        <h3 className="mt-2 font-display text-4xl text-cream">Lock in a lane.</h3>
        <Link
          href="/reserve/"
          className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-magenta px-7 text-sm font-semibold text-ink hover:bg-magenta-soft"
        >
          Reserve a Lane
        </Link>
      </section>
    </>
  );
}

function RateCard({
  title,
  eyebrow,
  rows,
  highlighted = false,
}: {
  title: string;
  eyebrow: string;
  rows: { when: string; price: string }[];
  highlighted?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border bg-ink-soft/60 p-7 ${
        highlighted ? "border-magenta/60" : "border-ink-line"
      }`}
    >
      <p className={`text-xs font-semibold uppercase tracking-widest ${highlighted ? "text-magenta" : "text-cyan"}`}>
        {eyebrow}
      </p>
      <h3 className="mt-2 font-display text-3xl text-cream">{title}</h3>
      <ul className="mt-6 divide-y divide-ink-line/60">
        {rows.map((r) => (
          <li key={r.when} className="flex items-center justify-between py-3 text-sm">
            <span className="text-cream-soft/80">{r.when}</span>
            <span className="tabular-nums font-semibold text-cream">{r.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
