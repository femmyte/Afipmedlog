import { useState, useEffect, useCallback } from "react";

const useWeb5 = () => {
  const [web5, setWeb5] = useState(null);
  const [myDid, setMyDid] = useState(null);

  const initWeb5 = useCallback(async () => {
    const existingDid = localStorage.getItem("myDid");

    const { Web5 } = await import("@web5/api/browser");
    try {
      const { web5, did } = await Web5.connect(existingDid);
      // await web5.dwn.protocols.registerSigningKey(
      //   "49jq984h97qh3a49j98cq5h38j09jq9853h409jjq09h5q9j4"
      // );
      setWeb5(web5);
      setMyDid(did);

      if (web5 && did) {
        console.log("Web5 initialized");
      }
    } catch (error) {
      console.error("Error initializing Web5:", error);
    }
  }, []);

  useEffect(() => {
    const existingDid = localStorage.getItem("myDid");
    if (existingDid) initWeb5();
  }, [initWeb5]);

  return { web5, myDid, initWeb5 };
};

export default useWeb5;
