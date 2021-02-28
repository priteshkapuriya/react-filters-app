import React, { useState, useEffect } from "react";
import Radio from "./Radio";
import Input from "./Input";
import Textarea from "./Textarea";
import Checkbox from "./Checkbox";
import Select from "./Select";
import "./From.css";

const Form = ({ formData, filterNumberData }) => {
  // state to track the current form data that will be displayed
  // eslint-disable-next-line
  const [currentPageData, setCurrentPageData] = useState(formData);

  // track the values of the form fields
  const [values, setValues] = useState({});

  const clearData = () => {
    setValues(() => {
      const newValues = formData.fields.reduce((obj, field) => {
        if (field.component === "checkbox") {
          field.options.forEach((option) => {
            obj[option._uid] = "";
          });
        } else {
          obj[field._uid] = "";
        }
        // }

        return obj;
      }, {});
      return Object.assign({}, newValues, {});
    });

    setCurrentPageData((currentPageData) => {
      return Object.assign({}, currentPageData);
    });
  };

  const checkAppliedFilters = () => {
    let totalCount = 0;
    Object.values(values).forEach((item) => {
      if (item !== "") {
        totalCount++;
      }
    });
    filterNumberData(totalCount);
  };

  // this effect will run when the `page` loads
  useEffect(() => {
    setCurrentPageData(formData);
    setValues((currentValues) => {
      const newValues = formData.fields.reduce((obj, field) => {
        if (field.component === "checkbox") {
          field.options.forEach((option) => {
            obj[option._uid] = "";
          });
        } else {
          obj[field._uid] = "";
        }
        // }

        return obj;
      }, {});

      return Object.assign({}, newValues, currentValues);
    });
  }, [formData]);

  // callback provided to components to update the main list of form values
  const fieldChanged = (fieldId, value) => {
    // use a callback to find the field in the value list and update it
    setValues((currentValues) => {
      currentValues[fieldId] = value;
      return currentValues;
    });

    // this just fakes that we've updated the `currentPageData` to force a re-render in React
    setCurrentPageData((currentPageData) => {
      return Object.assign({}, currentPageData);
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // todo - send data somewhere
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>{formData.label}</h2>
      {formData.fields.map((field) => {
        switch (field.component) {
          case "text":
            return (
              <Input
                key={field._uid}
                field={field}
                fieldChanged={fieldChanged}
                value={values[field._uid]}
              />
            );
          case "textarea":
            return (
              <Textarea
                key={field._uid}
                field={field}
                fieldChanged={fieldChanged}
                value={values[field._uid]}
              />
            );
          case "radio":
            return (
              <Radio
                key={field._uid}
                field={field}
                fieldChanged={fieldChanged}
                value={values[field._uid]}
              />
            );
          case "checkbox":
            return (
              <Checkbox
                key={field._uid}
                field={field}
                fieldChanged={fieldChanged}
                values={values}
              />
            );
          case "select":
            return (
              <Select
                key={field._uid}
                field={field}
                fieldChanged={fieldChanged}
                value={values[field._uid]}
              />
            );
          default:
            return <div>Invalid Component....</div>;
        }
      })}
      <hr />
      <div className="filterButtons">
        <span>
          <button onClick={() => checkAppliedFilters()}>Apply Filters</button>{" "}
        </span>
        <span>
          <button onClick={() => clearData()}>Clear All</button>{" "}
        </span>
      </div>
    </form>
  );
};

export default Form;
