"use client";
import React, { useState, useEffect, useCallback } from "react";
import PatientProfile from "./PatientProfile";
import PersonalInformation from "./PersonalInformation";
import { useStateContext } from "@/state/AppContext";
import protocolDefinition from "@/protocols/healthRecord.json";
import GuardianInformation from "./GuardianInformation";
import PrimaryHealthInformation from "./PrimaryHealthInformation";
import { FiChevronsRight } from "react-icons/fi";
import MyDid from "./MyDid";
import CustomModal from "@/components/common/CustomModal";
import DocumentComponent from "./DocumentsComponent";
const Profile = () => {
  const { web5 } = useStateContext();
  const [user, setUser] = useState([]);
  const [guardianInfo, setGuardianInfo] = useState([]);
  const [medicalProviderinfo, setMedicalProviderinfo] = useState([]);
  const [patientInfo, setPatientInfo] = useState([]);
  const [isGettingUser, setIsGettingUser] = useState(false);
  const [sendDidModal, setSendDidModal] = useState(false);
  const [email, setEmail] = useState("");
  const [userDid, setUserDid] = useState("");
  const [emailSentMessage, setEmailSentMessage] = useState("");
  const [sendMessage, setSendMessage] = useState(false);
  const [clicked, setClicked] = useState(false);
  const getPatientProfileDetails = useCallback(async () => {
    // setIsGettingUser(true);
    try {
      const { records } = await web5.dwn.records.query({
        message: {
          filter: {
            schema: protocolDefinition.types.patientInfo.schema,
          },
        },
      });

      for (let record of records) {
        const data = await record.data.json();
        const list = { record, data, id: record.id };
        setPatientInfo((user) => {
          if (!user.some((item) => item.id === list.id)) {
            return [...user, list];
          }
          return user;
        });
      }
      // console.log(patientInfo);
      if (patientInfo.length > 0) {
        setUser({
          firstName: patientInfo[0].data.personalInfo.firstName || "",
          lastName: patientInfo[0].data.personalInfo.lastName || "",
          email: patientInfo[0].data.personalInfo.email || "",
          address: patientInfo[0].data.personalInfo.address || "",
          phoneNumber: patientInfo[0].data.personalInfo.phoneNumber || "",
          gender: patientInfo[0].data.personalInfo.gender || "",
          dateOfBirth: patientInfo[0].data.personalInfo.dateOfBirth || "",
          maritalStatus: patientInfo[0].data.personalInfo.maritalStatus || "",
          nationality: patientInfo[0].data.personalInfo.nationality || "",
          stateOfOrigin: patientInfo[0].data.personalInfo.stateOfOrigin || "",
          city: patientInfo[0].data.personalInfo.city || "",
        });
        setGuardianInfo({
          firstName: patientInfo[0].data.guardianInfo.firstName || "",
          lastName: patientInfo[0].data.guardianInfo.lastName || "",
          email: patientInfo[0].data.guardianInfo.email || "",
          address: patientInfo[0].data.guardianInfo.address || "",
          phoneNumber: patientInfo[0].data.guardianInfo.phoneNumber || "",
          gender: patientInfo[0].data.guardianInfo.gender || "",
          dateOfBirth: patientInfo[0].data.guardianInfo.dateOfBirth || "",
          maritalStatus: patientInfo[0].data.guardianInfo.maritalStatus || "",
          nationality: patientInfo[0].data.guardianInfo.nationality || "",
          stateOfOrigin: patientInfo[0].data.guardianInfo.stateOfOrigin || "",
          city: patientInfo[0].data.guardianInfo.city || "",
        });
        setMedicalProviderinfo({
          firstName: patientInfo[0].data.medicalProvider.firstName || "",
          lastName: patientInfo[0].data.medicalProvider.lastName || "",
          email: patientInfo[0].data.medicalProvider.email || "",
          address: patientInfo[0].data.medicalProvider.address || "",
          phoneNumber: patientInfo[0].data.medicalProvider.phoneNumber || "",
          gender: patientInfo[0].data.medicalProvider.gender || "",
          dateOfBirth: patientInfo[0].data.medicalProvider.dateOfBirth || "",
          maritalStatus:
            patientInfo[0].data.medicalProvider.maritalStatus || "",
          nationality: patientInfo[0].data.medicalProvider.nationality || "",
          stateOfOrigin:
            patientInfo[0].data.medicalProvider.stateOfOrigin || "",
          city: patientInfo[0].data.medicalProvider.city || "",
        });
      }
      if (records) {
        setIsGettingUser(false);
      }
    } catch (error) {
      console.log("error getting user", error);
    }
  }, [web5, patientInfo]);
  useEffect(() => {
    const existingDid = localStorage.getItem("myDid");
    setUserDid(existingDid);
    if (web5) getPatientProfileDetails();
  }, [getPatientProfileDetails, web5]);

  const handleSendDidModal = () => {
    setSendDidModal(!sendDidModal);
  };
  const handleSendMail = async (e) => {
    e.preventDefault();
    setClicked(true);
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
    setClicked(false);
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
    <div>
      <div className="flex gap-x-4 items-center">
        <h2 className="font-medium text-[1.25rem] text-[#B6B6B6]">Patients</h2>
        <FiChevronsRight size={20} color="#B6B6B6" />
        <h2 className="font-medium text-[1.25rem]">
          {" "}
          {user?.firstName} {user?.lastName}
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-x-8 ">
        <div className=" col-span-8">
          <PatientProfile userInfo={user} />
          <PersonalInformation userInfo={user} />
          <GuardianInformation userInfo={guardianInfo} />
          <PrimaryHealthInformation userInfo={medicalProviderinfo} />
        </div>
        <div className=" col-span-4 flex flex-col gap-y-[1.5rem]">
          <MyDid handleSendDidModal={handleSendDidModal} />
          <DocumentComponent title={"Document"} />
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
                {clicked ? "Sending DID..." : "Send DID"}
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
    </div>
  );
};

export default Profile;
