import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-green-700 mb-2">Contact Us</h1>
        <div className="w-16 h-1 bg-green-500 mx-auto rounded"></div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We're here to assist you. Reach out via phone, email, or visit us — and our friendly team will be happy to help.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Phone Card */}
        <div className="bg-white rounded-lg border border-transparent shadow-sm p-8 text-center transition transform hover:scale-[1.02] hover:border-green-500 hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]">
          <div className="flex justify-center items-center w-16 h-16 mx-auto bg-green-100 text-green-700 rounded-full text-2xl mb-4">
            <FaPhoneAlt />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
          <p className="text-gray-600">24/7 Emergency Lines</p>
          <p className="mt-3 text-md font-bold text-green-700">+91 72404 45656, +91 94140 21072</p>
 
        </div>

        {/* Email Card */}
        <div className="bg-white rounded-lg border border-transparent shadow-sm p-8 text-center transition transform hover:scale-[1.02] hover:border-green-500 hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]">
          <div className="flex justify-center items-center w-16 h-16 mx-auto bg-green-100 text-green-700 rounded-full text-2xl mb-4">
            <FaEnvelope />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
          <p className="text-gray-600">We'll reply within 24 hours</p>
          <p className="mt-3 text-md font-bold text-green-700">info@vsmedihub.com</p>
        </div>

        {/* Address Card */}
        <div className="bg-white rounded-lg border border-transparent shadow-sm p-8 text-center transition transform hover:scale-[1.02] hover:border-green-500 hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]">
          <div className="flex justify-center items-center w-16 h-16 mx-auto bg-green-100 text-green-700 rounded-full text-2xl mb-4">
            <FaMapMarkerAlt />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Visit Us</h3>
          <p className="text-gray-600">We welcome walk-ins</p>
          <p className="mt-3 text-md font-bold text-green-700">
            28, First Floor, Shiv Shakti Nagar, Nirman Nagar, Jaipur, Rajasthan
          </p>
        </div>
      </div>
      <ContactForm/>
    </section>
  );
};

export default ContactUs;
