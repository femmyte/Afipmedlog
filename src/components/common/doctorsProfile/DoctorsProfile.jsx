import React from 'react'
import Image from 'next/image'
import { FiPhoneCall } from "react-icons/fi";

const DoctorsProfile = () => {
  return (
    <div>
        <h2 className='font-medium text-[2rem]'>Profile</h2>
        <div className='flex w-[43rem] justify-between px-[1.25rem]'>
            <div className='flex items-center'>
                <Image src="/images/user.png" alt='user image' width={100} height={100} className='mr-[1.85rem]'/>
                <div>
                    <h3 className='text-[#151515] text-[1.25rem]'>Dr. Peace Kuda</h3>
                    <p className='py-2 text-[0.875rem]'>drpeace@gmail.com</p>
                </div>
            </div>
            <div className='text-[#145AE2] flex align-top'>
                <Image src="/images/icons/call-calling.svg" alt='call icon' width={16} height={16} className='ml-[2rem]'/>
                <Image src="/images/icons/video.svg" alt='video icon' width={16} height={16} className='ml-[2rem]'/>
                <Image src="/images/icons/message.svg" alt='message icon' width={16} height={16} className='ml-[2rem]'/>
            </div>
        </div>
    </div>
  )
}

export default DoctorsProfile