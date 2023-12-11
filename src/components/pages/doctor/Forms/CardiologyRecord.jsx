import React, { useState } from "react";

const CardiologyRecord = () => {
  const [formData, setFormData] = useState({
    heartCondition: "",
    testPerformed: "",
    testResults: "",
    treatment: "",
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
      formData.heartCondition === "" ||
      formData.testPerformed === "" ||
      formData.testResults === "" ||
      formData.treatment === ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="w-[25rem] rounded-small p-5">
      <h3 className="text-center font-semibold">Add New Medical Record</h3>
      <form action="" className="text-sm mt-[1rem]">
        <p className="text-[#F20D0D] font-semibold mb-[0.5rem]">
          Cardiology Record:
        </p>
        <div className="flex flex-col">
          <label htmlFor="heartCondition" className="py-1">
            Heart Condition
          </label>
          <input
            type="text"
            placeholder="Atrial Fibrillation"
            id="heartCondition"
            className="outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1"
            value={formData.heartCondition}
            name="heartCondition"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="testPerformed">Test Performed</label>
          <input
            type="text"
            placeholder="ECG, Echo"
            className="outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1"
            value={formData.testPerformed}
            id="testPerformed"
            name="testPerformed"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="testResults">Test Results</label>
          <input
            type="text"
            placeholder="Normal"
            className="outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1"
            id="testResults"
            name="testResults"
            value={formData.testResults}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="treatment">Treatment</label>
          <input
            type="text"
            placeholder="Prescription, Lifestyle Changes"
            className="outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1"
            id="treatment"
            name="treatment"
            value={formData.treatment}
            onChange={handleInputChange}
          />
        </div>
      </form>
      <div className="flex items-center justify-center py-2">
        <button
          className="w-[10.125rem] py-[0.5rem] px-4 rounded-[0.25rem] bg-primaryBlue text-white flex justify-center items-center font-[500] leading-6 tracking-[0.02rem disabled:bg-[#DCE6FB]"
          disabled={validate()}
        >
          Add Record
        </button>
      </div>
    </div>
  );
};

export default CardiologyRecord;
