import React from 'react'; 
import { useParams } from "react-router-dom";
import CategoryProducts from "../components/CategoryProducts";

const CategoryPage = () => {
  const { categoryName } = useParams();

  return (
    <div>
      <CategoryProducts category={categoryName} />
    </div>
  );
};

export default CategoryPage;
