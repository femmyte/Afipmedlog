import React from "react";
import upcomingAppointmentData from "@/utils/upcomingAppointmentData";

const UpcomingAppointments = () => {
  return (
    <div className="w-full mt-[2rem] p-[1.25rem]">
      <div className="text-[#151515] flex items-center text-[1rem]">
        <h5 className="mr-[5rem]">Upcoming Appointment</h5>
        <p>History</p>
      </div>
      {upcomingAppointmentData.map((item) => (
        <table
          className="w-full my-[1.5rem] px-[0.62rem] py-4 block rounded"
          key={item.id}
          style={{ boxShadow: "4px 4px 24px 0px rgba(206, 206, 206, 0.24)" }}
        >
          <thead className="mb-[0.5rem]">
            <tr className="text-left text-[0.875rem] text-[#727272]">
              <th className="mt-[1rem] pr-[2.88rem] ">Date</th>
              <th className="mt-[1rem] pr-[2.88rem] ">Symptoms</th>
              <th className="mt-[1rem] pr-[2.88rem] ">Category</th>
              <th className="mt-[1rem] pr-[2.88rem] ">Patient</th>
              <th className="mt-[1rem] pr-[3.88rem] ">Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pr-[2rem]">{item.Date}</td>
              <td>{item.Symptoms}</td>
              <td>{item.Category}</td>
              <td>{item.Patient}</td>
              <td>{item.Status}</td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default UpcomingAppointments;
