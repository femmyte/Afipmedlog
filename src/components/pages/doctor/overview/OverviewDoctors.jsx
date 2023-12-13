import React from "react";
import Image from "next/image";

const OverviewDoctors = (props) => {
  // const IconComponent = props.icon;
  return (
    <div className="mr-4 mt-4">
      <Image
        src={props.img}
        alt=""
        width={40}
        height={40}
        className="bg-white "
      />
      <p className="text-xs py-2">{props?.name}</p>
      <p className="text-xs text-gray-400">{props?.title}</p>
    </div>
  );
};

export default OverviewDoctors;
