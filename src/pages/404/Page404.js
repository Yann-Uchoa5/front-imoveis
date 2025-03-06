import React from "react";
import { Link } from "react-router-dom";
import "./Page404.css";

const Page404 = () => {
  return (
    <div className="page404-container">
      <div className="page404-content">
        <img
          src="https://img.freepik.com/vetores-gratis/ups-erro-404-com-ilustracao-de-conceito-de-robo-quebrado_114360-5529.jpg"
          alt="Página não encontrada"
          className="page404-image"
        />
        <h1 className="page404-heading">404 - Página Não Encontrada</h1>
        <p className="page404-text">
          Desculpe, a página que você está procurando não existe.
        </p>
        <Link to="/" className="page404-button">
          Voltar para a Página Inicial
        </Link>
      </div>
    </div>
  );
};

export default Page404;
