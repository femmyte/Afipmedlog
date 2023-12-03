import React from 'react';
import { Card } from './Card';
import Image from "next/image";

const Cards = () => {
  return (
    <div className='flex text-white mt-[2rem]'>
        <Card
        className="bg-[#145AE2] w-[13rem] mr-[2rem] p-2"
        img = '/images/icons/heartbeat.svg'
        text = "Heart Rate"
        number = "80BPM"/>
        <Card
        className="bg-[#7C17CC] w-[13rem] mr-[2rem] p-2"
        img = '/images/icons/glucose.svg'
        text = "Glucose Level"
        number = "60-80mg/dl"/>
        <Card
        className="bg-[#18CC20] w-[13rem] mr-[2rem] p-2"
        img = '/images/icons/blood-pressure.svg'
        text = "Blood Pressure"
        number = "120mmHG"/>
    </div>
  )
}

export default Cards