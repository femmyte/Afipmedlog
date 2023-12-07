import React from 'react';
import { Card } from './Card';
import Image from "next/image";

const Cards = () => {
  return (
    <div className='flex text-white mt-[2rem] gap-[1rem]'>
        <Card
        className="bg-[#145AE2] w-[16.1875rem] h-[6rem] py-[1rem] px-[1.5rem]"
        img = '/images/icons/heartbeat.svg'
        text = "Heart Rate"
        number = "80BPM"/>
        <Card
        className="bg-[#7C17CC] w-[16.1875rem] h-[6rem] py-[1rem] px-[1.5rem]"
        img = '/images/icons/glucose.svg'
        text = "Glucose Level"
        number = "60-80mg/dl"/>
        <Card
        className="bg-[#18CC20] w-[16.1875rem] h-[6rem] py-[1rem] px-[1.5rem]"
        img = '/images/icons/blood-pressure.svg'
        text = "Blood Pressure"
        number = "120mmHG"/>
    </div>
  )
}

export default Cards