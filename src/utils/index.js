export function createPageUrl(slug) {
  if (!slug) return '/'
  return `/${slug}`
}
