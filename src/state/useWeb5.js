import { useState, useEffect, useCallback } from "react";

const useWeb5 = () => {
  const [web5, setWeb5] = useState(null);
  const [myDid, setMyDid] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const initWeb5 = useCallback(async () => {
    const { Web5 } = await import("@web5/api");
    const existingDid = localStorage.getItem("myDid");

    try {
      if (existingDid) {
        // this will use the existing DID tht is stored in the local Storage
        const { web5, did } = await Web5.connect(existingDid);
        setWeb5(web5);
        setMyDid(did);
      } else {
        // this will create a new DID for the user and set it to the local storage
        const { web5, did } = await Web5.connect({ sync: "5s" });
        localStorage.setItem("myDid", did);
        setWeb5(web5);
        setMyDid(did);
      }
      // await web5.dwn.protocols.registerSigningKey(
      //   "49jq984h97qh3a49j98cq5h38j09jq9853h409jjq09h5q9j4"
      // );

      if (web5 && did) {
        console.log("Web5 initialized");
        setIsInitialized(true);
      }
    } catch (error) {
      console.error("Error initializing Web5:", error);
    }
  }, []);

  useEffect(() => {
    initWeb5();
  }, [initWeb5]);

  return { web5, myDid, isInitialized, initWeb5 };
};

export default useWeb5;
