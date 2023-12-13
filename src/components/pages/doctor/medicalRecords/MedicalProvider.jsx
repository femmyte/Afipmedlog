import React from "react";
import ContentBox from "./ContentBox";
import { useStateContext } from "@/state/AppContext";
import { useParams } from "next/navigation";

const MedicalProvider = () => {
  const { id } = useParams();
  let { sharedHealthRecord } = useStateContext();
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
          <div className="col col-span-full md:col-span-7">
            <ContentBox
              title={"Name"}
              text={`${sharedHealthRecord[id]?.data?.medicalProvider?.firstName} ${sharedHealthRecord[id]?.data?.medicalProvider?.lastName}`}
            />
          </div>
          <div className="col-span-full md:col-span-3">
            <ContentBox
              title={"Specialty:"}
              text={sharedHealthRecord[id]?.data?.medicalProvider?.specialty}
            />
          </div>
          <div className="col-span-full md:col-span-2">
            <ContentBox
              title={"Gender:"}
              text={sharedHealthRecord[id]?.data?.medicalProvider?.gender}
            />
          </div>
        </div>
        <div className="grid grid-cols-12 w-full">
          <div className="col-span-full md:col-span-6">
            <ContentBox
              title={"Phone Number:"}
              text={sharedHealthRecord[id]?.data?.medicalProvider?.phoneNumber}
            />
          </div>
          <div className="col-span-full md:col-span-6">
            <ContentBox
              title={"Email Address:"}
              text={sharedHealthRecord[id]?.data?.medicalProvider?.email}
            />
          </div>
        </div>
        <div className="grid grid-cols-12 w-full">
          <div className="col col-span-full md:col-span-5">
            <ContentBox
              title={"Home Address:"}
              text={sharedHealthRecord[id]?.data?.medicalProvider?.address}
            />
          </div>
          <div className="col-span-full md:col-span-1">
            <ContentBox
              title={"City:"}
              text={sharedHealthRecord[id]?.data?.medicalProvider?.city}
            />
          </div>
          <div className="col-span-full md:col-span-3">
            <ContentBox
              title={"State"}
              text={
                sharedHealthRecord[id]?.data?.medicalProvider?.stateOfOrigin
              }
            />
          </div>
          <div className="col-span-full md:col-span-3">
            <ContentBox
              title={"Country:"}
              text={sharedHealthRecord[id]?.data?.medicalProvider?.nationality}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalProvider;
