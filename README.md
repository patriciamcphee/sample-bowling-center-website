# Sample Bowling Center Website

A portfolio sample site for a fictional bowling alley — **Strike Zone Lanes** — built with Next.js, Tailwind, and deployed as a static site to GitHub Pages.

Modeled loosely on the information architecture of real bowling center sites (e.g. Brandon Crossroads Bowl). All copy, business details, menus, and pricing are invented for the demo.

## What's in it

- Home with hero, specials strip, feature grid, league + event CTAs, hours & location
- Leagues (6 fictional leagues with signup deep-links)
- Events & Parties (3 packages + meeting-room section)
- Reserve a Lane (mock form with fake confirmation code)
- Join a League (mock form that prefills from `?league=` query)
- Pricing (walk-in rates, hourly lane rentals, weekly specials)
- Pub & Grill (full menu, drinks)
- Contact / Visit (address, hours, mock contact form)

Because this is deployed as a **static export** on GitHub Pages, forms are UI-only — they fake a submit, show a confirmation screen, and don't send any data.

## Stack

- Next.js 16 (App Router) + React 19
- Tailwind CSS 4 (via `@theme`)
- TypeScript
- Deployed via GitHub Actions → GitHub Pages

## Local dev

```bash
npm install
npm run dev
```

Visit <http://localhost:3000>.

## Build / preview the static export

```bash
npm run build
npx serve out
```

The static site is emitted to `./out`. Note that `basePath` is only applied in production builds, so local dev serves at `/`.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the static export and publishes to GitHub Pages. The site is served at `https://<owner>.github.io/sample-bowling-center-website/`.

If you fork or rename the repo, update the `repo` constant in `next.config.ts` to match the new repo name (used for `basePath` / `assetPrefix`).

## Where to edit content

| What            | Where                                   |
| --------------- | --------------------------------------- |
| Business info   | `src/lib/site.ts`                       |
| Home sections   | `src/app/page.tsx`                      |
| Leagues         | `src/app/leagues/page.tsx` (array)      |
| Event packages  | `src/app/events/page.tsx` (array)       |
| Pricing & deals | `src/app/pricing/page.tsx` (arrays)     |
| Pub menu        | `src/app/pub/page.tsx` (menu object)    |
| Nav items       | `src/lib/site.ts` (`nav` array)         |
| Theme colors    | `src/app/globals.css` (`@theme` block)  |
