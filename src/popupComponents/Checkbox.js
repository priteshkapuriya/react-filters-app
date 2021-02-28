import React, { Fragment } from "react";
import "./Checkbox.css";

const Checkbox = ({ field, fieldChanged, values }) => {
  return (
    <div className="checkbox-container">
      {field.options.map((option) => {
        return (
          <Fragment key={option._uid}>
            <label htmlFor={option.value} className="checkboxLabel">
              <input
                type="checkbox"
                id={option.value}
                name={option.value}
                value={option.value}
                checked={values[option._uid] === option.value}
                onChange={(e) => {
                  if (e.target.checked) {
                    fieldChanged(option._uid, e.target.value);
                  } else {
                    fieldChanged(option._uid, "");
                  }
                }}
              />
              {option.label}
            </label>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Checkbox;
