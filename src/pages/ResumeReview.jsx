import Faqs from "../component/Faqs";
import Layout from "../component/Layout";
import SEO from "../component/SEO";
import ResumeExperts from "../component/resumeReview/ResumeExperts";
import ResumeGuidanceSection from "../component/resumeReview/ResumeGuidanceSection";
import ResumeHero from "../component/resumeReview/ResumeHero";
import ResumeImportant from "../component/resumeReview/ResumeImportant";
import ResumeProcess from "../component/resumeReview/ResumeProcess";
import ResumeTestimonials from "../component/resumeReview/ResumeTestimonials";
import data from "../../rawdata.json"


export default function ResumeReview() {
  const faqData=data.resumeFaq;
  return (
    <Layout >
        <SEO
          title="Resume Review & Career Roadmap | Skilltrixa"
          description="Get expert resume feedback and a tailored career roadmap—optimize your profile for tech roles with Skilltrixa mentors."
          keywords="resume review developers, tech resume India, career roadmap IT jobs, Skilltrixa resume"
          url="/resume-review"
          image="/images/preview-home.png"
        />
        <ResumeHero />
        <ResumeImportant/>
        <ResumeProcess/>
        <ResumeGuidanceSection/>
        <ResumeExperts/>
        <ResumeTestimonials/>
        <Faqs faqData={faqData}  />
    </Layout>
  );
}
