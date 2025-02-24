import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [tipo, setTipo] = useState("Casa");
  const [cep, setCep] = useState("");

  return (
    <div className="search-container">
      <div className="container">
        <label>Tipo de imóvel</label>
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option>Casa</option>
          <option>Apartamento</option>
          <option>Terreno</option>
        </select>
      </div>

      <div className="container">
        <label>Digite o CEP de onde deseja</label>
        <input
          type="text"
          placeholder="CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
      </div>
      <div className="container gambiarra">
        <label>ㅤ</label>
        <button className="buscar">Buscar</button>
      </div>
    </div>
  );
};

export default SearchBar;
