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
import CustomModal from "@/components/common/CustomModal";
import DocumentComponent from "@/components/common/doctorsProfile/DocumentsComponent";
import useWeb5 from "@/state/useWeb5";
const Profile = () => {
  const { web5, myDid, initWeb5 } = useWeb5();
  const [user, setUser] = useState(null);
  const [doctorInfo, setDoctorInfo] = useState([]);
  const [careerInfo, setCareerInfo] = useState(null);
  const [sendDidModal, setSendDidModal] = useState(false);
  const [email, setEmail] = useState("");
  const [userDid, setUserDid] = useState("");
  const [emailSentMessage, setEmailSentMessage] = useState("");
  const [sendMessage, setSendMessage] = useState(false);
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
    const existingDid = localStorage.getItem("myDid");
    setUserDid(existingDid);
    if (web5) getUser();
  }, [getUser, web5]);

  const handleSendDidModal = () => {
    setSendDidModal(!sendDidModal);
  };
  const handleSendMail = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: `${user?.firstName} ${user?.lastName}`,
        userDid,
        email,
      }),
    });
    const result = await response.json();
    //  setsendDidModal(false);
    handleSendDidModal();
    setEmail("");
    setUserDid("");
    if (result) {
      setSendMessage(true);
      // console.log(result);
      setEmailSentMessage(result.message);
      setTimeout(() => {
        setSendMessage(false);
      }, 4000);
    }
  };
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
      <div className="grid grid-cols-12 gap-8 ">
        <div className=" col-span-full md:col-span-8">
          <DoctorsProfile userInfo={user} />
          <PersonalInformation userInfo={user} />
          <CareerInformation careerInfo={careerInfo} />
          {/* <UpcomingAppointments /> */}
        </div>
        <div className=" col-span-full md:col-span-4 flex flex-col gap-y-[1.5rem]">
          <MyDid handleSendDidModal={handleSendDidModal} />
          <DocumentComponent title="Document" />
        </div>
      </div>
      <CustomModal modalIsOpen={sendDidModal} setIsOpen={setSendDidModal}>
        <div className="py-[2.5rem] px-[3.62rem] relative flex flex-col justify-center items-center">
          <p className="font-[600] text-[1.25rem] leading-[2.375rem] text-[#2E3646] text-center mb-8">
            Send your Did to your patience
          </p>
          <p className="my-[1.5rem] font-[400] text-[0.875rem] leading-[1.5rem] text-[#5F6D7E] text-center">
            Enter the patient&apos;s Email address in the box below to send your
            DID
          </p>
          <form className="" onSubmit={handleSendMail}>
            <div className="mb-4">
              <label
                htmlFor="did"
                className="block font-[400] text-[0.875rem] text-[#151515] mb-[0.5rem] "
              >
                Enter Recipients’ Email{" "}
              </label>
              <input
                className="w-[25rem] py-[0.75rem] px-4 rounded-[0.25rem] border border-[#E8E8E8] focus:border-blue-500 block	"
                type="email"
                placeholder="Enter Recipient Email"
                name="senderEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="">
              <label
                htmlFor="did"
                className="block font-[400] text-[0.875rem] text-[#151515] mb-[0.5rem] "
              >
                Recipients’ DID{" "}
              </label>
              <input
                className="w-[25rem] py-[0.75rem] px-4 rounded-[0.25rem] border border-[#E8E8E8] focus:border-blue-500 block	"
                placeholder="Enter Recipient DID"
                type="text"
                id="did"
                name="did"
                value={userDid}
                readOnly
                // onChange={(e) => setUserDid(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col items-center gap-6 justify-center mt-8">
              <button className="w-[10.125rem] py-[0.5rem] px-4 rounded-[0.25rem] bg-primaryBlue text-white flex justify-center items-center font-[500] leading-6 tracking-[0.02rem disabled:bg-[#DCE6FB]">
                Send DID
              </button>
            </div>
          </form>
        </div>
      </CustomModal>
      {sendMessage && (
        <div className="absolute px-8 py-2 rounded-md bg-green-600 top-[5rem] right-0">
          <p className="text-white">{emailSentMessage}</p>
        </div>
      )}
    </section>
  );
};

export default Profile;
