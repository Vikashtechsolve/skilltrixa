import Layout from "../component/Layout";
import BlogHero from "../component/blogs/BlogHero";
import SEO from "../component/SEO";

const BlogPage = () => (
  <Layout>
    <SEO
      title="Skilltrixa Blog | Developer Insights & Tutorials"
      description="Read expert insights and tutorials on Java, React, and Spring Boot from Skilltrixa mentors."
      url="https://skilltrixa.com/blog"
      image="https://skilltrixa.com/images/blog.png"
    />
    <BlogHero />
  </Layout>
);

export default BlogPage;
