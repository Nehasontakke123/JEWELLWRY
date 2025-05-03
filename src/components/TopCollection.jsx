import React, { useEffect, useState } from "react";
import "../assets/css/TopCollection.css";

import img1 from '../assets/images/Baby Jewelry.jpg';     // Baby
import img2 from '../assets/images/TopDaily.jpg';         // Daily
import img3 from '../assets/images/Top1.jpg'; // Gold
import img4 from '../assets/images/Top2.jpg';            // Bridal
import img5 from '../assets/images/TopDaimond.jpg';   // Diamond
import img6 from '../assets/images/TopBridle.jpg';    // Gold
import img7 from '../assets/images/TopDiamond2.jpg';     // Diamond

const allImages = [
  { src: img1, category: "Baby" },
  { src: img2, category: "Daily" },
  { src: img3, category: "Gold" },
  { src: img4, category: "Bridal" },
  { src: img5, category: "Diamond" },
  { src: img6, category: "Gold" },
  { src: img7, category: "Diamond" },
];

const TopCollection = () => {
  const [images, setImages] = useState(allImages);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const interval = setInterval(() => {
      setImages((prevImages) => {
        const last = prevImages[prevImages.length - 1];
        const rest = prevImages.slice(0, -1);
        return [last, ...rest];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  const filteredImages = selectedCategory === "All"
    ? images
    : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="top-collection-section">
      <h2 className="top-collection-heading">Top Collection</h2>

      <div className="filter-buttons">
        {["All", "Gold", "Diamond", "Bridal", "Daily", "Baby"].map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="top-collection-container">
        {filteredImages.map((img, index) => (
          <div
            key={index}
            className="top-collection-item"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img src={img.src} alt={`Top Collection ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCollection;
