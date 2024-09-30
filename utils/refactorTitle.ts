export function refactorTitleToSlug(title: string): string {
  return title
    .toLowerCase() // Convert to lowercase
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .trim() // Trim whitespace
    .replace(/\s+/g, "-"); // Replace spaces with hyphens
}
