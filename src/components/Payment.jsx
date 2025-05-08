// import React from "react";
// import axios from "axios";

// const PaymentComponent = () => {
//   const handlePayment = async () => {
//     const { data: order } = await axios.post("https://projectnewbackend1-1.onrender.com/api/payment/create-order", {
//       amount: 500, // INR
//     });

//     const options = {
//       key: "rzp_test_HcrOflmaNTnjgB", // same as your .env
//       amount: order.amount,
//       currency: "INR",
//       name: "IRCTC Railway Booking",
//       description: "Test Transaction",
//       order_id: order.id,
//       handler: function (response) {
//         alert("Payment successful! 🥳");
//         console.log(response);
//       },
//       prefill: {
//         name: "Neha Sontakke",
//         email: "neha@example.com",
//         contact: "9876543210",
//       },
//       theme: {
//         color: "#3399cc",
//       },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <button
//         onClick={handlePayment}
//         className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
//       >
//         Pay ₹500
//       </button>
//     </div>
//   );
// };

// export default PaymentComponent;


// import React from "react";
// import axios from "axios";

// const Payment = () => {
//   const handlePayment = async () => {
//     try {
//       // Fetching the order details from the backend
//       const { data } = await axios.post(
//         "https://projectnewbackend1-1.onrender.com/api/payment/create-order",
//         { amount: 500 } // INR in paisa (500 = ₹5.00)
//       );

//       const order = data.order; // ✅ Access the actual order object

//       // Preparing Razorpay options
//       const options = {
//         key: "rzp_test_HcrOflmaNTnjgB", // Your Razorpay test key
//         amount: order.amount, // Amount in paisa
//         currency: "INR",
//         name: "IRCTC Railway Booking",
//         description: "Test Transaction",
//         order_id: order.id, // Order ID from backend (must be a string)
//         handler: function (response) {
//           alert("Payment successful! 🥳");
//           console.log(response);
//         },
//         prefill: {
//           name: "Neha Sontakke",
//           email: "neha@example.com",
//           contact: "9359481880",
//         },
//         notes: {
//           userName: "Neha Sontakke", // Simplified and correct usage of notes
//           address: "Nanded",
//         },
//         theme: {
//           color: "#3399cc",
//         },
//       };

//       // Debugging: Logging the options to console
//       console.log("Razorpay Options =>", JSON.stringify(options));

//       // Open Razorpay checkout
//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (error) {
//       console.error("Payment initiation failed:", error);
//       alert("Failed to start payment. Please try again.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <button
//         onClick={handlePayment}
//         className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
//       >
//         Pay ₹500
//       </button>
//     </div>
//   );
// };

// export default Payment;




// import React from "react";
// import axios from "axios";

// const Payment = () => {
//   const handlePayment = async () => {
//     try {
//       const userId = "663b12345e22318f1a123456"; // 🔁 Replace with actual logged-in user ID
//       const repairId = "664a45678e78928f2b654321"; // 🔁 Replace with actual repair request ID
//       const amount = 500; // ₹5 in paisa

//       // Step 1: Create order on backend
//       const { data } = await axios.post(
//         "https://projectnewbackend1-1.onrender.com/api/payment/create-order",
//         {
//           amount,
//           userId,
//           repairId,
//         }
//       );

//       const order = data.order;

//       const options = {
//         key: "rzp_test_HcrOflmaNTnjgB", // Razorpay test key
//         amount: order.amount,
//         currency: "INR",
//         name: "IRCTC Railway Booking",
//         description: "Train Ticket Payment",
//         order_id: order.id,
//         handler: async function (response) {
//           // Step 2: Verify payment on backend
//           try {
//             const verifyRes = await axios.post(
//               "https://projectnewbackend1-1.onrender.com/api/payment/verify",
//               {
//                 transactionId: order.id,
//                 paymentId: response.razorpay_payment_id,
//               }
//             );

//             alert("✅ Payment successful and verified!");
//             console.log("Backend Response:", verifyRes.data);
//           } catch (verifyError) {
//             console.error("❌ Payment verification failed:", verifyError);
//             alert("Payment received but verification failed.");
//           }
//         },
//         prefill: {
//           name: "Neha Sontakke",
//           email: "neha@example.com",
//           contact: "9359481880",
//         },
//         notes: {
//           userName: "Neha Sontakke",
//           address: "Nanded",
//         },
//         theme: {
//           color: "#3399cc",
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (error) {
//       console.error("❌ Payment initiation failed:", error);
//       alert("Payment start failed. Try again.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <button
//         onClick={handlePayment}
//         className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
//       >
//         Pay ₹5
//       </button>
//     </div>
//   );
// };

// export default Payment;








import React, { useEffect, useState } from "react";
import axios from "axios";

const Payment = () => {
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  // ✅ Load Razorpay script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {
      console.log("✅ Razorpay SDK loaded");
      setRazorpayLoaded(true);
    };
    script.onerror = () => {
      console.error("❌ Failed to load Razorpay SDK");
    };
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    if (!razorpayLoaded || !window.Razorpay) {
      alert("Razorpay SDK not loaded yet. Please try again later.");
      return;
    }

    try {
      const userId = "663b12345e22318f1a123456";
      const repairId = "664a45678e78928f2b654321";
      const amount = 500; // ₹5 in paisa

      // ✅ Create order from backend
      const { data } = await axios.post(
        "https://projectnewbackend1-1.onrender.com/api/payment/create-order",
        {
          amount,
          userId,
          repairId,
        }
      );

      const order = data.order;

      const options = {
        key: "rzp_test_HcrOflmaNTnjgB",
        amount: order.amount,
        currency: "INR",
        name: "Jewellery Store",
        description: "Purchase of MESMERIZING DIAMOND NECKLACE - Navrathan",
        order_id: order.id,
        handler: async function (response) {
          try {
            const verifyRes = await axios.post(
              "https://projectnewbackend1-1.onrender.com/api/payment/verify",
              {
                transactionId: order.id,
                paymentId: response.razorpay_payment_id,
              }
            );

            alert("✅ Payment successful and verified!");
            console.log("Backend Response:", verifyRes.data);
          } catch (verifyError) {
            console.error("❌ Payment verification failed:", verifyError);
            alert("Payment received but verification failed.");
          }
        },
        prefill: {
          name: "Neha Sontakke",
          email: "neha@example.com",
          contact: "9359481880",
        },
        notes: {
          userName: "Neha Sontakke",
          address: "Nanded",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("❌ Payment initiation failed:", error);
      alert("Payment start failed. Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <button
        onClick={handlePayment}
        className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
      >
        Pay ₹5
      </button>
    </div>
  );
};

export default Payment;
