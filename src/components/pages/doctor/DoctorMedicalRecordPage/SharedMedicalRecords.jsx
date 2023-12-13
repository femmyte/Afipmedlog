"use client";
import React from "react";
import sharedMedicalRecords from "@/utils/sharedMedicalRecords";
import { GoChevronRight } from "react-icons/go";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { useStateContext } from "@/state/AppContext";
import { useRouter } from "next/navigation";

const SharedMedicalRecords = (props) => {
  const router = useRouter();
  let { sharedHealthRecord, setSharedHealthRecord } = useStateContext();
  const handleShowUserRecord = (id) => {
    router.push(`/doctor/medical-records/${id}`);
  };
  console.log(sharedHealthRecord);
  return (
    <div
      className="w-full mb-[1.5rem] px-4 py-6"
      style={{ boxShadow: "4px 4px 24px 0px rgba(206, 206, 206, 0.24)" }}
    >
      <div className="flex justify-between py-[1.25rem] font-medium rounded-[0.25rem]">
        <h3>{props.heading}</h3>
        {/* <div className="flex items-center text-[0.75rem] text-[#145AE2]">
          <button className="text-[0.75rem]">See All</button>
          <GoChevronRight />
        </div> */}
      </div>
      <table className="w-full text-left ">
        <thead>
          <tr className="text-[0.875rem] py-[0.88rem] ">
            <th className="font-normal">Patients</th>
            <th className="font-normal">Record</th>
            <th className="font-normal">Date Shared</th>
            <th className="font-normal">Time shared</th>
          </tr>
        </thead>
        {sharedHealthRecord &&
          sharedHealthRecord.map((item, id) => (
            <tbody key={id}>
              <tr
                className="text-[0.75rem] cursor-pointer"
                onClick={() => handleShowUserRecord(id)}
              >
                <td className="py-[0.88rem]">{`${item?.data?.personalInfo?.firstName} ${item?.data?.personalInfo?.lastName}`}</td>
                <td className="py-[0.88rem]">
                  {item?.data?.personalInfo?.gender}
                </td>
                <td className="py-[0.88rem]">{item?.dateSent}</td>
                <td className="py-[0.88rem]">{item?.timeSent}</td>
                <td className="py-[0.88rem] text-[1rem] text-[#145AE2]">
                  {" "}
                  <HiOutlineDocumentArrowDown />
                </td>
                <td className="py-[0.88rem]">...</td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
};

export default SharedMedicalRecords;
