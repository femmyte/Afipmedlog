"use client";
import { useStateContext } from "@/state/AppContext";
import React from "react";

const OverviewHeader = () => {
  const { userName } = useStateContext();
  return (
    <div>
      <h2 className="text-[2rem] font-medium text-[#151515]">
        Welcome, Dr. {userName}
      </h2>
      <p className="font-[0.875rem] text-[#5F5F5F]">
        Patient confidentiality is our priority.
      </p>
    </div>
  );
};

export default OverviewHeader;
