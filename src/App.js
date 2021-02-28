import "./App.css";
import Popup from "./popupComponents/Popup";
import React, { useState } from "react";

function App() {
  const [filterNumber, setFilterNumber] = React.useState(0); // the lifted state
  const [isOpen, setIsOpen] = useState(false);

  const filterNumberData = (number) => {
    setFilterNumber(number);
    togglePopup();
  };

  const someFunc = () => {
    if (filterNumber > 0) {
      setFilterNumber(0);
    }
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <div className="triggerBtn">
        <div className="triggerLabel">Click Below Button To Apply Filters</div>
        <button
          onClick={() => {
            someFunc();
            togglePopup();
          }}
        >
          {" "}
          {"Filters (" + filterNumber + ")"}{" "}
        </button>
      </div>
      {isOpen && (
        <Popup
          isOpen={isOpen}
          handleClose={togglePopup}
          filterNumberData={filterNumberData}
        />
      )}
    </div>
  );
}

export default App;
