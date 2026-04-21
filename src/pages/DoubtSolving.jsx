import HowItWorks from "../component/doubtSolvingPage/HowItWorks";
import StudentTestimonials from "../component/doubtSolvingPage/StudentTestimonials";
import Layout from "../component/Layout";
import SEO from "../component/SEO";
import DoubtSolvingHero from "../component/doubtSolvingPage/DoubtSolvingHero";
import SubjectDetails from "../component/doubtSolvingPage/SubjectDetails";
import Mentors from "../component/doubtSolvingPage/Mentors";
import PricingPlans from "../component/doubtSolvingPage/PricingPlans";
import WhyChooseUs from "../component/doubtSolvingPage/WhyChooseUs";
import data from "../../rawdata.json"
import Faqs from "../component/Faqs";


export default function DoubtSolving() {

    const faqData=data.doubtSolvingFaq;


  return (
    <Layout >
        <SEO
          title="Live Doubt Solving | Instant Mentor Help | Skilltrixa"
          description="Clear doubts fast with Skilltrixa live sessions—ask questions, join guided explanations, and get notes to reinforce concepts."
          keywords="live doubt solving coding, mentor help programming, Skilltrixa doubts, Java React doubts"
          url="/doubt-solving"
          image="/images/preview-home.png"
        />
        <DoubtSolvingHero />
        <HowItWorks />
        <SubjectDetails/>
        <StudentTestimonials />
        <Mentors/>
         <div id="pricingplans">
            <PricingPlans />
         </div>
        <WhyChooseUs/>
        <Faqs faqData={faqData} />
    </Layout>
  );

} 