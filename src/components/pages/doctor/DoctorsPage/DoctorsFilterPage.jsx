import React from 'react';
import Image from 'next/image';
import { GoChevronDown } from "react-icons/go";
import doctorsData from '@/utils/doctorsData';

const DoctorsFilterPage = () => {
  return (
    <div>
        <div>
            <h3 className='text-[2rem] font-medium text-[#151515]'>Doctor</h3>
            <p className='text-[0.875rem] text-[#5F5F5F]'>Patient confidentiality is our priority.</p>
        </div>
        <div className='flex mt-[1.5rem]'>
            <div className='flex border-[0.4px] bg-[#F9F9F9] border-[#D1D1D1]  mr-[1rem] p-[0.5rem] rounded-[0.25rem]'>
                <Image src="/images/icons/filter.svg" width={24} height={24} className='mr-[0.8rem]'/>
                <button className='text-[0.875rem] '>Filter</button>
            </div>
            <div className='flex items-center text-[0.875rem] text-[#7F7F7F] border-[0.4px] bg-[#F9F9F9] border-[#D1D1D1]  mr-[1rem] p-[0.5rem]  rounded-[0.25rem]'>
                <button className='text-[0.875rem] mr-[0.8rem]'>Doctor’s name</button>
                <GoChevronDown/>
            </div>
            <div className='flex items-center text-[0.875rem] text-[#7F7F7F] border-[0.4px] bg-[#F9F9F9] border-[#D1D1D1]  mr-[1rem] p-[0.5rem] rounded-[0.25rem]'>
                <button className='text-[0.875rem] mr-[0.8rem]'>Specialty</button>
                <GoChevronDown/>
            </div>
            <div className='flex items-center text-[0.875rem] text-[#7F7F7F] border-[0.4px] bg-[#F9F9F9] border-[#D1D1D1]  mr-[1rem] p-[0.5rem] rounded-[0.25rem]'>
                <button className='text-[0.875rem] mr-[0.8rem]'>Department</button>
                <GoChevronDown />
            </div>
        </div>
        <div>
            <table className='w-full'>
                <thead>
                    <tr className='text-[0.875rem]'>
                        <td className='font-normal py-[0.88rem] border-b-[1px]'>Doctors’ name</td>
                        <td className='font-normal py-[0.88rem] border-b-[1px]'>Specialty</td>
                        <td className='font-normal py-[0.88rem] border-b-[1px]'>Department</td>
                        <td className='font-normal py-[0.88rem] border-b-[1px]'>Phone number</td>
                        <td className='font-normal py-[0.88rem] border-b-[1px]'>Email address</td>
                        <td className='font-normal py-[0.88rem] border-b-[1px]'>Country</td>
                        <td className='font-normal py-[0.88rem] border-b-[1px]'>Date added</td>
                        <td className='font-normal py-[0.88rem] border-b-[1px]'>Status</td>
                    </tr>
                </thead>
                <tbody>
                    {doctorsData.map((item) => (
                        <tr key={item.id} className='text-[#151515] text-[0.75rem]'>
                            <td className='py-[0.88rem] border-b-[1px] border-[#F2F2F2]'>{item.doctorsName}</td>
                            <td className='py-[0.88rem] border-b-[1px] border-[#F2F2F2]'>{item.specialty}</td>
                            <td className='py-[0.88rem] border-b-[1px] border-[#F2F2F2]'>{item.department}</td>
                            <td className='py-[0.88rem] border-b-[1px] border-[#F2F2F2]'>{item.phoneNumber}</td>
                            <td className='py-[0.88rem] border-b-[1px] border-[#F2F2F2]'>{item.emailAddress}</td>
                            <td className='py-[0.88rem] border-b-[1px] border-[#F2F2F2]'>{item.country}</td>
                            <td className='py-[0.88rem] border-b-[1px] border-[#F2F2F2]'>{item.dateAdded}</td>
                            <td className='py-[0.88rem] border-b-[1px] border-[#F2F2F2] text-[#16B61C]'>{item.status}</td>
                            <td className='py-[0.88rem] border-b-[1px] border-[#F2F2F2]'>...</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default DoctorsFilterPage