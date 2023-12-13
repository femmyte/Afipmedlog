import React from 'react';
import { IoIosCheckmark } from "react-icons/io";

const HeroImageText = (props) => {
  const heroImageTextClasses = `card ${props.className || ''}`;
  return (
    <div className={heroImageTextClasses} style={props.style}>
        <div  className='flex items-center bg-white rounded-[0.25rem] w-full md:w-[15.6875rem] text-[1rem] shadow-md shadow-gray-200 px-[1rem] py-[0.62rem]'>
          <div className='w-[1rem] h-[1rem] mr-[0.88rem]'>
            <IoIosCheckmark  className=' bg-[#DCE6FB] text-[#145AE2]'/>
          </div>
            <p>{props.text}</p>
                {/* <p>{props.text}</p>
                <p>{props.text}</p>
                <p>{props.text}</p> */}
         </div>
    </div>
  )
}

export default HeroImageText