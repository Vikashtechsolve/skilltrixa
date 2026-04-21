import Layout from "../component/Layout";
import ContactUs from "../component/ContactUs";
import SEO from "../component/SEO";

const ContactPage = () => (
  <Layout>
    <SEO
      title="Contact Us | Skilltrixa"
      description="Get in touch with Skilltrixa for course details, trainer opportunities, or support."
      url="/contactus"
    />
    <ContactUs />
  </Layout>
);

export default ContactPage;
