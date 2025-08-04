import React from "react";

const SpecializationSection = ({ counts }) => {
  return (
    <section className="max-w-7xl mt-5 mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      {/* Left Image */}
      <div>
        <img
          src="/doctors.jpg" // replace with your actual image name in public folder
          alt="VS Medihub Specialization"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Right Content */}
      <div>
        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-black mb-4">
          Our doctors specialize in you
        </h2>

        {/* Description */}
        <p className="text-gray-700 mb-4">
          Delivering advanced medical care & holistic wellness under one roof.
          Our team of specialists ensures comprehensive treatment plans tailored
          to your needs.
        </p>

        {/* Link */}
        <a
          href="#specialties"
          className="text-green-700 font-semibold hover:underline mb-6 inline-block"
        >
          Choose by specialty →
        </a>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-black">
          {[
            { count: `${counts.doctors}+`, label: "Renowned Doctors" },
            {
              count: `${counts.patients.toLocaleString()}+`,
              label: "Satisfied Patients",
            },
            {
              count: `${counts.departments}+`,
              label: "Departments for Holistic Health",
            },
          ].map((stat, idx) => (
             <div
  key={idx}
  className={`min-w-[140px] p-4 bg-white rounded-xl border border-gray-300 
    transition duration-300 transform 
    hover:scale-[1.02] hover:border-green-500 
    hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]
    flex flex-col items-center justify-center
    ${idx !== 0 ? "border-l" : ""} 
    ${idx !== 2 ? "border-r" : ""}`}
>
  <h3 className="text-2xl font-bold text-green-700">
    {stat.count}
  </h3>
  <p className="uppercase text-xs tracking-wide mt-1 text-gray-600 text-center">
    {stat.label}
  </p>
</div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializationSection;
