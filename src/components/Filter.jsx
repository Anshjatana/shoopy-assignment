import React, { useState } from 'react';

const Filter = ({ setSelectedPaymentMode, setSelectedStatus }) => {
  const [typeButtonActive, setTypeButtonActive] = useState(false);
  const [statusButtonActive, setStatusButtonActive] = useState(false);

  const handleTypeButtonClick = () => {
    setTypeButtonActive(!typeButtonActive);
    setSelectedPaymentMode(typeButtonActive ? '' : 'Automatic');
  };

  const handleStatusButtonClick = () => {
    setStatusButtonActive(!statusButtonActive);
    setSelectedStatus(statusButtonActive ? '' : 'Completed');
  };
  

  return (
    <div id="filter-section">
      <h6>Filter by</h6>
      <div>
        <button id="date-btn">
          Date: last 90 days
        </button>
        <button
          id="type-btn"
          onClick={handleTypeButtonClick}
          
        >
          Type
        </button>
        <button id="status-btn" onClick={handleStatusButtonClick} >
          Status
        </button>
      </div>
      <p>This week</p>
    </div>
  );
};

export default Filter;

