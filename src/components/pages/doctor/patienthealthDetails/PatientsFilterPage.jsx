"use client";
import React from "react";
import Image from "next/image";
import { GoChevronDown } from "react-icons/go";
import doctorsData from "@/utils/doctorsData";
import { useStateContext } from "@/state/AppContext";
import { useRouter } from "next/navigation";
import useWeb5 from "@/state/useWeb5";

const PatientsFilterPage = () => {
  const router = useRouter();
  const { web5, myDid, initWeb5 } = useWeb5();
  let { sharedHealthRecord } = useStateContext();
  console.log(sharedHealthRecord);
  const handleShowUserRecord = (id) => {
    router.push(`/doctor/patients/${id}`);
  };
  return (
    <div>
      <div>
        <h3 className="text-[2rem] font-medium text-[#151515]">Patients</h3>
        <p className="text-[0.875rem] text-[#5F5F5F]">
          Patient confidentiality is our priority.
        </p>
      </div>
      <div className="flex mt-[1.5rem]">
        <div className="flex border-[0.4px] bg-[#F9F9F9] border-[#D1D1D1]  mr-[1rem] p-[0.5rem] rounded-[0.25rem]">
          <Image
            src="/images/icons/filter.svg"
            width={24}
            height={24}
            className="mr-[0.8rem]"
          />
          <button className="text-[0.875rem] ">Filter</button>
        </div>
        <div className="flex items-center text-[0.875rem] text-[#7F7F7F] border-[0.4px] bg-[#F9F9F9] border-[#D1D1D1]  mr-[1rem] p-[0.5rem]  rounded-[0.25rem]">
          <button className="text-[0.875rem] mr-[0.8rem]">
            Patients’ name
          </button>
          <GoChevronDown />
        </div>
        <div className="flex items-center text-[0.875rem] text-[#7F7F7F] border-[0.4px] bg-[#F9F9F9] border-[#D1D1D1]  mr-[1rem] p-[0.5rem] rounded-[0.25rem]">
          <button className="text-[0.875rem] mr-[0.8rem]">Treatment</button>
          <GoChevronDown />
        </div>
        <div className="flex items-center text-[0.875rem] text-[#7F7F7F] border-[0.4px] bg-[#F9F9F9] border-[#D1D1D1]  mr-[1rem] p-[0.5rem] rounded-[0.25rem]">
          <button className="text-[0.875rem] mr-[0.8rem]">Date Added</button>
          <GoChevronDown />
        </div>
      </div>
      <div>
        <table className="w-full">
          <thead>
            <tr className="text-[0.875rem]">
              <td className="font-normal py-[0.88rem] border-b-[1px]">
                Patients’ name
              </td>
              <td className="font-normal py-[0.88rem] border-b-[1px]">
                Phone number
              </td>
              <td className="font-normal py-[0.88rem] border-b-[1px]">
                Email address
              </td>
              <td className="font-normal py-[0.88rem] border-b-[1px]">
                Country
              </td>
              <td className="font-normal py-[0.88rem] border-b-[1px]">city</td>
              <td className="font-normal py-[0.88rem] border-b-[1px]">
                Gender
              </td>
              <td className="font-normal py-[0.88rem] border-b-[1px]">
                Date added
              </td>
              <td className="font-normal py-[0.88rem] border-b-[1px]">
                Status
              </td>
              <td className="font-normal py-[0.88rem] border-b-[1px]"></td>
            </tr>
          </thead>
          <tbody>
            {sharedHealthRecord &&
              sharedHealthRecord.map((item, id) => (
                <tr
                  key={id}
                  className="text-[#151515] text-[0.75rem] cursor-pointer"
                  onClick={() => handleShowUserRecord(id)}
                >
                  <td className="py-[0.88rem] border-b-[1px] border-[#F2F2F2]">
                    {`${item?.data?.data?.personalInfo?.firstName} ${item?.data?.data?.personalInfo?.lastName}`}
                  </td>
                  <td className="py-[0.88rem] border-b-[1px] border-[#F2F2F2]">
                    {item?.data?.data?.personalInfo?.phoneNumber}
                  </td>
                  <td className="py-[0.88rem] border-b-[1px] border-[#F2F2F2]">
                    {item?.data?.data?.personalInfo?.email}
                  </td>
                  <td className="py-[0.88rem] border-b-[1px] border-[#F2F2F2]">
                    {item?.data?.data?.personalInfo?.nationality}
                  </td>
                  <td className="py-[0.88rem] border-b-[1px] border-[#F2F2F2]">
                    {item?.data?.data?.personalInfo?.city}
                  </td>
                  <td className="py-[0.88rem] border-b-[1px] border-[#F2F2F2]">
                    {item?.data?.data?.personalInfo?.gender}
                  </td>
                  <td className="py-[0.88rem] border-b-[1px] border-[#F2F2F2]">
                    {item?.data?.data?.createdDate}
                  </td>
                  <td className="py-[0.88rem] border-b-[1px] border-[#F2F2F2] text-[#16B61C]">
                    Active
                  </td>
                  <td className="py-[0.88rem] border-b-[1px] border-[#F2F2F2]">
                    ...
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientsFilterPage;
