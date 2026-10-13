"use client";

import { useEffect, useState } from "react";

const leagues = [
  "Monday Mixers",
  "Thunder Youth",
  "Senior Strikes",
  "Thursday Thunder",
  "Date Night Doubles",
  "Summer Short",
];

type Status = "idle" | "submitting" | "confirmed";

export function LeagueSignupForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [preselect, setPreselect] = useState<string>("");
  const [name, setName] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const league = params.get("league");
    if (league && leagues.includes(league)) setPreselect(league);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const data = new FormData(e.currentTarget);
    setName(String(data.get("name") || ""));
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("confirmed");
  }

  if (status === "confirmed") {
    return (
      <div className="rounded-2xl border border-magenta/60 bg-ink-soft/60 p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-magenta">Signed up</p>
        <h2 className="mt-2 font-display text-4xl text-cream">Welcome to the team, {name || "bowler"}.</h2>
        <p className="mt-3 text-cream-soft/80">
          We'll be in touch within 2 business days to confirm your spot. In the meantime, come by the pro shop — your first ball drilling is on us.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 inline-flex h-11 items-center justify-center rounded-full border border-ink-line px-6 text-sm font-semibold text-cream-soft hover:border-magenta hover:text-magenta"
        >
          Sign up for another
        </button>
      </div>
    );
  }

  const disabled = status === "submitting";

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-ink-line bg-ink-soft/40 p-7">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <input id="name" name="name" required type="text" className={fieldClass} />
        </Field>
        <Field label="Email" htmlFor="email">
          <input id="email" name="email" required type="email" className={fieldClass} />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <input id="phone" name="phone" required type="tel" className={fieldClass} />
        </Field>
        <Field label="Average score (optional)" htmlFor="average">
          <input id="average" name="average" type="number" min={0} max={300} className={fieldClass} placeholder="e.g. 145" />
        </Field>
        <Field label="League" htmlFor="league" className="md:col-span-2">
          <select id="league" name="league" required defaultValue={preselect} key={preselect} className={fieldClass}>
            <option value="" disabled>Pick a league</option>
            {leagues.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </Field>
        <Field label="Signing up as…" htmlFor="role" className="md:col-span-2">
          <div className="flex flex-wrap gap-2">
            {["Solo (match me with a team)", "With a team", "Looking for subs"].map((option) => (
              <label key={option} className="flex items-center gap-2 rounded-full border border-ink-line px-4 py-2 text-sm text-cream-soft/80 has-[:checked]:border-magenta has-[:checked]:text-magenta cursor-pointer">
                <input type="radio" name="role" value={option} required className="sr-only" />
                {option}
              </label>
            ))}
          </div>
        </Field>
      </div>

      <Field label="Notes (optional)" htmlFor="notes" className="mt-5">
        <textarea id="notes" name="notes" rows={3} className={fieldClass} placeholder="Preferred team, friends to pair up with, accommodations…" />
      </Field>

      <div className="mt-7 flex items-center justify-end">
        <button
          type="submit"
          disabled={disabled}
          className="inline-flex h-12 items-center justify-center rounded-full bg-magenta px-7 text-sm font-semibold text-ink hover:bg-magenta-soft disabled:opacity-60"
        >
          {disabled ? "Signing up…" : "Join the league"}
        </button>
      </div>
    </form>
  );
}

const fieldClass =
  "w-full rounded-lg border border-ink-line bg-ink px-3 py-2 text-sm text-cream placeholder:text-cream-soft/40 focus:border-magenta focus:outline-none";

function Field({
  label,
  htmlFor,
  children,
  className = "",
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label htmlFor={htmlFor} className={`block ${className}`}>
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-cream-soft/70">
        {label}
      </span>
      {children}
    </label>
  );
}
