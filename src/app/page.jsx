"use client";
import React, { useState, useEffect } from "react";
import Hero from "@/components/pages/landingPage/Hero";
import HeroNavBar from "@/components/pages/landingPage/HeroNavBar";
import Services from "@/components/pages/landingPage/Services";
import { AboutUs } from "@/components/pages/landingPage/AboutUs";
import HowItWorks from "@/components/pages/landingPage/HowItWorks";
import FindDoctor from "@/components/pages/landingPage/FindDoctor";
import Footer from "@/components/pages/landingPage/Footer";
import { useStateContext } from "@/state/AppContext";
import { useRouter } from "next/navigation";
const Home = () => {
  const router = useRouter();
  let { setAuthModal } = useStateContext();
  const [checkUserExist, setCheckUserExist] = useState(false);
  useEffect(() => {
    const existingDid = localStorage.getItem("myDid");
    const userRole = localStorage.getItem("role");
    if (existingDid && userRole) {
      // router.push(`/${userRole}/settings`);
      setCheckUserExist(true);
    }
  }, []);
  const handleGetStarted = () => {
    if (checkUserExist) {
      const storedRole = localStorage.getItem("role");
      if (storedRole) {
        router.push(`/${storedRole}/overview`);
      }
    } else {
      setAuthModal(true);
    }
  };
  return (
    <>
      <HeroNavBar
        checkUserExist={checkUserExist}
        handleGetStarted={handleGetStarted}
      />
      <Hero
        checkUserExist={checkUserExist}
        handleGetStarted={handleGetStarted}
      />
      <Services />
      <AboutUs />
      <HowItWorks />
      <FindDoctor />
      <Footer />
    </>
  );
};

export default Home;
