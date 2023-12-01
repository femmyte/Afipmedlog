'use client';
import { sendEmail } from '@/service/sendEmail';
import React, { useState } from 'react';

const Home = () => {
	const [email, setEmail] = useState('');
	const [did, setDid] = useState('');

	return (
		<div className='flex justify-center items-center h-screen w-full'>
			{/* <p className='text-black'>welcome</p> */}
			<form
				action={async (formData) => {
					await sendEmail(formData);
				}}
				className='w-1/2 m-auto'
			>
				<input
					className='border py-3 px-5 rounded-md w-full mb-4 text-black'
					type='email'
					value={email}
					name='email'
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					className='border py-3 px-5 rounded-md w-full text-black'
					type='text'
					name='did'
					value={did}
					onChange={(e) => setDid(e.target.value)}
				/>
				<div className='flex justify-center mt-6'>
					<button className='bg-red-400 px-5 py-2 rounded-md text-white'>
						Send DID
					</button>
				</div>
			</form>
		</div>
	);
};

export default Home;
