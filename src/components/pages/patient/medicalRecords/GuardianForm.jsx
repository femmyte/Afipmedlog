"use client";
import { useStateContext } from "@/state/AppContext";
// import { Web5 } from '@web5/api';
import React, { useContext, useEffect, useState } from "react";
// import protocolDefinition from '@/protocols/profileProtocol.json';
import protocolDefinition from "@/protocols/healthRecord.json";
import { useRouter } from "next/navigation";
const GuardianForm = ({ handleOpenModal }) => {
  const router = useRouter();
  const { web5, myDid, userRecord, userInfo } = useStateContext();
  const [isLoading, setIsLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  // const [userInfo, setUserInfo] = useState([]);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
    gender: "",
    relationship: "",
    nationality: "",
    stateOfOrigin: "",
    city: "",
  });

  // console.log(userInfo);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
          recipient: myDid,
          dataFormat: "application/json",
          parentId: userInfo.id,
          contextId: userInfo.contextId,
        },
      });
      if (status === 202) {
        setIsSuccessful(true);
        setAlertMessage(status.message);
        setTimeout(() => {
          // setClicked(false);
        }, 4000);
      }
      if (status.code === 202) {
        // getUser();
        const { status: myDidStatus } = await record.send(myDid);
        // console.log("status of online dwd >", myDidStatus);
        handleOpenModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
            className="text-white rounded-md px-5 py-3 bg-primaryBlue"
            type="submit"
          >
            Create Update
          </button>
        </div>
      </form>
      {isSuccessful && (
        <div className="absolute px-8 py-2 rounded-md bg-green-600 top-0 right-0">
          <p className="text-white">{alertMessage}</p>
        </div>
      )}
    </div>
  );
};

export default GuardianForm;
