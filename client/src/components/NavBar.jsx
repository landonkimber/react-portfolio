import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaEnvelope,
  FaCog,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 right-0 h-screen flex">
      <button
        className="bg-white p-2 rounded-l-full focus:outline-none h-[7vh] my-auto border-t-2 border-b-2 border-l-2 border-[#56b5b4]"
        onClick={toggleNavbar}
      >
        {isOpen ? (
          <FaChevronRight size={24} className="text-[#56b5b4]" />
        ) : (
          <FaChevronLeft size={24} className="text-[#56b5b4]" />
        )}
      </button>

      <nav
        className={`flex flex-col justify-center bg-gradient-to-b from-[#62b1c8] to-[#4abea0] overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "w-28 px-5" : "w-0 px-0"
        }`}
      >
        <ul className="list-none p-0 flex flex-col items-center h-4/5 justify-between">
          <li>
            <Link
              to="/"
              className="flex flex-col items-center text-white no-underline"
            >
              <FaHome size={28} />
              <span className="mt-2 text-sm">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="flex flex-col items-center text-white no-underline"
            >
              <FaUser size={28} />
              <span className="mt-2 text-sm">About</span>
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="flex flex-col items-center text-white no-underline"
            >
              <FaCode size={28} />
              <span className="mt-2 text-sm">Projects</span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex flex-col items-center text-white no-underline"
            >
              <FaEnvelope size={28} />
              <span className="mt-2 text-sm">Contact</span>
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className="flex flex-col items-center text-white no-underline"
            >
              <FaCog size={28} />
              <span className="mt-2 text-sm">Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
