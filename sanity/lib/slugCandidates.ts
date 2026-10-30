export function getSlugCandidates(slug: string): string[] {
  const decoded = decodeURIComponent(slug);
  const candidates = [
    slug,
    decoded,
    decoded.replace(/\s+/g, "-"),
    decoded.replace(/[-\s]+/g, " "),
  ];

  return [...new Set(candidates.map((candidate) => candidate.toLowerCase()))];
}
