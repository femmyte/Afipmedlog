import React from 'react'
import DoctorsProfile from '@/components/common/doctorsProfile/DoctorsProfile';
import MyDid from '@/components/common/doctorsProfile/MyDid';
import PersonalInformation from '@/components/common/doctorsProfile/PersonalInformation';
import CareerInformation from '@/components/common/doctorsProfile/CareerInformation';
import UpcomingAppointments from '@/components/common/doctorsProfile/UpcomingAppointments';

const page = () => {
  return (
    <div>
        <DoctorsProfile />
        <MyDid />
        <PersonalInformation />
        <CareerInformation />
        <UpcomingAppointments />
    </div>
  )
}

export default page