// src/component/SEO.jsx
import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Skilltrixa | Learn and Grow with Expert Mentors",
  description = "Skilltrixa is India’s leading tech learning platform. Master Java, Spring Boot, and React from industry experts.",
  keywords = "Skilltrixa, Java Training, Spring Boot, React, Full Stack, Coding Bootcamp, Developer Courses",
  url = "https://skilltrixa.com",
  image = "https://skilltrixa.com/images/preview.png",
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <link rel="canonical" href={url} />

    {/* Open Graph Tags */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
  </Helmet>
);

export default SEO;
