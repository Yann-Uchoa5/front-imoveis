import React, { useState } from "react";
import "./CustomSelect.css"; // Estilos personalizados

const CustomSelect = ({ options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false); // Controla a visibilidade do dropdown
  const [selectedOption, setSelectedOption] = useState(null); // Armazena a opção selecionada

  // Função para alternar a visibilidade do dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Função para selecionar uma opção
  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Fecha o dropdown após a seleção
  };

  return (
    <div className="custom-select">
      {/* Campo de exibição da opção selecionada */}
      <div className="selected-option" onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : placeholder}
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </div>

      {/* Dropdown com as opções */}
      {isOpen && (
        <div className="dropdown">
          {options.map((option) => (
            <div
              key={option.value}
              className="dropdown-option"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
