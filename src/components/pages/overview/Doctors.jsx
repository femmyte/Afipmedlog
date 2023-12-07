import React from 'react';
import OverviewDoctors from './OverviewDoctors';
import { GoChevronRight } from "react-icons/go";

const Doctors = () => {
  return (
    <div className='w-[16.1875rem] h-[9.9375rem] gap-[1.2rem] py-[1.5rem] px-[1rem] shadow-gray-300 shadow-sm p-2'>
        <div className='flex justify-between'>
            <h2>Hello Doctors</h2>
            <div className='flex items-center text-[#145AE2]'>
              <button className='text-sm'>See All</button>
              {/* {IconComponent && <IconComponent />} */}
              <GoChevronRight />
            </div>
       </div>
       <div className='flex'>
           <OverviewDoctors
                img = "/images/user.png"
                name = "Dr Peace"
                title = "Cardiologist"/>

           <OverviewDoctors
                img = "/images/user.png"
                name = "Dr Peace"
                title = "Cardiologist"/>

           <OverviewDoctors
                img = "/images/user.png"
                name = "Dr Peace"
                title = "Cardiologist"/>

       </div>
    </div>
  )
}

export default Doctors