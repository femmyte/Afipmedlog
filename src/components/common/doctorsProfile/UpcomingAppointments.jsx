import React from 'react'
import upcomingAppointmentData from '@/utils/upcomingAppointmentData'

const UpcomingAppointments = () => {
  return (
    <div className='w-[43rem] mt-[2rem]'>
        <div className='text-[#151515] flex items-center text-[1rem]'>
            <h5 className='mr-[5rem]'>Upcoming Appointment</h5>
            <p>History</p>
        </div>
        <table>
            <thead>
                <tr className='text-left text-[0.875rem] text-[#727272]'>
                    <th className='mt-[1rem] pr-[2.88rem] '>Date</th>
                    <th className='mt-[1rem] pr-[2.88rem] '>Symptoms</th>
                    <th className='mt-[1rem] pr-[2.88rem] '>Category</th>
                    <th className='mt-[1rem] pr-[2.88rem] '>Patient</th>
                    <th className='mt-[1rem] pr-[3.88rem] '>Status</th>
                </tr>
            </thead>
            <tbody>
                {upcomingAppointmentData.map((item) => (
                    <tr key={item.id}>
                        <td className='pr-[2rem]'>{item.Date}</td>
                        <td>{item.Symptoms}</td>
                        <td>{item.Category}</td>
                        <td>{item.Patient}</td>
                        <td>{item.Status}</td>
                        <td>...</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default UpcomingAppointments