import React from 'react';
import { GoChevronRight } from "react-icons/go";
import overviewMedicalRecords from '@/utils/OverviewMedicalRecords';
import { IoIosArrowRoundForward } from "react-icons/io";


const MedicalRecords = (props) => {
  return (
    <div className='w-[20rem] mt-[2rem] shadow-gray-300 shadow-sm p-3'>
        <div className='flex justify-between'>
            <h2>History</h2>
            <div className='flex items-center text-[#145AE2]'>
              <button className='text-sm'>See All</button>
              <GoChevronRight />
            </div>
       </div>
       <div className='p-3'>
            {overviewMedicalRecords.map((item) => (
                <div key={item.id} className='flex justify-between p-2'>
                    <p>{item.records}</p>
                    <IoIosArrowRoundForward className='text-[#145AE2] cursor-pointer'/>
                </div>
            ))}
       </div>
    </div>
  )
}

export default MedicalRecords