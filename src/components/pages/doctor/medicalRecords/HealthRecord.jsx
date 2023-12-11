"use client";
import React, { useState } from "react";
import ContentBox from "./ContentBox";
import Accordion from "@/components/common/Accordion";
import CustomModal from "@/components/common/CustomModal";

const HealthRecord = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [userDid, setUserDid] = useState("");
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleSendRecord = (e) => {
    e.preventDefault();
    setOpenModal(false);
    setOpenSuccessModal(true);
  };
  return (
    <div className="">
      <Accordion title="General Health Record" handleClick={handleOpenModal}>
        <div className="grid grid-cols-12 w-full h-max">
          <div className="col col-span-3">
            <ContentBox title={"Height"} text={`140Cm`} />
          </div>
          <div className="col-span-3">
            <ContentBox title={"Weight:"} text={`140Cm`} />
          </div>
          <div className="col-span-3">
            <ContentBox title={"Blood Group:"} text={`140Cm`} />
          </div>
          <div className="col-span-3">
            <ContentBox title={"Genotype:"} text={`140Cm`} />
          </div>
        </div>
        <div className="grid grid-cols-12 w-full h-max">
          <div className="col col-span-4">
            <ContentBox
              title={"Resting Heart Rate: (Normal 60-100bmp)"}
              text={`140Cm`}
            />
          </div>
          <div className="col-span-4">
            <ContentBox
              title={"Blood Pressure: (Normal < 120/80mmHg)"}
              text={`140Cm`}
            />
          </div>
          <div className="col-span-4">
            <ContentBox
              title={"Body Mass Index BMI: (Normal 26.3)"}
              text={`140Cm`}
            />
          </div>
        </div>
        <div className="grid grid-cols-12 w-full h-max">
          <div className="col col-span-full">
            <ContentBox
              title={"Glucose Level: (Normal 60-80mm/dl"}
              text={`60mm/dl`}
            />
          </div>
        </div>
      </Accordion>
      <Accordion title="Immunization Records" handleClick={handleOpenModal}>
        <div className="grid grid-cols-12 w-full h-max">
          <div className="col col-span-3">
            <ContentBox title={"Name of Vaccine:"} text={`140Cm`} />
          </div>
          <div className="col-span-3">
            <ContentBox title={"Age::"} text={`140Cm`} />
          </div>
          <div className="col-span-2">
            <ContentBox title={"Method of Administration:"} text={`140Cm`} />
          </div>
          <div className="col-span-2">
            <ContentBox title={"Dose:"} text={`140Cm`} />
          </div>
          <div className="col-span-2">
            <ContentBox title={"Value:"} text={`140Cm`} />
          </div>
        </div>
      </Accordion>
      <CustomModal modalIsOpen={openModal} setIsOpen={setOpenModal}>
        <div className="py-[2.5rem] px-[3.62rem]">
          <p className="font-[600] text-[1.25rem] leading-[2.375rem] text-[#2E3646] text-center mb-8">
            Share Medical Record
          </p>
          {/* <p className='my-[1.5rem] font-[400] text-[0.875rem] leading-[1.5rem] text-[#5F6D7E] text-center'>
						What type of medical record ?
					</p> */}
          <form className="">
            <label
              htmlFor="userDid"
              className="block font-[400] text-[0.875rem] text-[#151515] mb-[0.5rem] "
            >
              Enter Recipients’ DID{" "}
            </label>
            <input
              className="w-[25rem] py-[0.75rem] px-4 rounded-[0.25rem] border border-[#E8E8E8] focus:border-blue-500 block	"
              placeholder="Recipients’ DID "
              id="userDid"
              type="text"
              name="userDid"
              value={userDid}
              onChange={(e) => setUserDid(e.target.value)}
            />
            <div className="flex flex-col items-center gap-6 justify-center mt-8">
              <button
                className="w-[10.125rem] py-[0.5rem] px-4 rounded-[0.25rem] bg-primaryBlue text-white flex justify-center items-center font-[500] leading-6 tracking-[0.02rem disabled:bg-[#DCE6FB]"
                disabled={!userDid}
                onClick={handleSendRecord}
              >
                Share Record
              </button>
            </div>
          </form>
        </div>
      </CustomModal>
      <CustomModal
        modalIsOpen={openSuccessModal}
        setIsOpen={setOpenSuccessModal}
      >
        <div className="py-[2.5rem] px-[3.62rem]">
          <p className="font-[600] text-[1.25rem] leading-[2.375rem] text-[#2E3646] text-center mb-8">
            Success
          </p>
          <p className="my-[2rem] font-[400] text-[0.875rem] leading-[1.5rem] text-[#5F6D7E] text-center">
            Your Immunization records has been to sent to this recipient.
          </p>

          <div className="flex flex-col items-center gap-6 justify-center mt-8">
            <button
              className="w-[10.125rem] py-[0.5rem] px-4 rounded-[0.25rem] bg-primaryBlue text-white flex justify-center items-center font-[500] leading-6 tracking-[0.02rem disabled:bg-[#DCE6FB]"
              onClick={() => setOpenSuccessModal(false)}
            >
              Done
            </button>
          </div>
        </div>
      </CustomModal>
    </div>
  );
};

export default HealthRecord;
