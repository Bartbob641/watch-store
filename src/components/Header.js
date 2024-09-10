// src/components/Header.js
import React from 'react';
import './Header.css'; // Assuming the styles are in Header.css

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        XXX
      </div>
      <nav className="nav-links">
        <a href="#">SHOP</a>
        <a href="#">NYHETER</a>
        <a href="#">BÄSTSÄLJARE</a>
        <a href="#">SMYCKEN</a>
        <a href="#">KLOCKOR</a>
        <a href="#">FAQ</a>
      </nav>
      <div className="icons">
        <a href="#" className="icon">
          <i className="fas fa-search"></i> {/* Search Icon */}
        </a>
        <a href="#" className="icon">
          <i className="fas fa-heart"></i> {/* Heart Icon */}
        </a>
        <a href="#" className="icon">
          <i className="fas fa-shopping-bag"></i> {/* Shopping Bag Icon */}
        </a>
        <span className="divider"></span>
        <div className="country">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg" alt="Sweden Flag" className="flag" />
          <span>SE</span>
        </div>
      </div>
    </header>
  );
};

export default Header;