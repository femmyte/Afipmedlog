import React from 'react'

const AllergyRecord = () => {
  return (
    <div className='w-[25rem] rounded-small p-5'>
        <h3 className='text-center font-semibold'>Add New Medical Record</h3>
        <form action="" className='text-sm mt-[1rem]'>
            <p className='text-[#F20D0D] font-semibold  mb-[0.5rem]'>Allergy Record:</p>
            <div className='flex flex-col'>
                <label htmlFor="" className='py-1'>Name of allergy</label>
                <input type="text" placeholder='Bee sting' className='outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="">Severity</label>
                <input type="text" placeholder='Severe' className='outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1'/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="">Reactions</label>
                <input type="text" placeholder='Swollen skin, painful skin'  className='outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1'/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="">Treatment</label>
                <input type="text" placeholder='use of balm' className='outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1' />
            </div>
        </form>
        <div className='flex items-center justify-center py-2'>
            <button className='bg-[#145AE2] p-2 w-[10rem] text-white'>Add Record</button>
        </div>
    </div>
  )
}

export default AllergyRecord