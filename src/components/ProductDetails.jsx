import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/css/ProductDetails.css";
import { useCart } from "../context/CartContext"; // ✅ Import cart context

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(""); // for big image
  const { addToCart } = useCart(); // ✅ Use cart context

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://projectnewbackend1-1.onrender.com/api/products/${id}`
        );
        setProduct(response.data.data);
        if (response.data.data.images.length > 0) {
          setSelectedImage(response.data.data.images[0]);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  const handleAddToCart = () => {
    // Add product with selected image to the cart
    addToCart({
      ...product,
      image: selectedImage, // Include the selected image
    });
    alert("Product added to cart!");
  };

  const handleBuyNow = async () => {
    try {
      // Step 1: Create Order
      const { data: order } = await axios.post(
        "https://projectnewbackend1-1.onrender.com/api/payment/create-order",
        {
          amount: product.price, // Use the product's price
        }
      );

      // Step 2: Configure Razorpay options
      const options = {
        key: "rzp_test_HcrOflmaNTnjgB", // Same as your .env
        amount: order.amount,
        currency: "INR",
        name: "Jewellery Store",
        description: `Purchase of ${product.name}`,
        order_id: order.id,
        handler: function (response) {
          alert("Payment successful! 🥳");
          console.log(response);
          // Optionally, navigate to a confirmation page or order history
          navigate("/order-success");
        },
        prefill: {
          name: "Neha Sontakke", // Pre-fill customer details
          email: "nehasontakke1880@gmail.com",
          contact: "9359481880",
        },
        theme: {
          color: "#3399cc",
        },
      };

      // Step 3: Open Razorpay Payment Gateway
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error processing payment:", error);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <div className="product-details-container">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Go to Home
      </button>

      <div className="product-top-section">
        <div className="product-images-section">
          <img
            src={selectedImage}
            alt="Selected"
            className="main-product-image"
          />

          <div className="thumbnail-images">
            {product?.images?.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className="thumbnail-image"
                onMouseEnter={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        <div className="product-info-section">
          <h2>{product.name}</h2>
          <p><strong>Price:</strong> ₹{product.price}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Metal Type:</strong> {product.metalType}</p>
          <p><strong>Gold Color:</strong> {product.goldColor}</p>
          <p><strong>Weight:</strong> {product.weight}g</p>
          <p><strong>Availability:</strong> {product.availability}</p>
          <p><strong>Description:</strong> {product.description}</p>

          <h4>Price Breakup</h4>
          <ul>
            <li>Gold Price: ₹{product.priceBreakup?.goldPrice}</li>
            <li>Making Charge: ₹{product.priceBreakup?.makingCharge}</li>
            <li>Tax: ₹{product.priceBreakup?.tax}</li>
          </ul>

          <div className="product-actions">
            {/* ✅ Updated Buy Now button with Razorpay integration */}
            <button
              className="buy-now-btn"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>

            {/* ✅ Updated Add to Cart button */}
            <button
              className="add-to-cart-btn"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
