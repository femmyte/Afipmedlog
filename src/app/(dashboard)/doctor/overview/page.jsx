import React from "react";
import OverviewHeader from "@/components/pages/doctor/overview/OverviewHeader";
import Cards from "@/components/pages/doctor/overview/Cards";
import Table from "@/components/pages/doctor/overview/Table";
import MedicalRecords from "@/components/pages/doctor/overview/MedicalRecords";
import Doctors from "@/components/pages/doctor/overview/Doctors";
import GeneralDetails from "@/components/pages/doctor/overview/GeneralDetails";
import OverviewAppointments from "@/components/pages/doctor/overview/OverviewAppointments";

const page = () => {
  return (
    <div className="">
      <OverviewHeader />
      <div className="grid grid-cols-12 gap-[2rem] w-full">
        <div className="col-span-9">
          <Cards />
          <div className="col-span-full mt-[1.5rem]">
            <Table />
          </div>
        </div>
        <div className="col-span-3">
          <Doctors />
          <OverviewAppointments />
        </div>
      </div>
    </div>
  );
};

export default page;
