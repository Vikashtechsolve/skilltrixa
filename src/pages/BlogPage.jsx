import Layout from "../component/Layout";
import BlogHero from "../component/blogs/BlogHero";
import SEO from "../component/SEO";

const BlogPage = () => (
  <Layout>
    <SEO
      title="Skilltrixa Blog | Developer Insights & Tutorials"
      description="Read expert insights and tutorials on Java, React, Spring Boot, full stack development, and data careers from Skilltrixa mentors."
      url="/blogs"
      image="/images/preview-home.png"
    />
    <BlogHero />
  </Layout>
);

export default BlogPage;
