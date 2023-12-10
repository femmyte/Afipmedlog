import Link from "next/link";
import React from "react";

const PatientProfile = () => {
  return (
    <div>
      <div className="flex gap-x-4 items-center">
        <Link
          href={"#"}
          className="text-[#b6b6b6] font-[500] text-1.25rem] leading-7"
        >
          Patients
        </Link>
        <p className="text-[1.25rem] font-[500] leading-[1.75rem] text-[#151515]">
          Ms. Phoebe’s profile
        </p>
      </div>
      <div className="grid grid-cols-12 gap-x-8">
        <div className=" col-span-8">
          <div
            className="p-[1.125rem] inline-flex items-start gap-[12rem] rounded"
            style={{ boxShadow: "4px 4px 24px 0px rgba(206, 206, 206, 0.24)" }}
          ></div>
        </div>
        <div className=" col-span-4"></div>
      </div>
    </div>
  );
};

export default PatientProfile;
