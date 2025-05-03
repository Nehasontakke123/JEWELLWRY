import React from 'react';
import '../assets/css/Spinner.css'; // Import the styles separately

const Spinner = () => {
  return (
    <div className="lds-spinner">
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index}></div>
      ))}
    </div>
  );
};

export default Spinner;
