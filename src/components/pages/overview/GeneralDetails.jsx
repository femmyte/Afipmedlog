import React from 'react';
import { GoChevronRight } from "react-icons/go";

const GeneralDetails = () => {
  return (
    <div className='w-[16rem] shadow-gray-300 shadow-sm p-2 mt-[2rem]'>
        <div className='flex justify-between'>
            <h2> General Details</h2>
            <div className='flex items-center text-[#145AE2]'>
              <button className='text-sm'>See All</button>
              <GoChevronRight />
            </div>
       </div>
       <div className='flex items-center text-center p-2'>
            <div className='border-r-[1px] border-gray-300 mr-2 py-2 text-xs'>
                <p className='pr-2'>Blood Group</p>
                <p>A+</p>
            </div>
            <div className='border-r-[1px] border-gray-300 mr-2 py-2 text-xs'>
                <p className='pr-2'>Genotype</p>
                <p>As</p>
            </div>
            <div className='border-r-[1px] border-gray-300 mr-2 py-2 text-xs'>
                <p className='pr-2'>Height</p>
                <p>140cm</p>
            </div>
            <div className=' mr-2 py-2 text-xs'>
                <p className='pr-2'>Weight</p>
                <p>50kg</p>
            </div>
       </div>
    </div>
  )
}

export default GeneralDetails