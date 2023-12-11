"use client";
import React from "react";
import OverviewDoctors from "./OverviewDoctors";
import { GoChevronRight } from "react-icons/go";
import { useStateContext } from "@/state/AppContext";

const Doctors = () => {
  let { sharedHealthRecord } = useStateContext();
  return (
    <div
      className="w-[16.1875rem] h-[9.9375rem] gap-[1.2rem] py-[1.5rem] px-[1rem]  p-2"
      style={{ boxShadow: "4px 4px 24px 0px rgba(206, 206, 206, 0.24)" }}
    >
      <div className="flex justify-between">
        <h2>Patients</h2>
        <div className="flex items-center text-[#145AE2]">
          <button className="text-sm">See All</button>
          {/* {IconComponent && <IconComponent />} */}
          <GoChevronRight />
        </div>
      </div>
      <div className="flex">
        {sharedHealthRecord ? (
          sharedHealthRecord
            .slice(0, 3)
            .map((record, id) => (
              <OverviewDoctors
                key={id}
                img="/images/user.png"
                name={record?.data.personalInfo.lastName}
              />
            ))
        ) : (
          <OverviewDoctors img="/images/user.png" name="Peace" />
        )}
      </div>
    </div>
  );
};

export default Doctors;
