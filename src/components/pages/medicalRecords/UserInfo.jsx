'use client';
import React, { useState, useEffect } from 'react';
import PersonalRecord from './PersonalRecord';
import GuardianRecord from './GuardianRecord';
import MedicalProvider from './MedicalProvider';
import NewMedicalRecordCheckList from './NewMedicalRecordCheckList';
import AllergyRecord from './AllergyRecord';
import MedicalRecordsSuccess from './MedicalRecordsSuccess';
import { useStateContext } from '@/state/AppContext';
import protocolDefinition from '@/protocols/healthRecord.json';
import TopComponent from './TopComponent';

const UserInfo = () => {
	const { web5, myDid, user } = useStateContext();
	const [userInfo, setUserInfo] = useState([]);
	const [copiedDid, setCopiedDid] = useState(false);
	const [clicked, setClicked] = useState(false);

	const handleDelete = async () => {
		//Query records with plain text data format
		try {
			const response = await web5.dwn.records.query({
				message: {
					filter: {
						recordId:
							'bafyreieuxlxxxui46waeyv37lu4d76jqjsdw5j7oiubfoc7nod2soirczy',
					},
				},
			});

			// Grab the first indexed record
			const record = response.records[0];

			// Delete the record
			const deleteResult = await record.delete();
			console.log('offline >', deleteResult);
			// const deleteOnline = await web5.dwn.records.delete({
			// 	from: myDid,
			// 	message: {
			// 		recordId:
			// 			'bafyreif57hzkfdyw4znvmxs764lb7esyqtvrxddurbgy5xjtjxemwfkzhm',
			// 	},
			// });
			// console.log('online >', deleteOnline);
		} catch (error) {
			console.log('unable to delete', error);
		}
	};

	return (
		<div>
			<TopComponent />
			<PersonalRecord />
			<GuardianRecord />
			<MedicalProvider />
			<button onClick={handleDelete}>delete</button>
			<NewMedicalRecordCheckList />
			<AllergyRecord />
			<MedicalRecordsSuccess />
		</div>
	);
};

export default UserInfo;
