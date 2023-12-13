import React from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <div
      id="service"
      className="py-[4.5rem] flex flex-col justify-center items-center w-full"
    >
      <div className="flex flex-col text-center justify-center items-center">
        <div className="flex justify-center items-center">
          <hr
            style={{
              width: "6.9375rem",
              height: "0.25rem",
              fontSize: "2rem",
              marginRight: "1rem",
              borderRadius: "0.5rem",
              background:
                "linear-gradient(270deg, #145AE2 38.94%, rgba(20, 90, 226, 0.00) 95.52%)",
            }}
          />
          <h2 className="text-[1.5rem] font-medium">Our Services</h2>
        </div>
        <p className="px-5 md:px-0 md:w-[38.0625rem] text-[#5F5F5F] text-[1rem]">
          We ensure that every patient takes charge of their own medical records
          without any interference by a third party.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-y-5 md:gap-y-0 items-center text-center px-6 md:px-[5rem] mt-[2.5rem]">
        <ServicesCard
          icon="/images/icons/receipt-edit.svg"
          heading="Decentralized Data Storage and Sharing"
          text="Patients are the sole manager of their own medical records and doctors can access these records only when given access to them."
        />
        <ServicesCard
          icon="/images/icons/security-user.svg"
          heading="Decentralized Identity Management"
          text="Users are the sole manager of their own AFIPMedLog account, there is no third party interference."
        />
        <ServicesCard
          icon="/images/icons/user-tick.svg"
          heading="Decentralized Identifier DID"
          text="Every user has their own unique DID which is known and accessible by the user."
        />
        <ServicesCard
          icon="/images/icons/user-search.svg"
          heading="Access to Medical Doctors Round The Globe"
          text="Patients can access and share their medical records with any doctor around the world."
        />
      </div>
    </div>
  );
};

export default Services;
