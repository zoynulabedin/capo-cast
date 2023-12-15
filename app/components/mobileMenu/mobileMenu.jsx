import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mobile-menu">
      <div className="menu-header flex justify-between">
        <img src="../../../img/logo.png" alt="Logo" className="logo" />
        <div className="menu-icons">
          {isMenuOpen ? (
            <FaTimes className="close-icon" onClick={toggleMenu} />
          ) : (
            <FaBars className="bars-icon" onClick={toggleMenu} />
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div className="menu-content">
          {/* Your menu items go here */}
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            {/* Add more menu items as needed */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
