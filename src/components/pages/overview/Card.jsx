import React from 'react'

export const Card = (props) => {
	const cardClasses = `card ${props.className || ''}`;
	
  return (
	<div className={cardClasses} style={props.style}>
		<img src={props.img} alt="" />
		<div>
			<p>{props.text}</p>
			<p>{props.number}</p>
		</div>
	</div>
  )
}

