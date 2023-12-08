import React from 'react';
import Image from 'next/image';
import HeroImageText from './HeroImageText';

const Hero = (props) => {
  return (
    <div className='flex px-[6.25rem] py-[3rem]  items-center'>
        <div className='w-[28.5625rem] mr-[4rem]'>
            <h2 className='text-[2.5rem] font-medium'>Be in Charge of Your Medical Records</h2>
            <p className='my-[1rem] text-[1rem] text-[#5F5F5F]'>You can be in charge of your medical records and grant access to any doctor of your choice in any part of the world for reference purposes</p>
            <button className='w-[11.875rem] py-[0.5rem] px-[1rem] rounded-[0.25rem] bg-primaryBlue text-white flex justify-center items-center font-[500] leading-6 tracking-[0.02rem '>Get started</button>
        </div>
        <div className='w-[28.625rem] h-[27.5625]  pt-[2rem] px-[4.0625rem] bg-[#DCE6FB] rounded-[0.75rem]'>
            <div className=' relative'>
                <Image src="/images/HeroImage.png" alt='hero image' width={328} height={416}  className=' w-[20.5rem] h-[26rem]'/>
                <HeroImageText
                    text= "Decentralized Identity Management"
                    className = "absolute top-[0.77rem] left-[16.2rem]"/>
                <HeroImageText
                    text= "Decentralized Identifier DID"
                    className = "absolute top-[4rem] right-[16.2rem]"/>
                <HeroImageText
                    text= "Access to Medical Doctors Around the Globe"
                    className = "absolute top-[19.5rem] right-[16.2rem]"/>
                <HeroImageText
                    text= "Decentralized Data Storage and Sharing"
                    className = "absolute  top-[15.62rem] left-[16.2rem]"/>
            </div>
        </div>
    </div>
  )
}

export default Hero