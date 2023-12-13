import React from "react";
import OverviewDoctors from "./OverviewDoctors";
import { GoChevronRight } from "react-icons/go";

const Doctors = () => {
  return (
    <div
      className="md:w-[16.1875rem] md:h-[9.9375rem] flex flex-col justify-center mt-[2rem] gap-[1.2rem] py-[1.5rem] px-[1rem]  p-2"
      style={{ boxShadow: "4px 4px 24px 0px rgba(206, 206, 206, 0.24)" }}
    >
      <div className="flex justify-between">
        <h2>Hello Doctors</h2>
        <div className="flex items-center text-[#145AE2]">
          <button className="text-sm">See All</button>
          {/* {IconComponent && <IconComponent />} */}
          <GoChevronRight />
        </div>
      </div>
      <div className="flex">
        <OverviewDoctors
          img="/images/user.png"
          name="Dr Peace"
          title="Cardiologist"
        />

        <OverviewDoctors
          img="/images/user.png"
          name="Dr Peace"
          title="Cardiologist"
        />

        <OverviewDoctors
          img="/images/user.png"
          name="Dr Peace"
          title="Cardiologist"
        />
      </div>
    </div>
  );
};

export default Doctors;
