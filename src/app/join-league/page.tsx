import { PageHero } from "@/components/PageHero";
import { LeagueSignupForm } from "./LeagueSignupForm";

export default function JoinLeaguePage() {
  return (
    <>
      <PageHero
        eyebrow="Join a league"
        title="Lace 'em up."
        subtitle="Pick a league, tell us about yourself, and we'll match you with a team or save a spot for yours."
      />

      <section className="mx-auto max-w-5xl px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
          <LeagueSignupForm />

          <aside className="rounded-2xl border border-ink-line bg-ink-soft/60 p-6 text-sm text-cream-soft/80">
            <h3 className="font-display text-2xl text-cream">How it works</h3>
            <ol className="mt-4 space-y-3 list-decimal pl-5">
              <li>Fill out the form.</li>
              <li>We call or email within 2 business days.</li>
              <li>Pay your first week's fee at the alley to lock in.</li>
              <li>Bowl Monday, drink Tuesday, repeat.</li>
            </ol>
            <p className="mt-6 rounded-lg border border-amber/40 bg-amber/5 p-3 text-xs text-amber">
              Demo reminder: this form is for show only.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
