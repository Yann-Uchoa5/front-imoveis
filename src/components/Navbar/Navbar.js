import React from 'react';
import './Navbar.css';
import logo from '../../assets/images/logo.png'; // Importe a imagem

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo do site" className="navbar-logo" /> {/* Substitua o texto pela imagem */}
    </nav>
  );
};

export default Navbar;