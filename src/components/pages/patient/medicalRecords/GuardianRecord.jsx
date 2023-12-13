"use client";
import React, { useEffect, useState } from "react";
import ContentBox from "./ContentBox";
import CustomModal from "@/components/common/CustomModal";
import { useStateContext } from "@/state/AppContext";
import GuardianForm from "./GuardianForm";
import protocolDefinition from "@/protocols/healthRecord.json";
import useWeb5 from "@/state/useWeb5";
const GuardianRecord = () => {
  const { web5, myDid, initWeb5 } = useWeb5();
  let {
    userRole,
    userInfo,
    guardianRecord,
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
      if (record) {
        getGuardianInfo();
        setIsSuccessful(true);
        // setAlertMessage(status.message);
        setTimeout(() => {
          setIsSuccessful(false);
        }, 4000);
        const { status: myDidStatus } = await record.send(myDid);

        // console.log("status of online dwd >", myDidStatus);
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
          <div className="col col col-span-full md:col-span-7 ">
            <ContentBox
              title={"Name"}
              text={`${guardianData?.guardianInfo?.firstName} ${guardianData?.guardianInfo?.lastName}`}
            />
          </div>
          <div className="col col-span-full md:col-span-3 ">
            <ContentBox
              title={"Relationship with Patient:"}
              text={guardianData?.guardianInfo?.relationship}
            />
          </div>
          <div className="col-span-full md:col-span-2 ">
            <ContentBox
              title={"Gender:"}
              text={guardianData?.guardianInfo?.gender}
            />
          </div>
        </div>
        <div className="grid grid-cols-12 w-full">
          <div className="col-span-full md:col-span-6">
            <ContentBox
              title={"Phone Number:"}
              text={guardianData.guardianInfo?.phoneNumber}
            />
          </div>
          <div className="col-span-full md:col-span-6">
            <ContentBox
              title={"Email Address:"}
              text={guardianData?.guardianInfo?.email}
            />
          </div>
        </div>
        <div className="grid grid-cols-12 w-full">
          <div className="col col-span-full md:col-span-5">
            <ContentBox
              title={"Home Address:"}
              text={guardianData?.guardianInfo?.address}
            />
          </div>
          <div className="col-span-full md:col-span-1">
            <ContentBox
              title={"City:"}
              text={guardianData?.guardianInfo?.city}
            />
          </div>
          <div className="col-span-full md:col-span-3">
            <ContentBox
              title={"State"}
              text={guardianData?.guardianInfo?.stateOfOrigin}
            />
          </div>
          <div className="col-span-full md:col-span-3">
            <ContentBox
              title={"Country:"}
              text={guardianData?.guardianInfo?.nationality}
            />
          </div>
        </div>
      </div>

      {isSuccessful && (
        <div className="absolute px-8 py-2 rounded-md bg-green-600 top-0 right-0">
          <p className="text-white">Guardian Information Saved Successfully</p>
        </div>
      )}
    </section>
  );
};

export default GuardianRecord;
