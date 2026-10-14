import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";
import { asset } from "@/lib/asset";

const packages = [
  {
    name: "Kid's Birthday Bash",
    price: "from $18 / kid",
    length: "2 hours",
    image: "/evgeniy-alyoshin-YF80qEzcEW8-unsplash.jpg",
    imageAlt: "Kids holding bowling balls at a birthday party",
    includes: [
      "90 minutes of bowling, 2 lanes",
      "Shoe rental for everyone",
      "Pizza, soda, cupcakes",
      "Reserved party room + dedicated host",
    ],
    tone: "magenta",
  },
  {
    name: "Group / Corporate",
    price: "from $32 / guest",
    length: "3 hours",
    image: "/anderson-schmig-IayJpfDhj7E-unsplash.jpg",
    imageAlt: "Modern bowling alley with digital displays",
    includes: [
      "Private lanes (6+ lanes available)",
      "Appetizer buffet + 2 drink tickets",
      "AV / meeting room upgrade available",
      "Fully customizable menu",
    ],
    tone: "cyan",
  },
  {
    name: "Adult Celebrations",
    price: "from $45 / guest",
    length: "3 hours",
    image: "/emil-widlund-JYQs5QQWOX4-unsplash.jpg",
    imageAlt: "Bowler lit by cosmic neon lights",
    includes: [
      "Cosmic lighting + DJ-ready sound",
      "Craft cocktails + full bar",
      "Signature plates from the pub kitchen",
      "Bachelor/ette, birthdays, retirement",
    ],
    tone: "amber",
  },
] as const;

const toneClass = {
  magenta: "border-magenta/40 hover:border-magenta",
  cyan: "border-cyan/40 hover:border-cyan",
  amber: "border-amber/40 hover:border-amber",
} as const;

const toneText = {
  magenta: "text-magenta",
  cyan: "text-cyan",
  amber: "text-amber",
} as const;

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Parties & Events"
        title="Make the night unforgettable."
        subtitle="Birthday parties, team outings, retirements, fundraisers — if it's worth celebrating, it's worth celebrating at Strike Zone. Packages below, custom quotes on request."
        image="/krisjanis-kazaks-85BxqGvpp5I-unsplash.jpg"
        imageAlt="Cosmic bowling lanes with teal and green lighting"
      />

      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col overflow-hidden rounded-2xl border bg-ink-soft/60 transition-colors ${toneClass[p.tone]}`}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={asset(p.image)}
                  alt={p.imageAlt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-soft via-transparent to-transparent" aria-hidden />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-3xl text-cream">{p.name}</h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className={`text-lg font-semibold ${toneText[p.tone]}`}>{p.price}</span>
                  <span className="text-xs text-cream-soft/60">· {p.length}</span>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-cream-soft/80">
                  {p.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className={toneText[p.tone]}>▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact/"
                  className="mt-7 inline-flex h-11 items-center justify-center rounded-full border border-ink-line text-sm font-semibold text-cream-soft hover:border-cream"
                >
                  Request a quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-ink-line/60 bg-ink-soft/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan">Meeting room</p>
            <h3 className="mt-2 font-display text-3xl text-cream">For when you need to actually get work done.</h3>
            <p className="mt-3 text-cream-soft/70">
              Our upstairs meeting room seats 24, has HDMI, a conference phone, and a view of the lanes. Add bowling and lunch for a half-day retreat your team will actually enjoy.
            </p>
          </div>
          <div className="rounded-2xl border border-ink-line bg-ink p-7">
            <h4 className="font-display text-2xl text-cream">Ready to book?</h4>
            <p className="mt-2 text-sm text-cream-soft/70">
              Give us a call or send a quick note — we'll follow up within one business day.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="rounded-full bg-magenta px-5 py-2 text-center text-sm font-semibold text-ink hover:bg-magenta-soft">
                Call {site.phone}
              </a>
              <Link href="/contact/" className="rounded-full border border-cyan px-5 py-2 text-center text-sm font-semibold text-cyan hover:bg-cyan/10">
                Send a message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
