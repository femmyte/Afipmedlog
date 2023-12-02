import React from 'react'
import Image from 'next/image';

export const Card = (props) => {
	const cardClasses = `card ${props.className || ''}`;
	
  return (
	<div className={cardClasses} style={props.style}>
		<div className='flex items-center space-around p-2'>
		  <Image src={props.img} alt="" width={40} height={40} className='bg-white rounded-md p-1'/>
		  <div>
			  <p className=''>{props.text}</p>
			  <p className='text-xs'>{props.number}</p>
		  </div>
		</div>
	</div>
  )
}

