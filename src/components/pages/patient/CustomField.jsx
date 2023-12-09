// CustomFormField.js
import CustomInput from "@/components/common/CustomInput";
import React, { useState } from "react";

const CustomFormField = ({
  label,
  initialValue = "",
  type = "text",
  options = [],
}) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <CustomInput
        label={label}
        value={value}
        onChange={handleChange}
        type={type}
        options={options}
      />
      <p className="text-gray-600">
        Entered {label}: {value}
      </p>
    </div>
  );
};

export default CustomFormField;
