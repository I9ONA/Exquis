import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../CSS/ProductCarts.css';
import { useNavigate } from 'react-router-dom';


const ProductCarts = () => {
  const Cart = useSelector((state) => state.Cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    }
  };

  return (
    <div>
      <h2>Cart</h2>
      <div className="cart-container">
        {Cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          Cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.img} alt={product.name} className="product-image" />
              <div className="product-details">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price.toFixed(2)}</p>
                <p>Quantity: {product.quantity}</p>
                <div className="action-buttons">
                  <button className="delete-btn" onClick={() => handleDelete(product.id)}>Delete</button>
                  <button className="confirm-btn"  onClick={()=>navigate('/payement')}>Confirm</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductCarts;
