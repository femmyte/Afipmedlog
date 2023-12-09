import React from 'react';
import Image from 'next/image';

const ServicesCard = (props) => {
  return (
    <div className='w-full h-[15.625rem] border-[1px] border-gray-100 mr-[1.25rem] py-[1.5rem] px-[1rem] flex flex-col items-center justify-center rounded-[0.25rem]'>
        <div className='w-[1.5rem] h-[1.5rem] text-[#145AE2] bg-[#E8EFFC] p-[0.2rem] rounded-[0.25rem]'>
            <Image src={props.icon} alt='icons' width={24} height={24} />
        </div>
        <h2 className='text-[1rem] font-medium pt-[1.25rem]'>{props.heading}</h2>
        <p className='text-[#5F5F5F] text-[0.7rem] mt-[0.88rem]'>{props.text}</p>
    </div>
  )
}

export default ServicesCard