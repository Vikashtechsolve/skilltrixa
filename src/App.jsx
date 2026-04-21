import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./component/LoginPage";
import Dashboard from "./pages/Dashboard";
import MasterClasspages from "./pages/masterClass";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./component/ScrollToTop";
import OneToOneMentoring from "./pages/OneToOneMentoring";
import OnlineContests from "./pages/OnlineContests";
import DoubtSolving from "./pages/DoubtSolving";
import ResumeReview from "./pages/ResumeReview";
import AutoPay from "./utils/AutoPay";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import JoinUs from "./pages/JoinUs";
import CampusPlacements from "./pages/CampusPlacements";
import ProductsPage from "./pages/ProductsPage";
import NotFoundPage from "./pages/NotFoundPage";
import FullStackProgramPage from "./pages/Courses/FullstackDeveloper/HeroSection";
import DataAnalyticsProgramPage from "./pages/Courses/DataAnalytics/DataAnalyticsProgram";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/campus-placements" element={<CampusPlacements />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/masterClass" element={<MasterClasspages />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contactus" element={<ContactPage />} />
        <Route path="/oneToOneMentoring" element={<OneToOneMentoring />} />
        <Route path="/online-contests" element={<OnlineContests />} />
        <Route path="/doubt-solving" element={<DoubtSolving />} />
        <Route path="/resume-review" element={<ResumeReview />} />
        <Route path="/pay" element={<AutoPay />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route
          path="/programs/full-stack-developer"
          element={<FullStackProgramPage />}
        />
        <Route
          path="/programs/data-analytics"
          element={<DataAnalyticsProgramPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
