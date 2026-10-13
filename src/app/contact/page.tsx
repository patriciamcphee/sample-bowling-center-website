import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";
import { ContactForm } from "./ContactForm";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Visit"
        title="Come say hi."
        subtitle="Address, hours, and the fastest ways to reach us. Group inquiry? Use the form — we'll follow up within a business day."
        image="/zeynep-sude-emek-DY-b1e5OND8-unsplash.jpg"
        imageAlt="Modern bowling alley with colorful ball rack"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-cream">The Alley</h2>
            <address className="not-italic mt-4 text-lg text-cream-soft/90">
              {site.address.line1}<br />
              {site.address.line2}
            </address>
            <div className="mt-4 space-y-2 text-sm">
              <p>
                <span className="text-cream-soft/50">Phone · </span>
                <a href={site.phoneHref} className="text-cream-soft hover:text-magenta">{site.phone}</a>
              </p>
              <p>
                <span className="text-cream-soft/50">Email · </span>
                <a href={`mailto:${site.email}`} className="text-cream-soft hover:text-magenta">{site.email}</a>
              </p>
            </div>

            <h3 className="mt-10 font-display text-2xl text-cream">Hours</h3>
            <ul className="mt-4 divide-y divide-ink-line/60">
              {site.hours.map((h) => (
                <li key={h.days} className="flex justify-between py-2 text-sm text-cream-soft/85">
                  <span>{h.days}</span>
                  <span className="tabular-nums">{h.hours}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-display text-2xl text-cream">Getting here</h3>
            <p className="mt-3 text-sm text-cream-soft/70">
              Free parking out front and in the lot behind the building. We're a 5-minute walk from the Lakewood RTA stop on Detroit Ave.
            </p>
            <a
              href={site.address.mapUrl}
              className="mt-4 inline-flex h-11 items-center justify-center rounded-full border border-ink-line px-5 text-sm font-semibold text-cream-soft hover:border-magenta hover:text-magenta"
            >
              Open in Google Maps
            </a>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
