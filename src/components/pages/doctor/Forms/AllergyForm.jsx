"use client";
import { useStateContext } from "@/state/AppContext";
import React, { useCallback, useEffect, useState } from "react";
import protocolDefinition from "@/protocols/healthRecord.json";
import useWeb5 from "@/state/useWeb5";
const AllergyRecord = ({ recordIdNumber }) => {
  const [record, setRecord] = useState(null);
  const [recordList, setRecordList] = useState(null);
  const { web5, myDid, initWeb5 } = useWeb5();
  let { sharedHealthRecord } = useStateContext();
  // console.log(patientDid);
  // const getRecord = useCallback(async () => {
  //   try {
  //     let { record, status } = await web5.dwn.records.read({
  //       message: {
  //         filter: {
  //           schema: protocolDefinition.types.patientInfo.schema,
  //           recordId: patientDid,
  //         },
  //       },
  //     });
  //     console.log(record, status);

  //     // const response = await web5.dwn.records.query({
  //     //   from: patientDid,
  //     //   message: {
  //     //     filter: {
  //     //       schema: protocolDefinition.types.patientInfo.schema,
  //     //       dataFormat: "application/json",
  //     //     },
  //     //   },
  //     // });
  //     // for (let record of response.records) {
  //     //   const data = await record.data.json();
  //     //   const list = { record, data, id: record.id };
  //     //   setRecordList((user) => {
  //     //     if (!user || !user.some((item) => item.id === list.id)) {
  //     //       return [...(user || []), list];
  //     //     }
  //     //     return user;
  //     //   });
  //     // }

  //     // for (let record of response.records) {
  //     //   const data = await record.data.json();
  //     //   const list = { record, data, id: record.id };
  //     //   setRecordList((user) => {
  //     //     if (!user.some((item) => item.id === list.id)) {
  //     //       return [...user, list];
  //     //     }
  //     //     return user;
  //     //   });
  //     //   // setRecordList(list);
  //     // }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [patientDid, web5]);
  // useEffect(() => {
  //   getRecord();
  // }, [getRecord]);
  // useEffect(() => {
  //   if (recordList) {
  //     console.log(recordList);
  //     setRecord(recordList[1]?.record);
  //   }
  // }, [recordList]);
  // console.log(sharedHealthRecord[recordIdNumber]);
  const [formData, setFormData] = useState({
    name: "",
    severity: "",
    reaction: "",
    treatment: "",
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
      formData.name === "" ||
      formData.reaction === "" ||
      formData.severity === "" ||
      formData.treatment === ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleUpdateRecord = async (e) => {
    e.preventDefault();
    // console.log(formData);

    try {
      // console.log("updating data");
      // Get the existing record
      const existingRecord = sharedHealthRecord[recordIdNumber];
      // Create a new version of the healthRecord array
      const updatedHealthRecord = [...existingRecord.healthRecord];
      updatedHealthRecord[0] = {
        name: formData.name,
        severity: formData.severity,
        reaction: formData.reaction,
        treatment: formData.treatment,
      };
      // Create a new record with the updated data
      const updatedRecord = {
        ...existingRecord,
        data: {
          ...existingRecord.data,
          healthRecord: updatedHealthRecord,
        },
      };
      const updateResponse = await sharedHealthRecord[
        recordIdNumber
      ].record.update({
        data: updatedRecord,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-[25rem] rounded-small p-5">
      <h3 className="text-center font-semibold">Add New Medical Record</h3>
      <form className="text-sm mt-[1rem]" onSubmit={handleUpdateRecord}>
        <p className="text-[#F20D0D] font-semibold  mb-[0.5rem]">
          Allergy Record:
        </p>
        <div className="flex flex-col">
          <label htmlFor="name" className="py-1">
            Name of allergy
          </label>
          <input
            type="text"
            placeholder="Bee sting"
            id="name"
            className="outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1"
            value={formData.name}
            name="name"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="severity">Severity</label>
          <input
            type="text"
            placeholder="Severe"
            className="outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1"
            value={formData.severity}
            id="severity"
            name="severity"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="reaction">Reactions</label>
          <input
            type="text"
            placeholder="Swollen skin, painful skin"
            className="outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1"
            id="reaction"
            name="reaction"
            value={formData.reaction}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="treatment">Treatment</label>
          <input
            type="text"
            placeholder="use of balm"
            className="outline-none border-[1px] mb-3 rounded-sm border-gray-200 p-1"
            id="treatment"
            name="treatment"
            value={formData.treatment}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center justify-center py-2">
          <button
            type="submit"
            className="w-[10.125rem] py-[0.5rem] px-4 rounded-[0.25rem] bg-primaryBlue text-white flex justify-center items-center font-[500] leading-6 tracking-[0.02rem disabled:bg-[#DCE6FB]"
            disabled={validate()}
          >
            Add Record
          </button>
        </div>
      </form>
    </div>
  );
};

export default AllergyRecord;
