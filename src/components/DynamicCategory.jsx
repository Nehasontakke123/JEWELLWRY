import React from "react";
import { useParams } from "react-router-dom";
import "../assets/css/DynamicCategory.css";

// Gold
import gold1 from '../assets/images/Rose Bar.jpg';
import gold2 from '../assets/images/Rose Bar2.jpg';
import gold3 from '../assets/images/Rosebar2.jpg';
import gold4 from '../assets/images/Rosebar4.jpg';
import gold5 from '../assets/images/Rosebar6.jpg';

// Diamond
import diamond1 from '../assets/images/Diamond_Pendant1.jpg';
import diamond2 from '../assets/images/Diamond_Pendant2.jpg';
import diamond3 from '../assets/images/Diamond_Pendant3.jpg';
import diamond4 from '../assets/images/Diamond_Pendant4.jpg';
import diamond5 from '../assets/images/Diamond_Pendant5.jpg';
import diamond6 from '../assets/images/Diamond_Pendant6.jpg';

// Earrings
import earring1 from '../assets/images/Earring1.jpg';
import earring2 from '../assets/images/Earring2.jpg';
import earring3 from '../assets/images/Earring3.jpg';
import earring4 from '../assets/images/Earring4.jpg';
import earring5 from '../assets/images/Earring5.jpg';
import earring6 from '../assets/images/Earring6.jpg';

// Rings
import ring1 from '../assets/images/DimondRing.jpg';
import ring2 from '../assets/images/BuyRing2.jpg';
import ring3 from '../assets/images/BuyRing3.jpg';
import ring4 from '../assets/images/BuyRing4.jpg';
import ring5 from '../assets/images/BuyRing5.jpg';
import ring6 from '../assets/images/BuyRing6.jpg';

// Daily Wear
import daily1 from '../assets/images/Daily1.jpg';
import daily2 from '../assets/images/Daily3.jpg';
import daily3 from '../assets/images/Daily4.jpg';
import daily4 from '../assets/images/Daily4.jpg';
import daily5 from '../assets/images/Daily5.jpg';
import daily6 from '../assets/images/Daily6.jpg';

// Collections
import collection1 from '../assets/images/collectionNew.jpg';
import collection2 from '../assets/images/collection3.jpg';
import collection3 from '../assets/images/collection4.jpg';
import collection4 from '../assets/images/collection5.jpg';
import collection5 from '../assets/images/collection5.jpg';
import collection6 from '../assets/images/collection6.jpg';

// Wedding
import wedding1 from '../assets/images/wedding1.jpg';
import wedding2 from '../assets/images/wedding2.jpg';
import wedding3 from '../assets/images/wedding3.jpg';
import wedding4 from '../assets/images/wedding4.jpg';
import wedding5 from '../assets/images/wedding5.jpg';
import wedding6 from '../assets/images/wedding6.jpg';

const sampleDetails = {
  title: "Stylish Handbag",
  price: "₹1,299",
  description: "Durable leather bag with multiple compartments.",
  category: "Accessories",
  stock: "In Stock",
  rating: "★ 4.5 (23 reviews)"
};

