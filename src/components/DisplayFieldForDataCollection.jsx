import React, { useState } from "react";

const DisplayFieldForDataCollection = ({ data }) => {
  const [date, setDate] = useState(null);
  const [select, setSelecet] = useState("");
  const [number, setNumber] = useState("");

  return (
    <div>
      <form action="">
        {data.map((item) => (
          <div>
            <label htmlFor="dropdown">{item.fieldDisplay}</label>
            {item.fieldType === "dropdown" ? (
              <select
                name=""
                id="dropdown"
                value={select}
                onChange={(e) => e.target.value}
              >
                {item.fieldData.split(" ").map((i) => (
                  <option value={i}>{i}</option>
                ))}
              </select>
            ) : item.fieldType === "date-picker" ? (
              <input
                type="date"
                value={data}
                onChange={(e) =>
                  e.target.value < item.validation[1] &&
                  e.target.value > item.validation[0]
                    ? setDate(e.target.value)
                    : console.log("not in range")
                }
              />
            ) : item.fieldType === "text-box" ? (
              <input
                type={item.dataType}
                value={number}
                onChange={(e) => {
                  e.target.value <= item.validation
                    ? setNumber(e.target.value)
                    : console.log("out of range");
                }}
              />
            ) : null}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DisplayFieldForDataCollection;
