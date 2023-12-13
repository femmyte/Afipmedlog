import { useStateContext } from "@/state/AppContext";
import Link from "next/link";
import React, { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const HeroNavBar = ({ checkUserExist, handleGetStarted }) => {
  const { setAuthModal } = useStateContext();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollTo = (elementId) => {
    closeMobileMenu();
    scroll.scrollTo(document.getElementById(elementId).offsetTop - 50, {
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <header>
      <nav className="flex flex-col sm:flex-row justify-between items-center shadow-sm shadow-gray-200 w-full sm:h-[7rem] py-[1.5rem] sm:px-[2rem]">
        <div className="w-full flex flex-row justify-between items-center px-6 pb-2 ">
          <Link href={"/"} className="text-[#145AE2] text-[1.5rem]" passHref>
            AFIP MedLog
          </Link>
          {/* Hamburger menu icon for mobile */}
          <div className="sm:hidden cursor-pointer" onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </div>
        </div>
        {/* Mobile menu */}
        <div
          className={`${
            isMobileMenuOpen
              ? "flex flex-col items-center justify-start  bg-black h-screen w-screen text-white z-50"
              : "hidden sm:flex items-center gap-x-10"
          } `}
        >
          <ul
            className={`flex flex-col gap-y-[2rem] sm:gap-y-0 sm:flex-row mt-[5rem] sm:mt-0 sm:flex text-center`}
          >
            <li className="mb-[1rem] sm:mb-0 sm:mr-[2.56rem] cursor-pointer ">
              <a onClick={() => scrollTo("home")}>Home</a>
            </li>
            <li className="mb-[1rem] sm:mb-0 sm:mr-[2.56rem] cursor-pointer md:w-[8rem]">
              <a onClick={() => scrollTo("about")}>About Us</a>
            </li>
            <li className="mb-[1rem] sm:mb-0 sm:mr-[2.56rem] cursor-pointer md:w-[8rem]">
              <a onClick={() => scrollTo("service")}>Services</a>
            </li>
            <li className="mb-[1rem] sm:mb-0 cursor-pointer md:w-[8rem]">
              <a onClick={() => scrollTo("doctor")}>Find a doctor</a>
            </li>
          </ul>
          <button
            onClick={handleGetStarted}
            className="w-[11.875rem] py-[0.5rem] mt-[2rem] sm:mt-0 px-[1rem] rounded-[0.25rem] bg-primaryBlue text-white flex justify-center items-center font-[500] leading-6 tracking-[0.02rem]"
          >
            {checkUserExist ? "Go to Dashboard" : "Get started"}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default HeroNavBar;
