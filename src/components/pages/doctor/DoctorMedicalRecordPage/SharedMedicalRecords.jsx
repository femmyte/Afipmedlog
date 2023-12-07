import React from 'react';
import sharedMedicalRecords from '@/utils/sharedMedicalRecords';
import { GoChevronRight } from "react-icons/go";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

const SharedMedicalRecords = () => {
  return (
    <div>
        <div>
            <h3>Shared Patients’ Medical Records</h3>
            <div>
               <button>See all</button>
               <GoChevronRight />
            </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Patients</th>
                    <th>Record</th>
                    <th>Date Shared</th>
                    <th>Time shared</th>
                </tr>
            </thead>
            {sharedMedicalRecords.map((item) =>(
                <tbody>
                    <tr key={item.id}>
                        <th>{item.Patients}</th>
                        <th>{item.Record}</th>
                        <th>{item.DateShared}</th>
                        <th>{item.TimeShared}</th>
                        <th> <HiOutlineDocumentArrowDown /></th>
                        <th>...</th>
                    </tr>
                </tbody>
            ))}
        </table>
    </div>
  )
}

export default SharedMedicalRecords