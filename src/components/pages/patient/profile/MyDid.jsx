"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import QrCodeComponent from "@/service/QrCode";
import { useStateContext } from "@/state/AppContext";
import { copyToClipboard } from "@/utils/utilities";

const MyDid = ({ handleSendDidModal }) => {
  const [authPhrase, setAuthPhrase] = useState("");
  const [notification, setNotification] = useState("");
  const [isScanning, setIsScanning] = useState(true);
  const [emailSentMessage, setEmailSentMessage] = useState("");
  const [sendMessage, setSendMessage] = useState(false);
  const [copiedDid, setCopiedDid] = useState(false);
  useEffect(() => {
    const existingDid = localStorage.getItem("myDid");
    setAuthPhrase(existingDid);
  }, []);
  // const handleCopyToClipboard = () => {
  //   navigator.clipboard.writeText(authPhrase).then(() => {
  //     setNotification(authPhrase);
  //   });
  // };
  const handleCopyDid = () => {
    setCopiedDid(true);
    copyToClipboard(authPhrase);
    setTimeout(() => {
      setCopiedDid(false);
    }, 4000);
  };
  const handleScan = (scannedPhrase) => {
    setNotification(`QR Code scanned! Phrase: ${scannedPhrase}`);
    setIsScanning(false); // Stop scanning

    if (scannedPhrase === authPhrase) {
      console.log("Authentication successful!");
    } else {
      console.log("Authentication failed!");
    }
  };
  const handleSendMail = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: user?.personalInfo?.name,
        userDid,
        email,
      }),
    });
    const result = await response.json();
    //  setsendDidModal(false);
    handleSendDidModal();
    if (result) {
      setSendMessage(true);
      // console.log(result);
      setEmailSentMessage(result.message);
      setTimeout(() => {
        setSendMessage(false);
      }, 4000);
    }
  };
  //  const resetScan = () => {
  //    setIsScanning(false); // Start scanning again
  //    setScannerDidModal(false);
  //  };
  return (
    <div
      className="w-[22.25rem] p-[1.25rem]"
      style={{ boxShadow: "4px 4px 24px 0px rgba(206, 206, 206, 0.24)" }}
    >
      <h4 className="text-[#151515]  font-[400] text-[1rem] mb-4">My DID</h4>
      <input
        type="text"
        placeholder="thyuoidcjjdjkksiiaidhd"
        readOnly
        value={authPhrase}
        className="p-[0.75rem] w-[17rem] rounded-[0.25rem] border-[1px] border-[#E8E8E8]"
      />
      <div className="flex justify-between text-[0.75rem] mt-[1rem] mb-[1.5rem]">
        <div className="flex items-center ">
          <Image
            src="/images/icons/share.svg"
            alt="barcode"
            width={12}
            height={12}
            className="mr-[0.5rem]"
          />
          <button onClick={handleSendDidModal}>Share DID</button>
        </div>
        <div className="flex">
          <Image
            src="/images/icons/copy.svg"
            alt="barcode"
            width={12}
            height={12}
            className="mr-[0.5rem]"
          />
          <button onClick={handleCopyDid}>Copy DID</button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-[0.75rem] text-center mb-[1rem] text-[#2C2C2C]">
          or Scan DID with your other device
        </p>
        {/* <Image
          src="/images/barcode.png"
          alt="barcode"
          width={183}
          height={178}
          className="py-[1rem]"
        /> */}
        <div className="">
          <QrCodeComponent phrase={authPhrase} />
        </div>

        <p className="text-[0.75rem] text-center text-[#145AE2]">Scan Here</p>
      </div>
      {copiedDid && (
        <div className="absolute px-8 py-2 rounded-md bg-green-600 top-[5rem] right-0">
          <p className="text-white">Did Copied successfully</p>
        </div>
      )}
      {/* {sendMessage && (
        <div className="absolute px-8 py-2 rounded-md bg-green-600 top-0 right-0">
          <p className="text-white">{emailSentMessage}</p>
        </div>
      )} */}
    </div>
  );
};

export default MyDid;
