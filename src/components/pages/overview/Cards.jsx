import React from 'react';
import { Card } from './Card';
import heartrate from '../../../../public/images/icons/heartbeat.svg';
import glucose from '../../../../public/images/icons/glucose.svg';
import bloodPressure from '../../../../public/images/icons/blood-pressure.svg';

const Cards = () => {
  return (
    <div className='flex text-white mt-[2rem]'>
        <Card
        className="bg-[#145AE2] w-[12rem] mr-[2rem] p-2"
        img = {heartrate}
        text = "Heart Rate"
        number = "80BPM"/>
        <Card
        className="bg-[#7C17CC] w-[12rem] mr-[2rem] p-2"
        img = {glucose}
        text = "Glucose Level"
        number = "60-80mg/dl"/>
        <Card
        className="bg-[#18CC20] w-[12rem] mr-[2rem] p-2"
        img = {bloodPressure}
        text = "Blood Pressure"
        number = "120mmHG"/>
    </div>
  )
}

export default Cards