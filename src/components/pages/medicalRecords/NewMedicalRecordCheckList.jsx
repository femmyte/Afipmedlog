import React from 'react';
import checklistData from '@/utils/checklistData';

const NewMedicalRecordCheckList = () => {
  return (
    <div className='w-[25rem] rounded-sm p-5'>
        <h3 className='text-center font-semibold'>Add New Medical Records</h3>
        <div>
            <p className='py-2'>What type of medical record</p>
            <div>
                {checklistData.map((item) => (
                    <div key={item.id} className='flex py-2 text-sm'>
                        <input value="" type="checkbox" />
                        <p className='px-3'>{item.records}</p>
                    </div>
                ))}
                <div className='flex items-center justify-center py-2'>
                   <button className='bg-[#145AE2] p-2 w-[10rem] text-white'>Continue</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewMedicalRecordCheckList