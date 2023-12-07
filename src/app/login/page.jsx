"use client";
import { useStateContext } from "@/state/AppContext";
import { Web5 } from "@web5/api";
import React, { useState, useEffect } from "react";

const Login = () => {
  const [did, setDid] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!did) {
      return;
    }
    setIsLoading(true);
    try {
      if (did) {
        const { web5 } = await Web5.connect(did);
        // Rest of your code that uses the `web5` object
        localStorage.setItem("myDid", did);
        setMyDid(did);
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
    <div>
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
    </div>
  );
};

export default Login;
