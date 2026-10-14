// Prefixes a /public path with the site's basePath (e.g. for GitHub Pages).
export function asset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
