// CustomInput.js
import React from "react";

const CustomInput = ({
  label,
  value,
  onChange,
  type = "text",
  options = [],
}) => {
  const renderInput = () => {
    if (type === "select") {
      return (
        <select
          className=" appearance-none border border-[#E8E8E8] rounded w-full py-[0.75rem] px-4 text-[#151515] font-[400] text-[0.875rem] leading-tight focus:outline-none focus:shadow-outline"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }

    return (
      <input
        className=" appearance-none border border-[#E8E8E8] rounded w-full py-[0.75rem] px-4 text-[#151515] font-[400] text-[0.875rem] leading-tight focus:outline-none focus:shadow-outline"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={label}
      />
    );
  };

  return (
    <div className="mb-4">
      <label
        className="block text-[#151515] font-[400] text-sm leading-[1.25rem] mb-2"
        htmlFor={label}
      >
        {label}
      </label>
      {renderInput()}
    </div>
  );
};

export default CustomInput;
