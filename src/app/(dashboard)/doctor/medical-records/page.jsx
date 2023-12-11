import TopComponent from "@/components/pages/doctor/TopComponent";
import UserInfo from "@/components/pages/patient/medicalRecords/UserInfo";
import MedicalRecordPage from "@/components/pages/doctor/DoctorMedicalRecordPage/MedicalRecordPage";
import SharedRecord from "@/components/pages/doctor/DoctorMedicalRecordPage/SharedRecord";
import { AddedMedicalRecords } from "@/components/pages/doctor/DoctorMedicalRecordPage/AddedMedicalRecords";
import React from "react";

const page = () => {
  return (
    <div>
      {/* <UserInfo /> */}
      <TopComponent />
      {/* <MedicalRecordPage /> */}
      <SharedRecord />
      <AddedMedicalRecords />
    </div>
  );
};

export default page;
