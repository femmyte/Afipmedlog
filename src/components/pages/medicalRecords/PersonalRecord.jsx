'use client';
import React, { useState } from 'react';
import ContentBox from './ContentBox';
import CustomModal from '@/components/common/CustomModal';
import { FiClipboard } from 'react-icons/fi';
import { sendEmail } from '@/service/sendEmail';
import { useStateContext } from '@/state/AppContext';
import { copyToClipboard } from '@/utils/utilities';
import SendDid from './SendDid';

const PersonalRecord = () => {
	const [openModal, setOpenModal] = useState(false);
	const [sendDidModal, setsendDidModal] = useState(false);
	let { myDid, userRole, user } = useStateContext();
	const [email, setEmail] = useState('');
	const [did, setDid] = useState('');
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		setClicked(true);
		setEmail('');
		setDid('');
		setTimeout(() => {
			setClicked(false);
		}, 4000);
	};
	// console.log(user);
	const handleOpenModal = () => {
		setOpenModal(true);
	};
	const handleOpenModalSendDid = () => {
		setsendDidModal(true);
	};
	// handleSendRecord = async () => {
	// 	const { status: bobStatus } = await record.send(bobDid);
	// }
	return (
		<section>
			<div>
				<div className='flex items-center justify-between mb-[1.5rem]'>
					<p className='text-[1.25rem] text-primaryBlue leading-[1.75rem] font-[500] tracking-[0.025rem]'>
						Personal Information
					</p>
					{userRole === 'patient' && (
						<div className='flex gap-x-4'>
							<button
								className='text-[0.875rem] text-primaryBlue leading-[1.75rem] font-[400] tracking-[0.025rem]'
								onClick={handleOpenModal}
							>
								Share Record
							</button>
						</div>
					)}
					{userRole === 'doctor' && (
						<div className='flex gap-x-4'>
							<button
								className='text-[0.875rem] text-primaryBlue leading-[1.75rem] font-[400] tracking-[0.025rem]'
								onClick={handleOpenModalSendDid}
							>
								Send Did
							</button>
						</div>
					)}
				</div>
				<div className='grid grid-cols-12 w-full'>
					<div className='col col-span-8'>
						<ContentBox
							title={'Name'}
							text={user?.personalInfo?.name}
						/>
					</div>
					<div className='col-span-2'>
						<ContentBox
							title={'Date of Birth'}
							text={user?.personalInfo?.dateOfBirth}
						/>
					</div>
					<div className='col-span-2'>
						<ContentBox
							title={'Gender:'}
							text={user?.personalInfo?.gender}
						/>
					</div>
				</div>
				<div className='grid grid-cols-12 w-full'>
					<div className='col col-span-2'>
						<ContentBox
							title={'Marital Status:'}
							text={user?.personalInfo?.maritalStatus}
						/>
					</div>
					<div className='col-span-5'>
						<ContentBox
							title={'Phone Number:'}
							text={user?.personalInfo?.phoneNumber}
						/>
					</div>
					<div className='col-span-5'>
						<ContentBox
							title={'Email Address:'}
							text={user?.personalInfo?.email}
						/>
					</div>
				</div>
				<div className='grid grid-cols-12 w-full'>
					<div className='col col-span-5'>
						<ContentBox
							title={'Home Address:'}
							text={user?.personalInfo?.address}
						/>
					</div>
					<div className='col-span-1'>
						<ContentBox
							title={'City:'}
							text={user?.personalInfo?.city}
						/>
					</div>
					<div className='col-span-3'>
						<ContentBox
							title={'State'}
							text={user?.personalInfo?.stateOfOrigin}
						/>
					</div>
					<div className='col-span-3'>
						<ContentBox
							title={'Country:'}
							text={user?.personalInfo?.nationality}
						/>
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
					<form className=''>
						<label
							htmlFor='did'
							className='block font-[400] text-[0.875rem] text-[#151515] mb-[0.5rem] '
						>
							Enter Recipients’ DID{' '}
						</label>
						<input
							className='w-[25rem] py-[0.75rem] px-4 rounded-[0.25rem] border border-[#E8E8E8] focus:border-blue-500 block	'
							placeholder='Recipients’ DID '
							id='did'
							type='text'
							name='did'
							value={did}
							onChange={(e) => setDid(e.target.value)}
						/>
						<div className='flex flex-col items-center gap-6 justify-center mt-8'>
							<button
								className='w-[10.125rem] py-[0.5rem] px-4 rounded-[0.25rem] bg-primaryBlue text-white flex justify-center items-center font-[500] leading-6 tracking-[0.02rem disabled:bg-[#DCE6FB]'
								disabled={!did}
							>
								Share Record
							</button>
						</div>
					</form>
				</div>
			</CustomModal>
			<CustomModal modalIsOpen={sendDidModal} setIsOpen={setsendDidModal}>
				<div className='py-[2.5rem] px-[3.62rem] relative'>
					<p className='font-[600] text-[1.25rem] leading-[2.375rem] text-[#2E3646] text-center mb-8'>
						Send your Did to your patience
					</p>
					<p className='my-[1.5rem] font-[400] text-[0.875rem] leading-[1.5rem] text-[#5F6D7E] text-center'>
						you can copy your Did by pressing the copy DID button at
						the top
					</p>
					<SendDid />
					{clicked && (
						<div className='absolute px-8 py-2 rounded-md bg-green-600 top-0 right-0'>
							<p className='text-white'>
								Message sent successfully
							</p>
						</div>
					)}
				</div>
			</CustomModal>
		</section>
	);
};

export default PersonalRecord;
