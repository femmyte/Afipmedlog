import React from "react";
import FindDoctorCards from "./FindDoctorCards";

const FindDoctor = () => {
  return (
    <div className="px-[6.25rem] py-[4.5rem]">
      <div className="flex flex-col text-center justify-center items-center">
        <div className="flex justify-center items-center">
          <hr
            style={{
              width: "6.9375rem",
              height: "0.25rem",
              fontSize: "2rem",
              marginRight: "1rem",
              borderRadius: "0.5rem",
              background:
                "linear-gradient(270deg, #145AE2 38.94%, rgba(20, 90, 226, 0.00) 95.52%)",
            }}
          />
          <h2 className="text-[1.5rem] font-medium">Find a Doctor</h2>
        </div>
        <p className="md:w-[38.0625rem] w-full px-[1.5rem]">
          Search through our available doctors to get a doctor in the specialty
          you desire.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <FindDoctorCards img={"doctor1"} />
        <FindDoctorCards img={"doctor2"} />
        <FindDoctorCards img={"doctor3"} />
        <FindDoctorCards img={"doctor4"} />
        <FindDoctorCards img={"doctor5"} />
        <FindDoctorCards img={"doctor6"} />
      </div>
    </div>
  );
};

export default FindDoctor;
