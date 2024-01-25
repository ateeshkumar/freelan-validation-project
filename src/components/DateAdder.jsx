import React, { useState } from "react";

const DateAdder = () => {
  const [dataType, setDataType] = useState("");
  const [mendatory, setMendatory] = useState("");
  console.log("date picker");
  console.log(dataType);
  return (
    <div>
      <div className="text-box-container">
        <div>
          <label htmlFor="text">Field Display Name</label>
          <input type="text" placeholder="Filed display name" />
        </div>
        <div>
          <label htmlFor="text">Field Data Type</label>
          <select
            name=""
            id="dropdown"
            value={dataType}
            onChange={(e) => {
              setDataType(e.target.value);
            }}
          >
            <option defaultValue="date">Date</option>
            <option value="string">String</option>

            <option value="number">Number</option>
          </select>
        </div>
        {/* Range  validation */}
        {dataType === "string" ? (
          <div>
            <label htmlFor="text">String Validation</label>
            <input type="text" placeholder="Filed display name" />
          </div>
        ) : dataType === "number" ? (
          <div>
            <label htmlFor="text">Field max length Allowed</label>
            <input type="number" placeholder="Enter Number" />
          </div>
        ) : (
          <div>
            <label htmlFor="date">Date Range Validation</label>
            <input type="Date" />
          </div>
        )}
        <div>
          <label htmlFor={dataType}>String Validation</label>
          <input type={dataType} placeholder="Filed display name" />
        </div>
        <div>
          <label htmlFor="string">Mandatory</label>
          <select
            name=""
            id="dropdown"
            value={mendatory}
            onChange={(e) => {
              setMendatory(e.target.value);
            }}
          >
            <option defaultValue="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        <div>
          <label htmlFor="text">Field Data</label>
          <input type="text" placeholder="Filed Data" />
        </div>
        <button>Confirm</button>
      </div>
    </div>
  );
};

export default DateAdder;
