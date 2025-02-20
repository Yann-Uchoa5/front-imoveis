import React from "react";
import "./WomanBanner.css";
import banner from "../../assets/images/MulherAsiáticaBanner.png";

const WommanBanner = () => {
  return (
    <div className="banner_container">
      <h1>
        Anuncie seu
        <br />
        <b>Imóvel</b>
      </h1>
      <img src={banner} alt="Anuncie o seu imóvel" className="banner-logo" />
    </div>
  );
};

export default WommanBanner;
