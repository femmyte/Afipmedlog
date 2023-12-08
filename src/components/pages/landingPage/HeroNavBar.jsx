import React from 'react'

const HeroNavBar = () => {
  return (
    <div className='flex justify-between items-center shadow-sm shadow-gray-200 w-full h-[5.5rem] py-[1.5rem] px-[6.25rem]'>
        <p className='text-[#145AE2] text-[1.5rem] '>AFIP MedLog</p>
        <ul className='flex'>
            <li className='mr-[2.56rem]'>Home</li>
            <li className='mr-[2.56rem]'>About Us</li>
            <li className='mr-[2.56rem]'>Services</li>
            <li>Find a doctor</li>
        </ul>
        <button className='w-[11.875rem] py-[0.5rem] px-[1rem] rounded-[0.25rem] bg-primaryBlue text-white flex justify-center items-center font-[500] leading-6 tracking-[0.02rem '>Get started</button>
    </div>
  )
}

export default HeroNavBar