// src/components/Catalog.js

import React, { useState } from "react";
// import '../assets/css/Catalog.css'
import CategoryProducts from "../components/CategoryProducts";

const Catalog = () => {
  // Use useState to set categories dynamically
  const [categories, setCategories] = useState(["Gold Necklace","Diamond Necklace", "Diamond Rings","Gold Rings", "Diamond Earrings","Gold Earrings", "Diamond Mangalsutra","Gold Mangalsutra","Gold Bracelets","Diamond Bracelets","Gold Pendants","Diamond Pendants" ]);

  return (
    <div className="catalog-page">
      <h1 className="text-center text-3xl font-bold my-6">Jewellery Catalog</h1>
      
      {/* Map through the categories and render CategoryProducts for each category */}
      {categories.map((category, index) => (
        <div key={index} className="category-section">
          {/* <h2 className="text-2xl font-semibold my-4">{category}</h2> */}
          <CategoryProducts category={category} />
        </div>
      ))}
    </div>
  );
};

export default Catalog;
