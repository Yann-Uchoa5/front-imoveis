import React from "react";
import { Link } from "react-router-dom";
import "./MainNavbar.css";
import logo from "../../assets/images/logo.png"; 
import { isAdmin } from "../../utils/auth";

const MainNavbar = () => {
  return (
    <nav className="main_navbar">
      <Link to="/home">
        <img src={logo} alt="Logo do site" className="main_navbar-logo" />
      </Link>
      <ul>
        {
          isAdmin() ? (
            <li>
              <Link to="/cadastrar_imovel">Anunciar Imóvel</Link>
            </li>
          ) : (
            <li>
                <Link to="/home">Home</Link>
            </li>
          )
        }
       
        <li>
          <Link to="/listar_imoveis">Listar Imóveis</Link>
        </li>
        <li>
          <Link to="/perfil">Perfil</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavbar;
