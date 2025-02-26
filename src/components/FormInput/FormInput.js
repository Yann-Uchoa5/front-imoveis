import React from "react";
import "./FormInput.css";

const FormInput = ({ type, placeholder, value, onChange, required }) => {
  return (
    <input
      type={type} // Agora o tipo é genérico
      placeholder={placeholder}
      value={value} // O valor será o valor do estado passado para cada campo
      onChange={onChange} // A função onChange vem do componente pai para atualizar o estado
      required={required}
      className={type === "file" ? "file-input" : "form-input"}
    />
  );
};

export default FormInput;
