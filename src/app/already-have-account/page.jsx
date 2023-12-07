"use client";
import React, { useState, useEffect } from "react";
import { Web5 } from "@web5/api/browser";
import { useRouter } from "next/navigation";
import { useStateContext } from "@/state/AppContext";
import Link from "next/link";
const Account = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [did, setDid] = useState("");
  const {
    setWeb5,
    web5,
    myDid,
    userRole,
    getUser,
    isGettingUser,
    setUserRecord,
  } = useStateContext();
  useEffect(() => {
    const existingDid = localStorage.getItem("myDid");
    if (existingDid) {
      router.push("/profile");
    }
  });
  const handleClick = async () => {
    try {
      const { web5, did } = await Web5.connect({ sync: "5s" });
      localStorage.setItem("myDid", did);
      setWeb5(web5);
      router.push("/profile"); // Redirect to the dashboard page after successful login
    } catch (error) {
      console.error("Error Singning up:", error);
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
  return (
    <div>
      <div className="">
        <p>Did you account already?</p>
        <Link href={"/login"} className="">
          Login
        </Link>
      </div>
      <div className="">
        <p>No I dont have</p>
        <button className="bg-purple-500 px-5 py-3" onClick={handleClick}>
          get started
        </button>
      </div>
    </div>
  );
};

export default Account;
