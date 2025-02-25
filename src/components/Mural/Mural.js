import React from "react";
import CasaMural from "../../assets/images/CasaMural.png";
import LogoMural from "../../assets/images/LogoMural.png";
import CERTA from "../../assets/images/CERTA.png";
import "./Mural.css";

const Mural = () => {
  return (
    <div className="mural_container">
      <img className="mural-logo" src={LogoMural} alt="Logo do Mural" />
      <h2>
        A gente te ajuda a <br />
        encontrar a <b>CASA</b> <img src={CERTA} alt="Certa logo" /> <br />
        pelo <b className="low-text">preço certo!</b>
      </h2>
      <img className="mural-casa" src={CasaMural} alt="Casa" />
    </div>
  );
};

export default Mural;
