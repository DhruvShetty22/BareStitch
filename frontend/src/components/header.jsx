import React from 'react';
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">BareStitch</div>
        <nav className="navigation">
          <a href="#home">HOME</a>
          <a href="#shop" className="active">SHOP</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </nav>
        <div className="user-actions">
          <FiSearch />
          <button className="my-cart-btn">
            MY CART <FiShoppingCart />
          </button>
          <FiUser />
        </div>
      </div>
    </header>
  );
};

export default Header;