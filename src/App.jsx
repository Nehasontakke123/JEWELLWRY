import React from 'react'; 
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import JewelleryRepair from './pages/JewelleryRepair'; 
import VideoStream from "./components/VideoStream";
import Notifications from "./components/Notifications";
import ExchangeForm from "./components/ExchangeForm";
import CategoryPage from "../src/pages/CategoryPage"
import ProductDetails from "./components/ProductDetails";
import DynamicCategory from "./components/DynamicCategory";
import BridesOfIndia from "./components/BridesOfIndia";
import BrideDetails from "./components/BrideDetails";
import LoginForm from "./components/LoginForm copy";

import Catalog from "./components/Catalog";

import CartPage from "./pages/CartPage";





function App() {
  return (
  
      <>
        <Navbar />
        {/* <Notifications/> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jewellery-repair" element={<JewelleryRepair />} />
          <Route path="/video" element={<VideoStream />} />
          <Route path="/notification" element={<Notifications />} />
          <Route path="/exchange" element={<ExchangeForm />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/:name" element={<DynamicCategory />} />
          <Route path="/brides-of-india" element={<BridesOfIndia />} />
          <Route path="/bride/:id" element={<BrideDetails />} />
          <Route path="/login/profile" element={<LoginForm />} /> 
         

          <Route path="/catalog" element={<Catalog />} />
          

          <Route path="/cart" element={<CartPage />} />
        </Routes>
       
       
        <Footer />
      </>
   
  );
}
export default App;





