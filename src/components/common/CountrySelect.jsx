"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const CountrySelect = ({ label, onChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="mb-4">
      <label
        className="block text-[#151515] font-[400] text-sm leading-[1.25rem] mb-2"
        htmlFor="countrySelect"
      >
        {label}
      </label>
      <select
        id="countrySelect"
        className=" appearance-none border border-[#E8E8E8] rounded w-full py-[0.75rem] px-4 text-[#151515] font-[400] text-[0.875rem] leading-tight focus:outline-none focus:shadow-outline"
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country.cca2} value={country.name.common}>
            {country.name.common}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelect;
