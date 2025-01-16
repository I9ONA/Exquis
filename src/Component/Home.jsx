import React, { useContext } from 'react';
import { Parfumcontext } from '../context/Parfumcontext';
import '../CSS/Home.css';
import { useDispatch } from 'react-redux';
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { ImgHome, BestSellers, MenParfumes, WomenParfumes, isAdmin } = useContext(Parfumcontext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  return (
    <div className="home-container">
      {ImgHome.map((item) => {
        return (
          <div className="home" key={item.id}>
            <div className="home-image-container">
              <img src={item.img} alt={item.alt} />
            </div>
          </div>
        );
      })}

      <h1>Bestsellers</h1>
      <div className="product-carts">
        {BestSellers.map((item) => {
          return (
            <div className="product-card" key={item.id}>
              <div className="product-image-container">
                <img src={item.img} alt={item.name} />
              </div>
              <h3>{item.name}</h3>
              <p>{item.price.toFixed(1)}$</p>
              <p>Rating: {item.rating}</p>
              <div className="buttons-container">
                {isAdmin === false ? (
                  <>
                    <button disabled={!item.inStock} className="buy-now-btn" onClick={() => navigate('/payement')}>
                      {item.inStock ? "Buy Now" : "Out of Stock"}
                    </button>
                    <button className="add-to-cart-btn" onClick={() => dispatch({ type: 'ADD_TO_CART', payload: item })}>
                      <FaPlus size={20} />
                    </button>
                  </>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>

      <h1>Men's Parfumes</h1>
      <div className="product-carts">
        {(() => {
          const filteredMParfumes = MenParfumes.filter((item) => item.id <= 8);
          return filteredMParfumes.map((item) => (
            <div className="product-card" key={item.id}>
              <div className="product-image-container">
                <img src={item.img} alt={item.name} />
              </div>
              <h3>{item.name}</h3>
              <p>{item.price.toFixed(1)}$</p>
              <p>Rating: {item.rating}</p>
              <div className="buttons-container">
                {isAdmin === false ? (
                  <>
                    <button disabled={!item.inStock} className="buy-now-btn" onClick={() => navigate('/payement')}>
                      {item.inStock ? "Buy Now" : "Out of Stock"}
                    </button>
                    <button className="add-to-cart-btn" onClick={() => dispatch({ type: 'ADD_TO_CART', payload: item })}>
                      <FaPlus size={20} />
                    </button>
                  </>
                ) : null}
              </div>
            </div>
          ));
        })()}
      </div>

      <h1>Women's Parfumes</h1>
      <div className="product-carts">
        {(() => {
          const filteredWParfumes = WomenParfumes.filter((item) => item.id <= 8);
          return filteredWParfumes.map((item) => (
            <div className="product-card" key={item.id}>
              <div className="product-image-container">
                <img src={item.img} alt={item.name} />
              </div>
              <h3>{item.name}</h3>
              <p>{item.price.toFixed(1)}$</p>
              <p>Rating: {item.rating}</p>
              <p>For: {item.category}</p>
              <div className="buttons-container">
              {isAdmin === false ? (
                  <>
                    <button disabled={!item.inStock} className="buy-now-btn" onClick={() => navigate('/payement')}>
                      {item.inStock ? "Buy Now" : "Out of Stock"}
                    </button>
                    <button className="add-to-cart-btn" onClick={() => dispatch({ type: 'ADD_TO_CART', payload: item })}>
                      <FaPlus size={20} />
                    </button>
                  </>
                ) : null}
              </div>
            </div>
          ));
        })()}
      </div>
    </div>
  );
};

export default Home;