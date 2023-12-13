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
import useWeb5 from "@/state/useWeb5";
const PatientHealthDetails = () => {
  const { id } = useParams();
  const { web5, myDid, initWeb5 } = useWeb5();
  const { sharedHealthRecord } = useStateContext();
  const [user, setUser] = useState([]);
  const [guardianInfo, setGuardianInfo] = useState([]);
  const [medicalProviderinfo, setMedicalProviderinfo] = useState([]);
  const [patientInfo, setPatientInfo] = useState([]);
  const [isGettingUser, setIsGettingUser] = useState(false);
  const getPatientRecord = useCallback(async () => {
    // setIsGettingUser(true);
    console.log("getting user");
    try {
      // const { records } = await web5.dwn.records.query({
      //   message: {
      //     filter: {
      //       schema: protocolDefinition.types.patientInfo.schema,
      //     },
      //   },
      // });

      // for (let record of records) {
      //   const data = await record.data.json();
      //   const list = { record, data, id: record.id };
      //   setPatientInfo((user) => {
      //     if (!user.some((item) => item.id === list.id)) {
      //       return [...user, list];
      //     }
      //     return user;
      //   });
      // }
      console.log(sharedHealthRecord[id]);
      if (sharedHealthRecord[id]) {
        // if (sharedHealthRecord.length > 0) {
        //   setUser({
        //     firstName: sharedHealthRecord[id].data.personalInfo.firstName || "",
        //     lastName: sharedHealthRecord[id].data.personalInfo.lastName || "",
        //     email: sharedHealthRecord[id].data.personalInfo.email || "",
        //     address: sharedHealthRecord[id].data.personalInfo.address || "",
        //     phoneNumber:
        //       sharedHealthRecord[id].data.personalInfo.phoneNumber || "",
        //     gender: sharedHealthRecord[id].data.personalInfo.gender || "",
        //     dateOfBirth:
        //       sharedHealthRecord[id].data.personalInfo.dateOfBirth || "",
        //     maritalStatus:
        //       sharedHealthRecord[id].data.personalInfo.maritalStatus || "",
        //     nationality:
        //       sharedHealthRecord[id].data.personalInfo.nationality || "",
        //     stateOfOrigin:
        //       sharedHealthRecord[id].data.personalInfo.stateOfOrigin || "",
        //     city: sharedHealthRecord[id].data.personalInfo.city || "",
        //   });
        //   setGuardianInfo({
        //     firstName: sharedHealthRecord[id].data.guardianInfo.firstName || "",
        //     lastName: sharedHealthRecord[id].data.guardianInfo.lastName || "",
        //     email: sharedHealthRecord[id].data.guardianInfo.email || "",
        //     address: sharedHealthRecord[id].data.guardianInfo.address || "",
        //     phoneNumber:
        //       sharedHealthRecord[id].data.guardianInfo.phoneNumber || "",
        //     gender: sharedHealthRecord[id].data.guardianInfo.gender || "",
        //     dateOfBirth:
        //       sharedHealthRecord[id].data.guardianInfo.dateOfBirth || "",
        //     maritalStatus:
        //       sharedHealthRecord[id].data.guardianInfo.maritalStatus || "",
        //     nationality:
        //       sharedHealthRecord[id].data.guardianInfo.nationality || "",
        //     stateOfOrigin:
        //       sharedHealthRecord[id].data.guardianInfo.stateOfOrigin || "",
        //     city: sharedHealthRecord[id].data.guardianInfo.city || "",
        //   });
        //   setMedicalProviderinfo({
        //     firstName:
        //       sharedHealthRecord[id]?.data?.medicalProvider?.firstName || "",
        //     lastName:
        //       sharedHealthRecord[id]?.data?.medicalProvider?.lastName || "",
        //     email: sharedHealthRecord[id]?.data?.medicalProvider?.email || "",
        //     address:
        //       sharedHealthRecord[id]?.data?.medicalProvider?.address || "",
        //     phoneNumber:
        //       sharedHealthRecord[id]?.data?.medicalProvider?.phoneNumber || "",
        //     gender: sharedHealthRecord[id]?.data?.medicalProvider?.gender || "",
        //     dateOfBirth:
        //       sharedHealthRecord[id]?.data?.medicalProvider?.dateOfBirth || "",
        //     maritalStatus:
        //       sharedHealthRecord[id]?.data?.data?.medicaler?.maritalStatus ||
        //       "",
        //     nationality:
        //       sharedHealthRecord[id]?.data?.medicalProvider?.nationality || "",
        //     stateOfOrigin:
        //       sharedHealthRecord[id]?.data?.data?.medicaler?.stateOfOrigin ||
        //       "",
        //     city: sharedHealthRecord[id]?.data?.medicalProvider?.city || "",
        //   });
        // }
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
          <DocumentComponent title={"History"} />
          <DocumentComponent title={"Tests"} />
          <DocumentComponent title={"Prescriptions"} />
          <DocumentComponent title={"Medical Records"} />
        </div>
      </div>
    </div>
  );
};

export default PatientHealthDetails;
