import React, { useState } from "react";
import { bookRepair } from "../components/api";
import "../assets/css/RepairBooking.css"; // Import the CSS

const RepairBooking = () => {
    const [formData, setFormData] = useState({
        customerName: "",
        phone: "",
        email: "",
        address: "",
        jewelleryType: "",
        otp: Math.floor(100000 + Math.random() * 900000), // ✅ Generate a 6-digit OTP
      });
      
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [repairId, setRepairId] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://projectnewbackend1-1.onrender.com/api/repair/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json(); // ✅ JSON response convert karne important
      console.log("API Response:", data); // Debugging
  
      if (!response.ok) {
        throw new Error(data.message || "Booking failed!");
      }
  
      alert("Repair Booking Successful!");
    } catch (error) {
      console.error("Invalid API Response:", error);
      alert(error.message);
    }
  };
  
  

  return (
    <div className="repair-booking-container">
      <div className="repair-form">
        <h2>Book Jewellery Repair</h2>
        {!bookingSuccess ? (
          <form onSubmit={handleSubmit}>
            <input type="text" name="customerName" placeholder="Name" onChange={handleChange} required />
            <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
            <input type="text" name="jewelleryType" placeholder="Jewellery Type" onChange={handleChange} required />
            <button type="submit">Book Repair</button>
          </form>
        ) : (
          <p className="success-message">Booking Successful! Repair ID: {repairId}</p>
        )}
      </div>
    </div>
  );
};

export default RepairBooking;
