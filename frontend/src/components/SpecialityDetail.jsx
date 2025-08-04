// src/components/SpecialityDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { doctorsData } from "../data/doctorsData";

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
    <div className="max-w-5xl mx-auto px-4 py-10 min-h-[100vh]">
      <div className="flex flex-col gap-5 items-center">
        {/* Doctor Image */}
        <img
          src={doctor.image}
          alt={doctor.name}
          className="rounded-xl shadow-lg w-[300px] h-[200px] object-cover"
        />

        {/* Doctor Info */}
        <div>
          <h2 className="text-3xl font-bold text-green-700">{doctor.name}</h2>
          <p className="text-lg font-semibold text-gray-800">
            {doctor.specialization}
          </p>
          <p className="mt-2 text-gray-600">Experience: {doctor.experience}</p>
          <p className="mt-4 text-gray-700 leading-relaxed">{doctor.about}</p>

          <Link
            to="/"
            className="mt-6 inline-block bg-green-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-800 transition"
          >
            ← Back to Specialities
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpecialityDetail;
