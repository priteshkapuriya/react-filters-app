import React from "react";
import "./Textarea.css";

const Textarea = ({ field, fieldChanged, value }) => {
  return (
    <div key={field._uid} className="textareaContainer">
      <label htmlFor={field._uid}>{field.label}</label>
      <textarea
        id={field._uid}
        name={field._uid}
        value={value}
        onChange={(e) => {
          // Notify the main state list of the new value
          fieldChanged(field._uid, e.target.value);
        }}
      />
    </div>
  );
};

export default Textarea;
