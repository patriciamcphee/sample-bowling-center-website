export const site = {
  name: "Strike Zone Lanes",
  tagline: "Where Every Roll Counts",
  shortDesc:
    "32 lanes, a full pub & grill, cosmic bowling, leagues for every age, and a party room that doesn't quit.",
  phone: "(555) 123-4567",
  phoneHref: "tel:+15551234567",
  email: "hello@strikezonelanes.example",
  address: {
    line1: "1245 Pin Alley Boulevard",
    line2: "Lakewood, OH 44107",
    mapUrl: "https://maps.google.com/?q=Lakewood+OH",
  },
  hours: [
    { days: "Mon – Thu", hours: "11:00 am – 11:00 pm" },
    { days: "Fri – Sat", hours: "11:00 am – 1:00 am" },
    { days: "Sunday", hours: "11:00 am – 10:00 pm" },
  ],
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    tiktok: "https://tiktok.com/",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/leagues/", label: "Leagues" },
  { href: "/events/", label: "Events & Parties" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/pub/", label: "Pub & Grill" },
  { href: "/contact/", label: "Visit" },
] as const;
