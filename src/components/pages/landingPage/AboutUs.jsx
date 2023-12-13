import React from "react";
import Image from "next/image";

export const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row px-[6.25rem] justify-center mt-[5rem] items-center py-[4.5rem]">
      <div className="md:w-[28.625rem] w-full bg-[#145AE2]  md:h-[27.5625rem] rounded-[0.75rem] relative md:mr-[8rem]">
        <div className="md:w-[28.625rem] w-full bg-[#DCE6FB] px-[4.06rem] pt-[2rem] rounded-[0.75rem] absolute left-[1.4rem] bottom-[1.5rem]">
          <Image src="/images/home2.png" alt="image" width={328} height={416} />
        </div>
      </div>
      <div className="md:w-[44.3125rem] w-full text-center">
        <div className="flex justify-center items-center mb-[1.2rem]">
          <hr
            style={{
              width: "6.9375rem",
              height: "0.25rem",
              fontSize: "2rem",
              marginRight: "2rem",
              borderRadius: "0.5rem",
              background:
                "linear-gradient(270deg, #145AE2 38.94%, rgba(20, 90, 226, 0.00) 95.52%)",
            }}
          />
          <h2 className="text-[1.5rem] font-medium">About Us</h2>
        </div>
        <div className="text-[#5F5F5F] text-[0.88rem]">
          <p>
            AFIP MedLog is an online medical web application with the vision of
            putting the patients in charge of their own medical records and
            their own identity through a unique decentralized Identifier DID
            which can only be accessed by the patients.{" "}
          </p>
          <p>
            We also ensure specialty services from around the globe for patients
            to be able share their medical records to their doctor in any part
            of the world. AFIP MedLog is an online medical web application with
            the vision of putting the patients in charge of their own medical
            records and their own identity through a unique decentralized
            Identifier DID which can only be accessed by the patients.
          </p>
          <p>
            We also ensure specialty services from around the globe for patients
            to be able share their medical records to their doctor in any part
            of the world.
          </p>
        </div>
      </div>
    </div>
  );
};
