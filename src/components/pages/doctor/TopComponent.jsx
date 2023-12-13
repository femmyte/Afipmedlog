"use client";
import CustomModal from "@/components/common/CustomModal";
import { useStateContext } from "@/state/AppContext";
import { copyToClipboard } from "@/utils/utilities";
import React, { useEffect, useState, useCallback } from "react";
import { FiClipboard } from "react-icons/fi";
import NewMedicalRecordCheckList from "../patient/medicalRecords/NewMedicalRecordCheckList";
import AllergyForm from "./Forms/AllergyForm";
import protocolDefinition from "@/protocols/healthRecord.json";
// import GeneralHealthRecord from "./Forms/GeneralHealthRecord";
import ImmunizationRecord from "./Forms/ImmunizationRecord";
import CardiologyRecord from "./Forms/CardiologyRecord";
import AllergyRecord from "./Forms/AllergyForm";
import SurgeryRecord from "./Forms/SurgeryRecord";
// import FamilyHealthRecords from "./Forms/FamilyHealthRecords";
import DiagnosisAndTreatmentInformation from "./Forms/DiagnosisAndTreatmentInformation";
import LabTestResults from "./Forms/LabTestResults";
import MedicationInformation from "./Forms/MedicationInformation";
import MedicalHistory from "./Forms/MedicalHistory";
import VitalSigns from "./Forms/VitalSigns";
import InsuranceInformation from "./Forms/InsuranceInformation";
import checklistData from "@/utils/checklistData";
import useWeb5 from "@/state/useWeb5";

