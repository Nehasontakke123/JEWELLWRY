import React from "react";
import "../assets/css/BridesOfIndia.css";
import newBrideImg from '../assets/images/ranveer-deepika.jpg';
import BridesShowcase from "./BridesShowcase";

const brides = [
  { id: 1,  image: newBrideImg },
  // Add more bride objects as needed
];

const BridesOfIndia = () => {
  return (
    <div className="brides-india-container">
      <div className="brides-india-banner">
        {/* Optional: Add a banner image or heading here */}
      </div>

      <div className="brides-india-list">
        {brides.map((bride) => (
          <div key={bride.id} className="brides-india-card">
            <img src={bride.image} alt={bride.name} className="brides-india-img" />
            <p className="brides-india-name">{bride.name}</p>
          </div>
        ))}
      </div>
       <BridesShowcase/>
    </div>
  );
};

export default BridesOfIndia;
