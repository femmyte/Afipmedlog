import TopComponent from '@/components/pages/doctor/TopComponent';
import UserInfo from '@/components/pages/medicalRecords/UserInfo';
import MedicalRecordPage from '@/components/pages/doctor/DoctorMedicalRecordPage/MedicalRecordPage';
import React from 'react';

const page = () => {
	return (
		<div>
			{/* <UserInfo /> */}
			<TopComponent />
			<MedicalRecordPage />
		</div>
	);
};

export default page;
