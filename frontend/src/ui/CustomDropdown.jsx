// src/ui/CustomDropdown.jsx
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import {Link} from "react-router-dom"; // Only if using Next.js

const CustomDropdown = ({ label = "Select", items = [] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center hover:text-[#C5FA2D] gap-1 font-semibold">
        {label} <FaChevronDown className="text-[14px] mt-[2px]" />
      </button>

      {open && (
        <ul className="absolute top-full pl-1 py-2 pr-2 left-0 w-56 bg-white shadow-lg border z-50">
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
