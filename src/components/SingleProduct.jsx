// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const SingleProduct = () => {
//   const { id } = useParams(); // Get the product ID from the URL
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(
//           `https://projectnewbackend1-1.onrender.com/api/products/${id}`
//         );
//         setProduct(response.data); // Set the fetched product
//       } catch (error) {
//         console.error("Error fetching product details:", error);
//       }
//     };

//     fetchProduct();
//   }, [id]); // Re-fetch the product if the ID changes

//   if (!product) return <p>Loading...</p>;

//   return (
//     <div className="single-product-container">
//       <h2>{product.name}</h2>
//       <img src={product.images?.[0] || "default.jpg"} alt={product.name} />
//       <p>{product.description}</p>
//       <p>Price: ₹{product.price}</p>
//     </div>
//   );
// };

// export default SingleProduct;
