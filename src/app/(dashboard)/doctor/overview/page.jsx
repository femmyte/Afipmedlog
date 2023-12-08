import React from "react";
import OverviewHeader from "@/components/pages/overview/OverviewHeader";
import Cards from "@/components/pages/overview/Cards";
import Table from "@/components/pages/overview/Table";
import MedicalRecords from "@/components/pages/overview/MedicalRecords";
import Doctors from "@/components/pages/overview/Doctors";
import GeneralDetails from "@/components/pages/overview/GeneralDetails";
import OverviewAppointments from "@/components/pages/overview/OverviewAppointments";

const page = () => {
  return (
    <div className="">
      <OverviewHeader />
      <div className="grid grid-cols-12 gap-[2rem] w-full">
        <div className="col-span-9">
          {/* <div className="col-span-full"> */}
          <Cards />
          {/* </div> */}
          <div className="col-span-full grid grid-cols-12 gap-[2rem]">
            <div className="col-span-7">
              <Table />
            </div>
            <div className="col-span-5">
              <MedicalRecords />
            </div>
          </div>
        </div>
        <div className="col-span-3">
          {/* <div className="col-span-3"> */}
          <Doctors />
          {/* </div> */}
          {/* <div className="col-span-3"> */}
          <GeneralDetails />
          <OverviewAppointments />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default page;
