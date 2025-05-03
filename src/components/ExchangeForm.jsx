import React, { useState } from "react";
import axios from "axios";
import "../assets/css/ExchangeForm.css";

const ExchangeForm = () => {
  const [form, setForm] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    jewelleryDetails: "",
    purpose: "sell",
  });

  const [requestId, setRequestId] = useState("");
  const [otp, setOtp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Form Data Sending:", form); // Debug log
      const res = await axios.post(
        "https://projectnewbackend1-1.onrender.com/api/exchange/create",
        form
      );
      alert("✅ OTP sent to your phone!");
      setRequestId(res.data.requestId);
    } catch (err) {
      console.error("❌ Error occurred:", err);
      alert(
        "❌ Server Error: " +
          (err.response?.data?.message || "Internal Server Error")
      );
    }
  };

  const verifyOTP = async () => {
    try {
      const res = await axios.post(
        "https://projectnewbackend1-1.onrender.com/api/exchange/verify-otp",
        { requestId, otp }
      );
      alert("✅ OTP Verified! Your transaction is now verified.");
    } catch (err) {
      console.error("❌ OTP Verification Failed:", err);
      alert(
        "❌ OTP Verification Failed: " +
          (err.response?.data?.message || "Invalid OTP or Server Error")
      );
    }
  };

  return (
    <div className="exchange-form-wrapper">
      <div className="exchange-form-container">
        <h2 className="form-title">Jewellery Sell / Exchange</h2>

        <form onSubmit={handleSubmit} className="form-wrapper">
          <input
            type="text"
            placeholder="Full Name"
            value={form.customerName}
            onChange={(e) =>
              setForm({ ...form, customerName: e.target.value })
            }
            className="form-input"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={form.customerEmail}
            onChange={(e) =>
              setForm({ ...form, customerEmail: e.target.value })
            }
            className="form-input"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={form.customerPhone}
            onChange={(e) =>
              setForm({ ...form, customerPhone: e.target.value })
            }
            className="form-input"
            required
          />

          <textarea
            placeholder="Jewellery Details"
            value={form.jewelleryDetails}
            onChange={(e) =>
              setForm({ ...form, jewelleryDetails: e.target.value })
            }
            className="form-textarea"
            required
          ></textarea>

          <select
            value={form.purpose}
            onChange={(e) => setForm({ ...form, purpose: e.target.value })}
            className="form-select"
          >
            <option value="sell">Sell</option>
            <option value="exchange">Exchange</option>
          </select>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>

        {requestId && (
          <div className="otp-section">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="otp-input"
            />
            <button onClick={verifyOTP} className="verify-btn">
              Verify OTP
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExchangeForm;