const categoryData = {
  gold: [
    { id: 1, image: gold1, title: "Rose Bar Design 1" },
    { id: 2, image: gold2, title: "Elegant Rose Bar" },
    { id: 3, image: gold3, title: "Shiny Gold Bar" },
    { id: 4, image: gold4, title: "Luxury Gold Bar" },
    { id: 5, image: gold5, title: "Classic Rose Bar" },
  ],
  diamond: [
    { id: 1, image: diamond1, title: "Diamond Pendant 1" },
    { id: 2, image: diamond2, title: "Diamond Pendant 2" },
    { id: 3, image: diamond3, title: "Diamond Pendant 3" },
    { id: 4, image: diamond4, title: "Diamond Pendant 4" },
    { id: 5, image: diamond5, title: "Diamond Pendant 5" },
    { id: 6, image: diamond6, title: "Diamond Pendant 6" },
  ],
  earrings: [
    { id: 1, image: earring1, title: "Elegant Earring 1" },
    { id: 2, image: earring2, title: "Stylish Earring 2" },
    { id: 3, image: earring3, title: "Classic Earring 3" },
    { id: 4, image: earring4, title: "Trendy Earring 4" },
    { id: 5, image: earring5, title: "Golden Earring 5" },
    { id: 6, image: earring6, title: "Modern Earring 6" },
  ],
  rings: [
    { id: 1, image: ring1, title: "Gold Ring 1" },
    { id: 2, image: ring2, title: "Diamond Ring 2" },
    { id: 3, image: ring3, title: "Silver Ring 3" },
    { id: 4, image: ring4, title: "Classic Ring 4" },
    { id: 5, image: ring5, title: "Shiny Ring 5" },
    { id: 6, image: ring6, title: "Trendy Ring 6" },
  ],
  "daily-wear": [
    { id: 1, image: daily1, title: "Daily Wear 1" },
    { id: 2, image: daily2, title: "Simple Wear 2" },
    { id: 3, image: daily3, title: "Elegant Daily 3" },
    { id: 4, image: daily4, title: "Stylish Wear 4" },
    { id: 5, image: daily5, title: "Lightweight Wear 5" },
    { id: 6, image: daily6, title: "Trendy Daily 6" },
  ],
  collections: [
    { id: 1, image: collection1, title: "Royal Collection 1" },
    { id: 2, image: collection2, title: "Modern Set 2" },
    { id: 3, image: collection3, title: "Elegant Style 3" },
    { id: 4, image: collection4, title: "Bold Look 4" },
    { id: 5, image: collection5, title: "Stylish Combo 5" },
    { id: 6, image: collection6, title: "Classic Look 6" },
  ],
  wedding: [
    { id: 1, image: wedding1, title: "Wedding Set 1" },
    { id: 2, image: wedding2, title: "Bridal Set 2" },
    { id: 3, image: wedding3, title: "Royal Bridal 3" },
    { id: 4, image: wedding4, title: "Golden Set 4" },
    { id: 5, image: wedding5, title: "Classic Wedding 5" },
    { id: 6, image: wedding6, title: "Traditional Set 6" },
  ],
  gifting: [
    { id: 1, image: gold1, title: "Gifting Gold 1" },
    { id: 2, image: diamond2, title: "Gifting Diamond 2" },
    { id: 3, image: earring3, title: "Gifting Earring 3" },
    { id: 4, image: ring4, title: "Gifting Ring 4" },
    { id: 5, image: daily4, title: "Gifting Daily 5" },
    { id: 6, image: collection3, title: "Gifting Collection 6" },
    { id: 7, image: wedding4, title: "Gifting Wedding 7" },
  ],
  more: [
    { id: 1, image: diamond1, title: "More Diamond 1" },
    { id: 2, image: ring6, title: "More Ring 2" },
    { id: 3, image: gold5, title: "More Gold 3" },
    { id: 4, image: earring5, title: "More Earring 4" },
    { id: 5, image: daily5, title: "More Daily 5" },
    { id: 6, image: collection5, title: "More Collection 6" },
    { id: 7, image: wedding2, title: "More Wedding 7" },
  ],
};

const DynamicCategory = () => {
  const { name } = useParams();
  const items = categoryData[name?.toLowerCase()];

  if (!items) {
    return <h2 style={{ padding: "2rem" }}>No items found for category "{name}"</h2>;
  }

  return (
    <div className="dynamic-category-wrapper">
    <h2 className="category-title">{name} Collection</h2>
    <div className="dynamic-product-grid">
      {items.map(item => (
        <div className="dynamic-flip-card" key={item.id}>
          <div className="dynamic-flip-card-inner">
            <div className="dynamic-flip-card-front">
              <img src={item.image} alt={item.title || sampleDetails.title} />
              <h4>{item.title || sampleDetails.title}</h4>
            </div>
            <div className="dynamic-flip-card-back">
              <h4>{item.title || sampleDetails.title}</h4>
              <p><strong>Price:</strong> {sampleDetails.price}</p>
              <p><strong>Description:</strong> {sampleDetails.description}</p>
              <p><strong>Category:</strong> {sampleDetails.category}</p>
              <p><strong>Stock:</strong> {sampleDetails.stock}</p>
              <p><strong>Rating:</strong> {sampleDetails.rating}</p>
              {/* <button className="details-button">View Details</button> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default DynamicCategory;
