import React from "react";

import logo from "../FullstackDeveloper/img/vts-logo.png";

import {
  MapPin,
  Mail,
  Phone,
  Youtube,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { LINKEDIN_PROFILE_URL } from "../../../config/seoConfig";

export default function Footer() {
  return (
    <footer className="bg-[#f5f2f1] pt-16 px-6">

      {/* TOP GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-4 gap-10 pb-12 border-b">


        {/* ABOUT */}
        <div>

          <img src={logo} className="h-10 mb-4" />

          <h3 className="text-red-700 font-semibold mb-3">
            ABOUT SKILLTRIXA
          </h3>

          <p className="text-gray-600 leading-relaxed">
            We provide personalized mentorship, live doubt-solving,
            coding contests, and career guidance to help students
            and professionals achieve their goals.
          </p>

        </div>



        {/* QUICK LINKS */}
        <div>

          <h3 className="text-red-700 font-semibold mb-4">
            QUICK LINKS
          </h3>

          <ul className="space-y-3 text-gray-600">

            <li className="hover:text-red-700 cursor-pointer">About</li>
            <li className="hover:text-red-700 cursor-pointer">Master Class</li>
            <li className="hover:text-red-700 cursor-pointer">Contests</li>
            <li className="hover:text-red-700 cursor-pointer">Resume Review</li>
            <li className="hover:text-red-700 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-red-700 cursor-pointer">Contact</li>

          </ul>

        </div>



        {/* CONTACT */}
        <div>

          <h3 className="text-red-700 font-semibold mb-4">
            CONTACT
          </h3>


          {/* Address */}
          <div className="flex gap-3 mb-4">

            <MapPin className="text-red-700 mt-1" size={20} />

            <div>
              <div className="font-semibold">Address:</div>

              <div className="text-gray-600">
                No.112, Ground Floor, 2nd Cross C.K.G Road,
                <br />
                Nagayanapalya, M.S. Nagar Bangalore, Karnataka, India - 560033
              </div>
            </div>

          </div>


          {/* Email */}
          <div className="flex gap-3 mb-4">

            <Mail className="text-red-700 mt-1" size={20} />

            <div>
              <div className="font-semibold">Email:</div>

              <div className="text-gray-600">
                support@Skilltrixa.com
              </div>
            </div>

          </div>


          {/* Phone */}
          <div className="flex gap-3">

            <Phone className="text-red-700 mt-1" size={20} />

            <div>
              <div className="font-semibold">Phone Number:</div>

              <div className="text-gray-600">
                +91 98765 43210
              </div>
            </div>

          </div>

        </div>



        {/* SOCIAL */}
        <div>

          <h3 className="text-red-700 font-semibold mb-4">
            GET IN TOUCH
          </h3>


          <div className="flex gap-5">

            <a href="https://www.youtube.com/channel/UCV3E1SHQNFEnbiwl0Sre0AQ" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-inherit">
              <Youtube className="cursor-pointer hover:text-red-700" />
            </a>
            <a href="https://www.facebook.com/people/Skilltrixa/61568687068681/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-inherit">
              <Facebook className="cursor-pointer hover:text-red-700" />
            </a>
            <a href="https://x.com/Skilltrixa01" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-inherit">
              <Twitter className="cursor-pointer hover:text-red-700" />
            </a>
            <a href="https://www.instagram.com/skilltrixa/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-inherit">
              <Instagram className="cursor-pointer hover:text-red-700" />
            </a>
            <a href={LINKEDIN_PROFILE_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-inherit">
              <Linkedin className="cursor-pointer hover:text-red-700" />
            </a>

          </div>

        </div>

      </div>



      {/* BOTTOM BAR */}
      <div className="max-w-6xl mx-auto py-6 flex justify-between items-center">


        <div className="text-red-700 text-sm">
          Copyright © 2025 Skilltrixa
        </div>


        <div className="flex gap-8 text-gray-700">

          <span className="hover:text-red-700 cursor-pointer">
            Our Programs
          </span>

          <span className="hover:text-red-700 cursor-pointer">
            Our Products
          </span>

          <span className="hover:text-red-700 cursor-pointer">
            About us
          </span>

          <span className="hover:text-red-700 cursor-pointer">
            Blogs
          </span>

        </div>

      </div>

    </footer>
  );
}
