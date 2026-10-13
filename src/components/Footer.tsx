import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-ink-line/60 bg-ink-soft">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <div className="font-display text-3xl text-cream">
            STRIKE<span className="text-magenta">·</span>ZONE
            <span className="ml-2 text-base align-middle text-cream-soft/70">Lanes</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-cream-soft/70">
            {site.shortDesc}
          </p>
          <div className="mt-5 flex gap-3 text-sm">
            <a href={site.social.facebook} className="rounded-full border border-ink-line px-3 py-1 text-cream-soft/80 hover:border-magenta hover:text-magenta">
              Facebook
            </a>
            <a href={site.social.instagram} className="rounded-full border border-ink-line px-3 py-1 text-cream-soft/80 hover:border-magenta hover:text-magenta">
              Instagram
            </a>
            <a href={site.social.tiktok} className="rounded-full border border-ink-line px-3 py-1 text-cream-soft/80 hover:border-magenta hover:text-magenta">
              TikTok
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-cyan">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream-soft/80">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-magenta">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/join-league/" className="hover:text-magenta">
                Join a League
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-cyan">Visit</h4>
          <address className="not-italic mt-4 text-sm text-cream-soft/80">
            {site.address.line1}<br />
            {site.address.line2}
          </address>
          <a href={site.phoneHref} className="mt-2 block text-sm text-cream-soft/80 hover:text-magenta">
            {site.phone}
          </a>
          <ul className="mt-4 space-y-1 text-xs text-cream-soft/60">
            {site.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4">
                <span>{h.days}</span>
                <span className="tabular-nums">{h.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-line/60">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-4 py-5 text-xs text-cream-soft/50 md:flex-row md:px-6">
          <p>&copy; {new Date().getFullYear()} Strike Zone Lanes (fictional). Portfolio demo by Patti McPhee.</p>
          <p>Built with Next.js &amp; Tailwind. Deployed via GitHub Pages.</p>
        </div>
      </div>
    </footer>
  );
}
