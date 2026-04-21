/**
 * Central SEO / site identity. Override with VITE_SITE_URL in env (no trailing slash).
 */

const rawSite =
  typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL
    ? String(import.meta.env.VITE_SITE_URL).replace(/\/$/, "")
    : "https://skilltrixa.com";

export const SITE_URL = rawSite;

export const SITE_NAME = "Skilltrixa";
export const SITE_TAGLINE = "Powered by Deviktech Education";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/preview.png`;
export const DEFAULT_KEYWORDS =
  "Skilltrixa, Deviktech, Java training, Spring Boot, React, full stack bootcamp, data analytics course, mentorship, coding contests, India";

export function absoluteUrl(path) {
  if (!path) return SITE_URL;
  const s = String(path).trim();
  if (s.startsWith("http://") || s.startsWith("https://")) return s;
  const p = s.startsWith("/") ? s : `/${s}`;
  return `${SITE_URL}${p}`;
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/logo.svg"),
    description:
      "Skilltrixa is India’s tech learning platform for full stack development, data analytics, mentorship, masterclasses, and live doubt solving.",
    parentOrganization: {
      "@type": "Organization",
      name: "Deviktech Education",
    },
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-IN",
  };
}

export function buildArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  authorName,
  url,
  section,
}) {
  const img = image ? absoluteUrl(image) : DEFAULT_OG_IMAGE;
  const pub = datePublished || new Date().toISOString();
  const mod = dateModified || pub;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    image: img,
    datePublished: pub,
    dateModified: mod,
    author: {
      "@type": "Person",
      name: authorName || "Skilltrixa",
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo.svg"),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    articleSection: section || "Blog",
  };
}

export function buildProductPlatformListSchema(platforms) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: platforms.map((p, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "WebApplication",
        name: p.name,
        url: p.url,
        description: p.description,
      },
    })),
  };
}

export function buildCourseSchema({
  name,
  description,
  url,
  image,
  provider = SITE_NAME,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: provider,
      sameAs: SITE_URL,
    },
    image: image ? absoluteUrl(image) : DEFAULT_OG_IMAGE,
  };
}
