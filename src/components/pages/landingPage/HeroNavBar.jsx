"use client";
import { useStateContext } from "@/state/AppContext";
import Link from "next/link";
import React from "react";

const HeroNavBar = ({ checkUserExist, handleGetStarted }) => {
  let { setAuthModal } = useStateContext();

  return (
    <>
      <nav className="flex justify-between items-center shadow-sm shadow-gray-200 w-full h-[5.5rem] py-[1.5rem] px-[6.25rem]">
        <Link href={"/"} className="text-[#145AE2] text-[1.5rem] ">
          AFIP MedLog
        </Link>
        <ul className="flex">
          <li className="mr-[2.56rem]">Home</li>
          <li className="mr-[2.56rem]">About Us</li>
          <li className="mr-[2.56rem]">Services</li>
          <li>Find a doctor</li>
        </ul>
        <button
          onClick={handleGetStarted}
          className="w-[11.875rem] py-[0.5rem] px-[1rem] rounded-[0.25rem] bg-primaryBlue text-white flex justify-center items-center font-[500] leading-6 tracking-[0.02rem "
        >
          {checkUserExist ? "Go to Dashboard" : "Get started"}
        </button>
      </nav>
    </>
  );
};

export default HeroNavBar;
