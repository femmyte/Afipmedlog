'use client';
import CustomModal from '@/components/common/CustomModal';
import { useStateContext } from '@/state/AppContext';
import React, { useState } from 'react';

const TopComponent = () => {
	let { myDid, userRole } = useStateContext();

	const [openModal, setOpenModal] = useState(false);
	const handleClick = () => {
		setOpenModal(true);
	};
	return (
		<div className='flex items-center justify-between mb-[2.5rem]'>
			<div className=''>
				<h1 className='font-[500] text-[2rem] leading-[2.5rem] text-[#151515] tracking-[0.04rem] mb-[0.5rem'>
					Medical Records
				</h1>
				<p className='font-[400] text-[0.875rem] leading-[1.25rem] text-[#5F5F5F] tracking-[0.01754rem]'>
					Be in charge of your medical records, history and your
					identity.
				</p>
			</div>
			{userRole === 'doctor' && (
				<div className='flex items-center gap-x-[2rem]'>
					<button className='w-[10.125rem] py-[0.5rem] px-4 rounded-[0.25rem] border border-[#16B61C]  flex justify-center items-center text-[#16b61c] font-[500] leading-6 tracking-[0.02rem]'>
						Edit Record
					</button>
					<button
						className='w-[10.125rem] py-[0.5rem] px-4 rounded-[0.25rem] bg-primaryBlue text-white flex justify-center items-center font-[500] leading-6 tracking-[0.02rem'
						onClick={handleClick}
					>
						Add New Record
					</button>
				</div>
			)}
			<CustomModal modalIsOpen={openModal} setIsOpen={setOpenModal}>
				<div className='py-[2.5rem] px-[3.62rem]'>
					<p className='font-[600] text-[1.25rem] leading-[2.375rem] text-[#2E3646] text-center'>
						Add New Medical Record
					</p>
					<p className='my-[1.5rem] font-[400] text-[0.875rem] leading-[1.5rem] text-[#5F6D7E] text-center'>
						What type of medical record ?
					</p>
				</div>
			</CustomModal>
		</div>
	);
};

export default TopComponent;
