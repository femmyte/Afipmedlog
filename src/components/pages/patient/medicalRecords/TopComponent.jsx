"use client";
import CustomModal from "@/components/common/CustomModal";
import { useStateContext } from "@/state/AppContext";
import { copyToClipboard } from "@/utils/utilities";
import React, { useState } from "react";
import { FaClipboard, FaClipboardCheck } from "react-icons/fa";
import { FiClipboard } from "react-icons/fi";

const TopComponent = () => {
  let { myDid, userRole } = useStateContext();
  const [copiedDid, setCopiedDid] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const handleClick = () => {
    setOpenModal(true);
  };
  const handleCopyDid = () => {
    setCopiedDid(true);
    copyToClipboard(myDid);
    setTimeout(() => {
      setCopiedDid(false);
    }, 4000);
  };
  return (
    <div className="flex items-center justify-between mb-[2.5rem] relative">
      <div className="">
        <h1 className="font-[500] text-[2rem] leading-[2.5rem] text-[#151515] tracking-[0.04rem] mb-[0.5rem">
          Medical Records
        </h1>
        <p className="font-[400] text-[0.875rem] leading-[1.25rem] text-[#5F5F5F] tracking-[0.01754rem]">
          Be in charge of your medical records, history and your identity.
        </p>
      </div>
      <div className="flex items-center gap-x-[2rem]">
        <button
          className="w-[10.125rem] py-[0.5rem] px-4 rounded-[0.25rem] bg-primaryBlue text-white flex gap-x-3 items-center font-[500] leading-6 tracking-[0.02rem"
          onClick={handleCopyDid}
        >
          <FiClipboard />
          <span>Copy Did </span>
        </button>

        {/* <div className="flex items-center gap-x-[2rem]">
          <button
            className="w-[10.125rem] py-[0.5rem] px-4 rounded-[0.25rem] border border-[#16B61C]  flex justify-center items-center text-[#16b61c] font-[500] leading-6 tracking-[0.02rem]"
            onClick={handleClick}
          >
            Share Record
          </button> */}
        {/* <button
							className='w-[10.125rem] py-[0.5rem] px-4 rounded-[0.25rem] bg-primaryBlue text-white flex justify-center items-center font-[500] leading-6 tracking-[0.02rem'
							onClick={handleClick}
						>
							Add New Record
						</button> */}
        {/* </div> */}
      </div>
      <CustomModal modalIsOpen={openModal} setIsOpen={setOpenModal}>
        <div className="py-[2.5rem] px-[3.62rem]">
          <p className="font-[600] text-[1.25rem] leading-[2.375rem] text-[#2E3646] text-center">
            Add New Medical Record
          </p>
          <p className="my-[1.5rem] font-[400] text-[0.875rem] leading-[1.5rem] text-[#5F6D7E] text-center">
            What type of medical record ?
          </p>
        </div>
      </CustomModal>
      {copiedDid && (
        <div className="absolute px-8 py-2 rounded-md bg-green-600 top-0 right-0">
          <p className="text-white">Did Copied successfully</p>
        </div>
      )}
    </div>
  );
};

export default TopComponent;
