import React from "react";
import historyTableData from "@/utils/historytableData";

const PrescriptionTable = () => {
  return (
    <div
      className="mt-[1.5rem] p-[1.5rem]"
      style={{ boxShadow: "4px 4px 24px 0px rgba(206, 206, 206, 0.24)" }}
    >
      <h3 className="text-[1.5rem] text-[#151515]">Prescriptions</h3>
      <table className="w-full mt-[1rem] text-[#151515]">
        <thead>
          <tr className="text-left text-[0.875rem]">
            <th className="font-normal py-[0.88rem]">Drug</th>
            <th className="font-normal py-[0.88rem]">Doses</th>
            <th className="font-normal py-[0.88rem]">Prescribed by</th>
            <th className="font-normal py-[0.88rem]">Date</th>
            <th className="font-normal py-[0.88rem]">Status</th>
          </tr>
        </thead>
        <tbody>
          {historyTableData.map((item) => (
            <tr key={item.id} className="text-[0.75rem]">
              <td className="py-[0.875rem]">{item.drug}</td>
              <td className="py-[0.875rem]">{item.doses}</td>
              <td className="py-[0.875rem]">{item.prescribedby}</td>
              <td className="py-[0.875rem]">{item.testDate}</td>
              <td className="py-[0.875rem]">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PrescriptionTable;
