/**
 * Prepare plain-text snippets for meta description (strip HTML, trim length).
 */

const MAX_DESC = 160;

export function stripHtml(html) {
  if (!html || typeof html !== "string") return "";
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function truncateMeta(text, max = MAX_DESC) {
  if (!text) return "";
  const t = text.trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1).trim()}…`;
}

export function excerptFromBlog(blog, fallbackDescription) {
  if (blog?.excerpt && String(blog.excerpt).trim()) {
    return truncateMeta(stripHtml(blog.excerpt));
  }
  if (blog?.summary && String(blog.summary).trim()) {
    return truncateMeta(stripHtml(blog.summary));
  }
  if (blog?.content) {
    return truncateMeta(stripHtml(blog.content));
  }
  return fallbackDescription || "";
}

export function blogOgImage(blog, siteUrl) {
  const base = siteUrl?.replace(/\/$/, "") || "";
  const raw =
    blog?.hero ||
    blog?.heroImage ||
    blog?.coverImage ||
    blog?.thumbnail ||
    blog?.image ||
    "";
  if (!raw) return `${base}/images/preview.png`;
  if (raw.startsWith("http://") || raw.startsWith("https://")) return raw;
  if (raw.startsWith("/")) return `${base}${raw}`;
  return `${base}/${raw}`;
}
