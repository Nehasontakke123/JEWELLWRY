import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"; // `useNavigate` import
import "../assets/css/Navbar.css";


import {
  FaSearch, FaShoppingCart, FaUser, FaGem, FaRing, FaGift,
  FaBars, FaTimes, FaSave
} from "react-icons/fa";
import { IoIosMicrophone } from "react-icons/io";
import { BsCollection, BsDiamond } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { GiNecklace, GiEarrings } from "react-icons/gi";

import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();
  
  // `useNavigate` for redirect
  const navigate = useNavigate();

  // Redirect to login page when user clicks the login icon
  const handleLoginRedirect = () => {
    navigate("/login/profile"); // Redirect to login page
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-top">
          <div className="nav-logo">
            <Link to="/">Jewellery</Link>
          </div>

          <div className="nav-search">
            <input type="text" placeholder="Search for Jewellery, Gold, Diamond..." />
            <FaSearch className="search-icon" />
            <IoIosMicrophone className="mic-icon" />
          </div>

          <div className="nav-icons">
            <FaGem title="Gold" />
            <BsCollection title="Collections" />
            <AiOutlineHeart title="Wishlist" />
            <FaSave title="Saved Items" />

            {/* ✅ LOGIN icon */}
            <FaUser
              title="Login"
              onClick={handleLoginRedirect} // Now redirects to /login/profile page
              className="cursor-pointer"
            />

            {/* Cart Icon with Count */}
            <div className="relative cart-wrapper">
              <NavLink to="/cart" className="cart-link">
                <FaShoppingCart className="cart-icon" title="Cart" />
                {cartItems.length > 0 && (
                  <span className="cart-count">{cartItems.length}</span>
                )}
              </NavLink>
            </div>

            {/* Mobile Nav Toggle */}
            <button className="nav-toggle md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* ✅ Navigation Links */}
        <div className={`nav-links ${isOpen ? "flex" : "hidden"} flex-col absolute top-16 left-0 w-full bg-white shadow-md md:static md:flex md:flex-row md:bg-transparent md:shadow-none`}>
          <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}><GiNecklace /> All Jewellery</NavLink>
          <NavLink to="/gold" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}><FaGem /> Gold</NavLink>
          <NavLink to="/diamond" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}><BsDiamond /> Diamond</NavLink>
          <NavLink to="/earrings" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}><GiEarrings /> Earrings</NavLink>
          <NavLink to="/rings" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}><FaRing /> Rings</NavLink>
          <NavLink to="/daily-wear" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}><FaGem /> Daily Wear</NavLink>
          <NavLink to="/collections" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}><BsCollection /> Collections</NavLink>
          <NavLink to="/wedding" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}><FaGem /> Wedding</NavLink>
          <NavLink to="/gifting" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}><FaGift /> Gifting</NavLink>
          <NavLink to="/jewellery-repair" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>Jewellery Repair</NavLink>
          <NavLink to="/exchange" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>ExchangeForm</NavLink>
          <NavLink to="/catalog" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>Catalog</NavLink>
          <NavLink to="/video" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>Video Stream</NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
