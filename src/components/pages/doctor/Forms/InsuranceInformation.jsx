import React, { useState } from "react";

const InsuranceInformation = () => {
  const [formData, setFormData] = useState({
    provider: "",
    policyNumber: "",
    contactInfo: "",
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
      formData.provider === "" ||
      formData.policyNumber === "" ||
      formData.contactInfo === ""
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
          Insurance Information:
        </p>
        <div className="flex flex-col">
          <label htmlFor="provider" className="py-1">
            Insurance Provider
          </label>
          <input
            type="text"
            placeholder="ABC Insurance"
            id="provider"
            className="outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1"
            value={formData.provider}
            name="provider"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="policyNumber">Policy Number</label>
          <input
            type="text"
            placeholder="123456789"
            className="outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1"
            value={formData.policyNumber}
            id="policyNumber"
            name="policyNumber"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="contactInfo">Contact Information</label>
          <input
            type="text"
            placeholder="Phone, Email"
            className="outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1"
            id="contactInfo"
            name="contactInfo"
            value={formData.contactInfo}
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

export default InsuranceInformation;
