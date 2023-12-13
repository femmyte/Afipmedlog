import React from "react";
import overviewTableData from "@/utils/OverviewTableData";
import { GoChevronRight } from "react-icons/go";

const Table = () => {
  const getStatusColor = (status) => {
    if (status === "Done") {
      return "blue";
    } else if (status === "Active") {
      return "green";
    }

    return "black";
  };
  return (
    <div
      className="w-full  rounded-[0.25rem] px-[1rem] py-[1.5rem]"
      style={{ boxShadow: "4px 4px 24px 0px rgba(206, 206, 206, 0.24)" }}
    >
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-[1.25rem]">History</h2>
        <div className="flex items-center text-[0.75rem] text-[#145AE2]">
          <button className="text-[0.75rem]">See All</button>
          <GoChevronRight />
        </div>
      </div>
      <table className="mt-[0.5rem] text-left w-full overflow-auto">
        <thead>
          <tr className="text-[0.875rem] py-[0.88rem] mr-[0.88rem]">
            <th className="font-normal ">Treatment</th>
            <th className="font-normal ">Doctor</th>
            <th className="font-normal mr-[1rem]">Date</th>
            <th className="font-normal mr-[1rem]">Prescription</th>
            <th className="font-normal mr-[1rem]">Status</th>
          </tr>
        </thead>
        <tbody>
          {overviewTableData.map((item) => (
            <tr key={item.id} className="text-[0.75rem] ">
              <td className=" py-[0.88rem] pr-[1.25rem]">{item.treatment}</td>
              <td className=" py-[0.88rem] pr-[1.25rem]">{item.doctor}</td>
              <td className=" py-[0.88rem] pr-[1.25rem]">{item.date}</td>
              <td className=" py-[0.88rem] pr-[2rem]">{item.prescription}</td>
              <td
                className=" py-[0.88rem] "
                style={{ color: getStatusColor(item.status) }}
              >
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
