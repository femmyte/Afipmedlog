import React from 'react';
import Image from 'next/image';
import { CiMail } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";

const FindDoctorCards = (props) => {
  return (
    <div className='flex flex-col items-center mt-[1rem] mr-[1.25rem] border-[1px] border-gray-100 py-[1.5rem] px-[1rem]'>
        <div className='w-[8.0625rem] bg-[#E8EFFC] px-[1rem] pt-[1rem]'>
            <Image src="/images/HeroImage.png" alt='image' width={97} height={122}/>
        </div>
        <h2 className='text-[1rem] font-medium'>Dr Peace</h2>
        <p className='text-[0.75rem] text-[#5F5F5F] my-[0.75rem]'>Cardiologist</p>
        <div className='flex text-[#145AE2]'>
            <div className='w-[1.5rem] p-[0.28125rem] bg-[#E8EFFC] rounded-[0.25rem] mr-[0.88rem]'>
                <CiMail />
            </div>
            <div className='w-[1.5rem] p-[0.28125rem] bg-[#E8EFFC] rounded-[0.25rem] mr-[0.88rem]'>
                <CiLinkedin />
            </div>
            <div className='w-[1.5rem] p-[0.28125rem] bg-[#E8EFFC] rounded-[0.25rem] mr-[0.88rem]'>
                <FaTwitter />
            </div>
        </div>
    </div>
  )
}

export default FindDoctorCards