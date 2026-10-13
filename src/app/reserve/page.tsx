import { PageHero } from "@/components/PageHero";
import { ReservationForm } from "./ReservationForm";

export default function ReservePage() {
  return (
    <>
      <PageHero
        eyebrow="Reserve"
        title="Grab a lane."
        subtitle="Pick a date, pick a time, pick a party size — we'll hold your lane until 15 minutes after your reservation."
        image="/marc-mueller-lwTSdfXfskE-unsplash.jpg"
        imageAlt="Rack of colorful bowling balls"
        imagePosition="center 30%"
      />

      <section className="mx-auto max-w-5xl px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
          <ReservationForm />

          <aside className="rounded-2xl border border-ink-line bg-ink-soft/60 p-6 text-sm text-cream-soft/80">
            <h3 className="font-display text-2xl text-cream">Good to know</h3>
            <ul className="mt-4 space-y-3">
              <li><span className="text-cyan">▸</span> Lanes are reserved in 1-hour blocks. Up to 6 bowlers per lane.</li>
              <li><span className="text-cyan">▸</span> Shoe rental not included — $4 per pair at the counter.</li>
              <li><span className="text-cyan">▸</span> We hold your lane 15 min past start time. After that, it's first-come.</li>
              <li><span className="text-cyan">▸</span> Need 4+ lanes? Head to <a href="/events/" className="text-magenta hover:underline">Events</a> for a group quote.</li>
            </ul>
            <p className="mt-6 rounded-lg border border-amber/40 bg-amber/5 p-3 text-xs text-amber">
              Demo reminder: this form doesn't send anywhere. The confirmation screen is for show.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
