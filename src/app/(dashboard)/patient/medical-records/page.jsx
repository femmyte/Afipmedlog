import TopComponent from '@/components/pages/medicalRecords/TopComponent';
import UserInfo from '@/components/pages/medicalRecords/UserInfo';
import React from 'react';

const page = () => {
	return (
		<div>
			{/* <SendDid /> */}
			<TopComponent />
			<UserInfo />
		</div>
	);
};

export default page;
