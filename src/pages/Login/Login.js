import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import FormInput from "../../components/FormInput/FormInput";
import "./Login.css";
import hotel from "../../assets/images/hotel.png";
import Button from "../../components/Button/Button";

const URL = process.env.REACT_APP_API_URL;

const Login =  () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async  (e) => {
    e.preventDefault();
    console.log("Dados do formulário:", { email, senha });

    try {
      const response = await axios.post(`${URL}/usuarios/login`, {
        email,
        senha,
      });

      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("token", response.data.access_token);
        alert("Usuário logado com sucesso!");
        navigate("/home")
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert("Erro ao logar usuário.");
      }
      console.error("Erro ao logar usuário:", error);
    }
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


            <div className="forgot-password">
              <a href="/recuperar-senha">Esqueceu a senha?</a>
            </div>

            <Button>Entrar</Button>
            
            <Link to="/cadastro" className="login-button">
              Não possui uma conta? Crie agora!
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
