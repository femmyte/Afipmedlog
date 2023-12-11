import React, { useState } from "react";

const LabTestResults = () => {
  const [formData, setFormData] = useState({
    testName: "",
    dateConducted: "",
    result: "",
    referenceRange: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    if (
      formData.testName === "" ||
      formData.dateConducted === "" ||
      formData.result === "" ||
      formData.referenceRange === ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="w-[25rem] rounded-small p-5">
      <h3 className="text-center font-semibold">Add New Lab Test Result</h3>
      <form action="" className="text-sm mt-[1rem]">
        <div className="flex flex-col">
          <label htmlFor="testName" className="py-1">
            Test Name
          </label>
          <input
            type="text"
            placeholder="Complete Blood Count (CBC)"
            id="testName"
            className="outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1"
            value={formData.testName}
            name="testName"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="dateConducted">Date Conducted</label>
          <input
            type="date"
            className="outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1"
            value={formData.dateConducted}
            id="dateConducted"
            name="dateConducted"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="result">Result</label>
          <input
            type="text"
            placeholder="120 mg/dL"
            className="outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1"
            id="result"
            name="result"
            value={formData.result}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="referenceRange">Reference Range</label>
          <input
            type="text"
            placeholder="70-100 mg/dL"
            className="outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1"
            id="referenceRange"
            name="referenceRange"
            value={formData.referenceRange}
            onChange={handleInputChange}
          />
        </div>
      </form>
      <div className="flex items-center justify-center py-2">
        <button
          className="w-[10.125rem] py-[0.5rem] px-4 rounded-[0.25rem] bg-primaryBlue text-white flex justify-center items-center font-[500] leading-6 tracking-[0.02rem disabled:bg-[#DCE6FB]"
          disabled={validate()}
        >
          Add Lab Test Result
        </button>
      </div>
    </div>
  );
};

export default LabTestResults;
