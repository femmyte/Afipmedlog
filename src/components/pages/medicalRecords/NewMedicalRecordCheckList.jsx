'use client';
import React, { useState } from 'react';
import checklistData from '@/utils/checklistData';

const NewMedicalRecordCheckList = ({ handleOpenModal }) => {
	const [recordType, setRecordType] = useState('');
	return (
		<div className='w-[25rem] rounded-sm p-5'>
			<h3 className='text-center font-semibold'>
				Add New Medical Records
			</h3>
			<div>
				<p className='py-2'>What type of medical record</p>
				<div>
					{checklistData.map((item) => (
						<div key={item.id} className='flex py-2 text-sm'>
							<input
								value={recordType}
								checked={item.records === recordType}
								onChange={(e) => setRecordType(item.records)}
								name='recordType'
								type='radio'
								id={`recordType-${item.id}`}
							/>
							<label
								htmlFor={`recordType-${item.id}`}
								className='px-3'
							>
								{item.records}
							</label>
						</div>
					))}
					<div className='flex items-center justify-center py-2'>
						<button
							className='w-[10.125rem] py-[0.5rem] px-4 rounded-[0.25rem] bg-primaryBlue text-white flex justify-center items-center font-[500] leading-6 tracking-[0.02rem disabled:bg-[#DCE6FB]'
							disabled={!recordType}
							onClick={() => handleOpenModal(recordType)}
						>
							Continue
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewMedicalRecordCheckList;
