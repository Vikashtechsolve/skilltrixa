import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../component/Layout";
import JoinusForm from "../component/joinus/JoinusForm";
import SEO from "../component/SEO";

const JoinUs = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 200);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <Layout>
      <SEO
        title="Join as a Trainer | Skilltrixa"
        description="Apply to become a trainer at Skilltrixa. Teach Java, Spring Boot, or React and help shape the next generation of developers."
        url="https://skilltrixa.com/joinus"
        image="https://skilltrixa.com/images/join-us.png"
      />
      <JoinusForm />
    </Layout>
  );
};

export default JoinUs;
