import React from "react";
import Image from "next/image";

export const Card = (props) => {
  const cardClasses = `card ${props.className || ""}`;

  return (
    <div className={cardClasses} style={props.style}>
      <div className="flex items-center gap-[1.5rem]">
        <Image
          src={props.img}
          alt=""
          width={40}
          height={40}
          className="bg-white rounded-md w-[2rem] h-[2rem]"
        />
        <div>
          <p className="text-[0.88rem]">{props.number}</p>
          <p className="text-[1rem] font-medium leading-7">{props.text}</p>
        </div>
      </div>
    </div>
  );
};
