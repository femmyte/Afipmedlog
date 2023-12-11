'use client';
import { sendEmail } from '@/service/sendEmail';
import { useStateContext } from '@/state/AppContext';
import { copyToClipboard } from '@/utils/utilities';
import React, { useState } from 'react';
import { FiClipboard } from 'react-icons/fi';

const SendDid = ({ handleClick }) => {
	let { myDid, user } = useStateContext();
	const [email, setEmail] = useState('');
	const [did, setDid] = useState('');
	const [copiedDid, setCopiedDid] = useState(false);
	const [clicked, setClicked] = useState(false);
	const handleCopyDid = () => {
		setCopiedDid(true);
		copyToClipboard(myDid);
		setTimeout(() => {
			setCopiedDid(false);
		}, 4000);
	};

	// const handleClick = () => {
	// 	setClicked(true);
	// 	setEmail('');
	// 	setDid('');
	// 	setTimeout(() => {
	// 		setClicked(false);
	// 	}, 4000);
	// };

	return (
		<form
			action={async (formData) => {
				await sendEmail(formData);
			}}
		>
			<label
				htmlFor='did'
				className='block font-[400] text-[0.875rem] text-[#151515] mb-[0.5rem] '
			>
				Enter Recipients’ Email{' '}
			</label>
			<input
				className='w-[25rem] py-[0.75rem] px-4 rounded-[0.25rem] border border-[#E8E8E8] focus:border-blue-500 block	'
				type='email'
				id='email'
				placeholder='Enter Recipient Email'
				value={email}
				name='email'
				onChange={(e) => setEmail(e.target.value)}
			/>
			<label
				htmlFor='did'
				className='block font-[400] text-[0.875rem] text-[#151515] mb-[0.5rem] '
			>
				Enter Recipients’ DID{' '}
			</label>
			<input
				className='w-[25rem] py-[0.75rem] px-4 rounded-[0.25rem] border border-[#E8E8E8] focus:border-blue-500 block	'
				placeholder='Enter Your DID'
				type='text'
				name='did'
				id='did'
				value={did}
				onChange={(e) => setDid(e.target.value)}
			/>
			<input
				className='w-[25rem] py-[0.75rem] px-4 rounded-[0.25rem] border border-[#E8E8E8] focus:border-blue-500 block	'
				placeholder='Enter Your DID'
				type='text'
				name='name'
				value={user?.personalInfo?.name}
				hidden
				readOnly
			/>
			<div className='flex flex-col items-center gap-6 justify-center mt-8'>
				<button
					className='w-[10.125rem] py-[0.5rem] px-4 rounded-[0.25rem] bg-primaryBlue text-white flex justify-center items-center font-[500] leading-6 tracking-[0.02rem disabled:bg-[#DCE6FB]'
					disabled={!did || !email}
					onClick={handleClick}
				>
					Send DID
				</button>
			</div>
			{/* <div className='flex flex-col items-center gap-6 justify-center mt-6'>
				<button
					onClick={handleCopyDid}
					className={` bg-primaryBlue px-5 py-2 rounded-md text-white flex gap-4 items-center`}
				>
					<FiClipboard />
					<span className='capitalize'>Copy Did</span>
				</button>
				<button className='bg-red-400 px-5 py-2 rounded-md text-white'>
					Send DID
				</button>
			</div> */}
		</form>
	);
};

export default SendDid;
