"use client";
import React, { useState, useCallback, useEffect } from "react";
import DoctorsProfile from "@/components/common/doctorsProfile/DoctorsProfile";
import MyDid from "@/components/common/doctorsProfile/MyDid";
import PersonalInformation from "@/components/common/doctorsProfile/PersonalInformation";
import CareerInformation from "@/components/common/doctorsProfile/CareerInformation";
import UpcomingAppointments from "@/components/common/doctorsProfile/UpcomingAppointments";
import Link from "next/link";
import { useStateContext } from "@/state/AppContext";
import protocolDefinition from "@/protocols/healthRecord.json";
const Profile = () => {
  const { web5, myDid, userRole, setUserRecord, initWeb5 } = useStateContext();
  const [user, setUser] = useState(null);
  const [doctorInfo, setDoctorInfo] = useState([]);
  const [careerInfo, setCareerInfo] = useState(null);
  const getUser = useCallback(async () => {
    // setIsGettingUser(true);
    console.log("getting user");
    try {
      const { records } = await web5.dwn.records.query({
        message: {
          filter: {
            schema: protocolDefinition.types.doctorInfo.schema,
          },
        },
      });

      for (let record of records) {
        const data = await record.data.json();
        const list = { record, data, id: record.id };
        setDoctorInfo((user) => {
          if (!user.some((item) => item.id === list.id)) {
            return [...user, list];
          }
          return user;
        });
      }
      console.log(doctorInfo);
      if (doctorInfo.length > 0) {
        setUser({
          firstName: doctorInfo[0].data.personalInfo.firstName || "",
          lastName: doctorInfo[0].data.personalInfo.lastName || "",
          email: doctorInfo[0].data.personalInfo.email || "",
          address: doctorInfo[0].data.personalInfo.address || "",
          phoneNumber: doctorInfo[0].data.personalInfo.phoneNumber || "",
          gender: doctorInfo[0].data.personalInfo.gender || "",
          dateOfBirth: doctorInfo[0].data.personalInfo.dateOfBirth || "",
          maritalStatus: doctorInfo[0].data.personalInfo.maritalStatus || "",
          nationality: doctorInfo[0].data.personalInfo.nationality || "",
          stateOfOrigin: doctorInfo[0].data.personalInfo.stateOfOrigin || "",
          city: doctorInfo[0].data.personalInfo.city || "",
        });
        setCareerInfo({
          yearOfExperience:
            doctorInfo[0].data.careerInfo.yearOfExperience || "",
          specialty: doctorInfo[0].data.careerInfo.specialty || "",
          numberOfCases: doctorInfo[0].data.careerInfo.numberOfCases || "",
          failedCases: doctorInfo[0].data.careerInfo.failedCases || "",
          successCases: doctorInfo[0].data.careerInfo.successCases || "",
        });
        // set the create mode to false if the user has already created account, this will enable to know if we are updating the record or we are creating a record
        setIsCreateMode(false);
      }
      if (records) {
        setIsGettingUser(false);
      }
    } catch (error) {
      console.log("error getting user", error);
    }
  }, [web5, doctorInfo]);
  useEffect(() => {
    if (web5) getUser();
  }, [getUser, web5]);

  console.log(user, careerInfo);

  return (
    <section className="bg-[#FAFCFF]">
      {/* <div className="flex gap-x-4 items-center">
        <Link
          href={"#"}
          className="text-[#b6b6b6] font-[500] text-1.25rem] leading-7"
        >
          Patients
        </Link>
        <p className="text-[1.25rem] font-[500] leading-[1.75rem] text-[#151515]">
          Ms. Phoebe’s profile
        </p>
      </div> */}
      <h2 className="font-medium text-[2rem]">Profile</h2>
      <div className="grid grid-cols-12 gap-x-8 ">
        <div className=" col-span-8">
          <DoctorsProfile userInfo={user} />
          <PersonalInformation userInfo={user} />
          <UpcomingAppointments />
          <CareerInformation careerInfo={careerInfo} />
        </div>
        <div className=" col-span-4">
          <MyDid />
        </div>
      </div>
    </section>
  );
};

export default Profile;
