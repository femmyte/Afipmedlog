"use client";
import React, { useState } from "react";
import ContentBox from "./ContentBox";
import Accordion from "@/components/common/Accordion";
import CustomModal from "@/components/common/CustomModal";
import { useParams } from "next/navigation";
import { useStateContext } from "@/state/AppContext";
import ImmunizationRecord from "../Forms/ImmunizationRecord";
import CardiologyRecord from "../Forms/CardiologyRecord";
import AllergyRecord from "../Forms/AllergyForm";
import SurgeryRecord from "../Forms/SurgeryRecord";
import DiagnosisAndTreatmentInformation from "../Forms/DiagnosisAndTreatmentInformation";
import LabTestResults from "../Forms/LabTestResults";
import MedicationInformation from "../Forms/MedicationInformation";
import VitalSigns from "../Forms/VitalSigns";
import InsuranceInformation from "../Forms/InsuranceInformation";
import useWeb5 from "@/state/useWeb5";

const HealthRecord = () => {
  const { id } = useParams();
  const { web5, myDid, initWeb5 } = useWeb5();
  let { sharedHealthRecord } = useStateContext();
  const [openModal, setOpenModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [userDid, setUserDid] = useState("");
  const handleOpenModal = (title) => {
    setSelectedRecord(title);
    setOpenModal(true);
  };
  // console.log(sharedHealthRecord);
  const handleSendRecord = (e) => {
    e.preventDefault();
    setOpenModal(false);
    setOpenSuccessModal(true);
  };
  const renderSelectedComponent = () => {
    switch (selectedRecord) {
      // case "GeneralHealthRecord":
      //   return <GeneralHealthRecord />;
      case "immunizationRecord":
        return <ImmunizationRecord />;
      case "cardiologyRecord":
        return <CardiologyRecord />;
      case "allergyRecord":
        return <AllergyRecord recordIdNumber={id} />;
      case "surgeryRecord":
        return <SurgeryRecord />;
      // case "FamilyHealthRecords":
      //   return <FamilyHealthRecords />;
      case "diagnosisAndTreatmentInformation":
        return <DiagnosisAndTreatmentInformation />;
      case "labTestResults":
        return <LabTestResults />;
      case "medicationInformation":
        return <MedicationInformation />;
      //  case "MedicalHistory":
      //    return <MedicalHistory />;
      case "vitalSigns":
        return <VitalSigns />;
      case "insuranceInformation":
        return <InsuranceInformation />;
      default:
        return null;
    }
  };
  return (
    <div className="">
      <div className="">
        {sharedHealthRecord[id]?.healthRecord &&
          sharedHealthRecord[id]?.healthRecord.map((item, i) => {
            const category = Object.keys(item)[0]; // Extract the category (e.g., "allergyRecord")
            const properties = item[category]; // Extract the properties object

            return (
              <div className="" key={i}>
                <Accordion title={category} handleClick={handleOpenModal}>
                  <div className="grid grid-cols-12 w-full h-max">
                    {Object.entries(properties).map(([property, value]) => (
                      <div key={property} className="col col-span-3">
                        <ContentBox
                          title={property}
                          text={value ? value : "Nill"}
                        />
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
          {renderSelectedComponent()}
          {/* <form className="">
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
          </form> */}
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