const TopComponent = () => {
  const { web5, myDid, initWeb5 } = useWeb5();
  let { user, setSharedHealthRecord } = useStateContext();
  const [copiedDid, setCopiedDid] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openFormModal, setOpenFormModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [sharedInfo, setSharedInfo] = useState(null);
  const [email, setEmail] = useState("");
  const [userDid, setUserDid] = useState("");
  const [sendDidModal, setsendDidModal] = useState(false);
  const [emailSentMessage, setEmailSentMessage] = useState("");
  const [sendMessage, setSendMessage] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const renderSelectedComponent = () => {
    switch (selectedRecord) {
      // case "GeneralHealthRecord":
      //   return <GeneralHealthRecord />;
      case "ImmunizationRecord":
        return <ImmunizationRecord />;
      case "CardiologyRecord":
        return <CardiologyRecord />;
      case "AllergyRecord":
        return <AllergyRecord />;
      case "SurgeryRecord":
        return <SurgeryRecord />;
      // case "FamilyHealthRecords":
      //   return <FamilyHealthRecords />;
      case "DiagnosisAndTreatmentInformation":
        return <DiagnosisAndTreatmentInformation />;
      case "LabTestResults":
        return <LabTestResults />;
      case "MedicationInformation":
        return <MedicationInformation />;
      case "MedicalHistory":
        return <MedicalHistory />;
      case "VitalSigns":
        return <VitalSigns />;
      case "InsuranceInformation":
        return <InsuranceInformation />;
      default:
        return null;
    }
  };

  const handleRecordChange = (record) => {
    setSelectedRecord(record);
  };
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
  const getDoctorRecord = useCallback(async () => {
    const userInfoProtocol = protocolDefinition;

    const response = await web5.dwn.records.query({
      from: myDid,
      message: {
        filter: {
          protocol: userInfoProtocol.protocol,
          schema: userInfoProtocol.types.patientInfo.schema,
        },
      },
    });

    if (response.status.code === 200) {
      const receivedRecord = await Promise.all(
        response.records.map(async (record) => {
          const data = await record.data.json();
          return data;
        })
      );
      // console.log(response.record.timestamp);
      // console.log(receivedRecord, "I received these records");

      setSharedHealthRecord(receivedRecord);
      // return receivedDings;
    } else {
      console.log("error", response.status);
    }
  }, [web5]);
  useEffect(() => {
    if (web5) {
      getDoctorRecord();
    }
  }, [getDoctorRecord, web5]);
  const handleOpenModalSendDid = () => {
    setsendDidModal(true);
  };

  const handleOpenModal = (item) => {
    // console.log(item);
    // setSelectedItem(item);
    setOpenModal(!openModal);
    setOpenFormModal(true);
  };

  const handleSendMail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: user?.personalInfo?.name,
        userDid,
        email,
      }),
    });
    const result = await response.json();
    setsendDidModal(false);
    setIsSending(false);
    if (result) {
      setSendMessage(true);
      // console.log(result);
      setEmailSentMessage(result.message);
      setTimeout(() => {
        setSendMessage(false);
      }, 4000);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-between mb-[2.5rem] relative">
      <div className="">
        <h1 className="font-[500] text-[2rem] leading-[2.5rem] text-[#151515] tracking-[0.04rem] mb-[0.5rem">
          Medical Records
        </h1>
        <p className="font-[400] text-[0.875rem] leading-[1.25rem] text-[#5F5F5F] tracking-[0.01754rem]">
          Patient confidentiality is our priority.
        </p>
      </div>
      <div className="flex items-center gap-x-[2rem]">
        {/* <button
          className="w-[10.125rem] py-[0.5rem] px-4 rounded-[0.25rem] bg-primaryBlue text-white flex gap-x-3 items-center font-[500] leading-6 tracking-[0.02rem"
          onClick={handleCopyDid}
        >
          <FiClipboard />
          <span>Copy Did </span>
        </button> */}
        {/* <div className="flex items-center gap-x-[2rem]">
          <button className="w-[10.125rem] py-[0.5rem] px-4 rounded-[0.25rem] border border-[#16B61C]  flex justify-center items-center text-[#16b61c] font-[500] leading-6 tracking-[0.02rem]">
            Edit Record
          </button>
          <button
            className="w-[10.125rem] py-[0.5rem] px-4 rounded-[0.25rem] bg-primaryBlue text-white flex justify-center items-center font-[500] leading-6 tracking-[0.02rem"
            onClick={handleClick}
          >
            Add New Record
          </button>
        </div> */}
      </div>
      <CustomModal modalIsOpen={openModal} setIsOpen={setOpenModal}>
        {/* <NewMedicalRecordCheckList handleOpenModal={handleOpenModal} /> */}
        <div className="w-[25rem] rounded-sm p-5">
          <h3 className="text-center font-semibold">Add New Medical Records</h3>
          <div>
            <p className="py-2">What type of medical record</p>
            <div>
              {checklistData.map((record) => (
                <div key={record.id} className="flex py-2 text-sm">
                  <input
                    type="radio"
                    id={record.component}
                    name="healthRecord"
                    value={record.component}
                    checked={selectedRecord === record.component}
                    onChange={() => handleRecordChange(record.component)}
                  />
                  <label className="px-3" htmlFor={record.component}>
                    {record.records}
                  </label>
                </div>
              ))}

              <div className="flex items-center justify-center py-2">
                <button
                  className="w-[10.125rem] py-[0.5rem] px-4 rounded-[0.25rem] bg-primaryBlue text-white flex justify-center items-center font-[500] leading-6 tracking-[0.02rem disabled:bg-[#DCE6FB]"
                  disabled={!selectedRecord}
                  onClick={() => handleOpenModal()}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </CustomModal>
      <CustomModal modalIsOpen={openFormModal} setIsOpen={setOpenFormModal}>
        {/* <NewMedicalRecordCheckList handleOpenModal={handleOpenModal} /> */}
        {/* {form} */}
        {renderSelectedComponent()}
      </CustomModal>
      <CustomModal modalIsOpen={sendDidModal} setIsOpen={setsendDidModal}>
        <div className="py-[2.5rem] px-[3.62rem] relative">
          <p className="font-[600] text-[1.25rem] leading-[2.375rem] text-[#2E3646] text-center mb-8">
            Send your Did to your patience
          </p>
          <p className="my-[1.5rem] font-[400] text-[0.875rem] leading-[1.5rem] text-[#5F6D7E] text-center">
            you can copy your Did by pressing the copy DID button at the top
          </p>
          <form className="" onSubmit={handleSendMail}>
            <div className="mb-4">
              <label
                htmlFor="did"
                className="block font-[400] text-[0.875rem] text-[#151515] mb-[0.5rem] "
              >
                Enter Recipients’ Email{" "}
              </label>
              <input
                className="w-[25rem] py-[0.75rem] px-4 rounded-[0.25rem] border border-[#E8E8E8] focus:border-blue-500 block	"
                type="email"
                placeholder="Enter Recipient Email"
                name="senderEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="">
              <label
                htmlFor="did"
                className="block font-[400] text-[0.875rem] text-[#151515] mb-[0.5rem] "
              >
                Enter Recipients’ DID{" "}
              </label>
              <input
                className="w-[25rem] py-[0.75rem] px-4 rounded-[0.25rem] border border-[#E8E8E8] focus:border-blue-500 block	"
                placeholder="Enter Recipient DID"
                type="text"
                id="did"
                name="did"
                value={userDid}
                onChange={(e) => setUserDid(e.target.value)}
                required
              />
              {/* <input
                className="hidden w-[25rem] py-[0.75rem] px-4 rounded-[0.25rem] border border-[#E8E8E8] focus:border-blue-500"
                placeholder="Enter Your DID"
                type="text"
                name="name"
                value={user?.personalInfo?.name}
                hidden
                readOnly
              /> */}
            </div>
            <div className="flex flex-col items-center gap-6 justify-center mt-8">
              <button className="w-[10.125rem] py-[0.5rem] px-4 rounded-[0.25rem] bg-primaryBlue text-white flex justify-center items-center font-[500] leading-6 tracking-[0.02rem disabled:bg-[#DCE6FB]">
                {isSending ? "Sending..." : "Send DID"}
              </button>
            </div>
          </form>
        </div>
      </CustomModal>
      {copiedDid && (
        <div className="absolute px-8 py-2 rounded-md bg-green-600 top-0 right-0">
          <p className="text-white">Did Copied successfully</p>
        </div>
      )}
      {sendMessage && (
        <div className="absolute px-8 py-2 rounded-md bg-green-600 top-0 right-0">
          <p className="text-white">{emailSentMessage}</p>
        </div>
      )}
    </div>
  );
};

export default TopComponent;
