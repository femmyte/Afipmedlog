import React from 'react';
import { CiMail } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className=' px-[6.25rem] py-[4.5rem] bg-[#092866] text-white text-[0.75rem]' >
        <div className='flex md:flex-row flex-col justify-between'>
            <div className='mb-[2rem]'>
                <h3 className='text-[1.25rem]'>AFIP MedLog</h3>
                <p className='md:w-[25.4375rem] w-full py-[0.5rem]'>AFIP MedLog is an online medical web application with the vision of putting the patients in charge of their own medical records and their own identity through a unique decentralized Identifier DID which can only be accessed by the patients.</p>
            </div>
            <div className='mb-[2rem]'>
                <h3 className='text-[1.5rem] pb-[0.5rem]'>About</h3>
                <ul>
                    <li>Services</li>
                    <li className='py-[1rem]'>How it works</li>
                    <li>Find a doctor</li>
                </ul>
            </div>
            <div className='mb-[2rem]'>
                <h3 className='text-[1.5rem] pb-[0.5rem]'>Services</h3>
                <ul >
                    <li>Decentralized data storage and sharing</li>
                    <li className='py-[1rem]'>Decentralized identity management</li>
                    <li className='pb-[1rem]'>Decentralized Identifier</li>
                    <li>Access doctors around the world</li>
                </ul>
            </div>
            <div className='mb-[2rem]'>
                <h3 className='text-[1.5rem] pb-[0.5rem]'>Contact Us</h3>
                <div className='flex '>
                    <CiMail className='mr-[1rem] text-[1.5rem]'/>
                    <CiLinkedin className='mr-[1rem] text-[1.5rem]'/>
                    <FaTwitter className='mr-[1rem] text-[1.5rem]'/>
                    <CiFacebook className='mr-[1rem] text-[1.5rem]'/>
                    <AiFillInstagram className='mr-[1rem] text-[1.5rem]'/>
                </div>
            </div>
            </div>
        <span className='text-[0.875rem] mt-[1.5rem] text-center flex flex-col justify-center border-t-[1px] border-[#7F7F7F] p-[1rem]'>&copy; Copyright 2023. All Right Reserved by AFIPMedLog</span>
    </div>
  )
}

export default Footer