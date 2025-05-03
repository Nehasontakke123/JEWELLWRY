// import React from "react";
// import { useNavigate } from "react-router-dom";
// import image1 from '../assets/images/DimondRing.jpg';
// import image2 from '../assets/images/GoldRing.jpg';
// import image3 from '../assets/images/EarringDymond.jpg';
// import image4 from '../assets/images/EarringsGold.jpg';
// import image5 from '../assets/images/DiamondNecklace.jpg';
// import image6 from '../assets/images/GoldNeclace.jpg';
// import image7 from '../assets/images/MangalsutraDiamond.jpg';
// import image8 from '../assets/images/MangalasutraGold.jpg';
// import "../assets/css/JewelleryCategory.css"; 

// const categories = [
//   { id: 1, image: image1, name: "Diamond Rings" },
//   { id: 2, image: image2, name: "Gold Rings" },
//   { id: 3, image: image3, name: "Diamond Earrings" },
//   { id: 4, image: image4, name: "Gold Earrings" },
//   { id: 5, image: image5, name: "Diamond Necklace" },
//   { id: 6, image: image6, name: "Gold Necklace" },
//   { id: 7, image: image7, name: "Diamond Mangalsutra" },
//   { id: 8, image: image8, name: "Gold Mangalsutra" },
// ];

// const JewelleryCategory = () => {
//   const navigate = useNavigate();

//   const handleClick = (categoryName) => {
//     navigate(`/category/${encodeURIComponent(categoryName)}`);
//   };

//   return (
//     <div className="jewellery-container">
//       <h2 className="jewellery-title">...</h2>
//       <div className="jewellery-scroll">
//         <div className="jewellery-track">
//           {[...categories, ...categories].map((category, index) => (
//             <div
//               key={index}
//               className="jewellery-card"
//               onClick={() => handleClick(category.name)}
//               style={{ cursor: "pointer" }}
//             >
//               <img src={category.image} alt={category.name} className="jewellery-image" />
//               <span className="sparkle sparkle-1"></span>
//               <span className="sparkle sparkle-2"></span>
//               <span className="sparkle sparkle-3"></span>
//               <span className="sparkle sparkle-4"></span>
//               <div className="jewellery-name">{category.name}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JewelleryCategory;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import image1 from '../assets/images/DimondRing.jpg';
// import image2 from '../assets/images/GoldRing.jpg';
// import image3 from '../assets/images/EarringDymond.jpg';
// import image4 from '../assets/images/EarringsGold.jpg';
// import image5 from '../assets/images/DiamondNecklace.jpg';
// import image6 from '../assets/images/GoldNeclace.jpg';
// import image7 from '../assets/images/MangalsutraDiamond.jpg';
// import image8 from '../assets/images/MangalasutraGold.jpg';
// import "../assets/css/JewelleryCategory.css";

// const categories = [
//   { id: 1, image: image1, name: "Diamond Rings" },
//   { id: 2, image: image2, name: "Gold Rings" },
//   { id: 3, image: image3, name: "Diamond Earrings" },
//   { id: 4, image: image4, name: "Gold Earrings" },
//   { id: 5, image: image5, name: "Diamond Necklace" },
//   { id: 6, image: image6, name: "Gold Necklace" },
//   { id: 7, image: image7, name: "Diamond Mangalsutra" },
//   { id: 8, image: image8, name: "Gold Mangalsutra" },
// ];

// const JewelleryCategory = () => {
//   const navigate = useNavigate();

//   const handleClick = (categoryName) => {
//     navigate(`/category/${encodeURIComponent(categoryName)}`);
//   };

//   return (
//     <div className="jewelcat-container">
//       <h2 className="jewelcat-title">Shop by Category</h2>
//       <div className="jewelcat-scroll">
//         <div className="jewelcat-track">
//           {[...categories, ...categories].map((category, index) => (
//             <div
//               key={index}
//               className="jewelcat-card"
//               onClick={() => handleClick(category.name)}
//               style={{ cursor: "pointer" }}
//             >
//               <img src={category.image} alt={category.name} className="jewelcat-image" />
//               <span className="sparkle sparkle-1"></span>
//               <span className="sparkle sparkle-2"></span>
//               <span className="sparkle sparkle-3"></span>
//               <span className="sparkle sparkle-4"></span>
//               <div className="jewelcat-name">{category.name}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JewelleryCategory;





// JewelleryCategory.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from '../assets/images/DimondRing.jpg';
import image2 from '../assets/images/GoldRing.jpg';
import image3 from '../assets/images/EarringDymond.jpg';
import image4 from '../assets/images/EarringsGold.jpg';
import image5 from '../assets/images/DiamondNecklace.jpg';
import image6 from '../assets/images/GoldNeclace.jpg';
import image7 from '../assets/images/MangalsutraDiamond.jpg';
import image8 from '../assets/images/MangalasutraGold.jpg';
import "../assets/css/JewelleryCategory.css";

const categories = [
  { id: 1, image: image1, name: "Diamond Rings" },
  { id: 2, image: image2, name: "Gold Rings" },
  { id: 3, image: image3, name: "Diamond Earrings" },
  { id: 4, image: image4, name: "Gold Earrings" },
  { id: 5, image: image5, name: "Diamond Necklace" },
  { id: 6, image: image6, name: "Gold Necklace" },
  { id: 7, image: image7, name: "Diamond Mangalsutra" },
  { id: 8, image: image8, name: "Gold Mangalsutra" },
];

const JewelleryCategory = () => {
  const navigate = useNavigate();

  const handleClick = (categoryName) => {
    navigate(`/category/${encodeURIComponent(categoryName)}`);
  };

  return (
    <div className="jewelcat-container">
      <h2 className="jewelcat-title">...</h2>
      <div className="jewelcat-grid">
        {categories.map((category) => (
          <div
            key={category.id}
            className="jewelcat-card"
            onClick={() => handleClick(category.name)}
          >
            <div className="jewelcat-image-wrapper">
              <img src={category.image} alt={category.name} className="jewelcat-image" />
              <div className="jewelcat-name">{category.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JewelleryCategory;
