import { useState } from "react";
import "./App.css";
import DateAdder from "./components/DateAdder";
import DropDownAdder from "./components/DropDownAdder";
import TextBoxAdder from "./components/TextBoxAdder";
import { connect } from "react-redux";
import { addObject } from "./redux/action";
import DisplayFieldForDataCollection from "./components/DisplayFieldForDataCollection";
function App({ arrayOfObjects, addObject }) {
  const [field, setField] = useState(false);
  const [confirmData, setConfirmData] = useState(false);
  const [select, setSelecet] = useState("");

  const [fieldType, setFieldType] = useState("");
  const [dataType, setDataType] = useState("");
  const [mendatory, setMendatory] = useState("");
  const [fieldDisplay, setFieldDisplay] = useState("");
  const [fieldData, setFieldData] = useState("");
  const [minDate, setMinDate] = useState(null);
  const [maxDate, setMaxDate] = useState(null);
  const [validation, setValidation] = useState("");

  const funValidation = () => {
    if (dataType === "date") {
      const member = [minDate, maxDate];
      return member;
    } else {
      return validation;
    }
  };
  console.log(validation);
  const maxDateFun = (e) => {
    if (e.target.value > minDate) {
      setMaxDate(e.target.value);
    } else {
      console.log("Date Less then minDate");
    }
  };
  const handleAddObject = () => {
    if (select.trim() !== "") {
      addObject({
        select: select,
        fieldType: fieldType,
        dataType: dataType,
        validation: funValidation(),
        mendatory: mendatory,
        fieldDisplay: fieldDisplay,
        fieldData: fieldData,
      });
      setField(false);
    }
  };
  const handleresetPersistData = () => {
    localStorage.clear();
    window.location.reload();
  };
  const handleConfirmData = () => {};
  return (
    <>
      <div className="upper-container">
        <label htmlFor="data">Dynamic Data Collection</label>
        <select
          name=""
          id="dropdown"
          value={select}
          onChange={(e) => setSelecet(e.target.value)}
          required
        >
          <option defaultValue="Select">Select..</option>
          <option value="student">Student</option>
          <option value="salaried">Salaried</option>
          <option value="business">Bussiness</option>
        </select>
      </div>
      <div className="field-button">
        {arrayOfObjects.length >= 4 ? (
          "We can add max of 4 fields as men-oned "
        ) : (
          <div>
            <p>On Click of this button</p>
            <button onClick={() => setField(!field)} style={{ margin: "10px" }}>
              Add field
            </button>
          </div>
        )}

        {/* field name */}
        {field ? (
          <div className="field-data-container">
            <select
              name=""
              id="dropdown"
              value={fieldType}
              onChange={(e) => setFieldType(e.target.value)}
              required
            >
              <option defaultValue="Select">Select Field Type</option>
              <option value="text-box">Text Box</option>
              <option value="dropdown">Dropdown</option>
              <option value="date-picker">Date Picker</option>
            </select>
            {/* {fieldType === "date-picker" ? (
                <DateAdder />
              ) : fieldType === "dropdown" ? (
                <DropDownAdder />
              ) : fieldType === "text-box" ? (
                <TextBoxAdder />
              ) : null} */}

            {/* field Type */}

            {fieldType ? (
              <div className="text-box-container">
                <div>
                  <label htmlFor="text">Field Display Name</label>
                  <input
                    type="text"
                    value={fieldDisplay}
                    onChange={(e) => setFieldDisplay(e.target.value)}
                    placeholder="Filed display name"
                    required
                  />
                </div>
                {/* field data type */}
                <div>
                  <label htmlFor="text">Field Data Type</label>
                  <select
                    name=""
                    id="dropdown"
                    value={dataType}
                    onChange={(e) => {
                      setDataType(e.target.value);
                    }}
                    required
                  >
                    <option defaultValue="select">select..</option>
                    <option value="date">Date</option>
                    <option value="string">String</option>

                    <option value="number">Number</option>
                  </select>
                </div>
                {/* Range  validation */}
                <div>
                  <label htmlFor={dataType}>
                    {dataType === "string"
                      ? "String Validation"
                      : dataType === "number"
                      ? "Field max length Allowed"
                      : dataType === "date"
                      ? "Date Range Validation"
                      : "Plese Select Data type"}
                  </label>
                  {dataType === "date" ? (
                    <div className="date-picker">
                      <div>
                        <label htmlFor="date">min Date</label>
                        <input
                          type="date"
                          value={minDate}
                          onChange={(e) => setMinDate(e.target.value)}
                        />
                      </div>
                      <div>
                        <label htmlFor="date">max Date</label>
                        <input
                          type="date"
                          value={maxDate}
                          onChange={maxDateFun}
                        />
                      </div>
                    </div>
                  ) : (
                    <input
                      type={dataType}
                      value={validation}
                      onChange={(e) => setValidation(e.target.value)}
                      placeholder={
                        dataType === "string"
                          ? "String Validation"
                          : dataType === "number"
                          ? "Enter Number"
                          : "Plese Select Data type"
                      }
                    />
                  )}
                </div>
                {/* mandatory section */}
                <div>
                  <label htmlFor="string">Mandatory</label>
                  <select
                    id="dropdown"
                    value={mendatory}
                    onChange={(e) => {
                      setMendatory(e.target.value);
                    }}
                  >
                    <option defaultValue="">Select...</option>
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>
                {/* field data */}
                <div>
                  <label htmlFor="text">Field Data</label>
                  <input
                    type="text"
                    value={fieldData}
                    onChange={(e) => setFieldData(e.target.value)}
                    placeholder="Filed Data"
                  />
                </div>
                {/* confirm button */}
                <button onClick={handleAddObject}>Confirm</button>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
      <div className="listiem-container">
        {arrayOfObjects.length > 0 ? (
          <div className="table-container">
            <table>
              <tr>
                <th>No</th>
                <th>Field Name</th>
                <th>Field Type</th>
                <th>Field Data Type</th>
                <th>Field Validation</th>
                <th>Field Data</th>
                <th>Is Madatory</th>
              </tr>

              {arrayOfObjects.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.fieldDisplay}</td>
                  <td>{item.fieldType}</td>
                  <td>{item.dataType}</td>
                  <td>
                    {Array.isArray(item.validation)
                      ? `${item.validation[0]}-${item.validation[1]}`
                      : item.validation}
                  </td>
                  <td>{item.fieldData}</td>
                  <td>{item.mendatory}</td>
                </tr>
              ))}
            </table>
            {arrayOfObjects.length >= 4 ? (
              <div>
                <button onClick={() => setConfirmData(true)}>Confirm</button>
                <button onClick={handleresetPersistData}>Reset</button>
              </div>
            ) : null}
          </div>
        ) : (
          "None"
        )}
        {confirmData ? (
          <DisplayFieldForDataCollection data={arrayOfObjects} />
        ) : null}
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  arrayOfObjects: state.objects.arrayOfObjects,
});

const mapDispatchToProps = {
  addObject,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
