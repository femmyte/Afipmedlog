'use client';
import { useStateContext } from '@/state/AppContext';
// import { Web5 } from '@web5/api';
import React, { useContext, useEffect, useState } from 'react';
import protocolDefinition from '@/protocols/profileProtocol.json';
const ProfilePage = () => {
	const { web5, myDid } = useStateContext();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	// const [myDid, setMyDid] = useState('');
	// const [web5, setWeb5] = useState(null);
	const [userRecord, setUserRecord] = useState(null);
	const existingDid = localStorage.getItem('myDid');
	const [userInfo, setUserInfo] = useState([]);
	const sharedList = [];
	// useEffect(() => {
	// 	const getObject = async () => {
	// 		const { web5: userWeb } = await Web5.connect(existingDid);
	// 		// console.log(userWeb);
	// 		setMyDid(existingDid);
	// 		setWeb5(userWeb);
	// 	};

	// 	getObject();
	// }, []);
	// console.log(web5);
	// const configureProtocol = async () => {
	// 	// query the list of existing protocols on the DWN
	// 	const { protocols, status } = await web5.dwn.protocols.query({
	// 		message: {
	// 			filter: {
	// 				protocol: protocolDefinition.protocol,
	// 			},
	// 		},
	// 	});

	// 	if (status.code !== 200) {
	// 		alert('Error querying protocols');
	// 		console.error('Error querying protocols', status);
	// 		return;
	// 	}

	// 	// if the protocol already exists, we return
	// 	if (protocols.length > 0) {
	// 		console.log('Protocol already exists');
	// 		return;
	// 	}

	// 	// configure protocol on local DWN
	// 	const { status: configureStatus, protocol } =
	// 		await web5.dwn.protocols.configure({
	// 			message: {
	// 				definition: protocolDefinition,
	// 			},
	// 		});

	// 	console.log('Protocol configured', configureStatus, protocol);
	// };
	// useEffect(() => {
	// 	if (web5) {
	// 		configureProtocol();
	// 	}
	// }, [web5]);
	const getUser = async () => {
		const { records } = await web5.dwn.records.query({
			message: {
				filter: {
					schema: protocolDefinition.types.userInfo.schema,
				},
				dateSort: 'createdAscending',
			},
		});
		// add entry to userInfo
		for (let record of records) {
			const data = await record.data.json();
			const list = { record, data, id: record.id };
			console.log(list);
			setUserInfo((user) => {
				if (!user.some((item) => item.id === list.id)) {
					return [...user, list];
				}
				return user;
			});
		}
	};
	useEffect(() => {
		if (web5) {
			getUser();
		}
	}, [web5]);
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (email === '' && name === '') {
			alert('email and fullname is required');
			return;
		}
		setIsLoading(true);
		try {
			console.log('running');
			const userInfoProtocol = protocolDefinition;
			const userData = {
				// '@type': 'userInfo',
				username: name,
				email: email,
			};
			const { record, status } = await web5.dwn.records.create({
				data: userData,
				message: {
					protocol: userInfoProtocol.protocol,
					protocolPath: 'userInfo',
					schema: userInfoProtocol.types.userInfo.schema,
					recipient: myDid,
				},
			});
			// console.log('status >', status);
			// console.log('record >', record);
			setUserRecord(record);
			setEmail('');
			setName('');
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};
	console.log(userInfo);
	if (isLoading) {
		return (
			<div className='h-screen w-screen flex justify-center items-center'>
				<p className='text-xl'>Loading..</p>
			</div>
		);
	}
	return (
		<div className='p-6'>
			<form onSubmit={handleSubmit}>
				<div className='w-[80%] flex gap-x-7 justify-center items-center my-5'>
					<input
						type='text'
						placeholder='Enter your Full Name'
						value={name}
						className='w-full'
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						type='text'
						placeholder='Enter your Email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className='flex justify-center'>
					<button className='bg-purple-500 px-5 py-3' type='submit'>
						Register
					</button>
				</div>
			</form>
			<div className='my-5'>
				{userInfo &&
					userInfo.map((user) => {
						return (
							<div className='' key={user.id}>
								<p>username: {user.data.username}</p>
								<p>userEmail: {user.data.email}</p>
							</div>
						);
					})}
				<div className='flex justify-center'>
					<button
						onClick={getUser}
						className='bg-purple-500 px-5 py-3'
						type='submit'
					>
						Register
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
