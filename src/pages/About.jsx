import Layout from '../component/Layout';
import SEO from '../component/SEO';
import ContactUs from '../component/ContactUs';
import { Empowering } from '../component/Empowering';
import { AboutVTS } from '../component/AboutVTS';
import TestimonialsPage from '../component/TestimonialsPage';
import WhatWeBring from '../component/WhatWeBring';
import Milestones from '../component/Milestones';

const About = () => {
    const thumbNail="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/coding-design-template-7fdcbfed1fb311be96a282920fba8515_screen.jpg?ts=1738234094";
    return (
        <Layout>
            <SEO
              title="About Skilltrixa | Deviktech Education"
              description="Learn how Skilltrixa (powered by Deviktech Education) bridges classroom learning with real-world skills through masterclasses, mentorship, contests, resume review, and doubt solving."
              keywords="About Skilltrixa, Deviktech Education, tech training India, coding institute"
              url="/aboutus"
              image="/images/preview-home.png"
            />
            <div className='w-full overflow-hidden' >
                <Empowering/>
                <AboutVTS/>
                <TestimonialsPage videoUrl={"https://www.w3schools.com/html/mov_bbb.mp4"} testimonialImg={thumbNail} title={""} />
                <WhatWeBring/>
                <Milestones/>
            </div>
        </Layout>
    )
}
export default About
