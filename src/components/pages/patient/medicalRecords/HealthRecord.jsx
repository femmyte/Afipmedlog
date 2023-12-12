"use client";
import React, { useState } from "react";
import ContentBox from "./ContentBox";
import Accordion from "@/components/common/Accordion";
import CustomModal from "@/components/common/CustomModal";
import protocolDefinition from "@/protocols/healthRecord.json";
import checklistData from "@/utils/checklistData";
import { healthRecord } from "@/utils/healthRecordModel";
const HealthRecord = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [userDid, setUserDid] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [protocol, setProtocol] = useState("");
  const handleOpenModal = (title) => {
    // console.log(title);
    setProtocol(title);
    setOpenModal(true);
  };
  const handleSendRecord = async (e) => {
    e.preventDefault();
    setOpenModal(false);
    setIsSending(true);
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    const patientData = {
      data: userInfo[0].data,
      timeSent: currentTime,
      dateSent: currentDate,
      patientDid: myDid,
    };
    try {
      const userInfoProtocol = protocolDefinition;
      const { record } = await web5.dwn.records.write({
        data: patientData,
        message: {
          protocol: userInfoProtocol.protocol,
          protocolPath: protocol,
          schema: userInfoProtocol.types[protocol].schema,
          dataFormat: "application/json",
          recipient: userDid,
        },
      });
      const { status } = await record.send(userDid);
      if (status.code === 202) {
        setIsSending(false);
        setOpenSuccessModal(true);
        console.log("Record successfully sent to the recipient");
        setUserDid("");
        setClicked(true);
        setTimeout(() => {
          setClicked(false);
        }, 4000);
      } else {
        console.log("Error sending the record");
      }
    } catch (error) {
      console.error("error occured", error);
    }
  };
  if (isSending) {
    return (
      <div className="h-screen w-screen absolute top-0 left-0 right-0 bottom-0 bg-black/5">
        <p className="text-xl">Sending Message</p>
      </div>
    );
  }
  return (
    <div className="">
      <div className="">
        {healthRecord.map((item, i) => {
          const category = Object.keys(item)[0]; // Extract the category (e.g., "allergyRecord")
          const properties = item[category]; // Extract the properties object

          return (
            <div className="" key={i}>
              <Accordion title={category} handleClick={handleOpenModal}>
                <div className="grid grid-cols-12 w-full h-max">
                  {Object.entries(properties).map(([property, value]) => (
                    <div key={property} className="col col-span-3">
                      <ContentBox title={property} text={value} />
                    </div>
                  ))}
                </div>
              </Accordion>
            </div>
          );
        })}
      </div>
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
