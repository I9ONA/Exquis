import React, { useState, useContext } from 'react';
import { Parfumcontext } from '../context/Parfumcontext';
import '../CSS/Shop.css';
import { FaPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const BestSellers = () => {
  const { isAdmin } = useContext(Parfumcontext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ShopsParfumes = useSelector((state) => state.ShopsParfumes);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const sortedProducts = [...ShopsParfumes].sort((a, b) => b.rating - a.rating);
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = sortedProducts.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_PRODUCT', payload: id });
  };

  const handleUpdate = (id) => {
    const productToUpdate = ShopsParfumes.find(product => product.id === id);
    
    const newName = prompt("Enter new name:", productToUpdate.name);
    const newPrice = prompt("Enter new price:", productToUpdate.price);

    if (newName && newPrice) {
      const updatedProduct = {
        ...productToUpdate,
        name: newName,
        price: parseFloat(newPrice)
      };
      dispatch({ type: 'UPDATE_PRODUCT', payload: { id: productToUpdate.id, data: updatedProduct } });
    }
  };

  const handleAddProduct = () => {
    const newProduct = {
      id: Date.now(),
      name: prompt("Enter product name:"),
      price: parseFloat(prompt("Enter product price:")),
      img: prompt("Enter product image URL:"),
      category: prompt("Enter product category:"),
      rating: parseFloat(prompt("Enter product rating:")),
      inStock: true,
      description: prompt("Enter product description:")
    };

    if (newProduct.name && !isNaN(newProduct.price) && newProduct.img && newProduct.category && !isNaN(newProduct.rating)) {
      dispatch({ type: 'ADD_SHOP_PRODUCT', payload: newProduct });
    } else {
      alert("Please fill in all fields correctly.");
    }
  };

  return (
    <div>
      <h1>The BestSellers Of Our Store</h1>

      {isAdmin && (
        <button className="add-product-btn" onClick={handleAddProduct}>
          Add Product
        </button>
      )}

      <div className="product-carts">
        {currentItems.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="product-image-container">
              <img src={item.img} alt={item.name} />
            </div>
            <h3>{item.name}</h3>
            <p>{item.price.toFixed(1)}$</p>
            <p>Rating: {item.rating}</p>
            <p>For: {item.category}</p>
            <div className="buttons-container">
              {isAdmin ? (
                <>
                  <button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
                  <button className="update-btn" onClick={() => handleUpdate(item.id)}>Update</button>
                </>
              ) : (
                <>
                  <button disabled={!item.inStock} className="buy-now-btn" onClick={() => navigate('/payement')}>
                    {item.inStock ? ' Buy Now' : 'Out of Stock'}
                  </button>
                  <button className="add-to-cart-btn" onClick={() => dispatch({ type: 'ADD_TO_CART ', payload: item })}>
                    <FaPlus size={20} />
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="pagination-buttons">
        <button className="pagination-btn" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button key={page} className={`pagination-btn ${currentPage === page ? 'active' : ''}`} onClick={() => handlePageChange(page)}>{page}</button>
        ))}
        <button className="pagination-btn" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default BestSellers;