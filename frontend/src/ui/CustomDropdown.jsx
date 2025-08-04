// src/ui/CustomDropdown.jsx
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const CustomDropdown = ({ label = "Select", items = [] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Button */}
      <button className="flex items-center hover:text-[#C5FA2D] gap-1 font-semibold transition-colors">
        {label}
        <FaChevronDown
          className={`text-[14px] mt-[2px] transform transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <ul
          className="absolute top-full  left-5  w-56 bg-white shadow-lg border z-50
                     transition-all duration-300 ease-in-out opacity-100"
        >
          {items.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                className="block px-4 py-2 text-sm text-[#333] hover:bg-cyan-700 hover:text-white cursor-pointer transition-all"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
