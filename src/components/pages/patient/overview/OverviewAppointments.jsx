"use client";
import { React, useState } from "react";
import { GoChevronRight } from "react-icons/go";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const OverviewAppointments = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div
      className="w-[16rem] flex flex-col  p-4 mt-[2rem]"
      style={{ boxShadow: "4px 4px 24px 0px rgba(206, 206, 206, 0.24)" }}
    >
      <div className="flex justify-between">
        <h2>Appointments</h2>
        <div className="flex items-center text-[#145AE2]">
          <button className="text-sm">See All</button>
          <GoChevronRight />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Calendar
          // className="text-sm p-2 mt-2"
          className="react-calendar"
          onChange={onChange}
          value={value}
        />
        <button className="rounded-sm p-2 px-5 bg-[#145AE2] text-white mt-[1.75rem] w-full">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default OverviewAppointments;
