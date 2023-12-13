import React from "react";

const PrimaryHealthInformation = ({ userInfo }) => {
  return (
    <div
      className="w-full p-[1.25rem] mt-[1.25rem] rounded"
      style={{ boxShadow: "4px 4px 24px 0px rgba(206, 206, 206, 0.24)" }}
    >
      <h3 className="text-[#151515] text-[1rem]">
        Primary Medical Provider Information
      </h3>
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
              Specialty
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
            <td>{userInfo?.firstName ? userInfo?.firstName : "-"} </td>
            <td>{userInfo?.lastName ? userInfo?.lastName : "-"}</td>
            <td>{userInfo?.speciality ? userInfo?.speciality : "-"}</td>
            <td>{userInfo?.gender ? userInfo?.gender : "-"}</td>
            <td className="pl-[2.06rem]">
              {userInfo?.address ? userInfo?.address : "-"}
            </td>
          </tr>
          <tr className="text-left text-[0.875rem] text-[#727272]">
            <th className="font-normal pt-[1.25rem] pb-[0.5rem]">City</th>
            <th className="font-normal pr-[3.10rem] pt-[1.25rem] pb-[0.5rem]">
              State
            </th>
            <th className="font-normal pr-[0.6rem] pt-[1.25rem] pb-[0.5rem]">
              Country
            </th>
            <th className="font-normal  pt-[1.25rem] pb-[0.5rem]">
              Phone number
            </th>
          </tr>
          <tr className="text-left text-[#151515] text-[1rem]">
            <td>{userInfo?.city ? userInfo?.city : "-"}</td>
            <td>{userInfo?.stateOfOrigin ? userInfo?.stateOfOrigin : "-"}</td>
            <td>{userInfo?.nationality ? userInfo?.nationality : "-"}</td>
            <td>{userInfo?.phoneNumber ? userInfo?.phoneNumber : "-"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PrimaryHealthInformation;
