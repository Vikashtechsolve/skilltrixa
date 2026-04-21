import React, { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

const logo = "/logo.svg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

    const timeoutRef = useRef(null);
    const navRefs = useRef({});

    const links = [
      {
        name: "Our Programs",
        dropdown: [
          {
            name: "Master Class",
            description:
              "Join expert-led sessions covering trending topics, real-world case studies, and practical learning.",
            href: "/masterClass",
          },
          {
            name: "Mentorship",
            description:
              "Get personalized career guidance and skill development with direct mentor support.",
            href: "/oneToOneMentoring",
          },
          {
            name: "Online Contests",
            description:
              "Participate in coding, quizzes, and competitions to test and showcase your abilities.",
            href: "/online-contests",
          },
          {
            name: "Resume Review & Road Map",
            description:
              "Improve your resume and receive a step-by-step roadmap to achieve your career goals.",
            href: "/resume-review",
          },
          {
            name: "Live Doubt Solving",
            description:
              "Ask questions anytime and clear concepts instantly with live mentor support.",
            href: "/doubt-solving",
          },
          {
            name: "Full Stack Developer Program",
            description:
              "MERN stack curriculum, projects, fees, and placement-aligned training—on the main Skilltrixa site.",
            href: "/programs/full-stack-developer",
          },
          {
            name: "Data Analytics Program",
            description:
              "Analytics curriculum, outcomes, hiring partners, and fees for career-ready analysts.",
            href: "/programs/data-analytics",
          },
        ],
      },
      {
        name: "Our Products",
        dropdown: [
          {
            name: "Products overview",
            description:
              "See Skilltrixa LMS, assessments, and online courses in one place before you sign in.",
            href: "/products",
          },
          {
            name: "LMS Portal",
            description:
              "Access a complete online learning management system with courses and training materials.",
            href: "https://course.skilltrixa.com/",
          },
          {
            name: "Test Platform",
            description:
              "Practice on real coding problems, take tests, and improve your skills with structured assessments.",
            href: "https://test.skilltrixa.com/",
          },
          {
            name: "Online Course",
            description:
              "Explore instructor-led online courses and start learning right away.",
            href: "https://learn.skilltrixa.com/",
          },
        ],
      },
      {
        name: "Placements",
        href: "/campus-placements",
        title: "Campus placements",
      },
      { name: "About us", href: "/aboutus" },
      { name: "Blogs", href: "/blogs" },
    ];

    const handleMouseEnter = (name) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      const rect = navRefs.current[name]?.getBoundingClientRect();
      if (rect) {
        setDropdownPosition({
          top: rect.bottom + window.scrollY,
          left: rect.left + window.scrollX,
        });
      }
      setOpenDropdown(name);
    };

    const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => setOpenDropdown(null), 200);
    };

    const toggleMobileDropdown = (name) => {
      setMobileDropdownOpen(mobileDropdownOpen === name ? null : name);
    };

    const isExternalHref = (href) => typeof href === "string" && href.startsWith("http");

    return (
      <nav className="sticky top-0 left-0 z-[1000] m-0 w-full pt-0">
        {/* Mobile navbar */}
        <div className="relative z-[1000] flex min-h-[64px] w-full items-center justify-between bg-black px-4 pb-1.5 pl-7 pt-0 shadow-lg md:hidden">
          <Link
            to="/"
            className="flex h-12 w-48 min-w-48 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white px-5 py-2 hover:opacity-95 transition-opacity"
            onClick={() => {
              setIsOpen(false);
              setMobileDropdownOpen(null);
            }}
          >
            <img
              src={logo}
              alt="Skilltrixa Logo"
              className="h-full w-full object-contain object-center pointer-events-none select-none"
            />
          </Link>

          <div className="flex items-center gap-2">
            {/* 🔁 Swapped: Mobile Our Programs Button (showing instead of Products) */}
            <button
              onClick={() => toggleMobileDropdown("Our Programs")}
              className="ml-3 bg-red-600 text-white font-semibold px-4 py-2 rounded-full hover:bg-red-700 transition-all duration-300 flex items-center"
            >
              Our Programs
              <FiChevronDown
                className={`ml-2 transform transition-transform duration-300 ${
                  mobileDropdownOpen === "Our Programs" ? "rotate-180" : "rotate-0"
                }`}
                size={18}
              />
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white ml-3 z-10"
            >
              {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>

        {/* 🔁 Mobile "Our Programs" dropdown (swapped from Products) */}
        {mobileDropdownOpen === "Our Programs" && (
          <div className="md:hidden bg-white text-black w-full px-4 py-3 transition-all duration-500 ease-in-out">
            {links
              .find((l) => l.name === "Our Programs")
              ?.dropdown?.map((item) => (
                isExternalHref(item.href) ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full mb-2 last:mb-0 rounded-md px-3 py-2 hover:bg-gray-100 transition-colors duration-300"
                  >
                    <span className="font-semibold">{item.name}</span>
                    <span className="block text-gray-700 text-sm mt-1">
                      {item.description}
                    </span>
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block w-full mb-2 last:mb-0 rounded-md px-3 py-2 hover:bg-gray-100 transition-colors duration-300"
                  >
                    <span className="font-semibold">{item.name}</span>
                    <span className="block text-gray-700 text-sm mt-1">
                      {item.description}
                    </span>
                  </Link>
                )
              ))}
          </div>
        )}

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-start space-y-4 bg-black text-white px-4 py-4 rounded-xl shadow-lg transition-all duration-500 ease-in-out w-full">
            {links
              .filter((l) => l.name !== "Our Programs")
              .map((link) =>
                !link.dropdown ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    title={link.title}
                    className="block text-lg font-semibold border-b border-gray-600 w-full px-3 py-2 hover:text-red-500"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <div key={link.name} className="w-full">
                    <button
                      onClick={() => toggleMobileDropdown(link.name)}
                      className="flex items-center justify-between w-full text-lg font-semibold px-3 py-2"
                    >
                      {link.name}
                      <FiChevronDown
                        className={`ml-2 transform transition-transform duration-300 ${
                          mobileDropdownOpen === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`pl-3 mt-2 space-y-3 overflow-hidden transition-all duration-500 ease-in-out ${
                        mobileDropdownOpen === link.name
                          ? "max-h-[500px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block w-full bg-white hover:bg-gray-100 rounded-md px-3 py-3 text-black"
                        >
                          <span className="font-semibold">{item.name}</span>
                          <span className="block text-gray-700 text-sm mt-1">
                            {item.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              )}

            {/* CTA Buttons */}
            <Link
              to="/contactUs"
              className="w-full text-center bg-red-600 text-white px-5 py-3 rounded-full font-semibold hover:bg-red-700"
            >
              Contact Us
            </Link>
            <Link
              to="/login"
              className="w-full text-center bg-white text-black px-5 py-3 rounded-full font-semibold hover:bg-gray-200"
            >
              Login
            </Link>
          </div>
        )}

        {/* Desktop navbar - solid left (white) + right (black), flush to top of viewport */}
        <div className="relative z-[1000] hidden min-h-[68px] w-full items-stretch bg-white py-0 pl-10 pt-0 lg:pl-12 md:flex">
          <Link
            to="/"
            className="flex h-[68px] max-w-[20rem] w-96 shrink-0 items-center justify-center overflow-hidden pl-3 pr-4 hover:opacity-90 transition-opacity lg:max-w-[22rem]"
            onClick={() => setOpenDropdown(null)}
          >
            <img
              src={logo}
              alt="Skilltrixa Logo"
              className="h-full w-full object-contain object-left pointer-events-none select-none"
            />
          </Link>

          <div className="navbar-clip-path flex min-h-[68px] min-w-0 flex-1 items-center justify-end bg-black px-4 py-0 lg:px-6">
            <div className="flex min-w-0 flex-1 justify-end">
              <div className="mr-4 flex max-w-full min-w-0 flex-nowrap items-center justify-end gap-x-4 md:gap-x-5 lg:mr-6 lg:gap-x-6 xl:gap-x-8 overflow-x-auto overscroll-x-contain pr-1 text-base font-medium text-white [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:text-[17px]">
              {links.map((link) => (
                <div
                  key={link.name}
                  className="relative shrink-0"
                  ref={(el) => (navRefs.current[link.name] = el)}
                  onMouseEnter={() => link.dropdown && handleMouseEnter(link.name)}
                  onMouseLeave={() => link.dropdown && handleMouseLeave()}
                >
                  {!link.dropdown ? (
                    <Link
                      to={link.href}
                      title={link.title}
                      className="inline-block whitespace-nowrap border-b-2 border-transparent hover:border-red-500 transition-all duration-300 pb-0.5"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="flex items-center whitespace-nowrap border-b-2 border-transparent hover:border-red-500 transition-all duration-300 pb-0.5"
                      >
                        {link.name} <FiChevronDown className="ml-1 shrink-0" />
                      </button>

                      {openDropdown === link.name &&
                        createPortal(
                          <div
                            className="absolute bg-white text-black rounded-lg shadow-lg py-3 px-5 z-[2000] transition-all duration-300"
                            style={{
                              top: dropdownPosition.top,
                              left: dropdownPosition.left,
                              width: "50vw",
                              maxWidth: "600px",
                              minWidth: "280px",
                            }}
                            onMouseEnter={() => setOpenDropdown(link.name)}
                            onMouseLeave={handleMouseLeave}
                          >
                            {link.dropdown.map((item) => (
                              isExternalHref(item.href) ? (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block mb-2 last:mb-0 hover:bg-gray-50 transition-all duration-300 rounded-md px-2 py-2"
                                >
                                  <div className="flex flex-col">
                                    <span className="font-semibold text-black text-lg">
                                      {item.name}
                                    </span>
                                    <span className="text-gray-600 hover:text-red-600 transition-colors duration-300 text-sm">
                                      {item.description}
                                    </span>
                                  </div>
                                </a>
                              ) : (
                                <Link
                                  key={item.name}
                                  to={item.href}
                                  className="block mb-2 last:mb-0 hover:bg-gray-50 transition-all duration-300 rounded-md px-2 py-2"
                                >
                                  <div className="flex flex-col">
                                    <span className="font-semibold text-black text-lg">
                                      {item.name}
                                    </span>
                                    <span className="text-gray-600 hover:text-red-600 transition-colors duration-300 text-sm">
                                      {item.description}
                                    </span>
                                  </div>
                                </Link>
                              )
                            ))}
                          </div>,
                          document.body
                        )}
                    </>
                  )}
                </div>
              ))}
              </div>
            </div>

            {/* CONTACT & LOGIN */}
            <div className="flex shrink-0 flex-nowrap items-center gap-3 px-1 py-0 lg:gap-4 lg:px-2">
              <Link
                to="/contactUs"
                className="whitespace-nowrap rounded-full border-2 border-white px-3 py-1.5 text-center text-sm font-semibold text-red-600 transition-all duration-300 hover:bg-red-600 hover:text-white lg:px-4 lg:py-2 lg:text-[15px]"
              >
                Contact Us
              </Link>
              <Link
                to="/join-us"
                className="whitespace-nowrap rounded-full border-2 border-white px-3 py-1.5 text-center text-sm font-bold text-red-600 transition-all duration-300 hover:bg-red-600 hover:text-white lg:px-4 lg:py-2 lg:text-[15px]"
              >
                Join us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  };

  export default Navbar;
