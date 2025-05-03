import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Import useParams to get category info
import "../assets/css/DiamondJewellery.css";
import img1 from "../assets/images/IMGRing1.jpg";
import img2 from "../assets/images/IMGRing2.jpg";
import img3 from "../assets/images/Braslet1.jpg";
import img4 from "../assets/images/Braslet2.jpg";
import img5 from "../assets/images/DiamondMangalsutra1.jpg";
import img6 from "../assets/images/DiamondMangalsutra2.jpg";
import img7 from "../assets/images/d1.jpg";
import img8 from "../assets/images/d2.jpg";
import img9 from "../assets/images/EarringImg1.jpg";
import img10 from "../assets/images/Earrings2.jpg";

const jewelleryData = [
  { id: 1, label: "Diamond Rings", images: [img1, img2] },
  { id: 2, label: "Diamond Bracelets", images: [img3, img4] },
  { id: 3, label: "Diamond Mangalsutra", images: [img5, img6] },
  { id: 4, label: "Diamond Pendants", images: [img7, img8] },
  { id: 5, label: "Diamond Earrings", images: [img9, img10] },
];

const JewelleryCard = ({ label, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Auto-change image every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Handle category click to navigate
  const handleClick = (categoryName) => {
    navigate(`/category/${encodeURIComponent(categoryName)}`);
  };

  return (
    <div className="jewellery-card" onClick={() => handleClick(label)}>
      <div className="circle-image-wrapper">
        <img
          src={images[currentIndex]}
          alt={label}
          className="jewellery-image"
        />
      </div>
      <span className="label">{label}</span>
    </div>
  );
};

const DiamondJewellery = () => {
  const { category } = useParams(); // Get the category from the URL
  const filteredData = jewelleryData.filter((item) =>
    category ? item.label.toLowerCase() === category.toLowerCase() : true
  );

  return (
    <div className="diamond-jewellery-container">
      <h1 className="heading">Diamond Jewellery</h1>
      <p className="description">
        Diamonds are one of the most precious and stunning gemstones, known for
        their brilliance and durability. They are often used in jewellery to
        symbolize love and commitment.
      </p>
      <div className="jewellery-grid">
        {filteredData.length === 0 ? (
          <p>No products found in this category.</p> // Display message if no products are found
        ) : (
          filteredData.map((item) => (
            <JewelleryCard key={item.id} label={item.label} images={item.images} />
          ))
        )}
      </div>
    </div>
  );
};

export default DiamondJewellery;
