import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import FormInput from "../../components/FormInput/FormInput";
import "./Login.css";
import hotel from "../../assets/images/hotel.png";
import Button from "../../components/Button/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário:", { email, senha });
  };

  return (
    <div>
      <Navbar />
      <div className="login-wrapper">
        <img src={hotel} alt="Hotel" className="imagem-lado" />
        <div className="login-container">
          <h1>Insira seus dados para Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>E-mail</label>
              <FormInput
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu e-mail"
                required
              />
            </div>

            <div className="form-group">
              <label>Senha</label>
              <FormInput
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Digite sua senha"
                required
              />
            </div>

            {}
            <div className="forgot-password">
              <a href="/recuperar-senha">Esqueceu a senha?</a>
            </div>

            <Button>Entrar</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
