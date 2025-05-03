import React from "react";
import axios from "axios";

const PaymentComponent = () => {
  const handlePayment = async () => {
    const { data: order } = await axios.post("https://projectnewbackend1-1.onrender.com/api/payment/create-order", {
      amount: 500, // INR
    });

    const options = {
      key: "rzp_test_HcrOflmaNTnjgB", // same as your .env
      amount: order.amount,
      currency: "INR",
      name: "IRCTC Railway Booking",
      description: "Test Transaction",
      order_id: order.id,
      handler: function (response) {
        alert("Payment successful! 🥳");
        console.log(response);
      },
      prefill: {
        name: "Neha Sontakke",
        email: "neha@example.com",
        contact: "9876543210",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handlePayment}
        className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
      >
        Pay ₹500
      </button>
    </div>
  );
};

export default PaymentComponent;
