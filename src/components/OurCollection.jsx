import React from "react";
import "../assets/css/OurCollection.css"; // Custom CSS Import
import mainimg1 from '../assets/images/BANNERDRIDAL.jpg'
import mainimg2 from '../assets/images/Dipu.jpg'
import mainimg3 from '../assets/images/WEDDINGBANNER.jpg'
import mainimg4 from '../assets/images/South.jpg'
import mainimg5 from '../assets/images/Bengali.jpg'

const OurCollection = () => {
  const images = [
    mainimg1,
    mainimg2,
    mainimg3,
    mainimg4,
    mainimg5
  ];

  return (
    <div className="collection-section">
      {/* Heading */}
      <h2 className="collection-heading">Bridle Collection</h2>

      {/* Image Collection */}
      <div className="collection-container">
        {images.map((img, index) => (
          <div key={index} className="collection-item">
            <img src={img} alt={`Collection ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCollection;
