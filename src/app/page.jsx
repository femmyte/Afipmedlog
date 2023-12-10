import React from "react";
import Hero from "@/components/pages/landingPage/Hero";
import HeroNavBar from "@/components/pages/landingPage/HeroNavBar";
import Services from "@/components/pages/landingPage/Services";
import { AboutUs } from "@/components/pages/landingPage/AboutUs";
import HowItWorks from "@/components/pages/landingPage/HowItWorks";
import FindDoctor from "@/components/pages/landingPage/FindDoctor";
import Footer from "@/components/pages/landingPage/Footer";

const Home = () => {
  return (
    <div className="h-screen w-full">
      <HeroNavBar />
      <Hero />
      <Services />
      <AboutUs />
      <HowItWorks />
      <FindDoctor />
      <Footer />
    </div>
  );
};

export default Home;
