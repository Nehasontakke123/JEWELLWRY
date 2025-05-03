import React, { useState } from "react";
import "../assets/css/ShopByGender.css"; // CSS File

// Import Images
import goldRing from "../assets/images/Gold-Ring.jpg";
import goldEarring from "../assets/images/Gold-Earring.jpg";
import goldPendant from "../assets/images/Gold-Pendant (3).jpg";
import goldChain from "../assets/images/Gold-Chain.jpg";

import menBracelet from "../assets/images/Gold--kada.jpg";
import menRing from "../assets/images/Gold-Ring (1).jpg";
import menPendant from "../assets/images/Gold-Pendant (1).jpg";
import menChain from "../assets/images/Gold-Chain_1.jpg";

import kidsBangle from "../assets/images/Gold-Bracelet.jpg";
import kidsPendant from "../assets/images/Gold-Pendant (2).jpg";
import kidsEarring from "../assets/images/Gold-Earring (1).jpg";
import kidsRing from "../assets/images/Gold-ring (2).jpg";

// Category Data
const categories = {
  women: [
    { id: 1, title: "", image: goldRing },
    { id: 2, title: "", image: goldEarring },
    { id: 3, title: "", image: goldPendant },
    { id: 4, title: "", image: goldChain },
  ],
  men: [
    { id: 5, title: "", image: menBracelet },
    { id: 6, title: "", image: menRing },
    { id: 7, title: "", image: menPendant },
    { id: 8, title: "", image: menChain },
  ],
  kids: [
    { id: 9, title: "", image: kidsBangle },
    { id: 10, title: "", image: kidsPendant },
    { id: 11, title: "", image: kidsEarring },
    { id: 12, title: "", image: kidsRing },
  ],
};

const ShopByGender = () => {
  const [activeTab, setActiveTab] = useState("women");

  return (
    <div className="shop-gender-section">
      <h1 className="section-title">Shop By Gender</h1>

      {/* Tabs */}
      <div className="tabs">
        <span
          className={activeTab === "women" ? "tab active" : "tab"}
          onClick={() => setActiveTab("women")}
        >
          Women's Jewellery
        </span>
        <span
          className={activeTab === "men" ? "tab active" : "tab"}
          onClick={() => setActiveTab("men")}
        >
          Men's Jewellery
        </span>
        <span
          className={activeTab === "kids" ? "tab active" : "tab"}
          onClick={() => setActiveTab("kids")}
        >
          Kids' Jewellery
        </span>
      </div>

      {/* Jewellery Grid */}
      <div className="jewellery-grid">
        {categories[activeTab].map((item) => (
          <div className="jewellery-item" key={item.id}>
            <img src={item.image} alt={item.title} className="jewellery-img" />
            <p className="jewellery-text">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByGender;






