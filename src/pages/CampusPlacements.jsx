import React from "react";
import { Link } from "react-router-dom";
import Layout from "../component/Layout";
import SEO from "../component/SEO";
import { FiCheckCircle, FiUsers, FiBookOpen, FiTrendingUp } from "react-icons/fi";

const stats = [
  {
    icon: FiUsers,
    value: "10,000+",
    label: "Students trained through campus programs",
  },
  {
    icon: FiTrendingUp,
    value: "Placements",
    label: "Interview prep, drives, and successful offers for trained learners",
  },
  {
    icon: FiBookOpen,
    value: "Multi-track",
    label: "Hands-on training across in-demand skills",
  },
];

const partnerHighlights = [
  "University-wide skilling and placement readiness programs",
  "Workshops, bootcamps, and semester-aligned learning paths",
  "Industry mentors and structured assessments on our platforms",
];

const programs = [
  {
    title: "MERN stack",
    description:
      "Full-stack web development with MongoDB, Express, React, and Node—projects, code reviews, and portfolio-ready work.",
  },
  {
    title: "Data analytics",
    description:
      "SQL, visualization, and analytics workflows so students can turn data into decisions employers care about.",
  },
  {
    title: "AI / ML",
    description:
      "Foundations through applied projects—models, tooling, and responsible use cases aligned with industry demand.",
  },
  {
    title: "DSA",
    description:
      "Problem-solving patterns, contests, and interview-focused practice to build confidence for technical rounds.",
  },
  {
    title: "And more",
    description:
      "Cloud basics, system design intros, aptitude, and soft skills—customized to each campus partnership.",
  },
];

const CampusPlacements = () => {
  return (
    <Layout>
      <SEO
        title="Campus Placements & Training | Skilltrixa"
        description="Skilltrixa partners with universities for placements and intensive training in MERN, data analytics, AI/ML, DSA, and more. 10,000+ students trained."
        keywords="Skilltrixa, campus placements, university training, MERN stack, data analytics, AI ML, DSA, coding bootcamp India"
        url="https://skilltrixa.com/campus-placements"
        image="https://skilltrixa.com/images/preview-home.png"
      />

      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-black to-black pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
          <p className="text-red-500 font-semibold tracking-wide uppercase text-sm mb-3">
            Campus partnerships
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
            Training that prepares students—and placements that open doors
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl leading-relaxed">
            We work with colleges and universities to deliver structured skilling,
            assessments on our LMS and test platforms, and placement support so
            learners move from classroom concepts to confident interviews.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contactus"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Partner with us
            </Link>
            <Link
              to="/aboutus"
              className="inline-flex items-center justify-center border-2 border-white/80 hover:bg-white hover:text-black text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Why Skilltrixa
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-16">
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm"
              >
                <div className="shrink-0 h-12 w-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-gray-900">{value}</p>
                  <p className="mt-1 text-gray-600 leading-snug">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              Built for campuses—not one-size-fits-all slides
            </h2>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Every partnership blends live training, hands-on labs, and measurable
              outcomes. Students get repetition where it matters; institutions get a
              partner accountable for engagement and employability.
            </p>
          </div>
          <ul className="mt-10 grid sm:grid-cols-1 md:grid-cols-3 gap-6">
            {partnerHighlights.map((text) => (
              <li
                key={text}
                className="flex gap-3 bg-white rounded-xl border border-gray-200 p-5 shadow-sm"
              >
                <FiCheckCircle className="h-6 w-6 text-red-600 shrink-0 mt-0.5" aria-hidden />
                <span className="text-gray-800 leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center">
            Programs we deliver on campus
          </h2>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto text-lg">
            Deep tracks and add-on modules—scheduled around your academic calendar and
            delivered by mentors who teach and ship software.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map(({ title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-gray-200 p-6 hover:border-red-200 hover:shadow-md transition-all bg-gray-50/50"
              >
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to bring Skilltrixa to your campus?
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Tell us about your cohort size, timelines, and goals—we’ll propose a
            training and placement roadmap that fits.
          </p>
          <Link
            to="/contactus"
            className="inline-flex mt-8 bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-3 rounded-full transition-colors"
          >
            Talk to our team
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default CampusPlacements;
