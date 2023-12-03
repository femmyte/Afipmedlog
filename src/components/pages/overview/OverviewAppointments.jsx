'use client';
import {React, useState} from 'react';
import { GoChevronRight } from "react-icons/go";
import Calendar from 'react-calendar';

const OverviewAppointments = () => {
    const [value, onChange] = useState(new Date());
  return (
    <div className='w-[16rem] flex flex-col shadow-gray-300 shadow-sm p-4 mt-[2rem]'>
        <div className='flex justify-between'>
            <h2>Appointments</h2>
            <div className='flex items-center text-[#145AE2]'>
              <button className='text-sm'>See All</button>
              <GoChevronRight />
            </div>
       </div>
       <div>
            <Calendar
                className="text-sm p-2 mt-2"
                onChange={onChange}
                value={value}
            />
            <button className='rounded-sm p-2 px-5 bg-[#145AE2] text-white items-center outline-none'>Book Appointment</button>
       </div>
    </div>
  )
}

export default OverviewAppointments