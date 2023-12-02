import React from 'react';
import OverviewHeader from '@/components/pages/overview/OverviewHeader';
import Cards from '@/components/pages/overview/Cards';
// import OverviewTable from '@/components/pages/overview/OverviewTable';
import Table from '@/components/pages/overview/Table';

const page = () => {
  return (
	<div>
		<OverviewHeader />
		<Cards />
		<Table />
	</div>
  )
}

export default page
