import "./Button.css";

// Esse botão pode ser declarado de duas maneiras diferentes:
// <Button>Nome do botão</Button>
// ou
// <Button title={"Nome do botão"}/>

const Button = ({ title, children }) => {
  return (
    <button type="submit" className="button">
      {title || children}
    </button>
  );
};

export default Button;
