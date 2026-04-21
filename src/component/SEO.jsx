import { Helmet } from "react-helmet-async";
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  DEFAULT_KEYWORDS,
  absoluteUrl,
} from "../config/seoConfig";

const OG_LOCALE = "en_IN";
const TWITTER_HANDLE = "@skilltrixa";

/**
 * @param {object} props
 * @param {string} [props.title]
 * @param {string} [props.description]
 * @param {string} [props.keywords]
 * @param {string} [props.url] - Canonical path or full URL
 * @param {string} [props.image] - OG image (path or absolute URL)
 * @param {'website'|'article'} [props.type]
 * @param {boolean} [props.noindex]
 * @param {string} [props.publishedTime] - ISO date for articles
 * @param {string} [props.modifiedTime] - ISO date for articles
 * @param {string} [props.author] - Article author display name
 * @param {string} [props.section] - Article section / category
 * @param {object|object[]} [props.jsonLd] - Extra schema.org objects (serialized as JSON-LD)
 */
const SEO = ({
  title = `${SITE_NAME} | Learn and Grow with Expert Mentors`,
  description = `${SITE_NAME} is India’s leading tech learning platform. Master Java, Spring Boot, React, data analytics, and more with industry experts.`,
  keywords = DEFAULT_KEYWORDS,
  url = SITE_URL,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noindex = false,
  publishedTime,
  modifiedTime,
  author,
  section,
  jsonLd,
}) => {
  const canonical = absoluteUrl(url);
  const ogImage = absoluteUrl(image || DEFAULT_OG_IMAGE);
  const robots = noindex ? "noindex, nofollow" : "index, follow";

  const jsonLdList = [];
  if (jsonLd) {
    const arr = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
    jsonLdList.push(...arr.filter(Boolean));
  }

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={OG_LOCALE} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />

      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === "article" && author && (
        <meta property="article:author" content={author} />
      )}
      {type === "article" && section && (
        <meta property="article:section" content={section} />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLdList.map((obj, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}
    </Helmet>
  );
};

export default SEO;
