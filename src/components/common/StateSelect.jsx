"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const StateSelect = ({ label, country, onChange }) => {
  const [states, setStates] = useState([]);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${country}?fields=subdivisions`
        );
        const countryData = response.data[0];
        const countryStates = countryData?.subdivisions
          ? Object.keys(countryData.subdivisions)
          : [];
        setStates(countryStates);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };

    if (country) {
      fetchStates();
    } else {
      setStates([]);
    }
  }, [country]);

  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="stateSelect"
      >
        {label}
      </label>
      <select
        id="stateSelect"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select a state</option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StateSelect;
