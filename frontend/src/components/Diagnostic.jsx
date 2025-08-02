import React from "react";
import ProtectionSteps from "./ProtectionSteps";

const Diagnostic = () => {
  const diagnosticData = [
    {
      title: "2D Echo",
      description:
        "2D echocardiography, also known as 2D echo, is a non-invasive investigation used to evaluate the functioning and assess the sections of your heart. It creates images of the various parts of the heart using sound vibrations, and makes it easy to check for damages, blockages, and blood flow rate.",
      img: "/2d.jpg",
    },
    {
      title: "CT",
      description: `A CT scan or computed tomography scan is a medical imaging technique used in radiology to get detailed images of the body noninvasively for diagnostic purposes. The personnel that perform CT scans are called radiographers or radiology technologists. The CT scan can reveal anatomic details of internal organs that cannot be seen in conventional X-rays. The X-ray tube spins rapidly around the patient and the X-rays strike numerous detectors after passing through the body.`,
      img: "/ct.jpg",
    },
    {
      title: "Audiometry",
      description: `Audiometry is a branch of audiology and the science of measuring hearing acuity for variations in sound intensity and pitch and for tonal purity, involving thresholds and differing frequencies. An audiometry exam tests your ability to hear sounds. Sounds vary, based on their loudness (intensity) and the speed of sound wave vibrations (tone). Hearing occurs when sound waves stimulate the nerves of the inner ear. They can also pass through the bones around and behind the ear (bone conduction).`,
      img: "/audio.jpg",
    },
    {
      title: "Electrocardiography (ECG)",
      description: `Electrocardiography is the process of producing an electrocardiogram. It is an electrogram of the heart which is a graph of voltage versus time of the electrical activity of the heart using electrodes placed on the skin. An electrocardiogram (ECG) is a simple test that can be used to check your heart’s rhythm and electrical activity. Sensors attached to the skin are used to detect the electrical signals produced by your heart each time it beats.`,
      img: "/ecg.webp",
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      {/* Page Title */}

    <h1 className="text-4xl text-center font-extrabold text-green-700 tracking-wide">
      Diagnostic
    </h1>
  <div className="w-16 border-b-4 border-green-600 mx-auto mt-3 rounded-full mb-3"></div>


      {/* Container */}
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        {diagnosticData.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row justify-between items-center gap-8 bg-white p-6 rounded-lg border border-transparent transition duration-300 transform hover:scale-[1.02] hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text */}
            <div className="w-full md:w-[45%]">
              <h2 className="text-2xl font-semibold text-green-700 mb-2">
                {item.title}
              </h2>
              <div className="w-12 border-b-2 border-green-500 mb-4"></div>
              <p className="text-gray-600 leading-relaxed text-justify">
                {item.description}
              </p>
            </div>

            {/* Image */}
            <div className="w-full md:w-[45%]">
              <img
                src={item.img}
                alt={item.title}
                className="rounded-lg w-full object-cover shadow-md h-[250px]"
              />
            </div>
          </div>
        ))}
      </div>
      <ProtectionSteps/>
    </div>
  );
};

export default Diagnostic;
