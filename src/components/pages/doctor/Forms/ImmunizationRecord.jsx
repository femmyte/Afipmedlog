import React, { useState } from "react";

const ImmunizationRecord = () => {
  const [formData, setFormData] = useState({
    vaccineType: "",
    dateAdministered: "",
    lotNumber: "",
    nextScheduled: "",
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
      formData.vaccineType === "" ||
      formData.dateAdministered === "" ||
      formData.lotNumber === "" ||
      formData.nextScheduled === ""
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
          Immunization Record:
        </p>
        <div className="flex flex-col">
          <label htmlFor="vaccineType" className="py-1">
            Vaccine Type
          </label>
          <input
            type="text"
            placeholder="COVID-19 Vaccine"
            id="vaccineType"
            className="outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1"
            value={formData.vaccineType}
            name="vaccineType"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="dateAdministered">Date Administered</label>
          <input
            type="date"
            className="outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1"
            value={formData.dateAdministered}
            id="dateAdministered"
            name="dateAdministered"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lotNumber">Lot Number</label>
          <input
            type="text"
            placeholder="123ABC"
            className="outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1"
            id="lotNumber"
            name="lotNumber"
            value={formData.lotNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="nextScheduled">Next Scheduled</label>
          <input
            type="date"
            className="outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1"
            id="nextScheduled"
            name="nextScheduled"
            value={formData.nextScheduled}
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

export default ImmunizationRecord;
