import React from "react";

const CareerInformation = ({ careerInfo }) => {
  return (
    <div
      className="w-full mt-[2rem]"
      style={{ boxShadow: "4px 4px 24px 0px rgba(206, 206, 206, 0.24)" }}
    >
      <h3 className="text-[#151515] text-[1rem]">Career Information</h3>
      <table className="">
        <thead className="">
          <tr className="text-left text-[0.875rem] text-[#727272]">
            <th className="font-normal pr-[3.12rem] pt-[1.25rem] pb-[0.5rem]">
              Specialty
            </th>
            <th className="font-normal pr-[3.12rem] pt-[1.25rem] pb-[0.5rem]">
              Department
            </th>
            <th className="font-normal pr-[3.12rem] pt-[1.25rem] pb-[0.5rem]">
              Years of experience
            </th>
            <th className="font-normal pr-[3.12rem] pt-[1.25rem] pb-[0.5rem]">
              Success cases
            </th>
            <th className="font-normal pr-[3.12rem] pt-[1.25rem] pb-[0.5rem]">
              Failed cases
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-left text-[#151515] text-[1rem]">
            <td>{careerInfo?.specialty}</td>
            <td>Cardiology</td>
            <td>{careerInfo?.yearOfExperience}</td>
            <td>{careerInfo?.successCases}</td>
            <td>{careerInfo?.failedCases}</td>
          </tr>
        </tbody>
      </table>
      <table className="">
        <thead>
          <tr className="text-left text-[0.875rem] text-[#727272]">
            <th className="font-normal pr-[3.12rem] pt-[1.25rem] pb-[0.5rem]">
              Surgeries
            </th>
            <th className="font-normal pt-[1.25rem] pb-[0.5rem]">
              Registered on
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-left text-[#151515] text-[1rem]">
            <td>20</td>
            <td> {careerInfo?.createdDate ? careerInfo?.createdDate : "-"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CareerInformation;
