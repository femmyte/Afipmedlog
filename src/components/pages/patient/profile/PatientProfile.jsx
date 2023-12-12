"use client";
import React, { useState, useEffect, useCallback } from "react";
import PatientProfile from "./PatientProfile";
import PersonalInformation from "./PersonalInformation";
import { useStateContext } from "@/state/AppContext";
import { useParams } from "next/navigation";
import protocolDefinition from "@/protocols/healthRecord.json";
import GuardianInformation from "./GuardianInformation";
import PrimaryHealthInformation from "./PrimaryHealthInformation";
import { FiChevronsRight } from "react-icons/fi";
import DocumentComponent from "./DocumentsComponent";
const PatientHealthDetails = () => {
  const { id } = useParams();
  const { web5 } = useStateContext();
  const [user, setUser] = useState([]);
  const [guardianInfo, setGuardianInfo] = useState([]);
  const [medicalProviderinfo, setMedicalProviderinfo] = useState([]);
  const [patientInfo, setPatientInfo] = useState([]);
  const [isGettingUser, setIsGettingUser] = useState(false);
  const getPatientRecord = useCallback(async () => {
    // setIsGettingUser(true);
    console.log("getting user");
    try {
      const { records } = await web5.dwn.records.query({
        message: {
          filter: {
            schema: protocolDefinition.types.patientInfo.schema,
          },
        },
      });

      for (let record of records) {
        const data = await record.data.json();
        const list = { record, data, id: record.id };
        setPatientInfo((user) => {
          if (!user.some((item) => item.id === list.id)) {
            return [...user, list];
          }
          return user;
        });
      }
      console.log(patientInfo[id]);
      if (patientInfo.length > 0) {
        setUser({
          firstName: patientInfo[id].data.data.personalInfo.firstName || "",
          lastName: patientInfo[id].data.data.personalInfo.lastName || "",
          email: patientInfo[id].data.data.personalInfo.email || "",
          address: patientInfo[id].data.data.personalInfo.address || "",
          phoneNumber: patientInfo[id].data.data.personalInfo.phoneNumber || "",
          gender: patientInfo[id].data.data.personalInfo.gender || "",
          dateOfBirth: patientInfo[id].data.data.personalInfo.dateOfBirth || "",
          maritalStatus:
            patientInfo[id].data.data.personalInfo.maritalStatus || "",
          nationality: patientInfo[id].data.data.personalInfo.nationality || "",
          stateOfOrigin:
            patientInfo[id].data.data.personalInfo.stateOfOrigin || "",
          city: patientInfo[id].data.data.personalInfo.city || "",
        });
        setGuardianInfo({
          firstName: patientInfo[id].data.data.guardianInfo.firstName || "",
          lastName: patientInfo[id].data.data.guardianInfo.lastName || "",
          email: patientInfo[id].data.data.guardianInfo.email || "",
          address: patientInfo[id].data.data.guardianInfo.address || "",
          phoneNumber: patientInfo[id].data.data.guardianInfo.phoneNumber || "",
          gender: patientInfo[id].data.data.guardianInfo.gender || "",
          dateOfBirth: patientInfo[id].data.data.guardianInfo.dateOfBirth || "",
          maritalStatus:
            patientInfo[id].data.data.guardianInfo.maritalStatus || "",
          nationality: patientInfo[id].data.data.guardianInfo.nationality || "",
          stateOfOrigin:
            patientInfo[id].data.data.guardianInfo.stateOfOrigin || "",
          city: patientInfo[id].data.data.guardianInfo.city || "",
        });
        setMedicalProviderinfo({
          firstName: patientInfo[id].data.data.medicalProvider.firstName || "",
          lastName: patientInfo[id].data.data.medicalProvider.lastName || "",
          email: patientInfo[id].data.data.medicalProvider.email || "",
          address: patientInfo[id].data.data.medicalProvider.address || "",
          phoneNumber:
            patientInfo[id].data.data.medicalProvider.phoneNumber || "",
          gender: patientInfo[id].data.data.medicalProvider.gender || "",
          dateOfBirth:
            patientInfo[id].data.data.medicalProvider.dateOfBirth || "",
          maritalStatus:
            patientInfo[id].data.data.medicalProvider.maritalStatus || "",
          nationality:
            patientInfo[id].data.data.medicalProvider.nationality || "",
          stateOfOrigin:
            patientInfo[id].data.data.medicalProvider.stateOfOrigin || "",
          city: patientInfo[id].data.data.medicalProvider.city || "",
        });
      }
      if (records) {
        setIsGettingUser(false);
      }
    } catch (error) {
      console.log("error getting user", error);
    }
  }, [web5, patientInfo]);
  useEffect(() => {
    if (web5) getPatientRecord();
  }, [getPatientRecord, web5]);

  console.log(user);
  return (
    <div>
      <div className="flex gap-x-4 items-center">
        <h2 className="font-medium text-[1.25rem] text-[#B6B6B6]">Patients</h2>
        <FiChevronsRight size={20} color="#B6B6B6" />
        <h2 className="font-medium text-[1.25rem]">
          {" "}
          {user?.firstName} {user?.lastName}
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-x-8 ">
        <div className=" col-span-8">
          <PatientProfile userInfo={user} />
          <PersonalInformation userInfo={user} />
          <GuardianInformation userInfo={guardianInfo} />
          <PrimaryHealthInformation userInfo={medicalProviderinfo} />
        </div>
        <div className=" col-span-4 flex flex-col gap-y-[1.5rem]">
          <DocumentComponent title={"Document"} />
          {/* <DocumentComponent title={"History"} />
          <DocumentComponent title={"Tests"} />
          <DocumentComponent title={"Prescriptions"} />
          <DocumentComponent title={"Medical Records"} /> */}
        </div>
      </div>
    </div>
  );
};

export default PatientHealthDetails;
