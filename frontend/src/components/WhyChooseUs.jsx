import React from "react";
import { FaCertificate, FaHospital, FaUsers, FaLightbulb } from "react-icons/fa";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaCertificate />,
      title: "Patient-centered care",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      icon: <FaHospital />,
      title: "Best Hospital",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      icon: <FaUsers />,
      title: "Collaborative providers",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation & research",
      description: "Lorem ipsum dolor sit amet",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="text-center">
        <p className="text-green-600 uppercase tracking-wide font-semibold mb-2">
          Why Choose Us
        </p>
                <div className="w-16 border-b-4 border-green-600 mx-auto mt-3 rounded-full mb-3"></div>
        <h2 className="text-3xl mb-5 font-bold text-gray-900">
          Why Choose VS Medihub?
        </h2>

      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-8">
  {reasons.map((reason, idx) => (
    <div
      key={idx}
      className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm transition duration-300 transform hover:scale-[1.02] hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] w-64"
    >
      <div className="text-green-600 text-4xl mb-4 flex justify-center">
        {reason.icon}
      </div>
      <h3 className="font-semibold text-lg text-gray-800 mb-2">
        {reason.title}
      </h3>
      <p className="text-gray-600 text-sm">{reason.description}</p>
    </div>
  ))}
</div>

    </section>
  );
};

export default WhyChooseUs;
