import React, { useState, useContext } from 'react';
import { Parfumcontext } from '../context/Parfumcontext';
import { FaPlus } from 'react-icons/fa';
import '../CSS/season.css';
import { useNavigate } from 'react-router-dom';

const Season = () => {
  const [selectedSeason, setSelectedSeason] = useState("Winter"); 
  const navigate = useNavigate();
  const { season } = useContext(Parfumcontext);

  const handleSeasonClick = (season) => {
    setSelectedSeason(season);
  };

  return (
    <div className="brand-page">
      <div className="brand-buttons">
        <button onClick={() => handleSeasonClick('Winter')} className="brand-btn">Winter</button>
        <button onClick={() => handleSeasonClick('Spring')} className="brand-btn">Spring</button>
        <button onClick={() => handleSeasonClick('Summer')} className="brand-btn">Summer</button>
        <button onClick={() => handleSeasonClick('Autumn')} className="brand-btn">Autumn</button>
      </div>

      <div className="product-list">
        {selectedSeason && season[selectedSeason] ? (
          <div className="product-cards">
            {season[selectedSeason].map((item) => (
              <div className="product-card" key={item.id}>
                <div className="product-image-container">
                <img src={item.img} alt={item.name} className="product-image" />
                </div>
                <h3 className="product-name">{item.name}</h3>
                <p className="product-price">{item.price.toFixed(2)}$</p>
                <p className="product-rating">Rating: {item.rating}</p>
                <p className='product-rating'>For:{item.category}</p>
                <p className="product-description">{item.description}</p>
                <div className="buttons-container">
                  <button
                    disabled={!item.inStock}
                    className={`buy-now-btn ${!item.inStock ? 'disabled' : ''}`}
                    onClick={() => navigate('/payment')}
                  >
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
          <p className="no-brand-message">Please select a season to view products.</p>
        )}
      </div>
    </div>
  );
};

export default Season;