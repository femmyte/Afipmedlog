"use client";
import CustomInput from "@/components/common/CustomInput";
import React, { useState, useEffect, useCallback } from "react";
import CustomFormField from "./CustomField";
import CountrySelect from "@/components/common/CountrySelect";
import StateSelect from "@/components/common/StateSelect";
import protocolDefinition from "@/protocols/healthRecord.json";
import { useRouter } from "next/navigation";
import { useStateContext } from "@/state/AppContext";
import CustomModal from "@/components/common/CustomModal";
const Registration = () => {
  const router = useRouter();
  const { web5, myDid, userRole, setUserInfo, userInfo, setUserRecord } =
    useStateContext();
  // console.log(web5)
  const [isLoading, setIsLoading] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [isGettingUser, setIsGettingUser] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phoneNumber: "",
    gender: "",
    dateOfBirth: "",
    maritalStatus: "",
    nationality: "",
    stateOfOrigin: "",
    city: "",
  });
  const [guardian, setGuardian] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phoneNumber: "",
    gender: "",
    relationship: "",
    nationality: "",
    stateOfOrigin: "",
    city: "",
  });
  const [provider, setProvider] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    address: "",
    phoneNumber: "",
    specialty: "",
    nationality: "",
    stateOfOrigin: "",
    city: "",
  });
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  //   const handleInputChange = (event) => {
  //     const { name, value } = event.target;
  //     setUser({ ...user, [name]: value });
  //   };
  const handleUserInputChange = (fieldName, value) => {
    setUser((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };
  const handleGuardianInputChange = (fieldName, value) => {
    setGuardian((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };
  const handleProviderInputChange = (fieldName, value) => {
    setProvider((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };
  const validate = () => {
    if (
      user.firstName === "" ||
      user.lastName === "" ||
      user.email === "" ||
      user.address === "" ||
      user.phoneNumber === "" ||
      user.gender === "" ||
      user.dateOfBirth === "" ||
      user.maritalStatus === "" ||
      user.nationality === "" ||
      user.stateOfOrigin === "" ||
      user.city === "" ||
      guardian.firstName === "" ||
      guardian.lastName === "" ||
      guardian.email === "" ||
      guardian.address === "" ||
      guardian.phoneNumber === "" ||
      guardian.gender === "" ||
      guardian.relationship === "" ||
      guardian.nationality === "" ||
      guardian.stateOfOrigin === "" ||
      guardian.city === "" ||
      provider.firstName === "" ||
      provider.lastName === "" ||
      provider.email === "" ||
      provider.address === "" ||
      provider.phoneNumber === "" ||
      provider.gender === "" ||
      provider.specialty === "" ||
      provider.nationality === "" ||
      provider.stateOfOrigin === "" ||
      provider.city === ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  const getUser = useCallback(async () => {
    setIsGettingUser(true);
    console.log("getting user");
    try {
      const { records } = await web5.dwn.records.query({
        message: {
          filter: {
            schema: protocolDefinition.types.patientInfo.schema,
          },
        },
      });

      console.log(records);
      // add entry to userInfo
      for (let record of records) {
        const data = await record.data.json();
        const list = { record, data, id: record.id };
        setUserInfo((user) => {
          if (!user.some((item) => item.id === list.id)) {
            return [...user, list];
          }
          return user;
        });
      }
      console.log(userInfo);
      if (userInfo.length > 0) {
        setUser({
          firstName: userInfo[0].data.personalInfo.firstName || "",
          lastName: userInfo[0].data.personalInfo.lastName || "",
          email: userInfo[0].data.personalInfo.email || "",
          address: userInfo[0].data.personalInfo.address || "",
          phoneNumber: userInfo[0].data.personalInfo.phoneNumber || "",
          gender: userInfo[0].data.personalInfo.gender || "",
          dateOfBirth: userInfo[0].data.personalInfo.dateOfBirth || "",
          maritalStatus: userInfo[0].data.personalInfo.maritalStatus || "",
          nationality: userInfo[0].data.personalInfo.nationality || "",
          stateOfOrigin: userInfo[0].data.personalInfo.stateOfOrigin || "",
          city: userInfo[0].data.personalInfo.city || "",
        });
        setGuardian({
          firstName: userInfo[0].data.guardianInfo.firstName || "",
          lastName: userInfo[0].data.guardianInfo.lastName || "",
          email: userInfo[0].data.guardianInfo.email || "",
          address: userInfo[0].data.guardianInfo.address || "",
          phoneNumber: userInfo[0].data.guardianInfo.phoneNumber || "",
          gender: userInfo[0].data.guardianInfo.gender || "",
          relationship: userInfo[0].data.guardianInfo.relationship || "",
          nationality: userInfo[0].data.guardianInfo.nationality || "",
          stateOfOrigin: userInfo[0].data.guardianInfo.stateOfOrigin || "",
          city: userInfo[0].data.guardianInfo.city || "",
        });
        setProvider({
          firstName: userInfo[0].data.medicalProvider.firstName || "",
          lastName: userInfo[0].data.medicalProvider.lastName || "",
          gender: userInfo[0].data.medicalProvider.gender || "",
          email: userInfo[0].data.medicalProvider.email || "",
          address: userInfo[0].data.medicalProvider.address || "",
          phoneNumber: userInfo[0].data.medicalProvider.phoneNumber || "",
          specialty: userInfo[0].data.medicalProvider.specialty || "",
          nationality: userInfo[0].data.medicalProvider.nationality || "",
          stateOfOrigin: userInfo[0].data.medicalProvider.stateOfOrigin || "",
          city: userInfo[0].data.medicalProvider.city || "",
        });
      }
      if (records) {
        setIsGettingUser(false);
      }
      return userInfo;
    } catch (error) {
      console.log("error getting user", error);
    }
  }, [web5, userInfo]);
  useEffect(() => {
    if (web5) getUser();
  }, [getUser, web5]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log("running");
      const storedRole = localStorage.getItem("role");
      const userInfoProtocol = protocolDefinition;
      const patientInfo = {
        role: storedRole,
        personalInfo: user,
        guardianInfo: guardian,
        medicalProvider: provider,
      };
      const { record, status } = await web5.dwn.records.create({
        data: patientInfo,
        message: {
          protocol: userInfoProtocol.protocol,
          protocolPath: "patientInfo",
          schema: userInfoProtocol.types.patientInfo.schema,
          recipient: myDid,
        },
      });
      setUserRecord(record);
      console.log(status);
      if (status.code === 202) {
        getUser();
        setIsLoading(false);
        setSuccessModal(true);
      }
      const { status: myDidStatus } = await record.send(myDid);
      console.log("status of online dwd >", myDidStatus);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <div className="h-screen w-screen absolute top-0 left-0 right-0 bottom-0 bg-black/5">
        {/* <p className="text-xl">Getting Your information..</p> */}
      </div>
    );
  }
  return (
    <div>
      <h1 className="font-[500] text-[2rem] leading-[2.5rem] text-[#151515] tracking-[0.04rem] my-[2.5rem]">
        Update Your Profile
      </h1>
      <div className="w-[10.75rem] h-[10.75rem] py-[2.4375rem] px-[2.5rem] flex justify-center items-center rounded-[1.125rem] bg-[#f2f2f2] mb-[2.5rem]"></div>
      <p className="text-[1.25rem] text-primaryBlue leading-[1.75rem] font-[500] tracking-[0.025rem] mb-[1.5rem]">
        Personal Information
      </p>
      <form className="w-[51.25rem]" onSubmit={handleSubmit}>
        <div className="">
          <div className="grid grid-cols-2 gap-x-[1.25rem]">
            <CustomInput
              label="First name"
              value={user.firstName}
              onChange={(value) => handleUserInputChange("firstName", value)}
            />
            <CustomInput
              label="Last name"
              value={user.lastName}
              onChange={(value) => handleUserInputChange("lastName", value)}
            />
          </div>
          <div className="grid grid-cols-3 gap-x-[1.25rem]">
            <CustomInput
              label="Date of Birth"
              value={user.dateOfBirth}
              onChange={(value) => handleUserInputChange("dateOfBirth", value)}
              type="date"
            />
            <CustomInput
              label="Gender"
              type="select"
              options={[
                { label: "Select Gender", value: "" },
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
                { label: "Other", value: "other" },
              ]}
              value={user.gender}
              onChange={(value) => handleUserInputChange("gender", value)}
            />
            <CustomInput
              label="Marital status"
              type="select"
              options={[
                { label: "Select Marital Status", value: "" },
                { label: "Single", value: "single" },
                { label: "Married", value: "married" },
                { label: "Other", value: "other" },
              ]}
              value={user.maritalStatus}
              onChange={(value) =>
                handleUserInputChange("maritalStatus", value)
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-x-[1.25rem]">
            <CustomInput
              label="Phone number"
              value={user.phoneNumber}
              onChange={(value) => handleUserInputChange("phoneNumber", value)}
              type="tel"
            />
            <CustomInput
              label="Email address"
              value={user.email}
              onChange={(value) => handleUserInputChange("email", value)}
              type="email"
            />
          </div>
          <div className="grid grid-cols-4 gap-x-[1.25rem]">
            <CustomInput
              label="Home address"
              value={user.address}
              onChange={(value) => handleUserInputChange("address", value)}
            />
            <CustomInput
              label="City"
              value={user.city}
              onChange={(value) => handleUserInputChange("city", value)}
            />
            <CustomInput
              label="State"
              value={user.stateOfOrigin}
              onChange={(value) =>
                handleUserInputChange("stateOfOrigin", value)
              }
            />
            {/* <CountrySelect
              label="Country"
              onChange={(value) => setSelectedCountry(value)}
            /> */}
            <CustomInput
              label="Nationality"
              value={user.nationality}
              onChange={(value) => handleUserInputChange("nationality", value)}
            />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-[1.25rem] text-primaryBlue leading-[1.75rem] font-[500] tracking-[0.025rem] mb-[1.5rem]">
            Guardian Information
          </p>
          <div className="grid grid-cols-2 gap-x-[1.25rem]">
            <CustomInput
              label="First name"
              value={guardian.firstName}
              onChange={(value) =>
                handleGuardianInputChange("firstName", value)
              }
            />
            <CustomInput
              label="Last name"
              value={guardian.lastName}
              onChange={(value) => handleGuardianInputChange("lastName", value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-x-[1.25rem]">
            <CustomInput
              label="Relationship"
              value={guardian.relationship}
              onChange={(value) =>
                handleGuardianInputChange("relationship", value)
              }
            />
            <CustomInput
              label="Gender"
              type="select"
              options={[
                { label: "Select Gender", value: "" },
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
                { label: "Other", value: "other" },
              ]}
              value={guardian.gender}
              onChange={(value) => handleGuardianInputChange("gender", value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-x-[1.25rem]">
            <CustomInput
              label="Phone number"
              value={guardian.phoneNumber}
              onChange={(value) =>
                handleGuardianInputChange("phoneNumber", value)
              }
              type="tel"
            />
            <CustomInput
              label="Email address"
              value={guardian.email}
              onChange={(value) => handleGuardianInputChange("email", value)}
              type="email"
            />
          </div>
          <div className="grid grid-cols-4 gap-x-[1.25rem]">
            <CustomInput
              label="Home address"
              value={guardian.address}
              onChange={(value) => handleGuardianInputChange("address", value)}
            />
            <CustomInput
              label="City"
              value={guardian.city}
              onChange={(value) => handleGuardianInputChange("city", value)}
            />
            <CustomInput
              label="State"
              value={guardian.stateOfOrigin}
              onChange={(value) =>
                handleGuardianInputChange("stateOfOrigin", value)
              }
            />
            {/* <CountrySelect
              label="Country"
              onChange={(value) => setSelectedCountry(value)}
            /> */}
            <CustomInput
              label="Nationality"
              value={guardian.nationality}
              onChange={(value) =>
                handleGuardianInputChange("nationality", value)
              }
            />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-[1.25rem] text-primaryBlue leading-[1.75rem] font-[500] tracking-[0.025rem] mb-[1.5rem]">
            Primary Medical Provider
          </p>
          <div className="grid grid-cols-2 gap-x-[1.25rem]">
            <CustomInput
              label="First name"
              value={provider.firstName}
              onChange={(value) =>
                handleProviderInputChange("firstName", value)
              }
            />
            <CustomInput
              label="Last name"
              value={provider.lastName}
              onChange={(value) => handleProviderInputChange("lastName", value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-x-[1.25rem]">
            <CustomInput
              label="Specialty"
              value={provider.specialty}
              onChange={(value) =>
                handleProviderInputChange("specialty", value)
              }
            />
            <CustomInput
              label="Gender"
              type="select"
              options={[
                { label: "Select Gender", value: "" },
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
                { label: "Other", value: "other" },
              ]}
              value={provider.gender}
              onChange={(value) => handleProviderInputChange("gender", value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-x-[1.25rem]">
            <CustomInput
              label="Phone number"
              value={provider.phoneNumber}
              onChange={(value) =>
                handleProviderInputChange("phoneNumber", value)
              }
              type="tel"
            />
            <CustomInput
              label="Email address"
              value={provider.email}
              onChange={(value) => handleProviderInputChange("email", value)}
              type="email"
            />
          </div>
          <div className="grid grid-cols-4 gap-x-[1.25rem]">
            <CustomInput
              label="Home address"
              value={provider.address}
              onChange={(value) => handleProviderInputChange("address", value)}
            />
            <CustomInput
              label="City"
              value={provider.city}
              onChange={(value) => handleProviderInputChange("city", value)}
            />
            <CustomInput
              label="State"
              value={provider.stateOfOrigin}
              onChange={(value) =>
                handleProviderInputChange("stateOfOrigin", value)
              }
            />
            {/* <CountrySelect
              label="Country"
              onChange={(value) => setSelectedCountry(value)}
            /> */}
            <CustomInput
              label="Nigeria"
              value={provider.nationality}
              onChange={(value) =>
                handleProviderInputChange("nationality", value)
              }
            />
          </div>
        </div>
        <div className="flex justify- mt-[4rem]">
          <button
            type="submit"
            className="w-[15.25rem] py-[0.5rem] px-4 rounded-[0.25rem] bg-primaryBlue text-white flex justify-center items-center font-[500] leading-6 tracking-[0.02rem disabled:bg-[#DCE6FB]"
            disabled={validate()}
          >
            {isLoading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
      <CustomModal modalIsOpen={successModal} setIsOpen={setSuccessModal}>
        <div className="py-[2.5rem] px-[3.62rem] relative w-full h-full">
          <p className="font-[600] text-[1.25rem] leading-[2.375rem] text-[#2E3646] text-center mb-8">
            Success
          </p>
          <p className="my-[2rem] font-[400] text-[0.875rem] leading-[1.5rem] text-[#5F6D7E] text-center">
            Your profile changes has been saved.
          </p>
          <div className="flex flex-col items-center gap-6 justify-center ">
            <button
              className="w-[14.125rem] py-[0.5rem] px-4 rounded-[0.25rem] bg-primaryBlue text-white flex justify-center items-center font-[500] leading-6 tracking-[0.02rem disabled:bg-[#DCE6FB]"
              onClick={() => {
                setSuccessModal(false);
              }}
            >
              Done
            </button>
          </div>
        </div>
      </CustomModal>
    </div>
  );
};

export default Registration;
