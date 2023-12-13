import React from "react";
import { GoChevronRight } from "react-icons/go";

const GeneralDetails = () => {
  return (
    <div
      className="w-full md:w-[16rem]  p-2 mt-[2rem]"
      style={{ boxShadow: "4px 4px 24px 0px rgba(206, 206, 206, 0.24)" }}
    >
      <div className="flex justify-between">
        <h2> General Details</h2>
        <div className="flex items-center text-[#145AE2]">
          <button className="text-sm">See All</button>
          <GoChevronRight />
        </div>
      </div>
      <div className="flex justify-between items-center text-center p-2">
        <div className="px-[0.25rem] border-r-[1px] border-gray-300  py-2 text-[0.625rem]">
          <p className="">Blood Group</p>
          <p>A+</p>
        </div>
        <div className="px-[0.25rem] border-r-[1px] border-gray-300  py-2 text-[0.625rem]">
          <p className="">Genotype</p>
          <p>As</p>
        </div>
        <div className="px-[0.25rem] border-r-[1px] border-gray-300  py-2 text-[0.625rem]">
          <p className="">Height</p>
          <p>140cm</p>
        </div>
        <div className="px-[0.25rem]  mr-2 py-2 text-xs">
          <p className="">Weight</p>
          <p>50kg</p>
        </div>
      </div>
    </div>
  );
};

export default GeneralDetails;
