import React from "react";
import ContentBox from "./ContentBox";
import { useStateContext } from "@/state/AppContext";

const MedicalProvider = () => {
  let { user } = useStateContext();
  return (
    <section>
      <div className="mt-[2.5rem]">
        <div className="flex items-center justify-between mb-[1.5rem]">
          <p className="text-[1.25rem] text-primaryBlue leading-[1.75rem] font-[500] tracking-[0.025rem]">
            Primary Medical Provider
          </p>
          {/* <button className='text-[0.875rem] text-primaryBlue leading-[1.75rem] font-[400] tracking-[0.025rem]'>
						Share Record
					</button> */}
        </div>
        <div className="grid grid-cols-12 w-full">
          <div className="col col-span-7">
            <ContentBox
              title={"Name"}
              text={`${user?.medicalProvider?.firstName} ${user?.medicalProvider?.lastName}`}
            />
          </div>
          <div className="col-span-3">
            <ContentBox
              title={"Specialty:"}
              text={user?.medicalProvider?.specialty}
            />
          </div>
          <div className="col-span-2">
            <ContentBox
              title={"Gender:"}
              text={user?.medicalProvider?.gender}
            />
          </div>
        </div>
        <div className="grid grid-cols-12 w-full">
          <div className="col-span-6">
            <ContentBox
              title={"Phone Number:"}
              text={user?.medicalProvider?.phoneNumber}
            />
          </div>
          <div className="col-span-6">
            <ContentBox
              title={"Email Address:"}
              text={user?.medicalProvider?.email}
            />
          </div>
        </div>
        <div className="grid grid-cols-12 w-full">
          <div className="col col-span-5">
            <ContentBox
              title={"Home Address:"}
              text={user?.medicalProvider?.address}
            />
          </div>
          <div className="col-span-1">
            <ContentBox title={"City:"} text={user?.medicalProvider?.city} />
          </div>
          <div className="col-span-3">
            <ContentBox
              title={"State"}
              text={user?.medicalProvider?.stateOfOrigin}
            />
          </div>
          <div className="col-span-3">
            <ContentBox
              title={"Country:"}
              text={user?.medicalProvider?.nationality}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalProvider;
