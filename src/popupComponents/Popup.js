import React, { useEffect, useRef } from "react";
import Form from "./Form";
import { formData } from "../formData";
import "./Popup.css";
const Popup = (props) => {
  const node = useRef();

  const filterNumberData = (number) => {
    props.filterNumberData(number);
  };

  function handleClickOutside(event) {
    if (node.current.contains(event.target)) {
      return;
    } else {
      props.handleClose();
    }
  }

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div className="popup-box">
      <div ref={node} className="box">
        <Form formData={formData} filterNumberData={filterNumberData} />
      </div>
    </div>
  );
};

export default Popup;
