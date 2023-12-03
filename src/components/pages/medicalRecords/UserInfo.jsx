'use client';
import React, { useState, useEffect } from 'react';
import PersonalRecord from './PersonalRecord';
import GuardianRecord from './GuardianRecord';
import MedicalProvider from './MedicalProvider';
import { useStateContext } from '@/state/AppContext';
import protocolDefinition from '@/protocols/healthRecord.json';

const UserInfo = () => {
	const { web5, myDid } = useStateContext();
	const [userInfo, setUserInfo] = useState([]);
	const getUser = async () => {
		console.log('getting user');
		const { records } = await web5.dwn.records.query({
			message: {
				filter: {
					schema: protocolDefinition.types.patientInfo.schema,
				},
				// dateSort: 'createdAscending',
			},
		});
		console.log(records);
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
		console.log(userInfo);
	};
	useEffect(() => {
		if (web5) {
			getUser();
		}
	}, [web5]);

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
			<PersonalRecord />
			<GuardianRecord />
			<MedicalProvider />
			<button onClick={handleDelete}>delete</button>
		</div>
	);
};

export default UserInfo;
