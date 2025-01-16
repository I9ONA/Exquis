import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';
import { useNavigate } from 'react-router-dom'; 
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import data from '../Data/Navdata';
import { useSelector } from 'react-redux';
const Navbar = ({Fsign , setFsign}) => {
  const [menuActive, setMenuActive] = useState(false);
  const navigate = useNavigate();

  const Cart = useSelector(state => state.Cart);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  const buttonSign = ()=>{
    navigate('/sign');
    setFsign(true)
  }
  return (
    <>
      
      <header>
        <nav>
          <AiIcons.AiOutlineBars className="menu-icon" onClick={toggleMenu} />
          <ul>
            <li className="title">EXQUIS</li>
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/shop">Shop</Link></li>
            <li><Link className="nav-link" to="/contact">Contact</Link></li>
            <li><Link className="nav-link" to="/about">About Us</Link></li>
          </ul>
            <span className="cart-count">{Cart.length}</span>
            <BsIcons.BsCart className="cart" onClick={() => navigate('/cart')} />
          <button className="signup-button" onClick={()=> buttonSign()}>{Fsign?' Sign Up' : 'Sign Out'}</button>
        </nav>
      </header>
      <nav className={menuActive ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
              <button className="menu-bars" onClick={() => { toggleMenu()}}><AiIcons.AiOutlineClose /></button>
          </li>
          {data.map((item, index) => (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
