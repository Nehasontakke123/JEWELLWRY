// import React, { useState, useEffect ,Suspense, lazy } from "react";
// // import React, { Suspense, lazy } from "react"; // ✅ Clean single import

// import banner1 from "../assets/images/banner1.jpg";
// import banner2 from "../assets/images/banner2.jpg";
// import banner3 from "../assets/images/banner3.jpg";
// import "../assets/css/HomePage.css";
// import JewelleryCategory from "../components/jewelleryCategory"; // ✅ Corrected Import Path
// import DiamondJewellery from "../components/DiamondJewellery";
// import GoldJewellery from "../components/GoldJewellery";
// import OurCollection from "../components/OurCollection";
// // import VideoCarousel from "../components/VideoCarousel";
// // import React, { Suspense, lazy } from "react";
// const VideoCarousel = lazy(() => import("../components/VideoCarousel"));

// import TopCollection from "../components/TopCollection";
// import BridesSection from "../components/BrideSection";
// import ShopByGender from '../components/ShopByGender'
// // import GoldRateComponent from "../components/GoldRateComponent";

// // import Payment from '../components/Payment'

// const banners = [banner1, banner2, banner3];

// const HomePage = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % banners.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       {/* ✅ JewelleryCategory Now Above the Banner */}
//       <JewelleryCategory />

//       <div className="banner-container">
//         {banners.map((image, index) => (
//           <div key={index} className={`banner-slide ${index === current ? "active" : ""}`}>
//             <img src={image} alt={`Banner ${index + 1}`} className="banner-image" />
//           </div>
//         ))}

//         <button className="banner-button left" onClick={() => setCurrent((prev) => (prev - 1 + banners.length) % banners.length)}>❮</button>
//         <button className="banner-button right" onClick={() => setCurrent((prev) => (prev + 1) % banners.length)}>❯</button>

//         <div className="banner-dots">
//           {banners.map((_, index) => (
//             <div key={index} className={`dot ${index === current ? "active" : ""}`} onClick={() => setCurrent(index)}></div>
//           ))}
//         </div>
//       </div>
//       {/* <TopCollection/> */}
//       <ShopByGender/>
//       {/* <VideoPlayer/> */}
//       {/* <VideoCarousel/> */}

//       <Suspense fallback={<div>Loading Videos...</div>}>
//         <VideoCarousel />
//       </Suspense>
//       <DiamondJewellery/>
//       <GoldJewellery/>
//       {/* <OurCollection/> */}
//       <BridesSection/>
//       {/* <GoldRateComponent/> */}
//     {/* <Payment/> */}
//     </div>
//   );
// };

// export default HomePage;







import React, { useState, useEffect, Suspense, lazy } from "react";
import "../assets/css/HomePage.css";
import JewelleryCategory from "../components/jewelleryCategory";
import DiamondJewellery from "../components/DiamondJewellery";
import GoldJewellery from "../components/GoldJewellery";
import OurCollection from "../components/OurCollection";
// import VideoCarousel from "../components/VideoCarousel";

// Lazy load VideoCarousel component
const VideoCarousel = lazy(() => import("../components/VideoCarousel"));

import TopCollection from "../components/TopCollection";
import BridesSection from "../components/BrideSection";
import ShopByGender from '../components/ShopByGender';

import banner1 from "../assets/images/banner1.jpg";  // Correct image imports
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";

// Array of banners
const banners = [banner1, banner2, banner3];

const HomePage = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      {/* Jewellery Category */}
      <JewelleryCategory />

      <div className="banner-container">
        {banners.map((image, index) => (
          <div key={index} className={`banner-slide ${index === current ? "active" : ""}`}>
            <img src={image} alt={`Banner ${index + 1}`} className="banner-image" />
          </div>
        ))}

        {/* Banner Navigation Buttons */}
        <button className="banner-button left" onClick={() => setCurrent((prev) => (prev - 1 + banners.length) % banners.length)}>❮</button>
        <button className="banner-button right" onClick={() => setCurrent((prev) => (prev + 1) % banners.length)}>❯</button>

        {/* Banner Dots */}
        <div className="banner-dots">
          {banners.map((_, index) => (
            <div key={index} className={`dot ${index === current ? "active" : ""}`} onClick={() => setCurrent(index)}></div>
          ))}
        </div>
      </div>

      {/* Shop By Gender */}
      <ShopByGender />

      {/* Lazy load Video Carousel */}
      <Suspense fallback={<div>Loading Videos...</div>}>
        <VideoCarousel />
      </Suspense>

      {/* Other Sections */}
      <DiamondJewellery />
      <GoldJewellery />
      <BridesSection />
    </div>
  );
};

export default HomePage;
