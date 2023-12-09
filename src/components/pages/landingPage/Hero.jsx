"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import HeroImageText from "./HeroImageText";
import CustomModal from "@/components/common/CustomModal";
import { useStateContext } from "@/state/AppContext";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  let { authModal, setAuthModal, setWeb5, setMyDid, setUserRole, userRole } =
    useStateContext();

  const [did, setDid] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState("");
  const [congratulationModal, setCongratulationModal] = useState(false);
  const [registrationModal, setRegistrationModal] = useState(false);
  const [checkUserExist, setCheckUserExist] = useState(false);
  useEffect(() => {
    const existingDid = localStorage.getItem("myDid");
    if (existingDid) {
      // router.push(`/${userRole}/settings`);
      setCheckUserExist(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAuthModal(false);
    // setCongratulationModal(true);
  };
  const handleRegistration = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // const existingDid = localStorage.getItem("myDid");
    // if (existingDid) {
    //   router.push(`/${userRole}/settings`);
    // }
    try {
      const { Web5 } = await import("@web5/api/browser");
      const { web5, did } = await Web5.connect({ sync: "5s" });
      localStorage.setItem("myDid", did);
      localStorage.setItem("role", role);
      setWeb5(web5);
      setMyDid(did);
      setUserRole(role);
      router.push(`/${role}/settings`);
    } catch (error) {
      console.error("Error Singning up:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleGetStarted = () => {
    if (checkUserExist) {
      const storedRole = localStorage.getItem("role");
      router.push(`/${storedRole}/settings`);
    } else {
      setAuthModal(true);
    }
  };
  if (isLoading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <p className="text-xl">Loading..</p>
      </div>
    );
  }
  return (
    <div className="px-[6.25rem] py-[3rem]">
      <div className="flex justify-between items-center">
        <div className="w-[31.5625rem] ">
          <h2 className="text-[2.5rem] font-medium">
            Be in Charge of Your Medical Records
          </h2>
          <p className="my-[1rem] text-[1rem] text-[#5F5F5F]">
            You can be in charge of your medical records and grant access to any
            doctor of your choice in any part of the world for reference
            purposes
          </p>
          <button
            onClick={handleGetStarted}
            className="w-[11.875rem] py-[0.5rem] px-[1rem] rounded-[0.25rem] bg-primaryBlue text-white flex justify-center items-center font-[500] leading-6 tracking-[0.02rem "
          >
            Get started
          </button>
        </div>
        <div className="w-[28.625rem h-[27.5625]  pt-[2rem] px-[4.0625rem] bg-[#DCE6FB] rounded-[0.75rem] mr-[6.25rem] relative">
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
              className="absolute top-[0.77rem] left-[16.2rem]"
            />
            <HeroImageText
              text="Decentralized Identifier DID"
              className="absolute top-[4rem] right-[16.2rem]"
            />
            <HeroImageText
              text="Access to Medical Doctors Around the Globe"
              className="absolute top-[19.5rem] right-[16.2rem]"
            />
            <HeroImageText
              text="Decentralized Data Storage and Sharing"
              className="absolute  top-[15.62rem] left-[16.2rem]"
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
            <span className="text-primaryBlue cursor-pointer">click here</span>{" "}
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
                onClick={() => {
                  setCongratulationModal(true);
                  setAuthModal(false);
                }}
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
              onClick={() => {
                setCongratulationModal(false);
                setRegistrationModal(true);
              }}
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
                  className="w-full py-5 h-12 px-4 rounded-md border border-[#e8e8e8]"
                >
                  <option value={""} className={`w-full py-5 px-4 rounded-md`}>
                    Select Your Role
                  </option>
                  <option
                    className={`w-full py-5 px-4 rounded-md`}
                    value="doctor"
                  >
                    Doctor
                  </option>
                  <option
                    className={`w-full py-5 px-4 rounded-md`}
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
    </div>
  );
};

export default Hero;
