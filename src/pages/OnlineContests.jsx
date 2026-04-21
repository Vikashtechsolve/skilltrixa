import React from 'react'
import Layout from '../component/Layout'
import SEO from '../component/SEO'
import OnlineContestHero from '../component/OnlineContesthero'
import ContestStats from '../component/ContestStats'
import ContestBenefits from '../component/ContestBenefits'
import HowItWorksPage from '../component/HowItWorks'

const OnlineContest = () => {
    return (
        <Layout>
            <SEO
              title="Online Coding Contests & Challenges | Skilltrixa"
              description="Compete in Skilltrixa online contests—coding challenges, quizzes, leaderboards, and prizes to sharpen your skills."
              keywords="coding contest India, programming competition online, Skilltrixa contests, MCQ coding test"
              url="/online-contests"
              image="/images/preview-home.png"
            />
            <OnlineContestHero/>
            <ContestStats/>
            <ContestBenefits/>
            <HowItWorksPage/>
        </Layout>
    )
}

export default OnlineContest;
