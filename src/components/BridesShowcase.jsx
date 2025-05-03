import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/BridesShowcase.css";

import MainImg1 from "../assets/images/ReteshWedding.jpg";
import MainImg2 from "../assets/images/NewImg4.jpg";
import MainImg3 from "../assets/images/Preeneti.jpg";
import MainImg4 from "../assets/images/NewImg2.jpg";
import MainImg5 from "../assets/images/NewImg3.jpg";
import MainImg6 from "../assets/images/SidKiara.jpg";
import MainImg7 from "../assets/images/AliaRanbirMarriage.jpg";
import MainImg8 from '../assets/images/Katrina Kaif Vicky Kaushal.jpg'
import { CloudSnow } from "lucide-react";

const brides = [
  { id: 1, image: MainImg1 },
  { id: 2, image: MainImg2 },
  { id: 3, image: MainImg5 },
  { id: 4, image: MainImg8 },
  { id: 5, image: MainImg7 },
  { id: 6, image: MainImg6 },
  { id: 7, image: MainImg3 },
  { id: 8, image: MainImg4 },
 
];

const BridesShowcase = () => {
  const navigate = useNavigate();

  const handleBrideClick = (id) => {
    navigate(`/bride/${id}`);
  };

  useEffect(() => {
    const createFlower = () => {
      const flower = document.createElement("div");
      flower.classList.add("flower");

      const randomLeft = Math.random() * window.innerWidth;
      const randomDuration = Math.random() * 3 + 2;

      flower.style.left = `${randomLeft}px`;
      flower.style.animationDuration = `${randomDuration}s`;

      const container = document.querySelector(".brides-showcase-container");
      if (container) {
        container.appendChild(flower);
      }

      setTimeout(() => {
        flower.remove();
      }, randomDuration * 1000);
    };

    const interval = setInterval(createFlower, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="brides-showcase-container">
      <h1 className="brides-showcase-title">Brides of India</h1>
      <p className="brides-showcase-description">
        They hold traditions close to their heart but express themselves in their unique vibrant styles.
      </p>
      <p className="brides-showcase-full-description">
        Each bride featured in the Malabar Brides of India edition is more than just a vision of elegance —
        she’s a symbol of strength, grace, and individuality. She carries her roots with pride while embracing
        her dreams with fierce determination. This is not just her wedding day — it’s her triumph, her celebration,
        her story. Fearless, radiant, and unapologetically herself, she doesn’t just walk the path —
        <strong> she creates it</strong>. And in doing so, she truly <strong>#ShowsTheWay</strong>.
      </p>

      <div className="brides-showcase-list">
        {brides.map((bride) => (
          
          <div
            key={bride.id}
            className="brides-showcase-card"
            onClick={() => handleBrideClick(bride.id)}
            style={{ cursor: "pointer" }}
          >
            <div className="brides-showcase-img-container">
              <img src={bride.image} alt="" className="brides-showcase-img" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BridesShowcase;
