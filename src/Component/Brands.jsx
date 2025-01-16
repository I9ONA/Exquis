import React, { useState,useContext } from 'react';
import { Parfumcontext } from '../context/Parfumcontext';
import { FaPlus } from 'react-icons/fa'; 
import '../CSS/Brand.css';
import { useNavigate } from 'react-router-dom';


const Brand = () => {
  const [selectedBrand, setSelectedBrand] = useState("Armani");
  const navigate = useNavigate()
  const {brands} = useContext(Parfumcontext)
  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
  };

  return (
    <div className="brand-page">
      <div className="brand-buttons">
        <button onClick={() => handleBrandClick('Armani')} className="brand-btn">Armani</button>
        <button onClick={() => handleBrandClick('Dior')} className="brand-btn">Dior</button>
        <button onClick={() => handleBrandClick('Gucci')} className="brand-btn">Gucci</button>
      </div>

      
      <div className="product-list">
        {selectedBrand && brands[selectedBrand] ? (
          <div className="product-cards">
            {brands[selectedBrand].map((item) => (
              <div className="product-card" key={item.id}>
                <img src={item.img} alt={item.name} className="product-image" />
                <h3 className="product-name">{item.name}</h3>
                <p className="product-price">{item.price.toFixed(2)}$</p>
                <p className='product-rating'>For:{item.category}</p>
                <p className="product-rating">Rating: {item.rating}</p>
                <p className="product-description">{item.description}</p>
                <div className="buttons-container">
                  <button
                    disabled={!item.inStock}
                    className={`buy-now-btn ${!item.inStock ? 'disabled' : ''}`} onClick={()=>navigate('/payement')}>
                    {item.inStock ? 'Buy Now' : 'Out of Stock'}
                  </button>
                  <button className="add-to-cart-btn">
                    <FaPlus size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-brand-message">Please select a brand to view products.</p>
        )}
      </div>
    </div>
  );
};

export default Brand;
