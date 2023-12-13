import React from "react";

const GuardianInformation = ({ userInfo }) => {
  return (
    <div
      className="w-full p-[1.25rem] mt-[1.25rem] rounded"
      style={{ boxShadow: "4px 4px 24px 0px rgba(206, 206, 206, 0.24)" }}
    >
      <h3 className="text-[#151515] text-[1rem]">Guardian Information</h3>
      <div className="overflow-x-auto">
        <table className="text-left w-full">
          <thead className="">
            <tr className="text-left text-[0.875rem] text-[#727272]">
              <th className="font-normal pr-[2.06rem] pt-[1.25rem] pb-[0.5rem]">
                First name
              </th>
              <th className="font-normal pr-[2.06rem] pt-[1.25rem] pb-[0.5rem]">
                Last name
              </th>
              <th className="font-normal pr-[2.06rem] pt-[1.25rem] pb-[0.5rem]">
                Relationship
              </th>
              <th className="font-normal pr-[2.06rem] pt-[1.25rem] pb-[0.5rem]">
                Gender
              </th>
              <th className="font-normal pl-[2.06rem] pt-[1.25rem] pb-[0.5rem]">
                Address
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-left text-[#151515] text-[1rem]">
              <td>{userInfo?.firstName}</td>
              <td>{userInfo?.lastName}</td>
              <td>{userInfo?.relationship}</td>
              <td>{userInfo?.gender}</td>
              <td className="pl-[2.06rem]">{userInfo?.address}</td>
            </tr>
            <tr className="text-left text-[0.875rem] text-[#727272]">
              <th className="font-normal pr-[3.10rem] pt-[1.25rem] pb-[0.5rem]">
                City
              </th>
              <th className="font-normal pr-[0.6rem] pt-[1.25rem] pb-[0.5rem]">
                State
              </th>
              <th className="font-normal  pt-[1.25rem] pb-[0.5rem]">Country</th>
              <th className="font-normal pr-[2.06rem] pt-[1.25rem] pb-[0.5rem]">
                Phone number
              </th>
            </tr>
            <tr className="text-left text-[#151515] text-[1rem]">
              <td>{userInfo?.city}</td>
              <td>{userInfo?.stateOfOrigin}</td>
              <td>{userInfo?.nationality}</td>
              <td>{userInfo?.phoneNumber}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GuardianInformation;
