"use client";
import React, { useState } from "react";
import { MdChevronRight } from "react-icons/md";

const Accordion = ({ title, children, handleClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-4">
      <div
        className="flex justify-between items-center my-[1.5rem] py-4 border-b border-b-[#DCDCDC]"
        onClick={toggleAccordion}
        style={{ cursor: "pointer" }}
      >
        <p className="text-[1.25rem] text-primaryGreen leading-[1.75rem] font-[500] tracking-[0.025rem]">
          {title}
        </p>
        {isOpen ? (
          <MdChevronRight size={30} className="text-primaryGreen" />
        ) : (
          <MdChevronRight size={30} className="text-black" />
        )}
      </div>
      {isOpen && (
        <div className="my-[1.5rem] flex justify-end">
          <button
            className="text-[0.875rem] text-primaryGreen font-[400] leading-[1.25rem]"
            onClick={handleClick}
          >
            Share Record
          </button>
        </div>
      )}
      {isOpen && <div className="">{children}</div>}
    </div>
  );
};

export default Accordion;
