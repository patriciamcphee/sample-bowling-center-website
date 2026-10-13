import { PageHero } from "@/components/PageHero";

const menu = {
  Starters: [
    { name: "Pin-Setter Wings", desc: "A dozen crispy wings, your sauce. Hot honey or Buffalo recommended.", price: "$13" },
    { name: "Nachos Supreme", desc: "House chips, queso, chorizo, pico, lime crema.", price: "$12" },
    { name: "Pretzel Twists", desc: "Soft Bavarian pretzels, beer-cheese dip, grainy mustard.", price: "$9" },
    { name: "Loaded Fries", desc: "Hand-cut, bacon, cheddar, scallions, ranch.", price: "$10" },
  ],
  Burgers: [
    { name: "The Strike", desc: "Half pound, American, LTO, pub sauce.", price: "$14" },
    { name: "Spare Me", desc: "Smash burger, caramelized onions, Swiss, truffle aioli.", price: "$15" },
    { name: "Turkey Split", desc: "Herbed turkey, avocado, Havarti, honey mustard.", price: "$13" },
    { name: "Impossible 7–10", desc: "Plant-based patty, pickled slaw, chipotle mayo.", price: "$14" },
  ],
  Pizza: [
    { name: "Classic Cheese", desc: "San Marzano sauce, mozzarella, basil. 12\".", price: "$14" },
    { name: "Pepperoni Plus", desc: "Double pepperoni, hot honey drizzle.", price: "$16" },
    { name: "Garden Spare", desc: "Mushrooms, peppers, red onion, olives, feta.", price: "$17" },
    { name: "Buffalo Chicken", desc: "Grilled chicken, Buffalo, blue cheese, scallions.", price: "$17" },
  ],
  "Shareables & Salads": [
    { name: "Chef's Chop", desc: "Mixed greens, cherry tomatoes, cucumbers, egg, bacon, blue cheese.", price: "$12" },
    { name: "Caesar", desc: "Romaine, grana padano, croutons, anchovy dressing.", price: "$11" },
    { name: "Family Sampler", desc: "Wings, fries, mozz sticks, mini pretzels. Serves 4.", price: "$28" },
  ],
};

const drinks = [
  { name: "On tap", desc: "20 rotating taps — ask your server what's new. Local breweries featured monthly." },
  { name: "Cocktails", desc: "Classics done right plus a short list of house creations. $12 average pour." },
  { name: "Wine & bubbles", desc: "Short, curated list by the glass or bottle. Add anything to a party package." },
  { name: "Zero-proof", desc: "N/A beer, mocktails, fresh sodas. We take sober seriously." },
];

export default function PubPage() {
  return (
    <>
      <PageHero
        eyebrow="Pub & Grill"
        title="Best burger in Lakewood."
        subtitle="Scratch kitchen, 20 taps, and plates big enough to share. Open for lunch, dinner, and the 10pm craving. Full menu available at the lanes."
        image="/luke-witter-QmecLAaLv7E-unsplash.jpg"
        imageAlt="Dimly lit pub interior with neon sign"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          {Object.entries(menu).map(([section, items]) => (
            <div key={section}>
              <h2 className="font-display text-3xl text-cream border-b border-ink-line pb-3">
                {section}
              </h2>
              <ul className="mt-5 space-y-5">
                {items.map((item) => (
                  <li key={item.name}>
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-semibold text-cream">{item.name}</h3>
                      <span className="tabular-nums text-sm text-magenta">{item.price}</span>
                    </div>
                    <p className="text-sm text-cream-soft/70">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-ink-line/60 bg-ink-soft/60">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan">The bar</p>
          <h2 className="mt-2 font-display text-4xl text-cream">Drinks</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {drinks.map((d) => (
              <div key={d.name} className="rounded-2xl border border-ink-line bg-ink p-6">
                <h3 className="font-display text-2xl text-cyan">{d.name}</h3>
                <p className="mt-2 text-sm text-cream-soft/80">{d.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-cream-soft/50">
            Prices and availability may vary — menu is updated seasonally. Full allergen info available at the bar.
          </p>
        </div>
      </section>
    </>
  );
}
