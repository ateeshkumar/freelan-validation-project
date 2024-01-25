import React, { useState } from "react";

const TextBoxAdder = () => {
  const [dataType, setDataType] = useState("");
  const [mendatory, setMendatory] = useState("");
  console.log("Text Box");
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
            <option defaultValue="number">Number</option>
            <option value="string">String</option>
            <option value="date">Date</option>
          </select>
        </div>
        {/* Range  validation */}
        {dataType === "string" ? (
          <div>
            <label htmlFor="text">String Validation</label>
            <input type="text" placeholder="Filed display name" />
          </div>
        ) : dataType === "date" ? (
          <div>
            <label htmlFor="date">Date Range Validation</label>
            <input type="date" placeholder="Filed display name" />
          </div>
        ) : (
          <div>
            <label htmlFor="date">Field Max Length Allowed</label>
            <input type="number" placeholder="Filed display name" />
          </div>
        )}
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

export default TextBoxAdder;
