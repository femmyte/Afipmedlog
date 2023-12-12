import React from "react";
import { CiCirclePlus } from "react-icons/ci";

const DocumentComponent = ({ title }) => {
  return (
    <div
      className="w-[22.25rem] p-[1.25rem]"
      style={{ boxShadow: "4px 4px 24px 0px rgba(206, 206, 206, 0.24)" }}
    >
      <div className="flex items-center justify-between">
        <h4 className="text-[#151515] text-[1rem]">{title}</h4>
        <div className="flex items-center gap-x-3">
          <CiCirclePlus size={17} className="text-primaryBlue font-bold" />
          <h4 className=" text-primaryBlue text-[1rem]">Add New File</h4>
        </div>
      </div>
      <div className="my-[3rem]">
        <h4 className="text-[#151515] text-[1.5rem] text-center">
          No {title} Available
        </h4>
      </div>
    </div>
  );
};

export default DocumentComponent;
