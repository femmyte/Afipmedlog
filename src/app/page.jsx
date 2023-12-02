'use client';
import React, { useState, useEffect } from 'react';
import { Web5 } from '@web5/api';
import { useRouter } from 'next/navigation';
const Home = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const [did, setDid] = useState('');

	useEffect(() => {
		const existingDid = localStorage.getItem('myDid');
		if (existingDid) {
			router.push('/overview');
		}
	});
	const handleClick = async () => {
		try {
			const { web5, did } = await Web5.connect({ sync: '5s' });
			localStorage.setItem('myDid', did);
			router.push('/profile'); // Redirect to the dashboard page after successful login
		} catch (error) {
			console.error('Error Singning up:', error);
		} finally {
			setIsLoading(false);
		}
	};

	if (isLoading) {
		return (
			<div className='h-screen w-screen flex justify-center items-center'>
				<p className='text-xl'>Loading..</p>
			</div>
		);
	}
	return (
		<div className='flex justify-center items-center h-screen w-full'>
			<p className='text-black'>welcome</p>
			<div className='flex justify-center'>
				<button
					className='bg-purple-500 px-5 py-3'
					onClick={handleClick}
				>
					get started
				</button>
			</div>
		</div>
	);
};

export default Home;
