import React from "react";
import { GoChevronRight } from "react-icons/go";
import overviewMedicalRecords from "@/utils/OverviewMedicalRecords";
import { IoIosArrowRoundForward } from "react-icons/io";

const MedicalRecords = (props) => {
  return (
    <div
      className="w-full mt-[1rem] p-3"
      style={{ boxShadow: "4px 4px 24px 0px rgba(206, 206, 206, 0.24)" }}
    >
      <div className="flex justify-between">
        <h2>Medical Records</h2>
        <div className="flex items-center text-[#145AE2]">
          <button className="text-sm">See All</button>
          <GoChevronRight />
        </div>
      </div>
      <div className="p-3">
        {overviewMedicalRecords.map((item) => (
          <div
            key={item.id}
            className="flex justify-between py-4 px-2 border-b"
          >
            <p>{item.records}</p>
            <IoIosArrowRoundForward
              size={25}
              className="text-[#145AE2] cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalRecords;
