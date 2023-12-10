import React from "react";

const PersonalInformation = ({ userInfo }) => {
  return (
    <div
      className="w-full p-[1.25rem] mt-[1.25rem]"
      style={{ boxShadow: "4px 4px 24px 0px rgba(206, 206, 206, 0.24)" }}
    >
      <h3 className="text-[#151515] text-[1rem]">Personal Information</h3>
      <table className="text-left w-full">
        <thead className="">
          <tr className="text-left text-[0.875rem] text-[#727272]">
            <th className="font-normal pr-[2.06rem] pt-[1.25rem] pb-[0.5rem]">
              Date Of Birth
            </th>
            <th className="font-normal pr-[2.06rem] pt-[1.25rem] pb-[0.5rem]">
              Gender
            </th>
            <th className="font-normal pr-[2.06rem] pt-[1.25rem] pb-[0.5rem]">
              Marital Status
            </th>
            <th className="font-normal pr-[2.06rem] pt-[1.25rem] pb-[0.5rem]">
              Address
            </th>
            <th className="font-normal pl-[2.06rem] pt-[1.25rem] pb-[0.5rem]">
              City
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-left text-[#151515] text-[1rem]">
            <td>{userInfo?.dateOfBirth}</td>
            <td>{userInfo?.gender}</td>
            <td>{userInfo?.maritalStatus}</td>
            <td>{userInfo?.address}</td>
            <td className="pl-[2.06rem]">{userInfo?.city}</td>
          </tr>
        </tbody>
      </table>
      <table className="w-full ">
        <thead>
          <tr className="text-left text-[0.875rem] text-[#727272]">
            <th className="font-normal pr-[3.10rem] pt-[1.25rem] pb-[0.5rem]">
              State
            </th>
            <th className="font-normal pr-[0.6rem] pt-[1.25rem] pb-[0.5rem]">
              Country
            </th>
            <th className="font-normal  pt-[1.25rem] pb-[0.5rem]">
              Phone number
            </th>
            <th className="font-normal pr-[2.06rem] pt-[1.25rem] pb-[0.5rem]">
              Serial number
            </th>
            <th className="font-normal  pt-[1.25rem] pb-[0.5rem]">
              Registered on
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-left text-[#151515] text-[1rem]">
            <td>{userInfo?.stateOfOrigin}</td>
            <td>{userInfo?.nationality}</td>
            <td>{userInfo?.phoneNumber}</td>
            <td>{userInfo?.userId ? userInfo?.userId : "-"}</td>
            <td className="pl-[2.06rem]">
              {userInfo?.createdDate ? userInfo?.createdDate : "-"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PersonalInformation;
