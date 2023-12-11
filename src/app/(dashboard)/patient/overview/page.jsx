import React from "react";
import OverviewHeader from "@/components/pages/patient/overview/OverviewHeader";
import Cards from "@/components/pages/patient/overview/Cards";
import Table from "@/components/pages/patient/overview/Table";
import MedicalRecords from "@/components/pages/patient/overview/MedicalRecords";
import Doctors from "@/components/pages/patient/overview/Doctors";
import GeneralDetails from "@/components/pages/patient/overview/GeneralDetails";
import OverviewAppointments from "@/components/pages/patient/overview/OverviewAppointments";

const page = () => {
  return (
    <div className="">
      <OverviewHeader />
      <div className="grid grid-cols-12 gap-2 w-full">
        <div className="col col-span-9">
          <Cards />
        </div>
        <div className="col col-span-2">
          <Doctors />
        </div>
        <div className="col col-span-5">
          <Table />
        </div>
        <div className="col col-span-4">
          <MedicalRecords />
        </div>
        <div className="col col-span-2">
          <GeneralDetails />
          <OverviewAppointments />
        </div>
      </div>
    </div>
  );
};

export default page;
