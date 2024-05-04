import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <footer
      className={`fixed bottom-2 -mb-8 -ml-8 left-2 transform rotate-45 transition-all duration-1000 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-0 -translate-x-full"
      }`}
    >
      <div className="relative">
        <FaHeart className="text-[#22d3ee] w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" />
        <div className="absolute -rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-xxs sm:text-xs md:text-sm lg:text-base text-white">
            Landon Kimber
          </p>
          <p className="text-xxs sm:text-xs md:text-sm lg:text-base text-white">
            2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
