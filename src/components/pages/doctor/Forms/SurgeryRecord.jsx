import React, { useState } from "react";

const SurgeryRecord = () => {
  const [formData, setFormData] = useState({
    surgeryType: "",
    date: "",
    surgeon: "",
    notes: "",
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
      formData.surgeryType === "" ||
      formData.date === "" ||
      formData.surgeon === "" ||
      formData.notes === ""
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
          Surgery Record:
        </p>
        <div className="flex flex-col">
          <label htmlFor="surgeryType" className="py-1">
            Surgery Type
          </label>
          <input
            type="text"
            placeholder="Appendectomy"
            id="surgeryType"
            className="outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1"
            value={formData.surgeryType}
            name="surgeryType"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            className="outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1"
            value={formData.date}
            id="date"
            name="date"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="surgeon">Surgeon</label>
          <input
            type="text"
            placeholder="Dr. Johnson"
            className="outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1"
            id="surgeon"
            name="surgeon"
            value={formData.surgeon}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="notes">Notes</label>
          <textarea
            placeholder="Additional details about the surgery"
            className="outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1"
            id="notes"
            name="notes"
            value={formData.notes}
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

export default SurgeryRecord;
