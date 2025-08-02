import React from "react";

const ProtectionSteps = () => {
  const steps = [
    {
      number: "01",
      title: "Prepare",
      description:
        "Ut pretium vitae, eget facilisis consequat maecenas ultrices nulla sit magna vitae orci scelerisque velit, auctor suspendisse tortor.",
    },
    {
      number: "02",
      title: "Be Aware",
      description:
        "Et nam sem eget sollicitudin id odio fringilla consequat, amet consectetur ac ut penatibus donec massa pulvinar et.",
    },
    {
      number: "03",
      title: "Act",
      description:
        "Consectetur dui integer egestas sagittis adipiscing tortor ut turpis cursus sed urna quis in id quis quam sed.",
    },
  ];

  return (
    <div className="py-12">
      {/* Section Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
        <h2 className="text-3xl font-bold text-green-700">
          Protect yourself & others
        </h2>
        <p className="text-gray-600 mt-3">
          Consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
          mattis, pulvinar dapibus leo.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:border-green-500 transition duration-300"
          >
            <div className="text-green-600 font-semibold mb-2">
              {step.number}.
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProtectionSteps;
