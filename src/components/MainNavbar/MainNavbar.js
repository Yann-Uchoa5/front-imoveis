import React from "react";
import "./MainNavbar.css";
import logo from "../../assets/images/logo.png"; // Importe a imagem

const MainNavbar = () => {
  return (
    <nav className="main_navbar">
      <img src={logo} alt="Logo do site" className="main_navbar-logo" />
      <ul>
        <a href="#anunciar">Anunciar Imóvel</a>
        <a href="#lista_imoveis">Listar Imóveis</a>
        <a href="#lista_interesse">Lista de Interesses</a>
        <a href="#perfil">Perfil</a>
      </ul>
    </nav>
  );
};

export default MainNavbar;
