import Link from "next/link";
import { PageHero } from "@/components/PageHero";

const leagues = [
  {
    name: "Monday Mixers",
    night: "Mondays · 7:00 pm",
    season: "Sep – May · 32 weeks",
    skill: "All levels",
    team: "4 bowlers · co-ed",
    fee: "$22 / week",
    desc: "Our longest-running league. Handicap scoring keeps every match competitive — join as a team or sign up as a sub.",
  },
  {
    name: "Thunder Youth",
    night: "Saturdays · 10:00 am",
    season: "Sep – Apr · 28 weeks",
    skill: "Ages 7–17",
    team: "3 bowlers",
    fee: "$12 / week",
    desc: "USBC-certified youth league with free coaching clinics the first Saturday of every month. Scholarship awards at season's end.",
  },
  {
    name: "Senior Strikes",
    night: "Wednesdays · 11:00 am",
    season: "Sep – May · 30 weeks",
    skill: "55+",
    team: "4 bowlers",
    fee: "$16 / week",
    desc: "Daytime league with a social hour afterward in the pub. Lunch specials for league members.",
  },
  {
    name: "Thursday Thunder",
    night: "Thursdays · 7:30 pm",
    season: "Sep – Apr · 30 weeks",
    skill: "Average 150+",
    team: "4 bowlers",
    fee: "$26 / week",
    desc: "Our most competitive scratch league. Cash prizes for position rounds and a season-end tournament.",
  },
  {
    name: "Date Night Doubles",
    night: "Fridays · 7:00 pm",
    season: "Fall & spring · 10 weeks each",
    skill: "All levels",
    team: "2 bowlers",
    fee: "$30 / pair / week",
    desc: "Short season, low commitment. Food & drink specials for league teams.",
  },
  {
    name: "Summer Short",
    night: "Tuesdays · 7:00 pm",
    season: "Jun – Aug · 12 weeks",
    skill: "All levels",
    team: "3 bowlers",
    fee: "$18 / week",
    desc: "A low-pressure summer league perfect for first-timers. Teams randomized if you sign up solo.",
  },
] as const;

export default function LeaguesPage() {
  return (
    <>
      <PageHero
        eyebrow="Leagues"
        title="Find your lane."
        subtitle="Six leagues, every night of the week, every age group. Sign up as a team or solo — we'll match you with a crew."
        image="/steven-cordes-UINDyobcGe4-unsplash.jpg"
        imageAlt="Vintage bowling lanes with retro masking units"
      />

      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="grid gap-5 md:grid-cols-2">
          {leagues.map((l) => (
            <article
              key={l.name}
              className="rounded-2xl border border-ink-line bg-ink-soft/60 p-7 transition-colors hover:border-magenta"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl text-cream">{l.name}</h3>
                <span className="rounded-full border border-cyan/40 px-3 py-1 text-xs font-semibold text-cyan">
                  {l.skill}
                </span>
              </div>
              <dl className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
                <dt className="text-cream-soft/50">When</dt>
                <dd className="text-cream-soft/90">{l.night}</dd>
                <dt className="text-cream-soft/50">Season</dt>
                <dd className="text-cream-soft/90">{l.season}</dd>
                <dt className="text-cream-soft/50">Team</dt>
                <dd className="text-cream-soft/90">{l.team}</dd>
                <dt className="text-cream-soft/50">Fee</dt>
                <dd className="text-cream-soft/90">{l.fee}</dd>
              </dl>
              <p className="mt-4 text-sm text-cream-soft/70">{l.desc}</p>
              <Link
                href={`/join-league/?league=${encodeURIComponent(l.name)}`}
                className="mt-5 inline-flex items-center text-sm font-semibold text-magenta hover:underline"
              >
                Sign up for {l.name} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-ink-line/60 bg-ink-soft/60">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center md:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber">Not sure which?</p>
          <h3 className="mt-2 font-display text-4xl text-cream">Just getting started?</h3>
          <p className="mt-3 text-cream-soft/70">
            Try our Summer Short league — low commitment, no team required, and the pub keeps a tab open.
          </p>
          <Link
            href="/join-league/"
            className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-magenta px-7 text-sm font-semibold text-ink hover:bg-magenta-soft"
          >
            Join a League
          </Link>
        </div>
      </section>
    </>
  );
}
