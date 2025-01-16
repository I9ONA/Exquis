import Navbar from './Component/Navbar';
import { ParfumProvider } from './context/Parfumcontext';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Contact from './Component/Contact';
import AboutUs from './Component/AboutUs';
import Shop from './Component/Shop';
import Brands from './Component/Brands';
import Seasons from './Component/Seasons';
import WomenParfumes from './Component/WomenParfumes';
import Sign from "./Component/Sign-Up-In";
import Menparfumes from './Component/Menparfumes';
import Brand from './Component/Brands';
import Cart from './Component/ProductCarts';
import Payement from './Component/Payement';
import BestSellers from './Component/Bestsellers';
import Unisex from './Component/Unisex';
import { useState } from 'react';
import ScrollToTop from './ScrollToTop';

function App() {
  const [Fsign , setFsign]=useState(true)

  return (
    
    <ParfumProvider>
          <Navbar Fsign={Fsign} setFsign={setFsign} />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/season" element={<Seasons />} />
            <Route path="/womenparfum" element={<WomenParfumes />} />
            <Route path='/unisex' element={<Unisex />}/>
            <Route path='/bestsellers' element={<BestSellers/>}/>
            <Route path="/sign" element={<Sign setFsign3={setFsign}/>} />
            <Route path="/Menparfum" element={<Menparfumes />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/payement" element={<Payement />} />
            <Route path="/brands" element={<Brand />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        
      
    </ParfumProvider>
  );
}

export default App;
