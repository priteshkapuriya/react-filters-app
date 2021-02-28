import React from "react";
import "./Select.css";

const Select = ({ field, fieldChanged, value }) => {
  let optionTemplate = field.options.map((option) => (
    <option value={option.value}>{option.name}</option>
  ));
  return (
    <div key={field._uid} className="selectContainer">
      <label htmlFor={field._uid}>
        {field.label}
        <select
          name={field._uid}
          id={field._uid}
          value={value}
          onChange={(e) => {
            // Notify the main state list of the new value
            fieldChanged(field._uid, e.target.value);
          }}
        >
          {optionTemplate}
        </select>
      </label>
    </div>
  );
};

export default Select;
