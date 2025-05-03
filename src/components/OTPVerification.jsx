import React, { useState } from "react";
import { verifyOTP } from "../api";

const OTPVerification = ({ repairId }) => {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await verifyOTP({ repairId, otp });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Invalid OTP!");
    }
  };

  return (
    <div>
      <h2>Verify OTP</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter OTP" onChange={(e) => setOtp(e.target.value)} required />
        <button type="submit">Verify</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default OTPVerification;
