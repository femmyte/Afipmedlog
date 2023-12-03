import React from 'react'
import overviewTableData from '@/utils/OverviewTableData';
import { GoChevronRight } from "react-icons/go";

const Table = () => {

    const getStatusColor = (status) => {
        if (status === 'Done') {
          return 'blue';
        } else if (status === 'Active') {
          return 'green';
        }

        return 'black';
      };
  return (
    <div className='w-[23rem] shadow-gray-300 shadow-sm p-3'>
        <div className='flex justify-between'>
            <h2>History</h2>
            <div className='flex items-center text-[#145AE2]'>
              <button className='text-sm'>See All</button>
              <GoChevronRight />
            </div>
       </div>
       <table className='mt-[0.5rem] text-left'>
            <tr className='text-xs'>
              <th className='p-2'>Treatment</th>
              <th className='p-2'>Doctor</th>
              <th className='p-2'>Date</th>
              <th className='p-2'>Prescription</th>
              <th className='p-2'>Status</th>
            </tr>
{overviewTableData.map((item) => (
            <tr key={item.id} className='text-xs '>
                <td className='p-2'>{item.treatment}</td>
                <td className='p-2'>{item.doctor}</td>
                <td className='p-2'>{item.date}</td>
                <td className='p-2'>{item.prescription}</td>
                <td className='p-2' style={{ color: getStatusColor(item.status) }}>{item.status}</td>
          </tr>
))}
       </table>
    </div>
  )
}

export default Table