import React from 'react';
import OverviewHeader from '@/components/pages/overview/OverviewHeader';
import Cards from '@/components/pages/overview/Cards';
import Table from '@/components/pages/overview/Table';
import MedicalRecords from '@/components/pages/overview/MedicalRecords';
import Doctors from '@/components/pages/overview/Doctors';
import GeneralDetails from '@/components/pages/overview/GeneralDetails';
import OverviewAppointments from '@/components/pages/overview/OverviewAppointments';

const page = () => {
	return (
		<div>
			<OverviewHeader />
			<Cards />
			<Table />
			<MedicalRecords />
			<Doctors />
			<GeneralDetails />
			<OverviewAppointments />
		</div>
	);
};

export default page;
