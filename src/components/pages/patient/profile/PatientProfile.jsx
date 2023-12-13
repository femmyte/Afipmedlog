import React from "react";
import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";

const PatientProfile = ({ userInfo }) => {
  return (
    <div
      className="w-full p-[1.25rem] rounded"
      style={{ boxShadow: "4px 4px 24px 0px rgba(206, 206, 206, 0.24)" }}
    >
      {/* <h2 className="font-medium text-[2rem]">Profile</h2> */}
      <div className="flex w-full justify-between items-start px-[1.25rem]">
        <div className="flex items-center">
          <Image
            src="/images/user.png"
            alt="user image"
            width={128}
            height={128}
            className="mr-[1.85rem]"
          />
          <div>
            <h3 className="text-[#151515] text-[1.25rem]">
              {userInfo?.firstName} {userInfo?.lastName}
            </h3>
            <p className="py-2 text-[0.875rem]"> {userInfo?.email}</p>
          </div>
        </div>
        <div className="text-[#145AE2] flex align-top">
          <Image
            src="/images/icons/call-calling.svg"
            alt="call icon"
            width={16}
            height={16}
            className="ml-[2rem]"
          />
          <Image
            src="/images/icons/video.svg"
            alt="video icon"
            width={16}
            height={16}
            className="ml-[2rem]"
          />
          <Image
            src="/images/icons/message.svg"
            alt="message icon"
            width={16}
            height={16}
            className="ml-[2rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
