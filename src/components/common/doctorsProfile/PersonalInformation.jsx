import React from 'react';

const PersonalInformation = () => {
  return (
    <div className='w-[43rem]'>
        <h3 className='text-[#151515] text-[1rem]'>Personal Information</h3>
        <table className=''>
            <thead className=''>
                <tr className='text-left text-[0.875rem] text-[#727272]'>
                    <th className='font-normal pr-[2.06rem] pt-[1.25rem] pb-[0.5rem]'>Date Of Birth</th>
                    <th className='font-normal pr-[2.06rem] pt-[1.25rem] pb-[0.5rem]'>Gender</th>
                    <th className='font-normal pr-[2.06rem] pt-[1.25rem] pb-[0.5rem]'>Marital Status</th>
                    <th className='font-normal pr-[2.06rem] pt-[1.25rem] pb-[0.5rem]'>Address</th>
                    <th className='font-normal pl-[2.06rem] pt-[1.25rem] pb-[0.5rem]'>City</th>
                </tr>
            </thead>
            <tbody>
                <tr className='text-left text-[#151515] text-[1rem]'>
                    <td>21 Dec, 1987</td>
                    <td>Female</td>
                    <td>Single</td>
                    <td>67 Ejigbo Falana Rd, Lagos</td>
                    <td className='pl-[2.06rem]'>Lagos</td>
                </tr>
            </tbody>
        </table>
        <table className='w-full '>
            <thead>
                <tr className='text-left text-[0.875rem] text-[#727272]'>
                    <th className='font-normal pr-[3.10rem] pt-[1.25rem] pb-[0.5rem]'>State</th>
                    <th className='font-normal pr-[0.6rem] pt-[1.25rem] pb-[0.5rem]'>Country</th>
                    <th className='font-normal  pt-[1.25rem] pb-[0.5rem]'>Phone number</th>
                    <th className='font-normal pr-[2.06rem] pt-[1.25rem] pb-[0.5rem]'>Serial number</th>
                    <th className='font-normal  pt-[1.25rem] pb-[0.5rem]'>Registered on</th>
                </tr>
            </thead>
            <tbody>
                <tr className='text-left text-[#151515] text-[1rem]'>
                    <td>Lagos</td>
                    <td>Nigeria</td>
                    <td>08148710041</td>
                    <td>3456</td>
                    <td className=''>Dec 08, 2023</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default PersonalInformation