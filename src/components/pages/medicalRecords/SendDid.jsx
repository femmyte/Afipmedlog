'use client';
import { sendEmail } from '@/service/sendEmail';
import { useStateContext } from '@/state/AppContext';
import { copyToClipboard } from '@/utils/utilities';
import React, { useState } from 'react';
import { FiClipboard } from 'react-icons/fi';

const SendDid = () => {
	let { myDid } = useStateContext();
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

	const handleClick = () => {
		setClicked(true);
		setEmail('');
		setDid('');
		setTimeout(() => {
			setClicked(false);
		}, 4000);
	};

	return (
		<div className='flex justify-center items-center h-[80vh] w-full relative'>
			{/* <p className='text-black'>welcome</p> */}
			<form
				action={async (formData) => {
					await sendEmail(formData);
				}}
				className='w-1/2 m-auto'
			>
				<input
					className='w-full p-2 rounded-md border border-gray-300 my-4 focus:border-blue-500'
					type='email'
					placeholder='Enter Recipient Email'
					value={email}
					name='email'
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					className='w-full p-2 rounded-md border border-gray-300 my-4 focus:border-blue-500'
					placeholder='Enter Your DID'
					type='text'
					name='did'
					value={did}
					onChange={(e) => setDid(e.target.value)}
				/>
				<div className='flex flex-col items-center gap-6 justify-center mt-6'>
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
				</div>
			</form>
			{copiedDid && (
				<div className='absolute px-8 py-2 rounded-md bg-green-600 top-0 right-0'>
					<p className='text-white'>Did Copied successfully</p>
				</div>
			)}
			{clicked && (
				<div className='absolute px-8 py-2 rounded-md bg-green-600 top-0 right-0'>
					<p className='text-white'>Message sent successfully</p>
				</div>
			)}
		</div>
	);
};

export default SendDid;
