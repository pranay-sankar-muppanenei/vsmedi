import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import CustomDropdown from "../ui/CustomDropdown";

const Header = ({
  logoSrc = "/logo.png",
   specialities = [
  { label: "GYNECOLOGIST", href: "/specialities/gynecologist" },
  { label: "UROLOGY", href: "/specialities/urology" },
  { label: "NEUROLOGY", href: "/specialities/neurology" },
  { label: "CARDIOLOGY", href: "/specialities/cardiology" },
  { label: "ORTHOPEDICS", href: "/specialities/orthopedics" },
  { label: "NEPHROLOGY", href: "/specialities/nephrology" },
  { label: "PSYCHIATRIST", href: "/specialities/psychiatrist" },
  { label: "PEDIATRICS", href: "/specialities/pediatrics" },
  { label: "GENERAL SURGEON", href: "/specialities/general-surgeon" },
  { label: "PHYSIOTHERAPY", href: "/specialities/physiotherapy" },
],

holisticWellness = [
  { label: "PARENTAL YOGA", href: "/parental-yoga" },
],

}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full fixed bg-gradient-to-r from-[#001f25] via-[#006d70] to-[#00c2b0] text-white z-50">
      {/* Desktop & Mobile Navigation Bar */}
      <div className="flex justify-between items-center px-6 py-4 relative">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logoSrc}
            alt="Logo"
            className="h-[50px] w-[260px] object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex gap-8 text-[15px] font-semibold">
          <a href="/" className="hover:text-[#C5FA2D]">Home</a>
          <CustomDropdown label="Our Specialities" items={specialities} />
          <a href="/advance-physiotherapy" className="hover:text-[#C5FA2D]">Advance Physiotherapy</a>
          <CustomDropdown label="Holistic Wellness" items={holisticWellness} />
          <a href="/diagnostic" className="hover:text-[#C5FA2D]">Diagnostic</a>
          <a href="/contact-us" className="hover:text-[#C5FA2D]">Contact Us</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="xl:hidden text-white text-2xl"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <FaBars />
        </button>

        {/* Mobile Slide-In Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-50">
            <div className="fixed top-0 left-0 h-full w-[280px] bg-white text-black shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <img
                  src={logoSrc}
                  alt="Logo"
                  className="h-[30px] w-auto"
                />
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-xl">
                  <FaTimes />
                </button>
              </div>
              <nav className="flex flex-col gap-5 text-sm font-semibold">
                <a href="#">HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">SERVICES</a>
                <a href="#">DOCTORS</a>
                <a href="#">PAGE</a>
                <a href="#">CONTACT</a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
