'use client';
import CustomModal from '@/components/common/CustomModal';
import { useStateContext } from '@/state/AppContext';
import { copyToClipboard } from '@/utils/utilities';
import React, { useEffect, useState, useCallback } from 'react';
import { FaClipboard, FaClipboardCheck } from 'react-icons/fa';
import { FiClipboard } from 'react-icons/fi';
import NewMedicalRecordCheckList from '../medicalRecords/NewMedicalRecordCheckList';
import AllergyRecord from '../medicalRecords/AllergyRecord';
import protocolDefinition from '@/protocols/healthRecord.json';

const TopComponent = () => {
	let { myDid, web5, userRole } = useStateContext();
	const [copiedDid, setCopiedDid] = useState(false);
	const [clicked, setClicked] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [openFormModal, setOpenFormModal] = useState(false);
	const [selectedItem, setSelectedItem] = useState('');
	const handleClick = () => {
		setOpenModal(true);
	};
	const handleCopyDid = () => {
		setCopiedDid(true);
		copyToClipboard(myDid);
		setTimeout(() => {
			setCopiedDid(false);
		}, 4000);
	};
	const getDoctorRecord = useCallback(async () => {
		console.log('running');
		const response = await web5.dwn.records.query({
			// from: myDid,
			// message: {
			// 	filter: {
			// 		schema: protocolDefinition.types.patientInfo.schema,
			// 		dataFormat: 'application/json',
			// 	},
			// },
			message: {
				filter: {
					recipient: myDid, // Replace 'your_did' with your actual DID
				},
			},
		});
		console.log(response);
		response.records.forEach((record) => {
			console.log(record);
		});
	}, [myDid, web5]);
	useEffect(() => {
		if (web5) {
			getDoctorRecord();
		}
	}, [getDoctorRecord, web5]);
	const handleOpenModal = (item) => {
		console.log(item);
		setSelectedItem(item);
		setOpenModal(!openModal);
		setOpenFormModal(true);
	};
	let form = selectedItem === 'Allergy Record' && <AllergyRecord />;
	return (
		<div className='flex items-center justify-between mb-[2.5rem] relative'>
			<div className=''>
				<h1 className='font-[500] text-[2rem] leading-[2.5rem] text-[#151515] tracking-[0.04rem] mb-[0.5rem'>
					Medical Records
				</h1>
				<p className='font-[400] text-[0.875rem] leading-[1.25rem] text-[#5F5F5F] tracking-[0.01754rem]'>
					Patient confidentiality is our priority.
				</p>
			</div>
			<div className='flex items-center gap-x-[2rem]'>
				<button
					className='w-[10.125rem] py-[0.5rem] px-4 rounded-[0.25rem] bg-primaryBlue text-white flex gap-x-3 items-center font-[500] leading-6 tracking-[0.02rem'
					onClick={handleCopyDid}
				>
					<FiClipboard />
					<span>Copy Did </span>
				</button>
				{userRole === 'doctor' && (
					<div className='flex items-center gap-x-[2rem]'>
						<button className='w-[10.125rem] py-[0.5rem] px-4 rounded-[0.25rem] border border-[#16B61C]  flex justify-center items-center text-[#16b61c] font-[500] leading-6 tracking-[0.02rem]'>
							Edit Record
						</button>
						<button
							className='w-[10.125rem] py-[0.5rem] px-4 rounded-[0.25rem] bg-primaryBlue text-white flex justify-center items-center font-[500] leading-6 tracking-[0.02rem'
							onClick={handleClick}
						>
							Add New Record
						</button>
					</div>
				)}
			</div>
			<CustomModal modalIsOpen={openModal} setIsOpen={setOpenModal}>
				<NewMedicalRecordCheckList handleOpenModal={handleOpenModal} />
			</CustomModal>
			<CustomModal
				modalIsOpen={openFormModal}
				setIsOpen={setOpenFormModal}
			>
				{/* <NewMedicalRecordCheckList handleOpenModal={handleOpenModal} /> */}
				{form}
			</CustomModal>
			{copiedDid && (
				<div className='absolute px-8 py-2 rounded-md bg-green-600 top-0 right-0'>
					<p className='text-white'>Did Copied successfully</p>
				</div>
			)}
		</div>
	);
};

export default TopComponent;
