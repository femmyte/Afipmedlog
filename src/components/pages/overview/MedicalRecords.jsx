import React from 'react';
import { GoChevronRight } from "react-icons/go";
import overviewMedicalRecords from '@/utils/OverviewMedicalRecords';
import { IoIosArrowRoundForward } from "react-icons/io";


const MedicalRecords = (props) => {
  return (
    <div className='w-[19.1875rem] shadow-gray-300 shadow-sm mr-[1rem] px-[1rem] py-[1.5rem]'>
        <div className='flex justify-between'>
            <h2>History</h2>
            <div className='flex items-center text-[#145AE2]'>
              <button className='text-[0.75rem]'>See All</button>
              <GoChevronRight />
            </div>
       </div>
       <div className='p-3'>
            {overviewMedicalRecords.map((item) => (
                <div key={item.id} className='flex justify-between py-4 px-2'>
                    <p>{item.records}</p>
                    <IoIosArrowRoundForward className='text-[#145AE2] cursor-pointer'/>
                </div>
            ))}
       </div>
    </div>
  )
}

export default MedicalRecords