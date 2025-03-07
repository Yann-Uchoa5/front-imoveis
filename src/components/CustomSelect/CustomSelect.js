import React, { useState } from "react";
import "./CustomSelect.css";

const CustomSelect = ({
  options,
  placeholder,
  value,
  onChange,
  required
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={`custom-select ${required && !value ? 'required' : ''}`}>
      <div className="selected-option" onClick={() => setIsOpen(!isOpen)}>
        {value ? value.label : placeholder}
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </div>

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