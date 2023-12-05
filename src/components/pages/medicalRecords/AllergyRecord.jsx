'use client';
import React, { useState } from 'react';

const AllergyRecord = () => {
	const [formData, setFormData] = useState({
		name: '',
		severity: '',
		reaction: '',
		treatment: '',
	});
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const validate = () => {
		if (
			formData.name === '' ||
			formData.reaction === '' ||
			formData.severity === '' ||
			formData.treatment === ''
		) {
			return true;
		} else {
			return false;
		}
	};

	return (
		<div className='w-[25rem] rounded-small p-5'>
			<h3 className='text-center font-semibold'>
				Add New Medical Record
			</h3>
			<form action='' className='text-sm mt-[1rem]'>
				<p className='text-[#F20D0D] font-semibold  mb-[0.5rem]'>
					Allergy Record:
				</p>
				<div className='flex flex-col'>
					<label htmlFor='name' className='py-1'>
						Name of allergy
					</label>
					<input
						type='text'
						placeholder='Bee sting'
						id='name'
						className='outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1'
						value={formData.name}
						name='name'
						onChange={handleInputChange}
					/>
				</div>
				<div className='flex flex-col'>
					<label htmlFor='severity'>Severity</label>
					<input
						type='text'
						placeholder='Severe'
						className='outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1'
						value={formData.severity}
						id='severity'
						name='severity'
						onChange={handleInputChange}
					/>
				</div>
				<div className='flex flex-col'>
					<label htmlFor='reaction'>Reactions</label>
					<input
						type='text'
						placeholder='Swollen skin, painful skin'
						className='outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1'
						id='reaction'
						name='reaction'
						value={formData.reaction}
						onChange={handleInputChange}
					/>
				</div>
				<div className='flex flex-col'>
					<label htmlFor='treatment'>Treatment</label>
					<input
						type='text'
						placeholder='use of balm'
						className='outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1'
						id='treatment'
						name='treatment'
						value={formData.treatment}
						onChange={handleInputChange}
					/>
				</div>
			</form>
			<div className='flex items-center justify-center py-2'>
				<button
					className='w-[10.125rem] py-[0.5rem] px-4 rounded-[0.25rem] bg-primaryBlue text-white flex justify-center items-center font-[500] leading-6 tracking-[0.02rem disabled:bg-[#DCE6FB]'
					disabled={validate()}
				>
					Add Record
				</button>
			</div>
		</div>
	);
};

export default AllergyRecord;
