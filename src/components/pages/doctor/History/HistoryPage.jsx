import React from "react";
import Image from "next/image";
import { GoChevronDown } from "react-icons/go";

const HistoryPage = () => {
  return (
    <div
      className="p-[1.5rem]"
      style={{ boxShadow: "4px 4px 24px 0px rgba(206, 206, 206, 0.24)" }}
    >
      <div className="">
        <h3 className="text-[2rem] font-medium text-[#151515]">History</h3>
        <p className="text-[0.875rem] text-[#5F5F5F]">
          Patient confidentiality is our priority.
        </p>
      </div>
      <div className="flex justify-between mt-[1.5rem]">
        <div className="flex">
          <div className="flex border-[0.4px] bg-[#F9F9F9] border-[#D1D1D1]  mr-[1rem] p-[0.5rem] rounded-[0.25rem]">
            <Image
              src="/images/icons/filter.svg"
              width={24}
              height={24}
              className="mr-[0.8rem]"
            />
            <button className="text-[0.875rem] ">Filter</button>
          </div>
          <div className="flex items-center text-[0.875rem] text-[#7F7F7F] border-[0.4px] bg-[#F9F9F9] border-[#D1D1D1]  mr-[1rem] p-[0.5rem]  rounded-[0.25rem]">
            <button className="text-[0.875rem] mr-[0.8rem]">
              Doctor’s name
            </button>
            <GoChevronDown />
          </div>
          <div className="flex items-center text-[0.875rem] text-[#7F7F7F] border-[0.4px] bg-[#F9F9F9] border-[#D1D1D1]  mr-[1rem] p-[0.5rem] rounded-[0.25rem]">
            <button className="text-[0.875rem] mr-[0.8rem]">Specialty</button>
            <GoChevronDown />
          </div>
          <div className="flex items-center text-[0.875rem] text-[#7F7F7F] border-[0.4px] bg-[#F9F9F9] border-[#D1D1D1]  mr-[1rem] p-[0.5rem] rounded-[0.25rem]">
            <button className="text-[0.875rem] mr-[0.8rem]">Department</button>
            <GoChevronDown />
          </div>
        </div>
        <button className="bg-[#145AE2] px-[1rem] text-white rounded-[0.25rem]">
          Add New Record
        </button>
      </div>
    </div>
  );
};

export default HistoryPage;
