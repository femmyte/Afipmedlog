"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useStateContext } from "@/state/AppContext";
import Hero from "@/components/pages/landingPage/Hero";
import HeroNavBar from "@/components/pages/landingPage/HeroNavBar";
import Services from "@/components/pages/landingPage/Services";
import { AboutUs } from "@/components/pages/landingPage/AboutUs";
import HowItWorks from "@/components/pages/landingPage/HowItWorks";
import FindDoctor from "@/components/pages/landingPage/FindDoctor";
import Footer from "@/components/pages/landingPage/Footer";
import Link from "next/link";

const Home = () => {
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
  // useEffect(() => {
  //   const existingDid = localStorage.getItem("myDid");
  //   if (existingDid) {
  //     router.push("/profile");
  //   }
  // });
  // const handleClick = async () => {
  //   try {
  // const { Web5 } = await import("@web5/api/browser");
  //     const { web5, did } = await Web5.connect({ sync: "5s" });
  //     localStorage.setItem("myDid", did);
  //     setWeb5(web5);
  //     router.push("/profile"); // Redirect to the dashboard page after successful login
  //   } catch (error) {
  //     console.error("Error Singning up:", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <p className="text-xl">Loading..</p>
      </div>
    );
  }
  return (
    <div className="h-screen w-full">
      <HeroNavBar />
      <Hero />
      <Services />
      <AboutUs />
      <HowItWorks />
      <FindDoctor />
      <Footer />
      {/* <p className="text-black">welcome</p> */}
      <div className="flex justify-center gap-x-6">
        {/* <button className="bg-purple-500 px-5 py-3" onClick={handleClick}>
          get started
        </button> */}
        {/* <Link href={"/already-have-account"}>Get Started</Link> */}
      </div>
    </div>
  );
};

export default Home;
