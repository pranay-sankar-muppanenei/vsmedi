import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaSitemap,
} from "react-icons/fa";
import { MdOutlineEventAvailable } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      {/* Footer Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4 sm:px-8 lg:px-16 py-12 text-sm">
        
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-green-700 mb-2">
            About VS MediaHub
          </h3>
          <div className="h-1 w-10 bg-green-500 mb-4"></div>
          <p className="text-gray-600 leading-relaxed">
            As a multispeciality clinic, VS Medihub offers a wide range of
            medical services under one roof including cardiology, neurology,
            orthopedics and more. We provide patients with access to
            comprehensive care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-green-700 mb-2">
            Quick Links
          </h3>
          <div className="h-1 w-10 bg-green-500 mb-4"></div>
          <ul className="space-y-2 text-gray-600">
            <li><Link to="/" className="hover:text-green-600 transition">Home</Link></li>
            <li><Link to="/specialities" className="hover:text-green-600 transition">Our Specialities</Link></li>
            <li><Link to="/holistic-wellness" className="hover:text-green-600 transition">Holistic Wellness</Link></li>
            <li><Link to="/advance-physiotherapy" className="hover:text-green-600 transition">Advance Physiotherapy</Link></li>
            <li><Link to="/diagnostic" className="hover:text-green-600 transition">Diagnostic</Link></li>
            <li><Link to="/about-us" className="hover:text-green-600 transition">About Us</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-green-700 mb-2">
            Contact Us
          </h3>
          <div className="h-1 w-10 bg-green-500 mb-4"></div>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-green-500 mt-1" />
              <span>
                28, Shiv Shakti Nagar, Nirman Nagar, Jaipur, Rajasthan
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-500" />
              <a href="tel:+917240445656" className="hover:text-green-600 transition">
                +91 7240445656
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-green-500" />
              <a href="mailto:info@vsmedihub.com" className="hover:text-green-600 transition">
                info@vsmedihub.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaSitemap className="text-green-500" />
              <a href="https://www.vsmedihub.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition">
                www.vsmedihub.com
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-green-700 mb-2">
            Newsletters
          </h3>
          <div className="h-1 w-10 bg-green-500 mb-4"></div>
          <p className="flex items-center gap-2 mb-4 text-gray-600">
            <MdOutlineEventAvailable className="text-green-500 text-lg" />
            Book An Appointment
          </p>
          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-2 text-sm rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition font-semibold">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-50 border-t border-gray-200 px-4 sm:px-12 py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
        <p className="mb-2 sm:mb-0">
          © 2024 VS Medihub - Multi Speciality Clinic in Jaipur | Powered by VS
          Medihub
        </p>
        <div className="flex space-x-4 text-green-600 text-lg">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="hover:text-green-800 cursor-pointer" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-green-800 cursor-pointer" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="hover:text-green-800 cursor-pointer" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-green-800 cursor-pointer" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
