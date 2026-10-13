"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "sent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-cyan/50 bg-ink-soft/60 p-7">
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan">Message sent</p>
        <h3 className="mt-2 font-display text-3xl text-cream">Got it.</h3>
        <p className="mt-3 text-cream-soft/80">
          Thanks for reaching out. We'll follow up within one business day. (This is a demo — no email was actually sent.)
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex h-11 items-center justify-center rounded-full border border-ink-line px-5 text-sm font-semibold text-cream-soft hover:border-magenta hover:text-magenta"
        >
          Send another
        </button>
      </div>
    );
  }

  const disabled = status === "submitting";

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-ink-line bg-ink-soft/40 p-7">
      <h2 className="font-display text-3xl text-cream">Send a message</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <Field label="Name" htmlFor="name">
          <input id="name" name="name" required type="text" className={fieldClass} />
        </Field>
        <Field label="Email" htmlFor="email">
          <input id="email" name="email" required type="email" className={fieldClass} />
        </Field>
        <Field label="Topic" htmlFor="topic" className="md:col-span-2">
          <select id="topic" name="topic" required defaultValue="" className={fieldClass}>
            <option value="" disabled>What's up?</option>
            <option>Birthday party</option>
            <option>Group / corporate event</option>
            <option>League question</option>
            <option>Lost & found</option>
            <option>Something else</option>
          </select>
        </Field>
      </div>
      <Field label="Message" htmlFor="message" className="mt-5">
        <textarea id="message" name="message" rows={5} required className={fieldClass} />
      </Field>
      <div className="mt-7 flex items-center justify-end">
        <button
          type="submit"
          disabled={disabled}
          className="inline-flex h-12 items-center justify-center rounded-full bg-magenta px-7 text-sm font-semibold text-ink hover:bg-magenta-soft disabled:opacity-60"
        >
          {disabled ? "Sending…" : "Send message"}
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
