import React from "react";
import "./PropertyCard.css";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import quadrado from "../../assets/images/icones/quadrado.png";
import chuveiro from "../../assets/images/icones/chuveiro.png";
import cama from "../../assets/images/icones/cama.png";

const PropertyCard = ({
  image,
  title,
  price,
  type,
  area,
  banheiros,
  quartos,
}) => {
  return (
    <div className="property-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <div className="property-card_icons">
        <img className="card-icon" src={quadrado} alt="área do imóvel" />
        <label>{area}m</label>
        <img
          className="card-icon"
          src={chuveiro}
          alt="quantidade de banheiros"
        />
        <label>{banheiros}</label>
        <img className="card-icon" src={cama} alt="quantidade de quartos" />
        <label>{quartos}</label>
      </div>
      <p>Disponível para {type === "Compra" ? "compra" : "alugar"}</p>
      <strong>
        R$ {price} {type === "Locação" && <i>por mês</i>}
      </strong>
      <div className="buttons">
        <a href="https://wa.me/5511999999999" rel="noreferrer" target="_blank">
          <button className="whatsapp">
            <FaWhatsapp />
            WhatsApp
          </button>
        </a>
        <a
          href="mailto:casacerta@gmail.com?subject=Assunto%20do%20Email&body=Estou%20interessado!"
          rel="noreferrer"
          target="_blank"
        >
          <button className="email">
            <FaEnvelope />
            E-mail
          </button>
        </a>
      </div>
    </div>
  );
};

export default PropertyCard;
