"use client";
import React, { useEffect, useState } from "react";
import ContentBox from "./ContentBox";
import CustomModal from "@/components/common/CustomModal";
import { useStateContext } from "@/state/AppContext";
import GuardianForm from "./GuardianForm";
import protocolDefinition from "@/protocols/healthRecord.json";
const GuardianRecord = () => {
  let {
    myDid,
    userRole,
    userInfo,
    guardianRecord,
    web5,
    user: guardianData,
    getGuardianInfo,
    guardianInfo,
  } = useStateContext();
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  // const [guardianRecord, setguardianRecord] = useState(null);

  // const [user, setUser] = useState({
  //   name: "",
  //   email: "",
  //   address: "",
  //   phoneNumber: "",
  //   gender: "",
  //   relationship: "",
  //   nationality: "",
  //   stateOfOrigin: "",
  //   city: "",
  // });
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  // const validate = () => {
  //   if (
  //     user.name === "" ||
  //     user.email === "" ||
  //     user.address === "" ||
  //     user.phoneNumber === "" ||
  //     user.gender === "" ||
  //     user.relationship === "" ||
  //     user.nationality === "" ||
  //     user.stateOfOrigin === "" ||
  //     user.city === ""
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpenModal(false);

    setIsLoading(true);
    try {
      console.log("running");
      const userInfoProtocol = protocolDefinition;
      const userData = {
        guardianInfo: {
          // '@type': 'userInfo',
          name: user.name,
          email: user.email,
          address: user.address,
          phoneNumber: user.phoneNumber,
          gender: user.gender,
          relationship: user.relationship,
          nationality: user.nationality,
          stateOfOrigin: user.stateOfOrigin,
          city: user.city,
        },
      };
      const { record, status } = await web5.dwn.records.create({
        data: userData,
        message: {
          protocol: userInfoProtocol.protocol,
          protocolPath: "guardianInfo",
          schema: userInfoProtocol.types.guardianInfo.schema,
          recipient: userInfo.author,
          dataFormat: "application/json",
          parentId: userInfo.id,
          contextId: userInfo.contextId,
        },
      });
      // setguardianRecord(record);
      console.log(status, record);
      if (record) {
        getGuardianInfo();
        setIsSuccessful(true);
        // setAlertMessage(status.message);
        setTimeout(() => {
          setIsSuccessful(false);
        }, 4000);
        const { status: myDidStatus } = await record.send(myDid);

        console.log("status of online dwd >", myDidStatus);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  if (isLoading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <p className="text-xl">Loading..</p>
      </div>
    );
  }
  return (
    <section className="relative">
      <div className="mt-[2.5rem]">
        <div className="flex items-center justify-between mb-[1.5rem]">
          <p className="text-[1.25rem] text-primaryBlue leading-[1.75rem] font-[500] tracking-[0.025rem]">
            Guardian Record
          </p>
          {userRole === "patient" && (
            <button
              className="text-[0.875rem] text-primaryBlue leading-[1.75rem] font-[400] tracking-[0.025rem]"
              onClick={() => setOpenModal(true)}
            >
              Add Record
            </button>
          )}
        </div>
        <div className="grid grid-cols-12  w-full">
          <div className="col col-span-7 ">
            <ContentBox
              title={"Name"}
              text={`${guardianData.guardianInfo?.firstName} ${guardianData.guardianInfo?.lastName}`}
            />
          </div>
          <div className="col-span-3 ">
            <ContentBox
              title={"Relationship with Patient:"}
              text={guardianData.guardianInfo?.relationship}
            />
          </div>
          <div className="col-span-2 ">
            <ContentBox
              title={"Gender:"}
              text={guardianData.guardianInfo?.gender}
            />
          </div>
        </div>
        <div className="grid grid-cols-12 w-full">
          <div className="col-span-6">
            <ContentBox
              title={"Phone Number:"}
              text={guardianData.guardianInfo?.phoneNumber}
            />
          </div>
          <div className="col-span-6">
            <ContentBox
              title={"Email Address:"}
              text={guardianData.guardianInfo?.email}
            />
          </div>
        </div>
        <div className="grid grid-cols-12 w-full">
          <div className="col col-span-5">
            <ContentBox
              title={"Home Address:"}
              text={guardianData.guardianInfo?.address}
            />
          </div>
          <div className="col-span-1">
            <ContentBox
              title={"City:"}
              text={guardianData.guardianInfo?.city}
            />
          </div>
          <div className="col-span-3">
            <ContentBox
              title={"State"}
              text={guardianData.guardianInfo?.stateOfOrigin}
            />
          </div>
          <div className="col-span-3">
            <ContentBox
              title={"Country:"}
              text={guardianData.guardianInfo?.nationality}
            />
          </div>
        </div>
      </div>
      {/* <CustomModal modalIsOpen={openModal} setIsOpen={setOpenModal}>
        <div className="py-[2.5rem] px-[3.62rem]">
          <p className="font-[600] text-[1.25rem] leading-[2.375rem] text-[#2E3646] text-center mb-8">
            Share Medical Record
          </p>
          <div className="p-6 relative">
            <form onSubmit={handleSubmit}>
              <div className={`grid gap-x-4 grid-cols-2`}>
                <div className={`w-full`}>
                  <label>
                    Name:
                    <input
                      type="text"
                      name="name"
                      value={user.name}
                      onChange={handleInputChange}
                      className={`w-full p-2 rounded-md border border-gray-300 focus:border-blue-500`}
                    />
                  </label>
                </div>
                <div className={`w-full`}>
                  <label>
                    Email:
                    <input
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleInputChange}
                      className={`w-full p-2 rounded-md border border-gray-300 focus:border-blue-500`}
                    />
                  </label>
                </div>
              </div>
              <div className={`grid gap-x-4 grid-cols-2 mt-4`}>
                <div className={`w-full`}>
                  <label>
                    Guardian relationship:
                    <input
                      type="text"
                      name="relationship"
                      value={user.relationship}
                      onChange={handleInputChange}
                      className={`w-full p-2 rounded-md border border-gray-300 focus:border-blue-500`}
                    />
                  </label>
                </div>
                <div className={`w-full`}>
                  <label>
                    Address:
                    <input
                      type="text"
                      name="address"
                      value={user.address}
                      onChange={handleInputChange}
                      className={`w-full p-2 rounded-md border border-gray-300 focus:border-blue-500`}
                    />
                  </label>
                </div>
              </div>
              <div className={`grid gap-x-4 grid-cols-2 mt-4`}>
                <div className={`w-full`}>
                  <label>
                    Phone Number:
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={user.phoneNumber}
                      onChange={handleInputChange}
                      className={`w-full p-2 rounded-md border border-gray-300 focus:border-blue-500`}
                    />
                  </label>
                </div>
                <div className={`w-full`}>
                  <label>
                    Gender:
                    <select
                      name="gender"
                      value={user.gender}
                      onChange={handleInputChange}
                      required
                      className={`w-full p-2 rounded-md border border-gray-300 focus:border-blue-500`}
                    >
                      <option>Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </label>
                </div>
              </div>
              <div className={`grid gap-x-4 grid-cols-2 mt-4`}>
                <div className={`w-full`}>
                  <label>
                    City:
                    <input
                      type="text"
                      name="city"
                      value={user.city}
                      onChange={handleInputChange}
                      className={`w-full p-2 rounded-md border border-gray-300 focus:border-blue-500`}
                    />
                  </label>
                </div>
                <div className={`w-full`}>
                  <label>
                    State Of Origin:
                    <input
                      type="text"
                      name="stateOfOrigin"
                      value={user.stateOfOrigin}
                      onChange={handleInputChange}
                      className={`w-full p-2 rounded-md border border-gray-300 focus:border-blue-500`}
                    />
                  </label>
                </div>
              </div>
              <div className={`grid gap-x-4 grid-cols-2 mt-4`}>
                <div className={`w-full`}>
                  <label>
                    Nationality:
                    <input
                      type="text"
                      name="nationality"
                      value={user.nationality}
                      onChange={handleInputChange}
                      className={`w-full p-2 rounded-md border border-gray-300 focus:border-blue-500`}
                    />
                  </label>
                </div>
              </div>
              <div className="flex justify-center mt-[4rem]">
                <button
                  type="submit"
                  className="w-[10.125rem] py-[0.5rem] px-4 rounded-[0.25rem] bg-primaryBlue text-white flex justify-center items-center font-[500] leading-6 tracking-[0.02rem disabled:bg-[#DCE6FB]"
                  disabled={validate()}
                >
                  Create Record
                </button>
              </div>
            </form>
          </div>
        </div>
      </CustomModal> */}
      {isSuccessful && (
        <div className="absolute px-8 py-2 rounded-md bg-green-600 top-0 right-0">
          <p className="text-white">Guardian Information Saved Successfully</p>
        </div>
      )}
    </section>
  );
};

export default GuardianRecord;
