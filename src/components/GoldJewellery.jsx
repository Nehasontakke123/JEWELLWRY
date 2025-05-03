import React, { useState, useEffect } from "react";
import "../assets/css/DiamondJewellery.css"; // ✅ Same CSS
import { useNavigate, useParams } from "react-router-dom";
import img1 from "../assets/images/1RingGold.jpg";
import img2 from "../assets/images/2RingGod.jpg";
import img3 from "../assets/images/1BrasletGold.jpg";
import img4 from "../assets/images/2BrasletGold.jpg";
import img5 from "../assets/images/GOLDMANGALSUTRA.jpg";
import img6 from "../assets/images/MangalasutraGold.jpg";
import img7 from "../assets/images/1PendantGold.jpg";
import img8 from "../assets/images/2PendantGold.jpg";
import img9 from "../assets/images/1EarringGold.jpg";
import img10 from "../assets/images/2EarringGold.jpg";

const jewelleryData = [
  { id: 1, label: "Gold Rings", images: [img1, img2] },
  { id: 2, label: "Gold Bracelets", images: [img3, img4] },
  { id: 3, label: "Gold Mangalsutra", images: [img5, img6] },
  { id: 4, label: "Gold Pendants", images: [img7, img8] },
  { id: 5, label: "Gold Earrings", images: [img9, img10] },
];

const JewelleryCard = ({ label, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Auto-change every 1 second

    return () => clearInterval(interval);
  }, [images.length]);

  // Handle category click to navigate
  const handleClick = (categoryName) => {
    navigate(`/category/${encodeURIComponent(categoryName)}`);
  };

  return (
    <div className="jewellery-card" onClick={() => handleClick(label)}>
      <div className="circle-image-wrapper">
        <img src={images[currentIndex]} alt={label} className="jewellery-image" />
      </div>
      <span className="label">{label}</span>
    </div>
  );
};

const GoldJewellery = () => {
  const { category } = useParams(); // Get the category from the URL
  const filteredData = jewelleryData.filter((item) =>
    category ? item.label.toLowerCase() === category.toLowerCase() : true
  );

  return (
    <div className="diamond-jewellery-container">
      <h1 className="heading">Gold Jewellery</h1>
      <p className="description">
        Gold is one of the most cherished and timeless metals, treasured for its elegance and value. Our collection showcases stunning gold pieces perfect for any occasion.
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

export default GoldJewellery;
