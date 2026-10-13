"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "confirmed";

export function ReservationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [confirmation, setConfirmation] = useState<{
    name: string;
    date: string;
    time: string;
    partySize: string;
    lanes: number;
    code: string;
  } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const data = new FormData(e.currentTarget);
    await new Promise((r) => setTimeout(r, 1200));
    const partySize = Number(data.get("partySize") || 1);
    setConfirmation({
      name: String(data.get("name") || ""),
      date: String(data.get("date") || ""),
      time: String(data.get("time") || ""),
      partySize: String(partySize),
      lanes: Math.max(1, Math.ceil(partySize / 6)),
      code: "SZ-" + Math.random().toString(36).slice(2, 8).toUpperCase(),
    });
    setStatus("confirmed");
  }

  if (status === "confirmed" && confirmation) {
    return (
      <div className="rounded-2xl border border-cyan/50 bg-ink-soft/60 p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan">Reserved</p>
        <h2 className="mt-2 font-display text-4xl text-cream">You're on the lanes.</h2>
        <p className="mt-3 text-cream-soft/80">
          Thanks, {confirmation.name}. Here's your (fake, demo) confirmation:
        </p>

        <dl className="mt-6 grid grid-cols-2 gap-y-3 border-t border-ink-line pt-6 text-sm">
          <dt className="text-cream-soft/50">Confirmation</dt>
          <dd className="font-mono text-cyan">{confirmation.code}</dd>
          <dt className="text-cream-soft/50">Date</dt>
          <dd className="text-cream-soft/90">{confirmation.date}</dd>
          <dt className="text-cream-soft/50">Time</dt>
          <dd className="text-cream-soft/90">{confirmation.time}</dd>
          <dt className="text-cream-soft/50">Party size</dt>
          <dd className="text-cream-soft/90">{confirmation.partySize}</dd>
          <dt className="text-cream-soft/50">Lanes held</dt>
          <dd className="text-cream-soft/90">{confirmation.lanes}</dd>
        </dl>

        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setConfirmation(null);
          }}
          className="mt-8 inline-flex h-11 items-center justify-center rounded-full border border-ink-line px-6 text-sm font-semibold text-cream-soft hover:border-magenta hover:text-magenta"
        >
          Book another
        </button>
      </div>
    );
  }

  const disabled = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-ink-line bg-ink-soft/40 p-7"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" htmlFor="name">
          <input id="name" name="name" required type="text" className={fieldClass} placeholder="Jane Bowler" />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <input id="phone" name="phone" required type="tel" className={fieldClass} placeholder="(555) 555-1212" />
        </Field>
        <Field label="Date" htmlFor="date">
          <input id="date" name="date" required type="date" className={fieldClass} />
        </Field>
        <Field label="Time" htmlFor="time">
          <select id="time" name="time" required defaultValue="" className={fieldClass}>
            <option value="" disabled>Choose a time</option>
            {["11:00 am","12:00 pm","1:00 pm","2:00 pm","3:00 pm","4:00 pm","5:00 pm","6:00 pm","7:00 pm","8:00 pm","9:00 pm","10:00 pm"].map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Field>
        <Field label="Party size" htmlFor="partySize">
          <input id="partySize" name="partySize" required type="number" min={1} max={24} defaultValue={4} className={fieldClass} />
        </Field>
        <Field label="Occasion (optional)" htmlFor="occasion">
          <select id="occasion" name="occasion" defaultValue="" className={fieldClass}>
            <option value="">Just bowling</option>
            <option>Birthday</option>
            <option>Date night</option>
            <option>Family outing</option>
            <option>Work / team</option>
          </select>
        </Field>
      </div>

      <Field label="Anything we should know?" htmlFor="notes" className="mt-5">
        <textarea id="notes" name="notes" rows={3} className={fieldClass} placeholder="Bumpers for one lane, high chair, etc." />
      </Field>

      <div className="mt-7 flex items-center justify-between gap-4">
        <p className="text-xs text-cream-soft/50">We'll text your confirmation (in a real world).</p>
        <button
          type="submit"
          disabled={disabled}
          className="inline-flex h-12 items-center justify-center rounded-full bg-magenta px-7 text-sm font-semibold text-ink hover:bg-magenta-soft disabled:opacity-60"
        >
          {disabled ? "Reserving…" : "Reserve lane"}
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
