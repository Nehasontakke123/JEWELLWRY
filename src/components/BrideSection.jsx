import React from "react";
import { useNavigate } from "react-router-dom";  
import banner from "../assets/images/anushka-sharma.jpg";
import img1 from "../assets/images/ritesh_wedding.jpg";
import img2 from "../assets/images/south1.jpg";
import img3 from "../assets/images/Kiara-Advani-Pink.jpg";
import img4 from "../assets/images/PareenitiWedding.jpg";
import img5 from "../assets/images/Dipu.jpg";
import img6 from '../assets/images/Anushka.jpg'
import "../assets/css/BridesSection.css";

const brides = [
  { id: 1,  image: img1 },
  { id: 2,  image: img2 },
  { id: 3,  image: img3 },
  { id: 4,  image: img4 },
  { id: 5,  image: img5 },
  { id: 6,  image: img6 },
];

const BridesSection = () => {
  const navigate = useNavigate();  
  
  const handleBannerClick = () => {
    navigate("/brides-of-india");  
  };

  return (
    <div className="brides-section">
      {/* Heading and Subtitle */}
      <div className="brides-heading">
        <h1>Brides Of India</h1>
        <p>Leading the journey of a new life in their own unique way</p>
      </div>

      {/* Banner Section */}
      <div className="banner" onClick={handleBannerClick} style={{ cursor: "pointer" }}>
        <img src={banner} alt="Brides of India" className="banner-img" />
        <div className="overlay-text">
          {/* <h2>#ShowTheWay</h2> */}
          {/* <img src="path_to_logo/brides-logo.png" alt="Brides of India" className="brides-logo" /> */}
        </div>
      </div>

      {/* Brides Categories */}
      <div className="brides-list">
        {brides.map((bride) => (
          <div key={bride.id} className="bride-card">
            <img src={bride.image} alt={bride.title} className="bride-img" />
            <p className="bride-name">{}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default BridesSection;
