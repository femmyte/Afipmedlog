'use client';
import React, { useState } from 'react';
import ContentBox from './ContentBox';
import CustomModal from '@/components/common/CustomModal';
import { useStateContext } from '@/state/AppContext';
import GuardianForm from './GuardianForm';

const GuardianRecord = () => {
	let { myDid, userRole, user } = useStateContext();
	const [openModal, setOpenModal] = useState(false);
	const handleOpenModal = () => {
		setOpenModal(!openModal);
	};
	return (
		<section>
			<div className='mt-[2.5rem]'>
				<div className='flex items-center justify-between mb-[1.5rem]'>
					<p className='text-[1.25rem] text-primaryBlue leading-[1.75rem] font-[500] tracking-[0.025rem]'>
						Guardian Record
					</p>
					{userRole === 'patient' && (
						<button
							className='text-[0.875rem] text-primaryBlue leading-[1.75rem] font-[400] tracking-[0.025rem]'
							onClick={handleOpenModal}
						>
							Add Record
						</button>
					)}
				</div>
				<div className='grid grid-cols-12 w-full'>
					<div className='col col-span-7'>
						<ContentBox title={'Name'} text={'Chidimma Phoebe'} />
					</div>
					<div className='col-span-3'>
						<ContentBox
							title={'Relationship with Patient:'}
							text={'Mother'}
						/>
					</div>
					<div className='col-span-2'>
						<ContentBox title={'Gender:'} text={'Female'} />
					</div>
				</div>
				<div className='grid grid-cols-12 w-full'>
					<div className='col-span-6'>
						<ContentBox
							title={'Phone Number:'}
							text={'08148710043'}
						/>
					</div>
					<div className='col-span-6'>
						<ContentBox
							title={'Email Address:'}
							text={'chidimmanancy@gmail.com'}
						/>
					</div>
				</div>
				<div className='grid grid-cols-12 w-full'>
					<div className='col col-span-5'>
						<ContentBox
							title={'Home Address:'}
							text={
								'67 Ejigbo Street by Falana, Lagos State, Nigeria'
							}
						/>
					</div>
					<div className='col-span-1'>
						<ContentBox title={'City:'} text={'Lagos'} />
					</div>
					<div className='col-span-3'>
						<ContentBox title={'State'} text={'Lagos State'} />
					</div>
					<div className='col-span-3'>
						<ContentBox title={'Country:'} text={'Nigeria'} />
					</div>
				</div>
			</div>
			<CustomModal modalIsOpen={openModal} setIsOpen={setOpenModal}>
				<div className='py-[2.5rem] px-[3.62rem]'>
					<p className='font-[600] text-[1.25rem] leading-[2.375rem] text-[#2E3646] text-center mb-8'>
						Share Medical Record
					</p>
					{/* <p className='my-[1.5rem] font-[400] text-[0.875rem] leading-[1.5rem] text-[#5F6D7E] text-center'>
						What type of medical record ?
					</p> */}
					<GuardianForm handleOpenModal={handleOpenModal} />
				</div>
			</CustomModal>
		</section>
	);
};

export default GuardianRecord;
