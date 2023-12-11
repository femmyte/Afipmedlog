import React from 'react'

const MedicalRecordsSuccess = () => {
  return (
    <div className='w-[26rem] p-[2rem] rounded-sm'>
        <h3 className='text-center font-semibold'>Success</h3>
        <p className='py-5 text-sm'>Your new medical record on allergy has been added</p>
        <div className='flex items-center justify-center py-2'>
            <button className='bg-[#145AE2] p-2 w-[10rem] text-white'>Done</button>
        </div>
    </div>
  )
}

export default MedicalRecordsSuccess