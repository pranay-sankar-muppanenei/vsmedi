import React, { useEffect, useState } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaCalendarAlt } from "react-icons/fa";
import SpecialitiesGrid from './SpecialitiesGrid';
import WhyChooseUs from './WhyChooseUs';
import SpecializationSection from './SpecializationSection';

const Home = () => {
  const [animate, setAnimate] = useState(false);
  const [counts, setCounts] = useState({
    doctors: 0,
    patients: 0,
    departments: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (animate) {
      const target = { doctors: 15, patients: 8004, departments: 5 };
      const speed = 10;

      const interval = setInterval(() => {
        setCounts((prev) => {
          const next = { ...prev };
          let done = true;

          if (next.doctors < target.doctors) {
            next.doctors += 1;
            done = false;
          }
          if (next.patients < target.patients) {
            next.patients += Math.ceil((target.patients - next.patients) / 25);
            done = false;
          }
          if (next.departments < target.departments) {
            next.departments += 1;
            done = false;
          }

          if (done) clearInterval(interval);
          return next;
        });
      }, speed);

      return () => clearInterval(interval);
    }
  }, [animate]);

  return (
    <section className="hero-section overflow-x-hidden  relative bg-white px-4  py-10 lg:py-20">
      {/* Hero Section */}
      

      <div className=" py-12 mt-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-4">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ease-out ${
              animate ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black mb-4">
              Best Multispecialty Clinic in Jaipur –{" "}
              <span className="text-[#83ba4c]">VS Medihub</span>
            </h2>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-black mb-6 leading-relaxed">
              Delivering advanced medical care & holistic wellness under one roof. Our
              team of specialists ensures comprehensive treatment plans tailored to
              your needs.
            </p>

            {/* Contact Number */}
            

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-green-700 text-white px-5 py-3 rounded-lg shadow-md hover:bg-green-800 transition">
                <FaCalendarAlt /> Book Appointment
              </button>
              <a
                href="tel:+917240445656"
                className="flex items-center gap-2 bg-lime-100 text-green-800 px-5 py-3 rounded-lg shadow-md hover:bg-lime-200 transition"
              >
                <FaPhoneAlt /> Call Now
              </a>
              <a
                href="https://wa.me/917240445656"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-100 text-green-800 px-5 py-3 rounded-lg shadow-md hover:bg-green-200 transition"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`transition-all duration-1000 ease-out ${
              animate ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            } relative lg:-right-10`}
          >
            <div className="relative z-10">
              <img
                src="/hospital.png"
                alt="VS Medihub Building"
                className="rounded-xl shadow-xl w-full max-w-[500px] mx-auto"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full rounded-full  -z-10"></div>
          </div>
        </div>
      </div>



       {/*<div className=" px-4 mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-black">
  {[
    { count: `${counts.doctors}+`, label: "Renowned Doctors" },
    { count: `${counts.patients.toLocaleString()}+`, label: "Satisfied Patients" },
    { count: `${counts.departments}+`, label: "Departments for Holistic Health" },
  ].map((stat, idx) => (
    <div
      key={idx}
      className="p-6 bg-white rounded-xl border border-gray-300 
                 transition duration-300 transform 
                 hover:scale-[1.02] hover:border-green-500 
                 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
    >
      <h3 className="text-4xl font-extrabold text-green-700">{stat.count}</h3>
      <p className="uppercase text-sm tracking-wider mt-2 text-gray-600">
        {stat.label}
      </p>
    </div>
  ))}
</div>*/}
  


      {/* About VS MediHub */}
    {/* About VS MediHub */}
<div className="max-w-7xl mx-auto px-4 mt-20">
  <div className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-lg border border-transparent p-6 shadow-sm transition duration-300 transform hover:scale-[1.02] hover:border-green-500 hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]">
    <img
      src="/about.jpeg"
      alt="About VS MediHub"
      className="rounded-lg w-full object-cover shadow-md"
    />
    <div>
      <h2 className="text-2xl border-l-[5px] pl-3 border-green-700 font-bold text-green-700 mb-3">
        About VS MediHub
      </h2>
      <p className="text-gray-700 leading-relaxed">
        VS MediHub, located in the vibrant city of Jaipur, stands as a beacon of advanced
        healthcare and patient-centric services. Renowned for its state-of-the-art facilities
        and a team of esteemed medical professionals, VS MediHub offers a wide spectrum of
        medical and surgical care. With a commitment to technological innovation and
        compassionate care, it has rapidly become a preferred choice for both local and regional
        patients. Emphasizing affordability without compromising quality, VS MediHub strives to
        make top-tier healthcare accessible to all. Its dedication to excellence and community
        well-being makes it a pivotal institution in Jaipur’s healthcare landscape.
      </p>
    </div>
  </div>
</div>

{/* Our Services */}


<SpecialitiesGrid/>
<WhyChooseUs/>
<SpecializationSection counts={counts} />
<div className="max-w-7xl mx-auto px-4 mt-12">
  <div className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-lg border border-transparent p-6 shadow-sm transition duration-300 transform hover:scale-[1.02] hover:border-green-500 hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]">
    {/* Text */}
    <div>
      <h2 className="text-green-700 font-bold pl-3 border-l-[5px] border-green-700 text-xl mb-1">
        Our Services
      </h2>
      <h3 className="text-md font-semibold mb-3">One Stop for Overall Wellbeing</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">
        VS Medihub stands as a unique and comprehensive wellness center, dedicated to enhancing overall well-being. It seamlessly integrates a range of health services, combining the expertise of a multispeciality clinic with the holistic approach of a wellness hub. This synergy of medical care and wellness practices makes VS Medihub an ideal destination for those seeking not just treatment for specific ailments but also proactive health management and lifestyle improvement.
      </p>
      <ul className="space-y-2 text-sm text-gray-800">
        <li className="flex items-center gap-2">
          <span className="text-xl text-green-600">✔️</span> Multidisciplinary Medical Care
        </li>
        <li className="flex items-center gap-2">
          <span className="text-xl text-green-600">✔️</span> Advanced Diagnostic and Treatment Technologies
        </li>
      </ul>
    </div>

    {/* Images */}
    <div className="grid grid-cols-2 gap-4">
      {[
        { title: "Integrative Health", img: "/about.jpeg" },
        { title: "Holistic Wellness", img: "/about.jpeg" },
        { title: "Advance Physiotherapy", img: "/about.jpeg" },
        { title: "Diagnostic", img: "/about.jpeg" },
      ].map((service, idx) => (
        <div key={idx} className="relative rounded-xl overflow-hidden shadow-md">
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <p className="absolute bottom-2 left-2 text-white text-sm font-semibold bg-green-700/60 px-2 py-1 rounded">
            {service.title}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>


    </section>
  );
};

export default Home;
