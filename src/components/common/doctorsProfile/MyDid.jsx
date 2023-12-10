import React from 'react'
import Image from 'next/image'

const MyDid = () => {
  return (
    <div className='w-[22.25rem] px-[1.25rem]'>
        <h4 className='text-[#151515] text-[1rem]'>My DID</h4>
        <input type="text" placeholder='thyuoidcjjdjkksiiaidhd' className='p-[0.75rem] w-[17rem] rounded-[0.25rem] border-[1px] border-[#E8E8E8]'/>
        <div className='flex justify-between text-[0.75rem] mt-[1rem] mb-[1.5rem]'>
            <div className='flex items-center'>
                <Image src="/images/icons/share.svg" alt='barcode' width={12} height={12} className='mr-[0.5rem]'/>
                <p>Share DID</p>
            </div>
            <div className='flex'>
                <Image src="/images/icons/copy.svg" alt='barcode' width={12} height={12} className='mr-[0.5rem]'/>
                <p>Copy DID</p>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <p className='0.75rem text-[#2C2C2C]'>or Scan DID with your other device</p>
            <Image src="/images/barcode.png" alt='barcode' width={183} height={178} className='py-[1rem]'/>
            <p className='text-[0.75rem] text-[#145AE2]'>Scan Here</p>
        </div>
    </div>
  )
}

export default MyDid