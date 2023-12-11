import React, { useState } from "react";

const DiagnosisAndTreatmentInformation = () => {
  const [formData, setFormData] = useState({
    diagnosis: "",
    treatment: "",
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
      formData.diagnosis === "" ||
      formData.treatment === "" ||
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
          Diagnosis and Treatment Information:
        </p>
        <div className="flex flex-col">
          <label htmlFor="diagnosis" className="py-1">
            Diagnosis
          </label>
          <input
            type="text"
            placeholder="Hypertension"
            id="diagnosis"
            className="outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1"
            value={formData.diagnosis}
            name="diagnosis"
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
        <div className="flex flex-col">
          <label htmlFor="prescribingDoctor">Prescribing Doctor</label>
          <input
            type="text"
            placeholder="Dr. Davis"
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

export default DiagnosisAndTreatmentInformation;
