import React from "react";
import historyTableData from "@/utils/historytableData";

const TestTable = () => {
  return (
    <div
      className="mt-[1.5rem] p-[1.5rem]"
      style={{ boxShadow: "4px 4px 24px 0px rgba(206, 206, 206, 0.24)" }}
    >
      <h3 className="text-[1.5rem] text-[#151515]">Tests</h3>
      <table className="w-full mt-[1rem] text-[#151515] overflow-auto max-w-[100%]">
        <thead>
          <tr className="text-left text-[0.875rem]">
            <th className="font-normal py-[0.88rem]">Name</th>
            <th className="font-normal py-[0.88rem]">Test Method</th>
            <th className="font-normal py-[0.88rem]">Result</th>
            <th className="font-normal py-[0.88rem]">Patients</th>
            <th className="font-normal py-[0.88rem]">Date</th>
          </tr>
        </thead>
        <tbody>
          {historyTableData.map((item) => (
            <tr key={item.id} className="text-[0.75rem]">
              <td className="py-[0.875rem]">{item.testName}</td>
              <td className="py-[0.875rem]">{item.testMethod}</td>
              <td className="py-[0.875rem]">{item.result}</td>
              <td className="py-[0.875rem]">{item.patient}</td>
              <td className="py-[0.875rem]">{item.testDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestTable;
