"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import HeroImageText from "./HeroImageText";
import CustomModal from "@/components/common/CustomModal";
import { useStateContext } from "@/state/AppContext";
import { useRouter } from "next/navigation";

const Hero = ({ checkUserExist, handleGetStarted }) => {
  const router = useRouter();
  let { authModal, setAuthModal, setUserRole, userRole } = useStateContext();

  const [did, setDid] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState("");
  const [congratulationModal, setCongratulationModal] = useState(false);
  const [registrationModal, setRegistrationModal] = useState(false);
  const [scanQrCodeModa, setScanQrCodeModa] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAuthModal(false);
    // setCongratulationModal(true);
  };

  // const handleGetStarted = () => {
  //   if (checkUserExist) {
  //     const storedRole = localStorage.getItem("role");
  //     if (storedRole) {
  //       router.push(`/${storedRole}/settings`);
  //     }
  //   } else {
  //     setAuthModal(true);
  //   }
  // };
  const handleGenerateDid = () => {
    setAuthModal(false);
    setCongratulationModal(true);
  };
  const handleCongratulation = () => {
    setCongratulationModal(false);
    const existingDid = localStorage.getItem("myDid");
    const storedRole = localStorage.getItem("role");
    if (existingDid && storedRole) {
      router.push(`/${storedRole}/settings`);
    } else {
      setRegistrationModal(true);
    }
  };
  const handleRegistration = async (e) => {
    e.preventDefault();
    setUserRole(role);
    setRegistrationModal(false);
    localStorage.setItem("role", role);
    router.push(`/${role}/settings`);
  };
  const handleScanQRCode = () => {
    setAuthModal(false);
    setScanQrCodeModa(true);
  };
  if (isLoading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <p className="text-xl">Loading..</p>
      </div>
    );
  }
  return (
    <div className="px-4 md:px-[6.25rem] py-[3rem] w-screen" id="home">
      <div className="flex flex-col md:flex-row justify-between items-center gap-y-6">
        <div className="w-full md:w-[31.5625rem] ">
          <h2 className="text-[2.5rem] font-medium text-center md:text-left">
            Be in Charge of Your Medical Records
          </h2>
          <p className="my-[1rem] text-[1rem] text-[#5F5F5F]">
            You can be in charge of your medical records and grant access to any
            doctor of your choice in any part of the world for reference
            purposes
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start my-6 md:my-0">
            <button
              onClick={handleGetStarted}
              className="w-[11.875rem] py-[0.5rem] px-[1rem] rounded-[0.25rem] bg-primaryBlue text-white flex justify-center items-center font-[500] leading-6 tracking-[0.02rem "
            >
              {checkUserExist ? "Go to Dashboard" : "Get started"}
            </button>
          </div>
        </div>
        <div className="md:w-[28.625rem md:h-[27.5625] w-full pt-[2rem] px-4 md:px-[4.0625rem] bg-[#DCE6FB] rounded-[0.75rem] md:mr-[6.25rem] relative">
          <div className=" relative">
            <Image
              src="/images/HeroImage.png"
              alt="hero image"
              width={328}
              height={416}
              className=" w-[20.5rem] h-[26rem]"
            />
            <HeroImageText
              text="Decentralized Identity Management"
              className="absolute top-[0.77rem] hidden md:block left-[16.2rem]"
            />
            <HeroImageText
              text="Decentralized Identifier DID"
              className="absolute top-[4rem] hidden md:block  right-[16.2rem]"
            />
            <HeroImageText
              text="Access to Medical Doctors Around the Globe"
              className="hidden md:block absolute top-[19.5rem] right-[16.2rem]"
            />
            <HeroImageText
              text="Decentralized Data Storage and Sharing"
              className="hidden md:block absolute  top-[15.62rem] left-[16.2rem]"
            />
          </div>
        </div>
      </div>
      <CustomModal modalIsOpen={authModal} setIsOpen={setAuthModal}>
        <div className="py-[2.5rem] px-[3.62rem] relative">
          <p className="font-[600] text-[1.25rem] leading-[2.375rem] text-[#2E3646] text-center mb-8">
            DID Authentication
          </p>
          <p className="my-[1.5rem] font-[400] text-[0.875rem] leading-[1.5rem] text-[#5F6D7E] text-center">
            Kindly enter your DID to login or{" "}
            <button
              onClick={handleScanQRCode}
              className="text-primaryBlue cursor-pointer"
            >
              click here
            </button>{" "}
            to scan
          </p>
          <form className="" onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                className="w-[25rem] py-[0.75rem] px-4 rounded-[0.25rem] border border-[#E8E8E8] focus:border-blue-500 block	"
                type="text"
                placeholder="Your DID here"
                name="did"
                value={did}
                onChange={(e) => setDid(e.target.value)}
              />
            </div>
            <p className="my-[1.5rem] font-[400] text-[0.875rem] leading-[1.5rem] text-[#5F6D7E] text-center">
              Don’t have a DID yet?{" "}
              <span
                onClick={handleGenerateDid}
                className="text-primaryBlue cursor-pointer"
              >
                Click here to generate your DID
              </span>
            </p>

            <div className="flex flex-col items-center gap-6 justify-center mt-8">
              <button
                type="submit"
                className="w-[14.125rem] py-[0.5rem] px-4 rounded-[0.25rem] bg-primaryBlue text-white flex justify-center items-center font-[500] leading-6 tracking-[0.02rem disabled:bg-[#DCE6FB]"
                disabled={!did}
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </CustomModal>
      <CustomModal
        modalIsOpen={congratulationModal}
        setIsOpen={setCongratulationModal}
      >
        <div className="py-[2.5rem] px-[3.62rem] relative w-full h-full">
          <p className="font-[600] text-[1.25rem] leading-[2.375rem] text-[#2E3646] text-center mb-8">
            Congratulations
          </p>
          <p className="my-[2rem] font-[400] text-[0.875rem] leading-[1.5rem] text-[#5F6D7E] text-center">
            Your DID has been generated.
          </p>
          <div className="flex flex-col items-center gap-6 justify-center ">
            <button
              className="w-[14.125rem] py-[0.5rem] px-4 rounded-[0.25rem] bg-primaryBlue text-white flex justify-center items-center font-[500] leading-6 tracking-[0.02rem disabled:bg-[#DCE6FB]"
              onClick={handleCongratulation}
            >
              Continue
            </button>
          </div>
        </div>
      </CustomModal>
      <CustomModal
        modalIsOpen={registrationModal}
        setIsOpen={setRegistrationModal}
      >
        <div className="py-[2.5rem] px-[3.12rem] w-[25rem] relative">
          <p className="font-[600] text-[1.25rem] leading-[2.375rem] text-[#2E3646] text-center mb-8">
            Who Are You Registering as?
          </p>
          <form className="" onSubmit={handleRegistration}>
            <div className="my-5">
              <label className="font-[400] text-p0.875rem] leading-[1.25rem] text-[#151515] mb-[0.5rem">
                Patient or Doctor
                <select
                  name="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                  className="w-full py-5 h-[60px]  px-4 rounded-md border border-[#e8e8e8]"
                >
                  <option
                    value={""}
                    className={`w-full py-[4rem] px-4 rounded-md`}
                  >
                    Select Your Role
                  </option>
                  <option
                    className={`w-full py-[4rem] px-4 rounded-md`}
                    value="doctor"
                  >
                    Doctor
                  </option>
                  <option
                    className={`w-full h-[4rem] px-4 rounded-md`}
                    value="patient"
                  >
                    Patient
                  </option>
                </select>
              </label>
            </div>

            <div className="flex flex-col items-center gap-6 justify-center mt-8">
              <button
                type="submit"
                className="w-[14.125rem] py-[0.5rem] px-4 rounded-[0.25rem] bg-primaryBlue text-white flex justify-center items-center font-[500] leading-6 tracking-[0.02rem disabled:bg-[#DCE6FB]"
                disabled={!role}
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </CustomModal>
      <CustomModal modalIsOpen={scanQrCodeModa} setIsOpen={setScanQrCodeModa}>
        <div className="py-[2.5rem] px-[3.62rem] relative w-full h-full">
          <p className="font-[600] text-[1.25rem] leading-[2.375rem] text-[#2E3646] text-center mb-8">
            Scan your DID
          </p>
          <p className="my-[2rem] font-[400] text-[0.875rem] leading-[1.5rem] text-[#5F6D7E] text-center">
            To access your AFIPMedLog on your other device
          </p>
          <div className="w-[21rem] mx-auto">
            <div className="flex gap-x-4 items-center my-3">
              <input
                type="checkbox"
                name=""
                id="first"
                className="w-[0.75rem] h-[0.75rem]"
              />
              <label
                htmlFor="first"
                className="font-[400] text-[0.75rem] leading-[1rem] text-[#090909]"
              >
                Login to your AFIPMedLog desktop app
              </label>
            </div>
            <div className="flex gap-x-4 items-center my-3">
              <input
                type="checkbox"
                name=""
                id="second"
                className="w-[0.75rem] h-[0.75rem]"
              />
              <label
                htmlFor="second"
                className="font-[400] text-[0.75rem] leading-[1rem] text-[#090909]"
              >
                Click on the dropdown arrow close to profile picture at the top
                right hand side of your dashboard
              </label>
            </div>
            <div className="flex gap-x-4 items-center my-3">
              <input
                type="checkbox"
                name=""
                id="third"
                className="w-[0.75rem] h-[0.75rem]"
              />
              <label
                htmlFor="third"
                className="font-[400] text-[0.75rem] leading-[1rem] text-[#090909]"
              >
                Click on your profile
              </label>
            </div>
            <div className="flex gap-x-4 items-center my-3">
              <input
                type="checkbox"
                name=""
                id="fourth"
                className="w-[0.75rem] h-[0.75rem]"
              />
              <label
                htmlFor="fourth"
                className="font-[400] text-[0.75rem] leading-[1rem] text-[#090909]"
              >
                Scan the DID code on your profile page using your other device
              </label>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 justify-center ">
            <button
              className="w-[14.125rem] py-[0.5rem] mt-[2rem] px-4 rounded-[0.25rem] bg-primaryBlue text-white flex justify-center items-center font-[500] leading-6 tracking-[0.02rem disabled:bg-[#DCE6FB]"
              onClick={() => setScanQrCodeModa(false)}
            >
              Feature Not Available Yet
            </button>
          </div>
        </div>
      </CustomModal>
    </div>
  );
};

export default Hero;
