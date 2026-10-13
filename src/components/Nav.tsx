"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink-line/60 bg-ink/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-display text-2xl md:text-3xl text-cream glow-magenta group-hover:text-magenta transition-colors">
            STRIKE<span className="text-magenta">·</span>ZONE
          </span>
          <span className="hidden md:inline text-xs uppercase tracking-[0.25em] text-cream-soft/70">
            Lanes
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-cream-soft/80 hover:text-magenta transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/reserve/"
            className="rounded-full bg-magenta px-5 py-2 text-sm font-semibold text-ink hover:bg-magenta-soft transition-colors"
          >
            Reserve a Lane
          </Link>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-md border border-ink-line p-2 text-cream"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink-line bg-ink-soft">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-2 text-cream-soft hover:bg-ink-line/50 hover:text-magenta"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/reserve/"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-magenta px-5 py-2 text-center text-sm font-semibold text-ink"
            >
              Reserve a Lane
            </Link>
            <a
              href={site.phoneHref}
              className="mt-1 rounded px-2 py-2 text-sm text-cream-soft/70"
            >
              Call {site.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
