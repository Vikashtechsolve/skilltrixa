import Layout from "../component/Layout";
import SEO from "../component/SEO";
import MentorshipCards from "../component/mentorshipPage/MentorshipCards";
import MentorshipDomain from "../component/mentorshipPage/MentorshipDomain";
import MentorshipHero from "../component/mentorshipPage/MentorshipHero";
import MentorshipSteps from "../component/mentorshipPage/MentorshipSteps";
import WhatIsMentorship from "../component/mentorshipPage/WhatIsMentorship";
import WhyChooseUs from "../component/mentorshipPage/WhytoChooseUs";
import StudentsFeedback from "../component/mentorshipPage/StudentsFeedback";
import Faqs from "../component/Faqs";
import data from "../../rawdata.json"
import MentorSection from "../component/mentorshipPage/MentorSection";
import StartJourney from "../component/mentorshipPage/StartJourney";

export default function OneToOneMentoring() {

  const faqData=data.mentorshipFaq;

  return (
    <Layout >
        <SEO
          title="1:1 Mentorship | Personalized Career Guidance | Skilltrixa"
          description="Book one-to-one mentorship with Skilltrixa experts—personalized roadmaps, interview prep, and skill growth across domains."
          keywords="tech mentorship India, one on one coding mentor, career guidance developers, Skilltrixa mentorship"
          url="/oneToOneMentoring"
          image="/images/preview-home.png"
        />
        <MentorshipHero/>
        <WhatIsMentorship />
        <MentorshipCards/>
        <MentorshipDomain/>
        <MentorshipSteps/>
         <div id="mentors-section" >
          <MentorSection/>
         </div>
        <WhyChooseUs/>
        <StudentsFeedback/>
        <Faqs faqData={faqData} />
        <StartJourney/>
    </Layout>
  );

} 