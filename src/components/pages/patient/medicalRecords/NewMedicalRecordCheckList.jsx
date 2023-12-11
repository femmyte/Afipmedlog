"use client";
import React, { useState } from "react";
import checklistData from "@/utils/checklistData";
// import GeneralHealthRecord from "./GeneralHealthRecord";
// import ImmunizationRecord from "./ImmunizationRecord";
// import CardiologyRecord from "./CardiologyRecord";
// import AllergyRecord from "./AllergyRecord";
// import SurgeryRecord from "./SurgeryRecord";
// import FamilyHealthRecords from "./FamilyHealthRecords";
// import DiagnosisAndTreatmentInformation from "./DiagnosisAndTreatmentInformation";
// import LabTestResults from "./LabTestResults";
// import MedicationInformation from "./MedicationInformation";
// import MedicalHistory from "./MedicalHistory";
// import VitalSigns from "./VitalSigns";
// import InsuranceInformation from "./InsuranceInformation";

const NewMedicalRecordCheckList = ({ handleOpenModal }) => {
  const [recordType, setRecordType] = useState("");
  const [selectedRecord, setSelectedRecord] = useState(null);

  //    const renderSelectedComponent = () => {
  //      switch (selectedRecord) {
  //        case "GeneralHealthRecord":
  //          return <GeneralHealthRecord />;
  //        case "GeneralHealthRecord":
  //          return <ImmunizationRecord />;
  //        case "CardiologyRecord":
  //          return <CardiologyRecord />;
  //        case "AllergyRecord":
  //          return <AllergyRecord />;
  //        case "SurgeryRecord":
  //          return <SurgeryRecord />;
  //        case "FamilyHealthRecords":
  //          return <FamilyHealthRecords />;
  //        case "DiagnosisAndTreatmentInformation":
  //          return <DiagnosisAndTreatmentInformation />;
  //        case "LabTestResults":
  //          return <LabTestResults />;
  //        case "MedicationInformation":
  //          return <MedicationInformation />;
  //        case "MedicalHistory":
  //          return <MedicalHistory />;
  //        case "VitalSigns":
  //          return <VitalSigns />;
  //        case "InsuranceInformation":
  //          return <InsuranceInformation />;
  //        default:
  //          return null;
  //      }
  //    };

  const handleRecordChange = (record) => {
    setSelectedRecord(record);
  };

  return (
    <div className="w-[25rem] rounded-sm p-5">
      <h3 className="text-center font-semibold">Add New Medical Records</h3>
      <div>
        <p className="py-2">What type of medical record</p>
        <div>
          {/* {checklistData.map((record) => (
            <div key={record.id}>
              <input
                type="radio"
                id={record.component}
                name="healthRecord"
                value={record.component}
                checked={selectedRecord === record.component}
                onChange={() => handleRecordChange(record.component)}
              />
              <label htmlFor={record.component}>{record.records}</label>
            </div>
          ))} */}
          {checklistData.map((item) => (
            <div key={item.id} className="flex py-2 text-sm">
              <input
                value={recordType}
                checked={item.records === recordType}
                onChange={(e) => setRecordType(item.records)}
                name="recordType"
                type="radio"
                id={`recordType-${item.id}`}
              />
              <label htmlFor={`recordType-${item.id}`} className="px-3">
                {item.records}
              </label>
            </div>
          ))}
          <div className="flex items-center justify-center py-2">
            <button
              className="w-[10.125rem] py-[0.5rem] px-4 rounded-[0.25rem] bg-primaryBlue text-white flex justify-center items-center font-[500] leading-6 tracking-[0.02rem disabled:bg-[#DCE6FB]"
              disabled={!recordType}
              onClick={() => handleOpenModal(recordType)}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMedicalRecordCheckList;
