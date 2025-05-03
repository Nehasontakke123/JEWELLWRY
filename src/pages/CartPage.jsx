import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../assets/css/CartPage.css';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="cart-page-wrapper">
      <div className="cart-page">
        <h1>Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img
                  src={item.image || '/path/to/default-image.jpg'}
                  alt={item.name}
                  className="cart-item-img"
                />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-price">₹{item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(index)} // ✅ pass index
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="cart-actions">
          <Link to="/checkout">
           
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

