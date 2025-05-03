// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import '../assets/css/GoldRateComponent.css'; // Import the custom CSS

// const GoldRateComponent = () => {
//   const [price, setPrice] = useState(null);
//   const [threshold, setThreshold] = useState(5500); // थ्रेशोल्ड ₹/ग्रॅम
//   const [alertEnabled, setAlertEnabled] = useState(false);

//   useEffect(() => {
//     const fetchGoldPrice = async () => {
//       try {
//         const res = await axios.get('http://localhost:7001/api/gold/current-price');
//         const current = res.data.goldPrice;
        
//         // प्रति ग्राम गोल्ड प्राइस काढा
//         const pricePerGram = current / 31.1035;

//         setPrice(pricePerGram); // प्रति ग्राम गोल्ड प्राइस सेट करा

//         // अलर्ट चेक करा
//         if (alertEnabled && pricePerGram <= threshold) {
//           alert(`📉 Gold dropped to ₹${pricePerGram} per gram - Time to buy!`);
//         }
//       } catch (error) {
//         console.error('Error fetching gold price', error);
//       }
//     };

//     // प्राइस fetch करा आणि 1 मिनिटाला अपडेट करा
//     fetchGoldPrice();
//     const interval = setInterval(fetchGoldPrice, 60000);

//     // Cleanup interval on unmount
//     return () => clearInterval(interval);
//   }, [alertEnabled, threshold]);

//   return (
//     <div className="gold-rate-container">
//       <h2 className="gold-rate-title">🌟 Live Gold Rate (per gram)</h2>
//       {price ? (
//         <p className="gold-price">₹{price}</p>
//       ) : (
//         <p>Loading...</p>
//       )}

//       <div className="alert-settings">
//         <label>Alert if below ₹:</label>
//         <input
//           type="number"
//           value={threshold}
//           onChange={(e) => setThreshold(e.target.value)}
//           className="threshold-input"
//         />
//         <label>
//           <input
//             type="checkbox"
//             checked={alertEnabled}
//             onChange={() => setAlertEnabled(!alertEnabled)}
//             className="alert-checkbox"
//           />
//           Enable Alert
//         </label>
//       </div>
//     </div>
//   );
// };

// export default GoldRateComponent;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/css/GoldRateComponent.css'; // Import the custom CSS

const GoldRateComponent = () => {
  const [price, setPrice] = useState(null);
  const [threshold, setThreshold] = useState(5500); // थ्रेशोल्ड ₹/ग्रॅम
  const [alertEnabled, setAlertEnabled] = useState(false);
  const [error, setError] = useState(null); // Error state for displaying errors

  useEffect(() => {
    const fetchGoldPrice = async () => {
      try {
        const res = await axios.get('http://localhost:7001/api/gold/current-price');
        const current = res.data.goldPrice;
        
        // प्रति ग्राम गोल्ड प्राइस काढा
        const pricePerGram = current / 31.1035;

        setPrice(pricePerGram); // प्रति ग्राम गोल्ड प्राइस सेट करा

        // अलर्ट चेक करा
        if (alertEnabled && pricePerGram <= threshold) {
          alert(`📉 Gold dropped to ₹${pricePerGram} per gram - Time to buy!`);
        }
      } catch (error) {
        console.error('Error fetching gold price', error);
        setError('Failed to fetch gold price. Please try again later.'); // Set error state
      }
    };

    // प्राइस fetch करा आणि 1 मिनिटाला अपडेट करा
    fetchGoldPrice();
    const interval = setInterval(fetchGoldPrice, 60000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [alertEnabled, threshold]);

  return (
    <div className="gold-rate-container">
      <h2 className="gold-rate-title">🌟 Live Gold Rate (per gram)</h2>
      {error ? ( // Show error message if error state is set
        <p className="error-message">{error}</p>
      ) : price ? (
        <p className="gold-price">₹{price}</p>
      ) : (
        <p>Loading...</p>
      )}

      <div className="alert-settings">
        <label>Alert if below ₹:</label>
        <input
          type="number"
          value={threshold}
          onChange={(e) => setThreshold(e.target.value)}
          className="threshold-input"
        />
        <label>
          <input
            type="checkbox"
            checked={alertEnabled}
            onChange={() => setAlertEnabled(!alertEnabled)}
            className="alert-checkbox"
          />
          Enable Alert
        </label>
      </div>
    </div>
  );
};

export default GoldRateComponent;
