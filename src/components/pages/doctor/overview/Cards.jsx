"use client";
import React from "react";
import { Card } from "./Card";
import Image from "next/image";
import { useStateContext } from "@/state/AppContext";

const Cards = () => {
  let { sharedHealthRecord } = useStateContext();
  return (
    <div className="flex flex-col md:flex-row text-white mt-[2rem] gap-[1rem] w-full justify-center items-center">
      <Card
        className="bg-[#145AE2] w-[16.1875rem] h-[6rem] py-[1rem] px-[1.5rem]"
        img="/images/icons/patient.svg"
        text="Patients"
        number={sharedHealthRecord?.length}
      />
      <Card
        className="bg-[#7C17CC] w-[16.1875rem] h-[6rem] py-[1rem] px-[1.5rem]"
        img="/images/icons/consultation.svg"
        text="Consultations"
        number="1000"
      />
      <Card
        className="bg-[#18CC20] w-[16.1875rem] h-[6rem] py-[1rem] px-[1.5rem]"
        img="/images/icons/appointment.svg"
        text="Appointments"
        number="100"
      />
    </div>
  );
};

export default Cards;
