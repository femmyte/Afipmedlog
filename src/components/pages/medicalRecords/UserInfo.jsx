"use client";
import React, { useState, useEffect } from "react";
import PersonalRecord from "./PersonalRecord";
import GuardianRecord from "./GuardianRecord";
import MedicalProvider from "./MedicalProvider";
import NewMedicalRecordCheckList from "./NewMedicalRecordCheckList";
import AllergyRecord from "./AllergyRecord";
import MedicalRecordsSuccess from "./MedicalRecordsSuccess";
import { useStateContext } from "@/state/AppContext";
import protocolDefinition from "@/protocols/healthRecord.json";
import TopComponent from "./TopComponent";

const UserInfo = () => {
  const { web5, myDid, user } = useStateContext();
  //   const handleDelete = async () => {
  //     //Query records with plain text data format
  //     try {
  //       const response = await web5.dwn.records.query({
  //         message: {
  //           filter: {
  //             recordId:
  //               "recordid",
  //           },
  //         },
  //       });

  //       // Grab the first indexed record
  //       const record = response.records[0];

  //       // Delete the record
  //       const deleteResult = await record.delete();
  //       console.log("offline >", deleteResult);
  //       const deleteOnline = await web5.dwn.records.delete({
  //         from: myDid,
  //         message: {
  //           recordId:
  //             "recordid",
  //         },
  //       });
  //       console.log("online >", deleteOnline);
  //     } catch (error) {
  //       console.log("unable to delete", error);
  //     }
  //   };

  return (
    <div>
      <TopComponent />
      <PersonalRecord />
      <GuardianRecord />
      <MedicalProvider />
      {/* 
			<NewMedicalRecordCheckList />
			<AllergyRecord />
			<MedicalRecordsSuccess /> */}
      {/* <button onClick={handleDelete}>delete</button> */}
    </div>
  );
};

export default UserInfo;
