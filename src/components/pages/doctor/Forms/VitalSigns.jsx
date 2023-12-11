import React, { useState } from "react";

const VitalSigns = () => {
  const [formData, setFormData] = useState({
    bloodPressure: "",
    heartRate: "",
    respiratoryRate: "",
    bodyTemperature: "",
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
      formData.bloodPressure === "" ||
      formData.heartRate === "" ||
      formData.respiratoryRate === "" ||
      formData.bodyTemperature === ""
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
        <p className="text-[#F20D0D] font-semibold mb-[0.5rem]">Vital Signs:</p>
        <div className="flex flex-col">
          <label htmlFor="bloodPressure" className="py-1">
            Blood Pressure
          </label>
          <input
            type="text"
            placeholder="120/80 mmHg"
            id="bloodPressure"
            className="outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1"
            value={formData.bloodPressure}
            name="bloodPressure"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="heartRate">Heart Rate</label>
          <input
            type="text"
            placeholder="72 bpm"
            className="outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1"
            value={formData.heartRate}
            id="heartRate"
            name="heartRate"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="respiratoryRate">Respiratory Rate</label>
          <input
            type="text"
            placeholder="16 breaths/min"
            className="outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1"
            id="respiratoryRate"
            name="respiratoryRate"
            value={formData.respiratoryRate}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="bodyTemperature">Body Temperature</label>
          <input
            type="text"
            placeholder="98.6°F"
            className="outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1"
            id="bodyTemperature"
            name="bodyTemperature"
            value={formData.bodyTemperature}
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

export default VitalSigns;
