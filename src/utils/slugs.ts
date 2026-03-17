export function slugify(string: string) {
  return string
    .toLowerCase()
    .normalize('NFD')
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-/, '')
    .replace(/-$/, '')
}
