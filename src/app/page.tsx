import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ink-line/60">
        <Image
          src="/karla-rivera-TS2_PvGhGgs-unsplash.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/40 to-ink" aria-hidden />
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
        <div
          className="absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-magenta) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div
          className="absolute -bottom-20 right-10 h-[320px] w-[320px] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-cyan) 0%, transparent 60%)",
          }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan glow-cyan">
            Lakewood, OH · 32 Lanes
          </p>
          <h1 className="mt-5 font-display text-6xl leading-[0.95] text-cream md:text-8xl glow-magenta">
            Strike Zone<br />
            <span className="text-magenta">Lanes</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream-soft/85 drop-shadow">
            {site.shortDesc} Open seven days a week — bring the family, book a date, host the party.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/reserve/"
              className="inline-flex h-12 items-center justify-center rounded-full bg-magenta px-7 text-sm font-semibold text-ink hover:bg-magenta-soft transition-colors"
            >
              Reserve a Lane
            </Link>
            <Link
              href="/join-league/"
              className="inline-flex h-12 items-center justify-center rounded-full border border-cyan px-7 text-sm font-semibold text-cyan hover:bg-cyan/10 transition-colors"
            >
              Join a League
            </Link>
            <Link
              href="/events/"
              className="inline-flex h-12 items-center justify-center rounded-full border border-ink-line bg-ink/30 backdrop-blur px-7 text-sm font-semibold text-cream-soft hover:border-cream-soft transition-colors"
            >
              Host an Event
            </Link>
          </div>
        </div>
      </section>

      {/* Specials marquee */}
      <section className="border-b border-ink-line/60 bg-ink-soft">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 py-5 text-sm text-cream-soft/80 md:px-6">
          <span><span className="text-magenta font-semibold">Cosmic Fridays</span> · 9pm – close</span>
          <span className="opacity-40">·</span>
          <span><span className="text-cyan font-semibold">$5 Game Mondays</span> · all day</span>
          <span className="opacity-40">·</span>
          <span><span className="text-amber font-semibold">Family Sundays</span> · kids bowl free w/ adult</span>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan">What's inside</p>
          <h2 className="mt-2 font-display text-4xl text-cream md:text-5xl">A full night out, under one roof.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "32 Lanes", body: "Synthetic lanes with automatic scoring and bumpers on demand.", icon: "🎳" },
            { title: "Pub & Grill", body: "Scratch kitchen, 20 taps, and the best wings in Lakewood.", icon: "🍔" },
            { title: "Arcade", body: "Classic cabinets, racing sims, and prize redemption.", icon: "🕹️" },
            { title: "Party Rooms", body: "Private rooms for 10–80 guests with dedicated servers.", icon: "🎉" },
          ].map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-ink-line bg-ink-soft/60 p-6 transition-colors hover:border-magenta"
            >
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-4 font-display text-2xl text-cream">{f.title}</h3>
              <p className="mt-2 text-sm text-cream-soft/70">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cosmic Fridays feature */}
      <section className="relative overflow-hidden border-y border-ink-line/60">
        <Image
          src="/ryan-ancill-vqypTnALDyw-unsplash.jpg"
          alt="Cosmic bowling with neon lights"
          fill
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-24 md:grid-cols-2 md:px-6 md:py-32">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-magenta glow-magenta">
              Fridays · 9pm – close
            </p>
            <h2 className="mt-4 font-display text-5xl text-cream md:text-6xl glow-magenta">
              Cosmic Fridays.
            </h2>
            <p className="mt-5 max-w-md text-lg text-cream-soft/90">
              Black lights, laser show, DJ on the mezzanine. $30 per person gets you unlimited bowling until we close the house down. 18+ after 10pm.
            </p>
            <Link
              href="/pricing/"
              className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-magenta px-7 text-sm font-semibold text-ink hover:bg-magenta-soft"
            >
              See all specials
            </Link>
          </div>
        </div>
      </section>

      {/* League + Event CTAs */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-ink-line bg-gradient-to-br from-ink-soft to-ink p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-magenta">For the regulars</p>
            <h3 className="mt-2 font-display text-4xl text-cream">Find your league.</h3>
            <p className="mt-3 max-w-sm text-cream-soft/70">
              Adult, youth, senior, and mixed leagues run year-round. Average 100? Average 200? We've got a lane with your name on it.
            </p>
            <Link href="/leagues/" className="mt-6 inline-block text-sm font-semibold text-magenta hover:underline">
              Browse leagues →
            </Link>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-ink-line bg-gradient-to-br from-ink-soft to-ink p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan">For the big night</p>
            <h3 className="mt-2 font-display text-4xl text-cream">Host your event here.</h3>
            <p className="mt-3 max-w-sm text-cream-soft/70">
              Birthdays, team outings, bachelor/ette parties, fundraisers. Packages from $18/person. We handle the setup, you keep the memories.
            </p>
            <Link href="/events/" className="mt-6 inline-block text-sm font-semibold text-cyan hover:underline">
              See party packages →
            </Link>
          </div>
        </div>
      </section>

      {/* Hours + Visit */}
      <section className="border-t border-ink-line/60 bg-ink-soft/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-amber">Open daily</p>
            <h3 className="mt-2 font-display text-4xl text-cream">Hours</h3>
            <ul className="mt-6 divide-y divide-ink-line/60">
              {site.hours.map((h) => (
                <li key={h.days} className="flex justify-between py-3 text-cream-soft/85">
                  <span className="font-medium">{h.days}</span>
                  <span className="tabular-nums">{h.hours}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-amber">Come find us</p>
            <h3 className="mt-2 font-display text-4xl text-cream">Visit</h3>
            <address className="not-italic mt-6 text-lg text-cream-soft/90">
              {site.address.line1}<br />
              {site.address.line2}
            </address>
            <a href={site.phoneHref} className="mt-3 block text-lg text-cream-soft/90 hover:text-magenta">
              {site.phone}
            </a>
            <div className="mt-6 flex gap-3">
              <a href={site.address.mapUrl} className="rounded-full border border-ink-line px-5 py-2 text-sm text-cream-soft hover:border-magenta hover:text-magenta">
                Get directions
              </a>
              <Link href="/contact/" className="rounded-full bg-magenta px-5 py-2 text-sm font-semibold text-ink hover:bg-magenta-soft">
                Plan your visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
