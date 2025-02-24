import React from "react";
import "./PropertyCard.css";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const PropertyCard = ({ image, title, price, location }) => {
  return (
    <div className="property-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{location}</p>
      <strong>R$ {price}</strong>
      <div className="buttons">
        <button className="whatsapp">
          <FaWhatsapp />
          WhatsApp
        </button>
        <button className="email">
          <FaEnvelope />
          E-mail
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
