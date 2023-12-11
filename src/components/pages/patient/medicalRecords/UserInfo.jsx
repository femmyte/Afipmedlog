"use client";
import React, { useState, useEffect } from "react";
import PersonalRecord from "./PersonalRecord";
import GuardianRecord from "./GuardianRecord";
import MedicalProvider from "./MedicalProvider";
import { useStateContext } from "@/state/AppContext";
import protocolDefinition from "@/protocols/healthRecord.json";
import TopComponent from "./TopComponent";
import HealthRecord from "./HealthRecord";

const UserInfo = () => {
  return (
    <div>
      <TopComponent />
      <PersonalRecord />
      <GuardianRecord />
      <MedicalProvider />
      <HealthRecord />
    </div>
  );
};

export default UserInfo;
