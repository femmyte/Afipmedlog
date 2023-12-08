"use client";
import QrScanner from "@/components/QrScanner";
import CustomModal from "@/components/common/CustomModal";
import QrCodeComponent from "@/service/QrCode";
import { useStateContext } from "@/state/AppContext";
import React, { useState, useEffect } from "react";

const Login = () => {
  const [did, setDid] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [scannerModal, setScannerDidModal] = useState(false);
  const { setWeb5, userRole, isGettingUser, getUser, setMyDid } =
    useStateContext();
  useEffect(() => {
    const existingDid = localStorage.getItem("myDid");
    if (existingDid) {
      if (userRole) {
        router.push(`/${userRole}/overview`);
      }
    }
  });
  const [authPhrase, setAuthPhrase] = useState("your_secret_key_here");
  const [notification, setNotification] = useState("");
  const [isScanning, setIsScanning] = useState(true); // New state

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(authPhrase).then(() => {
      setNotification("Key phrase copied to clipboard!");
    });
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

  const resetScan = () => {
    setIsScanning(false); // Start scanning again
    setScannerDidModal(false);
  };

  // const handleScan = (scannedPhrase) => {
  //   setNotification(`QR Code scanned! Phrase: ${scannedPhrase}`);

  //   // Now you can use the scannedPhrase in your application logic
  //   // For example, you might want to compare it with the authPhrase
  //   if (scannedPhrase === authPhrase) {
  //     // Perform authentication logic for the scanned phrase
  //     console.log("Authentication successful!");
  //   } else {
  //     // Handle authentication failure
  //     console.log("Authentication failed!");
  //   }
  // };
  const handleStopScanner = () => {
    stopScanner();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!did) {
      return;
    }
    setIsLoading(true);
    try {
      if (did) {
        const { Web5 } = await import("@web5/api/browser");
        // const { web5 } = await Web5.connect(did);
        const { web5, did: newDid } = await Web5.connect({
          agent: identityAgent,
          connectedDid: did,
        });
        // Rest of your code that uses the `web5` object
        localStorage.setItem("myDid", newDid);
        setMyDid(newDid);
        setWeb5(web5);
        if (web5) {
          const userInfo = await getUser();
          console.log(userInfo);
          if (userInfo.length > 0) {
            router.push(`/${userInfo[0].data.personalInfo.role}/overview`);
          }
        }
      }
    } catch (error) {
      console.error("Error login in:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <p className="text-xl">Loading..</p>
      </div>
    );
  }
  if (isGettingUser) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <p className="text-xl">Getting Your information..</p>
      </div>
    );
  }
  return (
    <div className="relative">
      <div className="">
        <button onClick={() => setScannerDidModal(true)}>
          Scan the QR Code to Authenticate
        </button>
        <button onClick={handleCopyToClipboard}>Copy to Clipboard</button>
      </div>
      <form onSubmit={handleSubmit}>
        <h1 className="font-[500] text-[2rem] leading-[2.5rem] text-[#151515] tracking-[0.04rem] mb-[2rem]">
          User Profile
        </h1>
        <div className={`grid gap-x-4 grid-cols-2`}>
          <div className={`w-full`}>
            <label>
              Enter Your Did:
              <input
                type="text"
                name="did"
                value={did}
                onChange={(e) => setDid(e.target.value)}
                className={`w-full p-2 rounded-md border border-gray-300 focus:border-blue-500`}
                required
              />
            </label>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 justify-center mt-8">
          <button
            className="w-[10.125rem] py-[0.5rem] px-4 rounded-[0.25rem] bg-primaryBlue text-white flex justify-center items-center font-[500] leading-6 tracking-[0.02rem disabled:bg-[#DCE6FB]"
            disabled={!did}
          >
            Send DID
          </button>
        </div>
      </form>
      <CustomModal modalIsOpen={scannerModal} setIsOpen={setScannerDidModal}>
        <div className="py-[2.5rem] px-[3.62rem] relative">
          <p className="font-[600] text-[1.25rem] leading-[2.375rem] text-[#2E3646] text-center mb-8">
            Send your Did to your patience
          </p>
          <QrScanner onScan={handleScan} isScanning={isScanning} />
          <button onClick={resetScan}>Resume Scanning</button>
          {/* <QrScanner stopScanner onScan={handleScan} />
          <button
            onClick={() => {
              stopScanner();
              setScannerDidModal(false);
            }}
          >
            close{" "}
          </button> */}
        </div>
      </CustomModal>
      {notification && (
        <div className="absolute px-8 py-2 rounded-md bg-green-600 top-0 right-0">
          <p className="text-white">{notification}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
