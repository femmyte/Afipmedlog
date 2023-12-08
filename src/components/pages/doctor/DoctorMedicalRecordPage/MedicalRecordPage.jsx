import React from 'react'

const MedicalRecordPage = () => {
  return (
    <div className='flex'>
        <div>
            <h3>Medical Records</h3>
            <p>Patient confidentiality is our priority.</p>
        </div>
        <div>
            <button>
                Edit Record
            </button>
            <button>
                Add New Record
            </button>
        </div>
    </div>
  )
}

export default MedicalRecordPage