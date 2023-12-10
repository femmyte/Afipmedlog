import React from 'react';


const CareerInformation = () => {
  return (
    <div className='w-[43rem] mt-[2rem]'>
        <h3 className='text-[#151515] text-[1rem]'>Career Information</h3>
        <table className=''>
            <thead className=''>
                <tr className='text-left text-[0.875rem] text-[#727272]'>
                    <th className='font-normal pr-[3.12rem] pt-[1.25rem] pb-[0.5rem]'>Specialty</th>
                    <th className='font-normal pr-[3.12rem] pt-[1.25rem] pb-[0.5rem]'>Department</th>
                    <th className='font-normal pr-[3.12rem] pt-[1.25rem] pb-[0.5rem]'>Years of experience</th>
                    <th className='font-normal pr-[3.12rem] pt-[1.25rem] pb-[0.5rem]'>Success cases</th>
                    <th className='font-normal pr-[3.12rem] pt-[1.25rem] pb-[0.5rem]'>Failed cases</th>
                </tr>
            </thead>
            <tbody>
                <tr className='text-left text-[#151515] text-[1rem]'>
                    <td>Cardiologist</td>
                    <td>Cardiology</td>
                    <td>30 years</td>
                    <td>48</td>
                    <td>2</td>
                </tr>
            </tbody>
        </table>
        <table className=''>
            <thead>
                <tr className='text-left text-[0.875rem] text-[#727272]'>
                    <th className='font-normal pr-[3.12rem] pt-[1.25rem] pb-[0.5rem]'>Surgeries</th>
                    <th className='font-normal pt-[1.25rem] pb-[0.5rem]'>Registered on</th>
                </tr>
            </thead>
            <tbody>
                <tr className='text-left text-[#151515] text-[1rem]'>
                    <td>20</td>
                    <td>Dec 08, 2023</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default CareerInformation