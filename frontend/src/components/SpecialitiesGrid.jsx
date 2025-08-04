import React from "react";
import { FaStethoscope, FaUserMd, FaBrain, FaHeartbeat, FaBone, FaTint, FaSmile, FaBaby, FaSyringe, FaRunning } from "react-icons/fa";
import {Link} from "react-router-dom";
const specialities = [
  { label: "GYNECOLOGIST", href: "/specialities/gynecologist", icon: <FaUserMd /> },
  { label: "UROLOGY", href: "/specialities/urology", icon: <FaTint /> },
  { label: "NEUROLOGY", href: "/specialities/neurology", icon: <FaBrain /> },
  { label: "CARDIOLOGY", href: "/specialities/cardiology", icon: <FaHeartbeat /> },
  { label: "ORTHOPEDICS", href: "/specialities/orthopedics", icon: <FaBone /> },
  { label: "NEPHROLOGY", href: "/specialities/nephrology", icon: <FaStethoscope /> },
  { label: "PSYCHIATRIST", href: "/specialities/psychiatrist", icon: <FaSmile /> },
  { label: "PEDIATRICS", href: "/specialities/pediatrics", icon: <FaBaby /> },
  { label: "GENERAL SURGEON", href: "/specialities/general-surgeon", icon: <FaSyringe /> },
  { label: "PHYSIOTHERAPY", href: "/specialities/physiotherapy", icon: <FaRunning /> },
];

const SpecialitiesGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-center  text-green-700 font-bold text-3xl">Centers of Excellence</h2>
       <div className="w-16 border-b-4 border-green-600 mx-auto mt-3 rounded-full mb-5"></div>
      <div className="flex justify-center flex-wrap gap-6">
  {specialities.map((item, idx) => (
    <Link
  key={idx}
  to={`/specialities/${item.label.toLowerCase()}`}
  className="flex flex-col items-center justify-center p-6 w-[280px] h-[200px] border border-gray-200 rounded-lg bg-white shadow-sm transition duration-300 transform hover:scale-[1.02] hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
>
      <div className="text-green-700 text-4xl mb-3">{item.icon}</div>
      <h3 className="text-lg font-semibold text-gray-800 text-center">{item.label}</h3>
      <span className="text-green-600 hover:underline text-sm mt-2 font-medium">Learn More →</span>
    </Link>
  ))}
</div>

    </section>
  );
};

export default SpecialitiesGrid;
