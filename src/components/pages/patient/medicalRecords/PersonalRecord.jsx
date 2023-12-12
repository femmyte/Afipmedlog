"use client";
import React, { useRef, useState } from "react";
import ContentBox from "./ContentBox";
import CustomModal from "@/components/common/CustomModal";
import { sendEmail } from "@/service/sendEmail";
import { useStateContext } from "@/state/AppContext";
import protocolDefinition from "@/protocols/healthRecord.json";
import QrCodeComponent from "@/service/QrCode";
import Link from "next/link";

const PersonalRecord = () => {
  const ref = useRef();
  let { web5, myDid, userRole, user, userInfo, guardianRecord } =
    useStateContext();
  const [authPhrase, setAuthPhrase] = useState(myDid);
  const [openModal, setOpenModal] = useState(false);
  const [sendDidModal, setsendDidModal] = useState(false);
  const [email, setEmail] = useState("");
  const [userDid, setUserDid] = useState("");
  const [did, setDid] = useState("");
  const [clicked, setClicked] = useState(false);
  // console.log(userInfo);
  const handleClick = async (e) => {
    e.preventDefault();

    setsendDidModal(false);
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 4000);
  };
  // console.log(userInfo);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleOpenModalSendDid = () => {
    setsendDidModal(true);
  };
  const handleSendRecord = async (e) => {
    e.preventDefault();
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    const patientData = {
      data: userInfo[0].data,
      timeSent: currentTime,
      dateSent: currentDate,
      patientDid: myDid,
      healthRecord: [
        {
          allergyRecord: {
            name: "",
            severity: "",
            reaction: "",
            treatment: "",
          },
        },
        {
          cardiologyRecord: {
            heartCondition: "",
            testPerformed: "",
            testResults: "",
            treatment: "",
          },
        },
        {
          diagnosisAndTreatmentInformation: {
            diagnosis: "",
            treatment: "",
            prescribingDoctor: "",
          },
        },
        {
          immunizationRecord: {
            vaccineType: "",
            dateAdministered: "",
            lotNumber: "",
            nextScheduled: "",
          },
        },
        {
          insuranceInformation: {
            provider: "",
            policyNumber: "",
            contactInfo: "",
          },
        },
        {
          labTestResults: {
            testName: "",
            dateConducted: "",
            result: "",
            referenceRange: "",
          },
        },
        {
          medicationHistory: {
            medication: "",
            dosage: "",
            frequency: "",
            prescribingDoctor: "",
          },
        },
        {
          surgeryRecord: {
            surgeryType: "",
            date: "",
            surgeon: "",
            notes: "",
          },
        },
        {
          vitalSigns: {
            bloodPressure: "",
            heartRate: "",
            respiratoryRate: "",
            bodyTemperature: "",
          },
        },
      ],
    };
    try {
      const userInfoProtocol = protocolDefinition;
      const { record } = await web5.dwn.records.write({
        data: patientData,
        message: {
          protocol: userInfoProtocol.protocol,
          protocolPath: "patientInfo",
          schema: userInfoProtocol.types.patientInfo.schema,
          dataFormat: "application/json",
          recipient: userDid,
        },
      });
      const { status } = await record.send(userDid);
      if (status.code === 202) {
        console.log("Record successfully sent to the recipient");
        setOpenModal(false);
        setUserDid("");
        setClicked(true);
        setTimeout(() => {
          setClicked(false);
        }, 4000);
      } else {
        console.log("Error sending the record");
      }
    } catch (error) {
      console.error("error occured", error);
    }
  };
  return (
    <section className="relative">
      {/* <div>
        <h1>Scan the QR Code to Authenticate other device</h1>
        <QrCodeComponent phrase={myDid} />
        {/* <Link href={`/${userRole}/otherDevice?phrase=${authPhrase}`}>
          Continue to Other Device
        </Link> *
      </div> */}
      <div>
        <div className="flex items-center justify-between mb-[1.5rem]">
          <p className="text-[1.25rem] text-primaryBlue leading-[1.75rem] font-[500] tracking-[0.025rem]">
            Personal Information
          </p>

          <div className="flex gap-x-4">
            <button
              className="text-[0.875rem] text-primaryBlue leading-[1.75rem] font-[400] tracking-[0.025rem]"
              onClick={handleOpenModal}
            >
              Share Record
            </button>
          </div>
          {userRole === "doctor" && (
            <div className="flex gap-x-4">
              <button
                className="text-[0.875rem] text-primaryBlue leading-[1.75rem] font-[400] tracking-[0.025rem]"
                onClick={handleOpenModalSendDid}
              >
                Send Did
              </button>
            </div>
          )}
        </div>
        <div className="grid grid-cols-12 w-full h-max">
          <div className="col col-span-8">
            <ContentBox
              title={"Name"}
              text={`${user?.personalInfo?.firstName} ${user?.personalInfo?.lastName}`}
            />
          </div>
          <div className="col-span-2">
            <ContentBox
              title={"Date of Birth"}
              text={user?.personalInfo?.dateOfBirth}
            />
          </div>
          <div className="col-span-2">
            <ContentBox title={"Gender:"} text={user?.personalInfo?.gender} />
          </div>
        </div>
        <div className="grid grid-cols-12 w-full h-max">
          <div className="col col-span-2">
            <ContentBox
              title={"Marital Status:"}
              text={user?.personalInfo?.maritalStatus}
            />
          </div>
          <div className="col-span-5">
            <ContentBox
              title={"Phone Number:"}
              text={user?.personalInfo?.phoneNumber}
            />
          </div>
          <div className="col-span-5">
            <ContentBox
              title={"Email Address:"}
              text={user?.personalInfo?.email}
            />
          </div>
        </div>
        <div className="grid grid-cols-12 w-full h-max">
          <div className="col col-span-5">
            <ContentBox
              title={"Home Address:"}
              text={user?.personalInfo?.address}
            />
          </div>
          <div className="col-span-1">
            <ContentBox title={"City:"} text={user?.personalInfo?.city} />
          </div>
          <div className="col-span-3">
            <ContentBox
              title={"State"}
              text={user?.personalInfo?.stateOfOrigin}
            />
          </div>
          <div className="col-span-3">
            <ContentBox
              title={"Country:"}
              text={user?.personalInfo?.nationality}
            />
          </div>
        </div>
      </div>
      <CustomModal modalIsOpen={openModal} setIsOpen={setOpenModal}>
        <div className="py-[2.5rem] px-[3.62rem]">
          <p className="font-[600] text-[1.25rem] leading-[2.375rem] text-[#2E3646] text-center mb-8">
            Share Medical Record
          </p>
          {/* <p className='my-[1.5rem] font-[400] text-[0.875rem] leading-[1.5rem] text-[#5F6D7E] text-center'>
						What type of medical record ?
					</p> */}
          <form className="">
            <label
              htmlFor="userDid"
              className="block font-[400] text-[0.875rem] text-[#151515] mb-[0.5rem] "
            >
              Enter Recipients’ DID{" "}
            </label>
            <input
              className="w-[25rem] py-[0.75rem] px-4 rounded-[0.25rem] border border-[#E8E8E8] focus:border-blue-500 block	"
              placeholder="Recipients’ DID "
              id="userDid"
              type="text"
              name="userDid"
              value={userDid}
              onChange={(e) => setUserDid(e.target.value)}
            />
            <div className="flex flex-col items-center gap-6 justify-center mt-8">
              <button
                className="w-[10.125rem] py-[0.5rem] px-4 rounded-[0.25rem] bg-primaryBlue text-white flex justify-center items-center font-[500] leading-6 tracking-[0.02rem disabled:bg-[#DCE6FB]"
                disabled={!userDid}
                onClick={handleSendRecord}
              >
                Share Record
              </button>
            </div>
          </form>
        </div>
      </CustomModal>
      <CustomModal modalIsOpen={sendDidModal} setIsOpen={setsendDidModal}>
        <div className="py-[2.5rem] px-[3.62rem] relative">
          <p className="font-[600] text-[1.25rem] leading-[2.375rem] text-[#2E3646] text-center mb-8">
            Send your Did to your patience
          </p>
          <p className="my-[1.5rem] font-[400] text-[0.875rem] leading-[1.5rem] text-[#5F6D7E] text-center">
            you can copy your Did by pressing the copy DID button at the top
          </p>
          <form
            className=""
            ref={ref}
            action={async (formData) => {
              ref.current.reset();
              await sendEmail(formData);
            }}
          >
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
              />
            </div>
            <div className="">
              <label
                htmlFor="did"
                className="block font-[400] text-[0.875rem] text-[#151515] mb-[0.5rem] "
              >
                Enter Recipients’ DID{" "}
              </label>
              <input
                className="w-[25rem] py-[0.75rem] px-4 rounded-[0.25rem] border border-[#E8E8E8] focus:border-blue-500 block	"
                placeholder="Enter Recipient DID"
                type="text"
                id="did"
                name="did"
                required
              />
              <input
                className="hidden w-[25rem] py-[0.75rem] px-4 rounded-[0.25rem] border border-[#E8E8E8] focus:border-blue-500"
                placeholder="Enter Your DID"
                type="text"
                name="name"
                value={user?.personalInfo?.name}
                hidden
                readOnly
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
      {clicked && (
        <div className="absolute px-8 py-2 rounded-md bg-green-600 top-0 right-0">
          <p className="text-white">Your Record has been send successfully</p>
        </div>
      )}
    </section>
  );
};

export default PersonalRecord;
