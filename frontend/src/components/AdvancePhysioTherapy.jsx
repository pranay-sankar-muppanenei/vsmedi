import React, { useRef } from "react";

const AdvancePhysiotherapy = () => {
  const cranioRef = useRef(null);
  const electroRef = useRef(null);
  const exerciseRef = useRef(null);
  const manualRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Section Title */}
      <div className="text-center mb-12">

          <h1 className="text-3xl font-extrabold text-green-700 tracking-wide">
            Advance Physiotherapy
          </h1>
        <div className="w-16 border-b-4 border-green-600 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Contact Button */}
      
      {/* Intro Paragraph */}
      <p className="text-gray-600 max-w-3xl  mb-5">
        Advanced physiotherapy encompasses innovative techniques and therapies
        for rehabilitation, focusing on evidence-based practices, state-of-the-art
        equipment, and personalized treatment plans to optimize recovery and
        enhance physical function.
      </p>

      <div className="flex justify-start mb-8">
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition">
          Contact Us
        </button>
      </div>


      {/* Navigation Links */}
  <div className="flex flex-wrap justify-center gap-6 mb-12">
  {[
    { label: "Craniosacral therapy (CST)", ref: cranioRef },
    { label: "Electro Therapy", ref: electroRef },
    { label: "Exercise Therapy", ref: exerciseRef },
    { label: "Manual Therapy", ref: manualRef },
  ].map((item, idx) => (
    <button
      key={idx}
      onClick={() => scrollToSection(item.ref)}
      className="relative text-green-700 font-medium transition-all duration-300 group cursor-pointer border-b-2 border-green-200 hover:border-green-600 hover:-translate-y-[2px] px-1 rounded-sm"
    >
      {item.label}
      {/* Animated underline */}
      <span className="absolute left-0 -bottom-[2px] w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
    </button>
  ))}
</div>



      {/* Cards */}
      {[
        {
          ref: cranioRef,
          title: "Craniosacral therapy (CST)",
          img: "/cranio.png",
          desc: "Craniosacral therapy (CST) is a gentle hands-on treatment that may provide relief from a variety of symptoms including headaches, neck pain and side effects of cancer treatment among many others. CST uses a light touch to examine membranes and movement of fluids in and around the central nervous system. The focus of CST is a gentle placement of hands to assist release of the body’s connective tissue, or fascia. Fascia is a covering found throughout the body including organs, glands, nerves, muscles, blood vessels, brain and spinal cord. The therapy can be used successfully with children and adults.",
          reverse: false,
        },
        {
          ref: electroRef,
          title: "Electro Therapy",
          img: "/electro.png",
          desc: "Electrotherapy is a medical treatment that uses electrical impulses to stimulate nerves and muscles, aiding in pain relief and promoting healing. It’s commonly used in physical therapy for conditions like arthritis, back pain, and nerve-related pain. Techniques include transcutaneous electrical nerve stimulation (TENS) and electrical muscle stimulation (EMS). Electrotherapy can improve circulation, reduce inflammation, and enhance tissue repair.",
          reverse: true,
        },
        {
          ref: exerciseRef,
          title: "Exercise Therapy",
          img: "/exercise.png",
          desc: "Exercise therapy refers to a regimen or plan of physical activities designed and prescribed for specific therapeutic goals. Its purpose is to bring about specific changes in an individual’s physical condition, such as improving strength, flexibility, cardiovascular health, or to decrease pain. Often used in rehabilitation and recovery, exercise therapy is tailored to meet the unique needs of an individual, depending on their health status and specific health goals.",
          reverse: false,
        },
        {
          ref: manualRef,
          title: "Manual Therapy",
          img: "/manual.png",
          desc: "Manual therapy is a physical treatment primarily used by physical therapists, chiropractors, and osteopaths to treat musculoskeletal pain and disability. It involves kneading and manipulation of muscles, joint mobilization, and joint manipulation. This therapy aims to reduce pain, increase range of motion, reduce or eliminate soft tissue inflammation, induce relaxation, improve tissue repair, and facilitate movement.",
          reverse: true,
        },
      ].map((item, idx) => (
        <div
          key={idx}
          ref={item.ref}
          className={`w-full bg-gray-50 rounded-lg shadow-md p-6 flex flex-col md:flex-row ${
            item.reverse ? "md:flex-row-reverse" : ""
          } justify-between items-center gap-8 mb-10 border border-transparent hover:border-green-600 hover:shadow-green-300 hover:shadow-lg hover:scale-[1.01] transition-all duration-300`}
        >
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-4 border-l-4 border-green-700 pl-3 text-green-700">
              {item.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">{item.desc}</p>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src={item.img}
              alt={item.title}
              className="rounded-lg shadow-lg w-full md:w-[400px] h-[300px] object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdvancePhysiotherapy;
