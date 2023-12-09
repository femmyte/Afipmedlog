import React from 'react'
import ServicesCard from './ServicesCard'

const HowItWorks = () => {
  return (
    <div className='py-[4.5rem] flex flex-col justify-center items-center w-full'>
        <div className='flex flex-col text-center justify-center items-center'>
            <div className='flex justify-center items-center'>
                <hr
                style={{
                    width: "6.9375rem",
                    height: "0.25rem",
                    fontSize: "2rem",
                    marginRight: "1rem",
                    borderRadius: "0.5rem",
                    background: "linear-gradient(270deg, #145AE2 38.94%, rgba(20, 90, 226, 0.00) 95.52%)"
                }}/>
                <h2 className='text-[1.5rem] font-medium'>How It Works</h2>
            </div>
            <p className='w-[38.0625rem] px-[1.5rem] mt-[1rem] text-[#5F5F5F]'>AFIPMedLog is a very simple application that involves few steps to complete.</p>
        </div>
        <div className='flex items-center justify-center text-center px-[6.25rem] mt-[2.5rem]'>
            <ServicesCard
            icon="/images/icons/user-search.svg"
            heading="Find a Doctor"
            text="Patients have to search for a doctor through our available doctors within the specialty they want."
            />
            <ServicesCard
            icon="/images/icons/receipt-item.svg"
            heading="Share Your Medical Record Using Doctor’s DID"
            text="Get in touch with the doctor, the doctor shares his/her DID with the patient through which they can share their medical record.."
            />
            <ServicesCard
            icon="/images/icons/user-search.svg"
            heading="Get Examined"
            text="Through the medical record, the doctor can refere them to the medical test they need to carry out."
            />
            <ServicesCard
            icon="/images/icons/flask-icon.svg"
            heading="Get Your Solution"
            text="Doctors can prescribe drugs to the patients based on the result of the test."
            />
        </div>
    </div>
  )
}

export default HowItWorks