"use client";
import { useStateContext } from "@/state/AppContext";
import React from "react";

const OverviewHeader = () => {
  const { userName } = useStateContext();
  return (
    <div>
      <h2 className="text-[2rem] font-medium text-[#151515]">
        Welcome, {userName}
      </h2>
      <p className="font-[0.875rem] text-[#5F5F5F]">
        Be in charge of your medical records, history and your identity
      </p>
    </div>
  );
};

export default OverviewHeader;
