import React from "react";
import { Link } from "react-router-dom";
import "./MainNavbar.css";
import logo from "../../assets/images/logo.png"; // Importe a imagem

const MainNavbar = () => {
  return (
    <nav className="main_navbar">
      <Link to="">
        <img src={logo} alt="Logo do site" className="main_navbar-logo" />
      </Link>
      <ul>
        <li>
          <Link to="/cadastrar_imovel">Anunciar Imóvel</Link>
        </li>
        <li>
          <Link to="">Listar Imóveis</Link>
        </li>
        <li>
          <Link to="">Lista de Interesses</Link>
        </li>
        <li>
          <Link to="/perfil">Perfil</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavbar;
