import React, { useState } from "react";

const MedicationHistory = () => {
  const [formData, setFormData] = useState({
    medication: "",
    dosage: "",
    frequency: "",
    prescribingDoctor: "",
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
      formData.medication === "" ||
      formData.dosage === "" ||
      formData.frequency === "" ||
      formData.prescribingDoctor === ""
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
          Medication History:
        </p>
        <div className="flex flex-col">
          <label htmlFor="medication" className="py-1">
            Medication
          </label>
          <input
            type="text"
            placeholder="Aspirin"
            id="medication"
            className="outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1"
            value={formData.medication}
            name="medication"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="dosage">Dosage</label>
          <input
            type="text"
            placeholder="100mg"
            className="outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1"
            value={formData.dosage}
            id="dosage"
            name="dosage"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="frequency">Frequency</label>
          <input
            type="text"
            placeholder="Once daily"
            className="outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1"
            id="frequency"
            name="frequency"
            value={formData.frequency}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="prescribingDoctor">Prescribing Doctor</label>
          <input
            type="text"
            placeholder="Dr. Smith"
            className="outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1"
            id="prescribingDoctor"
            name="prescribingDoctor"
            value={formData.prescribingDoctor}
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

export default MedicationHistory;
