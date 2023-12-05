'use client';
import React, { useEffect, useState } from 'react';
import ContentBox from './ContentBox';
import CustomModal from '@/components/common/CustomModal';
import { useStateContext } from '@/state/AppContext';
import GuardianForm from './GuardianForm';

const GuardianRecord = () => {
	let { myDid, userRole, userInfo, guardianRecord, setguardianRecord } =
		useStateContext();
	const [isLoading, setIsLoading] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [isSuccessful, setIsSuccessful] = useState(false);
	// const [guardianRecord, setguardianRecord] = useState(null);

	const [user, setUser] = useState({
		name: '',
		email: '',
		address: '',
		phoneNumber: '',
		gender: '',
		relationship: '',
		nationality: '',
		stateOfOrigin: '',
		city: '',
	});
	const handleOpenModal = () => {
		setOpenModal(!openModal);
	};
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setUser({ ...user, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			console.log('running');
			const userInfoProtocol = protocolDefinition;
			const userData = {
				guardianInfo: {
					// '@type': 'userInfo',
					name: user.name,
					email: user.email,
					address: user.address,
					phoneNumber: user.phoneNumber,
					gender: user.gender,
					relationship: user.relationship,
					nationality: user.nationality,
					stateOfOrigin: user.stateOfOrigin,
					city: user.city,
				},
			};
			const { record, status } = await web5.dwn.records.create({
				data: userData,
				message: {
					protocol: userInfoProtocol.protocol,
					protocolPath: 'guardianInfo',
					schema: userInfoProtocol.types.guardianInfo.schema,
					recipient: myDid,
					dataFormat: 'application/json',
					parentId: userInfo.id,
					contextId: userInfo.contextId,
				},
			});
			// setguardianRecord(record);
			if (record) {
				setIsSuccessful(true);
				setAlertMessage(status.message);
				setTimeout(() => {
					isSuccessful(false);
				}, 4000);
			}
			// console.log(status, record);
			if (record) {
				// getUser();
				const { status: myDidStatus } = await record.send(myDid);

				console.log('status of online dwd >', myDidStatus);
				handleOpenModal();
			}
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};
	if (isLoading) {
		return (
			<div className='h-screen w-full flex justify-center items-center'>
				<p className='text-xl'>Loading..</p>
			</div>
		);
	}
	return (
		<section className='relative'>
			<div className='mt-[2.5rem]'>
				<div className='flex items-center justify-between mb-[1.5rem]'>
					<p className='text-[1.25rem] text-primaryBlue leading-[1.75rem] font-[500] tracking-[0.025rem]'>
						Guardian Record
					</p>
					{userRole === 'patient' && (
						<button
							className='text-[0.875rem] text-primaryBlue leading-[1.75rem] font-[400] tracking-[0.025rem]'
							onClick={() => setOpenModal(true)}
						>
							Add Record
						</button>
					)}
				</div>
				<div className='grid grid-cols-12 w-full'>
					<div className='col col-span-7'>
						<ContentBox
							title={'Name'}
							text={guardianRecord?.name}
						/>
					</div>
					<div className='col-span-3'>
						<ContentBox
							title={'Relationship with Patient:'}
							text={guardianRecord?.relationship}
						/>
					</div>
					<div className='col-span-2'>
						<ContentBox
							title={'Gender:'}
							text={guardianRecord?.gender}
						/>
					</div>
				</div>
				<div className='grid grid-cols-12 w-full'>
					<div className='col-span-6'>
						<ContentBox
							title={'Phone Number:'}
							text={guardianRecord?.phoneNumber}
						/>
					</div>
					<div className='col-span-6'>
						<ContentBox
							title={'Email Address:'}
							text={guardianRecord?.email}
						/>
					</div>
				</div>
				<div className='grid grid-cols-12 w-full'>
					<div className='col col-span-5'>
						<ContentBox
							title={'Home Address:'}
							text={guardianRecord?.address}
						/>
					</div>
					<div className='col-span-1'>
						<ContentBox
							title={'City:'}
							text={guardianRecord?.city}
						/>
					</div>
					<div className='col-span-3'>
						<ContentBox
							title={'State'}
							text={guardianRecord?.stateOfOrigin}
						/>
					</div>
					<div className='col-span-3'>
						<ContentBox
							title={'Country:'}
							text={guardianRecord?.nationality}
						/>
					</div>
				</div>
			</div>
			<CustomModal modalIsOpen={openModal} setIsOpen={setOpenModal}>
				<div className='py-[2.5rem] px-[3.62rem]'>
					<p className='font-[600] text-[1.25rem] leading-[2.375rem] text-[#2E3646] text-center mb-8'>
						Share Medical Record
					</p>
					<div className='p-6 relative'>
						<form onSubmit={handleSubmit}>
							<div className={`grid gap-x-4 grid-cols-2`}>
								<div className={`w-full`}>
									<label>
										Name:
										<input
											type='text'
											name='name'
											value={user.name}
											onChange={handleInputChange}
											className={`w-full p-2 rounded-md border border-gray-300 focus:border-blue-500`}
										/>
									</label>
								</div>
								<div className={`w-full`}>
									<label>
										Email:
										<input
											type='email'
											name='email'
											value={user.email}
											onChange={handleInputChange}
											className={`w-full p-2 rounded-md border border-gray-300 focus:border-blue-500`}
										/>
									</label>
								</div>
							</div>
							<div className={`grid gap-x-4 grid-cols-2 mt-4`}>
								<div className={`w-full`}>
									<label>
										Guardian relationship:
										<input
											type='text'
											name='relationship'
											value={user.relationship}
											onChange={handleInputChange}
											className={`w-full p-2 rounded-md border border-gray-300 focus:border-blue-500`}
										/>
									</label>
								</div>
								<div className={`w-full`}>
									<label>
										Address:
										<input
											type='text'
											name='address'
											value={user.address}
											onChange={handleInputChange}
											className={`w-full p-2 rounded-md border border-gray-300 focus:border-blue-500`}
										/>
									</label>
								</div>
							</div>
							<div className={`grid gap-x-4 grid-cols-2 mt-4`}>
								<div className={`w-full`}>
									<label>
										Phone Number:
										<input
											type='tel'
											name='phoneNumber'
											value={user.phoneNumber}
											onChange={handleInputChange}
											className={`w-full p-2 rounded-md border border-gray-300 focus:border-blue-500`}
										/>
									</label>
								</div>
								<div className={`w-full`}>
									<label>
										Gender:
										<select
											name='gender'
											value={user.gender}
											onChange={handleInputChange}
											required
											className={`w-full p-2 rounded-md border border-gray-300 focus:border-blue-500`}
										>
											<option>Select Gender</option>
											<option value='male'>Male</option>
											<option value='female'>
												Female
											</option>
											<option value='other'>Other</option>
										</select>
									</label>
								</div>
							</div>
							<div className={`grid gap-x-4 grid-cols-2 mt-4`}>
								<div className={`w-full`}>
									<label>
										City:
										<input
											type='text'
											name='city'
											value={user.city}
											onChange={handleInputChange}
											className={`w-full p-2 rounded-md border border-gray-300 focus:border-blue-500`}
										/>
									</label>
								</div>
								<div className={`w-full`}>
									<label>
										State Of Origin:
										<input
											type='text'
											name='stateOfOrigin'
											value={user.stateOfOrigin}
											onChange={handleInputChange}
											className={`w-full p-2 rounded-md border border-gray-300 focus:border-blue-500`}
										/>
									</label>
								</div>
							</div>
							<div className={`grid gap-x-4 grid-cols-2 mt-4`}>
								<div className={`w-full`}>
									<label>
										Nationality:
										<input
											type='text'
											name='nationality'
											value={user.nationality}
											onChange={handleInputChange}
											className={`w-full p-2 rounded-md border border-gray-300 focus:border-blue-500`}
										/>
									</label>
								</div>
							</div>
							<div className='flex justify-center mt-[4rem]'>
								<button
									className='text-white rounded-md px-5 py-3 bg-primaryBlue'
									type='submit'
								>
									Create Update
								</button>
							</div>
						</form>
					</div>
				</div>
			</CustomModal>
			{isSuccessful && (
				<div className='absolute px-8 py-2 rounded-md bg-green-600 top-0 right-0'>
					<p className='text-white'>{alertMessage}</p>
				</div>
			)}
		</section>
	);
};

export default GuardianRecord;
