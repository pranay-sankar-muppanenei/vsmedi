// src/components/SpecialityDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { doctorsData } from "../data/doctorsData";
import { FaMapMarkerAlt, FaPhoneAlt, FaFax } from "react-icons/fa";

const SpecialityDetail = () => {
  const { speciality } = useParams();
  const doctor = doctorsData[speciality];

  if (!doctor) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-red-600">Speciality not found!</h2>
        <Link to="/" className="text-green-600 underline">
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-[100vh] bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-800 to-green-600 text-white pb-24 pt-12 md:pt-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="rounded-2xl shadow-xl w-[300px] h-[250px] object-cover border-4 border-white"
          />
          <div>
            <h1 className="text-4xl font-bold">{doctor.name}</h1>
            <p className="text-lg opacity-90 mt-1">{doctor.specialization}</p>
            <p className="mt-2 text-sm bg-white/20 px-4 py-1 inline-block rounded-full">
              {doctor.experience}+ Years of Experience
            </p>
          </div>
        </div>
      </div>

      {/* Floating Info Cards */}
      <div className="relative z-10 max-w-6xl mx-auto -mt-14 px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Specialties", value: doctor.specialties.join(", ") },
          { label: "Clinical Interests", value: doctor.clinicalInterests.join(", ") },
          { label: "Gender", value: doctor.gender },
          { label: "Experience", value: `${doctor.experience}+ Years` },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-5 shadow-lg  border-green-600"
          >
            <p className="font-semibold text-gray-700">{item.label}</p>
            <p className="text-gray-600 mt-1 text-sm">{item.value}</p>
          </div>
        ))}
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto px-4 mt-12">
        <h2 className="text-2xl font-bold text-gray-800">About {doctor.name}</h2>
        <p className="mt-4 text-gray-600 leading-relaxed">{doctor.about}</p>
      </div>

      {/* Education Section */}
      <div className="max-w-6xl mx-auto px-4 mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Education</h2>
        <div className="relative border-l-4 border-green-600 pl-6 space-y-6">
          <div>
            <span className="absolute -left-[10px] top-1 w-4 h-4 rounded-full bg-green-600"></span>
            <p className="font-semibold">Medical Board Certification</p>
            <p className="text-gray-600">{doctor.education.boardCertification}</p>
          </div>
          <div>
            <span className="absolute -left-[10px] top-1 w-4 h-4 rounded-full bg-green-600"></span>
            <p className="font-semibold">Residency</p>
            <p className="text-gray-600">{doctor.education.residency}</p>
          </div>
          <div>
            <span className="absolute -left-[10px] top-1 w-4 h-4 rounded-full bg-green-600"></span>
            <p className="font-semibold">Degrees</p>
            <ul className="list-disc pl-5 text-gray-600">
              {doctor.education.degrees.map((deg, idx) => (
                <li key={idx}>{deg}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto px-4 mt-12 grid md:grid-cols-2 gap-8">
        {/* Practice Location */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
          <h3 className="text-lg font-bold mb-4 text-gray-800">Practice Location</h3>
          <p className="font-semibold">{doctor.practiceLocation.hospital}</p>
          <p className="flex items-center gap-2 text-gray-600 mt-2">
            <FaMapMarkerAlt className="text-green-600" /> {doctor.practiceLocation.address}
          </p>
          <p className="flex items-center gap-2 text-gray-600 mt-2">
            <FaPhoneAlt className="text-green-600" /> {doctor.practiceLocation.phone}
          </p>
          <p className="flex items-center gap-2 text-gray-600 mt-2">
            <FaFax className="text-green-600" /> {doctor.practiceLocation.fax}
          </p>
        </div>
      </div>

      {/* Back Button */}
      <div className="text-center my-12">
        <Link
          to="/"
          className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-800 transition"
        >
          ← Back to Specialities
        </Link>
      </div>
    </div>
  );
};

export default SpecialityDetail;
